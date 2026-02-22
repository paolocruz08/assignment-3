import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Rewards() {
  const [isCashOpen, setIsCashOpen] = useState(false);
  const [isGiftOpen, setIsGiftOpen] = useState(false);
  const [isHogSlotsOpen, setIsHogSlotsOpen] = useState(false);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <View style={styles.points}>
          <Text style={styles.coinText}>5,986 🪙</Text>
        </View>
        <Text style={styles.rewardsTitle}>Rewards</Text>
        <Text style={styles.info}>Info</Text>
      </View>

      <View style={styles.redeemBar}>
        <View style={styles.redeemInfo}>
          <Text style={styles.redeemText1}>Yay! You can redeem</Text>
          <Text style={styles.redeemText2}>Up to CA$25</Text>
          <View style={styles.nextRewardRow}>
            <View style={styles.pointsBadge}>
              <Text style={styles.pointsBadgeText}>514 🪙</Text>
            </View>
            <Text style={styles.nextRewardText}>to the next reward: CA$40</Text>
          </View>
        </View>
        <Image
          source={require("@/assets/images/porky.png")}
          style={styles.porky}
        />
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.section}>
          <Pressable
            style={styles.sectionHeader}
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
            <View style={styles.itemList}>
              <View style={styles.redemptionItem}>
                <FontAwesome5 name="paypal" size={24} color="#003087" />
                <Text style={styles.redemptionLabel}>PayPal</Text>
              </View>
              <View style={styles.redemptionItem}>
                <FontAwesome5 name="cc-visa" size={24} color="black" />
                <Text style={styles.redemptionLabel}>
                  Visa* Prepaid Card CAD Cash Equivalent
                </Text>
              </View>
            </View>
          )}
        </View>

        <View style={styles.section}>
          <Pressable
            style={styles.sectionHeader}
            onPress={() => setIsGiftOpen(!isGiftOpen)}
          >
            <Text style={styles.sectionTitle}>Gift Card Redemptions</Text>
            <Ionicons
              name={isGiftOpen ? "chevron-up" : "chevron-down"}
              size={24}
              color="white"
            />
          </Pressable>
          {isGiftOpen && (
            <View style={styles.itemList}>
              <View style={styles.redemptionItem}>
                <FontAwesome5 name="amazon" size={24} color="#FF9900" />
                <Text style={styles.redemptionLabel}>Amazon.ca Gift Card</Text>
              </View>
              <View style={styles.redemptionItem}>
                <FontAwesome5 name="shopping-bag" size={24} color="#EF3B24" />
                <Text style={styles.redemptionLabel}>
                  DoorDash Canada Gift Card
                </Text>
              </View>
              <View style={styles.redemptionItem}>
                <FontAwesome5 name="utensils" size={24} color="#06C167" />
                <Text style={styles.redemptionLabel}>
                  Uber Eats Canada Gift Card
                </Text>
              </View>
              <View style={styles.redemptionItem}>
                <FontAwesome5 name="store" size={24} color="#0071CE" />
                <Text style={styles.redemptionLabel}>
                  Walmart Canada Gift Card
                </Text>
              </View>
              <Text style={styles.viewPast}>View Past Redemptions</Text>
            </View>
          )}
        </View>

        <View style={styles.section}>
          <Pressable
            style={styles.sectionHeader}
            onPress={() => setIsHogSlotsOpen(!isHogSlotsOpen)}
          >
            <Text style={styles.sectionTitle}>Hog Slots</Text>
            <Ionicons
              name={isHogSlotsOpen ? "chevron-up" : "chevron-down"}
              size={24}
              color="white"
            />
          </Pressable>
          {isHogSlotsOpen && (
            <View>
              <Image
                source={require("@/assets/images/slots.png")}
                style={styles.slots}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#3C6FE6",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: "#3C6FE6",
  },

  points: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "rgba(255,255,255,0.25)",
  },

  coinText: {
    color: "white",
    fontWeight: "600",
  },

  rewardsTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },

  info: {
    fontSize: 16,
    color: "white",
    textDecorationLine: "underline",
  },

  redeemBar: {
    flexDirection: "row",
    backgroundColor: "#0096FF",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 15,
  },

  redeemInfo: {
    flex: 1,
    gap: 6,
  },

  redeemText1: {
    color: "white",
    fontSize: 16,
  },

  redeemText2: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },

  nextRewardRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  pointsBadge: {
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },

  pointsBadgeText: {
    color: "white",
    fontWeight: "600",
    fontSize: 13,
  },

  nextRewardText: {
    color: "white",
    fontSize: 13,
  },

  porky: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },

  scroll: {
    flex: 1,
  },

  scrollContent: {
    paddingBottom: 30,
    backgroundColor: "white",
  },

  section: {
    marginBottom: 2,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 14,
    backgroundColor: "#3C6FE6",
    marginBottom: 8,
  },

  sectionTitle: {
    height: 44,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 12,
  },

  itemList: {
    backgroundColor: "f0f0f0",
    gap: 8,
    paddingHorizontal: 12,
    paddingBottom: 12,
  },

  redemptionItem: {
    flexDirection: "row",
    height: 80,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 12,
    gap: 14,
    borderWidth: 1,
    borderColor: "lightgray",
  },

  redemptionLabel: {
    flex: 1,
    fontSize: 15,
    color: "#222",
    fontWeight: "500",
  },

  viewPast: {
    textAlign: "center",
    color: "#3C6FE6",
    fontSize: 15,
    textDecorationLine: "underline",
    marginTop: 16,
    marginBottom: 8,
  },

  slots: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
});
