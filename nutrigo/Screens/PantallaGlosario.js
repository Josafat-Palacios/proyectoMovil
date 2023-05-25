import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const PantallaGlosario = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.headerCell}>Siglas</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.headerCell}>Significado</Text>
        </View>
      </View>
    <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.cell}>Kcal</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.cell}>kilocalorías, comúnmente nombradas como calorías.</Text>
        </View>
    </View>
    <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.cell}>Cda</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.cell}>Cucharada (15 ml) = 3 cucharaditas.</Text>
        </View>
    </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.cell}>Cdita</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.cell}>Cucharadita (5 ml, aproximadamente 5 g).</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.cell}>g</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.cell}>Gramos.</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.cell}>ml</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.cell}>Mililitro.</Text>
        </View>
      </View>
      <ColorsInfo />
    </View>
  );
};

const ColorsInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Colores y su Significado:</Text>

      <View style={styles.colorsContainer}>
        <View style={[styles.colorBox, { backgroundColor: '#9F7B62' }]}>
          <Text style={styles.colorText}>Cereales</Text>
        </View>
        <View style={[styles.colorBox, { backgroundColor: '#E9A230' }]}>
          <Text style={styles.colorText}>Leguminosas</Text>
        </View>
        <View style={[styles.colorBox, { backgroundColor: '#BB271A' }]}>
          <Text style={styles.colorText}>Frutas</Text>
        </View>
        <View style={[styles.colorBox, { backgroundColor: '#5A863F' }]}>
          <Text style={styles.colorText}>Verduras</Text>
        </View>
        <View style={[styles.colorBox, { backgroundColor: '#D2CE7D' }]}>
          <Text style={styles.colorText}>Grasas</Text>
        </View>
        <View style={[styles.colorBox, { backgroundColor: '#D9D9D9' }]}>
          <Text style={styles.colorText}>Azucares</Text>
        </View>
        <View style={[styles.colorBox, { backgroundColor: '#D4ADC2' }]}>
          <Text style={styles.colorText}>Origen Animal</Text>
        </View>
        <View style={[styles.colorBox, { backgroundColor: '#319EDA' }]}>
          <Text style={styles.colorText}>Lacteos</Text>
        </View>
      </View>
    </View>
  );
};

export default PantallaGlosario;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
  },
  cell: {
    padding: 8,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'green',
    textAlign: 'center',
  },
  colorsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorBox: {
    width: 120,
    height: 35,
    margin: 4,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorText: {
    color: 'white',
    fontWeight: 'bold',
  },
  headerCell: {
    padding: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'black',
  },
});