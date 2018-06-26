# ACCESA DESIGN SYSTEM

![img](https://raw.githubusercontent.com/alex-macra/accesa-design-system/master/styleguide/img/logo.png)

Current version: 0.9.94-beta

Upcoming version: 1.0.0-RC1

## What is it?

Accesa design system is a component-based, multi-purpose web tool.

### First component: the starter pack.
The starter package creates a really fast enviroment, with little to no build configuration.
Provides a large variety styled interface components, written in SASS, and also provides the building blocks for creating new ones.

#### Can we integrated it with an existing application?
Sure thing, but more important, since it's a *starter*, the main focus was to provide an easy and fast experience when starting up a new project.

Going forward, **react integration** is the "cherry on top of the cake" for our package. Just install the component and see how in a matter of minutes, you will have an app created and ready to go. 
One last surprise for the react app, is that we provide just a little more content than a basic "hello world!".

### Second component: the styleguide.
By integrating [nucleus](https://github.com/holidaypirates/nucleus) within our SASS-based starter pack, you can export every existing element, component, or SASS function, in a styleguide. It goes without saying that the new components can be easily integrated by following the same instructions for the existing ones.

#### How can I generate or updated the styleguide.

```
npm run styleguide
```
And that's it. Run it, there is a large variety of elements already integrated in the styleguide. Everything that we have created so far is also reflected in the styleguide.

### Third component: guidelines and patterns.

Guidelines and the ever-chaging pattern library.
When exploring the styleguide, you can also see a link in the menu named *guidelines*. 
What's in there? Just some HTML5 and CSS best practices and things we have learned over the year and consider useful for every developer that want to work on web applications.

### But is it useful for me?

For single individual it can serve as a centralised (in a world of rapid decentralization) place where it can learn or improve in the ever-changing area of frond-end development and web design.

For teams it provides a new way of collaborative thinking.

### Projects linked with the design system
* [Accesa React Start](https://github.com/alex-macra/react) - react starter pack
* (Accesa Base Design) - soon - core design files for our existing components

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them.
In order to customize, select the tools / components to import in your project, you will need to install beforehand:

* [SASS](https://sass-lang.com) - Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.
* [NODE.js](https://nodejs.org) - As an asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications.

## What's next?

### Going forward with the development
  * Continuous improvements
  * Finishing the guidelines section
  * Implement experimental components or features (grid systems, such as masonry layout or CSS4 grid layout).
  * Impprove Custom font support (integrate maybe google fonts?).

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
npm run css
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