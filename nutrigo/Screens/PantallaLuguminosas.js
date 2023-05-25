import { StyleSheet, Text, View , ScrollView} from 'react-native';
import {AlimentoContext} from '../Context/AlimentoContext';
import { ListItem, Header } from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, {useContext} from 'react';

const PantallaLuguminosas = ({navigation}) => {
 
  const{ tablaA, setAlimento, setTablaA} = useContext(AlimentoContext);

  const eliminar =(id)=>{
    const temporal = tablaA.filter((item)=>{
        return item.id!== id;
    })
    setTablaA(temporal)
}

  return (
    <View style={styles.container}>
       <Header
            leftComponent={{icon: 'arrow-back', color: 'black', onPress:() => navigation.goBack()}}
            centerComponent={{ text: 'Luguminosas' , style: { color: 'black', fontSize:20, fontWeight: 'bold' }}}
            rightComponent={{ icon: 'add-circle-outline', color: '#fff', onPress:()=>{
                 setAlimento({
                     id:null,
                     nombre:"",
                     cantidad:"",
                     unidad:"",
                     categoria:"",
                 })   

                 navigation.navigate('PantallaAgregar',{status:"add"})

            }}}
            containerStyle={{backgroundColor:'#E9A230'}}
        />
        
        <View style={styles.headerContainer}>
        <Text style={styles.headerTextCenter}>
          Energía: 120 kcal | Grasas: 1 g
        </Text>
        <Text style={styles.headerTextCenter}>
          Hidratos de Carbono: 20 | Proteínas: 8 g
        </Text>
      </View>

      <ScrollView>
        {tablaA.length > 0 ? (
          tablaA.map((a, i) => {
            if (a.categoria === 'Leguminosas') {
              return (
                <ListItem key={i} bottomDivider>
                  <ListItem.Content style={styles.ViewContainer}>
                    <ListItem.Title>{a.nombre}</ListItem.Title>
                    <ListItem.Subtitle>
                      {a.cantidad} {a.unidad}
                    </ListItem.Subtitle>
                  </ListItem.Content>
                  <View style={styles.buttons}>
                    <Ionicons name="ios-trash" size={30} color={'red'} onPress={() => eliminar(a.id)}
                    />
                    <Ionicons name="md-create" size={30} color={'green'}
                      onPress={() => {
                        setAlimento({
                          id: a.id.toString(),
                          nombre: a.nombre,
                          cantidad: a.cantidad,
                          unidad: a.unidad,
                          categoria: a.categoria,
                        });

                        navigation.navigate('PantallaAgregar', {
                          status: 'edit',
                        });
                      }}
                    />
                  </View>
                </ListItem>
              );
            } else {
              return null;
            }
          })
        ) : (
          <Text style={{ marginTop: 50, textAlign: 'center', fontSize: 20 }}>
            Sin productos
          </Text>
        )}
      </ScrollView>
    </View>
  )
}

export default PantallaLuguminosas

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    buttons:{
        width:'25%', 
        flexDirection:'row', 
        justifyContent:'space-between'
    },
    headerText: {
        color: 'black',
        fontSize: 16,
        marginBottom: 5,
      },
    headerTextCenter: {
        color: 'black',
        fontSize: 17,
        marginBottom: 5,
        textAlign: 'center',
        fontWeight: 'bold'
      },
      headerContainer: {
        backgroundColor: '#E9A230',
        padding: 10,
        marginBottom: 10,
      }
});