import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';

import { AppStyles, Metrics, Fonts, Colors } from '../../themes';

export default class OptionRadio extends PureComponent {

  static propTypes = {
    width: PropTypes.number,
    image: PropTypes.any,
    text: PropTypes.string,
    onPress: PropTypes.func,
    selected: PropTypes.bool,
    setyleRadio: PropTypes.any,
    sub: PropTypes.bool
  };

  static defaultProps = {
    image: require("../../resources/icons/close.png"),
    width: 25,
    text: "",
    selected: false,
    setyleRadio: {},
    sub: false
  };

  render() {

    const {
      image,
      onPress,
      width,
      text,
      selected,
      setyleRadio,
      sub
    } = this.props;

    return (
      <TouchableOpacity
        style={[
          styles.container,
          AppStyles.center,
          AppStyles.row,
          setyleRadio
        ]}
        onPress={onPress}
      >
        {
          sub && <Text style={{ marginRight: Metrics.smallMargin }}>-</Text>
        }
        <View style={[
          AppStyles.center,
          {
            backgroundColor: selected ? Colors.appColor : Colors.transparent,
            width: width,
            height: width,
            borderRadius: width / 2,
            borderColor: Colors.appColor,
            borderWidth: 1,
          }
        ]}>
          <Image
            resizeMode={'contain'}
            style={[
              {
                tintColor: selected ? Colors.white : Colors.white,
                width: width - Metrics.baseMargin,
                height: width - Metrics.baseMargin,
              }
            ]}
            source={image}
          />
        </View>
        <View style={{ flex: 3 }}>
          <Text style={[
            Fonts.style.normal,
            {
              margin: Metrics.smallMargin,
              color: Colors.black,
            }
          ]}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginRight: Metrics.smallMargin
  },
})
