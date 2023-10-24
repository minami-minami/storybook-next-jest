import '@testing-library/jest-dom'
import { decorators as nextjsDecorators } from '@storybook/nextjs/preview.js';
import { setProjectAnnotations } from '@storybook/react';
import * as globalStorybookConfig from './.storybook/preview';

const decorators = [...nextjsDecorators, ...launchdarklyDecorators, ...globalStorybookConfig.decorators];

setProjectAnnotations({
  ...globalStorybookConfig,
  decorators,
});
