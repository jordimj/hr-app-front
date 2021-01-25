import { useState } from 'react';

export const useForm = (initialState = {}, onSubmit) => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetValues = () => {
    setFormData(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(formData);
    resetValues();
  };

  return { formData, handleInputChange, handleSubmit };
};
