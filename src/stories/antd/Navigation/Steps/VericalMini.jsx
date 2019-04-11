import React, { Component } from 'react';
import { Steps } from 'antd';
import 'antd/lib/steps/style';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class VericalMini extends Component {
  render() {
    const Step = Steps.Step;
    return (
      <section className="example">
        <h3 className="ex-title">Vertical Mini Version</h3>
        <Steps direction="vertical" size="small" current={1}>
          <Step title="Finished" description="This is a description." />
          <Step title="In Progress" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
        </Steps>
      </section>
    );
  }
}

export default withOptions(
  VericalMini,
  AllProps,
  `import React, { Component } from 'react';
import { Steps } from 'antd';
import 'antd/lib/steps/style';

class VericalMini extends Component {
  render() {
    const Step = Steps.Step;
    return (
      <section className="example">
        <h3 className="ex-title">Vertical Mini Version</h3>
        <Steps direction="vertical" size="small" current={1}>
          <Step title="Finished" description="This is a description." />
          <Step title="In Progress" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
        </Steps>
      </section>
    );
  }
}`,
);
