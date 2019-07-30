import React from 'react';
import { View } from 'react-native';
import { shallow } from 'enzyme/build';
import DefaultControls from '../Controls';

import { Badge } from '../../badge/Badge';

import theme from '../../config/theme';
import toJson from 'enzyme-to-json';

describe('Swiper Default Controls', () => {
  describe('Clicks', () => {
    it('should slide to next by button click', () => {
      const onPress = jest.fn();

      const component = shallow(
        <DefaultControls
          theme={theme}
          count={2}
          activeIndex={0}
          goToNext={onPress}
        />
      );
      const next = component.instance()._renderNext();
      next.props.onPress();

      expect(onPress).toHaveBeenCalled();
    });

    it('should slide to prev by button click', () => {
      const onPress = jest.fn();

      const component = shallow(
        <DefaultControls
          theme={theme}
          count={2}
          activeIndex={1}
          goToPrev={onPress}
        />
      );
      const prev = component.instance()._renderPrev();
      prev.props.onPress();

      expect(onPress).toHaveBeenCalled();
    });
  });

  it('should render dot without issues', () => {
    const onPress = jest.fn();

    const component = shallow(<DefaultControls theme={theme} count={2} />);
    const dot = component.instance()._renderDot({ isActive: false, onPress });

    dot.props.onPress();

    expect(dot.type).toBe(Badge);
    expect(onPress).toHaveBeenCalled();
    expect(toJson(dot)).toMatchSnapshot();
  });

  it('should render dots without issues', () => {
    const onPress = jest.fn();

    const component = shallow(
      <DefaultControls
        dotsPos="top"
        dotsTouchable
        theme={theme}
        count={2}
        goTo={onPress}
      />
    );
    const dots = component.instance()._renderDots();

    dots.props.children[1].props.onPress();

    expect(dots.type).toBe(View);
    expect(onPress).toHaveBeenCalled();
    expect(toJson(dots)).toMatchSnapshot();
  });

  it('should not render next button without issues', () => {
    const component = shallow(
      <DefaultControls nextPos={false} theme={theme} count={2} />
    );
    const dots = component.instance()._renderDots();

    expect(dots.type).toBe(View);
    expect(toJson(dots)).toMatchSnapshot();
  });

  it('should render button', () => {
    const component = shallow(
      <DefaultControls theme={theme} count={2} from={1} />
    );
    const prev = component
      .instance()
      ._renderButton({ type: 'prev', title: 'Back' });

    expect(prev.props.title).toBe('Back');
  });
});
