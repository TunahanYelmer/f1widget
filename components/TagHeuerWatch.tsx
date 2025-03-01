import { View, Image, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import { scale } from "react-native-size-matters";

interface TagHeuerWatchProps {
  size: number;
}

const TagHeuerWatch: React.FC<TagHeuerWatchProps> = ({ size }) => {
  const scaleSize = scale(size);
  const animationFrame = useRef<number>();
  
  // Create animated values for each hand
  const hourRotation = useRef(new Animated.Value(0)).current;
  const minuteRotation = useRef(new Animated.Value(0)).current;
  const secondRotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    let lastUpdate = Date.now();

    const updateClock = () => {
      const now = Date.now();
      
      // Only update if enough time has passed (optimization)
      if (now - lastUpdate >= 100) { // Update every 100ms
        const date = new Date();
        const hours = date.getHours() % 12;
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const milliseconds = date.getMilliseconds();

        // Calculate angles with smooth transitions
        const hourAngle = ((hours + minutes / 60) / 12) * 360;
        const minuteAngle = ((minutes + seconds / 60) / 60) * 360;
        const secondAngle = ((seconds + milliseconds / 1000) / 60) * 360;

        // Update rotations
        hourRotation.setValue(hourAngle);
        minuteRotation.setValue(minuteAngle);
        secondRotation.setValue(secondAngle);

        lastUpdate = now;
      }

      // Request next frame
      animationFrame.current = requestAnimationFrame(updateClock);
    };

    // Start animation
    updateClock();

    // Cleanup
    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  const createRotationStyle = (animatedValue: Animated.Value) => ({
    transform: [
      { 
        rotate: animatedValue.interpolate({
          inputRange: [0, 360],
          outputRange: ['0deg', '360deg'],
          extrapolate: 'clamp'
        })
      }
    ]
  });

  return (
    <View style={{
      width: scaleSize,
      height: scaleSize,
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Clock Face */}
      <Image
        source={require("@/assets/images/tagheuer-clock.png")}
        style={{
          width: scaleSize,
          height: scaleSize,
          position: 'absolute'
        }}
        resizeMode="contain"
        fadeDuration={0}
      />
      
      {/* Hour Hand */}
      <Animated.Image
        source={require("@/assets/images/tagheuer-watch-hours.png")}
        style={[{
          width: scaleSize * 0.8,
          height: scaleSize * 0.8,
          position: 'absolute',
          zIndex: 2
        }, createRotationStyle(hourRotation)]}
        resizeMode="contain"
        fadeDuration={0}
      />
      
      {/* Minute Hand */}
      <Animated.Image
        source={require("@/assets/images/tagheuer-watch-minutes.png")}
        style={[{
          width: scaleSize * 0.8,
          height: scaleSize * 0.8,
          position: 'absolute',
          zIndex: 3
        }, createRotationStyle(minuteRotation)]}
        resizeMode="contain"
        fadeDuration={0}
      />
      
      {/* Second Hand */}
      <Animated.Image
        source={require("@/assets/images/tagheuer-watch-second.png")}
        style={[{
          width: scaleSize * 0.8,
          height: scaleSize * 0.8,
          position: 'absolute',
          zIndex: 4
        }, createRotationStyle(secondRotation)]}
        resizeMode="contain"
        fadeDuration={0}
      />
    </View>
  );
};

export default TagHeuerWatch;
