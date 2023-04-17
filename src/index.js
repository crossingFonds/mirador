import Mirador from 'mirador/dist/es/src/index';
import { miradorImageToolsPlugin } from 'mirador-image-tools';

    const config = {
      id: 'demo',
      windows: [

      {
        imageToolsEnabled: true,
        imageToolsOpen: true,
        manifestId: 'https://crossingfonds.github.io/assets/JSON/example.json',
      },
      {
        imageToolsEnabled: true,
        imageToolsOpen: true,
        manifestId: 'https://crossingfonds.github.io/assets/JSON/case1.json',
      }
      ]
    };

Mirador.viewer(config, [
  ...miradorImageToolsPlugin,
]);
