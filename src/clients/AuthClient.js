import axios from "axios";

const obtenerToken = async () => {
  try {
    const response = await axios.get("http://localhost:8082/auth/token", {
      params: {
        username: "test",
        password: "test",
      },
    });

    console.log("RESPUESTA COMPLETA:", response);
    console.log("DATA:", response.data);
    console.log("TOKEN:", response.data.accessToken);

    return response.data;
  } catch (error) {
    console.error(
      "Error al obtener token:",
      error.response?.data || error.message,
    );
    return null;
  }
};

export const obtenerTokenFachada = async () => {
  return await obtenerToken();
};
