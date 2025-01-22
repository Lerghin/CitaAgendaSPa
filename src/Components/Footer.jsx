import React from 'react'

const Footer = () => {
  return (
    <footer style={styles.footer}>
    <p>&copy:  {new Date().getFullYear()} Sistema de Citas. Todos los derechos reservados.</p>
    </footer>
  )
}

const styles = {
  footer: {
    backgroundColor: "#1e293b",
    color: '#fff',
    textAlign: 'center',
    padding: '10px 0',
    marginTop: '20px',
  }
}

export default Footer