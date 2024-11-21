// src/components/Form/Form.jsx
import React, { useContext, useState } from 'react';
import FormContext from '../../context/FormContext';
import { createPerson } from '../../services/personService';
import { FormContainer, Label, Input, Select, Button, ErrorText } from './Form.styles'; // Estilos personalizados

const Form = () => {
  const { formData, updateFormData } = useContext(FormContext);
  const [fileError, setFileError] = useState(null);
  const [formError, setFormError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFormData(name, value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file && (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'application/pdf') && file.size <= 5000000) {
      console.log('file', file)
      updateFormData('file', file);
      setFileError(null);
    } else {
      setFileError('El archivo debe ser PNG, JPG o PDF y no debe superar los 5 MB.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.document || !formData.birthDate || !formData.address || !formData.phone || !formData.email || !formData.gender) {
      setFormError('Todos los campos son obligatorios.');
      return;
    }
    const {document} = formData;
    formData.document = Number(document);

    try {
      // const formDataToSend = new FormData();
      // Object.keys(formData).forEach((key) => formDataToSend.append(key, formData[key]));
      console.log('formDataToSend',formData)
      await createPerson(formData);
      window.location.href = '/success';
    } catch (error) {
      setFormError('Hubo un error al registrar la persona.');
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label>
        Nombre completo:
        <Input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          required
        />
      </Label>

      <Label>
        Documento de identificación:
        <Input
          type="number"
          name="document"
          value={formData.document}
          onChange={handleInputChange}
          required
        />
      </Label>

      <Label>
        Fecha de nacimiento:
        <Input
          type="date"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleInputChange}
          required
        />
      </Label>

      <Label>
        Dirección:
        <Input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
        />
      </Label>

      <Label>
        Número de teléfono:
        <Input
          type="number"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
      </Label>

      <Label>
        Correo electrónico:
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </Label>

      <Label>
        Género:
        <Select
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
          required
        >
          <option value="">Seleccione</option>
          <option value="male">Masculino</option>
          <option value="female">Femenino</option>
        </Select>
      </Label>

      <Label>
        Foto o archivo:
        <Input
          type="file"
          onChange={handleFileChange}
          required
        />
        {fileError && <ErrorText>{fileError}</ErrorText>}
      </Label>

      {formError && <ErrorText>{formError}</ErrorText>}
      <Button type="submit">Registrar</Button>
    </FormContainer>
  );
};

export default Form;
