import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 

const SelectorTiempo = ({ horas, setHoras, minutos, setMinutos, segundos, setSegundos }) => {
  return (
    <View style={styles.selectorContainer}>
      <View style={styles.selector}>
        <Text style={styles.label}>Horas:</Text>
        <Picker
          selectedValue={horas}
          style={styles.picker}
          onValueChange={(itemValue) => setHoras(itemValue)}
        >
          {Array.from({ length: 24 }, (_, index) => (
            <Picker.Item key={index} label={`${index}`} value={index} />
          ))}
        </Picker>
      </View>

      <View style={styles.selector}>
        <Text style={styles.label}>Minutos:</Text>
        <Picker
          selectedValue={minutos}
          style={styles.picker}
          onValueChange={(itemValue) => setMinutos(itemValue)}
        >
          {Array.from({ length: 60 }, (_, index) => (
            <Picker.Item key={index} label={`${index}`} value={index} />
          ))}
        </Picker>
      </View>

      <View style={styles.selector}>
        <Text style={styles.label}>Segundos:</Text>
        <Picker
          selectedValue={segundos}
          style={styles.picker}
          onValueChange={(itemValue) => setSegundos(itemValue)}
        >
          {Array.from({ length: 60 }, (_, index) => (
            <Picker.Item key={index} label={`${index}`} value={index} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  selectorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  selector: {
    alignItems: 'center',
  },
  label: {
    color: 'white',
  },
  picker: {
    width: 100,
    height: 50,
    color: 'white',
    backgroundColor: '#333',
  },
});

export default SelectorTiempo;
