// src/services/personService.js
import { instanceAxios } from '../axios';

// Crear una persona
export const createPerson = async (personData) => {
  try {
    console.log('personData', personData)
    const response = await instanceAxios.post('api/person', personData); 
  
    return response.data;
  } catch (error) {
    console.error('Error al crear la persona:', error);
    throw error;  
  }
};

// // Obtener todas las personas
// export const getAllPersons = async () => {
//   try {
//     const response = await instanceAxios.get('api/person');  // Suponiendo que tienes un endpoint GET para obtener personas
//     return response.data;
//   } catch (error) {
//     console.error('Error al obtener las personas:', error);
//     throw error;
//   }
// };

// // Obtener una persona por ID
// export const getPersonById = async (id) => {
//   try {
//     const response = await instanceAxios.get(`api/person/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error(`Error al obtener la persona con ID ${id}:`, error);
//     throw error;
//   }
// };
