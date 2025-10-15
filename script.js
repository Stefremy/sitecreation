// ===================================
// MODERN JAVASCRIPT
// Best Practices & Suggestions Included
// ===================================

/*
   SUGGESTION 1: Use 'use strict' mode
   - Catches common coding errors
   - Prevents use of undeclared variables
*/
'use strict';

/*
   SUGGESTION 2: DOMContentLoaded Event
   - Ensures DOM is fully loaded before running scripts
   - Prevents errors from accessing elements before they exist
*/
document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // MOBILE NAVIGATION TOGGLE
    // ===================================
    
    /*
       SUGGESTION 3: Use const/let instead of var
       - Better scoping rules
       - Prevents accidental reassignment with const
    */
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Add animation to hamburger icon
            hamburger.classList.toggle('active');
        });
        
        /*
           SUGGESTION 4: Close menu when clicking on a link
           - Better mobile user experience
        */
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
    
    // ===================================
    // SMOOTH SCROLLING FOR NAVIGATION
    // ===================================
    
    /*
       SUGGESTION 5: Enhance smooth scrolling
       - Additional support for older browsers
       - Smooth animation for anchor links
    */
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                e.preventDefault();
                
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ===================================
    // FORM VALIDATION & SUBMISSION
    // ===================================
    
    /*
       SUGGESTION 6: Client-side form validation
       - Provides immediate feedback to users
       - Reduces unnecessary server requests
    */
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validate form
            if (!validateForm(name, email, message)) {
                return;
            }
            
            // If validation passes, show success message
            showMessage('Thank you! Your message has been sent successfully.', 'success');
            
            // Reset form
            contactForm.reset();
            
            /*
               SUGGESTION 7: In production, send data to server
               - Replace this with actual API call
               Example:
               fetch('/api/contact', {
                   method: 'POST',
                   headers: { 'Content-Type': 'application/json' },
                   body: JSON.stringify({ name, email, message })
               });
            */
        });
    }
    
    /*
       SUGGESTION 8: Separate validation logic
       - Makes code more maintainable
       - Easy to test independently
    */
    function validateForm(name, email, message) {
        // Check if fields are empty
        if (name === '' || email === '' || message === '') {
            showMessage('Please fill in all fields.', 'error');
            return false;
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return false;
        }
        
        // Validate name length
        if (name.length < 2) {
            showMessage('Name must be at least 2 characters long.', 'error');
            return false;
        }
        
        // Validate message length
        if (message.length < 10) {
            showMessage('Message must be at least 10 characters long.', 'error');
            return false;
        }
        
        return true;
    }
    
    /*
       SUGGESTION 9: User feedback function
       - Provides clear feedback to users
       - Improves user experience
    */
    function showMessage(message, type) {
        // Remove any existing messages
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create message element
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message ${type}`;
        messageDiv.textContent = message;
        
        // Style the message
        messageDiv.style.padding = '12px';
        messageDiv.style.marginTop = '1rem';
        messageDiv.style.borderRadius = '5px';
        messageDiv.style.textAlign = 'center';
        messageDiv.style.fontWeight = '500';
        
        if (type === 'success') {
            messageDiv.style.background = '#d4edda';
            messageDiv.style.color = '#155724';
            messageDiv.style.border = '1px solid #c3e6cb';
        } else {
            messageDiv.style.background = '#f8d7da';
            messageDiv.style.color = '#721c24';
            messageDiv.style.border = '1px solid #f5c6cb';
        }
        
        // Insert message after form
        contactForm.appendChild(messageDiv);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }
    
    // ===================================
    // SCROLL ANIMATIONS
    // ===================================
    
    /*
       SUGGESTION 10: Intersection Observer for animations
       - Modern, performant way to detect element visibility
       - Better than scroll event listeners
    */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // ===================================
    // ADDITIONAL ENHANCEMENTS
    // ===================================
    
    /*
       SUGGESTION 11: Add active state to navigation
       - Shows current section in navigation
       - Improves user orientation
    */
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
});

/*
   ADDITIONAL SUGGESTIONS FOR IMPROVEMENT:
   
   1. Add error handling with try-catch blocks for production
   2. Implement lazy loading for images to improve performance
   3. Add loading states for asynchronous operations
   4. Consider using a module bundler (webpack, Vite) for larger projects
   5. Implement proper state management for complex applications
   6. Add unit tests for critical functions
   7. Use TypeScript for better type safety in larger projects
   8. Implement proper security measures (CSRF tokens, input sanitization)
   9. Add analytics tracking for user interactions
   10. Consider using a frontend framework (React, Vue, Svelte) for complex UIs
   11. Implement service workers for offline functionality
   12. Add proper error logging and monitoring
*/
