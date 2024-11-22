import { BrowserRouter } from "react-router-dom"
import { About, Experience,  Hero, Navbar, Tech, Works} from './components'

const App  = () => {
  const year = new Date().getFullYear();
  return (
    <BrowserRouter>
      <div className="realitve z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar/>
            <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        {/*<Feedbacks/>*/}
        <footer className="ml-5 mr-5 pt-5">
        <p>3D-Model License: <a href="https://sketchfab.com/cmzw">"Stylized planet" by cmzw (CC-BY-4.0)</a></p>
        <p>© Christopher Holzweber {year} </p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
