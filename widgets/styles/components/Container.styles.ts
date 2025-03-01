import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

export const containerStyles = StyleSheet.create({
  container: {
    margin: scale(12),
    backgroundColor: '#1A1A1A',
    borderRadius: scale(12),
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#333333'
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
  }
}); 