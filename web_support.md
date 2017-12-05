### Testing

- all "legacy" tests are available to run via `test` script in package.json
- support for react-native-web can be tested via `test:web`
- tests are defined for each component in `./web-support/_tests_`
- tests are defined as a generic sample object, then processed through enzyme-styleguidist-sample-parser to:
    -  run tests
    -  generate styleguide examples
- this is configured in the `./web-support/samples.js` default export

### Styleguidist

- all generated component examples are written to `./web-support/styleguide/examples`
- to run the development styleguide, use the `styleguide` script in package.json
- this will start a server on port 6061 and watch for changes
- combined with `yarn web:test --watch` and `yarn test:watch`, this makes an excellent development experience
- the production (static) styleguide can be built, but requires the next (>6.0.33) release of react-styleguidist
