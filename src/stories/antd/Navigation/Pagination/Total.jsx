import React, { Component } from 'react';
import { Pagination } from 'antd';
import 'antd/lib/pagination/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';
import { action } from '@storybook/addon-actions';

class TotalNumber extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Total Number</h3>
        <div className="mb20">
          <Pagination
            total={85}
            showTotal={total => `Total ${total} items`}
            pageSize={20}
            defaultCurrent={1}
            onChange={e => action('Page')(e)}
          />
        </div>

        <Pagination
          total={85}
          showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
          pageSize={20}
          defaultCurrent={1}
          onChange={e => action('Page')(e)}
        />
      </section>
    );
  }
}

export default withOptions(
  TotalNumber,
  AllProps,
  `import React, { Component } from 'react';
import { Pagination } from 'antd';
import 'antd/lib/pagination/style';

class TotalNumber extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Total Number</h3>
        <div className="mb20">
          <Pagination
            total={85}
            showTotal={total => \`Total \${total} items\`}
            pageSize={20}
            defaultCurrent={1}
          />
        </div>

        <Pagination
          total={85}
          showTotal={(total, range) => \`\${range[0]}-\${range[1]} of \${total} items\`}
          pageSize={20}
          defaultCurrent={1}
        />
      </section>
    );
  }
}`,
);
