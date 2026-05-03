import { Text, View } from "react-native";
import React from "react";

const CrudCard = ({ nombre, apellido, correo, direccion, telefono }) => {
  return (
    <View>
      <Text>{nombre}</Text>
      <Text>{apellido}</Text>
      <Text>{correo}</Text>
      <Text>{direccion}</Text>
      <Text>{telefono}</Text>
    </View>
  );
};

export default CrudCard;
