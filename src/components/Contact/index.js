import './index.scss'

import React, { useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import db from '../../firebase'
import { addDoc,collection } from 'firebase/firestore'
import LogoContact from './Contact-Logo';




const Contact = () => {
    const [name,setName] = useState ('')
    const [subject,setSubject] = useState('')
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')

    const handleSubmition = async () => {
        const docRef = collection(db,'Contacts')
        const payload = {name:name,email:email,subject:subject,message:message}
        // alert("Here")
        await addDoc(docRef,payload).then(()=> 
        {alert("Submition was succesful")}
        ).catch((error) => {
          alert(error.message)
        });
        // alert("Here")
    }

  return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters strArray={['C','o','n','t','a','c','t']} idx={3}/>
                </h1>
                <p>
                    I'm intersted in a remote web developer position and freelance opportunities.
                    however if you have any other requests or questions you are welcomed to contact me
                </p>

                <div className='contact-form'>
                    <form onSubmit={handleSubmition}>
                        <ul>
                            <li className='half'>
                                <input value={name} onChange={ (e)=>setName(e.target.value) }
                                 type='text' name='name' placeholder='Name' required/>
                            </li>
                            <li className='halif'>
                                <input value={email} onChange={(e)=>setEmail(e.target.value)}
                                type='email' name='email' placeholder='Email' required/>
                            </li>
                            <li>
                                <input value={subject} onChange={(e)=>setSubject(e.target.value)}
                                placeholder='Subject' type='text' name='subject' required
                                />
                            </li>
                            <li>
                                <textarea value={message} onChange={(e)=>setMessage(e.target.value)}
                                placeholder='Message' name='message' required 
                                ></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='Send'/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
           
            
        </div>
        <LogoContact />

        <Loader type='pacman'/>
    </>

  )
}

export default Contact