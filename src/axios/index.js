// src/axios/index.js
import axios from 'axios';

// Crear una instancia de axios con la configuración predeterminada
export const instanceAxios = axios.create({
  baseURL: `${process.env.REACT_APP_ENDPOINT}/`, 
  headers: {
    'Content-Type': 'application/json',  
  },
});
