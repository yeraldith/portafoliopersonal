import React from 'react'
import Profile from './Profile.jsx'
import Studies from './Studies.jsx'
import { data } from '../util/mocks/data'
import Proyects from './Proyects.jsx'
import Footer from './Footer'
import Header from './Header.js'


const Main = () => {
  return (
    <>
      <Header />
      <main>
        <Profile dataPerson={data.profile} />
        <Studies dataStudies={data.studies} />
        <Proyects dataProyects={data.proyects} />
      </main>
      <Footer />
    </>
  );
}

export default Main;
