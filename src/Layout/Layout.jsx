

import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const Layout = () => {
  return (
     <div style={styles.container}>
         <Navbar/>

       <main style={styles.main}>


       <Outlet/>

       </main>

       <Footer/>



     </div>
  )
}
const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
       
    },
    main: {
        flex: 1,
        padding: "20px",
    }
}
export default Layout