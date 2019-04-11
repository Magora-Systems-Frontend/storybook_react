import React, { Component, Fragment } from 'react';
import Icon from './Icon';
import { withOptions } from '../../../../common/withOptions';
import * as AllProps from './_DATA';

class Application extends Component {
  render() {
    const icons = [
      'lock',
      'unlock',
      'area-chart',
      'pie-chart',
      'bar-chart',
      'dot-chart',
      'bars',
      'book',
      'calendar',
      'cloud',
      'cloud-download',
      'code',
      'code-o',
      'copy',
      'credit-card',
      'delete',
      'desktop',
      'download',
      'edit',
      'ellipsis',
      'file',
      'file-text',
      'file-unknown',
      'file-pdf',
      'file-word',
      'file-excel',
      'file-jpg',
      'file-ppt',
      'file-add',
      'folder',
      'folder-open',
      'folder-add',
      'hdd',
      'frown',
      'frown-o',
      'meh',
      'meh-o',
      'smile',
      'smile-o',
      'inbox',
      'laptop',
      'appstore-o',
      'appstore',
      'line-chart',
      'link',
      'mail',
      'mobile',
      'notification',
      'paper-clip',
      'picture',
      'poweroff',
      'reload',
      'search',
      'setting',
      'share-alt',
      'shopping-cart',
      'tablet',
      'tag',
      'tag-o',
      'tags',
      'tags-o',
      'to-top',
      'upload',
      'user',
      'video-camera',
      'home',
      'loading',
      'loading-3-quarters',
      'cloud-upload-o',
      'cloud-download-o',
      'cloud-upload',
      'cloud-o',
      'star-o',
      'star',
      'heart-o',
      'heart',
      'environment',
      'environment-o',
      'eye',
      'eye-o',
      'camera',
      'camera-o',
      'save',
      'team',
      'solution',
      'phone',
      'filter',
      'exception',
      'export',
      'customer-service',
      'qrcode',
      'scan',
      'like',
      'like-o',
      'dislike',
      'dislike-o',
      'message',
      'pay-circle',
      'pay-circle-o',
      'calculator',
      'pushpin',
      'pushpin-o',
      'bulb',
      'select',
      'switcher',
      'rocket',
      'bell',
      'disconnect',
      'database',
      'compass',
      'barcode',
      'hourglass',
      'key',
      'flag',
      'layout',
      'printer',
      'sound',
      'usb',
      'skin',
      'tool',
      'sync',
      'wifi',
      'car',
      'schedule',
      'user-add',
      'user-delete',
      'usergroup-add',
      'usergroup-delete',
      'man',
      'woman',
      'shop',
      'gift',
      'idcard',
      'medicine-box',
      'red-envelope',
      'coffee',
      'copyright',
      'trademark',
      'safety',
      'wallet',
      'bank',
      'trophy',
      'contacts',
      'global',
      'shake',
      'api',
      'fork',
      'dashboard',
      'form',
      'table',
      'profile',
    ];
    return (
      <section className="example">
        <h3 className="title">Application Icons</h3>
        <section className="icons">
          {icons.map((icon, i) => (
            <Icon key={i} icon={icon} />
          ))}
        </section>
      </section>
    );
  }
}

export default withOptions(
  Application,
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

class Application extends Component {
  render() {
    const icons: string[] = ['icon1', 'icon2', '...'];
    return (
      <Fragment>
        <h3 className="title">Application Icons</h3>
        <section className="icons">
          {
            icons.map((icon, i) => <IconItem key={i} icon={icon} />)
          }
        </section>
      </Fragment>
    );
  }
}`,
);
