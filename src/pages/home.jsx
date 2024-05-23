import Features from "../components/Features";
import GetStarted from "../components/GetStarted";
import Landing from "../components/Landing";
import StayProductive from "../components/StayProductive";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <div>
      <Landing />
      <Features />
      <StayProductive />
      <Testimonials />
      <GetStarted />
    </div>
  );
}

export default Home;
