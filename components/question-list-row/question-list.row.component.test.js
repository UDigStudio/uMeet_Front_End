import React from 'react';
import QuestionListRow from './question-list-row.component';
import renderer from 'react-test-renderer';

describe('Question List Row', () => {
  test('Renders a question', () => {
    const component = renderer.create(
      <QuestionListRow 
        question={{ id: '1', text: 'First question?', active: true }} 
      />
    );
    let tree = component.toJSON(); 
    expect(tree).toMatchSnapshot();
  })
})