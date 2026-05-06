import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CrudCard = ({ nombre, apellido, correo, direccion, telefono }) => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.nombre}>{nombre}</Text>
        <Text style={styles.apellido}>{apellido}</Text>
        <Text style={styles.email}>{correo}</Text>
        <Text style={styles.direccion}>{direccion}</Text>
        <Text style={styles.telefono}>{telefono}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    backgroundColor: "#f9f9f9",
    width: "80%",
  },
  nombre: {},
  apellido: {},
  email: {},
  direccion: {},
  telefono: {},
  buttonText: {},
});

export default CrudCard;
