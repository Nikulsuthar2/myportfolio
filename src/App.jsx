import { Navbar } from './components/Navbar'
import { Section1 } from './components/Section1'
import { Section2 } from './components/Section2'
import { Section3 } from './components/Section3'
import {Routes, Route} from 'react-router-dom';
import { Section4 } from './components/Section4'
import { Section5 } from './components/Section5'
import './components/Scrollbar.css';
import ProjectsShowCase from './components/ProjectsShowCase'


function App() {
  return (
      <Routes>
        <Route path='' element={
          <div className='flex md:flex-col flex-col overflow-hidden h-screen w-full relative'>
            <Navbar />
            <div className='w-[100%]'>
              <Section1/><Section2/><Section3/><Section4/><Section5/>
            </div>
          </div>
        }/>
        <Route 
          path='/projects'
          element={<ProjectsShowCase />}
        />
      </Routes>
  )
}

export default App
