import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import CreateAccount from '../../components/admin/create-account.component';
import Login from '../../components/login/login.component';
import ResetPassword from '../../components/reset-password/reset-password.component';
import QuestionList from '../../components/question-list/question-list.component';
import ManageQuestion from '../../components/manage-question/manage-question.component';

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
  .add('View questions', () => (
    <QuestionList 
      questions={[{ id: '1', text: 'First question?', active: true }, { id: '2', text: 'Second question?', active: false }]}
    />
  ));

storiesOf('Manage Questions', module)
  .add('Activate question', () => (
    <ManageQuestion 
      question={{ id: '1', text: 'First question?', active: true }}
    />
  ));
