import { Routes, Route } from "react-router-dom";
import Resturents from "../Pages/AllResturents";
import Home from '../Pages/Home';

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/resturents/:resturentId" element={<Resturents />} />
    </Routes>
  )
}

export default Routing