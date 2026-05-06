import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CrudCard from "./components/CrudCard";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CrudCard
        nombre="Jhonatan"
        apellido="Rojas"
        correo="test@gmail.com"
        direccion="Calle 123"
        telefono="123456789"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 50,
  },
});
