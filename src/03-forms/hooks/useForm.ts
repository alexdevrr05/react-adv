import { ChangeEvent, useState } from 'react';

const useForm = () => {
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password1: '',
    password2: '',
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRegisterData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return { registerData, onChange };
};

export default useForm;
