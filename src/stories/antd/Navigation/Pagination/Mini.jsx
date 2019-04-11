import React, { Component } from 'react';
import { Pagination } from 'antd';
import 'antd/lib/pagination/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';
import { action } from '@storybook/addon-actions';

class Size extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="title">Mini pagination</h3>
        <div className="mb20">
          <Pagination size="small" total={50} onChange={e => action('Page')(e)} />
        </div>
        <div className="mb20">
          <Pagination
            size="small"
            total={50}
            showSizeChanger
            showQuickJumper
            onChange={e => action('Page')(e)}
          />
        </div>
        <Pagination
          size="small"
          total={50}
          showTotal={this.showTotal}
          onChange={e => action('Page')(e)}
        />
      </section>
    );
  }

  showTotal(total) {
    return `Total ${total} items`;
  }
}

export default withOptions(
  Size,
  AllProps,
  `import React, { Component } from 'react';
import { Pagination } from 'antd';
import 'antd/lib/pagination/style';

class Size extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="title">Mini pagination</h3>
        <div className="mb20">
          <Pagination size="small" total={50} />
        </div>
        <div className="mb20">
          <Pagination size="small" total={50} showSizeChanger showQuickJumper />
        </div>
        <Pagination size="small" total={50} showTotal={this.showTotal} />
      </section>
    );
  }

  showTotal(total) {
    return \`Total \${total} items\`;
  }
}`,
);
