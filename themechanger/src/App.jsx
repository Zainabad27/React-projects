import { useState ,useEffect} from 'react'
import { Themeprovider } from './contexts/themecontext.js'
import Card from './components/Card.jsx';
import ThemeBtn from './components/buttton.jsx';
import './App.css'

function App() {
  const [theme, settheme] = useState("light");

  const darktheme=()=>{
    settheme("dark");
  };
  const lighttheme=()=>{
    settheme("light");
  };

  useEffect(()=>{
    document.querySelector("html").classList.remove("light","dark");
    document.querySelector("html").classList.add(theme);
  },[theme])



  return (
    <>
      <Themeprovider value={{ theme, darktheme, lighttheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
             <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card/>
            </div>
          </div>
        </div>
      </Themeprovider>
    </>
  )
}

export default App
