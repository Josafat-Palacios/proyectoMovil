import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import React from 'react'

const PantallaCategoria = ({navigation}) => {
  const categoria = [
    { id: 1, image: require('../img/maize.png'), text: 'Cereales',  },
    { id: 2, image: require('../img/frijoles.png'), text: 'Leguminosas' },
    { id: 3, image: require('../img/frutas.png'), text: 'Frutas' },
    { id: 4, image: require('../img/verdura.png'), text: 'Verduras' },
    { id: 5, image: require('../img/aguacate.png'), text: 'Grasas' },
    { id: 6, image: require('../img/miel.png'), text: 'Azucares' },
    { id: 7, image: require('../img/carne.png'), text: 'Origen Animal' },
    { id: 8, image: require('../img/leche.png'), text: 'Lacteos' },
  ];

  const handlePress = (id) => {
    if (id === 1) {
      navigation.navigate('PantallaCereales');
    }else if (id === 2) {
      navigation.navigate('PantallaLuguminosas');
    }else if (id === 3) {
      navigation.navigate('PantallaFrutas');
    }else if (id === 4) {
      navigation.navigate('PantallaVerduras');
    }else if (id === 5) {
      navigation.navigate('PantallaGrasas');
    }else if (id === 6) {
      navigation.navigate('PantallaAzucares');
    }else if (id === 7) {
      navigation.navigate('PantallaAnimal');
    }else if (id === 8) {
      navigation.navigate('PantallaLacteos');
    }
  };


  return (
      <View style={styles.container}>
      <View style={styles.gridContainer}>
        {categoria.map(categoria => (
          <TouchableOpacity
            key={categoria.id}
            style={styles.itemContainer}
            onPress={() => handlePress(categoria.id)}
          >
            <Image source={categoria.image} style={styles.image} />
            <Text style={styles.text}>{categoria.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

export default PantallaCategoria;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white'
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  itemContainer: {
    width: '40%',
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  text: {
    marginTop: 10,
    textAlign: 'center',
  },
});