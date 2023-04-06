
import React from "react";
import { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [contact, setContact] = useState({});
  const [errors, setErrors] = useState({})
  const [show, setShow] = useState(false)

  const handleSubmit = (e) => {
      e.preventDefault()
      const err = onValidate(contact)
      setErrors(err)
  }

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setContact((prev)=>({
      ...prev,
      [name]: value
    }))
  }

  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  
  const onValidate = (contact) => {
    let errors = {}

    if(!contact.name.trim() || undefined){
      errors.name = 'El nombre no debe estar vacio'
    } else if(!regexName.test(contact.name) || contact.name.length < 5){
      errors.name = 'El nombre solo acepta letras, espacios y debe ser mayor a 5 caracteres'
    }
    if(!contact.email.trim()){
      errors.email = 'El email no debe estar vacio'
    } else if(!regexEmail.test(contact.email)){
      errors.email = 'El formato del email no es valido'
    }
    return errors;
  }
  console.log(errors)

  const handleClick = () => {
    setShow(()=> show? false : true)
  }
  
  
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input 
          type="text" 
          name='name'
          value={contact.name || ''}
          onChange={handleChange}
        />
        <input 
          type="text" 
          name='email'
          value={contact.email || ''}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Send</button>
      </form>
      
      {
        show && Object.keys(errors).length===0 ? 
          <p>Gracias {contact.name}, te contactaremos cuanto antes via mail</p>
          :
          <div>
            <p>{errors.name}</p>
            <p>{errors.email}</p>
          </div>
      }
    </div>
  );
};

export default Form;
