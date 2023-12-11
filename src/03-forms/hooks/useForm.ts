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

  /** el spread es como si tuviera
   * name: formData.name
   * password1: formData.password1
   * */

  return { ...formData, formData, onChange };
};

export default useForm;
