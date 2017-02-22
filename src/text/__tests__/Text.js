import React from "react";
import {shallow} from "enzyme";
import Text from "../Text";

describe("Text Component", () => {
  it("should render without issues", () => {
    const component = shallow(<Text />);
    
    expect(component.length).toBe(1);
  });

  it("should have font size of 50 when h1", () => {
    const component = shallow(<Text h1 />);

    expect(component.props().style[1].fontSize).toBe(50);
  });

  it("should have font size of 42.5 when h2", () => {
    const component = shallow(<Text h2 />);

    expect(component.props().style[2].fontSize).toBe(42.5);
  });

  it("should have font size of 35 when h3", () => {
    const component = shallow(<Text h3 />);

    expect(component.props().style[3].fontSize).toBe(35);
  });

  it("should have font size of 27.5 when h4", () => {
    const component = shallow(<Text h4 />);

    expect(component.props().style[4].fontSize).toBe(27.5);
  });

  it("should have text as children", () => {
    const component = shallow(<Text>Children Text</Text>);

    expect(component.props().children).toBe("Children Text");
  });
});
