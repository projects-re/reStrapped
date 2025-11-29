/**
 * ReStrapped Website Main Logic
 * Handles interactions for the static bootstrapper site.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    console.log("ReStrapped System Initialized.");

    // DOM Elements
    const notifyBtn = document.getElementById('notifyBtn');
    const toast = document.getElementById('toast');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    // --- Toast Notification System ---
    if (notifyBtn) {
        notifyBtn.addEventListener('click', () => {
            showToast();
        });
    }

    function showToast() {
        if (!toast) return;

        // Reset animation if clicked rapidly
        toast.classList.remove('show');
        void toast.offsetWidth; // Trigger reflow

        // Show toast
        toast.classList.add('show');

        // Hide after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    // --- Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Mobile Menu Toggle (Basic) ---
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            // Toggle visibility logic here if you add a mobile menu drawer later
            alert("Mobile menu clicked - expand implementation pending.");
        });
    }

    // --- Navbar Scroll Effect (Optional) ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

});
