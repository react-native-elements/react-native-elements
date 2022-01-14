import React from 'react';
import { BottomSheet } from '../index';
import { Modal, ScrollView } from 'react-native';
import ListItem from '../../ListItem/index';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { SafeAreaView } from 'react-native-safe-area-context';

describe('BottomSheet Component', () => {
  it('renders correctly', () => {
    const list = [{ title: 'test' }, { title: 'test2' }];
    const tree = renderWithWrapper(
      <BottomSheet isVisible>
        {list.map((l, i) => (
          <ListItem key={i}>
            <ListItem.Content>
              <ListItem.Title>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should shows when isVisible is true', () => {
    const list = [{ title: 'test' }, { title: 'test2' }];
    const component = renderWithWrapper(
      <BottomSheet isVisible>
        {list.map((l, i) => (
          <ListItem key={i}>
            <ListItem.Content>
              <ListItem.Title>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    );
    expect(component.wrapper.findByType(Modal).props.visible).toBeTruthy();
  });

  it('should not show when isVisible is false', () => {
    const list = [{ title: 'test' }, { title: 'test2' }];
    const component = renderWithWrapper(
      <BottomSheet>
        {list.map((l, i) => (
          <ListItem key={i}>
            <ListItem.Content>
              <ListItem.Title>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    );
    expect(component.wrapper.findByType(Modal).props.visible).toBeFalsy();
  });

  it('should render with the provided containerStyle', () => {
    const { wrapper } = renderWithWrapper(
      <BottomSheet
        isVisible={true}
        containerStyle={{ backgroundColor: 'rgba(1, 0.5, 0.25, 1.0)' }}
      />
    );
    expect(wrapper.findByType(SafeAreaView).props.style).toMatchObject({
      backgroundColor: 'rgba(1, 0.5, 0.25, 1.0)',
    });
  });

  it('should render ScrollView with the provided scrollViewProps', () => {
    const { wrapper } = renderWithWrapper(
      <BottomSheet
        isVisible={true}
        scrollViewProps={{ keyboardShouldPersistTaps: 'handled' }}
      />
    );
    expect(wrapper.findByType(ScrollView).props.keyboardShouldPersistTaps).toBe(
      'handled'
    );
  });
});
