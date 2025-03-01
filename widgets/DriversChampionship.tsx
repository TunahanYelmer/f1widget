import { View, Text, Image, ScrollView, Animated, Pressable } from "react-native";
import { scale, moderateScale } from "react-native-size-matters";
import React, { useRef, useEffect } from "react";
import "@/global.css";

// Mock data - replace with actual API data later
const driverStandings = [
  {
    position: 1,
    driver: "Max Verstappen",
    number: "1",
    team: "Red Bull Racing",
    points: 51,
    photo: require("@/assets/images/icon.png"),
    teamLogo: require("@/assets/images/icon.png"),
    color: "#3671C6", // Red Bull blue
  },
  {
    position: 2,
    driver: "Charles Leclerc",
    number: "16",
    team: "Ferrari",
    points: 47,
    photo: require("@/assets/images/leclerc.png"),
    teamLogo: require("@/assets/images/adaptive-icon.png"),
    color: "#F91536", // Ferrari red
  },
  {
    position: 3,
    driver: "Sergio Perez",
    number: "11",
    team: "Red Bull Racing",
    points: 36,
    photo: require("@/assets/images/splash-icon.png"),
    teamLogo: require("@/assets/images/icon.png"),
    color: "#3671C6",
  },
  {
    position: 4,
    driver: "Carlos Sainz",
    number: "55",
    team: "Ferrari",
    points: 33,
    photo: require("@/assets/images/icon.png"),
    teamLogo: require("@/assets/images/adaptive-icon.png"),
    color: "#F91536",
  },
  {
    position: 5,
    driver: "Lando Norris",
    number: "4",
    team: "McLaren",
    points: 31,
    photo: require("@/assets/images/icon.png"),
    teamLogo: require("@/assets/images/splash-icon.png"),
    color: "#FF8000",
  },
  {
    position: 6,
    driver: "Oscar Piastri",
    number: "81",
    team: "McLaren",
    points: 28,
    photo: require("@/assets/images/icon.png"),
    teamLogo: require("@/assets/images/splash-icon.png"),
    color: "#FF8000",
  },
  {
    position: 7,
    driver: "Lewis Hamilton",
    number: "44",
    team: "Mercedes",
    points: 22,
    photo: require("@/assets/images/icon.png"),
    teamLogo: require("@/assets/images/icon.png"),
    color: "#27F4D2",
  },
  {
    position: 8,
    driver: "George Russell",
    number: "63",
    team: "Mercedes",
    points: 20,
    photo: require("@/assets/images/icon.png"),
    teamLogo: require("@/assets/images/icon.png"),
    color: "#27F4D2",
  },
  {
    position: 9,
    driver: "Fernando Alonso",
    number: "14",
    team: "Aston Martin",
    points: 16,
    photo: require("@/assets/images/icon.png"),
    teamLogo: require("@/assets/images/icon.png"),
    color: "#358C75",
  },
  {
    position: 10,
    driver: "Lance Stroll",
    number: "18",
    team: "Aston Martin",
    points: 9,
    photo: require("@/assets/images/icon.png"),
    teamLogo: require("@/assets/images/icon.png"),
    color: "#358C75",
  },
  {
    position: 11,
    driver: "Yuki Tsunoda",
    number: "22",
    team: "Visa Cash App RB",
    points: 6,
    photo: require("@/assets/images/icon.png"),
    teamLogo: require("@/assets/images/icon.png"),
    color: "#5E8FAA",
  },
  {
    position: 12,
    driver: "Alexander Albon",
    number: "23",
    team: "Williams",
    points: 4,
    photo: require("@/assets/images/icon.png"),
    teamLogo: require("@/assets/images/icon.png"),
    color: "#37BEDD",
  },
  {
    position: 13,
    driver: "Nico Hulkenberg",
    number: "27",
    team: "Haas F1 Team",
    points: 3,
    photo: require("@/assets/images/icon.png"),
    teamLogo: require("@/assets/images/icon.png"),
    color: "#B6BABD",
  },
  {
    position: 14,
    driver: "Kevin Magnussen",
    number: "20",
    team: "Haas F1 Team",
    points: 1,
    photo: require("@/assets/images/icon.png"),
    teamLogo: require("@/assets/images/icon.png"),
    color: "#B6BABD",
  },
  {
    position: 15,
    driver: "Valtteri Bottas",
    number: "77",
    team: "Kick Sauber",
    points: 0,
    photo: require("@/assets/images/icon.png"),
    teamLogo: require("@/assets/images/icon.png"),
    color: "#52E252",
  },
  {
    position: 16,
    driver: "Zhou Guanyu",
    number: "24",
    team: "Kick Sauber",
    points: 0,
    photo: require("@/assets/images/icon.png"),
    teamLogo: require("@/assets/images/icon.png"),
    color: "#52E252",
  },
  {
    position: 17,
    driver: "Daniel Ricciardo",
    number: "3",
    team: "Visa Cash App RB",
    points: 0,
    photo: require("@/assets/images/icon.png"),
    teamLogo: require("@/assets/images/icon.png"),
    color: "#5E8FAA",
  },
  {
    position: 18,
    driver: "Pierre Gasly",
    number: "10",
    team: "Alpine",
    points: 0,
    photo: require("@/assets/images/icon.png"),
    teamLogo: require("@/assets/images/icon.png"),
    color: "#FF87BC",
  },
  {
    position: 19,
    driver: "Esteban Ocon",
    number: "31",
    team: "Alpine",
    points: 0,
    photo: require("@/assets/images/icon.png"),
    teamLogo: require("@/assets/images/icon.png"),
    color: "#FF87BC",
  },
  {
    position: 20,
    driver: "Logan Sargeant",
    number: "2",
    team: "Williams",
    points: 0,
    photo: require("@/assets/images/icon.png"),
    teamLogo: require("@/assets/images/icon.png"),
    color: "#37BEDD",
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
    <View 
      className="w-24 h-1.5 rounded-full overflow-hidden"
      style={{
        backgroundColor: '#333333',
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2
      }}
    >
      <Animated.View
        className="h-full rounded-full"
        style={{
          width: `${width}%`,
          backgroundColor: color,
          opacity: 0.9,
          shadowColor: color,
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.5,
          shadowRadius: 5,
          elevation: 3
        }}
      />
    </View>
  );
};

