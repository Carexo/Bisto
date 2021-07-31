import { Fragment } from "react";

import Navbar from "../../components/UI/Navbar/Navbar";
import AllRecipes from "../../components/HomePageComponents/AllRecipes";

const HomePage = () => {
  return (
    <Fragment>
      <Navbar />
      <AllRecipes />
    </Fragment>
  );
};

export default HomePage;
