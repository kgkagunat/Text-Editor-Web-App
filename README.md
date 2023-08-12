# JATE - Just Another Text Editor

## Overview

JATE is a progressive web application (PWA) designed to provide a straightforward text editing experience in the browser. 
Built with modern JavaScript, Webpack, and integrated service workers, JATE ensures offline accessibility and a user-friendly interface.

## Challenges and Acceptance Criteria

One significant challenge faced during the development was integrating PWA functionalities seamlessly, ensuring that the app remains performant and available even without internet connectivity.

The following acceptance criteria were established:

```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```


## Key Features

- Seamless online and offline functionality ensures uninterrupted text editing.
- Intuitive user interface, providing a distraction-free writing environment.
- Built as a PWA, enabling the app to be installed on user devices.
- Auto-save functionality that safeguards against potential data loss.

## Usage

To access JATE, simply navigate to the deployed URL in your preferred web browser. If you wish to run a local instance:

1. Clone the GitHub repository to your local machine.
2. Follow the installation instructions below.

## Installation

1. Clone the repository: `git clone [repository_URL]`
2. Navigate to the project directory: `cd [directory_name]`
3. Install the required dependencies by running: `npm install`
4. Ensure you have the proper environment variables set up if necessary.
5. Launch the development server: `npm run dev`

## License

This project is licensed under the MIT License.

## Deployment

[JATE on Heroku](https://stark-wildwood-87300-7a140e198aeb.herokuapp.com/)
