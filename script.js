// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking a link
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Copy Code Functionality
function copyCode() {
    const codeContent = document.getElementById('code-content').textContent;
    const copyBtn = document.getElementById('copy-btn');
    
    navigator.clipboard.writeText(codeContent).then(() => {
        // Change button text temporarily
        const originalText = copyBtn.textContent;
        copyBtn.textContent = '✓ Copied!';
        copyBtn.classList.add('bg-green-500');
        copyBtn.classList.remove('bg-primary-500', 'hover:bg-primary-600');
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.classList.remove('bg-green-500');
            copyBtn.classList.add('bg-primary-500', 'hover:bg-primary-600');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy code:', err);
        copyBtn.textContent = '❌ Failed';
        setTimeout(() => {
            copyBtn.textContent = '📋 Copy';
        }, 2000);
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Add scroll effect to navigation
let lastScroll = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        nav.classList.remove('shadow-md');
    } else {
        nav.classList.add('shadow-md');
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.diff-card, .use-case-card, .step-card, .feature-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

// Demo button click handlers (update these URLs when you have a live demo)
document.querySelectorAll('a[href="#"]').forEach(link => {
    const text = link.textContent.toLowerCase();
    if (text.includes('demo') || text.includes('get started') || text.includes('try')) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Update this URL to your actual demo/app URL
            // window.location.href = 'https://demo.ragfortress.com';
            alert('Demo link will be available soon! Star the repo on GitHub to stay updated.');
        });
    }
});
