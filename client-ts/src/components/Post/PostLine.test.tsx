import React from "react";
import jest from 'jest'
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../test/modules";
import "../../../test/setupTest";

import PostLine from "./PostLine";

const mockFn = (props:any) => {
  console.log(props)
}

const testData = {
  mode: "star",
  author: "tester",
  source: "test-source",
  buttons: { star: "star"},
  update: mockFn,
  id: 'id012345',
  read: true,
  star: false
};

/**
 * Functional React component for congrats message
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props: any = {}) => {
  return shallow(<PostLine {...props} />);
};

// test("component renders null empty div if no data supplied", () => {
//   const component = findByTestAttr(setup(), "component__post-line");
//   expect(component.length).toBe(0);
// });

describe("component renders", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = setup(testData);
  });
  test("component renders OK", () => {
    const component = findByTestAttr(wrapper, "component__post-line");
    expect(component.length).toBe(1);
  });

  test("component renders projects", () => {
    const componentsNodes = findByTestAttr(
      wrapper,
      "component__post-line--button"
    );
    expect(componentsNodes.length).toBe(2);
  });
});
