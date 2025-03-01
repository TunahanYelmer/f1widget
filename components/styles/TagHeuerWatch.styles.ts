import { StyleSheet } from "react-native";

export const createTagHeuerWatchStyles = (size: number) => StyleSheet.create({
  container: {
    width: size,
    height: size,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center'
  },
  clockFace: {
    width: size,
    height: size,
    position: 'absolute'
  },
  hand: {
    width: size * 0.8,
    height: size * 0.8,
    position: 'absolute'
  },
  hourHand: {
    zIndex: 2
  },
  minuteHand: {
    zIndex: 3
  },
  secondHand: {
    zIndex: 4
  }
}); 