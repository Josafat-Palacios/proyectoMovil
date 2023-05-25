import { View, Image, Text, StyleSheet } from 'react-native';
import React from 'react'

const PantallaCuriosidades = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Datos del día</Text>
      </View>
      <View style={styles.rectangle}>
        <Image
          source={require('../img/nutricion.png')}
          style={styles.image}
        />
        <Text style={styles.text}>La obesidad y el sobrepeso son problemas distintos. Podrías pensar que son dos cosas iguales e intercambiables, pero en realidad son dos entidades diferentes.</Text>
      </View>
      <View style={styles.rectangle}>
        <Image
          source={require('../img/bananaIma.png')}
          style={styles.image}
        />
        <Text style={styles.text}>El plátano es un excelente aliado a la hora de mantener o aumentar el buen humor y mejorar el estado de ánimo.</Text>
      </View>
      <View style={styles.rectangle}>
        <Image
          source={require('../img/lecheImg.png')}
          style={styles.image}
        />
        <Text style={styles.text}>La leche alivia la sensación de caliente y picante: cuando ingieres algo muy picante, lo mejor es tomar leche para aliviar ese ardor.</Text>
      </View>
    </View>
  )
}

export default PantallaCuriosidades;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    width: '100%',
    height: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  rectangle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
    width: '80%',
    height: '20%',
    backgroundColor: '#FFAA20',
  },
  image: {
    width: 60,
    height: 90,
    marginRight: 10,
  },
  text: {
    flex: 1,
    fontSize: 16,
  },
});