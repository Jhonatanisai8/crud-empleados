import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CrudCard from "./components/CrudCard";
import { useEmpleado } from "./hooks/useEmpleado";

export default function App() {
  const { empleados, cargando, error } = useEmpleado();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gestion de Empleados</Text>
      <Text style={styles.subTitle}>Empleados</Text>
      <Text></Text>
      <StatusBar style="auto" />
      {cargando ? (
        <ActivityIndicator style={styles.indicator}></ActivityIndicator>
      ) : (
        <FlatList
          style={styles.containerEmpleados}
          data={empleados}
          renderItem={({ item }) => (
            <CrudCard
              nombre={item.nombre}
              apellido={item.apellido}
              correo={item.correo}
              direccion={item.direccion}
              telefono={item.telefono}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.containerEmpleados}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
    alignItems: "center",
    backgroundColor: "#09f",
  },
  indicator: {
    color: "#F18F01",
    transform: [{ scale: 2 }],
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20,
    justifyContent: "center",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20,
    alignSelf: "flex-start",
  },
});
