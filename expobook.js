import React from 'react';
import createExpobook from 'expobook';
import QuestionList from './components/question-list/question-list.component';
import ManageQuestion from './components/manage-question/manage-question.component';
import CreateAccount from './components/admin/create-account.component';
import Login from './components/login/login.component';
import ResetPassword  from './components/reset-password/reset-password.component';

const expobook = createExpobook();

expobook.add('View Question List', () => <QuestionList questions={[{ id: '1', text: 'First question?', active: true }, { id: '2', text: 'Second question?', active: false }]} />);
expobook.add('Manage a Question', () => <ManageQuestion question={{ id: '1', text: 'First question?', active: true }} />);
expobook.add('Admin/Create Account', () => <CreateAccount onCreateAccount={() => console.log('Create account')} />);
expobook.add('Authentication/Login', () => <Login onLogin={() => console.log('Login')} onResetPassword={() => console.log('Reset password')} />);
expobook.add('Authentication/ResetPassword', () => <ResetPassword onReset={() => console.log('Reset password')} />);

export default expobook.build();