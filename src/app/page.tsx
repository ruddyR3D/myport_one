import ContactShowcaseSection from './home/partials/cont';
import ExperiencesSection from './home/partials/experiences';
import FaqSection from './home/partials/faq';
import FaqqSection from './home/partials/faqq';
import IntroSection from './home/partials/intro';
import PortfolioSection from './home/partials/portfoliosection';
import ResFoot from './home/partials/resfoot';
import ResNav from './home/partials/resnav';
import ServicesSection from './home/partials/services';
import StandoutSection from './home/partials/standout';
import TesSection from './home/partials/testsec';
import WorkflowSection from './home/partials/workflow';
import Home90 from './home/partials/home90';

export default function Home() {
  return (
    <div className='min-h-screen bg-white'>
      <ResNav />
      <Home90 />
      <IntroSection />
      <ServicesSection />
      <WorkflowSection />
      <StandoutSection />
      <PortfolioSection />
      <ExperiencesSection />
      <TesSection />
      {/* <FaqSection /> */}
      <FaqqSection />
      <ContactShowcaseSection />
      <ResFoot />
    </div>
  );
}
