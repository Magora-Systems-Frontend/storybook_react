import React, { Component } from 'react';
import { Pagination } from 'antd';
import 'antd/lib/pagination/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';
import { action } from '@storybook/addon-actions';

class Controlled extends Component {
  state = {
    current: 3,
  };

  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Controlled pagination</h3>
        <Pagination current={this.state.current} onChange={this.onChange} total={50} />
      </section>
    );
  }

  onChange = page => {
    this.setState({ current: page });
    action('Page')(page);
  };
}

export default withOptions(
  Controlled,
  AllProps,
  `import React, { Component } from 'react';
import { Pagination } from 'antd';
import 'antd/lib/pagination/style';

class Controlled extends Component {
  state = {
    current: 3
  };

  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Controlled pagination</h3>
        <Pagination current={this.state.current} onChange={this.onChange} total={50} />
      </section>
    );
  }

  onChange = page => this.setState({ current: page });
}`,
);
