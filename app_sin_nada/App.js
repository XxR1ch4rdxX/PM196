//Zona de importaciones
import { StatusBar } from 'expo-status-bar';    
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';

//Funcion main que ejecutara la vista principal de la aplicacion
//Solo se heredan las propiedades no los estados
//aca cambiamos el parametro de promp a style para los estilos
 const Texto=({style}) => {
  const [contenido,setContenido] = useState('Hola');
  const actualizarText=()=>{setContenido('Adios');}
  //ahora el hijo de texto recibe el estilo
  // y lo aplica al texto y no depende del padre
  //si no le pasamos el estilo, se aplica el estilo por defecto
     return (<Text  style={[styles.text,style]} onPress={actualizarText}> {contenido} </Text>) 
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
      {/* Este estilo no va a funcionar ya que debe estar
      declarado el estulilo en el padre, es decir en el componente "Text" */}
      <Texto style={styles.text}> </Texto>

      {/* Este estilo si va a funcionar ya que el componente "Texto" */}
      <Texto style={styles.blue} ></Texto>
      <Texto style={styles.red}></Texto>
      <Texto style={styles.green}></Texto>
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
    alignItems: 'stretch', //para alinear los elementos al centro
    flexDirection: 'colum', //disposicion de los elementos
    //justify sirve para alinear los elementos
    justifyContent: 'center',
    justifyContent: 'space-around' , //para alinear los elementos 
  },

  //aca creamos la clase texto
  //para darle estilos a los textos
  text:{
    //para el color del texto
    color: 'purple',
    //para el tamaño del texto
    fontSize: 28,
  },
  //aca creamos estilos para textos de colores individuales
  //disposicion flex
  
  blue:{backgroundColor: 'blue',  },
  red:{backgroundColor: 'red',},
  green:{backgroundColor: 'green',},

});
