import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {useState } from 'react';

export default function Rewards() {
  const router = useRouter();
  const [isCashOpen, setIsCashOpen] = useState(false);
  const [isGiftOpen, setIsGiftOpen] = useState(false);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.points}>
            <Text>5986</Text>
            <FontAwesome5 name="coins" size={18} color="black" />
          </View>
          <Text style={styles.rewardsTitle}>Rewards</Text>
          <Text style={styles.info}>Info</Text>
        </View>
        <View style={styles.redeemInfo}></View>
        <View style={styles.container}>
          <Text style={{ fontSize: 24 }}>Yay! You can redeem</Text>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.section}>
            <Pressable style={styles.sectionHeader}
              onPress={() => setIsCashOpen(!isCashOpen)}
            >
              <Text style={styles.sectionTitle}>Cash Redemptions</Text>
              <Ionicons 
                name={isCashOpen ? "chevron-up" : "chevron-down"} 
                size={24} 
                color="white" 
              />
            </Pressable>
            {isCashOpen && (
                <View>
                <FontAwesome5 name="paypal" size={24} color="#003087" />
                <FontAwesome5 name="cc-paypal" size={24} color="black" />
                <Text>Paypal</Text>
                </View>
            )}
            
        </View>
        <View style={styles.section}>
            <Pressable style={styles.sectionHeader}
              onPress={() => setIsGiftOpen(!isGiftOpen)}
            >
              <Text style={styles.sectionTitle}>Cash Redemptions</Text>
              <Ionicons 
                name={isCashOpen ? "chevron-up" : "chevron-down"} 
                size={24} 
                color="white" 
              />
            </Pressable>
            {isGiftOpen && (
                <View>
                <FontAwesome5 name="paypal" size={24} color="#003087" />
                <FontAwesome5 name="cc-paypal" size={24} color="black" />
                <Text>Paypal</Text>
                </View>
            )}
            
        </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#3C6FE6",
  },

  container: {
    flex: 1,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginTop: 50,
    borderBottomWidth: 2,
    borderColor: "white",
  },

  points: {
    flexDirection: "row",
    alignItems: "center",
    width: 60,
    height: 30,
    borderWidth: 1,
    borderRadius: 30,
    padding: 5,
    justifyContent: "space-around",
  },

  rewardsTitle: {
    fontSize: 35,
  },

  info: {
    fontSize: 20,
  },

  sectionHeader: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 12,
  width: "100%",
    borderColor: "white",
    borderTopWidth: 2,
    borderBottomWidth: 2,
},

sectionTitle: {
  color: "white",
  fontSize: 18,
},

});
