import { View,Text,StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Home() {
    return(

        <View style={styles.container}>
            <View style={styles.iconRow}>
                <Ionicons name="home" size={28} color="red" />
                <Text style={styles.tittle}>Esta es la pantalla Principal :D </Text>
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
        color: 'red',
    },
})