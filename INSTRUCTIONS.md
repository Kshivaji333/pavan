# 🎬 VIDEO EDITOR PORTFOLIO — Setup & Customization Guide

---

## 🚀 HOW TO RUN THE WEBSITE

### Option 1: Just Open It (Quickest)
1. Find the file called `index.html`
2. Double-click it
3. It opens in your browser — that's it! ✅

### Option 2: Run a Local Server (Recommended for video playback)
If you have Node.js installed:
```bash
npx serve .
```
Then open http://localhost:3000 in your browser.

Or with Python:
```bash
python -m http.server 8000
```
Then open http://localhost:8000

### Option 3: Deploy Online (Free Hosting)
- **Netlify**: Go to netlify.com → drag and drop your folder → live in 30 seconds
- **GitHub Pages**: Push to GitHub repo → enable Pages in settings → free hosting
- **Vercel**: Go to vercel.com → import from GitHub → instant deploy

---

## ✏️ HOW TO REPLACE PLACEHOLDERS

Open `index.html` in any text editor (Notepad, VS Code, Sublime Text, etc.)
Use **Ctrl+F** (or Cmd+F on Mac) to find the `★ REPLACE` markers — every placeholder is labeled with one!

---

### 1. 🏷️ NAME & BRAND
Search for: `FRAME` → Replace with your brand/logo name
Search for: `JOHN` → Replace with first name
Search for: `DOE` → Replace with last name
```html
<!-- Find this: -->
<span class="glitch" data-text="JOHN">JOHN</span>
<span class="glitch" data-text="DOE">DOE</span>

<!-- Change to (example): -->
<span class="glitch" data-text="ALEX">ALEX</span>
<span class="glitch" data-text="CHEN">CHEN</span>
```
**Important:** Make sure you update BOTH the `data-text=""` AND the text inside the tag, otherwise the glitch effect won't match!

---

### 2. 🖼️ HERO BACKGROUND IMAGE
Find the CSS comment near `hero-bg` and uncomment/update:
```css
/* Find this block in the <style> section: */
/* .hero-bg { background-image: url('your-hero-image.jpg'); ... } */

/* Remove the /* */ and update the filename: */
.hero-bg {
  background-image: url('hero-bg.jpg');
  background-size: cover;
  background-position: center;
}
```
Put your image file in the same folder as `index.html`.

---

### 3. 🎥 SHOWREEL VIDEO
Find the comment `★ REPLACE` near the reel section. Replace the placeholder div with your video:

**YouTube:**
```html
<!-- Remove the reel-placeholder div and add: -->
<iframe width="100%" height="100%"
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  frameborder="0" allowfullscreen
  style="position:absolute;inset:0;">
</iframe>
```
Get YOUR_VIDEO_ID from the YouTube URL: youtube.com/watch?v=**dQw4w9WgXcQ**

**Local Video File:**
```html
<video width="100%" height="100%" controls poster="thumbnail.jpg"
  style="position:absolute;inset:0;object-fit:cover;">
  <source src="showreel.mp4" type="video/mp4">
</video>
```

---

### 4. 📸 YOUR PHOTO (About Section)
Find the `about-img-placeholder` div and replace it:
```html
<!-- Remove this: -->
<div class="about-img-placeholder">...</div>

<!-- Add this: -->
<img src="my-photo.jpg" alt="Your Name" class="about-image">
```
Put `my-photo.jpg` in the same folder. Works best with a portrait/vertical photo.

---

### 5. 🗂️ PROJECT THUMBNAILS
For each project card (there are 5), find the placeholder div and replace:
```html
<!-- Remove this: -->
<div class="project-img-placeholder">
  <div class="project-ph-label">[ Project 1 Thumbnail ]...</div>
</div>

<!-- Add this: -->
<img src="project1.jpg" style="width:100%;height:100%;object-fit:cover;">
```
Also update the project details below each image:
```html
<div class="project-cat">Your Category</div>   <!-- e.g. Brand Film, Music Video -->
<div class="project-title">Your Title</div>
<div class="project-year">2024 — Client Name</div>
```

---

### 6. 📝 ABOUT TEXT
Find the paragraph tags inside `about-text` and update:
```html
<p>I'm <em>Your Name</em>, a video editor...</p>
```
The `<em>` tags make text appear white/highlighted — use them for key words!

---

### 7. 📊 SKILLS & PERCENTAGES
Find the `skills-grid` section. Update each skill:
```html
<div class="skill-item" style="--pct: 95%">    <!-- Change 95% to your level -->
  <div class="skill-name">Premiere Pro</div>   <!-- Change skill name -->
```

---

### 8. 🔢 STATS (Numbers)
Find the `#stats` section and update the 4 numbers:
```html
<span class="stat-num">120<span>+</span></span>   <!-- Projects count -->
<span class="stat-num">7<span>+</span></span>      <!-- Years experience -->
<span class="stat-num">50<span>+</span></span>     <!-- Clients count -->
<span class="stat-num">5<span>M</span></span>      <!-- Views/reach -->
```

---

### 9. 📧 CONTACT INFO
Find the contact-links section:
```html
<a href="mailto:hello@youremail.com" ...>hello@youremail.com</a>
<a href="https://instagram.com/yourhandle" ...>@yourinstagramhandle</a>
<a href="https://linkedin.com/in/yourprofile" ...>linkedin.com/in/yourprofile</a>
```
Update the `href` AND the visible text for each link.

---

### 10. 📬 CONTACT FORM (Make It Actually Send Emails)
Sign up free at **formspree.io**, create a form, get your endpoint URL, then:
```html
<!-- Find: -->
<form onsubmit="handleSubmit(event)">

<!-- Replace with: -->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
Remove the `handleSubmit` JavaScript function at the bottom too.

---

### 11. 🎨 CHANGE COLORS
At the top of the CSS, you'll find the color variables — change them to match your brand:
```css
:root {
  --black: #050505;    /* Main background */
  --white: #f0ede8;    /* Text color */
  --red: #e63027;      /* Accent color — change this to any color! */
  --gold: #c9a84c;     /* Timecode / secondary accent */
}
```

---

## 📁 RECOMMENDED FILE STRUCTURE
```
portfolio/
├── index.html          ← The website
├── hero-bg.jpg         ← Hero background image
├── my-photo.jpg        ← Your portrait photo
├── project1.jpg        ← Project thumbnails
├── project2.jpg
├── project3.jpg
├── project4.jpg
├── project5.jpg
└── showreel.mp4        ← (Optional) local video file
```

---

## ✅ QUICK CHECKLIST
- [ ] Name updated (both `data-text` and text content)
- [ ] Hero background image added
- [ ] Showreel video embedded
- [ ] Profile photo replaced
- [ ] All 5 project thumbnails added
- [ ] Project titles/categories updated
- [ ] Bio text updated
- [ ] Skills & percentages updated
- [ ] Stats numbers updated
- [ ] Email address updated
- [ ] Social media links updated
- [ ] Footer copyright name updated
- [ ] Contact form connected (Formspree or your backend)

---

*The website works entirely without any server — just HTML, CSS, and JavaScript. No frameworks, no npm install, no build step needed.*
