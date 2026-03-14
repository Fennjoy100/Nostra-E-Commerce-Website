# 👗 Nostra – E-commerce Fashion Store

A premium and responsive fashion e-commerce website built using HTML5, Vanilla CSS, and JavaScript. This project focuses on clean UI design, theme customization, and smooth user interactions.

## 🚀 [Live Demo](https://n-fashion-store.vercel.app/)

## 📌 Project Overview

Nostra is a modern front-end e-commerce project that showcases:

*   **Hero landing section** with high-quality visual appeal
*   **Theme Management System** (Normal, Dark, and Light modes)
*   **Product Discovery** with real-time search and category filtering
*   **Custom Interactive Elements** like success modals and scroll-reveal animations
*   **Responsive layout** optimized for mobile, tablet, and desktop
*   **Premium Brands section** with grayscale-to-color transitions

This project demonstrates strong fundamentals in UI/UX design, DOM manipulation, and state persistence using LocalStorage.

## 🛠 Technologies Used
*   **HTML5**: Semantic structure and layout
*   **Vanilla CSS**: Custom styling, grid/flexbox layouts, and CSS variables for themes
*   **JavaScript (ES6+)**: DOM manipulation, theme persistence, and form validation
*   **Font Awesome**: Premium iconography
*   **Google Fonts**: Typography (Poppins)
*   **Responsive Design**: Mobile-first media queries

## ✨ Features

### 🔹 Navigation Bar
*   **Balanced Layout**: Logo, centered theme indicators (visible in settings), and navigation links.
*   **Responsive Menu**: Slide-out sidebar for mobile users.
*   **Real-time Search**: Integrated search bar for finding products instantly.

### 🔹 Theme Switching System
*   **Three Modes**: Normal (Classic), Dark (Premium), and Light (Crisp).
*   **Persistence**: Uses `localStorage` to remember the user's theme choice across sessions.
*   **Dedicated Settings**: A specific settings page for appearance customization.

### 🔹 Product Filtering (Collections)
*   **Category Tags**: Filter by Occasion (Formal, Casual), Color, and Arrival status.
*   **Grid System**: Unified product card sizing with `object-fit` handling for consistent visuals.
*   **Dynamic UI**: Smoothly updates the product list based on user selection.

### 🔹 Contact Form & Modal
*   **Validation**: Real-time checking for empty fields.
*   **Custom Modal**: Replaces standard browser alerts with a glassmorphism-styled success popup.
*   **Entry Animations**: Smooth fade-in and slide-up effects for the completion message.

### 🔹 Brands Showcase
*   **Interactive Logos**: Smooth grayscale-to-color transition on hover.
*   **Premium Feel**: Subtle scaling and lift effects to engage users.

## 📱 Responsive Design
*   **Mobile-First Development**: Ensuring a seamless experience on small screens.
*   **Flexible Grids**: Adapts from 1-column on mobile to 4-columns on desktop.
*   **Adaptive Images**: Images maintain aspect ratio and clarity across all devices.

## 🧠 Development Process

1.  **Architecture**: Created semantic HTML structure for multiple pages (Home, Collections, Contact, Settings).
2.  **Design System**: Implemented a comprehensive CSS variable system to support multiple themes.
3.  **UI Consistency**: Standardized product image dimensions using CSS `aspect-ratio` and `object-fit`.
4.  **Functionality**: Added JS logic for filtering, theme persistence, and custom interactive modals.
5.  **Refinement**: Optimized mobile navigation and re-aligned navbar elements for better balance.

## 📂 Project Structure

```text
Nostra-Fashion-Web/
│
├── index.html          # Hero landing & home page
├── collections.html   # Product listing & filtering
├── contactus.html     # Contact form & location
├── settings.html      # Theme selection & preferences
├── style.css           # Global styles & theme variables
├── script.js           # Filtering logic & theme handling
└── img/                # Product images & brand icons
```

## 📚 What I Learned

### Layout Structuring
Improved ability to build complex, multi-page layouts that remain consistent and scalable.

### Advanced CSS Variables
Mastered using CSS variables to implement a three-tier theme system (Normal, Dark, Light) with a single stylesheet.

### UX & Micro-interactions
Learned how custom modals and hover effects can significantly elevate the users’ perception of a brand's "premium" quality.

### State Persistence
Implemented persistent user preferences (themes) without a backend using `localStorage`.

### Responsive Grid Management
Solved complex alignment issues where varying image aspect ratios were breaking the visual rhythm of the site.

## 🚀 How It Can Be Improved
*   **Shopping Cart**: Implement a functional cart system using JS arrays and state.
*   **Dynamic Data**: Fetch product information from a JSON file or API.
*   **Backend Integration**: Connect with Node.js/MongoDB for real orders.
*   **Framework Migration**: Rebuild using React or Next.js for better component lifecycle management.

## ▶ Running the Project
Since this is a static web project, no installation is required.

**To run locally:**
1. Clone the repository.
2. Open the project folder.
3. Double-click `index.html` or open with "Live Server" in your editor.
