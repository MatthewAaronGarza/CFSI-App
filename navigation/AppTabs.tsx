import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppBar from '../components/AppBar';
import Account from '../screens/Account';
import Chat from '../screens/Chat';
import Events from '../screens/Events';
import Home from '../screens/Home';
import Map from '../screens/Map';

const Tab = createBottomTabNavigator();

const AppTabs = () => {
    return (
        <Tab.Navigator
        // initialRouteName="Home"
        screenOptions={{
          header: () => <AppBar />,
          headerTintColor: 'white',
          // headerStyle: { backgroundColor: '#fc4a2b' },
          tabBarActiveBackgroundColor: '#cc6060',
          tabBarActiveTintColor: 'white'
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({color, focused}) => (
              <Ionicons name={"home"} size={24} color={focused ? "white" : "black"} />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={"chatbubble"} size={24} color={focused ? "white" : "black"} />
            ),
          }}
        />
        <Tab.Screen
          name="Map"
          component={Map}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={"map"} size={24} color={focused ? "white" : "black"} />
            ),
          }}
        />
        <Tab.Screen
          name="Events"
          component={Events}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={"notifications"} size={24} color={focused ? "white" : "black"} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={"person-circle-outline"} size={24} color={focused ? "white" : "black"} />
            ),
          }}
        />
      </Tab.Navigator>
    );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default AppTabs;