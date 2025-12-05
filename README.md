https://roadmap.sh/projects/custom-dropdown
1. HTML Structure

The HTML file contains the basic layout of the dropdown:

A container

A default text (--Select a fruit--)

A hidden dropdown list with multiple options

2. CSS Styling

The CSS file handles:

Centering the container on the page

Styling the default dropdown box

Hiding the dropdown list using display: none

Showing it when the .open class is added

Basic styling for each option

3. JavaScript Logic

The JavaScript adds the interactive behavior:

When the default element is clicked, the dropdown toggles open/close

Clicking an option can update the default text (optional)

JavaScript uses querySelector and classList.toggle()