const DriversChampionship = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const maxPoints = Math.max(...driverStandings.map(d => d.points));

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
            Driver Standings
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
        {driverStandings.map((driver, index) => (
          <Pressable 
            key={index}
            style={({ pressed }) => ({
              backgroundColor: pressed ? '#222222' : '#1A1A1A',
              marginBottom: index === driverStandings.length - 1 ? 0 : scale(8),
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
                borderLeftColor: driver.color,
              }}
            >
              <PositionIndicator position={driver.position} />
              
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <View 
                  style={{
                    backgroundColor: '#FFFFFF',
                    padding: scale(2),
                    borderRadius: scale(8),
                    marginRight: scale(8)
                  }}
                >
                  <Image
                    source={driver.photo}
                    style={{
                      width: scale(32),
                      height: scale(32),
                      borderRadius: scale(6)
                    }}
                  />
                </View>

                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text
                      style={{ 
                        color: '#FFFFFF',
                        fontSize: moderateScale(13),
                        fontFamily: 'F1Regular700',
                        marginRight: scale(6)
                      }}
                    >
                      {driver.driver}
                    </Text>
                    <View 
                      style={{ 
                        backgroundColor: driver.color,
                        paddingHorizontal: scale(4),
                        paddingVertical: scale(1),
                        borderRadius: scale(3)
                      }}
                    >
                      <Text
                        style={{ 
                          color: '#FFFFFF',
                          fontSize: moderateScale(9),
                          fontFamily: 'F1Regular700'
                        }}
                      >
                        #{driver.number}
                      </Text>
                    </View>
                  </View>

                  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: scale(2) }}>
                    <Image
                      source={driver.teamLogo}
                      style={{
                        width: scale(12),
                        height: scale(12),
                        marginRight: scale(4),
                        opacity: 0.8
                      }}
                    />
                    <Text
                      style={{ 
                        color: '#666666',
                        fontSize: moderateScale(10),
                        fontFamily: 'F1Regular400'
                      }}
                    >
                      {driver.team}
                    </Text>
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
                    {driver.points}
                  </Text>
                  <Text
                    style={{ 
                      color: '#666666',
                      fontSize: moderateScale(9),
                      fontFamily: 'F1Regular400'
                    }}
                  >
                    PTS {index > 0 && `(-${driverStandings[0].points - driver.points})`}
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
                  width: `${(driver.points / maxPoints) * 100}%`,
                  backgroundColor: driver.color,
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

export default DriversChampionship;
