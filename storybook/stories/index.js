import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import Login from '../../components/login/login.component';
import ResetPassword from '../../components/reset-password/reset-password.component';
import Button from './Button';
import CenterView from './CenterView';
import Welcome from './Welcome';

storiesOf('Authentication/Login', module)
  .add('Render', () => (
    <Login
      onLogin={action('login')}
      onResetPassword={action('reset password')}
    />
  ));

storiesOf('Authentication/ResetPassword', module)
  .add('Render', () => (
    <ResetPassword
      onReset={action('reset action')}
    />
  ));

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>Hello Button</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));
