// @ts-nocheck
import React, { Component } from 'react';
import { Switch, View, Text, Platform, StyleSheet } from 'react-native';

const isIosPlatform = () => Platform.OS === 'ios';

type IProps = {
  input: Boolean;
  onChange: Function;
  switchStyle: Object;
  containerStyle: Object;
  descriptionStyle: Object;
  hintStyle: Object;
  hint: string;
  description: String;
};
export class ToggleSwitch extends Component<IProps> {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      status: false,
    };
    const { status, value } = this.props;
    if (status) {
      this.setState({ status });
    }
    if (!status && value) {
      this.setState({ status: value ? true : false });
    }
  }

  onToggle = () => {
    const { onChangeCallback, onChange } = this.props;
    const { status } = this.state;
    this.setState((prevState) => {
      return { status: !prevState.status };
    });
    onChange(!status);

    onChangeCallback && onChangeCallback(!status);
  };

  render() {
    const { status } = this.state;

    const {
      hint,
      description,
      containerStyle,
      mainContainerStyle,
      hintStyle,
      descriptionStyle,
      switchStyle,
      isRequired,
    } = this.props;

    return (
      <View
        style={[styles.mainContainer, mainContainerStyle && mainContainerStyle]}
      >
        <View style={[styles.container, containerStyle && containerStyle]}>
          {hint && (
            <Text
              numberOfLines={2}
              style={[styles.hint, hintStyle && hintStyle]}
            >
              {hint}
              {isRequired ? <Text style={styles.required}> *</Text> : null}
            </Text>
          )}
          <Switch
            thumbColor={'white'}
            trackColor={{
              false: '#A9A9A9',
              true: 'yellow',
            }}
            onValueChange={this.onToggle}
            value={status}
            style={[styles.switchStyle, switchStyle && switchStyle]}
          />
        </View>
        {description && (
          <View style={styles.descriptionContainer}>
            <Text
              style={[styles.description, descriptionStyle && descriptionStyle]}
            >
              {description}
            </Text>
          </View>
        )}
      </View>
    );
  }
}
ToggleSwitch.defaultProps = {
  input: false,
};

const styles = StyleSheet.create({
  mainContainer: {},
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    marginVertical: 15,
  },
  hint: {
    color: '#55547A',
    fontSize: 16,
    marginTop: 4,
    width: '83%',
    textAlign: 'left',
  },
  switchStyle: {
    transform: isIosPlatform()
      ? [{ scaleX: 0.8 }, { scaleY: 0.8 }]
      : [{ scaleX: 1.2 }, { scaleY: 1.2 }],
  },
  switchContainer: {
    height: 20,
  },
  descriptionContainer: {
    flex: 1,
    paddingRight: 8,
    marginTop: -5,
  },
  description: {
    color: '#A5ACC1',
    fontSize: 14,
    textAlign: 'left',
  },
  required: {
    color: '#FB7178',
  },
});

export default ToggleSwitch;
