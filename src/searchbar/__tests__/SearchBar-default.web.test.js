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
import SearchBar from '../SearchBar-default';

const props = {
  'no props': {
    component: SearchBar,
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  containerStyle: {
    component: SearchBar,
    props: {
      containerStyle: { borderWidth: 5, borderColor: '#071' },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  inputStyle: {
    component: SearchBar,
    props: {
      inputStyle: { borderWidth: 5, borderColor: '#071' },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  icon: {
    component: SearchBar,
    props: {
      icon: { name: 'pets', color: '#071' },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  noIcon: {
    component: SearchBar,
    props: {
      noIcon: true,
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  lightTheme: {
    component: SearchBar,
    props: {
      lightTheme: true,
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  round: {
    component: SearchBar,
    props: {
      round: true,
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  underlineColorAndroid: {
    component: SearchBar,
    props: {
      underlineColorAndroid: '#071',
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  loadingIcon: {
    component: SearchBar,
    props: {
      showLoadingIcon: true,
      loadingIcon: { color: '#071' },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  placeholder: {
    component: SearchBar,
    props: {
      placeholder: 'placeholder',
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  placeholderTextColor: {
    component: SearchBar,
    props: {
      placeholder: 'placeholder',
      placeholderTextColor: '#071',
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  onChangeText: {
    component: SearchBar,
    props: {
      onChangeText: text => {
        console.log(text);
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  onClearText: {
    component: SearchBar,
    props: {
      defaultValue: 'text to clear',
      clearIcon: { name: 'clear' },
      onClearText: () => {
        console.log('onClearText');
      },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
  clearIcon: {
    component: SearchBar,
    props: {
      showLoadingIcon: true,
      clearIcon: { name: 'clear', color: '#071' },
    },
    enzyme: {
      tests: { shallow: { snapshot: snapShot() } },
    },
    styleguidist: {},
  },
};

const methods = {
  focus: {
    component: SearchBar,
    props: { defaultValue: 'cursor will appear' },
    styleguidist: {
      script: `const View = RN.View;\nconst TouchableHighlight = RN.TouchableHighlight;\nconst Text = RN.Text;\n`,
      cd: 1000,
      buildJsx: buildJsxForGuideMethod,
    },
    enzyme: {
      tests: {
        shallow: {
          'ensure called': ensureCalled(),
        },
      },
    },
  },
  blur: {
    component: SearchBar,
    props: { defaultValue: 'place cursor here and watch it be removed' },
    styleguidist: {
      script: `const View = RN.View;\nconst TouchableHighlight = RN.TouchableHighlight;\nconst Text = RN.Text;\n`,
      cd: 3000,
      buildJsx: buildJsxForGuideMethod,
    },
    enzyme: {
      tests: {
        shallow: {
          'ensure called': ensureCalled(),
        },
      },
    },
  },
  clearText: {
    component: SearchBar,
    props: { defaultValue: 'text to clear' },
    styleguidist: {
      script: `const View = RN.View;\nconst TouchableHighlight = RN.TouchableHighlight;\nconst Text = RN.Text;\n`,
      buildJsx: buildJsxForGuideMethod,
    },
    enzyme: {
      tests: {
        shallow: {
          'ensure called': ensureCalled(),
        },
      },
    },
  },
};
const samples = {
  props,
  methods,
};

parseSamples(
  {
    Input: { sectionComponents: { SearchBar: { samples } } },
  },
  options
);

describe('Search component', () => {
  it('should render without issues', () => {
    const component = shallow(<SearchBar />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should render with icons', () => {
    const component = shallow(
      <SearchBar
        clearIcon={{
          name: '3d-rotation',
          color: 'red',
        }}
        showLoadingIcon
        loadingIcon={{
          style: { flex: 1 },
        }}
        lightTheme
        containerStyle={{ height: 70 }}
      />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
  it('should call onTextChange when close icon is touched', () => {
    const onChangeTextMock = jest.fn();
    const component = shallow(
      <SearchBar textInputRef="ti" clearIcon onChangeText={onChangeTextMock} />
    );
    component.find('Icon[name="close"]').simulate('press');
    expect(onChangeTextMock).toBeCalled();
  });

  it('should render without icon', () => {
    const component = shallow(
      <SearchBar underlineColorAndroid="red" noIcon round />
    );

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
