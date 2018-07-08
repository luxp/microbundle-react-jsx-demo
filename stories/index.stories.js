import React from 'react';
import { storiesOf } from '@storybook/react';
import MicrobundleReactJsxDemo from '../dist/index.mjs';

storiesOf('Message', module)
  .add('Unicorn', () => <MicrobundleReactJsxDemo content="Unicorn" />)
  .add('Rainbow', () => <MicrobundleReactJsxDemo content="Rainbow" />);
