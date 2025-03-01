import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import "@/global.css";
import TagHeuerWatch from "@/components/TagHeuerWatch";
import { nextEventStyles } from "./styles/components/NextEvent.styles";
import { commonStyles } from "./styles/common.styles";

const NextEvent = () => {
  // Race date (example: April 28, 2024 at 10:00)
  const raceDate = new Date(2024, 3, 28, 10, 0, 0);

  return (
    <View style={nextEventStyles.container}>
      <View style={nextEventStyles.header}>
        <View>
          <Text style={nextEventStyles.headerTitle}>Next Event</Text>
          <Text style={nextEventStyles.headerSubtitle}>2024 Season</Text>
        </View>
        <View style={nextEventStyles.roundBadge}>
          <Text style={nextEventStyles.roundText}>ROUND</Text>
          <Text style={nextEventStyles.roundNumber}>9</Text>
        </View>
      </View>

      <View style={nextEventStyles.content}>
        <Pressable
          style={({ pressed }) => [
            nextEventStyles.eventCard,
            pressed && nextEventStyles.eventCardPressed
          ]}
        >
          <View style={nextEventStyles.cardContent}>
            <View style={[commonStyles.row, { marginBottom: commonStyles.spacing.medium }]}>
              <View style={nextEventStyles.flagContainer}>
                <Image
                  source={require("@/assets/images/netherlands-flag.png")}
                  style={nextEventStyles.flagImage}
                />
              </View>

              <View style={nextEventStyles.circuitInfo}>
                <Text style={nextEventStyles.circuitName}>Spa-Francorchamps</Text>
                <Text style={nextEventStyles.dateText}>24-28 April</Text>
              </View>

              <View style={nextEventStyles.watchContainer}>
                <TagHeuerWatch size={60} />
              </View>
            </View>

            <View style={[commonStyles.row, { justifyContent: 'space-between' }]}>
              <View style={commonStyles.flex1}>
                {[
                  { session: 'FP1', time: 'Fri 10:00' },
                  { session: 'FP2', time: 'Fri 14:00' },
                  { session: 'FP3', time: 'Sat 11:00' },
                  { session: 'Qualy', time: 'Sat 15:00' },
                  { session: 'Race', time: 'Sun 10:00' }
                ].map((item, index, array) => (
                  <View 
                    key={item.session}
                    style={[
                      nextEventStyles.sessionContainer,
                      index === array.length - 1 && { marginBottom: 0 }
                    ]}
                  >
                    <Text style={nextEventStyles.sessionName}>{item.session}</Text>
                    <Text style={nextEventStyles.sessionTime}>{item.time}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default NextEvent;
