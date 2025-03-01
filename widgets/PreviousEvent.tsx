import { View, Text, Image, ScrollView, Animated, Pressable } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import React from "react";
import "@/global.css";

const PreviousEvent = () => {
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
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View>
            <Text
              style={{ 
                color: '#FFFFFF',
                fontSize: moderateScale(14),
                fontFamily: 'F1Regular900',
              }}
            >
              Suzuka Circuit
            </Text>
            <Text
              style={{ 
                color: '#666666',
                fontSize: moderateScale(10),
                fontFamily: 'F1Regular400',
              }}
            >
              Japanese Grand Prix
            </Text>
          </View>
          <View 
            style={{
              backgroundColor: '#FFFFFF',
              padding: scale(4),
              borderRadius: scale(4),
              marginLeft: scale(8)
            }}
          >
            <Image
              source={require("@/assets/images/netherlands-flag.png")}
              style={{
                width: scale(24),
                height: scale(16),
                borderRadius: scale(2)
              }}
            />
          </View>
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
            8
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
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: scale(16) }}>
                  {/* 3rd Place */}
                  <View style={{ alignItems: 'center', width: '30%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: scale(8) }}>
                      <Text
                        style={{ 
                          color: '#FFFFFF',
                          fontSize: moderateScale(12),
                          fontFamily: 'F1Regular700',
                          marginRight: scale(4)
                        }}
                      >
                        Carlos Sainz
                      </Text>
                      <Image
                        source={require("@/assets/images/netherlands-flag.png")}
                        style={{
                          width: scale(16),
                          height: scale(10)
                        }}
                      />
                    </View>
                    <Text
                      style={{ 
                        color: '#F91536',
                        fontSize: moderateScale(10),
                        fontFamily: 'F1Regular400',
                        marginBottom: scale(8)
                      }}
                    >
                      Ferrari
                    </Text>
                    <View style={{ 
                      position: 'relative', 
                      marginBottom: scale(8),
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: scale(80),
                      height: scale(60),
                      backgroundColor: '#F91536'
                    }}>
                      <Image
                        source={require("@/assets/images/leclerc.png")}
                        style={{
                          width: '100%',
                          height: '100%',
                          resizeMode: 'contain'
                        }}
                      />
                      <View 
                        style={{
                          width: scale(28),
                          height: scale(28),
                          borderRadius: scale(14),
                          borderWidth: scale(1.5),
                          borderColor: '#CD7F32',
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: 'transparent',
                          position: 'absolute',
                          bottom: scale(-16),
                          right: scale(-8)
                        }}
                      >
                        <Text
                          style={{ 
                            color: '#FFFFFF',
                            fontSize: moderateScale(14),
                            fontFamily: 'F1Regular900'
                          }}
                        >
                          3
                        </Text>
                      </View>
                    </View>
                    <Text
                      style={{ 
                        color: '#FFFFFF',
                        fontSize: moderateScale(12),
                        fontFamily: 'F1Regular700',
                        marginTop: scale(16)
                      }}
                    >
                      +20.866
                    </Text>
                  </View>

                  {/* 1st Place */}
                  <View style={{ alignItems: 'center', width: '30%', marginTop: -scale(16) }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: scale(8) }}>
                      <Text
                        style={{ 
                          color: '#FFFFFF',
                          fontSize: moderateScale(12),
                          fontFamily: 'F1Regular700',
                          marginRight: scale(4)
                        }}
                      >
                        Max Verstappen
                      </Text>
                      <Image
                        source={require("@/assets/images/netherlands-flag.png")}
                        style={{
                          width: scale(16),
                          height: scale(10)
                        }}
                      />
                    </View>
                    <Text
                      style={{ 
                        color: '#3671C6',
                        fontSize: moderateScale(10),
                        fontFamily: 'F1Regular400',
                        marginBottom: scale(8)
                      }}
                    >
                      Red Bull Racing
                    </Text>
                    <View style={{ 
                      position: 'relative', 
                      marginBottom: scale(8),
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: scale(80),
                      height: scale(60),
                      backgroundColor: '#3671C6'
                    }}>
                      <Image
                        source={require("@/assets/images/leclerc.png")}
                        style={{
                          width: '100%',
                          height: '100%',
                          resizeMode: 'contain'
                        }}
                      />
                      <View 
                        style={{
                          width: scale(28),
                          height: scale(28),
                          borderRadius: scale(14),
                          borderWidth: scale(1.5),
                          borderColor: '#FFD700',
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: 'transparent',
                          position: 'absolute',
                          bottom: scale(-20),
                          right: scale(-8)
                        }}
                      >
                        <Text
                          style={{ 
                            color: '#FFFFFF',
                            fontSize: moderateScale(14),
                            fontFamily: 'F1Regular900'
                          }}
                        >
                          1
                        </Text>
                      </View>
                    </View>
                    <Text
                      style={{ 
                        color: '#FFFFFF',
                        fontSize: moderateScale(12),
                        fontFamily: 'F1Regular700',
                        marginTop: scale(16)
                      }}
                    >
                      1:30.067
                    </Text>
                  </View>

                  {/* 2nd Place */}
                  <View style={{ alignItems: 'center', width: '30%', marginTop: -scale(8) }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: scale(8) }}>
                      <Text
                        style={{ 
                          color: '#FFFFFF',
                          fontSize: moderateScale(12),
                          fontFamily: 'F1Regular700',
                          marginRight: scale(4)
                        }}
                      >
                        Sergio Perez
                      </Text>
                      <Image
                        source={require("@/assets/images/netherlands-flag.png")}
                        style={{
                          width: scale(16),
                          height: scale(10)
                        }}
                      />
                    </View>
                    <Text
                      style={{ 
                        color: '#3671C6',
                        fontSize: moderateScale(10),
                        fontFamily: 'F1Regular400',
                        marginBottom: scale(8)
                      }}
                    >
                      Red Bull Racing
                    </Text>
                    <View style={{ 
                      position: 'relative', 
                      marginBottom: scale(8),
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: scale(80),
                      height: scale(60),
                      backgroundColor: '#3671C6'
                    }}>
                      <Image
                        source={require("@/assets/images/leclerc.png")}
                        style={{
                          width: '100%',
                          height: '100%',
                          resizeMode: 'contain'
                        }}
                      />
                      <View 
                        style={{
                          width: scale(28),
                          height: scale(28),
                          borderRadius: scale(14),
                          borderWidth: scale(1.5),
                          borderColor: '#C0C0C0',
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: 'transparent',
                          position: 'absolute',
                          bottom: scale(-18),
                          right: scale(-8)
                        }}
                      >
                        <Text
                          style={{ 
                            color: '#FFFFFF',
                            fontSize: moderateScale(14),
                            fontFamily: 'F1Regular900'
                          }}
                        >
                          2
                        </Text>
                      </View>
                    </View>
                    <Text
                      style={{ 
                        color: '#FFFFFF',
                        fontSize: moderateScale(12),
                        fontFamily: 'F1Regular700',
                        marginTop: scale(16)
                      }}
                    >
                      +12.535
                    </Text>
                  </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ alignItems: 'center', width: '30%', height: scale(4), backgroundColor: '#CD7F32' }} />
                  <View style={{ alignItems: 'center', width: '30%', height: scale(8), backgroundColor: '#FFD700' }} />
                  <View style={{ alignItems: 'center', width: '30%', height: scale(6), backgroundColor: '#C0C0C0' }} />
                </View>
              </View>
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default PreviousEvent;

