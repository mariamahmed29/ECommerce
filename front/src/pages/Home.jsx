import Hero from "../components/Hero"
import Features from "../components/Features"
import Footer from "../components/Footer"
import CategoriesCard from "../components/CategoriesCard"
import NewArrivals from "../components/NewArrivals"

const Home = () => {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>

      <section id="categoriesCard">
        <CategoriesCard />
      </section>

      <section id="NewArrivals">
        <NewArrivals />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </div>
  )
}

export default Home