import React, { Component } from 'react';
import { Pagination } from 'antd';
import 'antd/lib/pagination/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';
import { action } from '@storybook/addon-actions';

class Basic extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Basic pagination</h3>
        <div className="mb20">
          <Pagination defaultCurrent={1} total={50} onChange={e => action('Page')(e)} />
        </div>
        <Pagination defaultCurrent={6} total={500} onChange={e => action('Page')(e)} />
      </section>
    );
  }
}

export default withOptions(
  Basic,
  AllProps,
  `import React, { Component } from 'react';
import { Pagination } from 'antd';
import 'antd/lib/pagination/style';

class Basic extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Basic pagination</h3>
        <div className="mb20">
          <Pagination defaultCurrent={1} total={50} />
        </div>
        <Pagination defaultCurrent={6} total={500} />
      </section>
    );
  }
}`,
);
