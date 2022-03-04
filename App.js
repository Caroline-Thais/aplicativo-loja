import React, { Component} from 'react';

/* Importamos os recursos necessarios para nossa navegação */
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Icon  from 'react-native-vector-icons/Ionicons'

/* Importamos nossas páginas criadas para inserir dentro da navegação */
import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Produtos from './src/pages/Produtos';
import Pagamentos from './src/pages/Pagamentos';


/* Criamos nosso navegador com a variavel Stack */
const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    name: 'ios-home'
  },
  Sobre: {
    name: 'ios-people'
  },
  Produtos: {
    name: 'list'
  },
  Pagamentos: {
    name: 'ios-card'
  }
};

function App() {
  return(
    /* Abre container da navegação */
    <NavigationContainer>
      {/* Insere a navegação Stack dentro container */}
      <Tab.Navigator
         screenOptions={ ({route}) => ({
          tabBarIcon: ({ color, size }) => {
            const { name } = icons[route.name];
            return <Icon name={name} color={color} size={size} />
          }
        })  }
      >


          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Produtos" component={Produtos} />
          <Tab.Screen name="Sobre" component={Sobre} />
          <Tab.Screen name="Pagamentos" component={Pagamentos} />


        </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;