import React, { Component } from 'react';
import { Steps } from 'antd';
import 'antd/lib/steps/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class Dot extends Component {
  render() {
    const Step = Steps.Step;
    return (
      <section className="example">
        <h3 className="ex-title">Dot Style</h3>
        <Steps progressDot current={1}>
          <Step title="Finished" description="This is a description." />
          <Step title="In Progress" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
        </Steps>
      </section>
    );
  }
}

export default withOptions(
  Dot,
  AllProps,
  `import React, { Component } from 'react';
import { Steps } from 'antd';
import 'antd/lib/steps/style';

class Dot extends Component {
  render() {
    const Step = Steps.Step;
    return (
      <section className="example">
        <h3 className="ex-title">Dot Style</h3>
        <Steps progressDot current={1}>
          <Step title="Finished" description="This is a description." />
          <Step title="In Progress" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
        </Steps>
      </section>
    );
  }
}`,
);
