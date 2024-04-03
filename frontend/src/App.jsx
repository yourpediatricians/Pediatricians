import Navigation from './components/Navigation/Navigation.component'
import MainHeader from './components/MainHeader/MainHeader.component'
import SiteAwards from './components/SiteAwards/SiteAwards.component'
import Benefits from './components/Benefits/Benefits.component'
import TeamInfo from './components/TeamInfo/TeamInfo.component'
import ParentReviews from './components/ParentReviews/ParentReviews.component'
import Working from './components/Working/Working.component'
import FeaturesIncluded from './components/FeaturesIncluded/FeaturesIncluded.component'
import PriceSavings from './components/PriceSavings/PriceSavings.component'
import Faqs from './components/Faqs/Faqs.component'
import Footer from './components/Footer/Footer.component'

import './App.css'

function App() {
  return (
    <>
      <Navigation />
      <MainHeader />
      <SiteAwards />
      <Benefits />
      <TeamInfo />
      <ParentReviews />
      <Working />
      <FeaturesIncluded />
      <PriceSavings />
      <Faqs />
      <Footer />
    </>
  )
}

export default App
