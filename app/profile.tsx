import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";

type RowItem = {
  label: string;
  rightText?: string;
};

function SectionHeader({ title }: { title: string }) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  );
}

function Row({ label, rightText }: RowItem) {
  return (
    <Pressable style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>

      <View style={styles.rowRight}>
        {rightText ? <Text style={styles.rowRightText}>{rightText}</Text> : null}
        <Text style={styles.chevron}>›</Text>
      </View>
    </Pressable>
  );
}

export default function Profile() {
  const router = useRouter();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.container}>
      {/* BLUE HEADER */}
      <View style={styles.header}>
        {/* top row: back + title */}
        <View style={styles.headerTopRow}>
          <Pressable style={styles.backBtn} onPress={() => router.back()}>
            <Text style={styles.backIcon}>←</Text>
          </Pressable>

          <Text style={styles.headerTitle}>Level 3 (0%)</Text>

          {/* spacer (keeps title centered) */}
          <View style={{ width: 40 }} />
        </View>

        {/* progress bar */}
        <View style={styles.progressOuter}>
          <View style={styles.progressInner} />
        </View>

        {/* pig area + right pills */}
        <View style={styles.headerBody}>
          <View style={styles.pigWrap}>
            <Text style={styles.pigEmoji}>🐷</Text>
            

            <Pressable style={styles.editBtn}>
              <Text style={styles.editIcon}>✎</Text>
            </Pressable>
          </View>

          <View style={styles.rightPills}>
            <View style={styles.pill}>
              <Text style={styles.pillText}>354</Text>
              <Text style={styles.pillEmoji}>🪙</Text>
            </View>
            <View style={styles.pill}>
              <Text style={styles.pillText}>17</Text>
              <Text style={styles.pillEmoji}>enteries</Text>
            </View>
            <View style={styles.pill}>
              <Text style={styles.pillText}>0</Text>
              <Text style={styles.pillEmoji}>🎰</Text>
            </View>
          </View>
        </View>
      </View>

      {/* LIST AREA */}
      <View style={styles.listArea}>
        <SectionHeader title="Referrals" />
        <Row label="Enter a Referral Code" />

        <SectionHeader title="Account Info" />
        <Row label="Account Information" />
        <Row label="Purchase Pulse" />
        <Row label="Achievements" />
        <Row label="Invite Friends" />
        <Row label="Redeem Coins" />
        <Row label="Edit Password" />
        <Row label="Verify Device" />
        <Row label="Push Notifications" />
        <Row label="Sounds & Haptics" />
        <Row label="Delete My Account" />
        <Row label="Sign Out" />

        <SectionHeader title="About Receipt Hog 9.1.0.8" />
        <Row label="Connect with Us" />
        <Row label="What Can I Earn?" />
        <Row label="Hog Level" />
        <Row label="Questions & Feedback" />
        <Row label="Getting Started" />
        <Row label="Rate Us" />
        <Row label="Privacy Settings" />
        <Row label="Terms & Conditions" />
        <Row label="Privacy Policy" />

        <SectionHeader title="California Residents" />
        <Row label="Do Not Sell My Personal Information" />

        <View style={{ height: 24 }} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { backgroundColor: "#0B74F0" },

  container: {
    paddingTop: Platform.OS === "web" ? 12 : 0,
    paddingBottom: 30,
  },

  header: {
    paddingTop: Platform.OS === "web" ? 12 : 44,
    paddingHorizontal: 16,
    paddingBottom: 18,
    backgroundColor: "#0B74F0",
  },

  headerTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  backBtn: {
    width: 40,
    height: 40,
    justifyContent: "center",
  },
  backIcon: {
    color: "white",
    fontSize: 22,
    fontWeight: "700",
  },

  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "800",
  },

  progressOuter: {
    marginTop: 10,
    height: 10,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.35)",
    overflow: "hidden",
  },
  progressInner: {
    width: "0%",
    height: "100%",
    backgroundColor: "white",
  },

  headerBody: {
    marginTop: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  pigWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 120,
  },
  pigEmoji: { fontSize: 64 },
  pigHearts: {
    marginTop: 2,
    color: "rgba(255,255,255,0.9)",
    fontWeight: "700",
  },

  editBtn: {
    marginTop: 10,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(0,0,0,0.15)",
    alignItems: "center",
    justifyContent: "center",
  },
  editIcon: { color: "white", fontSize: 18, fontWeight: "800" },

  rightPills: {
    gap: 10,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  pill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    minWidth: 86,
    justifyContent: "center",
  },
  pillText: { color: "white", fontWeight: "900" },
  pillEmoji: { fontSize: 16 },

  listArea: {
    backgroundColor: "#F2F6FB",
    paddingTop: 8,
  },

  sectionHeader: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    backgroundColor: "#F2F6FB",
  },
  sectionHeaderText: {
    color: "#1D4ED8",
    fontWeight: "700",
    fontSize: 14,
  },

  row: {
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  rowLabel: {
    fontSize: 18,
    color: "#0F172A",
    fontWeight: "500",
  },

  rowRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  rowRightText: {
    color: "#EF4444",
    fontWeight: "800",
    fontSize: 16,
  },
  chevron: {
    fontSize: 26,
    color: "#93A3B8",
    marginTop: -2,
  },
});