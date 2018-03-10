import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Text,
  ImageBackground
} from 'react-native';

import {
  AppStyles,
  Colors,
  Metrics,
  Fonts,
} from '../../themes';

class Marker extends PureComponent {

  static propTypes = {
    width: PropTypes.number,
    image: PropTypes.any,
    color: PropTypes.string,
    onPress: PropTypes.func
  };

  static defaultProps = {
    width: 80,
    image: "http://i.imgur.com/sNam9iJ.jpg",
    color: false,
    onPress: () => { }
  };

  render() {

    const {
      width,
      image,
      color,
      onPress
    } = this.props;

    return (
      <TouchableOpacity
        style={[
          AppStyles.center,
          styles.container
        ]}
        onPress={onPress}
      >
        <ImageBackground
          resizeMode={'cover'}
          style={[
            AppStyles.center,
            { width: width, height: width }
          ]}
          source={require("../../resources/icons/placeholder.png")}
        >
          <Image
            key={Math.random()}
            resizeMode={"cover"}
            style={[
              AppStyles.center,
              {
                borderWidth: 1,
                width: width - 20,
                height: width - 20,
                borderRadius: (width - 20) / 2,
                marginBottom: 8
              }
            ]}
            source={{ uri: image }}
          />
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}
export default (Marker);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  }
})
