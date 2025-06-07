# Nostalgic Disco

## Overview

This repository contains the source code for Nostalgic Disco, a retro-themed music web application designed to immerse users in the vibrant sounds and aesthetics of the disco era. The site features a music player with curated albums, responsive navigation, and a contact form, all styled with a nostalgic, neon-inspired design.

## Features

- **Music Player**: Allows users to select from three disco albums (Neon Groove Nights, Electric Boogie Fever, Starlight Pulse) and play songs with controls for play/pause, next/previous track, repeat, and progress bar scrubbing.
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices with a hamburger menu for smaller screens.
- **Dynamic Navigation**: Highlights active pages and includes smooth hover effects.
- **Contact Form**: A user-friendly form for sending messages (backend not included in this static site).
- **Stylish Aesthetics**: Features a gradient background, Orbitron font, and a blurred backdrop effect for a retro vibe.

## Technologies Used

- **HTML5**: Semantic structure for the website's pages (`index.html`, `about.html`, `contact.html`).
- **CSS3**: Custom styles in `style.css` for layout and `pages.css` for page-specific styling, including gradients, animations, and responsive design.
- **JavaScript**: Handles music player functionality, navigation toggling, and dynamic song loading in `script.js`.
- **Fonts**: Google Fonts (Orbitron) for a futuristic, retro typography.
- **Icons**: Font Awesome for navigation and social media icons.
- **Assets**: MP3 files for songs and SVG icons for player controls in the `assets/` directory.

## File Structure

- `index.html`: Homepage with the music player and album/song selection.
- `about.html`: Information about the Nostalgic Disco project and its mission.
- `contact.html`: Contact form and contact details section.
- `style.css`: Core CSS for the website's layout, navigation, and music player styling.
- `pages.css`: CSS for About and Contact page-specific styles and responsive adjustments.
- `script.js`: JavaScript for music player functionality, navigation, and animations.
- `assets/`: Directory containing music files (`assets/music/`) and SVG icons (`assets/svg/`).

## Setup and Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/HugoAdona/nostalgia-disco.git
   ```
2. **Navigate to the Project Directory**:
   ```bash
   cd nostalgia-disco
   ```
3. **Open the Website**:
   - Open `index.html` in a web browser to view the site locally.
   - Alternatively, serve the project using a local server (e.g., `live-server` or Python's `http.server`):
     ```bash
     python -m http.server 8000
     ```
     Then visit `http://localhost:8000` in your browser.

## Usage

- **Music Player**: Select an album from the dropdown, choose a song from the list, and use the play/pause, next/previous, and repeat buttons to control playback. Click the progress bar to seek within a track.
- **Navigation**: Use the top navigation bar to switch between Home, About, and Contact pages. On mobile/tablet, toggle the hamburger menu for navigation.
- **Responsive Viewing**: Test the site on different screen sizes to experience the responsive design.
- **Contact**: Fill out the contact form to send a message (requires a backend for full functionality, not included).

## Deployment

The website is deployed on GitHub Pages at [https://hugoadona.github.io/nostalgia-disco](https://hugoadona.github.io/nostalgia-disco). To deploy updates:

1. Push changes to the `main` branch.
2. Ensure GitHub Pages is configured to serve from the `main` branch in the repository settings.

## Contributing

This is a personal project, but feedback and suggestions are welcome! Feel free to open an issue or submit a pull request with improvements.

## License

© 2025 Nostalgic Disco. All rights reserved.

## Contact

Reach out via the [contact form](https://hugoadona.github.io/nostalgia-disco/contact.html) or connect with me on:

- [GitHub](https://github.com/HugoAdona)
- [X](https://x.com/hugoadona)
- [Instagram](https://instagram.com/hugoadona)