import { useRouter } from "expo-router";
import React from "react";
import {
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.container}>
      {/* TOP BAR */}
      <View style={styles.topBar}>
        <Pressable
          style={styles.avatarBtn}
          onPress={() => router.push("/profile")}
        >
          <Text style={styles.avatarEmoji}>🐷</Text>
        </Pressable>

        <View style={styles.coinPill}>
          <Text style={styles.coinText}>354</Text>
          <Text style={styles.coinEmoji}>🪙</Text>
        </View>

        <Pressable
          style={styles.bellBtn}
          onPress={() => router.push("/rewards")}
        >
          <Text style={styles.bellEmoji}>🔔</Text>
        </Pressable>
      </View>

      {/* EMAIL BANNER */}
      <Pressable
        style={[styles.card, styles.bannerCard]}
        onPress={() => router.push("/profile")}
      >
        <View style={styles.bannerLeft}>
          <View style={styles.bannerIcon}>
            <Text style={styles.bannerIconEmoji}>📧</Text>
          </View>
          <Text style={styles.bannerText}>
            Unlock an extra bonus reward{"\n"}just for connecting your Email!
          </Text>
        </View>
      </Pressable>

      {/* LINK ACCOUNTS */}
      <Text style={styles.sectionTitle}>Link Accounts to Earn More</Text>
      <View style={styles.row}>
        <Pressable
          style={[styles.card, styles.smallCard]}
          onPress={() => router.push("/rewards")}
        >
          <Text style={styles.smallIcon}>🛒</Text>
          <Text style={styles.smallTitle}>Link Amazon,{"\n"}earn more!</Text>
        </Pressable>

        <Pressable
          style={[styles.card, styles.smallCard]}
          onPress={() => router.push("/receipts")}
        >
          <Text style={styles.smallIcon}>✉️</Text>
          <Text style={styles.smallTitle}>
            Upload e-receipts{"\n"}for rewards
          </Text>
        </Pressable>
      </View>

      {/* BONUS REWARDS */}
      <Text style={styles.sectionTitle}>Bonus Rewards (4)</Text>
      <View style={styles.row}>
        <Pressable
          style={[styles.card, styles.bonusCard]}
          onPress={() => router.push("/rewards")}
        >
          <View style={styles.newRibbon}>
            <Text style={styles.newRibbonText}>NEW</Text>
          </View>

          <Text style={styles.bonusTitle}>Earn up to 1,000 coins!</Text>
          <Text style={styles.bonusSub}>Available until March 12, 2026</Text>

          <View style={styles.bonusFooter}>
            <Text style={styles.bonusFooterText}>Welcome Bonus</Text>
          </View>
        </Pressable>

        <Pressable
          style={[styles.card, styles.bonusCard]}
          onPress={() => router.push("/rewards")}
        >
          <Text style={styles.bonusTitle}>
            Earn achievements and{"\n"}bonus rewards
          </Text>
          <Text style={styles.bonusSub}>Just by using Receipt Hog!</Text>

          <View style={[styles.bonusFooter, { marginTop: 16 }]}>
            <Text style={styles.bonusFooterText}>My Achievements</Text>
          </View>
        </Pressable>
      </View>

      {/* E-RECEIPTS */}
      <Text style={styles.sectionTitle}>e-Receipts</Text>
      <Pressable
        style={[styles.card, styles.wideCard]}
        onPress={() => router.push("/receipts")}
      >
        <View>
          <Text style={styles.wideTitle}>Upload Online Receipts</Text>
          <Text style={styles.wideSub}>
            Earn coins for every e-receipt you upload.
          </Text>
        </View>
        <View style={styles.greenBtn}>
          <Text style={styles.greenBtnText}>Learn More</Text>
        </View>
      </Pressable>

      {/* PURCHASE PULSE */}
      <Text style={styles.sectionTitle}>Purchase Pulse</Text>
      <Pressable style={[styles.card, styles.purpleCard]} onPress={() => {}}>
        <View>
          <Text style={styles.purpleTitle}>Purchase Pulse</Text>
          <Text style={styles.purpleSub}>
            Track your spending habits,{"\n"}updated as you upload!
          </Text>
        </View>
        <View style={styles.greenBtn}>
          <Text style={styles.greenBtnText}>View My Spending Insights</Text>
        </View>
      </Pressable>

      {/* SPIN */}
      <Text style={styles.sectionTitle}>Spin the Hog Slots!</Text>
      <Pressable style={[styles.card, styles.spinCard]} onPress={() => {}}>
        <View style={{ flex: 1 }}>
          <Text style={styles.spinTitle}>
            You could be the next{"\n"}
            <Text style={{ fontWeight: "800" }}>Daily Trip Winner!</Text>
          </Text>
          <Text style={styles.spinSub}>🏆 Last Winner: 18000 coins</Text>
        </View>

        <View style={styles.greenBtnSmall}>
          <Text style={styles.greenBtnText}>Learn More</Text>
        </View>
      </Pressable>

      {/* SWEEPSTAKES */}
      <Text style={styles.sectionTitle}>Sweepstakes</Text>
      <View style={[styles.card, styles.sweepCard]}>
        <Text style={styles.sweepTitle}>February Sweepstakes</Text>

        <View style={styles.sweepRow}>
          <View style={styles.sweepCol}>
            <Text style={styles.sweepBig}>17</Text>
            <Text style={styles.sweepSmall}>Your entries</Text>
          </View>
          <View style={styles.sweepDivider} />
          <View style={styles.sweepCol}>
            <Text style={styles.sweepBig}>Mar 1</Text>
            <Text style={styles.sweepSmall}>Next draw</Text>
          </View>
        </View>
      </View>

      <View style={{ height: 24 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { backgroundColor: "#3C6FE6" },
  container: {
    paddingTop: Platform.OS === "web" ? 18 : 52,
    paddingHorizontal: 16,
    paddingBottom: 30,
  },

  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  avatarBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(255,255,255,0.25)",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarEmoji: { fontSize: 22 },

  coinPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.25)",
  },
  coinText: { color: "white", fontWeight: "800" },
  coinEmoji: { fontSize: 16 },

  bellBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(255,255,255,0.25)",
    alignItems: "center",
    justifyContent: "center",
  },
  bellEmoji: { fontSize: 18 },

  sectionTitle: {
    marginTop: 18,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "700",
    color: "white",
  },

  row: { flexDirection: "row", gap: 12 },

  card: {
    backgroundColor: "white",
    borderRadius: 18,
    padding: 14,
  },

  bannerCard: { paddingVertical: 18 },
  bannerLeft: { flexDirection: "row", alignItems: "center", gap: 12 },
  bannerIcon: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: "#EAF0FF",
    alignItems: "center",
    justifyContent: "center",
  },
  bannerIconEmoji: { fontSize: 22 },
  bannerText: { fontSize: 15, fontWeight: "700", color: "#111827", flex: 1 },

  smallCard: { flex: 1, minHeight: 96, alignItems: "center", gap: 6 },
  smallIcon: { fontSize: 28, marginTop: 4 },
  smallTitle: { textAlign: "center", fontWeight: "800", color: "#111827" },

  bonusCard: { flex: 1, minHeight: 135, overflow: "hidden" },
  newRibbon: {
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "#E11D48",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderBottomRightRadius: 12,
  },
  newRibbonText: { color: "white", fontWeight: "900", fontSize: 12 },
  bonusTitle: { marginTop: 18, fontWeight: "900", color: "#0F172A" },
  bonusSub: { marginTop: 6, color: "#64748B", fontSize: 12 },
  bonusFooter: {
    marginTop: 14,
    backgroundColor: "#1D4ED8",
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: "center",
  },
  bonusFooterText: { color: "white", fontWeight: "900" },

  wideCard: { gap: 10 },
  wideTitle: { fontWeight: "900", fontSize: 16, color: "#0F172A" },
  wideSub: { marginTop: 4, color: "#64748B" },

  greenBtn: {
    backgroundColor: "#22C55E",
    paddingVertical: 12,
    borderRadius: 999,
    alignItems: "center",
  },
  greenBtnSmall: {
    backgroundColor: "#22C55E",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  greenBtnText: { color: "white", fontWeight: "900" },

  purpleCard: { backgroundColor: "#6D28D9", gap: 12 },
  purpleTitle: { color: "white", fontWeight: "900", fontSize: 16 },
  purpleSub: { marginTop: 6, color: "rgba(255,255,255,0.85)" },

  spinCard: { flexDirection: "row", alignItems: "center", gap: 12 },
  spinTitle: { color: "#0F172A" },
  spinSub: { marginTop: 8, color: "#64748B", fontSize: 12 },

  sweepCard: { paddingVertical: 16 },
  sweepTitle: { fontWeight: "900", fontSize: 16, color: "#0F172A" },
  sweepRow: { flexDirection: "row", marginTop: 14, alignItems: "center" },
  sweepCol: { flex: 1, alignItems: "center" },
  sweepDivider: { width: 1, height: 52, backgroundColor: "#E5E7EB" },
  sweepBig: { fontSize: 28, fontWeight: "900", color: "#0F172A" },
  sweepSmall: { marginTop: 4, color: "#64748B" },
});
