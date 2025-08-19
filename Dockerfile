# ==========================================
# Multi-stage Dockerfile for Citizen Landing Page
# Optimized for Dokku deployment
# ==========================================

# ==========================================
# Base Image
# ==========================================
FROM node:18-alpine AS base

# Install dependencies for Alpine
RUN apk add --no-cache \
    libc6-compat \
    curl \
    && rm -rf /var/cache/apk/*

WORKDIR /app

# ==========================================
# Dependencies Stage
# ==========================================
FROM base AS deps

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production --frozen-lockfile && \
    npm cache clean --force

# ==========================================
# Builder Stage  
# ==========================================
FROM base AS builder

WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy source code
COPY . .

# Set build environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Build the application
RUN npm run build

# ==========================================
# Production Stage
# ==========================================
FROM node:18-alpine AS runner

WORKDIR /app

# Install curl for health checks
RUN apk add --no-cache curl && \
    rm -rf /var/cache/apk/*

# Set production environment
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy public assets
COPY --from=builder /app/public ./public

# Create .next directory with correct permissions
RUN mkdir .next && \
    chown nextjs:nodejs .next

# Copy built application from builder stage
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to non-root user
USER nextjs

# CRITICAL FOR DOKKU: Expose the port your app listens on
EXPOSE 3000

# Set port and hostname environment variables
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Health check for container monitoring
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
    CMD curl -f http://localhost:3000/api/health || curl -f http://localhost:3000/ || exit 1

# Start the application
CMD ["node", "server.js"]

# ==========================================
# Build Information
# ==========================================
LABEL maintainer="Citizen Landing Team"
LABEL version="1.0.0"
LABEL description="Citizen Landing Page - Next.js 14 App"
LABEL build-date=""