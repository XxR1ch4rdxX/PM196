import {View, Text, Pressable ,StyleSheet} from 'react-native';

export default function Home({navigation}) {

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Esta es la pantalla Principal :D </Text>

            <Pressable style={[styles.button,styles.buttonprofile]} onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.buttonText}>Ir a Perfil</Text>
            </Pressable>

            <Pressable style={[styles.button ,styles.buttonseting]} onPress={() => navigation.navigate('Settings')}>
                <Text style={styles.buttonText}>Ir a Configuracion</Text>
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
    buttonseting: {
        backgroundColor: 'rgb(250, 100, 100)',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',},
})