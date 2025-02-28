// Get current year for the footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
}

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add intersection observer for fade-in animations
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    observer.observe(section);
});

// تحسين الرأس عند التمرير
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// قائمة الموبايل
const mobileMenuBtn = document.querySelector('.mobile-menu');
const nav = document.querySelector('nav');

mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// إغلاق القائمة عند النقر على أي رابط
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// إغلاق القائمة عند النقر خارجها
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        nav.classList.remove('active');
    }
});

// إضافة خلفية متحركة
const backgroundAnimation = document.createElement('div');
backgroundAnimation.className = 'background-animation';
document.body.appendChild(backgroundAnimation);

// تفعيل تأثيرات الظهور عند التمرير
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    fadeObserver.observe(section);
});

// تأثير التحويم ثلاثي الأبعاد
document.querySelectorAll('.collection').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// تأثير متقدم للتمرير
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const speed = section.dataset.speed || 0.3;
            section.style.transform = `translateY(${scrolled * speed}px)`;
        }
    });
});

// تبديل اللغة
const languageBtn = document.querySelector('.language-btn');
let currentLang = 'ar';

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    updateContent();
}

function updateContent() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.dataset.translate;
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
    
    // تحديث اتجاه الصفحة
    document.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
}

// حجز الفعاليات
const bookButtons = document.querySelectorAll('.book-event-btn');
const bookingForm = document.getElementById('bookingForm');

bookButtons.forEach(button => {
    button.addEventListener('click', () => {
        bookingForm.style.display = 'block';
        bookingForm.scrollIntoView({ behavior: 'smooth' });
    });
});

const eventBookingForm = document.getElementById('eventBookingForm');
eventBookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // هنا يمكن إضافة كود معالجة النموذج
    alert('تم استلام طلب الحجز بنجاح!');
    bookingForm.style.display = 'none';
});

// تحميل خريطة الموقع ديناميكياً
function loadSitemap() {
    const sitemapContainer = document.querySelector('.sitemap-grid');
    if (sitemapContainer) {
        // يمكن إضافة المزيد من المحتوى ديناميكياً هنا
    }
}

// تحميل الفعاليات ديناميكياً
function loadEvents() {
    const eventsContainer = document.querySelector('.events-grid');
    if (eventsContainer) {
        // يمكن إضافة المزيد من الفعاليات ديناميكياً هنا
    }
}

// تشغيل الوظائف عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    loadSitemap();
    loadEvents();
});

// إضافة الصنف active للرابط الحالي
function setActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// تشغيل الوظيفة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', setActiveLink);

// التحكم في القائمة الجانبية
const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const sidebarOverlay = document.querySelector('.sidebar-overlay');
const closeSidebar = document.querySelector('.close-sidebar');

// فتح القائمة
sidebarToggle.addEventListener('click', () => {
    sidebar.classList.add('active');
    sidebarOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// إغلاق القائمة
function closeSidebarMenu() {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

closeSidebar.addEventListener('click', closeSidebarMenu);
sidebarOverlay.addEventListener('click', closeSidebarMenu);

// إغلاق القائمة عند النقر على الروابط
document.querySelectorAll('.sidebar-nav a').forEach(link => {
    link.addEventListener('click', closeSidebarMenu);
});
