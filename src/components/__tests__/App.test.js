import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Form from '../Form';
import Table from '../Table'

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it('shows a form', () => {
  expect(wrapped.find(Form).length).toEqual(1);
});

it('shows a table', () => {
  expect(wrapped.find(Table).length).toEqual(1);
});
