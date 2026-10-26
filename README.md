# Dapur Rasa

A responsive catering landing page built with React, Vite, and Tailwind CSS. Dapur Rasa showcases catering packages, highlights service benefits, explains the ordering process, and helps visitors contact the business through WhatsApp.

## 🌐 Live Demo

**Live Demo:** Not available yet.

The project can be run locally for development and testing. Add the deployed website URL here once it is published.

## ✨ Features

- 🍱 Catering package showcase with descriptions, prices, and menu details
- 🏡 Dedicated sections highlighting the business and its advantages
- 📋 Clear and simple ordering process
- 💬 WhatsApp integration for package inquiries and catering consultations
- 📱 Responsive landing page for different screen sizes
- 🖼️ Food photography from Unsplash
- 🎨 Typography using Google Fonts
- 🧩 Reusable React components for a maintainable codebase
- ⚡ Fast development and production builds powered by Vite
- ♿ Semantic HTML structure and descriptive image alternative text

## 📸 Screenshots

### Home & Hero Section

![Home & Hero Section](/docs/screenshots/hero-section.png)

### Menu Section

![Menu Section](/docs/screenshots/menu-section.png)

### About Section

![About Section](/docs/screenshots/about-section.png)

### Ordering Process & Contact Section

![Ordering Process & Contact Section](/docs/screenshots/contact-section.png)

## 🛠️ Tech Stack

### Frontend

- React 19
- Vite 6
- JavaScript (ES Modules)
- Tailwind CSS 4

### Development Tools

- ESLint
- React ESLint Plugins
- Vite React Plugin

### External Resources

- WhatsApp for customer inquiries
- Unsplash for food photography
- Google Fonts for typography

## 📁 Project Structure

```text
dapur-rasa-landing-page/
├── public/                     # Static assets
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── Hero.jsx             # Hero section
│   │   ├── MenuSection.jsx      # Catering package showcase
│   │   ├── AboutSection.jsx     # Business introduction
│   │   ├── OrderingSection.jsx  # Ordering steps
│   │   ├── ContactSection.jsx   # Contact call-to-action
│   │   ├── Footer.jsx           # Footer section
│   │   ├── ArrowIcon.jsx        # Reusable arrow icon
│   │   └── WhatsAppLink.jsx     # WhatsApp contact link
│   ├── data/
│   │   └── landingContent.js    # Packages, benefits, and ordering steps
│   ├── App.jsx                  # Main page composition
│   ├── constants.js             # Shared constants, including WhatsApp number
│   ├── index.css                # Global styles and Tailwind CSS
│   └── main.jsx                 # Application entry point
├── .gitignore                  # Git ignore rules
├── eslint.config.js            # ESLint configuration
├── index.html                  # HTML entry point and metadata
├── package.json                # Dependencies and npm scripts
├── package-lock.json           # Dependency lockfile
├── README.md                   # Project documentation
└── vite.config.js              # Vite and plugin configuration
```

## 🚀 Getting Started

### Requirements

- Node.js
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/devanas2906/dapur-rasa-landing-page.git
cd dapur-rasa-landing-page
```

Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Vite will display a local URL in the terminal where you can access the application.

### Production

Build the application for production:

```bash
npm run build
```

The production-ready files will be generated in the `dist/` directory.

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check the code with ESLint:

```bash
npm run lint
```

## 🔄 Main Workflow

```text
Open Dapur Rasa
       ↓
Explore the Landing Page
       ↓
Browse Catering Packages
       ↓
Learn About the Services
       ↓
Review the Ordering Process
       ↓
Choose a Catering Package
       ↓
Contact Dapur Rasa via WhatsApp
       ↓
Discuss Menu, Portions, and Delivery
```

## ⚙️ Configuration

### WhatsApp Contact

The WhatsApp number is configured in `src/constants.js`:

```js
export const WHATSAPP_NUMBER = "6281234567890";
```

The current number is a placeholder and does not represent a verified business contact.

Before publishing the website, replace it with the official WhatsApp number in international format, without the `+` symbol.

### Catering Packages and Content

Catering packages, their descriptions, prices, menu details, service benefits, and ordering steps are defined in:

```text
src/data/landingContent.js
```

Update this file to customize the landing page content.

**Note:** The displayed business information and package prices are fictional sample content and should be reviewed before the website is used for a real business.

### External Resources

- Food images are loaded from Unsplash.
- Fonts are loaded from Google Fonts.

An internet connection is required to load these external resources.

## 🎯 Purpose

Dapur Rasa is a frontend portfolio project created to demonstrate modern React development, reusable component architecture, responsive landing page design, structured content management, and WhatsApp integration.

The project focuses on presenting catering services clearly and providing visitors with a straightforward way to explore packages and make inquiries.

It is a static frontend application and does not currently include a backend, authentication system, or database.

## 👤 Author

**Devanas**

GitHub: [@devanas2906](https://github.com/devanas2906)