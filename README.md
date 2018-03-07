# ACCESA UI Starter

Starter pack for web-based projects

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them.
In order to customize, select the tools / components to import in your project, you will need to install beforehand:

```
Node.js
SASS
```

If not, just use the generated [main.css] (https://github.com/alexandrumacra/accesa-ui-starter/blob/master/demos/css/main.css) file.

## The road so far...

### Status: Almost stable version of the package!!!

### Happy to announce that
  * Right now, we have finished with the early stages of the starter project set-up.
  * The core SASS files contain both a base stylesheet set-up and a reset to ensure compatibility across as many devices and browsers as possible.
  * Good progress with the core SCSS structure of the project. We use BEM(Block Element Modifier), and for the common classes that will be used in current / future components also provided a {prefix} for an easy install / update.
  * Great progress with optimizing the use of SCSS to get a good output of CSS. We have a long list of useful shortcuts that allow for easy write / modify CSS, providing a great way to scale up (we use mixins in every place possible).
  * We have implemented a grid, using flexbox. Right now it's responsive and scalable (default is 12 columns, sky is the limit).
  * Print stylesheet was started.


### Improvements to come
  * More functions, mixins to improve and optimize writing / editing / larger scaling of CSS.
  * Ensure responsiveness among new components.
  * Form customizing across browser and devices / also keep a default version.
  * Create a {minimal classes} version. Right now, when using BEM, we use longer names, to be as easy as possible to understand how the SCSS classes and mixins / variables / functions are working.
  * Improve / add more examples or know-hows / corner cases (for example, we have a utils.scss file that right now contains a lot of options for centering an HTML element, including either both horizontal and vertically. Both by knowing it's size, or without know it's height).
  * Improve current grid (at first, by finishing with the gutter).

### Going forward
  * Implement experimental grid systems, such as masonry layout or CSS4 grid layout.
  * Extend the list of mixins, functions or in general CSS shortcuts.
  * Custom font support.
  * Continue / add / improve corner cases (responsive tables, fixed footer, etc).
  * Add more CSS components (modal, custom dropdowns, accordions, etc).
  * Start with the HTML / JS / CSS documentation.
  * Create an HTML element flowchart.
  * Add a flat option for the designed components.
  * Font-awesome integration.
  * Need to find a way to improve more the current CSS output (alternative to global selectors, make sure we output just the elements that are on the document.

### Installing

A step by step series of examples that tell you have to get a development env running

First

Install [Ruby] (https://rubyinstaller.org/)
After, install [Sass] (https://sass-lang.com/install). Either by app or command line.
Make sure you also have [Node.js] (https://nodejs.org/en/download/) installed on your development machine.


Afterwards
```
run npm install
```

Rebuilding / compiling the Sass files
```
sass:compile
```

## Tests

todo

### Coding style tests

todo

## Deployment

todo

## Built With

* [SASS](https://sass-lang.com) - Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.
* [NODE.js](https://nodejs.org) - As an asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications.

## Contributing


## Versioning

todo
## Authors

Alexandru Macra

## License

Open Software License v.3.0 - [OSL-3.0] (https://opensource.org/licenses/OSL-3.0)

## Acknowledgments

* todo
