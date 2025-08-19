# 🚀 Dokku Deployment Guide

Bu rehber Citizen Landing Page'i Dokku ile deploy etmek için hazırlanmıştır.

## 📋 Ön Gereksinimler

- Dokku yüklü bir sunucu
- Git repository access
- SSH access

## 🛠️ Deployment Adımları

### 1. Dokku Sunucusunda App Oluştur

```bash
# Sunucuda app oluştur
dokku apps:create citizen-landing

# Domain ayarla (opsiyonel)
dokku domains:set citizen-landing yourdomain.com
```

### 2. Environment Variables (Opsiyonel)

```bash
# Production optimizations
dokku config:set citizen-landing NODE_ENV=production
dokku config:set citizen-landing NEXT_TELEMETRY_DISABLED=1

# Custom port (varsayılan 3000)
dokku config:set citizen-landing PORT=3000
```

### 3. Git Remote Ekle ve Deploy Et

```bash
# Local'de git remote ekle
git remote add dokku dokku@your-server.com:citizen-landing

# Deploy et
git push dokku main
```

### 4. SSL Certificate (Let's Encrypt)

```bash
# SSL plugin yükle (eğer yoksa)
dokku plugin:install https://github.com/dokku/dokku-letsencrypt.git

# SSL certificate al
dokku letsencrypt:enable citizen-landing
```

### 5. Health Check & Monitoring

```bash
# Health check durumunu kontrol et
dokku checks:report citizen-landing

# Logs'u kontrol et
dokku logs citizen-landing --tail

# App durumunu kontrol et
dokku ps:report citizen-landing
```

## 🔧 Port Yapılandırması

Dockerfile'da `EXPOSE 3000` tanımlı olduğu için Dokku otomatik olarak:
- Port 3000'i expose edecek
- HTTP traffic'i port 3000'e yönlendirecek

Manuel port mapping gerekirse:

```bash
# Port mapping ekle
dokku proxy:ports-add citizen-landing http:80:3000

# HTTPS port mapping
dokku proxy:ports-add citizen-landing https:443:3000

# Default port mapping'i kaldır
dokku proxy:ports-remove citizen-landing http:3000:3000
```

## 📊 Resource Limits

```bash
# Memory limit (önerilen: 512MB)
dokku resource:limit citizen-landing --memory 512m

# CPU limit
dokku resource:limit citizen-landing --cpu-quota 100000
```

## 🔄 Update Deployment

```bash
# Yeni değişiklikleri deploy et
git add .
git commit -m "Update: feature description"
git push dokku main
```

## 🐛 Troubleshooting

### Build Fails

```bash
# Build logs kontrol et
dokku logs citizen-landing --num 100

# Container'a bağlan
dokku enter citizen-landing web
```

### Port Issues

```bash
# Port mapping'leri kontrol et
dokku proxy:ports-report citizen-landing

# Health check'i kontrol et
curl -I http://your-domain.com
```

### Performance Issues

```bash
# Memory kullanımı kontrol et
dokku resource:report citizen-landing

# Process durumunu kontrol et
dokku ps:report citizen-landing
```

## 🌟 Özellikler

✅ **Multi-stage Docker build** - Optimize edilmiş image boyutu  
✅ **Security** - Non-root user  
✅ **Health checks** - Container monitoring  
✅ **Static assets** - Public files optimize edilmiş  
✅ **Environment variables** - Production ready  
✅ **Alpine Linux** - Küçük base image  

## 📱 Live URL

Deploy edildikten sonra uygulamanız şurada canlı olacak:
- `http://your-domain.com`
- veya `http://citizen-landing.your-dokku-domain.com`

## 🔗 Useful Commands

```bash
# App'i restart et
dokku ps:restart citizen-landing

# App'i stop/start et
dokku ps:stop citizen-landing
dokku ps:start citizen-landing

# App'i sil
dokku apps:destroy citizen-landing
```