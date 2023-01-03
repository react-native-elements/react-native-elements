import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import type { ClientModule } from '@docusaurus/types';
import versions from '../versions.json';

declare global {
  const gtag: any;
}

export default (function (): ClientModule | undefined {
  if (!ExecutionEnvironment.canUseDOM) {
    return;
  }

  return {
    onRouteUpdate({ location }) {
      if (!location || !location.pathname) return;
      const paths = location.pathname?.split('/').filter(Boolean);
      if (paths[0] !== 'docs') return;

      let version = '',
        component = '';

      if (paths[1] == 'next' || versions.includes(paths[1])) {
        version = paths[1];
        component = paths[3] || paths[2] || 'overview';
      } else {
        version = versions[0];
        component = paths[2] || paths[1] || 'overview';
      }

      // @ts-ignore
      if (!window.gtag) return;

      if (version && component) {
        gtag('event', 'doc_view', {
          version,
          component,
          docID: `${version} - ${component}`,
        });
      }
      // if (version) {
      //   version = version.replace(/\.|-/g, '_');
      //   gtag('event', `version_${version}`, {
      //     component,
      //   });
      // }
    },
  };
})();
