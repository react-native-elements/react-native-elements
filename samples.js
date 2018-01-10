import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';
import { mount, render, shallow } from 'enzyme';
import merge from 'lodash.merge';
import path from 'path';
import { assignRef, genRefId } from 'enzyme-styleguidist-sample-parser';

const EXAMPLES_DIR = path.resolve(__dirname, './styleguide/examples');

export const examplesDir = EXAMPLES_DIR;

const buildCtxOptions = ctxArr => {
  let options = { context: {}, childContextTypes: {} };
  ctxArr.forEach(ctx => {
    if (ctx.type && ctx.type === 'func') {
      const mockFunc = jest.fn();
      mockFunc.mockReturnValue(ctx.value);
      options = merge(options, {
        context: { [ctx.name]: mockFunc },
        childContextTypes: { [ctx.name]: toPropType(ctx.type) },
      });
    }
  });
  return options;
};

const toPropType = typeId => {
  switch (typeId) {
    case 'func':
      return PropTypes.func;
    default:
      return null;
  }
};

export const createWrapperWithContext = (depth, jsx, ctx) => {
  let wrapper;
  let ctxOpts = {};
  if (ctx) ctxOpts = buildCtxOptions(ctx);
  switch (depth) {
    case 'mount':
      wrapper = mount(jsx, ctxOpts);
      break;
    case 'shallow':
      delete ctxOpts.childContextTypes;
      wrapper = shallow(jsx, ctxOpts);
      break;
    case 'render':
      wrapper = render(jsx);
      break;
    default:
  }
  return wrapper;
};

export const snapShot = () => {
  return (wrapper, title) => {
    test(title, () => {
      expect(toJson(wrapper)).toMatchSnapshot(title);
    });
  };
};

export const buildJsxForGuideMethod = attr => {
  const refId = genRefId();
  const timerFunc = Function(
    `setTimeout(() => {${refId}.${attr.name}();}, ${attr.styleguidist.cd})`
  );
  const buttonTitle = attr.styleguidist.cd
    ? `Start ${attr.styleguidist.cd / 1000} sec countdown for: ${attr.name}()`
    : `Execute ${attr.name}()`;
  return (
    <View>
      <TouchableHighlight
        onPress={timerFunc}
        style={{ backgroundColor: '#aaa', padding: 10, marginBottom: 15 }}
      >
        <Text>{buttonTitle}</Text>
      </TouchableHighlight>
      {React.createElement(attr.component, {
        ...attr.props,
        ref: assignRef(refId),
      })}
    </View>
  );
};

export const ensureCalled = () => {
  return (wrapper, title, attrName) => {
    test(title, () => {
      const spy = sinon.spy(wrapper.instance(), attrName);
      const func = Function('elem', `elem.${attrName}()`);
      func(wrapper.instance());
      expect(spy.calledOnce).toBe(true);
    });
  };
};

export const onlySnapshots = {
  shallow: { snapshot: snapShot() },
  mount: { snapshot: snapShot() },
  render: { snapshot: snapShot() },
};

export const onlyEnsureCalled = {
  tests: { shallow: { 'ensure called': ensureCalled() } },
};

export default {
  mocks: () => {
    Date.now = jest.fn(() => -3580994563);
  },
  log: 'WARN',
  enzyme: {
    run: true,
    createWrapper: createWrapperWithContext,
  },
  styleguidist: {
    build: true,
    examplesDir: EXAMPLES_DIR,
  },
};
