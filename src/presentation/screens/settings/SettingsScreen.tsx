import { Pressable, Text, View } from "react-native";
import { styles } from "../../../config/app-theme";
import { useCounterStore } from "../../store/counter-store";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

export const SettingsScreen = () => {

  const count = useCounterStore(state => state.count)
  const setCount = useCounterStore(state => state.incrementBy)

  const navigation = useNavigation();

  useEffect(()=> {
    navigation.setOptions({
      title: `Contador: ${count}`
    })
  })

  return (
    <View style = { { flex: 1,  alignItems: "center"}}>
      <Text style = {styles.title}>Count:  {count}</Text>
      <Pressable
        onPress={()=> setCount(+1)}
      >
        <Text style={styles.primaryButton}>+1</Text>
      </Pressable>
      <Pressable
        onPress={()=> setCount(-1)}
        >
        <Text style={styles.primaryButton}>-1</Text>
      </Pressable>
    </View>
  );
}
