
    // Existing function for opening resume modal
    function openResume() {
        document.getElementById('resumeModal').classList.remove('hidden');
    }
    function closeResume() {
        document.getElementById('resumeModal').classList.add('hidden');
    }

    // NEW: Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // NEW: Back to Top button functionality
    const backToTopBtn = document.getElementById('backToTopBtn');

    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            backToTopBtn.style.display = "flex"; // Show the button
        } else {
            backToTopBtn.style.display = "none"; // Hide the button
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // NEW: Form submission feedback (basic example)
    document.querySelector('#contact form').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent actual form submission for this example

        // Simulate form submission
        setTimeout(() => {
            alert('Thank you for your message! I will get back to you soon.');
            this.reset(); // Clear the form
        }, 500);
    });

    // NEW: Project image paths - IMPORTANT: Update these to actual image URLs or correct relative paths
    // For your local images, make sure they are in the same directory as your HTML file
    // or provide the correct relative path. For example:
    // If 'OIP.jpeg' is in the same folder as index.html, the path is simply "OIP.jpeg"
    // If 'ifsc.jpeg' is in a subfolder called 'images', the path would be "images/ifsc.jpeg"
    // Currently, your IFSC image path is "C:\Users\daxp1\OneDrive\Desktop\port\ifsc.jpeg"
    // This will NOT work when deployed or even locally if not opened via file system.
    // You need to place your images in a web-accessible location (e.g., same folder or 'images' subfolder)
    // and update the `src` attribute accordingly.
    // Example fix for the IFSC image (assuming it's in the same folder as your HTML):
    document.querySelector('.project-card:nth-of-type(2) img').src = "ifsc.jpeg";

