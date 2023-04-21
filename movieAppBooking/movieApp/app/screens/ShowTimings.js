import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity,ScrollView } from "react-native";
import {FormatDate} from '../utils/dateFormatter'
const ShowTimings = ({ navigation, route }) => {
    const { movie } = route.params;
    const timings = ["10:00 AM", "12:30 PM", "3:00 PM", "11:30 PM"];
    
 const today = new Date();
 const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
 const nextDay = new Date(today.getTime() + 48 * 60 * 60 * 1000);
 const nextDay1 = new Date(today.getTime() + 72 * 60 * 60 * 1000);
 const nextDay2 = new Date(today.getTime() + 96 * 60 * 60 * 1000);
 const nextDay3 = new Date(today.getTime() + 120 * 60 * 60 * 1000);
 const nextDay4 = new Date(today.getTime() + 144 * 60 * 60 * 1000);




  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginVertical: 20 }}>
        <Text style={{ fontWeight: "bold", fontSize: 24 }}>Back</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 30 }}>Show Timing</Text>
      <Text style={styles.heading}>Today</Text>
      <View style={styles.main}>
        {timings.map((timing) => (
          <TouchableOpacity
            style={styles.timingContainer}
            onPress={() =>
              navigation.navigate("SeatSelectionScreen", {
                movie: movie,
                date: today,
                timing: timing,
              })
            }
          >
            <Text key={timing} style={styles.timing}>
              {timing}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.heading}>Tomorrow</Text>
      <View style={styles.main}>
        {timings.map((timing) => (
          <TouchableOpacity
            style={styles.timingContainer}
            onPress={() =>
              navigation.navigate("SeatSelectionScreen", {
                movie: movie,
                date: tomorrow,
                timing: timing,
              })
            }
          >
            <Text key={timing} style={styles.timing}>
              {timing}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.heading}>{FormatDate(nextDay)}</Text>
      <View style={styles.main}>
        {timings.map((timing) => (
          <TouchableOpacity
            style={styles.timingContainer}
            onPress={() =>
              navigation.navigate("SeatSelectionScreen", {
                movie: movie,
                date: nextDay,
                timing: timing,
              })
            }
          >
            <Text key={timing} style={styles.timing}>
              {timing}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.heading}>{FormatDate(nextDay1)}</Text>
      <View style={styles.main}>
        {timings.map((timing) => (
          <TouchableOpacity
            style={styles.timingContainer}
            onPress={() =>
              navigation.navigate("SeatSelectionScreen", {
                movie: movie,
                date: nextDay,
                timing: timing,
              })
            }
          >
            <Text key={timing} style={styles.timing}>
              {timing}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.heading}>{FormatDate(nextDay2)}</Text>
      <View style={styles.main}>
        {timings.map((timing) => (
          <TouchableOpacity
            style={styles.timingContainer}
            onPress={() =>
              navigation.navigate("SeatSelectionScreen", {
                movie: movie,
                date: nextDay,
                timing: timing,
              })
            }
          >
            <Text key={timing} style={styles.timing}>
              {timing}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.heading}>{FormatDate(nextDay3)}</Text>
      <View style={styles.main}>
        {timings.map((timing) => (
          <TouchableOpacity
            style={styles.timingContainer}
            onPress={() =>
              navigation.navigate("SeatSelectionScreen", {
                movie: movie,
                date: nextDay,
                timing: timing,
              })
            }
          >
            <Text key={timing} style={styles.timing}>
              {timing}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.heading}>{FormatDate(nextDay4)}</Text>
      <View style={styles.main}>
        {timings.map((timing) => (
          <TouchableOpacity
            style={styles.timingContainer}
            onPress={() =>
              navigation.navigate("SeatSelectionScreen", {
                movie: movie,
                date: nextDay,
                timing: timing,
              })
            }
          >
            <Text key={timing} style={styles.timing}>
              {timing}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{marginTop:200}}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    main:{ flexDirection: "row", justifyContent: "space-between",  },
  container: {
    flex: 1,
    paddingTop: Platform.OS == "android" ? 15 : "15%",
    paddingHorizontal: "5%",

    
  },
  section: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
      fontWeight: "bold",
    marginVertical:15
  },
  timing: {
    fontSize: 16,
    color: "#fff",
  },
  timingContainer: {
    width: 80,
    height: 40,
    justifyContent: "center",
    backgroundColor: "orange",
    alignItems: "center",
    borderRadius: 5,
  },
});

export default ShowTimings;
