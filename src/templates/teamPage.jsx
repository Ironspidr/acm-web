import { ComplexNavbar } from '../components/navbar'
import { Banner } from '../components/banner'
import backdrop from '../assets/img/backdrop_1.jpg'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { Footer } from '../components/footer';

export default function TeamPage () {
  const people = [
    { subtitle: "Emma Lawson", job: "Data Solutions Architect" },
    { subtitle: "Ethan Brooks", job: "UX Research Analyst" },
    { subtitle: "Mia Delgado", job: "Cloud Integration Specialist" },
    { subtitle: "Oliver Grant", job: "Digital Strategy Consultant" },
    { subtitle: "Sophia Hayes", job: "AI Systems Engineer" },
    { subtitle: "Jackson Reed", job: "Blockchain Security Analyst" },
    { subtitle: "Lily Morgan", job: "VR Experience Designer" },
    { subtitle: "Caleb Foster", job: "Sustainable Tech Advisor" }
  ];


  return (
    <div className='App font-family:league-spartan dark:bg-back-dark'>
      <div>
        <header className='App-header pt-5 justify-center'>
          <ComplexNavbar />
          <div className='flex items-center justify-center w-full pt-10'>
            <Banner
              title='Our Team'
              caption='A dedicated group inspiring innovation and growth in computer science.'
              Banner={backdrop}
            />
          </div>
        </header>
      </div>
      <div className="flex justify-center py-5">
        <div className="flex flex-wrap justify-center">
          {people.map((person, index) => (
            <div key={`div-${index}`} className='flex justify-center py-5 px-5'>
              <ProfileCard key={`card-${index}`} subtitle={person.subtitle} job={person.job} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center py-5">
        <Footer />
      </div>
    </div>
  )
}

function ProfileCard(props) {
  return (
    <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fperson-placeholder&psig=AOvVaw1ZCBYSJkfC0DDMfM0Erfh9&ust=1724567667974000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNDQnauBjYgDFQAAAAAdAAAAABAI" alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {props.subtitle}
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          {props.job}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Like">
          <Typography
            as="a"
            href="#facebook"
            variant="lead"
            color="blue"
            textGradient
          >
            <i className="fab fa-facebook" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#twitter"
            variant="lead"
            color="light-blue"
            textGradient
          >
            <i className="fab fa-twitter" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#instagram"
            variant="lead"
            color="purple"
            textGradient
          >
            <i className="fab fa-instagram" />
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
  );
}