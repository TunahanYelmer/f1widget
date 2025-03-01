import { View, Text, Image, ScrollView, Animated, Pressable } from "react-native";
import { scale, moderateScale } from "react-native-size-matters";
import React, { useRef, useEffect } from "react";
import "@/global.css";

// Mock data - replace with actual API data later
const constructorStandings = [
  {
    position: 1,
    team: "Red Bull Racing",
    points: 87,
    drivers: ["1", "11"],
    logo: require("@/assets/images/icon.png"),
    color: "#3671C6",
  },
  {
    position: 2,
    team: "Ferrari",
    points: 49,
    drivers: ["16", "55"],
    logo: require("@/assets/images/adaptive-icon.png"),
    color: "#F91536",
  },
  {
    position: 3,
    team: "McLaren",
    points: 38,
    drivers: ["4", "81"],
    logo: require("@/assets/images/splash-icon.png"),
    color: "#FF8000",
  },
  {
    position: 4,
    team: "Mercedes",
    points: 35,
    drivers: ["44", "63"],
    logo: require("@/assets/images/icon.png"),
    color: "#27F4D2",
  },
  {
    position: 5,
    team: "Aston Martin",
    points: 33,
    drivers: ["14", "18"],
    logo: require("@/assets/images/icon.png"),
    color: "#358C75",
  },
  {
    position: 6,
    team: "Alpine",
    points: 8,
    drivers: ["10", "31"],
    logo: require("@/assets/images/icon.png"),
    color: "#FF87BC",
  },
  {
    position: 7,
    team: "Williams",
    points: 7,
    drivers: ["2", "23"],
    logo: require("@/assets/images/icon.png"),
    color: "#37BEDD",
  },
  {
    position: 8,
    team: "Visa Cash App RB",
    points: 6,
    drivers: ["3", "22"],
    logo: require("@/assets/images/icon.png"),
    color: "#5E8FAA",
  },
  {
    position: 9,
    team: "Haas F1 Team",
    points: 3,
    drivers: ["20", "27"],
    logo: require("@/assets/images/icon.png"),
    color: "#B6BABD",
  },
  {
    position: 10,
    team: "Kick Sauber",
    points: 0,
    drivers: ["77", "24"],
    logo: require("@/assets/images/icon.png"),
    color: "#52E252",
  }
];

const PositionIndicator = ({ position }: { position: number }) => {
  return (
    <View 
      style={{ 
        backgroundColor: 'transparent',
        width: scale(32),
        height: scale(32),
        borderRadius: scale(6),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: scale(8),
        borderWidth: 1.5,
        borderColor: position === 1 ? '#FFD700' : position === 2 ? '#C0C0C0' : position === 3 ? '#CD7F32' : '#333333'
      }}
    >
      <Text
        style={{ 
          fontSize: moderateScale(14),
          fontFamily: 'F1Regular900',
          color: '#FFFFFF'
        }}
      >
        {position}
      </Text>
    </View>
  );
};

const PointsProgressBar = ({ points, maxPoints, color }: { points: number, maxPoints: number, color: string }) => {
  const width = (points / maxPoints) * 100;
  
  return (
    <View className="w-24 h-1.5 bg-gray-700 rounded-full overflow-hidden">
      <Animated.View
        className="h-full rounded-full"
        style={{
          width: `${width}%`,
          backgroundColor: color,
        }}
      />
    </View>
  );
};

const ConstructorsChampionship = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const maxPoints = Math.max(...constructorStandings.map(c => c.points));

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
            Constructor Standings
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
            4
          </Text>
        </View>
      </View>

      <ScrollView 
        style={{ 
          height: scale(166), // Exact height for 3 items: (8 padding * 2) + (3 * (48 item height + 8 margin))
          backgroundColor: '#1A1A1A'
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: scale(8) }}
      >
        {constructorStandings.map((constructor, index) => (
          <Pressable 
            key={index}
            style={({ pressed }) => ({
              backgroundColor: pressed ? '#222222' : '#1A1A1A',
              marginBottom: index === constructorStandings.length - 1 ? 0 : scale(8),
              borderRadius: scale(8),
              overflow: 'hidden',
              height: scale(48)
            })}
          >
            <View 
              style={{
                flexDirection: 'row',
                padding: scale(8),
                borderLeftWidth: scale(3),
                borderLeftColor: constructor.color,
              }}
            >
              <PositionIndicator position={constructor.position} />
              
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <View 
                  style={{
                    backgroundColor: '#FFFFFF',
                    padding: scale(4),
                    borderRadius: scale(8),
                    marginRight: scale(8)
                  }}
                >
                  <Image
                    source={constructor.logo}
                    style={{
                      width: scale(28),
                      height: scale(28),
                      borderRadius: scale(6)
                    }}
                  />
                </View>

                <View style={{ flex: 1 }}>
                  <Text
                    style={{ 
                      color: '#FFFFFF',
                      fontSize: moderateScale(13),
                      fontFamily: 'F1Regular700',
                      marginBottom: scale(2)
                    }}
                  >
                    {constructor.team}
                  </Text>

                  <View style={{ flexDirection: 'row', gap: scale(2) }}>
                    {constructor.drivers.map((number, idx) => (
                      <View 
                        key={idx}
                        style={{ 
                          backgroundColor: constructor.color,
                          paddingHorizontal: scale(4),
                          paddingVertical: scale(1),
                          borderRadius: scale(3),
                          opacity: 0.8
                        }}
                      >
                        <Text
                          style={{ 
                            color: '#FFFFFF',
                            fontSize: moderateScale(9),
                            fontFamily: 'F1Regular700'
                          }}
                        >
                          #{number}
                        </Text>
                      </View>
                    ))}
                  </View>
                </View>

                <View style={{ alignItems: 'flex-end' }}>
                  <Text
                    style={{ 
                      color: '#FFFFFF',
                      fontSize: moderateScale(16),
                      fontFamily: 'F1Regular900'
                    }}
                  >
                    {constructor.points}
                  </Text>
                  <Text
                    style={{ 
                      color: '#666666',
                      fontSize: moderateScale(9),
                      fontFamily: 'F1Regular400'
                    }}
                  >
                    PTS {index > 0 && `(-${constructorStandings[0].points - constructor.points})`}
                  </Text>
                </View>
              </View>
            </View>

            <View 
              style={{
                height: scale(2),
                backgroundColor: '#333333',
                width: '100%'
              }}
            >
              <View 
                style={{
                  height: '100%',
                  width: `${(constructor.points / maxPoints) * 100}%`,
                  backgroundColor: constructor.color,
                  opacity: 0.8
                }}
              />
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default ConstructorsChampionship;
