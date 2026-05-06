import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CrudCard = ({ nombre, apellido, correo, direccion, telefono }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardInfo}>
        <Text style={styles.nombre} numberOfLines={1}>
          {nombre} {apellido}
        </Text>
        <Text style={styles.email} numberOfLines={1}>
          {correo}
        </Text>
        <Text style={styles.direccion} numberOfLines={2}>
          {direccion}
        </Text>
        <Text style={styles.telefono}>{telefono}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.buttonEdit]}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonDelete]}>
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
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    width: "100%",
    alignSelf: "center",
    marginBottom: 15,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,

    elevation: 4,
  },
  cardInfo: {
    width: "70%",
    paddingRight: 10,
  },
  nombre: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 2,
  },
  direccion: {
    fontSize: 14,
    color: "#4B5563",
    marginBottom: 4,
  },
  telefono: {
    fontSize: 15,
    color: "#2563EB",
    fontWeight: "600",
  },
  buttonContainer: {
    width: "30%",
    flexDirection: "column",
    justifyContent: "center",
    gap: 8,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  buttonEdit: {
    backgroundColor: "#111827",
  },
  buttonDelete: {
    backgroundColor: "#EF4444",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 13,
  },
});

export default CrudCard;
