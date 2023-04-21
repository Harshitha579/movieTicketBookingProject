import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const faqs = [
  {
    question:"How does the online Streaming works?",
    answer: "Book the tickets for the movie of your choice in your prefered area.",
  },
  {
    question: "Can I cancel my ticket Stream transaction and get a refund?",
    answer:
      "We do not allow cancellation of the movie you have bought/rented. Any purchase made for ticket stream cannot be refunded.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, as well as PayPal and Apple Pay.",
  },
  {
    question: "Is my personal information secure?",
    answer: "Yes, we take the security of your personal information seriously and use encryption to protect it.",
  },
  {
    question: "How can I contact customer service?",
    answer: "You can contact customer service by phone, email, or through our website's contact form.",
  },
  {
    question: "Any Benefits?",
    answer: 'Exclusive offers & discounts on bookings on select cinemas',
  },
];

const FaqScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {faqs.map((faq, index) => (
          <View key={index} style={styles.faqContainer}>
            <Text style={styles.question}>{faq.question}</Text>
            <Text style={styles.answer}>{faq.answer}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  faqContainer: {
    marginBottom: 16,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  answer: {
    fontSize: 16,
    color: "gray",
  },
});

export default FaqScreen;
