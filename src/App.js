import React from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { lightThem } from "./global/Thems";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./Components/Main/Main";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import MySkills from "./Components/MySkills/MySkills";
import GlobalStyle from "./global/globalStyle";
import SayHi from "./Components/SayHi/SayHi";
import { AnimatePresence } from "framer-motion";
import SoundBar from "./subComponanet/SoundBar";
import CustomMenu from "./subComponanet/CustomMenu";
import Loading from "./subComponanet/Loading";
const LazyLoading = React.lazy(() => import("./Components/Work/Work"));
const App = props => {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightThem}>
        <CustomMenu />
        <SoundBar />
        <AnimatePresence wait>
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/work"
              element={
                <React.Suspense fallback={<Loading />}>
                  <LazyLoading />
                </React.Suspense>
              }
            />
            <Route exact path="/skills" element={<MySkills />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/say" element={<SayHi />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
};

export default App;
