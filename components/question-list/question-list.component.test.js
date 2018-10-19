import React from 'react';
import QuestionList from './question-list.component';
import renderer from 'react-test-renderer';

it('renders the question list correctly', () => {
  const component = renderer.create(
    <QuestionList questions={[{ id: '1', text: 'First question?' }, { id: '2', text: 'Second question?' }]} />
  );
  let tree = component.toJSON(); 
  expect(tree).toMatchSnapshot();
})
