/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useContext } from 'react';
import {
  LiveProvider,
  LiveError,
  LiveContext,
  LivePreview,
  LiveEditor,
} from 'react-live';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { usePrismTheme } from '@docusaurus/theme-common';
import styles from './styles.module.css';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { MdCode } from 'react-icons/md';
import { SiExpo } from 'react-icons/si';

function Header({ children }) {
  return <div className={clsx(styles.playgroundHeader)}>{children}</div>;
}

function LivePreviewLoader() {
  // Is it worth improving/translating?
  return <div>Loading...</div>;
}

function ThemedLiveEditor(props) {
  const isBrowser = useIsBrowser();
  const { code, language, theme, disabled, onChange } = useContext(LiveContext);
  // const start = code.indexOf('<template>') + '<template>'.length;
  // const end = code.indexOf('</template>');

  // const previewCode = props.showFullCode
  //   ? props.preImports + '\n' + code
  //   : code.substring(start, end).replace(/(^\s+$)|(\n$)|(\w+)$|(^\n)/g, '');
  // const previewCode = props.skipStack
  //   ? code
  //   : code.replace(/(<[\/]?Stack.*>)/g, '').replace(/(^\s+$)|(\n$)|(^\n)/g, '');

  return (
    <LiveEditor
      // We force remount the editor on hydration,
      // otherwise dark prism theme is not applied
      key={String(isBrowser)}
      code={code}
      {...{ language, theme, disabled, onChange }}
      {...props}
      className={styles.playgroundEditor}
    />
  );
}

function EditorWithHeader({ showCode, preImports = '', wrapper }) {
  const [open, setOpen] = React.useState(showCode);

  const handleToggle = () => {
    setOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <div className={styles.playgroundPreview}>
        <BrowserOnly fallback={<LivePreviewLoader />}>
          {() => (
            <>
              <LivePreview />
              <LiveError />
              <div className={styles.toggleContainer}>
                <div className={clsx(styles.toggleIcon)} onClick={handleToggle}>
                  <MdCode />
                  <span className={styles.showCode}>
                    {open ? 'Hide' : 'Show'} Code
                  </span>
                </div>
              </div>
            </>
          )}
        </BrowserOnly>
      </div>
      {open && <ThemedLiveEditor preImports={preImports} showCode={open} />}
    </>
  );
}

export default function Playground({ children, transformCode, ...props }) {
  const {
    siteConfig: { themeConfig },
  } = useDocusaurusContext();
  const {
    liveCodeBlock: { playgroundPosition },
  } = themeConfig;
  const prismTheme = usePrismTheme();

  return (
    <div className={styles.playgroundContainer}>
      {/* @ts-expect-error: type incompatibility with refs */}
      <LiveProvider
        code={children.replace(/\n$/, '')}
        // transformCode={(code) => {
        //   return code;
        // }}
        theme={prismTheme}
        {...props}
      >
        <EditorWithHeader showCode={props.showCode} />
      </LiveProvider>
    </div>
  );
}
