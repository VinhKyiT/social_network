import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useSelector } from 'react-redux';
import { RouteConstant } from '~constants/route.constants';
import { getAuthStatusSelector } from '~redux/selectors/auth.selector';
import HomeScreen from '~screens/home/home.container';

const Stack = createNativeStackNavigator();

const AppRouter = props => {
  const isLoggedIn = useSelector(getAuthStatusSelector);
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animationEnabled: false }}>
      {isLoggedIn ? (
        <>
          <Stack.Screen
            name={RouteConstant.Home}
            component={HomeScreen}
            options={{ animationEnabled: false }}
          />
        </>
      ) : (
        <>
          <Stack.Screen name={RouteConstant.Home} component={HomeScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppRouter;
