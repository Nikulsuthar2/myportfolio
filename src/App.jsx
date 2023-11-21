import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar } from './components/Navbar'
import { Section1 } from './components/Section1'
import { Section2 } from './components/Section2'
import { Section3 } from './components/Section3'
import {Routes, Route} from 'react-router-dom';
import { ViewChatProjectScreenshot } from './components/ViewChatProjectScreenshot'
import { ViewMovieProjectScreenshot } from './components/ViewMovieProject'
import { Section4 } from './components/Section4'
import { Section5 } from './components/Section5'


function App() {
  return (
      <Routes>
        <Route path='' element={
          <div className='flex md:flex-row flex-col overflow-hidden h-screen'>
            <Navbar />
            <div className='w-[100%]'>
              <Section1/><Section2/><Section3/><Section4/><Section5/>
            </div>
          </div>
        }/>
        <Route 
          path='/chatproject'
          element={<ViewChatProjectScreenshot />}
        />
        <Route 
          path='/movieproject'
          element={<ViewMovieProjectScreenshot />}
        />
      </Routes>
  )
}

export default App
