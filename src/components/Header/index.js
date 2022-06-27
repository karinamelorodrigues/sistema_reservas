import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import './style.css'

export default function Header() {
    return (
        <header className='container'>
            <Link to='/'>
                <img className='logo' src={logo} alt='Logo Projeto'/>
            </Link>
            <Link className='reserva' to='/reservas'>
                <div>
                    <p><strong>Minhas reservas</strong></p>
                    <p><span>3 reservas</span></p>
                </div>
            </Link>
        </header>
    )
}