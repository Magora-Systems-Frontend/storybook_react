import React, { Component } from 'react';
import { Slider } from 'antd';
import 'antd/lib/slider/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

function formatter(value) {
  return `${value}%`;
}

class Custom extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Customerize tooltip</h3>
        <div>
          <Slider tipFormatter={formatter} />
          <Slider tipFormatter={null} />
        </div>
      </section>
    );
  }
}

export default withOptions(
  Custom,
  AllProps,
  `import React, { Component } from 'react';
import { Slider } from 'antd';
import 'antd/lib/slider/style';

function formatter(value) {
  return \`\${value}%\`;
}

class Custom extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Customerize tooltip</h3>
        <div>
          <Slider tipFormatter={formatter} />
          <Slider tipFormatter={null} />
        </div>
      </section>
    );
  }
}`,
);
