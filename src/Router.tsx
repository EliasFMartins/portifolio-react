import { Route, Routes, useLocation } from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout";
import { AnimatePresence } from "framer-motion";
import { Home} from "./components/Home";
import { Home3 } from "./components/Home2 copy";


export const Router = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home3" element={<Home3 />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
