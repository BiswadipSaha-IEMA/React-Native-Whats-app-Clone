import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from 'react-native-vector-icons';


const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContent}>
        <Image
          source={require('../../../assets/profile.png')}
          style={styles.profileImage}
        />
        <View style={styles.descriptContent}>
          
          <Text style={styles.nameText}>John Doe</Text>
          <Text style={styles.descriptionText}>🏠 At Work</Text>
        </View>
        <Ionicons name="search" color="#000000" size={20} style={styles.searchIcon} />
        <Ionicons name="reorder-three-sharp" color="#000000" size={20} style={styles.threeDots} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 50,
    paddingHorizontal: 20,
    marginBottom:100
  },
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight:'700'
  },
  descriptionText:{
    marginLeft:10,
    // fontWeight:'500',
  },
  descriptContent:{
    flex:1,
    gap:2
  },
  searchIcon:{
    height:24
  },
  searchIcon:{
    marginRight:20
  },
  threeDots:{
    marginRight:20
  }
})

export default Header
