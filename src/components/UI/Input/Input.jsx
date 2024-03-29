import React from 'react'
import styles from './Input.module.css'

export default function Input({placeholder, ...props}) {
  return (
    <input className={styles.input} placeholder={placeholder} {...props}/>
  )
}
