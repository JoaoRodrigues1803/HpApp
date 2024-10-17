import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Contato from './components/Contato';
import Calendario from './components/Calendario';

const Tabs = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name='Home' component={Home} />
        <Tabs.Screen name='Sobre' component={Sobre} />
        <Tabs.Screen name='Contato' component={Contato} />
        <Tabs.Screen name='Calendario' component={Calendario} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}































