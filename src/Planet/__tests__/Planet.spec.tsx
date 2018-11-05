import React from 'react';
import { shallow } from 'enzyme';
import Planet from '../Planet';

jest.mock('moment', () => () => ({
  minute: () => 20,
  hour: () => 42,
  second: () => 12,
}));

it('matches snapshot', () => {
  const props = {
    title: 'Earth',
    secondDuration: 1000,
  };

  expect(shallow(<Planet {...props} />)).toMatchSnapshot();
});
