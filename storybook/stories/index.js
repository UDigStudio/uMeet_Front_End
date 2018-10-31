import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import CreateAccount from '../../components/admin/create-account.component';
import Login from '../../components/login/login.component';
import ResetPassword from '../../components/reset-password/reset-password.component';
import QuestionList from '../../components/question-list/question-list.component';

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
    .add('Show Question List', () => (
      <QuestionList
        questions={[
          { id: '1', text: 'First question?' },
          { id: '2', text: 'Second question?' },
          { id: '2', text: 'Third question?' }
        ]}
      />
    ));

