import '../src/index.css'; // apply modified css 

// config storybook to log the actions in the UI
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { // about actions
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
