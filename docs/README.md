# DVXIDE - System Administrator Portfolio

Professional portfolio website for DVX1DE, showcasing system administration expertise, infrastructure management, and technical skills.

## 🚀 Features

- **Modern Design**: Clean, professional design with excellent contrast
- **Animated Terminal**: Live typing animation showcasing common system commands
- **GitHub Integration**: Real-time GitHub activity and contribution graphs
- **Skill Visualization**: Interactive skill bars with animations
- **Responsive**: Fully responsive design for all devices
- **Dark/Light Mode**: Theme toggle with persistence
- **Performance Optimized**: Fast loading times with minimal dependencies

## 📋 Technologies

- HTML5
- CSS3 (with CSS Variables for theming)
- Vanilla JavaScript (no frameworks)
- Google Fonts (JetBrains Mono, Space Grotesk)
- GitHub Stats API

## 🎨 Design Features

- High contrast for better readability
- Terminal-style aesthetics
- Smooth animations and transitions
- Professional color scheme
- Accessibility-focused

## 📦 File Structure

```
.
├── index.html          # Main website
├── styles.css          # All styling
├── script.js           # Interactive features
├── 404.html            # Custom 404 error page
├── logo.jpg            # Profile image
├── CNAME               # Custom domain configuration
└── README.md           # This file
```

## 🔧 Setup Instructions

### Local Development

1. Clone or download the files
2. Open `index.html` in a web browser
3. No build process required!

### GitHub Pages Deployment

1. Create a new GitHub repository
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch"
5. Choose "main" branch and "/" (root) folder
6. Click Save

### Custom Domain (Optional)

If you want to use your custom domain (www.dvx1de.de):

1. In your domain provider's DNS settings, add these records:
   ```
   Type: CNAME
   Name: www
   Value: yourusername.github.io
   ```

2. Make sure the `CNAME` file contains: `www.dvx1de.de`

3. In GitHub repository settings > Pages:
   - Enter your custom domain: `www.dvx1de.de`
   - Check "Enforce HTTPS" (after DNS propagation)

## 🛠️ 404 Page Setup

Your existing 404.html page is already great! To make it work on GitHub Pages:

### Option 1: GitHub Pages Automatic 404 (Recommended)

GitHub Pages automatically serves your `404.html` file when a page is not found. Just make sure:

1. The file is named exactly `404.html`
2. It's in the root directory of your repository
3. That's it! GitHub handles the rest automatically.

### Option 2: Custom Server Configuration (For other hosts)

If you're using a custom server (not GitHub Pages), you need to configure it:

**For Apache (.htaccess):**
```apache
ErrorDocument 404 /404.html
```

**For Nginx:**
```nginx
error_page 404 /404.html;
location = /404.html {
    internal;
}
```

**For Node.js/Express:**
```javascript
app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/404.html');
});
```

### Testing Your 404 Page

After deployment, test it by visiting a non-existent page:
- `https://www.dvx1de.de/this-page-does-not-exist`
- `https://yourusername.github.io/random-page`

## 🎯 Customization

### Updating Content

1. **Personal Information**: Edit the text in `index.html`
2. **Skills Percentages**: Modify the `data-width` attributes in skill bars
3. **GitHub Username**: Change `Dvxide` to your username in the GitHub section
4. **Colors**: Adjust CSS variables in `:root` in `styles.css`

### Color Scheme

Main colors are defined in CSS variables:
```css
--accent-primary: #dc2626;    /* Red accent */
--accent-secondary: #ef4444;  /* Lighter red */
--bg-primary: #0a0e27;        /* Dark background */
--text-primary: #e4e6eb;      /* Light text */
```

### Terminal Commands

Edit the typing animation in `script.js`:
```javascript
const commands = [
    'whoami',
    'cat ~/.profile',
    'systemctl status homelab',
    // Add your own commands here
];
```

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## ⚡ Performance

- Minimal external dependencies
- Lazy loading for GitHub images
- Optimized animations
- Fast loading times

## 🔐 Security

- No inline scripts
- External links open in new tabs
- Content Security Policy friendly
- No sensitive data exposure

## 🐛 Known Issues

- GitHub contribution graph might load slowly on slower connections
- Theme toggle requires localStorage (won't persist in private browsing)

## 📝 Updates & Maintenance

### To Update Projects:
Edit the project cards in the projects section of `index.html`

### To Add New Skills:
1. Copy a skill category in `index.html`
2. Update the title, icon, and skill bars
3. Adjust percentages as needed

### To Change Social Links:
Update the href attributes in the contact section and footer

## 🤝 Contributing

This is a personal portfolio website. Feel free to fork and adapt for your own use!

## 📄 License

Free to use for personal portfolios. Please customize it to make it your own!

## 🔗 Live Demo

Visit: [www.dvx1de.de](https://www.dvx1de.de)

## 📧 Contact

- Email: contact@dvx1de.de
- GitHub: [@Dvxide](https://github.com/Dvxide)
- Twitter: [@dvxide](https://twitter.com/dvxide)

---

Built by DVXIDE

Last Updated: January 2026
