import React, { Component } from 'react';
import { Icon, Input, AutoComplete } from 'antd';
import injectInfoWithSourceCode from '../../../../common/injectInfoWithSourceCode';
import { AutoCompleteProps } from '../../../../common/propsCollection';
import { action } from '@storybook/addon-actions';

const {
  dropdownClassName,
  dropdownMatchSelectWidth,
  dropdownStyle,
  size,
  dataSource,
  placeholder,
  optionLabelProp,
} = AutoCompleteProps;

class Pattern extends Component {
  state = {};
  render() {
    const Option = AutoComplete.Option;
    const OptGroup = AutoComplete.OptGroup;
    const dataSource = [
      {
        title: '话题',
        children: [
          {
            title: 'AntDesign',
            count: 10000,
          },
          {
            title: 'AntDesign UI',
            count: 10600,
          },
        ],
      },
      {
        title: '问题',
        children: [
          {
            title: 'AntDesign UI 有多好',
            count: 60100,
          },
          {
            title: 'AntDesign 是啥',
            count: 30010,
          },
        ],
      },
      {
        title: '文章',
        children: [
          {
            title: 'AntDesign 是一个设计语言',
            count: 100000,
          },
        ],
      },
    ];
    const options = dataSource
      .map(group => (
        <OptGroup key={group.title} label={this.renderTitle(group.title)}>
          {group.children.map(opt => (
            <Option key={opt.title} value={opt.title}>
              {opt.title}
              <span className="certain-search-item-count">
                {opt.count} 人 关注
              </span>
            </Option>
          ))}
        </OptGroup>
      ))
      .concat([
        <Option disabled key="all" className="show-all">
          <a
            href="https://www.google.com/search?q=antd"
            target="_blank"
            rel="noopener noreferrer"
          >
            查看所有结果
          </a>
        </Option>,
      ]);

    return (
      <section className="example">
        <h3 className="ex-title">Lookup-Patterns - Certain Category</h3>

        <div style={{ width: '40%' }}>
          <AutoComplete
            className="certain-category-search"
            dropdownClassName="certain-category-search-dropdown"
            dropdownMatchSelectWidth={false}
            dropdownStyle={{ width: 300 }}
            size="large"
            style={{ width: '100%' }}
            dataSource={options}
            placeholder="input here"
            optionLabelProp="value"
            onSelect={action('Value Selected')}
          >
            <Input
              suffix={<Icon type="search" className="certain-category-icon" />}
            />
          </AutoComplete>
        </div>
      </section>
    );
  }

  renderTitle(title) {
    return (
      <span>
        {title}
        <a
          style={{ float: 'right' }}
          href="https://www.google.com/search?q=antd"
          target="_blank"
          rel="noopener noreferrer"
        >
          更多
        </a>
      </span>
    );
  }
}

export default injectInfoWithSourceCode(
  Pattern,
  {
    dropdownClassName,
    dropdownMatchSelectWidth,
    dropdownStyle,
    size,
    dataSource,
    placeholder,
    optionLabelProp,
  },
  () => `import { Icon, Input, AutoComplete } from 'antd';

class Pattern extends Component {
  state = {};
  render() {
    const Option = AutoComplete.Option;
    const OptGroup = AutoComplete.OptGroup;
    const dataSource = [
      {
        title: '话题',
        children: [
          {
            title: 'AntDesign',
            count: 10000,
          },
          {
            title: 'AntDesign UI',
            count: 10600,
          },
        ],
      },
      {
        title: '问题',
        children: [
          {
            title: 'AntDesign UI 有多好',
            count: 60100,
          },
          {
            title: 'AntDesign 是啥',
            count: 30010,
          },
        ],
      },
      {
        title: '文章',
        children: [
          {
            title: 'AntDesign 是一个设计语言',
            count: 100000,
          },
        ],
      },
    ];
    const options = dataSource
      .map(group => (
        <OptGroup key={group.title} label={this.renderTitle(group.title)}>
          {group.children.map(opt => (
            <Option key={opt.title} value={opt.title}>
              {opt.title}
              <span className="certain-search-item-count">
                {opt.count} 人 关注
              </span>
            </Option>
          ))}
        </OptGroup>
      ))
      .concat([
        <Option disabled key="all" className="show-all">
          <a
            href="https://www.google.com/search?q=antd"
            target="_blank"
            rel="noopener noreferrer"
          >
            查看所有结果
          </a>
        </Option>,
      ]);

    return (
      <section className="example">
        <h3 className="ex-title">Lookup-Patterns - Certain Category</h3>

        <div style={{ width: '40%' }}>
          <AutoComplete
            className="certain-category-search"
            dropdownClassName="certain-category-search-dropdown"
            dropdownMatchSelectWidth={false}
            dropdownStyle={{ width: 300 }}
            size="large"
            style={{ width: '100%' }}
            dataSource={options}
            placeholder="input here"
            optionLabelProp="value"
          >
            <Input
              suffix={<Icon type="search" className="certain-category-icon" />}
            />
          </AutoComplete>
        </div>
      </section>
    );
  }

  renderTitle(title) {
    return (
      <span>
        {title}
        <a
          style={{ float: 'right' }}
          href="https://www.google.com/search?q=antd"
          target="_blank"
          rel="noopener noreferrer"
        >
          更多
        </a>
      </span>
    );
  }
}`,
);
