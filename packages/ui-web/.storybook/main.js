/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: [
    '../src/foundations/**/*.stories.@(js|mdx)',
    '../src/components/**/*.stories.@(js|mdx)',
  ],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
  framework: '@storybook/vue3-vite',
}
export default config
