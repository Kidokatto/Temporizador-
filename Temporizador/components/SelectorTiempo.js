import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 

const SelectorTiempo = ({ horas, setHoras, minutos, setMinutos, segundos, setSegundos }) => {
  return (
    <View style={styles.selectorContainer}>
      <View style={styles.selector}>
        <Text style={styles.label}>Horas:</Text>
        <View style={styles.pickerWrapper}>
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
      </View>

      {/* Picker para Minutos */}
      <View style={styles.selector}>
        <Text style={styles.label}>Minutos:</Text>
        <View style={styles.pickerWrapper}>
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
      </View>

      {/* Picker para Segundos */}
      <View style={styles.selector}>
        <Text style={styles.label}>Segundos:</Text>
        <View style={styles.pickerWrapper}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  selectorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 400,
    marginBottom: 20,
    padding: 10,
  },
  selector: {
    alignItems: 'center',
  },
  label: {
    color: 'white',
    fontSize: 20,
    marginBottom: 5,
    alignContent: 'flex-start'
  },
  pickerWrapper: {
    width: 100,
    height: 50,
    backgroundColor: '#333',
    borderRadius: 10,
    overflow: 'hidden', // Asegura que el Picker respete los bordes redondeados
  },
  picker: {
    width: '100%',
    height: '100%',
    color: 'white',
  },
});

export default SelectorTiempo;
