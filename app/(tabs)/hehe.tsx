import { useRouter } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function Hehe() {
    const router = useRouter();
    
    return (  // ✅ Add return statement
        <View style={styles.container}>
            <Text>Hehe Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});