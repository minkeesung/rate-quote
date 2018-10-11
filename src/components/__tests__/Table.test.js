import React from 'react';
import { mount } from 'enzyme';
import Table from '../Table'
import Root from '../../Root'

let wrapped;

beforeEach(() => {
  const initialState = {
    rates: { rateQuotes: [{lenderName: 'CHASE', apr: 0.005, closingCosts: 5, monthlyPayment: 10, loanType: 'monthly', interestRate: 0.2}]}
  }

  wrapped = mount(
    <Root initialState={initialState}>
      <Table />
    </Root>
  );
});

it('shows text', () => {
  expect(wrapped.render().text()).toContain('CHASE')

  expect(wrapped.render().text()).toContain('5')

  expect(wrapped.render().text()).toContain('10')

  expect(wrapped.render().text()).toContain('APR')

  expect(wrapped.render().text()).toContain('monthly')

  expect(wrapped.render().text()).toContain('0.2')
})

it('has 6 columns in table', () => {
  expect(wrapped.find('td').length).toEqual(6)
})
