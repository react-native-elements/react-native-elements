import React, { Component } from 'react';

import Button from './Button';

export default class TextButton extends Component {
  render() {
    const {
      ...attributes
    } = this.props;

    return (
      <Button
        text="Text Button"
        buttonStyle={{backgroundColor: 'transparent', width: 130, height: 40}}
        textStyle={{color: 'rgba(78, 116, 289, 1)'}}
        underlayColor="transparent"
        activeOpacity={0}
        {...attributes}
      />
    );
  }
}
