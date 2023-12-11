import { ChangeEvent, useState } from 'react';

// T = lo que sea que venga en las props "initState"
const useForm = <T>(initState: T) => {
  const [formData, setFormData] = useState(initState);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  /** {...initState} es una forma más segura de garantizar
   *  que React siempre detecte el cambio en el estado,
   *  ya que se crea una nueva referencia de objeto */
  const resetForm = () => {
    setFormData({ ...initState });
  };

  const isValidEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  /** el spread es como si tuviera
   * name: formData.name
   * password1: formData.password1
   * */

  return { ...formData, formData, onChange, resetForm, isValidEmail };
};

export default useForm;
