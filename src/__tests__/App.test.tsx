import { shallow } from 'enzyme';
import * as React from 'react';
import App from '../App';
import mockPlanets from '../data/mocks/mockPlanets';

jest.mock('../data/PlanetsAPI', () => {
  return {
    getPlanets: () => mockPlanets,
  };
});

describe('Smoke', () => {
  it('app renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
