import Header from "./Header"
import Footer from "./Footer"

export default function Layout({children}) {
  return (
    <div>
        <Header />
        <div style={{minHeight:'700px'}}>
            {children}
        </div>
        <Footer />
    </div>
  )
}
