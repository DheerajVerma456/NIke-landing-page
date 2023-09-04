import Hero from './section/Hero'
import Footer from './section/Footer'
import Services from './section/Services'
import CustomerReview from './section/CustomerReview'
import PopularProducts from './section/PopularProducts'
import SpecialOffers from './section/SpecialOffers'
import Subscribe from './section/Subscribe'
import SuperQuality from './section/SuperQuality'
import Nav from './components/Nav'


const App = () => {
  return (
    <main className='relative'>
      <Nav/>
      <section className='xl:padding-1 wide:padding-r padding-b'>
        <Hero/>
      </section>
      <section className='padding'>
        <PopularProducts/>
      </section>
      <section className='padding'>
        <SuperQuality/>
      </section>
      <section className='padding'>
        <Services/>
      </section>
      <section className='padding'>
        <SpecialOffers/>
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReview/>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe/>
      </section>
      <section className=" bg-black padding-x padding-t pb-8">
        <Footer/>
      </section>
    </main>
  )
}

export default App

