import { StyleSheet } from "react-native";
import { scale, moderateScale } from "react-native-size-matters";

export const headerStyles = StyleSheet.create({
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
  }
}); 