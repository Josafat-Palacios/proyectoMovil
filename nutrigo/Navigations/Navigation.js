import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Screens
import PantallaPrincipal from '../Screens/PantallaPrincipal'
import PantallaCuriosidades from '../Screens/PantallaCuriosidades'
import PantallaCategorias from '../Screens/PantallaCategoria'
import PantallaGlosario from '../Screens/PantallaGlosario'
import PantallaSmae from '../Screens/PantallaSmae'
import PantallaMenu from '../Screens/PantallaMenu'
import PantallaAgregar from '../Screens/PantallaAgregar';

//Pantalla Categoria
import PantallaCereales from '../Screens/PantallaCereales';
import PantallaLuguminosas from '../Screens/PantallaLuguminosas';
import PantallaVerduras from '../Screens/PantallaVerduras';
import PantallaFrutas from '../Screens/PantallaFrutas'
import PantallaGrasas from '../Screens/PantallaGrasas';
import PantallaAzucares from '../Screens/PantallaAzucares';
import PantallaAnimal from '../Screens/PantallaAnimal';
import PantallaLacteos from '../Screens/PantallaLacteos';

//otros
import Ionicons from 'react-native-vector-icons/Ionicons'
import { AlimentoContext } from '../Context/AlimentoContext';
//import AlimentoProvider, { AlimentoContext } from '../Context/AlimentoContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='PantallaPrincipal'>

      <Stack.Screen name="PantallaMenu" 
          component={TabNavigator} options={{
            title: 'Menu',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign: 'center',
            },
          }} 
          />

      <Stack.Screen name="PantallaCategorias" component={PantallaCategorias} 
          options={{
            title: 'Categorias',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign: 'center',
            },
      }}/>
      <Stack.Screen name="PantallaCuriosidades" component={PantallaCuriosidades} 
        options={{
          title: 'Curiosidades',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
          },
    }}
      />
      
      <Stack.Screen name="PantallaAgregar" component={PantallaAgregar}
      options={{
        title: 'Pantalla Agregar',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
        },
  }}/>
        
      <Stack.Screen name="PantallaPrincipal" component={PantallaPrincipal} options={{
            headerShown: false,
          }} />

      <Stack.Screen name="PantallaCereales" component={PantallaCereales}
      options={{
        headerShown: false,
      }}/>  
      <Stack.Screen name="PantallaLuguminosas" component={PantallaLuguminosas}
      options={{
        headerShown: false,
      }}/>      
      <Stack.Screen name="PantallaFrutas" component={PantallaFrutas} 
      options={{
        headerShown: false,
      }}/>  
      <Stack.Screen name="PantallaVerduras" component={PantallaVerduras} 
        options={{
          headerShown: false,
        }}/>
      <Stack.Screen name="PantallaGrasas" component={PantallaGrasas}
      options={{
        headerShown: false,
      }}/>   
      <Stack.Screen name="PantallaAzucares" component={PantallaAzucares} 
      options={{
        headerShown: false,
      }}/>  
      <Stack.Screen name="PantallaAnimal" component={PantallaAnimal}
      options={{
        headerShown: false,
      }}/> 
      <Stack.Screen name="PantallaLacteos" component={PantallaLacteos}
      options={{
        headerShown: false,
      }}/> 


    </Stack.Navigator>
  )
};



//AQUI INICIA LA NAVEGACION POR TAB

const TabNavigator =()=>{
  return (
    <Tab.Navigator
      initialRouteName="Menu"
      screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:'#00AD00',
        tabBarInactiveTintColor: "#607D8B",
        tabBarLabelStyle:{
          fontSize:14
        }
      }}
      >
      <Tab.Screen name="PantallaGlosario" component={PantallaGlosario} 
        options={{
          title: 'Glosario',
          tabBarLabel:"Glosario",
          tabBarIcon:({color})=>(
            <Ionicons name={'ios-book-outline'} size={30} color={color}/>
          )
        }}
      />
      <Tab.Screen name="Menu" component={PantallaMenu} 
        options={{
          tabBarLabel:"Menu",
          tabBarIcon:({color})=>(
            <Ionicons name={'ios-home-outline'} size={30} color={color}/>
          )
        }}
      />


      <Tab.Screen name="PantallaSmae" component={PantallaSmae} 
        options={{
          tabBarLabel:"SMAE",
          tabBarIcon:({color})=>(
            <Ionicons name={'ios-nutrition-outline'} size={30} color={color}/>
          )
        }}
      />

    </Tab.Navigator>
  )
};

export default Navigation = () => {
  return (
    <StackNavigation/>
  );
};
