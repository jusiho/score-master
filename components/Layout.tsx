import Navbar from './NavBar'
import Footer from './Footer'
import style from './Layout.module.css'

type Layout = {
  children: React.ReactNode,
};

export default function Layout({ children}:Layout) {
  return (<div className={style.container}>
    <Navbar/>{children}
    <Footer/>
    </div>
  )
}