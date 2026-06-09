# HOTEL ROYAL SEN Static Website

Static website for HOTEL ROYAL SEN in Bardibas, Mahottari, Nepal. The site uses Tailwind CSS, local hotel photos, and small JavaScript helpers for navigation, reveal animations, and room enquiry links.

## Development

Install dependencies once:

```bash
npm install
```

Build the production stylesheet:

```bash
npm run build:css
```

Watch Tailwind during styling work:

```bash
npm run watch:css
```

## Structure

```text
project/
├── index.html
├── pages/
│   ├── about.html
│   ├── amenities.html
│   ├── contact.html
│   ├── events.html
│   ├── gallery.html
│   └── rooms.html
├── src/
│   └── tailwind.css
├── css/
│   └── tailwind.css
├── js/
│   ├── animations.js
│   ├── main.js
│   └── rooms.js
├── assets/
│   └── images/
├── tailwind.config.js
└── package.json
```

## Notes

- Tailwind design tokens live in `tailwind.config.js`.
- Reusable Tailwind component patterns live in `src/tailwind.css`.
- The compiled production stylesheet is `css/tailwind.css`.
- The contact form is static and shows a confirmation message without sending data to a server.
