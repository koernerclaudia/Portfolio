import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import { AboutMe } from '../AboutMe/AboutMe';
import ChartsOverviewDemo from '../skills/skills';
import { NavBar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
import { Hero } from '../hero/hero';
import { Tools } from '../tools/tools';
import Sample from '../sample/sample';
import ItemDetail from '../project/project'; // Import the new ItemDetail component
import { Ambition } from '../ambition/ambition';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import "../../index.scss";
import { HashRouter as Router } from "react-router-dom";

export const Main = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Route for the main page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Ambition />
              <Sample />
              <ChartsOverviewDemo />
              <Tools />
              <AboutMe />
              <Footer />
            </>
          }
        />

        {/* Route for individual item detail pages */}
        <Route path="/item/:id" element={<ItemDetail />} />
      </Routes>
    </Router>
  );
};