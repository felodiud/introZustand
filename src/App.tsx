import { NavigationContainer } from '@react-navigation/native';
import { BottomTabs } from './presentation/Navigator/BottomTabs';

export const App = () => {

  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};
