import { ComplexNavbar } from "../components/navbar";
import { Banner } from "../components/banner";
import backdrop from "../assets/img/image.jpg";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Footer } from "../components/footer";

export default function Acmhacks() {
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
      <div  className="flex items-center">
        {/* <AcmHacksContent /> */}
      </div>
      <div className="flex justify-center py-5">
        <Footer />
      </div>
    </div>
  );
}

function AcmHacksContent() {
    const h1 = "text-2xl";
    const h2 = "text-xl";
    const h3 = "text-lg";
    const p = "text-md";
  
    return (
        <div className="text-white justify-center">
            <div class="resources_resourcesContent__w_d_3">
                <div class="resources_resourcesSection__A6F2M">
                    <h2 className={h2}>💪&nbsp;<strong>Surviving CS</strong>&nbsp;at UCSC</h2>
                    <h3 className={h3}>Meeting Slides</h3>
                    <p className={p}>Make sure you're signed in to your UCSC email to view the slides mentioned in this list.</p>
                    <p className={p}>Go to our&nbsp;<a href="https://drive.google.com/drive/u/1/folders/1HcgKkv9gUD1f6N2as4RDKjL2Ryp5MC6I" target="_blank" rel="noopener noreferrer">google drive</a>.</p>
                    <h3 className={h3}>What classes do I take?</h3>
                    <p className={p}>Here's all the classes you'll need to take along with when they're offered this year:</p>
                    <ul>
                        <li><a href="https://undergrad.soe.ucsc.edu/sites/default/files/curriculum-charts/2022-09/CS_BS_22-23.pdf" target="_blank" rel="noopener noreferrer">Curriculum Flow Charts</a></li>
                        <li><a href="https://ucsc.smartcatalogiq.com/en/current/General-Catalog/Academic-Units/Baskin-Engineering/Computer-Science-and-Engineering/Computer-Science-BS/" target="_blank" rel="noopener noreferrer">UCSC Requirements and Planners</a></li>
                        <li><a href="https://registrar.ucsc.edu/" target="_blank" rel="noopener noreferrer">Registrar</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}