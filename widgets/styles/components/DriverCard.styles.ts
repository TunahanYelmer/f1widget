import { StyleSheet } from "react-native";
import { scale, moderateScale } from "react-native-size-matters";

export const driverCardStyles = StyleSheet.create({
  driverColumn: {
    alignItems: 'center',
    width: '30%',
    marginHorizontal: scale(4)
  },
  nameContainer: {
    marginBottom: scale(2),
    width: '100%'
  },
  firstName: {
    color: '#FFFFFF',
    fontSize: moderateScale(8),
    fontFamily: 'F1Regular400',
    textAlign: 'center',
    backgroundColor: '#1E1E1E',
    padding: scale(1),
    borderRadius: scale(2),
    width: '100%'
  },
  lastNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E1E1E',
    padding: scale(1),
    borderRadius: scale(2),
    marginTop: scale(1)
  },
  lastName: {
    color: '#FFFFFF',
    fontSize: moderateScale(10),
    fontFamily: 'F1Regular900',
    marginRight: scale(4)
  },
  driverFlag: {
    width: scale(16),
    height: scale(10)
  },
  teamName: {
    fontSize: moderateScale(8),
    fontFamily: 'F1Regular400',
    marginBottom: scale(2),
    textAlign: 'center',
    backgroundColor: '#1E1E1E',
    padding: scale(1),
    borderRadius: scale(2),
    width: '100%'
  },
  imageContainer: {
    position: 'relative',
    marginBottom: scale(2),
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(120),
    height: scale(90),
    backgroundColor: 'transparent',
    borderRadius: scale(4),
    overflow: 'hidden'
  },
  driverImage: {
    width: '100%',
    height: '100%'
  },
  timeContainer: {
    width: '100%',
    backgroundColor: '#1E1E1E',
    padding: scale(1),
    borderRadius: scale(2)
  },
  timeText: {
    color: '#FFFFFF',
    fontSize: moderateScale(10),
    fontFamily: 'F1Regular700',
    textAlign: 'center'
  },
  opacityReduced: {
    opacity: 0.8
  }
}); 