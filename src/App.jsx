import './App.css'
import useOttData from './api/OTT_Data'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/OTT_Home/Home'
import Login from './pages/OTT_Login/Login'
import Series from './pages/OTT_Series/Series'
import Movie from './pages/OTT_Movie/Movie'
import Main from './pages/OTT_Main/Main'
import Header from './common/OTT_Header/Header'
import Footer from './common/OTT_Footer/Footer'
import MoviePopular from './pages/OTT_Movie/MoviePopular'
import MovieAction from './pages/OTT_Movie/MovieAction'
import AniMovie from './pages/OTT_Movie/AniMovie'
import Like from './pages/OTT_Like/Like'
import DramaMovie from './pages/OTT_Movie/DramaMovie'
import ComedyMovie from './pages/OTT_Movie/ComedyMovie'
import SFMovie from './pages/OTT_Movie/SFMovie'
import DramaPopular from './pages/OTT_Series/DramaPopular'
import DramaKorea from './pages/OTT_Series/DramaKorea'
import DramaOverseas from './pages/OTT_Series/DramaOverseas'
import DramaCrime from './pages/OTT_Series/DramaCrime'
import DramaAni from './pages/OTT_Series/DramaAni'
import DramaMedical from './pages/OTT_Series/DramaMedical'

function App() {
  const [
    PopularData, PopularData1, PopularData2, PopularData3, PopularData4, PopularData5,
    ActionData, ActionData1, ActionData2, ActionData3, ActionData4, ActionData5,
    AniData, AniData1, AniData2, AniData3, AniData4, AniData5,
    DramaData, DramaData1, DramaData2, DramaData3, DramaData4, DramaData5,
    ComedyData, ComedyData1, ComedyData2, ComedyData3, ComedyData4, ComedyData5,
    SFData, SFData1, SFData2, SFData3, SFData4, SFData5,
    PopularDrama, PopularDrama1, PopularDrama2, PopularDrama3, PopularDrama4, PopularDrama5,
    KoreaDrama, KoreaDrama1, KoreaDrama2, KoreaDrama3, KoreaDrama4, KoreaDrama5,
    OverseasDrama, OverseasDrama1, OverseasDrama2, OverseasDrama3, OverseasDrama4, OverseasDrama5,
    CrimeDrama, CrimeDrama1, CrimeDrama2, CrimeDrama3, CrimeDrama4, CrimeDrama5,
    AniDrama, AniDrama1, AniDrama2, AniDrama3, AniDrama4, AniDrama5,
    MedicalDrama, MedicalDrama1, MedicalDrama2, MedicalDrama3, MedicalDrama4, MedicalDrama5
  ] = useOttData()

  const { pathname } = useLocation()

  return (
    <>
      {pathname === '/' || pathname === '/Login' ? null : <Header PopularData={PopularData} />}
      <Routes>
        <Route path='/' element={<Main PopularDramaData={PopularDrama} />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Series'
          element={
            <Series
              PopularDrama={PopularDrama}
              KoreaDrama={KoreaDrama}
              OverseasDrama={OverseasDrama}
              CrimeDrama={CrimeDrama}
              AniDrama={AniDrama}
              MedicalDrama={MedicalDrama}
            />} />
        <Route path='/Movie'
          element={
            <Movie
              PopularData={PopularData}
              ActionData={ActionData}
              AniData={AniData}
              DramaData={DramaData}
              ComedyData={ComedyData}
              SFData={SFData}
            />} />
        <Route path='/PopularMovie'
          element={
            <MoviePopular
              PopularData={PopularData}
              PopularData1={PopularData1}
              PopularData2={PopularData2}
              PopularData3={PopularData3}
              PopularData4={PopularData4}
              PopularData5={PopularData5}
            />} />
        <Route path='/ActionMovie'
          element={
            <MovieAction
              ActionData={ActionData}
              ActionData1={ActionData1}
              ActionData2={ActionData2}
              ActionData3={ActionData3}
              ActionData4={ActionData4}
              ActionData5={ActionData5}
            />} />
        <Route path='/AniMovie'
          element={
            <AniMovie
              AniData={AniData}
              AniData1={AniData1}
              AniData2={AniData2}
              AniData3={AniData3}
              AniData4={AniData4}
              AniData5={AniData5}
            />} />
        <Route path='/DramaMovie'
          element={
            <DramaMovie
              DramaData={DramaData}
              DramaData1={DramaData1}
              DramaData2={DramaData2}
              DramaData3={DramaData3}
              DramaData4={DramaData4}
              DramaData5={DramaData5}
            />} />
        <Route path='/ComedyMovie'
          element={
            <ComedyMovie
              ComedyData={ComedyData}
              ComedyData1={ComedyData1}
              ComedyData2={ComedyData2}
              ComedyData3={ComedyData3}
              ComedyData4={ComedyData4}
              ComedyData5={ComedyData5}
            />} />
        <Route path='/SFMovie'
          element={
            <SFMovie
              SFData={SFData}
              SFData1={SFData1}
              SFData2={SFData2}
              SFData3={SFData3}
              SFData4={SFData4}
              SFData5={SFData5}
            />} />
        <Route path='/PopularDrama'
          element={
            <DramaPopular
              PopularDrama={PopularDrama}
              PopularDrama1={PopularDrama1}
              PopularDrama2={PopularDrama2}
              PopularDrama3={PopularDrama3}
              PopularDrama4={PopularDrama4}
              PopularDrama5={PopularDrama5}
            />} />
        <Route path='/KoreaDrama'
          element={
            <DramaKorea
              KoreaDrama={KoreaDrama}
              KoreaDrama1={KoreaDrama1}
              KoreaDrama2={KoreaDrama2}
              KoreaDrama3={KoreaDrama3}
              KoreaDrama4={KoreaDrama4}
              KoreaDrama5={KoreaDrama5}
            />} />
        <Route path='/OverseasDrama'
          element={
            <DramaOverseas
              OverseasDrama={OverseasDrama}
              OverseasDrama1={OverseasDrama1}
              OverseasDrama2={OverseasDrama2}
              OverseasDrama3={OverseasDrama3}
              OverseasDrama4={OverseasDrama4}
              OverseasDrama5={OverseasDrama5}
            />} />
        <Route path='/CrimeDrama'
          element={
            <DramaCrime
              CrimeDrama={CrimeDrama}
              CrimeDrama1={CrimeDrama1}
              CrimeDrama2={CrimeDrama2}
              CrimeDrama3={CrimeDrama3}
              CrimeDrama4={CrimeDrama4}
              CrimeDrama5={CrimeDrama5}
            />} />
        <Route path='/AniDrama'
          element={
            <DramaAni
              AniDrama={AniDrama}
              AniDrama1={AniDrama1}
              AniDrama2={AniDrama2}
              AniDrama3={AniDrama3}
              AniDrama4={AniDrama4}
              AniDrama5={AniDrama5}
            />} />
        <Route path='/MedicalDrama'
          element={
            <DramaMedical
              MedicalDrama={MedicalDrama}
              MedicalDrama1={MedicalDrama1}
              MedicalDrama2={MedicalDrama2}
              MedicalDrama3={MedicalDrama3}
              MedicalDrama4={MedicalDrama4}
              MedicalDrama5={MedicalDrama5}
            />} />
        <Route path='/Home' element={<Home data={PopularData} ActionData={ActionData} ActionData02={ActionData2} ActionData03={ActionData3} PopularDramaData={PopularDrama}
          AniData={AniData} ComedyData={ComedyData} SFData={SFData} AniData02={AniData2} AniData03={AniData3} ComedyData02={ComedyData1} ComedyData03={ComedyData2}
          SFData02={SFData1} SFData03={SFData2} PopularDrama1={PopularDrama1} PopularDrama2={PopularDrama2} KoreaDrama={KoreaDrama} KoreaDrama1={KoreaDrama1} KoreaDrama2={KoreaDrama2} />} />
        <Route path='/Like' element={<Like />} />
      </Routes>
      {pathname === '/' || pathname === '/Login' ? null : <Footer />}
    </>
  )
}

export default App