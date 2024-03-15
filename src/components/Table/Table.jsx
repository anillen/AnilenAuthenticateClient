import React from 'react'
import styles from './Table.module.css'

export default function Table({children}) {
  return (
    <table className={styles.smallTable}>
      {children}
    </table>
  )
}
