import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'
import React from 'react'

const PantallaMenu = ({navigation}) => {
    return (
    <View style={style.container}>

    <Image
          source={require('../img/fonMenu.jpg')}
          style={style.backgroundImage}
        />
        <TouchableOpacity style={style.btn} onPress={()=>navigation.navigate('PantallaCuriosidades')}>
        <Text style={style.btnText}>Curiosidades</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.btn} onPress={()=>navigation.navigate('PantallaCategorias')}>
        <Text style={style.btnText}>Producto</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.btn} onPress={()=>navigation.navigate('PantallaAgregar')}>
        <Text style={style.btnText}>Agregar Producto</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PantallaMenu

const style = StyleSheet.create({
  container: {
      flex:1,
      justifyContent: 'center',
     // alignItems: 'center',
      backgroundColor:'white'
  },
  btn: {
      backgroundColor: '#48742C',
      paddingVertical: 20,
      paddingHorizontal: 20,
      marginBottom: 10,
      marginStart:20,
      marginEnd:20,
      borderRadius: 10,

    },
  btnText: {
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    backgroundImage: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      opacity: 0.2,
    },
})