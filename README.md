# Videogular
[![Github Actions](https://github.com/codameio/videogular2/workflows/build/badge.svg)](https://github.com/codameio/videogular2/actions)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/2fdevs/videogular?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Greenkeeper badge](https://badges.greenkeeper.io/videogular/videogular2.svg)](https://greenkeeper.io/)

**Videogular is an HTML5 video player for Angular 2.0**. Videogular is a wrapper over the HTML5 video tag, so you can just add whatever you want. This provides a very powerful, but simple to use solution, for everybody.

You can see a demo here: https://videogular.github.io/videogular2-showroom/#/

Documentation: https://videogular.github.io/videogular2

# How to install

This is a fork of `videogular2`, so installation might be a little different than [original repo](https://github.com/videogular/videogular2#how-to-install).

### Installation

```
npm install @codameio/videogular2
```

### Usage

import styles
```
// global.scss
@import "~@codameio/videogular2/fonts/videogular.css";
```

import modules
```
// module.ts
import {
  VgCoreModule,
  VgControlsModule,
  VgOverlayPlayModule,
  VgBufferingModule
} from '@codameio/videogular2';

@NgModule({
  imports: [
    ...
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
```
in the template
```
// component.html
<vg-player>
  <video [vgMedia]="media" #media id="singleVideo" preload="auto" controls>
      <source src="http://static.videogular.com/assets/videos/videogular.mp4" type="video/mp4">
  </video>
</vg-player>
```

## NPM commands

Run `start` to compile the project, execute tests and check coverage:

```
npm start
```

Run `build` to compile the project:

```
npm run build
```

Run `test` to test the project:

```
npm test
```

Run `coverage` to check the coverage report:

```
npm run coverage
```

To start the example app run the following commands and open http://localhost:8080:

```
cd examples
npm install
npm run build
npm start
```

## Quick template

[Stackblitz Template](https://stackblitz.com/edit/angular-videogular?file=app%2Fhello.component.ts)


## Supported by

Videogular wants to thank you to this companies for support this project:

[![](sponsors/jetbrains.png)](https://www.jetbrains.com)
[![](sponsors/toptal.png)](https://www.toptal.com)

## Credits

Videogular is a project created by [Raúl Jiménez](https://github.com/Elecash) and released under [MIT license](https://github.com/videogular/videogular2/blob/master/LICENSE).

This project would not be possible without our [team members](https://github.com/orgs/videogular/people) and an [amazing community](https://github.com/videogular/videogular2/graphs/contributors),
