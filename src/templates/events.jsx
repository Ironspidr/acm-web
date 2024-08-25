import { ComplexNavbar } from "../components/navbar";
import { Banner } from "../components/banner";
import backdrop from "../assets/img/image.jpg";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Timeline,
} from "@material-tailwind/react";
import { Footer } from "../components/footer";
import ActivitiesTimeline from "../components/timeline";

export default function EventsPage() {
  return (
    <div className="App font-family:league-spartan dark:bg-back-dark">
      <div>
        <header className="App-header pt-5 justify-center">
          <ComplexNavbar />
          <div className="flex items-center justify-center w-full pt-10">
            <Banner
              title="Upcoming Events"
              caption="Check out our upcoming events and join us!"
              Banner={backdrop}
            />
          </div>
        </header>
      </div>
      <div className="flex justify-center py-5">
        <ActivitiesTimeline />
      </div>
      <div className="flex justify-center py-5">
        <Footer />
      </div>
    </div>
  );
}