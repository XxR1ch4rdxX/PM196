//Zona de importaciones
import { StatusBar } from 'expo-status-bar';    
import { StyleSheet, Text, View, Button } from 'react-native';

//Funcion main que ejecutara la vista principal de la aplicacion

 const Texto=(props) => {
  const {contenido} = props;
     return (<Text> {contenido} </Text>) 
    }

export default function App() {
  return (
    <View style={styles.container}>

      {/* Si queremos hacer algo visible debe estar dentro de view, como si fuera el body 
      Todo lo que queramos mostrar debe ir dentro de view y cada elemento tiene sus
      etiquetas
      */}
      
      <StatusBar style="auto" />
      <Texto contenido="Hola"></Texto>
      <Texto contenido="que"></Texto>
      <Texto contenido="tal"></Texto>
      <Texto contenido=":D"></Texto>
      <Texto contenido="."></Texto>
      <Button title="Boton Tonto" />
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
