import { StyleSheet } from "react-native";
import { scale, moderateScale } from "react-native-size-matters";

export const nextEventStyles = StyleSheet.create({
  container: {
    margin: scale(8),
    backgroundColor: "#1A1A1A",
    borderRadius: scale(12),
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#333333",
  },
  header: {
    padding: scale(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000000'
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerInfo: {
    marginRight: scale(8),
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
  flagContainer: {
    width: scale(32),
    height: scale(20),
    borderRadius: scale(2),
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
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
    backgroundColor: "#1A1A1A",
    padding: scale(8),
  },
  mainSection: {
    flexDirection: 'row',
    marginBottom: scale(8),
    gap: scale(8),
  },
  countdownSection: {
    flex: 1,
    backgroundColor: '#000000',
    padding: scale(6),
    borderRadius: scale(8),
  },
  countdownContent: {
    flex: 1,
    alignItems: 'center',
  },
  daysBlock: {
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    padding: scale(4),
    borderRadius: scale(4),
    width: '60%',
    marginBottom: scale(4),
  },
  daysValue: {
    color: "#FFFFFF",
    fontSize: moderateScale(18),
    fontFamily: "F1Regular900",
  },
  daysLabel: {
    color: '#666666',
    fontSize: moderateScale(8),
    fontFamily: 'F1Regular700',
    textTransform: 'uppercase',
    marginTop: scale(1),
  },
  smallUnitsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  smallTimeBlock: {
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    padding: scale(3),
    borderRadius: scale(4),
    flex: 1,
    marginHorizontal: scale(1),
  },
  smallTimeValue: {
    color: "#FFFFFF",
    fontSize: moderateScale(11),
    fontFamily: "F1Regular900",
  },
  smallTimeLabel: {
    color: '#666666',
    fontSize: moderateScale(6),
    fontFamily: 'F1Regular700',
    textTransform: 'uppercase',
    marginTop: scale(1),
  },
  trackMapContainer: {
    flex: 0.8,
    backgroundColor: '#000000',
    borderRadius: scale(8),
    padding: scale(6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  trackMap: {
    width: '100%',
    height: scale(80),
    resizeMode: 'contain',
  },
  sessionsContainer: {
    backgroundColor: '#000000',
    borderRadius: scale(8),
    padding: scale(8),
  },
  sessionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    paddingVertical: scale(4),
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  sessionName: {
    color: "#FFFFFF",
    fontSize: moderateScale(12),
    fontFamily: "F1Regular900",
    flex: 0.3,
    marginRight: scale(8),
  },
  sessionTime: {
    color: "#666666",
    fontSize: moderateScale(11),
    fontFamily: "F1Regular400",
    flex: 0.7,
    textAlign: 'right',
  },
}); 