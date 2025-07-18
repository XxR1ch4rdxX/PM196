import { View,Text,StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Profile() {
    return(

        <View style={styles.container}>
            <View style={styles.iconRow}>
                <Ionicons name="settings-outline" size={28} color="green" />
                <Text style={styles.tittle}>Configuracion</Text>
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
        color: 'green',
    },
})