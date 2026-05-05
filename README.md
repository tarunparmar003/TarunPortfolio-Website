# Tarun.OS — iOS-themed Portfolio

A personal portfolio for **Tarun Parmar** designed as an iOS experience — Lock Screen, Home Screen with app icons, glassmorphism cards, Dynamic Island, dark/light mode, and a floating dock.

> Aspiring Network Engineer · Networking · Cloud (AWS) · Security · System Administration

## Live Preview

Just open `index.html` in any modern browser. No build step. No dependencies.

## What makes it iOS-themed (not just rounded corners)

| iOS pattern | Where it appears |
|---|---|
| **Status bar** | Top of screen — signal, 5G, battery |
| **Dynamic Island** | Top center — click to expand "Available" status |
| **Lock Screen** | Hero section with live time, name, role |
| **Home Screen** | App grid below hero with iOS-style icons |
| **Settings list** | Skills section uses iOS Settings table style |
| **Notifications** | Experience cards mimic iOS notification cards |
| **App Store cards** | Project cards |
| **iMessage** | Contact section uses message bubble style |
| **Dock** | Bottom floating dock with quick links |
| **Glassmorphism** | Frosted-glass blur on every card (`backdrop-filter`) |
| **SF Pro typography** | System font stack: `-apple-system, BlinkMacSystemFont, ...` |
| **Spring animations** | `cubic-bezier(0.34, 1.56, 0.64, 1)` for that iOS bounce |
| **Dark mode** | Apple-style toggle in the dock — also respects system preference |

## Project structure

```
TarunPortfolio-Website/
├── index.html              ← Single-page app
├── css/
│   └── styles.css          ← All design tokens + components
├── js/
│   └── script.js           ← Theme toggle, time, scroll reveal, form, easter egg
└── README.md
```

## Sections

1. **Lock Screen / Hero** — live clock, name, role, skill tags
2. **Home Screen** — 8 app icons that smooth-scroll to sections
3. **About** — avatar card + bio + stats (3 cards)
4. **Skills** — 10 skill categories as iOS Settings rows + tag cloud
5. **Experience** — Rang Technologies + DentalHifi as notification cards
6. **Projects** — Wireshark project + Portfolio project as App Store cards
7. **Certifications** — 7 certifications as colorful badge cards
8. **Education** — Parul University + 12th + 10th as iOS-style timeline
9. **Contact** — iMessage-style preview + working contact form
10. **Dock** — Email · GitHub · LinkedIn · Resume · Theme toggle

## Easter eggs 🎉

- **Tap the Dynamic Island** at the top — it expands to show full status
- **Tap your avatar 3 times** in the About section — it spins!
- **Toggle theme** from the dock (last button)

## Customization

### Update the avatar initials
In `index.html`, find `<div class="avatar-circle">TP</div>` — replace `TP` with your initials.

### Add a real photo
Replace the `.avatar-circle` div with an `<img src="me.jpg" />` and add `border-radius: 50%; width: 140px; height: 140px; object-fit: cover;` in CSS.

### Swap colors
All design tokens are CSS variables in `:root` (light) and `[data-theme="dark"]` blocks at the top of `css/styles.css`.

### Wire the contact form to a real backend
Currently the form shows a success toast client-side. To send real emails:

- **Formspree** — simplest. Sign up, get a form ID, replace the `<form>` action.
- **EmailJS** — client-side email via JS SDK.
- **Web3Forms** — free API-key approach.

Edit the `submit` handler in `js/script.js` to POST to your service.

## Deploying to GitHub Pages (your repo)

The repo: `https://github.com/tarunparmar003/TarunPortfolio-Website`

```bash
# from the project folder
git init
git add .
git commit -m "Initial Tarun.OS portfolio — iOS-themed redesign"
git branch -M main
git remote add origin https://github.com/tarunparmar003/TarunPortfolio-Website.git
git push -u origin main
```

Then in your repo on GitHub:
1. **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** · folder: **/ (root)**
4. Save → wait ~30 seconds → your site is live at
   `https://tarunparmar003.github.io/TarunPortfolio-Website/`

## Other deploy options

- **Netlify** — drag-and-drop the folder onto netlify.com/drop
- **Vercel** — `vercel deploy`
- **Cloudflare Pages** — connect the GitHub repo

## Browser support

Modern Chrome / Safari / Firefox / Edge. `backdrop-filter` is the only "modern" feature — falls back to a solid background gracefully.

## Credits

- Design language inspired by **Apple's Human Interface Guidelines**
- Typography uses the **system font stack** (SF Pro on Apple devices)
- All icons are **inline SVG** (no external libraries)
- Color palette uses **iOS system colors**

— Built for **Tarun Parmar** · 2026
