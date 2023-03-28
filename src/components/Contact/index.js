import './index.scss'

import React from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

const Contact = () => {
  return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters strArray={['C','o','n','t','a','c','t']} idx={3}/>
                </h1>
                <p>
                    I'm intersted in a remote web developer position and freelance opportunities.
                    however if you have any other requests or questions 
                    feel free to contact me
                </p>

                <div className='contact-form'>
                    <form>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required/>
                            </li>
                            <li className='halif'>
                                <input type='email' name='email' placeholder='Email' required/>
                            </li>
                            <li>
                                <input placeholder='Subject'
                                type='text'
                                name='subject'
                                required
                                />
                            </li>
                            <li>
                                <textarea 
                                placeholder='Message'
                                name='message'
                                required 
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

        <Loader type='pacman'/>
    </>

  )
}

export default Contact