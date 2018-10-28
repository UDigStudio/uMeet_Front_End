import StorybookUI from "./storybook";

import App from "./components/app/app.component";

const __DEV__ = false;

module.exports = __DEV__ ? StorybookUI : App;