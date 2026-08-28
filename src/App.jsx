import ScrollProgress from './sections/ScrollProgress.jsx';
import SiteHeader from './sections/SiteHeader.jsx';
import Hero from './sections/Hero.jsx';
import Journeys from './sections/Journeys.jsx';
import SystemsView from './sections/SystemsView.jsx';
import Method from './sections/Method.jsx';
import TransformationScore from './sections/TransformationScore.jsx';
import Diagnostic from './sections/Diagnostic.jsx';
import Engagements from './sections/Engagements.jsx';
import Dimensions from './sections/Dimensions.jsx';
import Architecture from './sections/Architecture.jsx';
import TransformationOffice from './sections/TransformationOffice.jsx';
import BehindTheWork from './sections/BehindTheWork.jsx';
import Independence from './sections/Independence.jsx';
import About from './sections/About.jsx';
import Mission from './sections/Mission.jsx';
import Outcomes from './sections/Outcomes.jsx';
import Faq from './sections/Faq.jsx';
import Contact from './sections/Contact.jsx';
import SiteFooter from './sections/SiteFooter.jsx';

const page = {
  background: '#f7f7f9',
  color: '#101014',
  fontFamily: "'Plus Jakarta Sans',system-ui,sans-serif",
  overflowX: 'clip',
};

export default function App() {
  return (
    <div style={page}>
      <ScrollProgress />
      <SiteHeader />
      <Hero />
      <Journeys />
      <SystemsView />
      <Method />
      <TransformationScore />
      <Diagnostic />
      <Engagements />
      <Dimensions />
      <Architecture />
      <TransformationOffice />
      <BehindTheWork />
      <Independence />
      <About />
      <Mission />
      <Outcomes />
      <Faq />
      <Contact />
      <SiteFooter />
    </div>
  );
}
