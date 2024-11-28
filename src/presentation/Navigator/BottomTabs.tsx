import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { HomeScreen } from '../screens/home/HomeScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile Screen" component={ProfileScreen} />
      <Tab.Screen name="Home Screen" component={HomeScreen} />
      <Tab.Screen name="Settings Screen" component={SettingsScreen} />
    </Tab.Navigator>
  );
}