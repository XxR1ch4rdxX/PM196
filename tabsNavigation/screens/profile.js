import { View,Text,StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Profile() {
    return(

        <View style={styles.container}>
            <View style={styles.iconRow}>
                <Ionicons name="person-outline" size={28} color="purple" />
                <Text style={styles.tittle}>Perfil de Usuario</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'rgb(240, 240, 240)',
    },iconRow: {
        flexDirection: 'row',
        alignItems: 'center',},
    tittle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'purple',
    },
})