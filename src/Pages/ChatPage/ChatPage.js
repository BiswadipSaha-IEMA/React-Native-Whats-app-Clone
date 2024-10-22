import { View, SafeAreaView, ScrollView, StyleSheet, StatusBar, Text } from 'react-native';
import React from 'react';
import Header from '../../Components/Chat/Header';
import ChatBody from '../../Components/Chat/ChatBody';

const ChatPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#dddfe1" />
  
      <View style={styles.titleContainer}>
        <Text style={styles.pageTitle}>Chat Page</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header />
        <ChatBody />
      </ScrollView>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddfe1',
  },
  titleContainer: {
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  pageTitle: {
    marginTop:20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    width:'100%',
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    alignContent:'flex-start',
    paddingHorizontal: 20,
  },
  scrollContainer: {
    flexGrow: 1,
  },
});

export default ChatPage;
