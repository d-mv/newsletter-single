import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../test/modules";
import "../../../test/setupTest";

import PostLine from "./PostLine";

// const PostLine = (props: {
//   author: string;
//   source: string;
//   buttons: { star: any; read?: any; trash?: any };
//   update: (arg0: any) => void;
//   id: string;
//   read: boolean;
//   star: boolean;
// })


// const testData = {
//   data: {
//     "1": {
//       title: "Test title #1",
//       description: "Homepage app #1",
//       photo: "https://picsum.photos/200/300",
//       details: "Test details #1",
//       technology: ["tech-1-1", "tech-1-2", "tech-1-3"],
//       links: {
//         github: "https://github.com/"
//       }
//     },
//     "2": {
//       title: "Test title #2",
//       description: "Homepage app #2",
//       photo: "https://picsum.photos/200/300",
//       details: "Test details #1",
//       technology: ["tech-2-1", "tech-2-2", "tech-2-3"],
//       links: {
//         github: "https://github.com/"
//       }
//     }
//   },
//   technology: {
//     "tech-1-1": "",
//     "tech-1-2": "",
//     "tech-1-3": "",
//     "tech-2-1": "",
//     "tech-2-2": "",
//     "tech-2-3": ""
//   }
// };

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
//   const component = findByTestAttr(setup(), "view-content-projects-empty");
//   expect(component.length).toBe(1);
// });

// describe("component renders", () => {
//   let wrapper: any;
//   beforeEach(() => {
//     wrapper = setup(testData);
//   });
//   test("component renders OK", () => {
//     const component = findByTestAttr(wrapper, "view-content-projects");
//     expect(component.length).toBe(1);
//   });

//   test("component renders projects", () => {
//     const componentsNodes = findByTestAttr(wrapper, "component-project");
//     expect(componentsNodes.length).toBe(Object.keys(testData.data).length);
//   });
// });
