import React, { useState, useEffect } from 'react';
import {
  View, Text, FlatList, ActivityIndicator, Image, StyleSheet,
  TextInput, TouchableOpacity, ScrollView
} from 'react-native';

//llaves de nuestra api
const API_KEY = 'efd4c596e0a629abd57f9b74b7c9efb5';
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

export default function App() {
  const [peliculas, setPeliculas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [busqueda, setBusqueda] = useState('');

  const BuscarExacto = async (nombre) => {
    if (!nombre.trim()) return;
    try {
      setCargando(true);
      const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(nombre)}`);
      const data = await res.json();
      const resultados = data.results.filter(
        (peli) => peli.title.toLowerCase() === nombre.trim().toLowerCase()
      );
      setPeliculas(resultados.slice(0, 10));
    } catch (error) {
      console.error('Error en búsqueda exacta:', error);
    } finally {
      setCargando(false);
    }
  };

  const BuscarAproximado = async (nombre) => {
    if (!nombre.trim()) return;
    try {
      setCargando(true);
      const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(nombre)}`);
      const data = await res.json();
      setPeliculas(data.results.slice(0, 10));
    } catch (error) {
      console.error('Error en búsqueda aproximada:', error);
    } finally {
      setCargando(false);
    }
  };

  const BuscarPelis = async () => {
    try {
      setCargando(true);
      const res = await fetch(API_URL);
      const data = await res.json();
      setPeliculas(data.results.slice(0, 10));
    } catch (error) {
      console.error("Error cargando las películas: ", error);
    } finally {

      setCargando(false);
    }
  };

  useEffect(() => {
    BuscarPelis();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        style={styles.poster}
      />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>Año: {item.release_date?.split('-')[0]}</Text>
        <Text style={styles.text}>Rating: ⭐ {item.vote_average}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <Text style={styles.header}>🎬 🐋🐋Tralalero Peliculon  🐳🐳 🎬</Text>

        <TextInput
          placeholder="Buscar película..."
          placeholderTextColor="#ccc"
          value={busqueda}
          onChangeText={setBusqueda}
          style={styles.input}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => BuscarExacto(busqueda)} style={styles.button}>
            <Text style={styles.buttonText}>Buscar Exacto</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => BuscarAproximado(busqueda)} style={styles.button}>
            <Text style={styles.buttonText}>Buscar Aproximado</Text>
          </TouchableOpacity>
        </View>

        {cargando ? (
          <ActivityIndicator size="large" color="#61dafb" style={{ marginTop: 20 }} />
        ) : (
          <FlatList
            data={peliculas}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            style={{ marginTop: 10 }}
          />
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1b2e',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#2e2a45',
    color: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    borderColor: '#444',
    borderWidth: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#5c4dff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: '#2e2a45',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
  },
  poster: {
    width: 100,
    height: 150,
  },
  info: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-around',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
  text: {
    color: '#ccc',
  },
});
