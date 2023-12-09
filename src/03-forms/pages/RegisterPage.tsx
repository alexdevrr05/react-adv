import { ChangeEvent, FormEvent, useState } from 'react';

import '../styles/styles.css';

const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password1: '',
    password2: '',
  });

  const { name, email, password1, password2 } = registerData;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRegisterData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(registerData);
  };

  return (
    <div>
      <h1>RegisterPage</h1>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Name'
          value={name}
          name='name'
          onChange={onChange}
        />
        <input
          type='email'
          placeholder='Email'
          value={email}
          name='email'
          onChange={onChange}
        />
        <input
          type='password'
          placeholder='Password'
          value={password1}
          name='password1'
          onChange={onChange}
        />
        <input
          type='password'
          placeholder='Repeat password'
          value={password2}
          name='password2'
          onChange={onChange}
        />
        <button type='submit'>Create</button>
      </form>
    </div>
  );
};

export default RegisterPage;
