import React, { Component } from 'react';
import { Divider } from 'antd';
import 'antd/lib/divider/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class Horizontal extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Horizontal</h3>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere
            mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
          </p>
          <Divider />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere
            mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
          </p>
          <Divider>With Text</Divider>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere
            mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
          </p>
          <Divider dashed />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere
            mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
          </p>
        </div>
      </section>
    );
  }
}

export default withOptions(
  Horizontal,
  AllProps,
  `import React, { Component } from 'react';
import { Divider } from 'antd';
import 'antd/lib/divider/style';

class Horizontal extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Horizontal</h3>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
          <Divider />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
          <Divider>With Text</Divider>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
          <Divider dashed />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.</p>
        </div>
      </section>
    );
  }
}`,
);
