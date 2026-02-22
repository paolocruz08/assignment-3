import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Link() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Link</Text>
      </View>

      <View style={styles.filterRow}>
        <View style={styles.filterActive}>
          <Text style={styles.filterActiveText}>All</Text>
        </View>

        <View style={styles.filterButton}>
          <Text style={styles.filterText}>Recommended</Text>
        </View>

        <View style={styles.filterGreen}>
          <Text style={styles.filterGreenText}>Double Rewards</Text>
        </View>

        <View style={styles.filterButton}>
          <Text style={styles.filterText}>Recent</Text>
        </View>
      </View>

      <Text style={styles.description}>
        Never miss a receipt! Earn rewards easily for every receipt when you link your accounts below.
      </Text>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>Add Accounts</Text>
        <Ionicons name="chevron-down" size={20} color="#fff" />
      </View>

      <ScrollView>

        <View style={styles.storeRow}>
          <View style={styles.storeIcon}>
            <Ionicons name="logo-amazon" size={22} color="#2196F3" />
          </View>
          <Text style={styles.storeName}>Amazon</Text>
        </View>

        <View style={styles.storeRow}>
          <View style={styles.storeIcon}>
            <Ionicons name="cart-outline" size={22} color="#2196F3" />
          </View>
          <Text style={styles.storeName}>Atlantic Superstore</Text>
        </View>

        <View style={styles.storeRow}>
          <View style={styles.storeIcon}>
            <Ionicons name="storefront-outline" size={22} color="#2196F3" />
          </View>
          <Text style={styles.storeName}>Costco</Text>
        </View>

        <View style={styles.storeRow}>
          <View style={styles.storeIcon}>
            <Ionicons name="time-outline" size={22} color="#2196F3" />
          </View>
          <Text style={styles.storeName}>Dominion</Text>
        </View>

        <View style={styles.storeRow}>
          <View style={styles.storeIcon}>
            <Ionicons name="mail-outline" size={22} color="#2196F3" />
          </View>
          <Text style={styles.storeName}>Email+</Text>
        </View>

        <View style={styles.storeRow}>
          <View style={styles.storeIcon}>
            <Ionicons name="cart-outline" size={22} color="#2196F3" />
          </View>
          <Text style={styles.storeName}>Extra Supermarket</Text>
        </View>

        <View style={styles.storeRow}>
          <View style={styles.storeIcon}>
            <Ionicons name="storefront-outline" size={22} color="#2196F3" />
          </View>
          <Text style={styles.storeName}>Fortinos</Text>
        </View>

        <View style={styles.storeRow}>
          <View style={styles.storeIcon}>
            <Ionicons name="storefront-outline" size={22} color="#2196F3" />
          </View>
          <Text style={styles.storeName}>Independent City Market</Text>
        </View>

        <View style={styles.storeRow}>
          <View style={styles.storeIcon}>
            <Ionicons name="bag-outline" size={22} color="#2196F3" />
          </View>
          <Text style={styles.storeName}>Instacart</Text>
        </View>

        <View style={styles.storeRow}>
          <View style={styles.storeIcon}>
            <Ionicons name="cart-outline" size={22} color="#2196F3" />
          </View>
          <Text style={styles.storeName}>Loblaws</Text>
        </View>

        <View style={styles.storeRow}>
          <View style={styles.storeIcon}>
            <Ionicons name="cart-outline" size={22} color="#2196F3" />
          </View>
          <Text style={styles.storeName}>Maxi & Cie</Text>
        </View>

        <View style={styles.storeRow}>
          <View style={styles.storeIcon}>
            <Ionicons name="pricetag-outline" size={22} color="#2196F3" />
          </View>
          <Text style={styles.storeName}>No Frills Supermarket</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3C6FE6",
  },
  header: {
    backgroundColor: "#3a7fe0",
    paddingVertical: 14,
    alignItems: "center",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  filterRow: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap: 6,
  },
  filterButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  filterActive: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "#2196F3",
  },
  filterGreen: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#4CAF50",
  },
  filterText: {
    fontSize: 12,
    color: "#333",
  },
  filterActiveText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
  },
  filterGreenText: {
    fontSize: 12,
    color: "#4CAF50",
  },
  description: {
    fontSize: 14,
    color: "#333",
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: "#fff",
  },
  sectionHeader: {
    backgroundColor: "#3a7fe0",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  sectionHeaderText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  storeRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginTop: 1,
    gap: 14,
    borderRadius: 10,
    marginHorizontal: 8,
    marginBottom: 4,
  },
  storeIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
  },
  storeName: {
    fontSize: 16,
    color: "#111",
  },
});