import { StyleSheet } from "react-native";
import { scale, moderateScale } from "react-native-size-matters";

export const constructorsChampionshipStyles = StyleSheet.create({
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
  roundBadge: {
    backgroundColor: '#F91536',
    paddingHorizontal: scale(8),
    paddingVertical: scale(2),
    borderRadius: scale(8),
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(2)
  },
  roundText: {
    color: '#FFFFFF',
    fontSize: moderateScale(8),
    fontFamily: 'F1Regular700',
    opacity: 0.8
  },
  roundNumber: {
    color: '#FFFFFF',
    fontSize: moderateScale(14),
    fontFamily: 'F1Regular900'
  },
  scrollView: {
    height: scale(166),
    backgroundColor: '#1A1A1A'
  },
  scrollViewContent: {
    padding: scale(8)
  },
  constructorRow: {
    backgroundColor: '#1A1A1A',
    marginBottom: scale(8),
    borderRadius: scale(8),
    overflow: 'hidden',
    height: scale(48)
  },
  constructorRowPressed: {
    backgroundColor: '#222222'
  },
  constructorContent: {
    flexDirection: 'row',
    padding: scale(8)
  },
  constructorInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  logoContainer: {
    backgroundColor: '#FFFFFF',
    padding: scale(4),
    borderRadius: scale(8),
    marginRight: scale(8)
  },
  logo: {
    width: scale(32),
    height: scale(32),
    borderRadius: scale(4)
  },
  teamDetails: {
    flex: 1
  },
  teamName: {
    color: '#FFFFFF',
    fontSize: moderateScale(12),
    fontFamily: 'F1Regular700'
  },
  pointsContainer: {
    alignItems: 'flex-end'
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
    backgroundColor: '#333333',
    borderRadius: scale(3),
    overflow: 'hidden'
  },
  progress: {
    height: '100%',
    borderRadius: scale(3)
  }
}); 