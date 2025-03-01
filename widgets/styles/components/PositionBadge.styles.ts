import { StyleSheet } from "react-native";
import { scale, moderateScale } from "react-native-size-matters";

export const positionBadgeStyles = StyleSheet.create({
  positionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scale(8)
  },
  positionColumn: {
    alignItems: 'center',
    width: '30%'
  },
  positionBadge: {
    width: '100%',
    height: scale(20),
    backgroundColor: 'transparent',
    borderRadius: scale(4),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scale(8),
    borderWidth: 1
  },
  positionText: {
    color: '#FFFFFF',
    fontSize: moderateScale(10),
    fontFamily: 'F1Regular900',
    letterSpacing: 1
  },
  bronzeBorder: {
    borderColor: '#CD7F32'
  },
  goldBorder: {
    borderColor: '#FFD700'
  },
  silverBorder: {
    borderColor: '#C0C0C0'
  }
}); 