import React, { Component, Fragment } from 'react';

import Type from './Types';
import Size from './Size';
import Icon from './Icon';
import Disabled from './Disabled';
import Multiple from './Multiple';
import Loading from './Loading';
import Group from './Group';
import Ghost from './Ghost';

class ButtonPage extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="title">Button</h1>

        <h2 className="title">When to use</h2>

        <p className="text">
          A button means an operation (or a series of operations). Clicking a button will trigger
          corresponding business logic.
        </p>

        <h2 className="title">Exemples:</h2>

        <Type />
        <Icon />
        <Size />
        <Disabled />
        <Loading />
        <Multiple />
        <Group />
        <Ghost />
      </Fragment>
    );
  }
}

export default ButtonPage;
