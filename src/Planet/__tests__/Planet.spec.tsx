import React from 'react';
import { shallow } from 'enzyme';
import Planet from '../Planet';

it('matches snapshot', () => {
  const props = {
    title: 'Earth',
    secondDuration: 1000,
    minute: 20,
    hour: 42,
    second: 12,
  };

  expect(shallow(<Planet {...props} />)).toMatchSnapshot();
});
