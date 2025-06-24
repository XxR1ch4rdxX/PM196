//Importacinoes Pertinentes para la Practica
import React,{useState} from "react";
import{
    View,
    Text,
    TextInput,
    Button,
    Alert,
    StyleSheet,
    SafeAreaView,
    Platform ,

}from "react-native";

const App = () => {
    const [nombre,setNombre] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [telefono,setTelefono] = useState("");

    const mostrarAlerta=()=>{
        if (!nombre || !email || !password) {
            if (Platform.OS === 'web') {
                alert("Por favor, completa todos los campos.");
            }else{
                Alert.alert(
                    "Error",
                    "Completa los campos",
                    [{text: "OK"}],
                )

            }
    }else{
            if (Platform.OS === 'web'){
                window.alert(`Registro Exitoso: \n Nombre: ${nombre} \n Email: ${email} \n Telefono: ${telefono}`);
                limpiarFormulario();
            }else{
                Alert.alert(
                    "Registro Exitoso",
                    `Nombre: ${nombre} \n Email: ${email} \n Telefono: ${telefono}`,
                    [{text: "OK", onPress:()=>limpiarFormulario() }]
                );
            }
    }
}

const limpiarFormulario = () =>{
    setNombre("");
    setEmail("");
    setPassword("");
    setTelefono("");
}

return (
    <SafeAreaView style={styles.container}>
        <View style={styles.formulario}>
            <Text style={styles.titulo}>Registro de Usuarios</Text>
            <TextInput
                style ={styles.input}
                placeholder="Nombre"
                value={nombre}
                onChangeText={setNombre}
            />
            <TextInput
                style ={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style ={styles.input}
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TextInput
                style ={styles.input}
                placeholder="Telefono"
                value={telefono}
                onChangeText={setTelefono}
                keyboardType="phone-pad"
            />
            <Button
                title="Registrar"
                onPress={mostrarAlerta} 
            />
        </View>
    </SafeAreaView>
);
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        padding: 20,
    },
    formulario: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
    },
    titulo:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input:{
        height: 40,
        borderColor: '#ccc',    
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
        backgroundColor:"White",
    },
});

export default App;