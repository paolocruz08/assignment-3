import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Receipt() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerSide}>Hide</Text>
        </View>
        <Text style={styles.headerTitle}>Receipts</Text>
        <View>
          <Text style={styles.headerSide}>Help</Text>
        </View>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.weekSection}>
          <Text style={styles.weekTitle}>Feb 15 - Feb 21</Text>

          <View style={styles.progressRow}>
            <View style={styles.progressBar}>
              <View style={styles.progressFill} />
            </View>
            <View style={styles.progressEnd}>
              <Text style={styles.progressEndText}>100</Text>
            </View>
          </View>

          <Text style={styles.progressLabel}>
            0/100 coins earned this week from paper receipts
          </Text>

          <View style={styles.searchRow}>
            <View style={styles.iconButton}>
              <Ionicons name="swap-vertical-outline" size={20} color="#666" />
            </View>
            <View style={styles.iconButton}>
              <Ionicons name="funnel-outline" size={20} color="#666" />
            </View>
            <View style={styles.searchBar}>
              <Ionicons name="search-outline" size={18} color="#999" />
              <Text style={styles.searchText}>Search Receipts</Text>
            </View>
          </View>
        </View>

        <View style={styles.emailBanner}>
          <Text style={styles.emailBannerText}>
            Connect your email to get rewarded for your e-receipts!
          </Text>

          <View style={styles.connectButton}>
            <Text style={styles.connectButtonText}>Connect</Text>
          </View>
          <View>
            <Ionicons name="close" size={18} color="#999" />
          </View>
        </View>

        <View style={styles.monthHeader}>
          <Text style={styles.monthHeaderText}>February 2026</Text>
          <Ionicons name="chevron-down" size={20} color="#fff" />
        </View>

        <View style={styles.receiptRow}>
          <View>
            <Text style={styles.receiptStatus}>Processing</Text>
            <Text style={styles.receiptTime}>2 minutes ago</Text>
          </View>

          <View style={styles.receiptRight}>
            <Text style={styles.receiptAmount}>$104.98</Text>
            <Ionicons name="time-outline" size={20} color="#999" />
          </View>
        </View>

        <View style={styles.endCard}>
          <View style={styles.endCardIcon}>
            <Ionicons name="receipt-outline" size={28} color="#fff" />
          </View>

          <Text style={styles.endCardText}>
            You have reached the end of your receipt list.{" "}
            <Text style={styles.backToTop}>Back to Top</Text>
          </Text>
        </View>
      </ScrollView>

      <View style={styles.camera}>
        <Ionicons name="camera" size={26} color="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "3C6FE6",
  },
  header: {
    backgroundColor: "#3a7fe0",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  headerSide: {
    color: "#fff",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  scroll: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    paddingBottom: 100,
  },
  weekSection: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 10,
  },
  weekTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111",
    textAlign: "center",
  },
  progressRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
  },
  progressFill: {
    width: "2%",
    height: 8,
    backgroundColor: "#2196F3",
    borderRadius: 10,
  },
  progressEnd: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  progressEndText: {
    fontSize: 13,
    color: "#555",
    fontWeight: "600",
  },
  progressLabel: {
    fontSize: 13,
    color: "#555",
    textAlign: "center",
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 4,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#e8e8e8",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  searchText: {
    fontSize: 15,
    color: "#999",
  },
  emailBanner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 14,
    paddingVertical: 14,
    gap: 10,
  },
  emailBannerText: {
    flex: 1,
    fontSize: 13,
    color: "#333",
    lineHeight: 18,
  },
  connectButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 30,
  },
  connectButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
  },
  monthHeader: {
    backgroundColor: "#3a7fe0",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  monthHeaderText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
  receiptRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  receiptStatus: {
    fontSize: 16,
    color: "#999",
    fontWeight: "500",
  },
  receiptTime: {
    fontSize: 13,
    color: "#999",
    marginTop: 2,
  },
  receiptRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  receiptAmount: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
  },
  endCard: {
    flexDirection: "row",
    alignItems: "center",
    margin: 16,
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#ddd",
    gap: 12,
  },
  endCardIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#2196F3",
    justifyContent: "center",
    alignItems: "center",
  },
  endCardText: {
    flex: 1,
    fontSize: 15,
    color: "#333",
    lineHeight: 22,
  },
  backToTop: {
    color: "#2196F3",
    fontWeight: "600",
  },
  camera: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#2196F3",
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
  },
});
