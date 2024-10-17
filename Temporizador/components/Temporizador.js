import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import SelectorTiempo from './SelectorTiempo';

const Temporizador = () => {
  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [enMarcha, setEnMarcha] = useState(false);
  const intervaloRef = useRef(null);

  // Calcula el tiempo total en segundos
  const calcularTiempoTotal = () => horas * 3600 + minutos * 60 + segundos;


 // Función para iniciar el temporizador
const iniciarTemporizador = () => {
  if (calcularTiempoTotal() > 0 && !enMarcha) {
    setEnMarcha(true);
    intervaloRef.current = setInterval(() => {
      setSegundos((prevSegundos) => {
        // Si hay segundos restantes, simplemente decrementa
        if (prevSegundos > 0) return prevSegundos - 1;

        // Si no hay segundos, revisa los minutos
        if (minutos > 0) {
          setMinutos((prevMinutos) => prevMinutos - 1);
          return 59; // Resetea los segundos a 59
        }

        // Si no hay minutos, revisa las horas
        if (horas > 0) {
          setHoras((prevHoras) => prevHoras - 1);
          setMinutos(59); // Resetea los minutos a 59
          return 59; // Resetea los segundos a 59
        }

        // Si se llega aquí, el tiempo se ha agotado
        clearInterval(intervaloRef.current);
        setEnMarcha(false);
        return 0; // Se asegura de que los segundos queden en 0
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

  


  // Limpieza del intervalo al desmontar el componente
  useEffect(() => {
    return () => clearInterval(intervaloRef.current);
  }, []);

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
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    
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
    marginLeft: 1,
    justifyContent: 'space-around',
    alignItems: 'center', // Alinea verticalmente los botones dentro del contenedor
  },
  boton: {
    backgroundColor: '#6200ee',
    width: 98, // Ancho fijo para el botón
    height: 50, // Alto fijo para el botón
    justifyContent: 'center', // Centra el texto verticalmente
    alignItems: 'center', // Centra el texto horizontalmente
    borderRadius: 10,
  },
  textoBoton: {
    color: 'white',
    fontSize: 18,
  },
});

export default Temporizador;
