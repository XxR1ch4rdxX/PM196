//Zona de importaciones
import { StatusBar } from 'expo-status-bar';    
import { StyleSheet, Text, View, Button ,Alert, Platform} from 'react-native';
import React,{useState} from 'react';

const showAlert = (message) =>{
if(Platform.OS === 'web'){
  window.alert(message);
}else{
    Alert.alert('Alerta!!!',message)
  }
}


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Button Test</Text>


      <View style={styles.section}>
        <Text style={styles.decription}>Boton Basico</Text>
        <Button 
          title='Presionamee'
          onPress={()=> showAlert('Boton Apachurrao')}
          />     
      <StatusBar style="auto" />
      </View>
      <View style={styles.section}>
        <Text style={styles.description}>Boton con color</Text>
        <Button
          title='Boton con color'
          color={'#800080'} 
          onPress={()=> showAlert('Boton Morado Puchado')}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.description}>Boton deshabilitado:</Text>
        <Button
          title='Boton con color'
          disabled={true}
          
          onPress={()=> showAlert('Boton Morado Puchado')}
        />
      </View>

      <View style={styles.section}> 
         <Text style={styles.description}>Dos Botones:</Text>
         <View style={styles.buttonRow}>
          <Button
            title='Izquierda'
            onPress={()=> showAlert('Boton Izquierda')}
          />
         <View style={styles.buttonSpacer}/>
          <Button
            title='Derecha'
            onPress={()=> showAlert('Boton Derecha')}
          />
         </View>
      </View> 
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#800080', 
  },
  section:{
    marginBottom: 20,
  },
  description:{
    fontSize: 16,
    marginBottom: 10,
    color: '#333333',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
    buttonSpacer: {
    width: 10,
  }
});
