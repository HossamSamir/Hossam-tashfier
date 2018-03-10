import Fonts from './Fonts';
import Metrics from './Metrics';
import Colors from './Colors';

const AppStyles = {
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.transparent,
  },
  imageContainer: {
    flex: 1,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }, 
  row: {
    flexDirection: 'row',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  shadow: {
    elevation: 5,
    shadowColor: '#FFFFFF',
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowOffset: {
      height: 5
    },
  },
  imageContain: {
    resizeMode: 'contain',
    flex: 1,
    width: null,
    height: null,
  },
  imageContainFlex: {
    justifyContent: 'center',
    resizeMode: 'contain',
    flex: 1
  },
  imageCover: {
    resizeMode: 'cover',
    width: null,
    height: null,
    flex: 1
  },
  wrap: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
};

export default AppStyles;