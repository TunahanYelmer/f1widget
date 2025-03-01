import { StyleSheet } from "react-native";
import { scale, moderateScale } from "react-native-size-matters";

export const styles = StyleSheet.create({
  container: {
    margin: scale(8),
    backgroundColor: "#1A1A1A",
    borderRadius: scale(8),
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#333333"
  },
  header: {
    padding: scale(6),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#000000"
  },
  headerLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  flagContainer: {
    marginRight: scale(6),
    justifyContent: 'center'
  },
  headerFlagImage: {
    width: scale(24),
    height: scale(16),
    borderRadius: scale(2)
  },
  titleContainer: {
    flex: 1
  },
  roundText: {
    color: "#666666",
    fontSize: moderateScale(8),
    fontFamily: "F1Regular400"
  },
  eventName: {
    color: "#FFFFFF",
    fontSize: moderateScale(12),
    fontFamily: "F1Regular900"
  },
  roundBadge: {
    backgroundColor: "#F91536",
    paddingHorizontal: scale(6),
    paddingVertical: scale(2),
    borderRadius: scale(6),
    flexDirection: "row",
    alignItems: "center",
    gap: scale(2)
  },
  roundBadgeText: {
    color: "#FFFFFF",
    fontSize: moderateScale(6),
    fontFamily: "F1Regular700",
    opacity: 0.8
  },
  roundNumber: {
    color: "#FFFFFF",
    fontSize: moderateScale(10),
    fontFamily: "F1Regular900"
  },
  topCountdown: {
    backgroundColor: "#000000",
    padding: scale(8),
    borderBottomWidth: 1,
    borderBottomColor: "#333333"
  },
  countdownHeader: {
    alignItems: 'center',
    marginBottom: scale(4)
  },
  countdownLabel: {
    color: "#666666",
    fontSize: moderateScale(8),
    fontFamily: "F1Regular700",
    marginBottom: scale(2)
  },
  countdownTime: {
    color: "#F91536",
    fontSize: moderateScale(12),
    fontFamily: "F1Regular700"
  },
  countdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: scale(4)
  },
  timeBlock: {
    alignItems: 'center',
    minWidth: scale(40),
    backgroundColor: '#1A1A1A',
    padding: scale(4),
    borderRadius: scale(4)
  },
  timeValue: {
    color: "#FFFFFF",
    fontSize: moderateScale(24),
    fontFamily: "F1Regular900",
    lineHeight: moderateScale(24)
  },
  timeLabel: {
    color: "#666666",
    fontSize: moderateScale(8),
    fontFamily: "F1Regular700",
    marginTop: scale(2)
  },
  timeSeparator: {
    color: "#F91536",
    fontSize: moderateScale(20),
    fontFamily: "F1Regular900",
    lineHeight: moderateScale(20)
  },
  eventCard: {
    backgroundColor: "#1A1A1A",
    borderRadius: scale(6),
    overflow: "hidden"
  },
  cardContent: {
    padding: scale(6)
  },
  watchContainer: {
    alignItems: 'center',
    marginVertical: scale(8)
  },
  mainSection: {
    alignItems: 'center',
    paddingVertical: scale(8),
    borderBottomWidth: 1,
    borderBottomColor: '#333333'
  },
  nextSessionInfo: {
    alignItems: 'center',
    marginBottom: scale(4)
  },
  nextSessionLabel: {
    color: "#666666",
    fontSize: moderateScale(8),
    fontFamily: "F1Regular700",
    marginBottom: scale(2)
  },
  nextSessionName: {
    color: "#FFFFFF",
    fontSize: moderateScale(16),
    fontFamily: "F1Regular900",
    marginBottom: scale(2)
  },
  nextSessionTime: {
    color: "#F91536",
    fontSize: moderateScale(12),
    fontFamily: "F1Regular700"
  },
  progressBarContainer: {
    width: '100%',
    height: scale(2),
    backgroundColor: '#333333',
    marginTop: scale(8),
    borderRadius: scale(1),
    overflow: 'hidden'
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#F91536'
  },
  bottomSection: {
    paddingTop: scale(8)
  },
  sessionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: scale(4),
    paddingHorizontal: scale(6)
  },
  activeSession: {
    backgroundColor: '#000000',
    borderRadius: scale(4)
  },
  nextSession: {
    backgroundColor: '#2A2A2A',
    borderRadius: scale(4)
  },
  sessionDay: {
    color: "#666666",
    fontSize: moderateScale(10),
    fontFamily: "F1Regular700",
    width: scale(30)
  },
  sessionName: {
    color: "#FFFFFF",
    fontSize: moderateScale(10),
    fontFamily: "F1Regular700",
    flex: 1
  },
  sessionTime: {
    color: "#666666",
    fontSize: moderateScale(10),
    fontFamily: "F1Regular400"
  },
  activeSessionText: {
    color: "#F91536"
  },
  nextSessionText: {
    color: "#FFFFFF"
  }
}); 