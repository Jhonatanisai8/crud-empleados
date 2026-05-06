import { useEffect, useState } from "react";
import { obtenerEmpleados } from "../services/empleadoService";

export const useEmpleado = () => {
  const [empleados, setEmpleados] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmpleados = async () => {
      try {
        const data = await obtenerEmpleados();
        setEmpleados(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setCargando(false);
      }
    };
    fetchEmpleados();
  }, []);
  return { empleados, cargando, error };
};
