import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import SelectorTiempo from './SelectorTiempo'; // Asegúrate de que este componente esté bien implementado

const Temporizador = () => {
  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [enMarcha, setEnMarcha] = useState(false); // Controla si está corriendo
  const [totalSegundos, setTotalSegundos] = useState(0); // Total de segundos
  const intervaloRef = useRef(null); // Guarda la referencia al intervalo

  // Efecto para limpiar el intervalo al desmontar el componente
  useEffect(() => {
    return () => clearInterval(intervaloRef.current);
  }, []);

  const iniciarTemporizador = () => {
    if (enMarcha) return; // Evitar múltiples intervalos

    // Calcular el total de segundos
    const total = horas * 3600 + minutos * 60 + segundos;
    setTotalSegundos(total);

    setEnMarcha(true);
    intervaloRef.current = setInterval(() => {
      setTotalSegundos((prevTotalSegundos) => {
        if (prevTotalSegundos <= 0) {
          clearInterval(intervaloRef.current); // Detener al llegar a 00:00:00
          setEnMarcha(false);
          return 0; // Asegura que el total sea 0
        }
        return prevTotalSegundos - 1;
      });
    }, 1000); // Cambiado a 1000 ms para que sea más realista
  };

  const pausarTemporizador = () => {
    clearInterval(intervaloRef.current);
    setEnMarcha(false);
  };

  const reiniciarTemporizador = () => {
    clearInterval(intervaloRef.current);
    setHoras(0);
    setMinutos(0);
    setSegundos(0);
    setTotalSegundos(0);
    setEnMarcha(false);
  };

  // Obtener horas, minutos y segundos del total
  const mostrarHoras = Math.floor(totalSegundos / 3600);
  const mostrarMinutos = Math.floor((totalSegundos % 3600) / 60);
  const mostrarSegundos = totalSegundos % 60;

  return (
    <View style={styles.contenedor}>
      <Text style={styles.tiempo}>
        {`${String(mostrarHoras).padStart(2, '0')}:${String(mostrarMinutos).padStart(2, '0')}:${String(mostrarSegundos).padStart(2, '0')}`}
      </Text>
      <SelectorTiempo
        horas={horas}
        setHoras={setHoras}
        minutos={minutos}
        setMinutos={setMinutos}
        segundos={segundos}
        setSegundos={setSegundos}
      />
      <View style={styles.botones}>
        <Pressable style={styles.boton} onPress={iniciarTemporizador}>
          <Text style={styles.textoBoton}>Iniciar</Text>
        </Pressable>
        <Pressable style={styles.boton} onPress={pausarTemporizador}>
          <Text style={styles.textoBoton}>Pausar</Text>
        </Pressable>
        <Pressable style={styles.boton} onPress={reiniciarTemporizador}>
          <Text style={styles.textoBoton}>Reiniciar</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  tiempo: {
    fontSize: 90,
    color: 'white',
    marginBottom: 20,
  },
  botones: {
    flexDirection: 'row',
    height: 50,
    width: 380,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  boton: {
    backgroundColor: '#6200ee',
    width: 98,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textoBoton: {
    color: 'white',
    fontSize: 18,
  },
});

export default Temporizador;
