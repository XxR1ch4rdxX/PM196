//Zona de importaciones
import { StatusBar } from 'expo-status-bar';    
import { StyleSheet, Text, View, Switch} from 'react-native';
import React,{useState} from 'react';

const App =() =>{
  
    const [activo, setActivo]= useState(false);
    const cambiarEstado = () => {
      setActivo(previousState => !previousState);}
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Activar Switch</Text>
        <Switch
          onValueChange={cambiarEstado}
          value={activo}/>
        <Text style={styles.statusText}>
          Estado Actual: {activo ? 'Activo' : 'Inactivo'}
        </Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  statusText: {
    marginTop: 20,
    fontSize: 16,
    marginTop: 20,
    color: '#555',
  },
});

export default App;