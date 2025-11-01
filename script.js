// Client-side validation for signup form
document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = signupForm.username.value.trim();
            const email = signupForm.email.value.trim();
            const password = signupForm.password.value;
            const confirmPassword = signupForm.confirm_password.value;
            
            // Validation
            if (!username || !email || !password || !confirmPassword) {
                showMessage('All fields are required!', 'error');
                return;
            }
            
            if (username.length < 3) {
                showMessage('Username must be at least 3 characters long!', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showMessage('Please enter a valid email address!', 'error');
                return;
            }
            
            if (password.length < 6) {
                showMessage('Password must be at least 6 characters long!', 'error');
                return;
            }
            
            if (password !== confirmPassword) {
                showMessage('Passwords do not match!', 'error');
                return;
            }
            
            // Save user to localStorage (in a real app, this would be sent to a server)
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            
            // Check if user already exists
            const userExists = users.some(user => user.username === username || user.email === email);
            if (userExists) {
                showMessage('Username or email already exists!', 'error');
                return;
            }
            
            // Add new user
            users.push({
                username: username,
                email: email,
                password: password // In a real app, this should be hashed
            });
            
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('username', username);
            
            showMessage('Account created successfully! Welcome, ' + username + '!', 'success');
            
            // Redirect to index after a short delay
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000);
        });
    }
    
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = loginForm.username.value.trim();
            const password = loginForm.password.value;
            
            // Validation
            if (!username || !password) {
                showMessage('Please enter both username and password!', 'error');
                return;
            }
            
            // Get users from localStorage
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            
            // Find user
            const user = users.find(u => u.username === username && u.password === password);
            if (user) {
                localStorage.setItem('username', username);
                showMessage('Login successful! Welcome, ' + username + '!', 'success');
                
                // Redirect to index after a short delay
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 2000);
            } else {
                showMessage('Invalid username or password!', 'error');
            }
        });
    }
    
    // Show message function
    function showMessage(text, type) {
        const messageDiv = document.getElementById('message');
        if (messageDiv) {
            messageDiv.textContent = text;
            messageDiv.className = 'message ' + type;
            messageDiv.style.display = 'block';
            
            // Hide message after 5 seconds
            setTimeout(() => {
                messageDiv.style.display = 'none';
            }, 5000);
        }
    }
    
    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

// Skincare assistant popup functionality
window.togglePopup = function() {
    const popup = document.getElementById("popup");
    popup.style.display = popup.style.display === "block" ? "none" : "block";
    
    // Clear previous recommendation when opening popup
    if (popup.style.display === "block") {
        const recommendation = document.getElementById("recommendation");
        if (recommendation) {
            recommendation.textContent = "";
        }
        
        // Reset selects
        const skinType = document.getElementById("skinType");
        const concern = document.getElementById("concern");
        if (skinType) skinType.value = "";
        if (concern) concern.value = "";
    }
};

// Product recommendation functionality
window.recommendProduct = function() {
    const skinType = document.getElementById("skinType").value;
    const concern = document.getElementById("concern").value;
    const recommendation = document.getElementById("recommendation");
    
    if (!skinType || !concern) {
        recommendation.textContent = "Please select both skin type and concern.";
        recommendation.style.color = "#e53935";
        return;
    }
    
    // Enhanced recommendation logic with detailed descriptions
    const recommendations = {
        "oily-acne": {
            product: "🌿 Neem & Aloe Soap",
            benefit: "for acne control",
            description: "Neem's antibacterial properties fight acne-causing bacteria while aloe vera soothes inflammation. Perfect for oily, acne-prone skin."
        },
        "oily-oil-control": {
            product: "🍊 Orange & Cinnamon Soap",
            benefit: "for oil control",
            description: "Citrus oils help regulate sebum production while cinnamon provides a refreshing, energizing scent. Controls excess oil without over-drying."
        },
        "oily-glow": {
            product: "🍋 Lemon & Tea Tree Soap",
            benefit: "for brightening",
            description: "Lemon's natural acids gently exfoliate dull skin while tea tree oil balances oil production. Reveals a brighter, more even complexion."
        },
        "oily-dandruff": {
            product: "🍋 Lemon & Tea Tree Shampoo",
            benefit: "for oily scalp and dandruff",
            description: "Antifungal tea tree oil eliminates dandruff while lemon refreshes and clarifies the scalp. Perfect for oily hair with flakiness."
        },
        "dry-glow": {
            product: "🥛 Milk & Honey Soap",
            benefit: "for softness and glow",
            description: "Rich milk proteins and moisturizing honey deeply nourish dry skin. Leaves skin soft, supple, and naturally glowing."
        },
        "dry-dandruff": {
            product: "🌿 Aloe & Neem Shampoo",
            benefit: "for dandruff control",
            description: "Soothing aloe vera moisturizes dry, flaky scalp while neem's antifungal properties eliminate dandruff at the root."
        },
        "dry-calm": {
            product: "🌸 Chamomile & Lavender Soap",
            benefit: "for soothing dry skin",
            description: "Chamomile reduces irritation while lavender promotes relaxation. Perfect for sensitive, dry skin that needs gentle care."
        },
        "sensitive-calm": {
            product: "🌿 Basil Soap",
            benefit: "for calm and sensitive skin",
            description: "Basil's anti-inflammatory properties soothe sensitive skin while providing gentle cleansing. Reduces redness and irritation."
        },
        "sensitive-glow": {
            product: "🌹 Rose & Oatmeal Soap",
            benefit: "for gentle exfoliation",
            description: "Finely ground oatmeal gently exfoliates dead skin cells while rose nourishes and balances sensitive skin."
        },
        "sensitive-dandruff": {
            product: "🌿 Tea Tree & Aloe Shampoo",
            benefit: "for sensitive scalp",
            description: "Gentle tea tree oil fights dandruff without irritating sensitive scalp. Aloe vera provides moisture and soothing relief."
        },
        "normal-glow": {
            product: "🌷 Rose & Tulsi Soap",
            benefit: "for natural glow",
            description: "Rose petals brighten complexion while tulsi (holy basil) purifies skin. Perfect for maintaining healthy, radiant skin."
        },
        "normal-acne": {
            product: "🌿 Neem & Turmeric Soap",
            benefit: "for clear skin",
            description: "Neem fights acne bacteria while turmeric's anti-inflammatory properties reduce breakouts and even skin tone."
        },
        "normal-oil-control": {
            product: "🍊 Citrus Bliss Soap",
            benefit: "for balanced oil",
            description: "A blend of citrus oils that gently balances sebum production without over-drying. Keeps normal skin fresh and clean."
        },
        "normal-dandruff": {
            product: "🌿 Hibiscus & Amla Shampoo",
            benefit: "for healthy scalp",
            description: "Hibiscus strengthens hair roots while amla nourishes the scalp. Promotes healthy hair growth and eliminates dandruff."
        }
    };
    
    const key = `${skinType}-${concern}`;
    const product = recommendations[key];
    
    if (product) {
        recommendation.innerHTML = `<strong>${product.product} - ${product.benefit}</strong><br><small>${product.description}</small>`;
        recommendation.style.color = "#1b5e20";
    } else {
        recommendation.textContent = "🌿 Our herbal experts recommend a custom blend for your unique needs! Contact us for personalized advice.";
        recommendation.style.color = "#1b5e20";
    }
};