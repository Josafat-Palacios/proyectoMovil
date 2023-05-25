import React from 'react';
import { View, Image, StyleSheet, Text,  TouchableOpacity } from 'react-native';


const PantallaPrincipal = ({navigation})=>{

    return(
    <View style={style.container}>
        <Image
        styles={style.Logo}
        source={require('../img/lg2.png')}
        />
      <TouchableOpacity style={style.btn} onPress={()=>navigation.navigate('PantallaMenu')}>
        <Text style={style.btnText}>Iniciar</Text>
      </TouchableOpacity>
   
    </View>
   
    )

}

export default PantallaPrincipal;


const style = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white'
    },
    Logo: {
        width: 10,
        height: 20,
    },
    btn: {
        backgroundColor: '#000000',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
      },
    btnText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
      },
})