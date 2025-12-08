# RAG Fortress Landing Page

Professional landing page for RAG Fortress - built with HTML, CSS (Tailwind), and vanilla JavaScript.

## Features

- 🎨 Clean, modern design with gradient hero section
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast loading with Tailwind CDN
- 🎯 Optimized for conversions
- 🔍 SEO-friendly markup
- ♿ Accessible navigation
- 🎭 Smooth animations and interactions

## Structure

```
rag_fortress_landing/
├── index.html          # Main landing page
├── styles.css          # Custom styles (extends Tailwind)
├── script.js           # Interactive functionality
└── README.md          # This file
```

## Development

### Local Development

Simply open `index.html` in your browser. No build step required!

```bash
# Option 1: Direct file open
open index.html  # Mac
start index.html # Windows

# Option 2: Local server (recommended)
python -m http.server 8000
# Visit http://localhost:8000
```

### Using Live Server (VS Code)

1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

## Deployment

### GitHub Pages (Recommended)

1. Push to GitHub repository:
```bash
git add .
git commit -m "initial landing page"
git remote add origin https://github.com/nurudeen19/rag-fortress-landing.git
git branch -M main
git push -u origin main
```

2. Go to repository Settings > Pages
3. Select `main` branch and `/root` folder
4. Save and wait for deployment (usually 1-2 minutes)
5. Your site will be live at: `https://nurudeen19.github.io/rag-fortress-landing`

### Using Custom Domain (Optional)

1. Add a `CNAME` file with your domain name
2. Update DNS records to point to GitHub Pages
3. Enable HTTPS in Settings > Pages

### Alternative: Netlify

1. Drag and drop the folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect via Git for automatic deployments

### Alternative: Cloudflare Pages

1. Connect your GitHub repo
2. Build settings:
   - Build command: (leave empty)
   - Build output directory: /
3. Deploy

## Customization

### Update Demo URLs

Edit the demo button links in `script.js`:

```javascript
// Update this URL to your actual demo
window.location.href = 'https://demo.ragfortress.com';
```

### Update Repository URLs

Replace all instances of `nurudeen19/rag-fortress` with your GitHub username/repo.

### Modify Colors

Colors are defined in the Tailwind config in `index.html`:

```javascript
colors: {
    primary: {
        500: '#667eea',  // Main purple
        // ...
    }
}
```

### Add Analytics

Add Google Analytics or Plausible before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Performance Optimization

### Production Checklist

- [ ] Replace Tailwind CDN with local build for production
- [ ] Add favicon and apple-touch-icon
- [ ] Optimize images (WebP format)
- [ ] Add Open Graph images
- [ ] Set up custom domain
- [ ] Enable CDN caching
- [ ] Add schema.org structured data
- [ ] Set up analytics
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit

### Build Tailwind Locally (Optional)

For production, build Tailwind locally to reduce file size:

```bash
npm init -y
npm install -D tailwindcss
npx tailwindcss init

# Create tailwind.config.js
# Add build script to package.json
npx tailwindcss -i ./styles.css -o ./dist/output.css --minify
```

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- iOS Safari (last 2 versions)
- Android Chrome (last 2 versions)

## License

MIT License - Same as RAG Fortress main project

## Links

- Main Repo: https://github.com/nurudeen19/rag-fortress
- Documentation: https://github.com/nurudeen19/rag-fortress/blob/main/README.md
- Issues: https://github.com/nurudeen19/rag-fortress/issues
