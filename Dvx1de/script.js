// Terminal Typing Animation
const commands = [
    'whoami',
    'cat ~/.profile',
    'systemctl status homelab',
    'docker ps -a',
    'ping security.local',
    'ssh root@server',
    'tail -f /var/log/syslog'
];

let commandIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedTextElement = document.getElementById('typedText');
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseDuration = 2000;

function typeCommand() {
    const currentCommand = commands[commandIndex];
    
    if (isDeleting) {
        typedTextElement.textContent = currentCommand.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedTextElement.textContent = currentCommand.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentCommand.length) {
        setTimeout(() => {
            isDeleting = true;
            typeCommand();
        }, pauseDuration);
        return;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        commandIndex = (commandIndex + 1) % commands.length;
    }
    
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(typeCommand, speed);
}

// Start typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeCommand, 500);
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active Navigation Highlight
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Skill Bar Animation
const skillBarObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBar = entry.target;
            const width = skillBar.getAttribute('data-width');
            
            // Trigger animation
            setTimeout(() => {
                skillBar.style.width = width + '%';
                skillBar.classList.add('animated');
            }, 200);
            
            skillBarObserver.unobserve(skillBar);
        }
    });
}, {
    threshold: 0.5
});

// Observe all skill bars
document.querySelectorAll('.skill-bar-fill').forEach(bar => {
    skillBarObserver.observe(bar);
});

// Fade In Animation for Elements
const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            fadeInObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

// Observe sections and cards
document.querySelectorAll('section, .skill-category, .github-card, .project-card, .contact-card, .highlight-item').forEach(element => {
    fadeInObserver.observe(element);
});

// Parallax Effect for Background
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const bgGrid = document.querySelector('.bg-grid');
    const bgGradient = document.querySelector('.bg-gradient');
    
    if (bgGrid) {
        bgGrid.style.transform = `translateY(${scrollY * 0.3}px)`;
    }
    
    if (bgGradient) {
        bgGradient.style.transform = `translateY(${scrollY * 0.5}px)`;
    }
    
    lastScrollY = scrollY;
});

// Cursor Effect (Optional - Terminal Style)
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});

// Performance: Reduce animations on low-end devices
const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

if (mediaQuery.matches) {
    // Disable animations
    document.documentElement.style.setProperty('--animation-duration', '0s');
}

// Console Easter Egg
console.log('%c Welcome to DVX1DE Terminal ', 'background: #dc2626; color: white; font-size: 20px; padding: 10px;');
console.log('%c System Administrator | Infrastructure Specialist ', 'color: #dc2626; font-size: 14px;');
console.log('%c Type "help" for available commands ', 'color: #6b7280; font-size: 12px;');

// Add help command functionality
window.help = function() {
    console.log('%c Available Commands:', 'color: #dc2626; font-weight: bold; font-size: 14px;');
    console.log('  info()     - Display information about DVX1DE');
    console.log('  skills()   - List technical skills');
    console.log('  contact()  - Get contact information');
    console.log('  clear()    - Clear console');
};

window.info = function() {
    console.log('%c DVX1DE - System Administrator', 'color: #dc2626; font-weight: bold; font-size: 16px;');
    console.log('Role: System Administrator');
    console.log('Focus: Linux/Windows, Networking, Cybersecurity');
    console.log('Tools: Python, Docker, VS Code, iTerm');
    console.log('Learning: Advanced networking, Infrastructure as Code');
};

window.skills = function() {
    console.log('%c Technical Skills:', 'color: #dc2626; font-weight: bold; font-size: 14px;');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('Linux Server Administration  ▓▓▓▓▓▓▓▓▓░ 85%');
    console.log('Windows Server Admin         ▓▓▓▓▓▓▓▓░░ 80%');
    console.log('Docker & Containers          ▓▓▓▓▓▓▓▓▓░ 85%');
    console.log('Network Administration       ▓▓▓▓▓▓▓▓░░ 75%');
    console.log('Python Scripting            ▓▓▓▓▓▓▓▓░░ 75%');
    console.log('Bash Scripting              ▓▓▓▓▓▓▓▓░░ 80%');
    console.log('Cybersecurity               ▓▓▓▓▓▓▓░░░ 70%');
};

window.contact = function() {
    console.log('%c Contact Information:', 'color: #dc2626; font-weight: bold; font-size: 14px;');
    console.log('Email:   info@dvx1de.de');
    console.log('GitHub:  github.com/Dvxide');
    console.log('Twitter: twitter.com/dvx1de');
};

// Loading Animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    // Alt/Option + T = Toggle Theme
    if (e.altKey && e.key === 't') {
        e.preventDefault();
        themeToggle.click();
    }
    
    // Alt/Option + H = Scroll to Home
    if (e.altKey && e.key === 'h') {
        e.preventDefault();
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    }
    
    // Alt/Option + C = Scroll to Contact
    if (e.altKey && e.key === 'c') {
        e.preventDefault();
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }
});

// Mobile Menu (if needed in future)
// This can be expanded for responsive navigation
const createMobileMenu = () => {
    const navLinks = document.querySelector('.nav-links');
    
    if (window.innerWidth <= 768 && !document.querySelector('.mobile-menu-toggle')) {
        const menuToggle = document.createElement('button');
        menuToggle.className = 'mobile-menu-toggle';
        menuToggle.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
        `;
        
        navbar.appendChild(menuToggle);
        
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
};

window.addEventListener('resize', createMobileMenu);
createMobileMenu();

// GitHub Activity Last Updated (Optional)
const updateGitHubTimestamp = () => {
    const githubCards = document.querySelectorAll('.github-card');
    const now = new Date();
    const timeString = now.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    // This could be used to add timestamps to GitHub cards if needed
};

// Call initialization functions
document.addEventListener('DOMContentLoaded', () => {
    highlightNavigation();
    updateGitHubTimestamp();
});

// Service Worker Registration (for PWA - optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js');
    });
}

// Analytics placeholder (if needed)
const trackPageView = (page) => {
    console.log(`Page view tracked: ${page}`);
    // Add your analytics code here
};

// Track initial page view
trackPageView(window.location.pathname);

// Copy Email to Clipboard
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const email = link.href.replace('mailto:', '');
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(email).then(() => {
                // Could show a toast notification here
                console.log('Email copied to clipboard:', email);
            });
        }
    });
});

// Smooth reveal for footer links
const footerLinks = document.querySelectorAll('.footer-column a');
footerLinks.forEach((link, index) => {
    link.style.animationDelay = `${index * 0.05}s`;
});

// Add loading state for GitHub images
document.querySelectorAll('.github-card img').forEach(img => {
    img.addEventListener('load', () => {
        img.classList.add('loaded');
    });
    
    img.addEventListener('error', () => {
        img.closest('.github-card').style.display = 'none';
        console.warn('Failed to load GitHub image:', img.src);
    });
});

// Performance monitoring (optional)
if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page load time: ${pageLoadTime}ms`);
    });
}
