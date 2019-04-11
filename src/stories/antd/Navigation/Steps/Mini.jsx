import React, { Component } from 'react';
import { Steps } from 'antd';
import 'antd/lib/steps/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class Mini extends Component {
  render() {
    const Step = Steps.Step;
    return (
      <section className="example">
        <h3 className="ex-title">Mini version</h3>
        <Steps size="small" current={1}>
          <Step title="Finished" />
          <Step title="In Progress" />
          <Step title="Waiting" />
        </Steps>
      </section>
    );
  }
}

export default withOptions(
  Mini,
  AllProps,
  `import React, { Component } from 'react';
import { Steps } from 'antd';
import 'antd/lib/steps/style';

class Mini extends Component {
  render() {
    const Step = Steps.Step;
    return (
      <section className="example">
        <h3 className="ex-title">Mini version</h3>
          <Steps size="small" current={1}>
            <Step title="Finished" />
            <Step title="In Progress" />
            <Step title="Waiting" />
          </Steps>
      </section>
    );
  }
}`,
);
