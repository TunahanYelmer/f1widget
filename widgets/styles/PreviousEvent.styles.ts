import { StyleSheet } from "react-native";
import { scale, moderateScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    margin: scale(12),
    backgroundColor: '#1A1A1A',
    borderRadius: scale(12),
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#333333'
  },
  header: {
    padding: scale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000000'
  },
  circuitName: {
    color: '#FFFFFF',
    fontSize: moderateScale(14),
    fontFamily: 'F1Regular900'
  },
  grandPrixName: {
    color: '#666666',
    fontSize: moderateScale(10),
    fontFamily: 'F1Regular400'
  },
  flagImage: {
    width: scale(36),
    height: scale(24),
    borderRadius: scale(2)
  },
  eventTypeBadge: {
    backgroundColor: '#F91536',
    paddingHorizontal: scale(8),
    paddingVertical: scale(2),
    borderRadius: scale(8),
    flexDirection: 'row',
    alignItems: 'center'
  },
  eventTypeText: {
    color: '#FFFFFF',
    fontSize: moderateScale(12),
    fontFamily: 'F1Regular900'
  },
  content: {
    backgroundColor: '#1A1A1A',
    padding: scale(8)
  },
  driversContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: scale(8),
    marginHorizontal: -scale(4)
  },
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
  ferrariColor: {
    color: '#F91536'
  },
  redbullColor: {
    color: '#3671C6'
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
  },
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