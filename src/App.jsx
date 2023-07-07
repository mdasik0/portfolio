import './App.css'
import AboutMe from './Component/AboutMe/AboutMe'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'
import Projects from './Component/Projects/Projects'
import Skills from './Component/Skills/Skills'


function App() {

  return (
    <>
      <Header></Header>
     
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
