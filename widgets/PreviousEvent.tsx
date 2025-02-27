import { View, Text, Image, Dimensions } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import React from "react";
import "@/global.css";

const PreviousEvent: React.FC = () => {
  // Get screen dimensions for responsive sizing
  const { width } = Dimensions.get('window');
  const isSmallScreen = width < 360;

  return (
    <View className="flex m-1 justify-center items-center border-2 rounded-lg p-1 text-center bg-formulaDarkGrey">
      <View className="flex flex-row items-center w-full justify-between mx-1">
        <View className="flex-row items-center">
          <Text
            className="text-white justify-start font-F1Regular900"
            style={{ fontSize: moderateScale(12) }}
          >
              Spa-Francorchamps
          </Text>
          <Image
            className="mx-1 rounded-sm"
            source={require("@/assets/images/netherlands-flag.png")}
            style={{
              width: scale(25),
              height: scale(15)
            }}
          />
        </View>
        <View>
          <Text
            className="text-center font-F1Regular900 text-white"
            style={{ fontSize: moderateScale(13) }}
          >
            Q3
          </Text>
        </View>
      </View>
      <View className="border-t-2 w-full my-1 border-formulaRed"></View>

      <View className="flex-row justify-between items-start mx-0.5 my-0.5">
        {/* Second Place */}
        <View className="flex-1 items-center justify-center mt-1 mx-0.5">
          <View className="bg-[#C0C0C0]/45 rounded-md p-1 border border-[#C0C0C0]/45">
            <View className="flex-row justify-center items-center mb-0.5 p-0.5">
              <Image
                className="rounded-[2px] mr-1"
                source={require("@/assets/images/netherlands-flag.png")}
                style={{
                  width: scale(20),
                  height: verticalScale(12)
                }}
              />
              <View>
                <Text
                  className="text-white font-F1Regular400Wide"
                  style={{ fontSize: moderateScale(8) }}
                >
                  Max
                </Text>
                <Text
                  className="text-white font-F1Regular900"
                  style={{ fontSize: moderateScale(9) }}
                >
                  Verstappen
                </Text>
              </View>
            </View>
            <View className="items-center -mx-2">
              <Image
                className="rounded-[4px]"
                source={require("@/assets/images/leclerc.png")}
                style={{
                  width: scale(95),
                  height: verticalScale(110)
                }}
              />
            </View>
            <Text
              className="text-center text-white font-F1Regular900 mt-1"
              style={{ fontSize: moderateScale(10) }}
            >
              1:22.595
            </Text>
            <Text
              className="text-center text-formulaRed font-F1Regular900"
              style={{ fontSize: moderateScale(8) }}
            >
              +0.321
            </Text>
          </View>
          <Text className="text-white font-F1Regular900 mt-0.5" style={{ fontSize: moderateScale(11) }}>
            2ND
          </Text>
        </View>

        {/* First Place */}
        <View className="flex-1 items-center justify-center mx-0.5">
          <View className="bg-[#FFD700]/45 rounded-md p-1 border border-[#FFD700]/45">
            <View className="flex-row justify-center items-center mb-0.5 p-0.5">
              <Image
                className="rounded-[2px] mr-1"
                source={require("@/assets/images/netherlands-flag.png")}
                style={{
                  width: scale(20),
                  height: verticalScale(12)
                }}
              />
              <View>
                <Text
                  className="text-white font-F1Regular400Wide"
                  style={{ fontSize: moderateScale(8) }}
                >
                  Esteban
                </Text>
                <Text
                  className="text-white font-F1Regular900"
                  style={{ fontSize: moderateScale(9) }}
                >
                  Ocon
                </Text>
              </View>
            </View>
            <View className="items-center -mx-2">
              <Image
                className="rounded-[4px]"
                source={require("@/assets/images/leclerc.png")}
                style={{
                  width: scale(95),
                  height: verticalScale(110)
                }}
              />
            </View>
            <Text
              className="text-center text-white font-F1Regular900 mt-1"
              style={{ fontSize: moderateScale(10) }}
            >
              1:22.595
            </Text>
            <Text
              className="text-center text-green-500 font-F1Regular900"
              style={{ fontSize: moderateScale(8) }}
            >
              FASTEST LAP
            </Text>
          </View>
          <Text className="text-white font-F1Regular900 mt-0.5" style={{ fontSize: moderateScale(11) }}>
            1ST
          </Text>
        </View>

        {/* Third Place */}
        <View className="flex-1 items-center justify-center mt-1 mx-0.5">
          <View className="bg-[#CD7F32]/45 rounded-md p-1 border border-[#CD7F32]/45">
            <View className="flex-row justify-center items-center mb-0.5 p-0.5">
              <Image
                className="rounded-[2px] mr-1"
                source={require("@/assets/images/netherlands-flag.png")}
                style={{
                  width: scale(20),
                  height: verticalScale(12)
                }}
              />
              <View>
                <Text
                  className="text-white font-F1Regular400Wide"
                  style={{ fontSize: moderateScale(8) }}
                >
                  Max
                </Text>
                <Text
                  className="text-white font-F1Regular900"
                  style={{ fontSize: moderateScale(9) }}
                >
                  Verstappen
                </Text>
              </View>
            </View>
            <View className="items-center -mx-2">
              <Image
                className="rounded-[4px]"
                source={require("@/assets/images/leclerc.png")}
                style={{
                  width: scale(95),
                  height: verticalScale(110)
                }}
              />
            </View>
            <Text
              className="text-center text-white font-F1Regular900 mt-1"
              style={{ fontSize: moderateScale(10) }}
            >
              1:22.595
            </Text>
            <Text
              className="text-center text-formulaRed font-F1Regular900"
              style={{ fontSize: moderateScale(8) }}
            >
              +0.458
            </Text>
          </View>
          <Text className="text-white font-F1Regular900 mt-0.5" style={{ fontSize: moderateScale(11) }}>
            3RD
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PreviousEvent;

