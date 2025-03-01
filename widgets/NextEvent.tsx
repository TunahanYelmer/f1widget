import { View, Text, Image, ScrollView, Animated, Pressable } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import React from "react";
import "@/global.css";
import TagHeuerWatch from "@/components/TagHeuerWatch";

const NextEvent = () => {
  // Race date (example: April 28, 2024 at 10:00)
  const raceDate = new Date(2024, 3, 28, 10, 0, 0);

  return (
    <View 
      style={{
        margin: scale(12),
        backgroundColor: '#1A1A1A',
        borderRadius: scale(12),
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#333333'
      }}
    >
      <View 
        style={{
          padding: scale(10),
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#000000'
        }}
      >
        <View>
          <Text
            style={{ 
              color: '#FFFFFF',
              fontSize: moderateScale(14),
              fontFamily: 'F1Regular900',
            }}
          >
            Next Event
          </Text>
          <Text
            style={{ 
              color: '#666666',
              fontSize: moderateScale(10),
              fontFamily: 'F1Regular400',
            }}
          >
            2024 Season
          </Text>
        </View>
        <View 
          style={{
            backgroundColor: '#F91536',
            paddingHorizontal: scale(8),
            paddingVertical: scale(2),
            borderRadius: scale(8),
            flexDirection: 'row',
            alignItems: 'center',
            gap: scale(2)
          }}
        >
          <Text
            style={{ 
              color: '#FFFFFF',
              fontSize: moderateScale(8),
              fontFamily: 'F1Regular700',
              opacity: 0.8
            }}
          >
            ROUND
          </Text>
          <Text
            style={{ 
              color: '#FFFFFF',
              fontSize: moderateScale(14),
              fontFamily: 'F1Regular900'
            }}
          >
            9
          </Text>
        </View>
      </View>

      <View 
        style={{ 
          backgroundColor: '#1A1A1A',
          padding: scale(8)
        }}
      >
        <Pressable 
          style={({ pressed }) => ({
            backgroundColor: pressed ? '#222222' : '#1A1A1A',
            borderRadius: scale(8),
            overflow: 'hidden',
            borderLeftWidth: scale(3),
            borderLeftColor: '#F91536'
          })}
        >
          <View style={{ padding: scale(8) }}>
            <View style={{ flexDirection: 'row', marginBottom: scale(8) }}>
              <View 
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: scale(4),
                  borderRadius: scale(8),
                  marginRight: scale(8)
                }}
              >
                <Image
                  source={require("@/assets/images/netherlands-flag.png")}
                  style={{
                    width: scale(40),
                    height: scale(25),
                    borderRadius: scale(4)
                  }}
                />
              </View>

              <View style={{ flex: 1 }}>
                <Text
                  style={{ 
                    color: '#FFFFFF',
                    fontSize: moderateScale(16),
                    fontFamily: 'F1Regular700',
                    marginBottom: scale(2)
                  }}
                >
                  Spa-Francorchamps
                </Text>
                <Text
                  style={{ 
                    color: '#666666',
                    fontSize: moderateScale(12),
                    fontFamily: 'F1Regular400'
                  }}
                >
                  24-28 April
                </Text>
              </View>

              <View style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
                <TagHeuerWatch size={scale(60)} />
              </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', marginBottom: scale(4) }}>
                  <Text
                    style={{ 
                      color: '#FFFFFF',
                      fontSize: moderateScale(12),
                      fontFamily: 'F1Regular700',
                      width: scale(50)
                    }}
                  >
                    FP1
                  </Text>
                  <Text
                    style={{ 
                      color: '#666666',
                      fontSize: moderateScale(12),
                      fontFamily: 'F1Regular400'
                    }}
                  >
                    Fri 10:00
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: scale(4) }}>
                  <Text
                    style={{ 
                      color: '#FFFFFF',
                      fontSize: moderateScale(12),
                      fontFamily: 'F1Regular700',
                      width: scale(50)
                    }}
                  >
                    FP2
                  </Text>
                  <Text
                    style={{ 
                      color: '#666666',
                      fontSize: moderateScale(12),
                      fontFamily: 'F1Regular400'
                    }}
                  >
                    Fri 14:00
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: scale(4) }}>
                  <Text
                    style={{ 
                      color: '#FFFFFF',
                      fontSize: moderateScale(12),
                      fontFamily: 'F1Regular700',
                      width: scale(50)
                    }}
                  >
                    FP3
                  </Text>
                  <Text
                    style={{ 
                      color: '#666666',
                      fontSize: moderateScale(12),
                      fontFamily: 'F1Regular400'
                    }}
                  >
                    Sat 11:00
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: scale(4) }}>
                  <Text
                    style={{ 
                      color: '#FFFFFF',
                      fontSize: moderateScale(12),
                      fontFamily: 'F1Regular700',
                      width: scale(50)
                    }}
                  >
                    Qualy
                  </Text>
                  <Text
                    style={{ 
                      color: '#666666',
                      fontSize: moderateScale(12),
                      fontFamily: 'F1Regular400'
                    }}
                  >
                    Sat 15:00
                  </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Text
                    style={{ 
                      color: '#FFFFFF',
                      fontSize: moderateScale(12),
                      fontFamily: 'F1Regular700',
                      width: scale(50)
                    }}
                  >
                    Race
                  </Text>
                  <Text
                    style={{ 
                      color: '#666666',
                      fontSize: moderateScale(12),
                      fontFamily: 'F1Regular400'
                    }}
                  >
                    Sun 15:00
                  </Text>
                </View>
              </View>

              <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: scale(16) }}>
                <Image
                  source={require("@/assets/images/bahrain-carbon.png")}
                  style={{
                    width: scale(120),
                    height: scale(90),
                    borderRadius: scale(8)
                  }}
                />
              </View>
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default NextEvent;
