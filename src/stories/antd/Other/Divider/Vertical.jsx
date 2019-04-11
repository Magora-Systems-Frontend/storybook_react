import React, { Component } from 'react';
import { Divider } from 'antd';
import 'antd/lib/divider/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class Vertical extends Component {
  handleClick = e => {
    e.preventDefault();
  };
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Vertical</h3>
        <div>
          Text
          <Divider type="vertical" />
          <a onClick={this.handleClick} href="#">
            Link
          </a>
          <Divider type="vertical" />
          <a onClick={this.handleClick} href="#">
            Link
          </a>
        </div>
      </section>
    );
  }
}

export default withOptions(
  Vertical,
  AllProps,
  `import React, { Component } from 'react';
import { Divider } from 'antd';
import 'antd/lib/divider/style';

class Vertical extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Vertical</h3>
        <div>
          Text
          <Divider type="vertical" />
          <a href="#">Link</a>
          <Divider type="vertical" />
          <a href="#">Link</a>
        </div>
      </section>
    );
  }
}`,
);
