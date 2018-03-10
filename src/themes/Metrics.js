import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const deviceWidth = width < height ? width : height;
const deviceHeight = width < height ? height : width;

const Metrics = {
  deviceWidth,
  deviceHeight, 
  baseMargin: deviceWidth / 30,
  doubleBaseMargin: deviceWidth / 15,
  smallMargin: deviceWidth / 60,

  basePadding: deviceWidth / 30,
  doubleBasePadding: deviceWidth / 15,
  smallPadding: deviceWidth / 60,

  navBarHeight: (Platform.OS === 'ios') ? deviceWidth / 64 : 54,
  radius: 5,
  buttonHeight: 45,
  inputHeight: 45,  
  
  scrollDistance: 250,
  minHeightHeader: 60,
  maxHeightHeader: deviceHeight * 4 / 6  
};

export default Metrics;