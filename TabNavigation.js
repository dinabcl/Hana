import {createBottomTabNavigator} from '@react-navigaton/bottom-tabs';
import { AboutStackNavigator } from "./StackNavigator2";
import {MaterialCommunityIcons} from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
            tabBarOptions = {{
                activeTintColor: 'white',
                inactiveTintColor: 'lightgray',
                style: {
                    backgroundColor: '#FF6347',
                },
                labelStyle: {
                    fontSize: 12,
                }
            }}
        > 
        <Tab.Screen
             name = 'Home'
             component = {{
                tabBarLabel: 'Home',
                tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name="home" size={26} color={color} ></MaterialCommunityIcons>
                )
             }}
        />
        <Tab.Screen
        name = "About"
        component = {AboutStackNavigator}
        options={{
            tabBarLabel:'About',
            tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="video-stabilization" size={26} color={color} ></MaterialCommunityIcons>
            )
        }}
        />
        </Tab.Navigator>


    );
}

export default BottomTabNavigator;