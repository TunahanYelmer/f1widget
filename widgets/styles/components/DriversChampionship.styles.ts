import { StyleSheet } from "react-native";
import { scale, moderateScale } from "react-native-size-matters";

export const driversChampionshipStyles = StyleSheet.create({
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
  headerTitle: {
    color: '#FFFFFF',
    fontSize: moderateScale(14),
    fontFamily: 'F1Regular900'
  },
  headerSubtitle: {
    color: '#666666',
    fontSize: moderateScale(10),
    fontFamily: 'F1Regular400'
  },
  content: {
    backgroundColor: '#1A1A1A',
    padding: scale(8)
  },
  driverRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: scale(8),
    borderRadius: scale(8),
    marginBottom: scale(4)
  },
  driverInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  driverPhoto: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(20),
    marginRight: scale(8)
  },
  driverDetails: {
    flex: 1
  },
  driverName: {
    color: '#FFFFFF',
    fontSize: moderateScale(12),
    fontFamily: 'F1Regular700'
  },
  teamName: {
    color: '#666666',
    fontSize: moderateScale(10),
    fontFamily: 'F1Regular400'
  },
  pointsContainer: {
    alignItems: 'flex-end',
    marginLeft: scale(8)
  },
  points: {
    color: '#FFFFFF',
    fontSize: moderateScale(14),
    fontFamily: 'F1Regular900'
  },
  pointsLabel: {
    color: '#666666',
    fontSize: moderateScale(8),
    fontFamily: 'F1Regular400'
  }
});

export const positionIndicatorStyles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    width: scale(32),
    height: scale(32),
    borderRadius: scale(6),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scale(8),
    borderWidth: 1.5
  },
  goldBorder: {
    borderColor: '#FFD700'
  },
  silverBorder: {
    borderColor: '#C0C0C0'
  },
  bronzeBorder: {
    borderColor: '#CD7F32'
  },
  defaultBorder: {
    borderColor: '#333333'
  },
  positionText: {
    fontSize: moderateScale(14),
    fontFamily: 'F1Regular900',
    color: '#FFFFFF'
  }
});

export const pointsProgressBarStyles = StyleSheet.create({
  container: {
    width: scale(96),
    height: scale(6),
    borderRadius: scale(3),
    overflow: 'hidden',
    backgroundColor: '#333333',
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2
  },
  progress: {
    height: '100%',
    borderRadius: scale(3)
  }
}); 