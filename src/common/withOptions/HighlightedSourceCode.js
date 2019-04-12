import React, { useLayoutEffect } from 'react';
import Prism from 'prismjs';
import PrismJsx from 'prismjs/components/prism-jsx.min';

const HighlightedSourceCode = ({ code }) => {
  useLayoutEffect(() => {
    Prism.highlightAll();
  });

  return (
    <pre>
      <code className="language-jsx">{code}</code>
    </pre>
  );
};

export default HighlightedSourceCode;
