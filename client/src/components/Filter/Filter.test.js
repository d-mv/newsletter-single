import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../test/modules.js';

import '../../../test/setupTest';

import Filter from './Filter';

const testData = { list: ['source 1', 'source 2', 'source 3'] };

const setup = props => {
  return shallow(<Filter {...props} />);
};

test("component doesn't render anything without data", () => {
  const component = findByTestAttr(setup(), 'component-filter');
  expect(component.length).toBe(0);
});

describe('component works fine when supplied data', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup(testData);
  });
  test('component renders list', () => {
    const componentsNode = findByTestAttr(wrapper, 'container-filter');
    expect(componentsNode.length).toBe(1);
  });
  test('component renders items', () => {
    const componentsNode = findByTestAttr(wrapper, 'component-filter-item');
    expect(componentsNode.length).toBe(testData.list.length);
  });

  // test("component renders description", () => {
  //   const componentsNode = findByTestAttr(
  //     wrapper,
  //     "component-contact-description"
  //   );
  //   expect(componentsNode.text()).toBe(testData.contact.description);
  // })
});
