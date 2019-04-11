import React, { Component } from 'react';
import { Pagination } from 'antd';
import 'antd/lib/pagination/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';
import { action } from '@storybook/addon-actions';

class Simple extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Simple mode</h3>
        <Pagination simple defaultCurrent={2} total={50} onChange={e => action('Page')(e)} />
      </section>
    );
  }
}

export default withOptions(
  Simple,
  AllProps,
  `import React, { Component } from 'react';
import { Pagination } from 'antd';
import 'antd/lib/pagination/style';

class Simple extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Simple mode</h3>
        <Pagination simple defaultCurrent={2} total={50} />
      </section>
    );
  }
}`,
);
