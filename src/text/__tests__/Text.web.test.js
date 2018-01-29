import React from 'react';
import { TouchableHighlight, View } from 'react-native';
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
import Text from '../Text';

const props = {
  'no props': {
    component: Text,
    children: 'Text',
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  h1: {
    component: Text,
    props: { h1: true },
    children: 'Text',
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  h2: {
    component: Text,
    props: { h2: true },
    children: 'Text',
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  h3: {
    component: Text,
    props: { h3: true },
    children: 'Text',
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  h4: {
    component: Text,
    props: { h4: true },
    children: 'Text',
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  fontFamily: {
    component: Text,
    props: { fontFamily: 'Courier New' },
    children: 'Text',
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
  style: {
    component: Text,
    props: { style: { color: '#071' } },
    children: 'Text',
    enzyme: {
      tests: onlySnapshots,
    },
    styleguidist: {},
  },
};

const samples = {
  props,
};

parseSamples(
  {
    Misc: { sectionComponents: { Text: { samples } } },
  },
  options
);

describe('Text Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Text />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should have font size of 40 when h1', () => {
    const component = shallow(<Text h1 />);

    const styles = component.props().style;
    let fontSizeStyle;
    for (let i = 0; i < styles.length; i++) {
      if (styles[i] && styles[i].hasOwnProperty('fontSize')) {
        fontSizeStyle = styles[i].fontSize;
      }
    }

    expect(fontSizeStyle).toBe(40);
  });

  it('should have font size of 34 when h2', () => {
    const component = shallow(<Text h2 />);

    const styles = component.props().style;
    let fontSizeStyle;
    for (let i = 0; i < styles.length; i++) {
      if (styles[i] && styles[i].hasOwnProperty('fontSize')) {
        fontSizeStyle = styles[i].fontSize;
      }
    }

    expect(fontSizeStyle).toBe(34);
  });

  it('should have font size of 28 when h3', () => {
    const component = shallow(<Text h3 />);

    const styles = component.props().style;
    let fontSizeStyle;
    for (let i = 0; i < styles.length; i++) {
      if (styles[i] && styles[i].hasOwnProperty('fontSize')) {
        fontSizeStyle = styles[i].fontSize;
      }
    }

    expect(fontSizeStyle).toBe(28);
  });

  it('should have font size of 22 when h4', () => {
    const component = shallow(<Text h4 />);

    const styles = component.props().style;
    let fontSizeStyle;
    for (let i = 0; i < styles.length; i++) {
      if (styles[i] && styles[i].hasOwnProperty('fontSize')) {
        fontSizeStyle = styles[i].fontSize;
      }
    }

    expect(fontSizeStyle).toBe(22);
  });

  it('should have text as children', () => {
    const component = shallow(<Text>Children Text</Text>);

    expect(component.props().children).toBe('Children Text');
  });

  it('should render fontFamily and style', () => {
    const component = shallow(
      <Text fontFamily="comic-sans" style={{ color: 'red' }}>
        Children Text
      </Text>
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
