# React-Grid-Layout 

[![npm download][npm-download-src]][npm-download-href] [![npm version][npm-version-src]][npm-version-href] [![License][license-src]][license-href]

**This is a grid system for react, similar to bootstrap-grid** allows you to use Container, Row and Col components in your React applications

## Setup
```bash
# Using yarn
> yarn add @w01f-o/react-grid-layout
# Using npm
> npm install @w01f-o/react-grid-layout
```

## Usage
```js
import {Row, Container, Col} from '@w01f/react-grid-layout'

const App = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>

          </Col>
          <Col>

          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
```
**In the root component.**
```js
import '@w01f-o/react-grid-layout/css'
```

## Available props
For all components className, resetOffset, as well as all attributes related to HTMLDivElement
```js
<Container className="example__container" resetOffset>
    <Row className="example__row" resetOffset></Row>
</Container>
```
For Col component - xxl, xl, lg, md, sm, xs
```js
<Container>
    <Row>
        <Col xxl={12} xl={6} lg={3} md={6} sm={12} xs={12}>
        </Col>
        <Col xxl={12} xl={6} lg={3} md={6} sm={12} xs={12}>
        </Col>
        <Col xxl={12} xl={6} lg={3} md={6} sm={12} xs={12}>
        </Col>
        <Col xxl={12} xl={6} lg={3} md={6} sm={12} xs={12}>
        </Col>
    </Row>
</Container>
```
## Breakpoints
| xxl        | xl          | lg        | md          | sm        | xs        |
|------------|-------------|-----------|-------------|-----------|-----------|
| \>= 1400px | \>= 1200px  | \>= 992px | \>= 768px   | \>= 576px | < 576px   |

## License
[MIT License](./LICENSE)

[npm-download-src]: https://img.shields.io/npm/dt/@w01f-o/react-grid-layout.svg?style=flat-square
[npm-download-href]: https://npmjs.com/package/@w01f-o/react-grid-layout

[npm-version-src]: https://img.shields.io/npm/v/@w01f-o/react-grid-layout/latest.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/@w01f-o/react-grid-layout

[license-src]: https://img.shields.io/npm/l/@w01f-o/react-grid-layout.svg?style=flat-square
[license-href]: https://npmjs.com/package/@w01f-o/react-grid-layout
