import { useState } from "react"
import Body from "./components/Body"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Profile from "./components/Profile"

function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 2000);

  return (
    <>{
      loading?
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-white text-black text-3xl lg:text-5xl font-semibold text-center"><h1 className="animate-pulse mb-2">aBit</h1><span className="text-xs lg:text-base font-normal">Built with passion by Vikas Ipar.</span></div>
    :
    <div className="overflow-x-hidden">
      <Header/>
      <Hero/>
      <Profile/>
      <Body/>
      <Footer/>
    </div>
    }
    </>
  )
}

export default App
