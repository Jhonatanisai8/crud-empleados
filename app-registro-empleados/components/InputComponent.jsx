import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { Component } from "react";

const InputComponent = ({ titulo, placeholder, value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>
      <TextInput
        style={styles.inputContainer}
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "flex-start",
    marginBottom: 15,
  },
  titulo: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 5,
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderColor: "#000",
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,

    elevation: 4,
  },
});

export default InputComponent;
