import Header from './components/Header'
import Catagories from './components/Catagories'
import Campaigns from './components/Campaigns'
import Favorites from './components/Favorites'
import Mobileapp from './components/Mobileapp'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Slider from "rc-slider";
import SimpleSlider from './components/SimpleSlider'

function App() {
  return (
    <>
    <Header />
    <SimpleSlider />
    <Catagories />
    <Campaigns />
    <Favorites />
    <Mobileapp />
    <Cards />
    <Footer />
    </>
  )
}

export default App;