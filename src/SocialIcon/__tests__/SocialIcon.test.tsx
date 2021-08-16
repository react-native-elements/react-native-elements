import React from 'react';
import SocialIcon from '..';
import { renderWithWrapper } from '../../../.ci/testHelper';
import Text from '../../Text';
import Icon from '../../Icon';
import { fireEvent } from '@testing-library/react-native';
import { SocialMediaType } from '../SocialIcon';

describe('SocialIcon component', () => {
  it('should match snapshot', () => {
    const { queryByTestId } = renderWithWrapper(<SocialIcon type="twitter" />);
    const tree = queryByTestId('RNE_SocialIcon');
    expect(tree).not.toBeNull();
  });

  it('should show loading indicator', () => {
    const { queryByTestId } = renderWithWrapper(
      <SocialIcon type="twitter" loading />
    );
    const component = queryByTestId('RNE_ActivityIndicator');
    expect(component).not.toBeNull();
  });

  it('should show loading indicator in small size', () => {
    const { queryByTestId } = renderWithWrapper(
      <SocialIcon loading small="small" />
    );
    const component = queryByTestId('RNE_ActivityIndicator');
    expect(component.props.size).toEqual('small');
  });

  it('should show loading indicator in white color', () => {
    const { queryByTestId } = renderWithWrapper(
      <SocialIcon loading iconColor={null} />
    );
    const component = queryByTestId('RNE_ActivityIndicator');
    expect(component.props.color).toEqual('white');
  });

  it('should render light social icon', () => {
    const { queryByTestId } = renderWithWrapper(
      <SocialIcon light raised={false} type="medium" />
    );
    const component = queryByTestId('RNE_SocialIcon');
    expect(component.props.style.backgroundColor).toBe('white');
  });

  it('should have width and height based on iconSize', () => {
    const ICON_SIZE = 32;
    const { queryByTestId } = renderWithWrapper(
      <SocialIcon
        button={false}
        light={false}
        raised={false}
        iconSize={ICON_SIZE}
      />
    );
    const component = queryByTestId('RNE_SocialIcon');
    expect(component.props.style.borderRadius).toBe(ICON_SIZE * 2);
    expect(component.props.style.height).toBe(ICON_SIZE * 2 + 4);
    expect(component.props.style.width).toBe(ICON_SIZE * 2 + 4);
  });

  it('should use style and font from props', () => {
    const { queryByTestId } = renderWithWrapper(
      <SocialIcon
        button
        light
        title="title"
        type="github"
        fontFamily="arial"
        fontWeight="bold"
        style={{ backgroundColor: 'pink' }}
        iconStyle={{ borderWidth: 1 }}
        fontStyle={{ justifyContent: 'center' }}
      />
    );
    const rootComponent = queryByTestId('RNE_SocialIcon');
    const iconComponent = rootComponent.findByType(Icon);
    const textComponent = rootComponent.findByType(Text);

    expect(textComponent.props.children).toBe('title');
    expect(textComponent.props.style).toMatchObject({
      color: '#000000',
      marginLeft: 15,
      fontWeight: 'bold',
      fontFamily: 'arial',
      justifyContent: 'center',
    });
    expect(iconComponent.props).toMatchObject({
      testID: 'RNE_Icon',
      iconStyle: { borderWidth: 1 },
      color: '#000000',
      name: 'github',
      size: 24,
      type: 'font-awesome',
    });
  });

  it('should render social icon button', () => {
    const { queryByTestId } = renderWithWrapper(
      <SocialIcon title="Sign In With Facebook" button type="facebook" />
    );
    const rootComponent = queryByTestId('RNE_SocialIcon');
    const textComponent = rootComponent.findByType(Text);

    expect(textComponent.props.children).toBe('Sign In With Facebook');
  });

  it('should have onPress event', () => {
    const onPress = jest.fn();
    const { queryByTestId } = renderWithWrapper(
      <SocialIcon onPress={onPress} type="gitlab" />
    );
    const rootComponent = queryByTestId('RNE_SocialIcon');
    fireEvent(rootComponent, 'press');

    expect(onPress).toHaveBeenCalled();
  });

  it('should NOT have onPress event when disabled', () => {
    const onPress = jest.fn();
    const { queryByTestId } = renderWithWrapper(
      <SocialIcon onPress={onPress} disabled />
    );
    const rootComponent = queryByTestId('RNE_SocialIcon');
    fireEvent(rootComponent, 'press');

    expect(onPress).not.toHaveBeenCalled();
  });

  it('should apply values from theme', () => {
    const theme = {
      SocialIcon: {
        type: 'facebook' as SocialMediaType,
      },
    };
    const { queryByTestId } = renderWithWrapper(<SocialIcon />, '', theme);
    const rootComponent = queryByTestId('RNE_SocialIcon');
    const iconComponent = rootComponent.findByType(Icon);
    expect(iconComponent.props.name).toBe('facebook');
  });
});
