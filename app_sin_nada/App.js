//Zona de importaciones
import { StatusBar } from 'expo-status-bar';    
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';

//Funcion main que ejecutara la vista principal de la aplicacion
//Solo se heredan las propiedades no los estados
 const Texto=(props) => {
  const [contenido,setContenido] = useState('Hola');
  const actualizarText=()=>{setContenido('Adios');}
     return (<Text onPress={actualizarText}> {contenido} </Text>) 
    }

 const Boton=(props) => {
  const [tituloBoton, setTituloBoton] = useState('Boton Tonto');
  const Presionar = () => {setTituloBoton('Presionado');};
  return (<Button onPress={Presionar} title={tituloBoton}/>)
 }

export default function App() {

  

  return (
    <View style={styles.container}>

      
  
      {/* Si queremos hacer algo visible debe estar dentro de view, como si fuera el body 
      Todo lo que queramos mostrar debe ir dentro de view y cada elemento tiene sus
      etiquetas
      */}
      
      <StatusBar style="auto" />
      <Texto></Texto>
      <Texto></Texto>
      <Texto></Texto>
      <Boton/>
    </View>
  );
}
// Zona de estilos
// Estilos para la vista principal de la aplicacion
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
