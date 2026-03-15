var offerBar = document.querySelector(".offer-bar")

document.getElementById("offer-close").addEventListener("click",

    function () {
        offerBar.style.display = "none"
    }
)

var sideNavMenu = document.getElementById("side-navbar-activate")
var sidenavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click", function () {
    sidenavbar.style.marginLeft = "0px"
})

document.getElementById("side-navbar-close").addEventListener("click", () => {
    document.querySelector(".side-navbar").style.marginLeft = "-60%"
})



var sliderleftbutton = document.getElementById("slider-left-activate")
var sliderrightbutton = document.getElementById("slider-right-activate")
var sliderimage = document.querySelector(".slider-image-container")
var slidermargin = 0

console.log(sliderleftbutton)

if (sliderrightbutton) {
    sliderrightbutton.addEventListener("click", function () {
        slidermargin = slidermargin + 100
        if (slidermargin > 200) {
            slidermargin = 0
            sliderimage.style.marginLeft = 0;
        } else {
            sliderimage.style.marginLeft = "-" + slidermargin + "vw";
        }
    })
}

if (sliderleftbutton) {
    sliderleftbutton.addEventListener("click", function () {
        if (slidermargin == 0) {
            slidermargin = 200
            sliderimage.style.marginLeft = "-" + slidermargin + "vw";
        } else {
            slidermargin = slidermargin - 100
            sliderimage.style.marginLeft = "-" + slidermargin + "vw";
        }
    })
}

// Drag to scroll for Most Wanted section
const mostWantedContainer = document.querySelector('.most-wanted');
if (mostWantedContainer) {
    let isDown = false;
    let startX;
    let scrollLeft;

    mostWantedContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - mostWantedContainer.offsetLeft;
        scrollLeft = mostWantedContainer.scrollLeft;
    });
    mostWantedContainer.addEventListener('mouseleave', () => {
        isDown = false;
    });
    mostWantedContainer.addEventListener('mouseup', () => {
        isDown = false;
    });
    mostWantedContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - mostWantedContainer.offsetLeft;
        const walk = (x - startX) * 2; // scroll-fast multiplier
        mostWantedContainer.scrollLeft = scrollLeft - walk;
    });
}





var likebuttons = document.querySelectorAll(".like-button")

likebuttons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation(); // Prevent card clicks if any
        
        // Toggle the 'liked' class for color
        btn.classList.toggle("liked");
        
        // Toggle between regular and solid heart
        if (btn.classList.contains("fa-regular")) {
            btn.classList.remove("fa-regular");
            btn.classList.add("fa-solid");
        } else {
            btn.classList.remove("fa-solid");
            btn.classList.add("fa-regular");
        }
    })
})

window.addEventListener("scroll", function () {
    var elements = this.document.querySelectorAll(".initial-scroll-animate")
    elements.forEach((el) => {
        windowHeight = window.innerHeight
        var elbound = el.getBoundingClientRect()


        console.log(windowHeight)
        console.log(elbound.top)
        if (windowHeight > elbound.top - 100) {
            console.log("Hi")
            el.classList.remove("reveal-scroll-animate")

        }

    })

})


//Collections Search and Filter
var searchInput = document.getElementById("search-input");
var productSection = document.querySelector(".products");

