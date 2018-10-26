import StorybookUI from "./storybook";

import App from "./components/app/app.component";

module.exports = __DEV__ ? StorybookUI : App;