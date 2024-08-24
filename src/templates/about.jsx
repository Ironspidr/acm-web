import { ComplexNavbar } from "../components/navbar";
import { Banner } from "../components/banner";
import backdrop from "../assets/img/backdrop_1.jpg";
import { Footer } from "../components/footer";
import Associates from "../components/associates";
import ThreeCardSplit from "../components/threeCardSplit";

export default function About() {
  return (
    <div className="App font-family:league-spartan dark:bg-back-dark ">
      <div>
        <header className="App-header pt-5 justify-center">
          <ComplexNavbar />
          <div className="flex items-center justify-center w-full pt-10">
            <Banner
              title="About UCSC ACM"
              caption=""
              Banner={backdrop}
            />
          </div>
        </header>
 
      </div>
      <ThreeCardSplit />
      <Footer />
    </div>
  );
}

function Mission(props) {
  return (
    <div className="pt-10 ">
      <div className="flex flex-col lg:flex-row justify-center items-start text-left pt-5 dark:text-font-dark md:items-center">
        <div className="lg:w-1/2 md:w-3/4 lg:px-10 xxs:px-1 justify-center ">
          <h1 className="font-semibold text-3xl text-left flex lg:justify-start md:justify-center dark:text-font-dark xxs:justify-center">
            {props.title}
          </h1>
          <p className="font-thisFont text-xl">{props.desc}</p>
        </div>
        <div className="pt-10">
          <img
            src={props.img}
            className="h-80 lg:w-3/4 md:w-full rounded-lg object-cover object-center border-color-dark border-4 dark:border-2 items-start lg:items-center md:justify-center"
          ></img>
        </div>
      </div>
    </div>
  );
}
