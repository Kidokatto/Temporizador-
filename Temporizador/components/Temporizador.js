import React, { useState, useRef } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import SelectorTiempo from './SelectorTiempo';

const Temporizador = () => {
  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [enMarcha, setEnMarcha] = useState(false);
  const intervaloRef = useRef(null);

  // Calcula el tiempo total en segundos
  const calcularTiempoTotal = () => {
    return horas * 3600 + minutos * 60 + segundos;
  };

  // Función para iniciar el temporizador
  const iniciarTemporizador = () => {
    const tiempoTotal = calcularTiempoTotal();
    if (tiempoTotal > 0 && !enMarcha) {
      setEnMarcha(true);
      intervaloRef.current = setInterval(() => {
        setSegundos((prevSegundos) => {
          if (prevSegundos > 0) {
            return prevSegundos - 1;
          } else if (minutos > 0) {
            setMinutos((prevMinutos) => prevMinutos - 1);
            return 59;
          } else if (horas > 0) {
            setHoras((prevHoras) => prevHoras - 1);
            setMinutos(59);
            return 59;
          } else {
            clearInterval(intervaloRef.current);
            setEnMarcha(false);
            return 0;
          }
        });
      }, 1000);
    }
  };

  // Pausa el temporizador
  const pausarTemporizador = () => {
    clearInterval(intervaloRef.current);
    setEnMarcha(false);
  };

  // Reinicia el temporizador
  const reiniciarTemporizador = () => {
    pausarTemporizador();
    setHoras(0);
    setMinutos(0);
    setSegundos(0);
  };

  
  return (
    <View style={styles.contenedor}>
      <Text style={styles.tiempo}>
        {`${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`}
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
        <Button title="Iniciar" onPress={iniciarTemporizador} />
        <Button title="Pausar" onPress={pausarTemporizador} />
        <Button title="Reiniciar" onPress={reiniciarTemporizador} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    alignItems: 'center',
  },
  tiempo: {
    fontSize: 48,
    color: 'white',
    marginBottom: 20,
  },
  botones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});

export default Temporizador;
