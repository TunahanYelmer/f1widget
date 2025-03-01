import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import "@/global.css";
import { containerStyles } from "./styles/components/Container.styles";
import { headerStyles } from "./styles/components/Header.styles";
import { driverCardStyles } from "./styles/components/DriverCard.styles";
import { positionBadgeStyles } from "./styles/components/PositionBadge.styles";
import { teamColorStyles } from "./styles/components/TeamColors.styles";

interface PreviousEventProps {
  mode?: 'race' | 'practice';
  eventType?: string;
}

const PreviousEvent: React.FC<PreviousEventProps> = ({ mode = 'race', eventType = 'RACE' }) => {
  const firstPlaceTime = "1:30.067";
  const secondPlaceTime = mode === 'race' ? "+12.535" : "1:30.602";
  const thirdPlaceTime = mode === 'race' ? "+20.866" : "1:31.933";

  return (
    <View style={containerStyles.container}>
      <View style={headerStyles.header}>
        <View className="flex-row items-center">
          <View>
            <Text style={headerStyles.circuitName}>Suzuka Circuit</Text>
            <Text style={headerStyles.grandPrixName}>Japanese Grand Prix</Text>
          </View>
          <View className="ml-2">
            <Image
              source={require("@/assets/images/netherlands-flag.png")}
              style={headerStyles.flagImage}
            />
          </View>
        </View>
        <View style={headerStyles.eventTypeBadge}>
          <Text style={headerStyles.eventTypeText}>{eventType}</Text>
        </View>
      </View>

      <View style={containerStyles.content}>
        <Pressable>
          <View className="p-1">
            <View className="flex-row justify-between items-start">
              <View className="flex-1">
                <View style={containerStyles.driversContainer}>
                  {/* 3rd Place */}
                  <View style={driverCardStyles.driverColumn}>
                    <View style={driverCardStyles.nameContainer}>
                      <Text style={driverCardStyles.firstName} numberOfLines={1} adjustsFontSizeToFit>
                        Carlos
                      </Text>
                      <View style={driverCardStyles.lastNameContainer}>
                        <Text style={driverCardStyles.lastName} numberOfLines={1} adjustsFontSizeToFit>
                          Sainz
                        </Text>
                        <Image
                          source={require("@/assets/images/netherlands-flag.png")}
                          style={driverCardStyles.driverFlag}
                        />
                      </View>
                    </View>
                    <Text style={[driverCardStyles.teamName, teamColorStyles.ferrariColor]} numberOfLines={1} adjustsFontSizeToFit>
                      Ferrari
                    </Text>
                    <View style={driverCardStyles.imageContainer}>
                      <Image
                        source={require("@/assets/images/leclerc.png")}
                        style={driverCardStyles.driverImage}
                        resizeMode="contain"
                      />
                    </View>
                    <View style={driverCardStyles.timeContainer}>
                      <Text style={[driverCardStyles.timeText, mode === 'race' && driverCardStyles.opacityReduced]}>
                        {mode === 'race' ? `+${thirdPlaceTime}` : thirdPlaceTime}
                      </Text>
                    </View>
                  </View>

                  {/* 1st Place */}
                  <View style={driverCardStyles.driverColumn}>
                    <View style={driverCardStyles.nameContainer}>
                      <Text style={driverCardStyles.firstName} numberOfLines={1} adjustsFontSizeToFit>
                        Max
                      </Text>
                      <View style={driverCardStyles.lastNameContainer}>
                        <Text style={driverCardStyles.lastName} numberOfLines={1} adjustsFontSizeToFit>
                          Verstappen
                        </Text>
                        <Image
                          source={require("@/assets/images/netherlands-flag.png")}
                          style={driverCardStyles.driverFlag}
                        />
                      </View>
                    </View>
                    <Text style={[driverCardStyles.teamName, teamColorStyles.redbullColor]} numberOfLines={1} adjustsFontSizeToFit>
                      Red Bull Racing
                    </Text>
                    <View style={driverCardStyles.imageContainer}>
                      <Image
                        source={require("@/assets/images/leclerc.png")}
                        style={driverCardStyles.driverImage}
                        resizeMode="contain"
                      />
                    </View>
                    <View style={driverCardStyles.timeContainer}>
                      <Text style={driverCardStyles.timeText}>
                        {firstPlaceTime}
                      </Text>
                    </View>
                  </View>

                  {/* 2nd Place */}
                  <View style={driverCardStyles.driverColumn}>
                    <View style={driverCardStyles.nameContainer}>
                      <Text style={driverCardStyles.firstName} numberOfLines={1} adjustsFontSizeToFit>
                        Sergio
                      </Text>
                      <View style={driverCardStyles.lastNameContainer}>
                        <Text style={driverCardStyles.lastName} numberOfLines={1} adjustsFontSizeToFit>
                          Perez
                        </Text>
                        <Image
                          source={require("@/assets/images/netherlands-flag.png")}
                          style={driverCardStyles.driverFlag}
                        />
                      </View>
                    </View>
                    <Text style={[driverCardStyles.teamName, teamColorStyles.redbullColor]} numberOfLines={1} adjustsFontSizeToFit>
                      Red Bull Racing
                    </Text>
                    <View style={driverCardStyles.imageContainer}>
                      <Image
                        source={require("@/assets/images/leclerc.png")}
                        style={driverCardStyles.driverImage}
                        resizeMode="contain"
                      />
                    </View>
                    <View style={driverCardStyles.timeContainer}>
                      <Text style={[driverCardStyles.timeText, mode === 'race' && driverCardStyles.opacityReduced]}>
                        {mode === 'race' ? `+${secondPlaceTime}` : secondPlaceTime}
                      </Text>
                    </View>
                  </View>
                </View>

                <View style={positionBadgeStyles.positionsContainer}>
                  <View style={positionBadgeStyles.positionColumn}>
                    <View style={[positionBadgeStyles.positionBadge, positionBadgeStyles.bronzeBorder]}>
                      <Text style={positionBadgeStyles.positionText}>P3</Text>
                    </View>
                  </View>
                  <View style={positionBadgeStyles.positionColumn}>
                    <View style={[positionBadgeStyles.positionBadge, positionBadgeStyles.goldBorder]}>
                      <Text style={positionBadgeStyles.positionText}>P1</Text>
                    </View>
                  </View>
                  <View style={positionBadgeStyles.positionColumn}>
                    <View style={[positionBadgeStyles.positionBadge, positionBadgeStyles.silverBorder]}>
                      <Text style={positionBadgeStyles.positionText}>P2</Text>
                    </View>
                  </View>
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