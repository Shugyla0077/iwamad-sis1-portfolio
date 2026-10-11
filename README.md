# IWaMAD SIS 1 — Personal Portfolio Website

Live GitHub Pages URL: [https://shugyla0077.github.io/iwamad-sis1-portfolio/](https://shugyla0077.github.io/iwamad-sis1-portfolio/)

## About This Site
This is a responsive, single-page personal portfolio website for Shugyla Zhambybay created for the IWaMAD SIS 1 assignment. It showcases real foundational coursework builds alongside an interactive contact form and full-site theme switching. The site is implemented completely from scratch using semantic HTML5, modern CSS3 variables, and vanilla JavaScript without any external frameworks or UI kits.

## Three Design Decisions

1. **Why that layout (Deliberate rearrangement between 375 px and 1200 px):**  
   On mobile devices (375 px), the projects section and header stack vertically into a single column so users can browse comfortably without horizontal overflow, while all touch targets maintain ample padding. On desktop screens (1200 px), the projects section visibly rearranges into an expansive 3-column card grid, and the About section transforms from a centered column into a split horizontal hero layout.

2. **Why those colours (Systematic palette & WCAG accessibility):**  
   I selected an indigo-blue primary tone (`#2563eb` in light mode, `#3b82f6` in dark mode) paired with slate neutrals for typography (`#0f172a` and `#475569`). All text and background combinations strictly satisfy the WCAG AA 4.5:1 contrast requirement in both themes, and theme swapping is handled globally through unified CSS variables on `:root` and `html[data-theme="dark"]`.

3. **What I changed after testing on a phone:**  
   When testing at 375 px width in browser DevTools, I noticed the navigation links and theme toggle were crowded when positioned side-by-side. I updated the mobile header using flex-wrap and reordered the navigation list below the brand and theme button, while ensuring no font size across the entire site drops below 14 px for optimal legibility.