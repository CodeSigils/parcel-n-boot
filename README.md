# A simple parcel and bootstrap 4 setup template

This is just a simple playground used mainly for tutorials and fast [Bootstrap](https://getbootstrap.com) UI theme creation, that tries to stay out of developers way.
It includes optional jquery and popper.js libraries. All css and JS are imported from `src/js/index.js` through [parcel](https://parceljs.org).
It also includes SASS, PostCSS, PurgeCSS, CSSnano and autoprefixer support.

Note that all the following commands are working with npm also.

- Download:

  `npx degit CodeSigils/parcel-n-boot my-new-project`

- Install dependencies:

  `yarn install`

- Setup the project for the first time run:

  `yarn run setup`

- Serve with:

  `yarn run serve`

- Visit `http://localhost:1234` to verify that everything is working

## Using SASS

All scss rules and utilities are imported in `src/scss/main.scss` in the way that is recommended by the [official bootstrap documentation](https://getbootstrap.com/docs/4.4/getting-started/theming).

## Updating Bootstrap version

- All sass rules are copied from `node_modules/bootstrap/scss`
  to `./src/vendor/scss` for customization using the [cpx](https://www.npmjs.com/package/cpx) tool.

- When it is time to update Bootstrap version, just update it in `package.json` and run `yarn run setup` again.

- Reset `vendor` directory with `yarn run reset`
