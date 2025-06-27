import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
  ImageBackground,
  Switch,
  TextInput,
  Alert,
  Platform,
} from "react-native";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [terminos, setTerminos] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);

  const cambiarEstado = () => {
    setTerminos((prev) => !prev);
  };

  const alerta = () => {
    if (!nombre || !correo || !terminos) {
      if (!nombre || !correo) {
        alert("Por favor, completa todos los campos.");
      }
      if (!terminos) {
        alert("Debes aceptar los términos y condiciones.");
      }
      return;
    }

    if (Platform.OS === "web") {
      window.alert(`Registro Exitoso \nNombre: ${nombre}\nCorreo: ${correo}`);
    } else {
      Alert.alert("Registro Exitoso", `Nombre: ${nombre}\nCorreo: ${correo}`);
    }

    // Reiniciar formulario
    setNombre("");
    setCorreo("");
    setTerminos(false);
  };

  if (loading) {
    return (
      <View style={styles.splash}>
        <Text style={styles.splashtxt}>Cargando...</Text>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  return (
    <ImageBackground
      source={require("./assets/Fondo.jpg")}
      style={styles.ContView}
    >
      <StatusBar style="light" />
      <View style={styles.formulario}>
        <Text style={styles.titulo}>Creación de Usuario</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre Completo"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          value={correo}
          onChangeText={setCorreo}
        />
        <View style={{ paddingVertical: 20 }}>
          <Text style={styles.testo}>Aceptar Términos y Condiciones</Text>
          <Switch onValueChange={cambiarEstado} value={terminos} />
        </View>
        <Button
          color="rgb(123, 80, 152)"
          title="Registrarse"
          onPress={alerta}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  ContView: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  formulario: {
    backgroundColor: "rgb(255, 255, 255)",
    padding: 20,
    borderRadius: 10,
    width: "100%",
    maxWidth: 400,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "rgb(4, 8, 17)",
  },
  input: {
    color: "white",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "rgb(14, 26, 50)",
  },
  testo: {
    color: "black",
    fontSize: 16,
    marginTop: 20,
  },
  splash: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(0, 0, 0)",
  },
  splashtxt: {
    color: "rgb(255, 255, 255)",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default App;
    