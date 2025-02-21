import { View, Text, Image } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import React from "react";
import "@/global.css";

const PreviousEvent: React.FC = () => {
  return (
    <View className="flex m-3 justify-center items-center border-2 rounded-3xl p-2 text-center bg-formulaDarkGrey">
      <View className="flex flex-row items-center w-full justify-between mx-2">
        <View className="flex-row items-center">
          <Text
            className="text-center text-white justify-start font-F1Regular900"
            style={{ fontSize: scale(12) }} // Responsive font size
          >
              Spa-Francorchamps
          </Text>
          <Image
          className="mx-2 rounded-sm"
            source={require("@/assets/images/netherlands-flag.png")}
            style={{
              width: scale(30), // Scaled image width
              height: scale(20) // Scaled image height
            }}
          />
        </View>
        <View>
          <Text
            className="text-center font-F1Regular900 text-white"
            style={{ fontSize: scale(14) }}
          >
            Q3
          </Text>
        </View>
      </View>
      <View className="border-t-2 w-full my-2 border-formulaRed"></View>
      <View className="flex-row justify-between items-center m-4">
        {/* Second Place */}
        <View className="flex-1 items-center justify-center">
          <View>
            <View className="flex flex-row items-center justify-between">
              <Text
                className="text-white font-F1Regular400 mx-1"
                style={{ fontSize: scale(10) }}
              >
                Max
              </Text>
              <View>
                
                <Image
                className=" rounded-sm"
                  source={require("@/assets/images/netherlands-flag.png")}
                  style={{
                    width: scale(30),
                    height: verticalScale(20)

                  }}
                />
              </View>
            </View>
            <Text
              className="text-center text-white font-F1Regular900"
              style={{ fontSize: scale(10) }}
            >
              Verstappen
            </Text>
          </View>

          <Image
          className="rounded-md m-1"
            source={require("@/assets/images/leclerc.png")}
            style={{
              width: scale(90),
              height: verticalScale(110)
            }}
          />
          <Text
            className="text-center text-white font-F1Regular900"
            style={{ fontSize: scale(10) }}
          >
            1:22.595
          </Text>
        </View>

        {/* First Place */}
        <View className="flex-1 items-center justify-center">
          <View>
            <View className="flex flex-row items-center justify-between">
              <Text
                className="text-white font-F1Regular400 mx-1"
                style={{ fontSize: scale(10) }}
              >
                Max
              </Text>
              <View>
                
                <Image
                className=" rounded-sm"
                  source={require("@/assets/images/netherlands-flag.png")}
                  style={{
                    width: scale(30),
                    height: verticalScale(20)

                  }}
                />
              </View>
            </View>
            <Text
              className="text-center text-white font-F1Regular900"
              style={{ fontSize: scale(10) }}
            >
              Verstappen
            </Text>
          </View>

          <Image
          className="rounded-md m-1"
            source={require("@/assets/images/leclerc.png")}
            style={{
              width: scale(90),
              height: verticalScale(110)
            }}
          />
          <Text
            className="text-center text-white font-F1Regular900"
            style={{ fontSize: scale(10) }}
          >
            1:22.595
          </Text>
        </View>

        {/* Third Place */}
        <View className="flex-1 items-center justify-center">
          <View>
            <View className="flex flex-row items-center justify-between">
              <Text
                className="text-white font-F1Regular400 mx-1"
                style={{ fontSize: scale(10) }}
              >
                Max 
              </Text>
              <View>
                
                <Image
                className=" rounded-sm"
                  source={require("@/assets/images/netherlands-flag.png")}
                  style={{
                    width: scale(30),
                    height: verticalScale(20)

                  }}
                />
              </View>
            </View>
            <Text
              className="text-center text-white font-F1Regular900"
              style={{ fontSize: scale(10) }}
            >
              Verstappen
            </Text>
          </View>

          <Image
          className="rounded-md m-1"
            source={require("@/assets/images/leclerc.png")}
            style={{
              width: scale(90),
              height: verticalScale(110)
            }}
          />
          <Text
            className="text-center text-white font-F1Regular900"
            style={{ fontSize: scale(10) }}
          >
            1:22.595
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PreviousEvent;
