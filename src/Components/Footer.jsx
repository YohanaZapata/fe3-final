import React from 'react'
import logo from '../imagenes/DH.png'
import { useContextGlobal } from './utils/global.context'

const Footer = () => {
  const {themeState} = useContextGlobal();
  return (
    <footer className={themeState.theme}>
        <p>Powered by</p>
        <img src={logo} alt='DH-logo' />
    </footer>
  )
}

export default Footer
