import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CrudCard = ({ nombre, apellido, correo, direccion, telefono }) => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.nombre}>
          {nombre} {apellido}
        </Text>
        <Text style={styles.email}>{correo}</Text>
        <Text style={styles.direccion}>{direccion}</Text>
        <Text style={styles.telefono}>{telefono}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    shadowColor: "#454955",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: "#F3EFF5",
    width: "90%",
  },
  nombre: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1A1A1A",
  },
  email: {
    fontSize: 16,
    color: "#1A1A1A",
  },
  direccion: {
    fontSize: 16,
    color: "#0D0A0B",
  },
  telefono: {
    fontSize: 16,
    color: "#0D0A0B",
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0D0A0B",
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#F3EFF5",
    fontWeight: "bold",
  },
});

export default CrudCard;
