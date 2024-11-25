
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './StackNavigator';
import BottomTabNavigator from './TabNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator></MainStackNavigator>
      <BottomTabNavigator></BottomTabNavigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
