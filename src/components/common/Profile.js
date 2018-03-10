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

class Profile extends PureComponent {

  static propTypes = {
    width: PropTypes.number,
    image: PropTypes.any
  };

  static defaultProps = {
    width: 80,
    image: "http://i.imgur.com/sNam9iJ.jpg"
  };

  render() {

    const {
      width,
      image,
    } = this.props;

    return (
      <TouchableOpacity
        style={[
          AppStyles.center
        ]}
      >
        <Image
          key={Math.random()}
          resizeMode={"cover"}
          style={[
            AppStyles.center,
            {
              borderWidth: 1,
              width: width,
              height: width,
              borderRadius: width / 2,
              borderColor: Colors.appColor
            }
          ]}
          source={{ uri: image }}
        />
      </TouchableOpacity>
    );
  }
}
export default (Profile);
