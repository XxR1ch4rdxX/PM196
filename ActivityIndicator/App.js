//Activity Indicator

//importaciones
import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, ActivityIndicator } from 'react-native';

//funcion principal (view)
export default function App() {
  const [cargando, setCargando] = useState(false);
  const [datos, setDatos] = useState('');

  const SimularCarga =()=>{
    setCargando(true);
    setDatos('');

    setTimeout(() => {
      setCargando(false);
      setDatos('Datos cargados correctamente');
    }, 3000); 
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>ActivityIndicator</Text>

      <Button title="Cargar Datos" onPress={SimularCarga} color="#007AFF" />

      {cargando && <ActivityIndicator size="large" color="#007AFF" style={styles.loader} />}

      {datos !== '' && <Text>{datos}</Text>}

      <StatusBar style="auto" />
    </View>
    
  );
}

//estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  titulo: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 20,
},

btnContainer: {
  marginVertical: 10,
  width: '60%',
},

loader: {
  marginVertical: 20,
},

textoResultado: {
  marginTop: 20,
  fontSize: 18,
  color: '#333',
  textAlign: 'center',
},

});