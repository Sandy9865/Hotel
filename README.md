# Hotel and BnB Static Website

Clean production-ready static website for The Mount In hotel and BnB.

## Structure

```text
project/
├── index.html
├── pages/
│   ├── rooms.html
│   ├── about.html
│   └── contact.html
├── css/
│   ├── style.css
│   ├── rooms.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── rooms.js
│   └── animations.js
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
└── README.md
```

## Notes

- All page styles are externalized into `css/`.
- All behavior is externalized into `js/`.
- The website uses remote optimized image URLs with lazy loading for non-critical visuals.
- The contact form is static and shows a confirmation message without sending data to a server.
