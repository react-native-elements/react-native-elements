import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import parseSamples, {
  assignRef,
  genRefId,
} from 'enzyme-styleguidist-sample-parser';
import options, {
  snapShot,
  buildJsxForGuideMethod,
  ensureCalled,
  onlyEnsureCalled,
  onlySnapshots,
} from '../../../samples';
import List from '../List';
import ListItem from '../ListItem';

const children = [
  <ListItem key="v0" title="item 1" />,
  <ListItem key="v1" title="item 2" />,
  <ListItem key="v2" title="item 3" />,
];

const props = {
  'no props': {
    component: List,
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  containerStyle: {
    component: List,
    children,
    props: {
      containerStyle: { borderWidth: 5 },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
};

const samples = {
  props,
};

parseSamples(
  {
    Lists: { sectionComponents: { List: { samples } } },
  },
  options
);

describe('List component', () => {
  it('should render without issues', () => {
    const component = shallow(<List />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render children', () => {
    const component = shallow(
      <List containerStyle={{ backgroundColor: 'peru' }}>
        <ListItem />
      </List>
    );

    expect(component.find('ListItem').length).toBe(1);
  });
});
