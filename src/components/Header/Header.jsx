import React from 'react'
import styles from './Header.module.css';
export default function Header() {
    return (
    <header>
        <div>{new Date().toLocaleDateString()}</div>
    </header>
  )
}
