import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CreateAccount from '../../components/admin/create-account.component';
import Login from '../../components/login/login.component';
import ResetPassword from '../../components/reset-password/reset-password.component';
import QuestionList from '../../components/question-list/question-list.component';
import Waiting from '../../components/waiting/waiting.component';
import ShadowText from "../../components/shadow-text/shadow-text.component";
import { createStore } from "redux";
import reducer from "../../reducers";
import middleware from "../../middleware";
import { Provider } from 'react-redux';
import TakePicture from "../../components/take-picture/take-picture.component";

const store = createStore(reducer, middleware);

storiesOf('Admin/CreateAccount', module)
  .add('Render', () => (
    <CreateAccount
      onCreateAccount={action('create account')}
    />
  ));

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

storiesOf('Manage Questions', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
    .add('Show Question List', () => (
      <QuestionList />
    ));

storiesOf('Shadow Text', module)
  .add('Text with App styling', () => (
      <ShadowText>Hello World!</ShadowText>
    ));


storiesOf('TakePicture', module)
  .add('TakePicture', () => (
    <TakePicture/>
  ));

storiesOf('Waiting Screen', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('Show waiting to start', () => (
    <Waiting />
  ));
