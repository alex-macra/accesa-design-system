# ACCESA DESIGN SYSTEM

Starter pack for web-based projects. Styleguide. Design system.

Current version: 0.9.-Beta

Upcoming version: 1.0.0-RC1

### Projects linked with the design system
* [Accesa React Start](https://github.com/alex-macra/react) - react starter pack, very easy to integrate
* [Accesa Base Design](https://github.com/alex-macra/design) - core design files for the example components

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them.
In order to customize, select the tools / components to import in your project, you will need to install beforehand:

* [SASS](https://sass-lang.com) - Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.
* [NODE.js](https://nodejs.org) - As an asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications.

## The road so far...

### Happy to announce that we have:
  * Implemented a SASS-based UI starter pack.
  * Created a dynamic styleguide generator
  * Imported the styleguide design in figma

### Improvements to come
  * Finish the guidelines section
  * Provide easy integration with Javascript frameworks or components.
  * Create a {minimal classes} version. Right now, when using BEM, we use longer names, to be as easy as possible to understand how the SCSS classes and mixins / variables / functions are working.
  * Export and sync the figma design with sketch

### Going forward
  * Implement experimental components or features (grid systems, such as masonry layout or CSS4 grid layout).
  * Impprove Custom font support.

## Ok, I want to use it

Good, now a step by step series of examples that tell you have to get the package running

*(But before, please make sure you have SASS and Node.js installed on your machine)*

Start
```
npm install
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

To generate the styleguide
```
npm run styleguide
```

## Contributing

Please read [CONTRIBUTING.md](https://github.com/alex-macra/accesa-design-system/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* [Alexandru Macra](https://github.com/alex-macra)

## License

Open Software License v.3.0 - [OSL-3.0] (https://opensource.org/licenses/OSL-3.0)