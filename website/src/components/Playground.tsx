import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import {
  Compiler,
  Knobs,
  Editor,
  Error,
  ActionButtons,
  Placeholder,
} from 'react-view';

import {
  SafeAreaInsetsContext,
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

export default ({ params, containerStyle = {} }) => {
  return (
    <BrowserOnly fallback={<>Loading...</>}>
      {() => (
        // @ts-ignore
        <SafeAreaInsetsContext.Provider>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <div
              style={{
                border: '1px solid var(--ifm-color-emphasis-200)',
                borderRadius: 'var(--ifm-global-radius)',
                position: 'relative',
                ...containerStyle,
              }}
            >
              <Compiler
                {...params.compilerProps}
                minHeight={62}
                placeholder={Placeholder}
              />
            </div>
            <Error msg={params.errorProps.msg} isPopup />
            <Knobs {...params.knobProps} />
            {/* <Editor {...params.editorProps} /> */}
            <Error {...params.errorProps} />
            <ActionButtons {...params.actions} />
          </SafeAreaProvider>
        </SafeAreaInsetsContext.Provider>
      )}
    </BrowserOnly>
  );
};
