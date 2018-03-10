import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image
} from 'react-native';

import {
  AppStyles,
  Metrics,
  Fonts,
  Colors
} from '../../themes';

export default class Icon extends PureComponent {

  static propTypes = {
    width: PropTypes.number,
    image: PropTypes.any,
    tintColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    onPress: PropTypes.func,
    border: PropTypes.number,
    borderColor: PropTypes.string,
    styleIcon: PropTypes.any,
    borderRadius: PropTypes.bool
  };

  static defaultProps = {
    image: null,
    width: 25,
    tintColor: null,
    backgroundColor: Colors.transparent,
    border: 0,
    borderColor: Colors.white,
    styleIcon: null,
    borderRadius: false,
    onPress: () => { }
  };

  render() {

    const {
      image,
      onPress,
      width,
      tintColor,
      backgroundColor,
      border,
      borderColor,
      styleIcon,
      borderRadius
    } = this.props;

    return (
      <TouchableOpacity
        style={[
          AppStyles.center,
          {
            backgroundColor: backgroundColor,
            width: width,
            height: width,
            borderRadius: borderRadius ? width / 2 : null,
            borderWidth: border,
            borderColor: borderColor
          },
          styleIcon,
        ]}
        onPress={onPress}
      >
        <Image
          resizeMode={'contain'}
          style={[
            {
              width: width - 20,
              height: width - 20,
              tintColor: tintColor
            }
          ]}
          source={image}
        />
      </TouchableOpacity>
    );
  }
}
  