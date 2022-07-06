import React,{useState} from 'react'
import Cookies from 'universal-cookie'
import axios from 'axios'

import singinImage from '../assets/signup.jpg'


const initialState={
    fullName:'',
    userName:'',
    password:'',
    confirmPassword:'',
    phoneNumber:'',
    avatarURL:''
}

const Auth = () => {

    const cookies=new Cookies()

  

   const [form, setForm] = useState(initialState)

   const [isSignUp, setIsSignUp] = useState(true)

   const handleChange=(e)=>{

    setForm( {...form,[e.target.name]: e.target.value});

   
   }

    const switchMode=()=>{
        setIsSignUp((prevIsSignup)=>!prevIsSignup)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { userName, password, phoneNumber, avatarURL } = form;

        // const URL = 'http://localhost:5000/auth';
        const URL = 'https://chatapplicationgod.herokuapp.com/auth';

        const { data: { token, userId, hashedPassword, fullName } } = await axios.post(`${URL}/${isSignUp ? 'signup' : 'login'}`, {
            userName, password, fullName: form.fullName, phoneNumber, avatarURL,
        });

        cookies.set('token', token);
        cookies.set('username', userName);
        cookies.set('fullName', fullName);
        cookies.set('userId', userId);

        if(isSignUp) {
            cookies.set('phoneNumber', phoneNumber);
            cookies.set('avatarURL', avatarURL);
            cookies.set('hashedPassword', hashedPassword);
        }

        window.location.reload();
    }


  return (
    <div className='auth__form-container' >
        <div className='auth__form-container_fields' >
            <div className='auth__form-container_fields-content' >
                <p>{isSignUp ? 'Registrate' : 'Ingresa'} </p>
                <form onSubmit={handleSubmit} >
                    {isSignUp && (
                        <div className='auth__form-container_fields-content_input' >
                            <label htmlFor="fullName">Nombre Completo</label>
                            <input 
                            type="text"
                            name='fullName'
                            placeholder='Nombre completo'
                            onChange={handleChange}
                            required
                             />
                        </div>
                    )}
                       <div className='auth__form-container_fields-content_input' >
                            <label htmlFor="userName">Nombre de Usuario</label>
                            <input 
                            type="text"
                            name='userName'
                            placeholder='Nombre de usuario'
                            onChange={handleChange}
                            required
                             />
                        </div>
                        {isSignUp && (
                        <div className='auth__form-container_fields-content_input' >
                            <label htmlFor="phoneNumber">Numero de Telefono</label>
                            <input 
                            type="text"
                            name='phoneNumber'
                            placeholder='Numero de Telefono'
                            onChange={handleChange}
                            required
                             />
                        </div>
                    )}
                           {isSignUp && (
                        <div className='auth__form-container_fields-content_input' >
                            <label htmlFor="avatarURL">Url de la foto de pefil</label>
                            <input 
                            type="text"
                            name='avatarURL'
                            placeholder='Avatar URL'
                            onChange={handleChange}
                            required
                             />
                        </div>
                    )}
                    <div className='auth__form-container_fields-content_input' >
                            <label htmlFor="password">Contraseña</label>
                            <input 
                            type="password"
                            name='password'
                            placeholder='Contraseña'
                            onChange={handleChange}
                            required
                             />
                        </div>
                        {isSignUp && (
                        <div className='auth__form-container_fields-content_input' >
                        <label htmlFor="cofn">Confirma la Contraseña</label>
                        <input 
                        type="password"
                        name='confirmPassword'
                        placeholder='Confirma la contraseña'
                        onChange={handleChange}
                        required
                         />
                    </div>
                    )}
                    <div className='auth__form-container_fields-content_button' >
                        <button> {isSignUp ? 'Registrar' : 'Entrar'} </button>
                    </div>
                </form>
                <div className='auth__form-container_fields-account' >
                        <p>
                            {isSignUp
                                ?'¿Ya tienes una cuenta?'
                                :'¿No tienes una cuenta?'
                            }
                            <span onClick={switchMode}>
                                {isSignUp ? ' Ingresa':' Registrate'} 
                            </span>
                        </p>
                </div>
            </div>

        </div>
        <div className='auth__form-container_image' >
          <img src={singinImage} alt="sign in" />                  
        </div>
    </div>
  )
}

export default Auth