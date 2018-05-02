# ACCESA UI STARTER

Starter pack for web-based projects
Stable version 0.1.5

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them.
In order to customize, select the tools / components to import in your project, you will need to install beforehand:

* [SASS](https://sass-lang.com) - Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.
* [NODE.js](https://nodejs.org) - As an asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications.

If not, just use the generated [main.css] (https://github.com/alexandrumacra/accesa-ui-starter/blob/master/css/main.css) file.

## The road so far...

### Status: we're doing stuff and things

### Happy to announce that
  * We have implemented a SASS-based UI starter pack.
  * A list of base and custom features that can extend existing CSS utilities or that can be used as building blocks for new components.
  * Added a minimal build, watch & lint tool both for SCSS and CSS.
  * We have improved the CSS output, increased performance (*still in progress*).
  * Also implemented a grid and several UI components. (loader, tooltip, etc).
  * (*still in progress*) Added a small styleguide / demo for components and UI features.


### Improvements to come
  * Provide easy integration with Javascript frameworks or components.
  * Optimize writing / editing / larger scaling of CSS.
  * Provide an easy way to insert / remove components / features.
  * Create a {minimal classes} version. Right now, when using BEM, we use longer names, to be as easy as possible to understand how the SCSS classes and mixins / variables / functions are working.
  * Improve / add more examples or know-hows / corner cases

### Going forward
  * Implement experimental components or features (grid systems, such as masonry layout or CSS4 grid layout).
  * Custom font support.
  * Start with the HTML / JS / CSS documentation.
  * Create an HTML element flowchart.
  * Add a material option for the flat design components.

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

Rebuilding / compiling the SASS files
```
npm run css:build
```

Watching the SASS files
```
npm run css:watch
```

To lint the CSS / SASS files
```
npm run css:lint
npm run sass:lint
```

## Contributing

Please read [CONTRIBUTING.md](https://github.com/alexandrumacra/accesa-ui-starter/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

Alexandru Macra

## License

Open Software License v.3.0 - [OSL-3.0] (https://opensource.org/licenses/OSL-3.0)