import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import './style.css'

export default function Header() {
    const reserveSize = useSelector(state => state.reserve.length)
    return (
        <header className='container'>
            <Link to='/'>
                <img className='logo' src={logo} alt='Logo Projeto'/>
            </Link>
            <Link className='reserva' to='/reservas'>
                <div>
                    <p><strong>Minhas reservas</strong></p>
                    <p><span>{reserveSize} reservas</span></p>
                </div>
            </Link>
        </header>
    )
}