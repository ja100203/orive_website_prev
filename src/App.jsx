import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '../src/Components/Navbar/Navbar'
import Footer from '../src/Components/Footer/Footer'
import HomePage from '../src/Components/HomePage/HomePage'
import Who from '../src/Components/WhoWeAre/who'
import Journal from '../src/Components/Journal/Journal'
import ReachUs from '../src/Components/ReachUs/ReachUs'
import JournalDetails from '../src/Components/JournalDetails/Journal'
import RiceMill from './Components/RiceMill/riceMill'
import HRM from '../src/Components/HRM/hrms'
import ERP from '../src/Components/Resources/Erp/Erp'
import SMS from '../src/Components/School/school'
import LMS from '../src/Components/LMS/Lms'
import IMS from '../src/Components/IMS/ims'

import Career from '../src/Components/Career/career'
import Apply from '../src/Components/Career/apply'
import { useState } from 'react'
import './index.css'
// import { preLoaderAnim } from "../src/Components/animation/animation.js";
// import { Radio } from "react-loader-spinner";
function App() {
  useEffect(() => {
    // preLoaderAnim();
  }, [])
  const [getCard, setGetCard] = useState(0)
  const [okModalOpen, setOkModalOpen] = useState(false)
  return (
    <>
      {/* <div className="preloader">
    <div className='texts-container'>
    <Radio
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="radio-loading"
  wrapperStyle={{}}
  wrapperClass=""
  
  />

</div>
    </div> */}

      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/who" element={<Who />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/reachus" element={<ReachUs />} />
        <Route path="/journalDetails" element={<JournalDetails />} />
        <Route path="/ricemill" element={<RiceMill />} />
        <Route path="/hrms" element={<HRM />} />
        <Route path="/erp" element={<ERP />} />
        <Route path="/school" element={<SMS />} />
        <Route path="/library" element={<LMS />} />
        <Route path="/Inventory" element={<IMS/>} />

        <Route
          path="/career"
          element={
            <Career
              okModalOpen={okModalOpen}
              setOkModalOpen={setOkModalOpen}
              getCard={getCard}
              setGetCard={setGetCard}
            />
          }
        />
        <Route
          path="/apply"
          element={<Apply setOkModalOpen={setOkModalOpen} getCard={getCard} />}
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
