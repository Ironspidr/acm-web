import { ComplexNavbar } from '../components/navbar'
import { Banner } from '../components/banner'
import backdrop from '../assets/img/image.jpg'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel
} from '@material-tailwind/react'
import { Footer } from '../components/footer'

export default function Clubs () {
  return (
    <div className='App font-family:league-spartan dark:bg-back-dark'>
      <div>
        <header className='App-header pt-5 justify-center'>
          <ComplexNavbar />
          <div className='flex items-center justify-center w-full pt-10'>
            <Banner
              title='Our Community'
              caption='A vibrant space for connecting and learning through technology'
              Banner={backdrop}
            />
          </div>
        </header>
      </div>
      <div className='flex justify-center py-5'></div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
