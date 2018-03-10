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

export default class Marker extends PureComponent {

  static propTypes = {
    width: PropTypes.number,
  };

  static defaultProps = {
    width: 0,
  };

  render() {

    const {
      width,
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
              width: width - Metrics.smallMargin,
              height: width - Metrics.smallMargin,
              tintColor: tintColor
            }
          ]}
          source={image}
        />
      </TouchableOpacity>
    );
  }
}
 
const style = StyleSheet.create({

})
 