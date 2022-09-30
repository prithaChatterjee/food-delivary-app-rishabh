import { Routes, Route } from "react-router-dom";
import Resturents from "../Pages/AllResturents";
import Home from '../Pages/Home';
import ResturentDetails from "../Pages/ResturentDetails";

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/resturents/:resturentId" element={<Resturents />} />
      <Route exact path="/resturent-details/:resturentId" element={<ResturentDetails />} />
    </Routes>
  )
}

export default Routing