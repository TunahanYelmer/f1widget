import { View, Text, Image } from "react-native";
import React, { useState, useEffect } from "react";
import "@/global.css";
import { nextEventStyles } from "./styles/components/NextEvent.styles";
import TagHeuerWatch from "@/components/TagHeuerWatch";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface SessionInfo {
  fp1: string;
  fp2: string;
  fp3: string;
  qualifying: string;
  race: string;
}

interface RaceInfo {
  circuitName: string;
  grandPrixName: string;
  flagImage: any;
  trackMap: any;
  sessions: SessionInfo;
}

const F1NextEvent = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const nextRaceInfo: RaceInfo = {
    circuitName: "Suzuka Circuit",
    grandPrixName: "Japanese Grand Prix",
    flagImage: require("@/assets/images/bahrain-flag.png"),
    trackMap: require("@/assets/images/bahrain-carbon.png"),
    sessions: {
      fp1: "2025-04-19T17:30:00Z",
      fp2: "2025-04-19T21:00:00Z",
      fp3: "2025-04-20T16:30:00Z",
      qualifying: "2024-04-20T20:00:00Z",
      race: "2025-04-21T20:00:00Z"
    }
  };

  useEffect(() => {
    const calculateTimeLeft = (targetDate: string) => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const distance = target - now;

      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(nextRaceInfo.sessions.race));
    }, 1000);

    return () => clearInterval(timer);
  }, [nextRaceInfo.sessions.race]);

  const formatSessionName = (type: keyof SessionInfo): string => ({
    fp1: 'FP1',
    fp2: 'FP2',
    fp3: 'FP3',
    qualifying: 'QUAL',
    race: 'RACE'
  }[type]);

  const formatSessionTime = (timeString: string): string => {
    const sessionDate = new Date(timeString);
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    return `${days[sessionDate.getDay()]} ${sessionDate.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit'
    })}`;
  };

  const renderTimeBlock = (label: string, value: number) => {
    const shortLabel = {
      hours: 'HRS',
      minutes: 'MIN',
      seconds: 'SEC'
    }[label] || label;

    return (
      <View key={label} style={nextEventStyles.smallTimeBlock}>
        <Text 
          style={nextEventStyles.smallTimeValue}
          numberOfLines={1}
          adjustsFontSizeToFit
        >
          {value.toString().padStart(2, '0')}
        </Text>
        <Text 
          style={nextEventStyles.smallTimeLabel}
          numberOfLines={1}
          adjustsFontSizeToFit
        >
          {shortLabel}
        </Text>
      </View>
    );
  };

  const renderSessionRow = ([type, time]: [string, string]) => (
    <View key={type} style={nextEventStyles.sessionRow}>
      <Text 
        style={nextEventStyles.sessionName} 
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {formatSessionName(type as keyof SessionInfo)}
      </Text>
      <Text 
        style={nextEventStyles.sessionTime}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {formatSessionTime(time)}
      </Text>
    </View>
  );

  return (
    <View style={nextEventStyles.container}>
      <View style={nextEventStyles.header}>
        <View style={nextEventStyles.headerLeft}>
          <View style={nextEventStyles.headerInfo}>
            <Text 
              style={nextEventStyles.circuitName} 
              numberOfLines={1}
              adjustsFontSizeToFit
            >
              {nextRaceInfo.circuitName}
            </Text>
            <Text 
              style={nextEventStyles.grandPrixName} 
              numberOfLines={1}
              adjustsFontSizeToFit
            >
              {nextRaceInfo.grandPrixName}
            </Text>
          </View>
          <Image
            source={nextRaceInfo.flagImage}
            style={nextEventStyles.flagImage}
          />
        </View>
        <View style={nextEventStyles.eventTypeBadge}>
          <Text 
            style={nextEventStyles.eventTypeText}
            numberOfLines={1}
            adjustsFontSizeToFit
          >
            Round
          </Text>
          <Text style={nextEventStyles.eventTypeText} className="p-0.5">8</Text>
        </View>
      </View>

      <View style={nextEventStyles.content}>
        <View style={nextEventStyles.mainSection}>
          <View style={nextEventStyles.countdownSection}>
            <View style={nextEventStyles.countdownContent}>
              <View style={nextEventStyles.daysBlock}>
                <Text 
                  style={nextEventStyles.daysValue}
                  numberOfLines={1}
                  adjustsFontSizeToFit
                >
                  {timeLeft.days.toString().padStart(2, '0')}
                </Text>
                <Text 
                  style={nextEventStyles.daysLabel}
                  numberOfLines={1}
                  adjustsFontSizeToFit
                >
                  Days
                </Text>
              </View>
              
              <View style={nextEventStyles.smallUnitsContainer}>
                {Object.entries(timeLeft)
                  .filter(([label]) => label !== 'days')
                  .map(([label, value]) => renderTimeBlock(label, value))}
              </View>
            </View>
          </View>

          <View style={nextEventStyles.trackMapContainer}>
            <Image
              source={nextRaceInfo.trackMap}
              style={nextEventStyles.trackMap}
            />
          </View>
          <View className="items-center justify-center">
            <TagHeuerWatch size={80} />
          </View>
        </View>

        <View style={nextEventStyles.sessionsContainer}>
          {Object.entries(nextRaceInfo.sessions).map(renderSessionRow)}
        </View>
      </View>
    </View>
  );
};

export default F1NextEvent;
