import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { AppStyles, Metrics, Colors, Fonts } from '../../themes';

export default class Button extends PureComponent {

  static propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    styleText: PropTypes.any,
    styleButton: PropTypes.any
  };

  static defaultProps = {
    text: "",
    onPress: () => { },
    styleText: {},
    styleButton: {}
  };

  render() {

    const {
      text,
      onPress,
      styleText,
      styleButton
    } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPress}
        style={[
          AppStyles.center,
          styles.container,
          styleButton
        ]}
      >
        <Text
          style={[
            Fonts.style.normal,
            Fonts.style.center,
            {
              color: Colors.white,
              marginHorizontal: Metrics.baseMargin
            },
            styleText
          ]}
        >
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.appColor
  },
});
