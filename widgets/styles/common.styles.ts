import { StyleSheet } from "react-native";
import { scale, moderateScale } from "react-native-size-matters";

const styles = StyleSheet.create({
  // Common card container styles
  card: {
    margin: scale(12),
    backgroundColor: '#1A1A1A',
    borderRadius: scale(12),
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#333333'
  },
  // Common header styles
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
  // Common content container styles
  content: {
    backgroundColor: '#1A1A1A',
    padding: scale(8)
  },
  // Common text styles
  textPrimary: {
    color: '#FFFFFF',
    fontFamily: 'F1Regular700'
  },
  textSecondary: {
    color: '#666666',
    fontFamily: 'F1Regular400'
  },
  textBold: {
    fontFamily: 'F1Regular900'
  },
  // Common badge styles
  badge: {
    backgroundColor: '#F91536',
    paddingHorizontal: scale(8),
    paddingVertical: scale(2),
    borderRadius: scale(8),
    flexDirection: 'row',
    alignItems: 'center'
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: moderateScale(12),
    fontFamily: 'F1Regular900'
  },
  // Common image styles
  roundedImage: {
    borderRadius: scale(4)
  },
  // Common layout styles
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  column: {
    flexDirection: 'column'
  },
  flex1: {
    flex: 1
  }
});

// Separate spacing constants
export const spacing = {
  tiny: scale(2),
  small: scale(4),
  medium: scale(8),
  large: scale(12),
  xlarge: scale(16)
};

// Separate font size constants
export const fontSize = {
  tiny: moderateScale(8),
  small: moderateScale(10),
  medium: moderateScale(12),
  large: moderateScale(14),
  xlarge: moderateScale(16)
};

export const commonStyles = {
  ...styles,
  spacing,
  fontSize
}; 