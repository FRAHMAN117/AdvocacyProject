# Eco-Friendly Musician Website

---

## Overview

This repository contains a simple, interactive website for a project titled "Eco-Friendly Musician." The site is built using standard web technologies (HTML, CSS, and JavaScript) and is designed to inform users about sustainable music practices. It includes a user petition with form validation, a dark mode toggle, and a scroll-based animation for a dynamic user experience.

## Project Goal

The main objective is to create a single-page website that effectively communicates the message of combining music with environmentalism. The site aims to engage users through interactive features and encourage them to show their support via a digital petition.

## Key Functionalities

The project is built with the following interactive features:

* **Petition Form:** A form where users can sign their name to support the cause. It includes client-side validation to ensure the name and hometown fields are not empty before a signature is added.
* **Dynamic Signature Display:** Upon successful form submission, the user's signature is dynamically added to a list on the page, showing real-time support for the petition.
* **Dark Mode Toggle:** A button that allows users to switch between a light and dark theme, enhancing accessibility and providing a personalized viewing experience.
* **Scroll Animations:** Elements on the page are configured to fade in or "reveal" as the user scrolls down, using a simple JavaScript and CSS animation.

## Project Structure

The project is organized into three main files:

* **`index.html`**: The main structure of the website. It contains the content for the headers, the "About" section, the petition form, and the navigation menu. It also links to the CSS and JavaScript files.
* **`style.css`**: Manages the visual presentation of the website. It includes styling for layout, typography, colors, and the dark mode theme. It also contains the CSS rules for the form validation error state and the scroll-based animations.
* **`index.js`**: Handles all the interactive functionality of the site. This includes the logic for the dark mode toggle, form validation, and dynamically adding signatures to the petition section.

## Setup and Usage

### Prerequisites

* A modern web browser (e.g., Chrome, Firefox, Safari).

### Running the Project

1.  Make sure all three files (`index.html`, `style.css`, `index.js`) are in the same folder.
2.  Simply open the `index.html` file in your web browser. There is no need for a web server.

## Troubleshooting

* **Dark Mode button not working:** Ensure that the `index.js` file is correctly linked in the `<head>` section of `index.html` and that the button's ID matches (`id="theme-button"`).
* **Petition form not adding signatures:** Check the browser's developer console for any JavaScript errors. The name and hometown fields must have at least two characters for the signature to be added.
* **Visual display issues:** Verify that the `style.css` file is correctly linked in the `<head>` section of `index.html` and that all class names match between the HTML and CSS.

---

## Future Work

* **Add an email validation check** to the petition form.
* **Implement a more robust animation library** for more complex visual effects.
* **Expand the website content** to include a blog, more detailed project ideas, or a gallery of user-created instruments.
* **Add a contact form** to allow users to get in touch with the project creators.
