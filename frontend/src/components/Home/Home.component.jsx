import MainHeader from "../MainHeader/MainHeader.component"
import SiteAwards from '../SiteAwards/SiteAwards.component'
import Benefits from "../Benefits/Benefits.component"
import TeamInfo from "../TeamInfo/TeamInfo.component"
import ParentReviews from "../ParentReviews/ParentReviews.component"
import Working from "../Working/Working.component"
import FeaturesIncluded from "../FeaturesIncluded/FeaturesIncluded.component"
import PriceSavings from "../PriceSavings/PriceSavings.component"
import Faqs from "../Faqs/Faqs.component"
import Footer from '../Footer/Footer.component'

function Home() {
  return (
    <>
      <MainHeader />
      {/* <SiteAwards /> */}
      <Benefits />
      <TeamInfo />
      {/* <ParentReviews /> */}
      <Working />
      <FeaturesIncluded />
      {/* <PriceSavings /> */}
      <Faqs />
      <Footer />
    </>
  )
}

export default Home