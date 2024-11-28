import { Pressable, Text, View } from "react-native";
import { styles } from "../../../config/app-theme";
import { useProfileStore } from "../../store/Profile-store";
import { useState } from "react";

export const ProfileScreen = () => {
  
  const name = useProfileStore(state => state.name)
  const email = useProfileStore(state => state.email)
  const changeProfile = useProfileStore( state => state.changeProfile)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{email}</Text>
      <Pressable 
        style ={ styles.primaryButton}
        onPress={() => useProfileStore.setState({ name: "John doe"})}
        >
        <Text>
          Cambiar nombre
        </Text>
      </Pressable>
      <Pressable 
        style ={ styles.primaryButton}
        onPress={() => useProfileStore.setState({ email: "email@email.com"})}
        >
        <Text>
          Cambiar nombre
        </Text>
      </Pressable>
      <Pressable 
        style ={ styles.primaryButton}
        onPress={() => changeProfile('john doe', 'johndoeeaeae@email.com')}
        >
        <Text>
          Cambiar nombre
        </Text>
      </Pressable>
    </View>
  );
}
