/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default (() => {
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }

  const updateSnacksTheme = () => {
    const theme = document.querySelector('html').dataset.theme;
    document.querySelectorAll('.snack-player').forEach((snack) => {
      snack.dataset.snackTheme = theme;
    });
  };

  const initSnackPlayers = () => {
    // console.log('initSnackPlayers');
    updateSnacksTheme();
    window.ExpoSnack && window.ExpoSnack.initialize();
  };

  const setupTabPanelsMutationObservers = () => {
    const tabPanels = document.querySelectorAll('[role=tabpanel]');
    // console.log('setupTabPanelsMutationObservers', {tabPanels});
    tabPanels.forEach((tabPanel) => {
      new MutationObserver((mutations, observer) => {
        initSnackPlayers();
        // console.log('tabPanel MutationObserver triggered', {tabPanels});
      }).observe(tabPanel, { childList: true });
    });
  };

  if (document.readyState === 'complete') {
    updateSnacksTheme();
    setupTabPanelsMutationObservers();
  } else {
    document.addEventListener('readystatechange', () => {
      if (document.readyState === 'complete') {
        updateSnacksTheme();
        setupTabPanelsMutationObservers();
      }
    });
  }

  // Reset snack iframes on theme changes to sync theme
  // Hacky, but no better solution for now
  // see https://github.com/expo/snack-web/blob/master/src/client/components/EmbedCode.tsx#L60
  const setupThemeSynchronization = () => {
    new MutationObserver((mutations, observer) => {
      if ('ExpoSnack' in window) {
        document.querySelectorAll('.snack-player').forEach((container) => {
          updateSnacksTheme();
          window.ExpoSnack && window.ExpoSnack.remove(container);
          window.ExpoSnack && window.ExpoSnack.append(container);
        });
      }
    }).observe(document.getElementsByTagName('html')[0], {
      attributeFilter: ['data-theme'],
      attributes: true,
      childList: false,
      subtree: false,
    });
  };

  // Need to set the theme before the snack script (deferred) initialize
  updateSnacksTheme();
  setupThemeSynchronization();

  return {
    onRouteUpdate({ location }) {
      // console.log('onRouteUpdate', {location});

      // TODO temporary, because onRouteUpdate fires before the new route renders...
      // see https://github.com/facebook/docusaurus/issues/3399#issuecomment-704401189
      setTimeout(() => {
        initSnackPlayers();
        setupTabPanelsMutationObservers();
      }, 0);
    },
  };
})();
