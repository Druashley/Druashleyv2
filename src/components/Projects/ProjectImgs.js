import homepage from "../../img/homepage-setup-v1.png";
import projectpage from "../../img/projectpage-setup-v1.png";
import portfolioSvg from "../../img/code.svg";
import data from "../../img/data.svg";
import book from "../../img/book.svg";
import pmiPage from "../../img/pmi-picture.png";

const projectImgs = {
  portfolio: {
    main: portfolioSvg,
    secondary: projectpage,
    third: homepage,
  },
  portfolioTwo: {
    main: book,
    secondary: pmiPage,
    third: homepage,
  },
  portfolioThree: {
    main: data,
    secondary: projectpage,
    third: homepage,
  },
};

export default projectImgs;
