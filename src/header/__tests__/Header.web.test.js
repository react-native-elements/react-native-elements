import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { Button } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const btnCfg = { icon: 'home' };
const titleCfg = { text: 'This is a title' };
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
import Header from '../Header';
import NavButton from '../NavButton';
import Title from '../Title';

const props = {
  noProps: {
    component: Header,
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  statusBarProps: {
    component: Header,
    props: { statusBarProps: { animated: true } },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  leftComponent: {
    component: Header,
    props: { statusBarProps: { animated: true } },
    enzyme: {
      buildJsx: () => {
        return <Header leftComponent={<Text>sample component</Text>} />;
      },
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {
      script: `const Text = RN.Text;\n`,
      buildJsx: () => {
        return <Header leftComponent={<Text>sample component</Text>} />;
      },
    },
  },
  'leftComponent icon': {
    component: Header,
    props: { leftComponent: { icon: 'directions-bike' } },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  centerComponent: {
    component: Header,
    props: { statusBarProps: { animated: true } },
    enzyme: {
      buildJsx: () => {
        return <Header centerComponent={<Text>sample component</Text>} />;
      },
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {
      script: `const Text = RN.Text;\n`,
      buildJsx: () => {
        return <Header centerComponent={<Text>sample component</Text>} />;
      },
    },
  },
  'centerComponent text': {
    component: Header,
    props: { centerComponent: { text: 'text sample' } },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  rightComponent: {
    component: Header,
    props: { statusBarProps: { animated: true } },
    enzyme: {
      buildJsx: () => {
        return <Header rightComponent={<Text>sample component</Text>} />;
      },
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {
      script: `const Text = RN.Text;\n`,
      buildJsx: () => {
        return <Header rightComponent={<Text>sample component</Text>} />;
      },
    },
  },
  'rightComponent icon': {
    component: Header,
    props: { rightComponent: { icon: 'pets' } },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  backgroundColor: {
    component: Header,
    props: { backgroundColor: '#071' },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  outerContainerStyles: {
    component: Header,
    props: { outerContainerStyles: { borderWidth: 5 } },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  innerContainerStyles: {
    component: Header,
    props: { innerContainerStyles: { borderWidth: 5 } },
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
    Misc: { sectionComponents: { Header: { samples } } },
  },
  options
);

describe('Header Component', () => {
  it('should render without issues', () => {
    const component = shallow(<Header />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render children when passed in', () => {
    const component = shallow(
      <Header>
        <Button title="Test button" onPress={() => {}} />
      </Header>
    );

    expect(component.find('Button').length).toBe(1);
  });

  it('should render multiple children when passed in', () => {
    const component = shallow(
      <Header>
        <Button title="Test button 1" onPress={() => {}} />
        <Button title="Test button 2" onPress={() => {}} />
      </Header>
    );

    expect(component.find('Button').length).toBe(2);
  });

  it('should render left component by passing a config through props', () => {
    const component = shallow(<Header leftComponent={btnCfg} />);

    expect(component.find(NavButton).length).toBe(1);
  });

  it('should render left component by passing a component through props', () => {
    const component = shallow(
      <Header
        leftComponent={<Button title="Test button" onPress={() => {}} />}
      />
    );

    expect(component.find('Button').length).toBe(1);
  });

  it('should render right component by passing a config through props', () => {
    const component = shallow(<Header rightComponent={btnCfg} />);

    expect(component.find(NavButton).length).toBe(1);
  });

  it('should render right component by passing a component through props', () => {
    const component = shallow(
      <Header
        rightComponent={<Button title="Test button" onPress={() => {}} />}
      />
    );

    expect(component.find('Button').length).toBe(1);
  });

  it('should render center component by passing a config through props', () => {
    const component = shallow(<Header centerComponent={titleCfg} />);

    expect(component.find(Title).length).toBe(1);
  });

  it('should render center component by passing a component through props', () => {
    const component = shallow(
      <Header
        centerComponent={<Button title="Test button" onPress={() => {}} />}
      />
    );

    expect(component.find('Button').length).toBe(1);
  });

  it('should allow to pass backgroundColor through prop', () => {
    const component = shallow(<Header backgroundColor="#aaa" />);

    expect(
      component
        .find('View')
        .first()
        .props().style[1].backgroundColor
    ).toBe('#aaa');
  });

  it('should allow to pass styles through outerContainerStyles prop', () => {
    const component = shallow(
      <Header outerContainerStyles={{ backgroundColor: '#ccc' }} />
    );

    expect(
      component
        .find('View')
        .at(0)
        .props().style[2].backgroundColor
    ).toBe('#ccc');
  });

  it('should allow to pass styles through innerContainerStyles prop', () => {
    const component = shallow(
      <Header innerContainerStyles={{ backgroundColor: '#ccc' }} />
    );

    expect(
      component
        .find('View')
        .at(1)
        .props().style[1].backgroundColor
    ).toBe('#ccc');
  });

  it('should accept props for StatusBar', () => {
    const component = shallow(<Header statusBarProps={{ hidden: true }} />);

    expect(component.find('StatusBar').props().hidden).toBe(true);
  });
});
