import { FormEvent } from 'react';

import { useForm } from '../hooks';
import '../styles/styles.css';

const RegisterPage = () => {
  // retornamos en el hook el spread de formData para evitar hacer:
  // const { name, email.. } = formData
  const { formData, onChange, resetForm, name, email, password1, password2 } =
    useForm({
      name: '',
      email: '',
      password1: '',
      password2: '',
    });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
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
        <button type='button' onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
