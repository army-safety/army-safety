# Army Safety Group Home Page CSS Style Guide

This guide explains the key CSS styles applied to the Army Safety Group homepage, focusing on the robotic glassmorphism look and layout.

## 1. Glassmorphism Container (`homepage-intro`)
- **Background:** Semi-transparent white (`rgba(255,255,255,0.18)`) for a frosted glass effect.
- **Border Radius:** 18px for rounded corners.
- **Box Shadow:** Soft shadow for depth.
- **Backdrop Filter:** Blur effect for glass look (`blur(8px)`).
- **Border:** Subtle white border for definition.
- **Padding & Margin:** Spacious padding and margin for separation.
- **Overflow:** Hidden to contain shine animation.

## 2. Shine Animation
- **Pseudo-element (`::before`):** Adds a diagonal animated shine using a blurred linear gradient.
- **Keyframes (`diagonal-shine-sweep`):** Moves the shine across the container for a dynamic effect.

## 3. Header & Main Content
- **Header:** Uses the `homepage-intro` class for glassmorphism. Logo is centered above the title.
- **Title & Subtitle:** No animation, just off-white color (`#f8f6f2`) for clarity and professionalism.
- **Main Content:** Also uses `homepage-intro` for consistent glassmorphism styling.

## 4. Responsive Layout
- **Flexbox:** The outer container uses flexbox to center content vertically and horizontally.
- **Max Width:** Content is limited to 900px for readability on large screens.
- **Mobile:** Media queries remove blur and box-shadow for better performance and clarity on small screens.

## 5. Background Slideshow
- **Full Viewport:** The slideshow background covers the entire viewport (`100vw` x `100vh`).
- **Image Styling:** Images are faded in/out with opacity transitions for a smooth slideshow effect.

## 6. Color Palette
- **Background:** Light gray (`#f4f6fa`) for the page background.
- **Header/Footer:** Dark blue overlay for contrast.
- **Text:** Off-white for header, dark for main content.

## 7. Custom Classes
- `.homepage-intro`: Main glassmorphism container.
- `.glow-animated-text`: (Not used in header anymore) For animated glowing text if needed elsewhere.

## Glassmorphism Shine and Animated Text Effects

### Shine Effect on Homepage Intro
The `.homepage-intro::before` pseudo-element overlays a soft, animated shine on the homepage intro section. It is absolutely positioned and sized larger than its parent, creating a diffuse, glowing effect. The background uses a diagonal linear gradient with partial transparency, blurred for a frosted glass look. The `diagonal-shine-sweep` keyframes animate the shine diagonally across the section, adding dynamic movement and visual interest.

### Animated Glowing Text
The `.glow-animated-text` class applies a vibrant, multi-color gradient to text, clipped so only the gradient is visible. The text color is set to transparent, and multiple text shadows create a glowing aura. The `intro-glow-motion` keyframes animate the gradient horizontally, making the colors appear to move across the text for a lively, futuristic effect.

These effects combine to give the homepage a modern, robotic aesthetic with continuous motion and glass-like visuals.

---

**How to Use:**
- Apply `homepage-intro` to any section you want to have the glassmorphism effect.
- For static, professional text, use `color: #f8f6f2`.
- The background slideshow is handled in React, not CSS.

**File Locations:**
- Main CSS: `src/robotic-home.css`
- Component: `src/App.tsx`

For further customization, adjust the CSS variables, colors, or animation keyframes in `robotic-home.css`.







.homepage-intro::before {
  content: '';
  position: absolute;
  top: -60%;
  left: -60%;
  width: 120%;
  height: 120%;
  pointer-events: none;
  background: linear-gradient(120deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.22) 50%, rgba(255,255,255,0.04) 100%);
  filter: blur(8px);
  opacity: 0.7;
  border-radius: inherit;
  animation: diagonal-shine-sweep 3.5s linear infinite;
  z-index: 1;
}
@keyframes diagonal-shine-sweep {
  0% { transform: translateX(-30%) translateY(-30%) rotate(0deg); }
  100% { transform: translateX(30%) translateY(30%) rotate(1deg); }
}
.glow-animated-text {
  color: #38bdf8;
  background: linear-gradient(90deg, #38bdf8 0%, #06b6d4 40%, #67e8f9 70%, #fff 100%);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 16px #38bdf8, 0 0 32px #67e8f9, 0 0 48px #fff;
  animation: intro-glow-motion 3.5s linear infinite;
}
@keyframes intro-glow-motion {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 300% 50%;
  }
}