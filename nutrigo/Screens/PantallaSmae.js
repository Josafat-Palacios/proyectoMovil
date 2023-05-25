import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'

const PantallaSmae = () => {
  return (
    <View style={styles.container}> 
     <Image
          source={require('../img/glosa.jpg')}
          style={styles.backgroundImage}
        />
    <Text style={styles.title}>¿QUÉ ES EL SISTEMA DE EQUIVALENCIA DE ALIMENTOS?</Text>
    <Text style={styles.content}>El Sistema de Equivalentes es un método útil para el diseño de planes de alimentación normales, modificados y personalizados; en especial para las personas que necesitan controlar la ingestión de nutrimentos para obtener un peso corporal saludable.</Text>
  </View>
  )
}

export default PantallaSmae;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
  },
  title: {
    fontWeight: 'bold',
    color: 'green',
    fontSize: 25,
    marginBottom: 20,
    textAlign: 'center',
  },
  content: {
    textAlign: 'justify',
    textAlignVertical: 'center',
    paddingHorizontal: 20,
    fontSize: 20,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.2,
  },
});