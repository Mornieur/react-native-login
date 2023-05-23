export default ({ config }) => ({
  ...config,
  name: 'Mobile Project',
  slug: 'mobile-project',
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
});
