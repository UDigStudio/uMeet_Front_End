import React from 'react';
import QuestionList from './question-list.component';
import renderer from 'react-test-renderer';

//TODO: Change to describe/it

it('renders the question list correctly', () => {
  const component = renderer.create(
    <QuestionList questions={[{ id: '1', text: 'First question?', active: true }, { id: '2', text: 'Second question?', active: false }]} />
  );
  let tree = component.toJSON(); 
  expect(tree).toMatchSnapshot();
})
