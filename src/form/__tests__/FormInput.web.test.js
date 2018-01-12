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
import FormInput from '../FormInput';

// props
const noProps = {
  component: FormInput,
  enzyme: {
    tests: {
      shallow: {
        snapshot: snapShot(),
        oneTextInput: (wrapper, title) => {
          test(title, () => {
            expect(wrapper.find('TextInput').length).toBe(1);
          });
        },
      },
      mount: { snapshot: snapShot() },
      render: { snapshot: snapShot() },
    },
  },
};
const containerStyle = {
  component: FormInput,
  props: { containerStyle: { backgroundColor: '#071' } },
  styleguidist: {},
  enzyme: {
    tests: {
      shallow: { snapshot: snapShot() },
      mount: { snapshot: snapShot() },
      render: { snapshot: snapShot() },
    },
  },
};
const inputStyle = {
  component: FormInput,
  props: { inputStyle: { color: '#071' } },
  styleguidist: {},
  enzyme: {
    tests: {
      shallow: { snapshot: snapShot() },
      mount: { snapshot: snapShot() },
      render: { snapshot: snapShot() },
    },
  },
};
const textInputRef = {
  component: FormInput,
  // props: { textInputRef: assignRef(genRefId()) },
  styleguidist: {
    buildJsx: () => {
      const refId = genRefId();
      return <FormInput textInputRef={assignRef(refId)} />;
    },
  },
  enzyme: {
    buildJsx: () => {
      const refId = genRefId();
      return <FormInput textInputRef={assignRef(refId)} />;
    },
    tests: {
      shallow: { snapshot: snapShot() },
    },
  },
};
const containerRef = {
  component: FormInput,
  props: { containerRef: assignRef(genRefId()) },
  styleguidist: {},
  enzyme: {
    tests: {
      shallow: { snapshot: snapShot() },
    },
  },
};
const shake = {
  component: FormInput,
  props: { shake: true },
  styleguidist: {},
  enzyme: {
    tests: {
      shallow: {
        snapshot: snapShot(),
        changeShake: (wrapper, title) => {
          wrapper.setProps({ shake: false });
        },
      },
    },
  },
};

const props = {
  'no props': noProps,
  containerStyle,
  inputStyle,
  textInputRef,
  containerRef,
  shake,
};

// methods

const shakeMeth = {
  component: FormInput,
  props: { defaultValue: 'text to shake' },
  styleguidist: {
    script: `const View = RN.View;\nconst TouchableHighlight = RN.TouchableHighlight;\nconst Text = RN.Text;\n`,
    buildJsx: buildJsxForGuideMethod,
  },
  enzyme: onlyEnsureCalled,
};
const focus = {
  component: FormInput,
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
};
const blur = {
  component: FormInput,
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
};
const clearText = {
  component: FormInput,
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
};

const methods = {
  shake: shakeMeth,
  focus,
  blur,
  clearText,
};

const samples = {
  props,
  methods,
};

parseSamples(
  {
    Forms: { sectionComponents: { FormInput: { samples } } },
  },
  options
);

describe('FormInput Component', () => {
  it('should render without issues', () => {
    const component = shallow(<FormInput />);

    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should have a TextInput component', () => {
    const component = shallow(<FormInput />);

    expect(component.find('TextInput').length).toBe(1);
  });

  it('should call onChangeText function on adding new value', () => {
    const customFunction = jest.fn();
    const component = shallow(<FormInput onChangeText={customFunction} />);
    component.find('TextInput').simulate('ChangeText', 'Text Change');

    expect(customFunction).toHaveBeenCalled();
  });

  it('should call onFocus function', () => {
    const customFunction = jest.fn();
    const component = shallow(
      <FormInput
        onFocus={customFunction}
        containerStyle={{ backgroundColor: 'red' }}
        inputStyle={{ backgroundColor: 'red' }}
      />
    );
    component.find('TextInput').simulate('Focus');

    expect(customFunction).toHaveBeenCalledTimes(1);
  });
});
