import React, { Component } from 'react';
import { Icon } from 'antd';
import 'antd/lib/icon/style';

class IconItem extends Component {
  render() {
    return (
      <div className="icon">
        <Icon type={this.props.icon} />
        <br />
        <span>{this.props.icon}</span>
      </div>
    );
  }
}

export default IconItem;
