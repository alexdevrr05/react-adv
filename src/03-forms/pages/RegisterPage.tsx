import { FormEvent } from 'react';

import { useForm } from '../hooks';
import '../styles/styles.css';

const RegisterPage = () => {
  // retornamos en el hook el spread de formData para evitar hacer:
  // const { name, email.. } = formData
  const {
    formData,
    onChange,
    resetForm,
    isValidEmail,
    name,
    email,
    password1,
    password2,
  } = useForm({
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
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          type='email'
          placeholder='Email'
          value={email}
          name='email'
          onChange={onChange}
          className={`${!isValidEmail(email) && 'has-error'}`}
        />
        {!isValidEmail(email) && <span>El email no es válido</span>}
        <input
          type='password'
          placeholder='Password'
          value={password1}
          name='password1'
          onChange={onChange}
        />
        {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && (
          <span>La contraseña tiene que tener al menos 6 letras</span>
        )}
        <input
          type='password'
          placeholder='Repeat password'
          value={password2}
          name='password2'
          onChange={onChange}
        />
        {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password2.trim().length > 0 && password1 !== password2 && (
          <span>Las contraseñas deben de coincidir</span>
        )}
        <button type='submit'>Create</button>
        <button type='button' onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
