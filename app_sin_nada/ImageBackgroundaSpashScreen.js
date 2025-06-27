import React,{useEffect,useState} from "react";
import {View,StyleSheet, Text, ImageBackground, ActivityIndicator} from "react-native";

export default function App(){
   //spashScreen
   const[loading, setLoading] = useState(true);
    useEffect(()=> {
        setTimeout(()=> setLoading(false), 5000);
    }, [])

    if (loading) {
        return(
            <View style={styles.splash}>
                <Text style={styles.splashtxt} >Cargando...</Text>
                <ActivityIndicator size="large" color="white"/>
            </View>    
        );
    }


   return(
     <ImageBackground
    source={{uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb'}}
    style={styles.background}
    resizeMode="cover"
    >

    <View style={styles.overlay}>
        <Text style={styles.title}>Bienvenido a la App</Text>
    </View>
    </ImageBackground>
   );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:'center'
    },
    overlay:{
        backgroundColor:'rgba(0,0,0,0.5)',
        padding: 20,
        borderRadius: 10,
        alignSelf: 'center',
    },
    text:{
        color: 'white',
        fontSize: 24,
    },
    splash:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(0, 0, 0)',
    },
    splashtxt:{
        color: "rgb(255, 255, 255)",
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    title: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    
});
