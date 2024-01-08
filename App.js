
import react, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import 'react-native-gesture-handler';
import authContext from './components/authContext';
import MainStack from './components/MainStack';
import CreateStack from './components/CreateStack';
import Login from './components/Login';
import Account from './components/Account';

const App = () => {
  const [authenticated, setAuthenticated] = useState({
    userData: {userId: 'EPKluCZG7hYL0wtzcyrt', firstName: 'Lea', lastName: 'Suomalainen'},
    loggedIn: true
  });
  const Tab = createBottomTabNavigator();

  return (
    <authContext.Provider value={{ authenticated, setAuthenticated }}>
      <NavigationContainer>
        <Tab.Navigator 
          screenOptions={{ 
            headerShown: false, 
            tabBarStyle: {backgroundColor: '#333131'},
            tabBarActiveTintColor: 'red'
          }}
        >
          <Tab.Screen 
            name="Hem" 
            component={MainStack}
            options={{
              headerBackTitleVisible: false, 
              tabBarIcon: ({ color, size }) => (
                <IconFA name="home" color={color} size={size} />
              )
            }}
          />
          {authenticated.loggedIn ? (
            <>
              <Tab.Screen 
                name="Ny annons" 
                component={CreateStack}
                options={{
                  headerBackTitleVisible: false, 
                  tabBarIcon: ({ color, size }) => (
                    <IconFA name="plus-square-o" color={color} size={size} />
                  )
                }}
              />
              <Tab.Screen 
                name="Mitt konto" 
                component={Account}
                options={{
                  headerBackTitleVisible: false, 
                  tabBarIcon: ({ color, size }) => (
                    <IconMCI name="account-circle-outline" color={color} size={size} />
                  )
                }}
              />
            </>
          ) : (
            <>
              <Tab.Screen 
                name="Logga in" 
                component={Login}
                options={{
                  headerBackTitleVisible: false, 
                  tabBarIcon: ({ color, size }) => (
                    <IconMCI name="account-circle-outline" color={color} size={size} />
                  )
                }}
              />
            </>
          )}
        </Tab.Navigator>
      </NavigationContainer>
    </authContext.Provider>
  );
}

export default App