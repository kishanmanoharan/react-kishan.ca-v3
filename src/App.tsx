import React, { useEffect } from "react";
import { Route, useLocation, Routes, Navigate } from "react-router-dom";

import { useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

import "./App.css";

import KNavbar from "./components/navbar";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Resume from "./pages/resume";
import Contact from "./pages/contact";
import { AnimatePresence, motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  ease: "easeInOut",
  duration: 0.3,
};

const Paths = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.key}>
        <Route
          path="/"
          element={
            <motion.div
              style={{ position: "absolute", width: "100vw" }}
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div
              style={{ position: "absolute", width: "100vw" }}
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Projects />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              style={{ position: "absolute", width: "100vw" }}
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Contact />
            </motion.div>
          }
        />
        <Route
          path="/resume"
          element={
            <motion.div
              style={{ position: "absolute", width: "98vw" }}
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Resume />
            </motion.div>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  useEffect(() => {
    document.title = "Kishan M";
  });

  return (
    <div className="App">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#000",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: "#fff",
            },
            collisions: {
              enable: false,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "top",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
            line_linked: {
              enable: true,
              distance: 200,
              color: "#ffffff",
              opacity: 0.5,
              width: 0,
            },
            number: {
              density: {
                enable: false,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.8,
              random: false,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: 3,
              random: true,
              anim: {
                size_min: 0.5,
              },
            },
          },
          detectRetina: true,
        }}
      />
      <KNavbar />
      <Paths />
    </div>
  );
}

export default App;
