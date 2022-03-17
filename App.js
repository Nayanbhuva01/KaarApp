import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BooksScreen from './src/screens/BooksScreen';
import ShoppingKartIcon from './src/components/ShoppingKartIcon';
import CartScreen from './src/screens/CartScreen';
import {Provider as StoreProvider} from 'react-redux';
import store from './src/redux/store';

const Stack = createStackNavigator();
const App = () => {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="BooksScreen">
          <Stack.Screen
            name="Books"
            component={BooksScreen}
            options={{
              headerTitleAlign: 'center',
              headerRight: props => <ShoppingKartIcon {...props} />,
            }}
          />
          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{
              headerTitleAlign: 'center',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
};

export default App;
