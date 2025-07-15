import {View, Text, Pressable ,StyleSheet} from 'react-native';

export default function Settings({navigation}) {
   return(
        <View style={styles.container}>
            <Text style={styles.text}>Esta es la pantalla Configuraciones</Text>

            <Pressable style={[styles.button,styles.buttonprofile]} onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.buttonText}>Ir a Perfil</Text>
            </Pressable>

            <Pressable style={[styles.button ,styles.buttonhome]} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Pantalla Principal</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(240, 240, 240)',
        padding: 20,},
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 40,
        textAlign: 'center',},
    button: {
       paddingVertical:12,
       paddingHorizontal: 30,
       borderRadius: 8,
       marginBottom: 20,
       width: '80%',
       alignItems: 'center',
    },
    buttonprofile: {
        backgroundColor: 'rgb(41, 154, 173)',
    },
    buttonhome: {
        backgroundColor: 'rgb(199, 17, 44)',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',},
})