import React, { Component, Fragment } from 'react';
import Ic from './Icon';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class DirectionalIcons extends Component {
  render() {
    const icons = [
      'step-backward',
      'step-forward',
      'fast-backward',
      'fast-forward',
      'shrink',
      'arrows-alt',
      'down',
      'up',
      'left',
      'right',
      'caret-up',
      'caret-down',
      'caret-left',
      'caret-right',
      'up-circle',
      'down-circle',
      'left-circle',
      'right-circle',
      'up-circle-o',
      'down-circle-o',
      'right-circle-o',
      'left-circle-o',
      'double-right',
      'double-left',
      'verticle-left',
      'verticle-right',
      'forward',
      'backward',
      'rollback',
      'enter',
      'retweet',
      'swap',
      'swap-left',
      'swap-right',
      'arrow-up',
      'arrow-down',
      'arrow-left',
      'arrow-right',
      'play-circle',
      'play-circle-o',
      'up-square',
      'down-square',
      'left-square',
      'right-square',
      'up-square-o',
      'down-square-o',
      'left-square-o',
      'right-square-o',
      'login',
      'logout',
      'menu-fold',
      'menu-unfold',
    ];

    return (
      <section className="example">
        <h3 className="title">Directional Icons</h3>
        <section className="icons ml20">
          {icons.map((icon, i) => (
            <Ic key={i} icon={icon} />
          ))}
        </section>
      </section>
    );
  }
}

export default withOptions(
  DirectionalIcons,
  AllProps,
  `import React, { Component, Fragment } from 'react';
import { Icon } from 'antd';

const IconItem = ({icon}) => (
  <div className="icon">
    <Icon type={icon} />
    <br />
    <span>{icon}</span>
  </div>
)

class DirectionalIcons extends Component {
  render() {
    const icons: string[] = ['icon1', 'icon2', '...'];

    return (
      <Fragment>
        <h3 className="title">Directional Icons</h3>
        <section className="icons ml20">
          {
            icons.map((icon, i) => <Ic key={i} icon={icon} />)
          }
        </section>
      </Fragment>
    );
  }
}`,
);
