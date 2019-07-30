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

    it('should render dot without issues', () => {
      const component = shallow(<DefaultControls theme={theme} count={2} />);
      const dot = component.instance()._renderDot({ isActive: false });

      expect(dot.type).toBe(Badge);
      expect(toJson(dot)).toMatchSnapshot();
    });

    it('should render dots without issues', () => {
      const component = shallow(<DefaultControls theme={theme} count={2} />);
      const dots = component.instance()._renderDots();

      expect(dots.type).toBe(View);
      expect(toJson(dots)).toMatchSnapshot();
    });
  });
});
