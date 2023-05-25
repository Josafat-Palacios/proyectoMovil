import {TextInput, View, StyleSheet, Text, Image} from 'react-native';
import React, {useContext} from 'react';
import { Button } from '@rneui/themed';
import {Picker} from '@react-native-picker/picker';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {AlimentoContext} from '../Context/AlimentoContext';
import Constants from 'expo-constants';
import {firebase} from '../Settings/ConfigFirebase';
import { ref, update } from 'firebase/database';


export default function PantallaAgregar({route,navigation}){
    const {status} = route.params;
    const{alimento, tablaA, setAlimento, setTablaA} = useContext(AlimentoContext);

  return (
    <View style={styles.container}>
        <Image
          source={require('../img/fonMenu.jpg')}
          style={styles.backgroundImage}
        /> 
    <Text style={styles.header}>Alimentos</Text>

    <Formik
        initialValues={alimento}

        onSubmit={(values,{resetForm})=>{

            update(ref(firebase, 'Alimentos/' + alimento.id), alimento)
            .then(() => {
                alert("Enviado")
            })

            const temporal = tablaA.filter(al=>al.id!=alimento.id);
           // alert('enviado')
            setTablaA([...temporal,alimento]);
            resetForm({
                id:"",
                nombre:"",
                cantidad:"",
                unidad:"",
                categoria:""
            })
                navigation.goBack();
          //  console.log(tablaA)
           // alert(tablaA) 
        }}
        validate={(values)=>{
            setAlimento(values);
            //console.log(alumno)
        }}

    >
    {
        ({handleChange, handleBlur, handleSubmit, setFieldValue, handleReset, values})=>(
            <View>
                <TextInput
                    style={styles.textinput}
                    onChangeText={handleChange('id')}
                    onBlur={handleBlur('id')}
                    placeholder="ID"
                    value={values.id}
                    editable={status=="add"?true:false}
                />

                <TextInput
                    style={styles.textinput}
                    onChangeText={handleChange('nombre')}
                    onBlur={handleBlur('nombre')}
                    placeholder="Nombre"
                    value={values.nombre}                        

                />

                <TextInput
                    style={styles.textinput}
                    onChangeText={handleChange('cantidad')}
                    onBlur={handleBlur('cantidad')}
                    placeholder="Cantidad"
                    value={values.cantidad}                        

                />    


                <View style={styles.picker}>
                    <Picker
                        mode="dialog"
                        style={{height:40, backgroundColor:'white'}}
                        selectedValue={values.unidad }
                        onValueChange={ (v)=>
                            setFieldValue('unidad',v)
                        }
                    >
                        <Picker.Item label="Unidad" value="Unidad" />
                        <Picker.Item label="Pieza" value="Pieza"/>
                        <Picker.Item label="Taza" value="Taza"/>
                        <Picker.Item label="Cucharada" value="Cucharada"/>
                        <Picker.Item label="Chucharadita" value="Chucharadita"/>
                        <Picker.Item label="Rebanada" value="Rebanada" />
                        <Picker.Item label="g" value="g" />
                    </Picker>
                </View>         

                <View style={styles.picker}>
                    <Picker
                        mode="dialog"
                        style={{height:40, backgroundColor:'white'}}
                        selectedValue={values.categoria}
                        onValueChange={ (v)=>
                            setFieldValue('categoria',v)
                        }
                    >
                        <Picker.Item label="categoria" value="categoria" />
                        <Picker.Item label="Cereales" value="Cereales" />
                        <Picker.Item label="Leguminosas" value="Leguminosas"/>
                        <Picker.Item label="Frutas" value="Frutas"/>
                        <Picker.Item label="Verduras" value="Verduras"/>
                        <Picker.Item label="Grasas" value="Grasas" />
                        <Picker.Item label="Azucares" value="Azucares" />
                        <Picker.Item label="Origen Animal" value="Animal" />
                        <Picker.Item label="Lacteos" value="Lacteos" />
                    </Picker>
                </View>

                <View style={{marginTop:20}}>
                    <Button
                        buttonStyle={styles.buttons}
                        onPress={handleSubmit}
                        title="Enviar"
                    />
                    {
                        status==="add"
                        &&
                        <Button
                            buttonStyle={styles.buttons2}
                            onPress={handleReset}
                            title="Limpiar"
                        />
                    }
                </View>
            </View>
        )}    
    </Formik>

</View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      margin:0,      
      marginTop:Constants.statusBarHeight
   
    },
    texterror:{
      color:'red',
      paddingLeft:15,
    },
    textinput:{
      borderRadius:8, 
      height: 40, 
      borderColor: 'gray', 
      borderWidth: 1, 
      margin:10, 
      paddingLeft:12, 
      backgroundColor:'white',
      elevation: 5,
    },
    buttons:{
      backgroundColor:'green', 
      color:'black', 
      marginTop:10, 
      borderRadius:8
    },
    buttons2:{
        backgroundColor:'#319EDA', 
        color:'black', 
        justifyContent:'center',
        marginTop:10, 
        borderRadius:10
      },

    header:{
      fontSize:25,
      fontWeight: 'bold', 
      textAlign:'center', 
      marginBottom:40,
    },
    picker:{
      margin:5, 
      borderRadius: 10, 
      borderWidth: 1, 
      borderColor: 'black', 
      overflow: 'hidden',
      elevation: 5,
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        opacity: 0.3,
      }
  
  });
  