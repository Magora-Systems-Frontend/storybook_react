import React, { Component } from 'react';
import { Pagination } from 'antd';
import 'antd/lib/pagination/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';
import { action } from '@storybook/addon-actions';

class Jumper extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Jumper</h3>
        <Pagination
          showQuickJumper
          defaultCurrent={2}
          total={500}
          onChange={e => action('Page')(e)}
        />
      </section>
    );
  }
}

export default withOptions(
  Jumper,
  AllProps,
  `import React, { Component } from 'react';
import { Pagination } from 'antd';
import 'antd/lib/pagination/style';

class Jumper extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Jumper</h3>

        <Pagination showQuickJumper defaultCurrent={2} total={500} />
      </section>
    );
  }
}`,
);
