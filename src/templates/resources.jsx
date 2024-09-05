import { ComplexNavbar } from '../components/navbar'
import { Banner } from '../components/banner'
import backdrop from '../assets/img/image.jpg'

import { Footer } from '../components/footer'
import React from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody
} from '@material-tailwind/react'

export default function ResourcesPage () {
  return (
    <div className='App font-family:league-spartan dark:bg-back-dark'>
      <div>
        <header className='App-header pt-5 justify-center'>
          <ComplexNavbar />
          <div className='flex items-center justify-center w-full pt-10'>
            <Banner
              title='Our Resources'
              caption='Curated list of resources to help you grow in Computer Science!'
              Banner={backdrop}
            />
          </div>
        </header>
      </div>
      <div className='flex justify-center'>
        <ResourcesContent />
      </div>

      <div className='flex justify-center py-5'>
        <Footer />
      </div>
    </div>
  )
}

function ResourcesContent () {
  const h1 = 'text-4xl font-bold dark:text-white'
  const h2 = 'text-3xl font-bold dark:text-white'
  const h3 = 'text-2xl font-bold dark:text-white py-5'
  const h4 = 'text-xl font-bold dark:text-white'
  const p = 'text-lg dark:text-white'

  const [openAcc1, setOpenAcc1] = React.useState(true)
  const [openAcc2, setOpenAcc2] = React.useState(true)

  const handleOpenAcc1 = () => setOpenAcc1(cur => !cur)
  const handleOpenAcc2 = () => setOpenAcc2(cur => !cur)

  return (
    <div className='flex flex-col justify-center w-3/4 pt-10'>
      <Accordion open={openAcc1}>
        <AccordionHeader onClick={handleOpenAcc1} className={h3}>
          {' '}
          💪Surviving CS at UCSC
        </AccordionHeader>
        <AccordionBody>
          <h3 className={h3}>Meeting Slides</h3>
          <p className={p}>
            Make sure you're signed in to your UCSC email to view the slides
            mentioned in this list.
          </p>
          <p className={p}>
            Go to our{' '}
            <a
              href='https://drive.google.com/drive/u/1/folders/1HcgKkv9gUD1f6N2as4RDKjL2Ryp5MC6I'
              target='_blank'
              rel='noopener noreferrer'
            >
              google drive
            </a>
            .
          </p>
          <h3 className={h3}>What classes do I take?</h3>
          <p className={p}>
            Here's all the classes you'll need to take along with when they're
            offered this year:
          </p>
          <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400'>
            <li className={p}>
              <a
                href='https://undergrad.soe.ucsc.edu/sites/default/files/curriculum-charts/2022-09/CS_BS_22-23.pdf'
                target='_blank'
                rel='noopener noreferrer'
              >
                Curriculum Flow Charts
              </a>
            </li>
            <li className={p}>
              <a
                href='https://ucsc.smartcatalogiq.com/en/current/General-Catalog/Academic-Units/Baskin-Engineering/Computer-Science-and-Engineering/Computer-Science-BS/'
                target='_blank'
                rel='noopener noreferrer'
              >
                UCSC Requirements and Planners
              </a>
            </li>
            <li className={p}>
              <a
                href='https://registrar.ucsc.edu/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Registrar
              </a>
            </li>
          </ul>
          <p className={p}>
            Here are our{' '}
            <a
              href='https://tinyurl.com/ACMxGDSC'
              target='_blank'
              rel='noopener noreferrer'
            >
              slides
            </a>{' '}
            on choosing classes and picking a specialization
          </p>
          <h3 className={h3}>Want to learn more about a professor?</h3>
          <p className={p}>
            Visit UCSC's{' '}
            <a
              href='https://engineering.ucsc.edu/people/faculty/'
              target='_blank'
              rel='noopener noreferrer'
            >
              faculty
            </a>{' '}
            page.
          </p>
          <h3 className={h3}>Or get involved with research?</h3>
          <p className={p}>
            Visit UCSC's{' '}
            <a
              href='https://engineering.ucsc.edu/research/'
              target='_blank'
              rel='noopener noreferrer'
            >
              engineering research
            </a>
            .
          </p>
          <p className={p}>
            Check out our{' '}
            <a
              href='https://docs.google.com/presentation/d/1Aj2EtWjHAFGNMZHie7ckPda2O6a4hfJ-mLG1Prr4giM/edit?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
            >
              guide
            </a>{' '}
            for getting involved with research
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion open={openAcc2}>
        <AccordionHeader onClick={handleOpenAcc2} className={h3}>
          😎 Getting that dream internship or job
        </AccordionHeader>
        <AccordionBody>
          <h3 className={h3}>Networking and Internships</h3>
          <p className={p}>
            Check out our overall{' '}
            <a
              href='https://docs.google.com/presentation/d/15CWtyBJu7Vfd5MjQMPtTwsenfFr01uTQ47lb4kvrWxA/edit?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
            >
              guide
            </a>{' '}
            for networking and approaching internships
          </p>
          <h3 className={h3}>Resume and Cover Letters Advice</h3>
          <p className={p}>
            Time to perfect your resume and cover letters, here's advice to get
            you started.
          </p>
          <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400'>
            <li className={p}>
              <a
                href='https://docs.google.com/document/u/1/d/e/2PACX-1vQpvbP8lzPvZrNvrX58UlacpQiLgh1fBQYfOS2pEJZvp-zOb9uKQJYKSsDQ6mJWoPf3H09OmdrLDcaK/pub?urp=gmail_link'
                target='_blank'
                rel='noopener noreferrer'
              >
                Resume
              </a>
            </li>
            <li className={p}>
              <a
                href='https://docs.google.com/spreadsheets/d/1dN4Fs7BBkHYFRxWIZOscuPxWxqynthzXQHdJ-UZzZac/edit#gid=0'
                target='_blank'
                rel='noopener noreferrer'
              >
                Resume Reviews
              </a>
            </li>
          </ul>
          <p className={p}>Now you're ready to learn more about the interview process!</p>
          <p className={p}>
            Here's a{' '}
            <a
              href='https://github.com/cassidoo/getting-a-gig'
              target='_blank'
              rel='noopener noreferrer'
            >
              good overview
            </a>
            , a more{' '}
            <a
              href='https://www.freecodecamp.org/news/how-to-land-a-top-notch-tech-job-as-a-student-5c97fec82f3d/'
              target='_blank'
              rel='noopener noreferrer'
            >
              detailed overview
            </a>
            , and{' '}
            <a
              href='https://medium.com/students-corner/strategies-for-landing-a-tech-internship-57f9370f533c'
              target='_blank'
              rel='noopener noreferrer'
            >
              advice from a UCSC ACM Alumni
            </a>{' '}
            that works at Microsoft now.
          </p>
          <h3 className={h3}>Side Projects</h3>
          <p className={p}>Here are some great ways to start with some side projects:</p>
          <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400'>
            <li className={p}>
              <a
                href='https://docs.google.com/presentation/d/13HNHNxm4b3w0Smb--C-DKLTnice5h8Lo52FZ_l2albE/edit?usp=sharing'
                target='_blank'
                rel='noopener noreferrer'
              >
                Project Workshop
              </a>
            </li>
            <li className={p}>
              Hackathons! You can find a list of all the{' '}
              <a
                href='https://mlh.io/'
                target='_blank'
                rel='noopener noreferrer'
              >
                MLH hackathons
              </a>
              . We even have an UCSC one,{' '}
              <a
                href='https://acmhacks.vercel.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                ACM Hacks
              </a>{' '}
              and{' '}
              <a
                href='https://cruzhacks.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                CruzHacks
              </a>
            </li>
          </ul>
          <h3 className={h3}>Technical Prep</h3>
          <p className={p}>
            You can find some more detailed information about technical prep
            here.
          </p>
          <p className={p}>
            We recommend going through this book, Cracking the Coding Interview,
            and practicing coding questions here:
          </p>
          <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400'>
            <li className={p}>
              <a
                href='https://leetcode.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Leetcode
              </a>
            </li>
            <li className={p}>
              <a
                href='https://codesignal.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Codesignal
              </a>
            </li>
            <li className={p}>
              <a
                href='https://www.hackerrank.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                HackerRank
              </a>
            </li>
            <li className={p}>
              <a
                href='https://www.geeksforgeeks.org/'
                target='_blank'
                rel='noopener noreferrer'
              >
                GeeksForGeeks
              </a>
            </li>
          </ul>
          <p className={p}>
            You can stay up to date with all the tech news on{' '}
            <a
              href='https://news.ycombinator.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              HackerNews
            </a>
            !
          </p>
          <p className={p}>
            Still unsure on where to apply? You can utilize these resources:
          </p>
          <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400'>
            <li className={p}>CECI Fair</li>
            <li className={p}>LinkedIn</li>
            <li className={p}>Jumpstart</li>
            <li className={p}>Handshake</li>
            <li className={p}>BSO</li>
            <li className={p}>Newsletter</li>
            <li className={p}>Piazza</li>
            <li className={p}>Cold Email</li>
            <li className={p}>
              <a
                href='https://www.breakoutlist.com/all'
                target='_blank'
                rel='noopener noreferrer'
              >
                Big List of Companies
              </a>
            </li>
            <li className={p}>
              <a
                href='https://ghc.anitab.org/previous-years/2018-sponsorships/corporate-sponsors/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Another Big List
              </a>
            </li>
          </ul>
          <p className={p}>
            Don't worry if you're a first or second year, you can still apply!
            Here's a list of fellowships tailored just for you:
          </p>
          <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400'>
            <li className={p}>
              <a
                href='https://a16z.com/portfolio/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Andreesson Horowitz
              </a>
            </li>
            <li className={p}>
              <a
                href='https://www.kleinerperkins.com/partnerships/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Kleiner Perkins
              </a>
            </li>
            <li className={p}>
              <a
                href='https://www.sequoiacap.com/our-companies/?_spotlight=1'
                target='_blank'
                rel='noopener noreferrer'
              >
                Sequoia
              </a>
            </li>
          </ul>
          <h3 className={h3}>
            Ugh! There are so many companies; how do I keep track of them all?
          </h3>
          <p className={p}>We recommend using these:</p>
          <ul className='max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400'>
            <li className={p}>Huntr.co</li>
            <li className={p}>Airtable</li>
            <li className={p}>Trello</li>
            <li className={p}>Google Sheets + Excel</li>
          </ul>
        </AccordionBody>
      </Accordion>
    </div>
  )
}
