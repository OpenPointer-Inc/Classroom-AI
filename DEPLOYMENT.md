# Deployment Guide for ClassroomAI

This guide covers deploying ClassroomAI to various platforms.

## ✅ Pre-Deployment Checklist

- [x] **Build passes successfully** - No TypeScript or build errors
- [x] **Production build created** - All routes compile correctly
- [x] **Docker configuration** - Ready for containerized deployment
- [x] **Static optimization** - All pages prerendered as static content
- [x] **Next.js config** - Configured with `output: "standalone"` for Docker/Node deployments

## 🚀 Deployment Options

### 1. Vercel (Recommended for Next.js)

Vercel is the easiest option for Next.js applications:

#### Steps:
1. **Push to GitHub** (✅ Already done!)
2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import `OpenPointer-Inc/Classroom-AI`
   - Vercel auto-detects Next.js settings
3. **Configure Environment Variables** (if any)
4. **Deploy!**

**Benefits:**
- Automatic deployments on push
- Edge CDN distribution
- Zero configuration needed
- Free for personal/team projects

---

### 2. Azure App Service

Since this is configured for Azure:

#### Steps:
1. **Using Azure Portal:**
   ```bash
   # Install Azure CLI if not already installed
   curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
   
   # Login to Azure
   az login
   
   # Create a resource group (if needed)
   az group create --name ClassroomAI-RG --location eastus
   
   # Create App Service plan
   az appservice plan create --name ClassroomAI-Plan --resource-group ClassroomAI-RG --sku B1 --is-linux
   
   # Create web app
   az webapp create --name classroom-ai-app --resource-group ClassroomAI-RG --plan ClassroomAI-Plan --runtime "NODE:20-lts"
   
   # Configure deployment from GitHub
   az webapp deployment source config --name classroom-ai-app --resource-group ClassroomAI-RG \
     --repo-url https://github.com/OpenPointer-Inc/Classroom-AI --branch main --manual-integration
   
   # Set startup command
   az webapp config set --name classroom-ai-app --resource-group ClassroomAI-RG --startup-file "node server.js"
   ```

2. **Using Azure DevOps:**
   - Create a pipeline using the included config
   - Connect to your GitHub repository
   - Deploy automatically on push

---

### 3. Docker Deployment

The project includes a production-ready `dockerfile`.

#### Build and Run Locally:
```bash
# Build the Docker image
docker build -t classroom-ai .

# Run the container
docker run -p 3000:3000 classroom-ai
```

#### Deploy to Docker Hub:
```bash
# Tag the image
docker tag classroom-ai openpointer/classroom-ai:latest

# Push to Docker Hub
docker push openpointer/classroom-ai:latest
```

#### Deploy to Cloud Providers:
- **AWS ECS/Fargate**
- **Google Cloud Run**
- **Azure Container Instances**
- **DigitalOcean App Platform**

---

### 4. Self-Hosted (VPS/Dedicated Server)

#### Requirements:
- Node.js 20+
- PM2 (for process management)

#### Steps:
```bash
# On your server
git clone https://github.com/OpenPointer-Inc/Classroom-AI.git
cd Classroom-AI

# Install dependencies
npm ci --production

# Build the application
npm run build

# Install PM2
npm install -g pm2

# Start with PM2
pm2 start npm --name "classroom-ai" -- start

# Save PM2 configuration
pm2 save
pm2 startup
```

#### Nginx Configuration:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

### 5. Netlify

While Vercel is recommended, Netlify also supports Next.js:

#### Steps:
1. Push to GitHub (done)
2. Import to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Install Next.js plugin automatically

---

## 🔒 Environment Variables

If you need environment variables:

1. Copy `.env.example` to `.env.local` for local development
2. For production, configure in your hosting platform:
   - **Vercel:** Project Settings → Environment Variables
   - **Azure:** Configuration → Application Settings
   - **Docker:** Use `--env-file` or `-e` flags

---

## 📊 Performance Optimization

The build is already optimized:
- ✅ Static pre-rendering
- ✅ Automatic code splitting
- ✅ Image optimization (Next.js built-in)
- ✅ Standalone output for minimal Docker size

### Additional Optimizations:
1. **Enable compression** in your web server
2. **Set up CDN** for static assets
3. **Configure caching headers**
4. **Monitor with analytics** (Vercel Analytics, Google Analytics, etc.)

---

## 🔍 Post-Deployment Verification

After deploying, verify:
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Images and assets load
- [ ] Responsive design works on mobile
- [ ] No console errors
- [ ] SEO meta tags present

---

## 📈 Continuous Deployment

### GitHub Actions (Already configured for Azure)

The project may have CI/CD workflows. Check `.github/workflows/` for existing automation.

### Recommended Workflow:
1. Push to `main` branch
2. Automatic build & test
3. Deploy to production
4. Notification on success/failure

---

## 🆘 Troubleshooting

### Build Fails
- Check Node.js version (20+)
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

### Runtime Errors
- Check environment variables
- Verify all required assets are included
- Check server logs

### Performance Issues
- Enable caching
- Use CDN for static files
- Monitor with tools like Lighthouse

---

## 📞 Support

For deployment issues:
- Check Next.js docs: https://nextjs.org/docs/deployment
- Azure docs: https://learn.microsoft.com/azure/app-service/
- Open an issue: https://github.com/OpenPointer-Inc/Classroom-AI/issues

---

**Current Status:** ✅ Ready for deployment!

The project has been successfully built and is ready to be deployed to your platform of choice.
