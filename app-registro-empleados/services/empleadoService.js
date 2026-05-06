import { API_URL } from "../api/api";

export const obtenerEmpleados = async () => {
  const response = await fetch(API_URL + "/api/employees");
  if (!response.ok) {
    throw new Error("Error al obtener usuarios");
  }

  return await response.json();
};

