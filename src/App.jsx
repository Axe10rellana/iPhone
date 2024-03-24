//components
import {
  Features,
  Footer,
  Hero,
  Highlights,
  HowItWorks,
  Navbar,
} from "./components";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default App;
