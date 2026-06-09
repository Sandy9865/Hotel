# HOTEL ROYAL SEN Static Website

Clean production-ready static website for HOTEL ROYAL SEN, refactored to use Tailwind CSS as the primary styling system.

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
│   ├── rooms.html
│   ├── amenities.html
│   ├── gallery.html
│   ├── about.html
│   └── contact.html
├── src/
│   └── tailwind.css
├── css/
│   └── tailwind.css
├── js/
│   ├── main.js
│   ├── rooms.js
│   └── animations.js
├── assets/
│   └── images/
├── tailwind.config.js
├── package.json
└── README.md
```

## Notes

- Tailwind design tokens live in `tailwind.config.js`.
- Reusable Tailwind component patterns live in `src/tailwind.css`.
- The compiled production stylesheet is `css/tailwind.css`.
- All behavior is externalized into `js/`.
- The contact form is static and shows a confirmation message without sending data to a server.
