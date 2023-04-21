import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";

const TermsAndConditionsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
 
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>
        Introduction:
          By accessing and using the App, you agree to be bound by these Terms and Conditions. If you do not agree with
          these Terms and Conditions, you should not use the App.
        </Text>
        <Text style={styles.contentText}>
        App Services:
         The App provides an online platform for users to book movie tickets. The App only facilitates the booking of tickets
          and is not responsible for any issues or disputes related to the movie, such as changes in movie schedule or cancellation of
           the movie. 
        </Text>
        <Text style={styles.contentText}>
        User Account:
          To use the App, you must create an account by providing your personal details. You are solely responsible for maintaining the
           confidentiality of your account information and password. You agree to immediately notify us of any unauthorized use of your account 
           or any other breach of security.  
        </Text>
        <Text style={styles.contentText}>
        Ticket Booking:
        The App allows users to book movie tickets for the selected date and showtime. Users can choose their preferred seat and complete the
         booking process by making the payment. The booking is confirmed only when the payment is successful.
        </Text>
        <Text style={styles.contentText}>
        Payment:
          The App accepts payments via various payment methods such as debit/credit cards, net banking, e-wallets, etc. The user is responsible
           for providing accurate payment details, and any incorrect details provided may result in the cancellation of the booking.
        </Text>
        <Text style={styles.contentText}>
        Prohibited Use:
          Users are prohibited from using the App for any illegal or unauthorized purpose, including but not limited to violating intellectual property
          rights, transmitting viruses, or breaching another user's privacy.
        </Text>
        <Text style={styles.contentText}>
        Contact Us:
         If you have any questions or concerns about these Terms and Conditions, please contact us at [contact details].
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  contentContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
  },
  contentText: {
    marginBottom: 16,
  },
});

export default TermsAndConditionsScreen;
