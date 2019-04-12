import React, { useState } from 'react';
import { Button, Icon } from 'antd';
import PropsModal from './PropsModal';
import HighlightedSourceCode from './HighlightedSourceCode';

export default (Component, dataProps, code) => {
  const WithOptions = () => {
    const [propsModal, setPropsModal] = useState(false);
    const [sourceCode, setSourceCode] = useState(false);

    return (
      <>
        <Component />
        <section className="options">
          <Button.Group>
            <Button
              onClick={() => setPropsModal(prevPropsModal => !prevPropsModal)}
              style={{ fontSize: 16 }}
            >
              <Icon type="setting" theme="filled" />
            </Button>
            <Button
              onClick={() => setSourceCode(prevSourceCode => !prevSourceCode)}
              style={{ fontSize: 16 }}
            >
              <Icon type="code" theme="filled" />
            </Button>
          </Button.Group>

          {propsModal && (
            <PropsModal
              dataProps={dataProps}
              propsModal={propsModal}
              toggle={() => setPropsModal(prevPropsModal => !prevPropsModal)}
            />
          )}

          {sourceCode && <HighlightedSourceCode code={code} />}
        </section>
      </>
    );
  };
  return WithOptions;
};
