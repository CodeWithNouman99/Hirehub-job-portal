import JobCategories from "../components/JobCategories"
import Hero from "../components/Hero"
import JobList from "../components/JobList"
// import Navbar from "../components/Navbar"
import AiAssistant from "../components/AiAssistant"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"
const Home = () => {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <Hero></Hero>
      <JobCategories></JobCategories>
      <JobList></JobList>
      <AiAssistant></AiAssistant>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  )
}

export default Home
