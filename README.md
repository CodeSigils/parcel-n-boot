# A simple parcel and bootstrap 4 setup template

This is just a playground used mainly for tutorials and fast Bootstrap 4
UI theme creation. It includes SASS, PostCSS and autoprefixer support.
It also includes optional jquery and popper.js. All css and JS are imported
from `src/js/index.js` through parcel.

- To setup the project for the first time run:

  ```js
  yarn install && yarn run setup
  // or
  npm install && npm run setup
  ```

- Serve with:

  ```js
  yarn run serve
  //or
  npm run serve
  ```

- Visit `http://localhost:1234` to verify that everything is working:

![](src/img/intro.png)

## Using SASS

All scss rules and utilities are imported in `src/scss/main.scss` in the way
that is recommended by the [official bootstrap documentation](https://getbootstrap.com/docs/4.4/getting-started/theming).

## Updating Bootstrap version

- All sass rules are copied from `node_modules/bootstrap/scss`
  to `./src/vendor/scss` for customization using the [cpx](https://www.npmjs.com/package/cpx) tool.

- When it is time to update Bootstrap version, just update it in `package.json`
  and run `yarn run setup` or `npm run setup` again.

- Delete `vendor` directory with `yarn run reset`
