import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "react-native-vector-icons";

const ChatBody = () => {
  return (
    <View style={styles.chatBodyContainer}>
      <View style={styles.chatBodyHeadContainer}>
        <Text style={styles.chatBodyHeadName}>Chat</Text>
        <View style={styles.chatBodyHeadChatCount}>
          <Text style={styles.chatBodyHeadChatCountText}>34</Text>
        </View>
      </View>
      <View style={styles.chatBodyMenuContainer}>
        <Text style={[styles.chatBodyMenuItem, styles.chatBodyMenuItemHover]}>
          All
        </Text>
        <Text style={styles.chatBodyMenuItem}>Office</Text>
        <Text style={styles.chatBodyMenuItem}>Family</Text>
        <Text style={styles.chatBodyMenuItem}>Archive</Text>
      </View>
      <View style={styles.chatBodyMessagesContainer}>
        <View style={styles.pinnedTagContainer}>
          <Text style={styles.pinnedTag}>Pinned Chat</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.pinnedChatsButton}>
            <View style={styles.pinnedChats}>
              <View style={styles.pinnedProfileImageContainer}>
                <Image
                  source={require("../../../assets/profile.png")}
                  style={styles.pinnedProfile1}
                />
                <View style={styles.pinnedProfileOnline}></View>
              </View>
              <View style={styles.userChat}>
                <Text style={styles.pinnedChatsName}>Jhon 1</Text>
                <Text style={styles.pinnedChatsDesc}>
                  Hello World! Is This A Dummy Text?
                </Text>
              </View>
            </View>
            <View>
              <Text style={styles.pinnedChatsTimming}>2:43 AM</Text>
              <View style={styles.pinnedChatsCountDiv}>
                <Text style={styles.pinnedChatsCountDivText}>2</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.horizontalLine}></View>
          <TouchableOpacity style={styles.pinnedChatsButton}>
            <View style={styles.pinnedChats}>
              <View style={styles.pinnedProfileImageContainer}>
                <Image
                  source={require("../../../assets/profile.png")}
                  style={styles.pinnedProfile2}
                />
                <View style={styles.pinnedProfileOnline}></View>
              </View>
              <View style={styles.userChat}>
                <Text style={styles.pinnedChatsName}>Jhon 2</Text>
                <Text style={styles.pinnedChatsDesc}>
                  Hello World! Is This A Dummy Text?
                </Text>
              </View>
            </View>
            <View>
              <Text style={styles.pinnedChatsTimming}>2:43 AM</Text>
              <View style={styles.pinnedChatsCountDiv}>
                <Text style={styles.pinnedChatsCountDivText}>2</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.horizontalLine}></View>
          <TouchableOpacity style={styles.pinnedChatsButton}>
            <View style={styles.pinnedChats}>
              <View style={styles.pinnedProfileImageContainer}>
                <Image
                  source={require("../../../assets/profile.png")}
                  style={styles.pinnedProfile3}
                />
                <View style={styles.pinnedProfileOnline}></View>
              </View>
              <View style={styles.userChat}>
                <Text style={styles.pinnedChatsName}>Jhon 3</Text>
                <Text style={styles.pinnedChatsDesc}>
                  Hello World! Is This A Dummy Text?
                </Text>
              </View>
            </View>
            <View>
              <Text style={styles.pinnedChatsTimming}>2:43 AM</Text>
              <View style={styles.pinnedChatsCountDiv}>
                <Text style={styles.pinnedChatsCountDivText}>2</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.horizontalLine}></View>
        </View>
        <View style={styles.pinnedTagContainer}>
          <Text style={styles.pinnedTag}>Conversation</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.conversationChatPerson}>
            <View style={styles.userConversationChat}>
            <Image
              source={require('../../../assets/profile.png')}
              style={styles.conversationChatProfilePic}
            />
            <View>
            <Text style={styles.pinnedChatsName}>Jhon 1</Text>
            <View style={styles.viewedChat}>
            <Ionicons name="checkmark-outline" color="#000000" size={20} style={styles.threeDots} />
            <Text>
              Photo
            </Text>
                </View>
            </View>

            </View>
            <View>
              <Text style={styles.viewChatTimming}>2:43 AM</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.horizontalLine}></View>
          <TouchableOpacity style={styles.conversationChatPerson}>
            <View style={styles.userConversationChat}>
            <Image
              source={require('../../../assets/profile.png')}
              style={styles.conversationChatProfilePic}
            />
            <View>
            <Text style={styles.pinnedChatsName}>Jhon 1</Text>
            <View style={styles.viewedChat}>
            <Ionicons name="checkmark-done-outline" color="#0000ff" size={20} style={styles.threeDots} />
            <Text>
              Hello World!!!
            </Text>
                </View>
            </View>

            </View>
            <View>
              <Text style={styles.viewChatTimming}>2:43 AM</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.horizontalLine}></View>
          <TouchableOpacity style={styles.conversationChatPerson}>
            <View style={styles.userConversationChat}>
            <Image
              source={require('../../../assets/profile.png')}
              style={styles.conversationChatProfilePic}
            />
            <View>
            <Text style={styles.pinnedChatsName}>Jhon 1</Text>
            <View style={styles.viewedChat}>
            <Ionicons name="checkmark-done-outline" color="#000000" size={20} style={styles.threeDots} />
            <Text>
              Photo
            </Text>
                </View>
            </View>

            </View>
            <View>
              <Text style={styles.viewChatTimming}>2:43 AM</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.horizontalLine}></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatBodyHeadContainer: {
    flexDirection: "row",
    marginLeft: 25,
    gap: 10,
    alignItems: "center",
    marginBottom: 20,
    paddingTop:20
  },
  chatBodyHeadName: {
    fontSize: 25,
    fontWeight: "700",
  },
  chatBodyHeadChatCount: {
    backgroundColor: "#fff",
    padding: 3,
    borderRadius: 50,
  },
  chatBodyHeadChatCountText: {
    fontWeight: "300",
    fontSize: 12,
  },
  chatBodyContainerMain: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#e9e9ea",
    flex: 1,
  },
  chatBodyContainer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#e9e9ea",
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },
  chatBodyMenuContainer: {
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  chatBodyMenuItem: {
    fontWeight: "700",
    opacity: 0.2,
    fontSize: 15,
  },
  chatBodyMenuItemHover: {
    opacity: 1,
  },
  chatBodyMessagesContainer: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: 10,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  pinnedTagContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginLeft: 5,
  },
  pinnedTag: {
    color: "#a4a6a9",
    fontSize: 10,
    fontWeight: "700",
    marginLeft: 10,
    marginBottom: 10,
  },
  pinnedChats: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    gap: 10,
  },
  pinnedProfileImageContainer: {
    position: "relative",
  },
  pinnedProfileOnline: {
    position: "absolute",
    height: 15,
    width: 15,
    backgroundColor: "#00f000",
    borderRadius: 50,
    bottom: 5,
    right: 0,
  },
  pinnedProfile1: {
    height: 60,
    width: 60,
    borderRadius: 50,
    borderColor: "#0000ff",
    borderWidth: 2,
  },
  pinnedProfile2: {
    height: 60,
    width: 60,
    borderRadius: 50,
    borderColor: "#00f000",
    borderWidth: 2,
  },
  pinnedProfile3: {
    height: 60,
    width: 60,
    borderRadius: 50,
    borderColor: "#ff0000",
    borderWidth: 2,
  },
  pinnedChatsName: {
    fontSize: 15,
    fontWeight: "700",
  },
  pinnedChatsDesc: {
    fontSize: 10,
    color: "#808080",
    fontWeight: "500",
  },
  viewedChat: {
    fontSize: 10,
    color: "#808080",
    fontWeight: "500",
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    gap:5
  },
  userChat: {
    flex: 1,
    gap: 2,
  },

  horizontalLine: {
    borderBottomColor: "#e0e0e0",
    borderBottomWidth: 1.5,
    // marginRight:10,
    marginLeft: 80,
    marginRight: 10,
    marginTop: 12,
    marginBottom: 12,
  },
  pinnedChatsButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 10,
    alignItems: "center",
  },
  pinnedChatsTimming: {
    fontSize: 10,
    fontWeight: "700",
    color: "#dc3",
    marginBottom: 8,
  },
  pinnedChatsCountDiv: {
    backgroundColor: "#dc3",
    height: 20,
    width: 20,
    marginLeft: 20,
    borderRadius: 50,
    // flex:1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  pinnedChatsCountDivText: {
    color: "#fff",
    fontSize: 8,
  },
  chatBodyContainer: {
    flex: 1,
    backgroundColor: "#e9e9ea",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  conversationChatProfilePic:{
    height:60,
    width:60,
    marginLeft:10,
    borderRadius:50,
    borderWidth:2,
    borderColor:"#f0f0f0",
    padding:10,
    marginRight:10
  },
  userConversationChat:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    
  },
  conversationChatPerson:{
    flex:1,
    flexDirection:'row'
  },
  viewChatTimming:{
    fontSize: 10,
    fontWeight: "700",
    color: "#c6ccd4",
    marginBottom: 8,
    marginRight:10
  }

  
});

export default ChatBody;
