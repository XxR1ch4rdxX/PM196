import { View,Text,StyleSheet,Pressable } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function  User_Details({ navigation}) {
    return(

        <View style={styles.container}>
            <View style={styles.iconRow}>
                <Ionicons name="person-outline" size={28} color="purple" />
                <Text style={styles.tittle}>Detalles del usuario</Text>
                <Text style={styles.content}>Nombre: Ricardo Giovanny
                    {'\n'}Apellido: Sandoval Bermudez
                    {'\n'}Edad: 21
                    {'\n'}Email: 122042515@upq.edu.mx
                    {'\n'}Teléfono: 4426558032
                </Text>
            </View>
            <Pressable style={[styles.button, styles.buttondetails]} onPress={()=>navigation.goBack()}>
                <Text style={styles.buttonText}>Volver</Text>
            </Pressable>

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
    button:{
        backgroundColor: 'purple',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        marginBottom: 40,
        width: '80%',
        alignItems: 'center',
    },buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },content: {
        fontSize: 16,
        marginTop: 10,},
    buttondetails: {
        backgroundColor: 'red',
    },
})