if (productSection) {
    var productList = Array.from(productSection.querySelectorAll(".product-card"));
    var checkboxes = document.querySelectorAll('.filter-section input[type="checkbox"]');
    var priceLowBox = document.querySelector('input[name="price"][value="low"]');
    var priceHighBox = document.querySelector('input[name="price"][value="high"]');

    // Handle mutually exclusive price checkboxes
    if (priceLowBox && priceHighBox) {
        priceLowBox.addEventListener('change', function () {
            if (this.checked) priceHighBox.checked = false;
            filterProducts();
        });
        priceHighBox.addEventListener('change', function () {
            if (this.checked) priceLowBox.checked = false;
            filterProducts();
        });
    }

    if (searchInput) {
        searchInput.addEventListener("keyup", filterProducts);
    }

    checkboxes.forEach((checkbox) => {
        // Skip price checkboxes here as they are handled above with mutual exclusion logic, 
        // but we still need them to trigger filter if they are clicked (and not just changed by logic)
        // Actually, the change event will bubble or be caught, so we can just add listener to all.
        // But to avoid double triggering or issues, let's just ensure we call filterProducts.
        if (checkbox.name !== 'price') {
            checkbox.addEventListener("change", filterProducts);
        }
    });

    function filterProducts() {
        var enteredSearch = searchInput ? searchInput.value.toUpperCase() : "";
        
        // Price filters
        var priceLow = priceLowBox && priceLowBox.checked;
        var priceHigh = priceHighBox && priceHighBox.checked;

        var selectedArrivals = Array.from(document.querySelectorAll('input[name="arrivals"]:checked')).map(cb => cb.value);
        var selectedOccasions = Array.from(document.querySelectorAll('input[name="occasion"]:checked')).map(cb => cb.value);
        var selectedColors = Array.from(document.querySelectorAll('input[name="color"]:checked')).map(cb => cb.value);

        var visibleProducts = [];

        productList.forEach((product) => {
            var productName = product.querySelector("h4").textContent.toUpperCase();
            var pArrival = product.getAttribute('data-arrivals');
            var pOccasion = product.getAttribute('data-occasion');
            var pColor = product.getAttribute('data-color');
            
            // Note: data-price-category is kept for backward compatibility if needed, but we sort by data-price now.
            // If you want to filter by price category (low/high) strictly, you can uncomment matchesPrice logic.
            // But usually low/high sort implies showing all but sorting them. 
            // If the UI implies "Show only Low prices", then we need logic for that. 
            // Given the checkboxes are "Low" and "High" under "Price", it likely means Sort Order or Filter Category.
            // The previous logic filtered by category. The user's new logic sorted.
            // Let's implement SORTING based on the user's snippet which had sorting logic.
            
            var matchSearch = productName.indexOf(enteredSearch) >= 0;
            var matchArrival = selectedArrivals.length === 0 || selectedArrivals.includes(pArrival);
            var matchOccasion = selectedOccasions.length === 0 || selectedOccasions.includes(pOccasion);
            var matchColor = selectedColors.length === 0 || selectedColors.includes(pColor);

            if (matchSearch && matchArrival && matchOccasion && matchColor) {
                visibleProducts.push(product);
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });

        // Sort the visible products dynamically if price filter is selected
        if (priceLow || priceHigh) {
            visibleProducts.sort(function (a, b) {
                var priceA = parseFloat(a.getAttribute('data-price') || 0);
                var priceB = parseFloat(b.getAttribute('data-price') || 0);
                if (priceLow) return priceA - priceB;
                if (priceHigh) return priceB - priceA;
                return 0;
            });
        }

        // Append products back in sorted order
        visibleProducts.forEach(function (product) {
            productSection.appendChild(product);
        });
        
        // Keep hidden products in DOM but hidden
        productList.forEach(function (product) {
            if (!visibleProducts.includes(product)) {
                productSection.appendChild(product);
            }
        });

        if (selectedOccasions.includes("formal")) {
            var formalFirst = document.querySelector('.products .product-card[data-occasion="formal"]');
            if (formalFirst && formalFirst.style.display !== "none") {
                // Optional: scroll to it
                // formalFirst.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }
}

// Contact Us Form Submission with Custom Premium Modal
const contactForm = document.querySelector(".contact-form form");

// Create Modal Elements step
function createSuccessModal() {
    const modalHTML = `
        <div class="modal-overlay" id="successModal">
            <div class="modal-content">
                <i class="fa-solid fa-circle-check"></i>
                <h3>Successfully Completed</h3>
                <p>Thank you for reaching out! We'll get back to you soon.</p>
                <button class="modal-close-btn" id="closeModal">OK</button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = document.getElementById("successModal");
    const closeBtn = document.getElementById("closeModal");

    closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
        setTimeout(() => {
            modal.remove(); // Remove from DOM after transition
        }, 300);
    });
}

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name && email && message) {
            createSuccessModal();
            const modal = document.getElementById("successModal");
            // Small timeout to trigger transition
            setTimeout(() => {
                modal.classList.add("active");
            }, 10);
            
            contactForm.reset();
        } else {
            alert("Please fill in all fields.");
        }
    });
}

// Theme Switching Logic
function setTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('theme', themeName);
    
    // Update active state of buttons
    const btns = document.querySelectorAll('.theme-btn');
    btns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.classList.contains(themeName)) {
            btn.classList.add('active');
        }
    });
}

// Load saved theme on page start
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'normal';
    setTheme(savedTheme);
});
