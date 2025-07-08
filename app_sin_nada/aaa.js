//Zona de importaciones
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';

// API config
const API_KEY = 'efd4c596e0a629abd57f9b74b7c9efb5';
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

export default function App() {
  const [peliculas, setPeliculas] = useState([]);
  const [cargando, setCargando] = useState(true);

  const BuscarPelis = async () => {
    try {
      setCargando(true);
      const res = await fetch(API_URL);
      const data = await res.json();
      setPeliculas(data.results.slice(0, 10)); // solo las primeras 10
    } catch (error) {
      console.error("Error cargando las películas: ", error);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    BuscarPelis();
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {cargando ? (
        <ActivityIndicator size="large" color="#0d987d" />
      ) : (
        <FlatList
          data={peliculas}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Text style={{ marginBottom: 10 }}>{item.title}</Text>
          )}
        />
      )}
    </View>
  );
}
