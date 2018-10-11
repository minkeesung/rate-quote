import React from 'react';
import { mount } from 'enzyme';
import Form from '../Form'
import Root from '../../Root'

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <Form />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

describe('the form inputs', () => {
  beforeEach(() => {
    wrapped.find('input').first().simulate('change', {
      target: { value: '10000'}
    })

    wrapped.setState({ loanSize: '10000'})

    wrapped.update()
  })

  it('has two inputs', () => {
    expect(wrapped.find('input').length).toEqual(2)
  })

  it('has inputs that users can type in', () => {
    expect(wrapped.find('input').first().props().value).toEqual('10000')
  })
})
