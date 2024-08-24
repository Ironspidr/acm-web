import { ComplexNavbar } from "../components/navbar";
import { Banner } from "../components/banner";
import backdrop from "../assets/img/backdrop_1.jpg";
import gwc from "../assets/img/gwc_outreach.png";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Footer } from "../components/footer";

export default function ResourcesPage() {
  return (
    <div className="App font-family:league-spartan dark:bg-back-dark">
      <div>
        <header className="App-header pt-5 justify-center">
          <ComplexNavbar />
          <div className="flex items-center justify-center w-full pt-10">
            <Banner
              title="Our Resources"
              caption="Curated list of resources to help you grow in Computer Science!"
              Banner={backdrop}
            />
          </div>
        </header>
      </div>

    </div>
  );
}