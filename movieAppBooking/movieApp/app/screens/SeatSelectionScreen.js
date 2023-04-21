import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Alert, Linking, ImageBackground, StatusBar } from 'react-native';
import { collection, addDoc, onSnapshot, doc,setDoc, updateDoc } from "firebase/firestore";
import { firebaseDB } from '../services/firebase';
import { FormatDate } from "../utils/dateFormatter";
import AsyncStorage from "@react-native-async-storage/async-storage";
const SeatSelection = ({ navigation, route }) => {
    const { movie, date, timing } = route.params;
    const [selectedSeats, setSelectedSeats] = useState([]);
    useEffect(() => {
        const docRef = collection(firebaseDB, "bookingData", movie.title, FormatDate(date),  );
        const getBookingData = onSnapshot(docRef, (querySnapshot) => {
            let bookingData = [];
            querySnapshot.forEach((item) => {
                bookingData.push({
                    id: item.id,
                    ...item.data(),
                });
            });
            let seats ;
            bookingData.forEach((item, index) => {

                let finSeats = item?.bookedSeats.filter((item) => {
                 
                  return item.timing == timing ;
                });
                  console.log(finSeats)
                if (finSeats.length !== 0) {
                 
                  seats = finSeats;
                }
              });
            setSelectedSeats(seats!== undefined ?seats:[] );
        });

        return () => getBookingData();
      
        
    }, []);
    

    const handleSeatPress = (seatNumber) => {
        // Check if seat is already selected
       
        if (selectedSeats.find((item) => item.seatNumber == seatNumber && item.isSelected)) {
          setSelectedSeats(
            selectedSeats.filter((seat) => seat.seatNumber !== seatNumber
            ),
          );
        } else {
          setSelectedSeats([...selectedSeats, { seatNumber, isSelected: true }]);
        }
    };
    const renderSeat = (seatNumber) => {
        const isSelected = selectedSeats?.find((item) => item.seatNumber == seatNumber && item.isSelected );
        const isBooked = selectedSeats?.find(
            (item) => {
          return  item.seatNumber == seatNumber && item.date == FormatDate(date) && item.timing == timing && item.isBooked}
        );
        return (
          <TouchableOpacity
            key={seatNumber}
            style={[styles.seat, isSelected ? styles.selectedSeat :{}, isBooked ? styles.bookedSeat:{}]}
            onPress={() => handleSeatPress(seatNumber)}
            disabled={isBooked? true:false}
          >
            <Text style={styles.seatNumber}>{seatNumber}</Text>
          </TouchableOpacity>
        );
    };
     

    const handlBooking = async () => {
         
         if (selectedSeats.length ==0) {
             Alert.alert('Please select atleast one seat')
             return
         } else {
           let userData = await AsyncStorage.getItem("userData");
             const email = JSON.parse(userData).email;
         
      
             let bookedSeats = selectedSeats.map((item) => {
                let seatNumber = item.seatNumber;
                 
               return { seatNumber, isBooked: true, date: FormatDate(date), timing: timing };
             });

             const setData = await setDoc(doc(firebaseDB, "bookingData", movie.title, FormatDate(date),timing), {
               title: movie.title,
               id: movie.id,
             bookedSeats,
              
             });
             navigation.navigate("AfterBooking", {
                      stripeLink:`https://buy.stripe.com/test_aEUdTOdekeKS2pafZ0?prefilled_email=${email}&client_reference_id=${email}`
                  });
 
           //  Linking.openURL("https://buy.stripe.com/test_aEUdTOdekeKS2pafZ0?prefilled_email={email}");
           //  const data = await setDoc(collection(firebaseDB, "bookingData"), {
           //      title: movie.title,
           //      id: movie.id,
           //      selectedSeats: selectedSeats,
           //      date: new Date().toDateString()

           //  });
           //  Alert.alert("Seat Booked  Succesfully")
           //  navigation.navigate('HomeScreen')
           //  console.log("Document written with ID: ", docRef.id);
         }
     };
     
    return (
        <View style={styles.container}>
        <ImageBackground
                source={{ uri: "https://www.nyfa.edu/wp-content/uploads/2022/11/THEATERF1ONRF-00006562-0011.jpg" }}
                
          style={{ width: "100%", height: "100%", paddingTop: 30 }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ left: 15, margin: 20 }}>
            <Text style={{ fontWeight: "bold", fontSize: 24, color: "#fff" }}>Back</Text>
          </TouchableOpacity>
          <View style={styles.screen}>
            <Text style={styles.screenText}>Choose Seats</Text>
          </View>
          <View style={styles.seatContainer}>
            <View style={styles.row}>
              {renderSeat(1)}
              {renderSeat(2)}
              <View style={styles.spacer} />
              {renderSeat(3)}
              {renderSeat(4)}
            </View>
            <View style={styles.row}>
              {renderSeat(5)}
              {renderSeat(6)}
              <View style={styles.spacer} />
              {renderSeat(7)}
              {renderSeat(8)}
            </View>
            <View style={styles.row}>
              {renderSeat(9)}
              {renderSeat(10)}
              <View style={styles.spacer} />
              {renderSeat(11)}
              {renderSeat(12)}
            </View>
            <View style={styles.row}>
              {renderSeat(13)}
              {renderSeat(14)}
              <View style={styles.spacer} />
              {renderSeat(15)}
              {renderSeat(16)}
            </View>
            <View style={styles.row}>
              {renderSeat(17)}
              {renderSeat(18)}
              <View style={styles.spacer} />
              {renderSeat(19)}
              {renderSeat(20)}
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => handlBooking()}>
            <Text style={styles.buttonText}>Book Seats</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    screen: {
        height: 50,
        alignSelf:'center'
    },
    screenText: {
        fontSize: 24,
        fontWeight: 'bold',
        color:"#fff"
    },
    seatContainer: {
        flexDirection: 'column',
        alignSelf: 'center'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    seat: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    selectedSeat: {
        backgroundColor: '#F9A825',
    },
    bookedSeat: {
        backgroundColor: 'red',
    },
    seatNumber: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    spacer: {
        width: 80,
    },
    button: {

        alignSelf: 'center',
        width: 180,
        height: 50,
        backgroundColor: '#F9A825',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        position: "absolute",
        bottom:"10%"
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
});


export default SeatSelection;

