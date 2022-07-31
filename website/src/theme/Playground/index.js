/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { usePrismTheme } from '@docusaurus/theme-common';
import styles from './styles.module.css';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { MdCode, MdOpenInNew } from 'react-icons/md';
//  import type {Props} from '@theme/Playground';
//  import type {ThemeConfig} from '@docusaurus/theme-live-codeblock';

function Header({ children }) {
  return <div className={clsx(styles.playgroundHeader)}>{children}</div>;
}

function LivePreviewLoader() {
  // Is it worth improving/translating?
  return <div>Loading...</div>;
}

function ResultWithHeader({ setOpen }) {
  return (
    <>
      {/* <Header>
        <Translate
          id="theme.Playground.result"
          description="The result label of the live codeblocks"
        >
          Result
        </Translate>
      </Header> */}
      {/* https://github.com/facebook/docusaurus/issues/5747 */}
      <div className={styles.playgroundPreview}>
        <BrowserOnly fallback={<LivePreviewLoader />}>
          {() => (
            <>
              <LivePreview />
              <LiveError />
              <MdCode color="white" />
              <button onClick={setOpen}>
                <MdCode color="white" />
              </button>
            </>
          )}
        </BrowserOnly>
      </div>
    </>
  );
}

function ThemedLiveEditor() {
  const isBrowser = useIsBrowser();
  return (
    <LiveEditor
      // We force remount the editor on hydration,
      // otherwise dark prism theme is not applied
      key={String(isBrowser)}
      className={styles.playgroundEditor}
    />
  );
}

function EditorWithHeader() {
  const [open, setOpen] = React.useState(true);

  const [state, setState] = React.useState(undefined);

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
              <div className={clsx(styles.toggleIcon)}>
                <MdCode onClick={handleToggle} />{' '}
                {/* <MdOpenInNew onClick={openInSnack} /> */}
              </div>
            </>
          )}
        </BrowserOnly>
      </div>
      {open && (
        <>
          {' '}
          {/* <Header>
            <Translate
              id="theme.Playground.liveEditor"
              description="The live editor label of the live codeblocks"
            >
              Live Editor
            </Translate>
          </Header> */}
          <ThemedLiveEditor />
        </>
      )}
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
        transformCode={transformCode || ((code) => code)}
        theme={prismTheme}
        {...props}
      >
        {playgroundPosition === 'top' ? (
          <>
            <EditorWithHeader />
          </>
        ) : (
          <>
            <EditorWithHeader />
          </>
        )}
      </LiveProvider>
    </div>
  );
}
