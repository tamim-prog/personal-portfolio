import Applayout from "../../components/Applayout"
import profile from "../../assets/home.jpg"
import { Link } from "react-router"
import { RiArrowRightLine } from "react-icons/ri";
import './home.css'

const home = () => {
  return (
    <div>
     <section className="home-container grid">
      <img src={profile} alt="" className="home-img" />


      <div className="home-content">
        <h1 className="home-title"><span>I'm Mahamudul Alam Tamim</span> <br /> Web Developer</h1>

        <p className="home-description">I'm a passionate Frontend Developer with a focus on building responsive and user-friendly web interfaces using React. I love transforming ideas into interactive experiences with clean, maintainable code. Constantly learning and adapting to new technologies, I aim to create seamless digital products that make an impact.</p>


    <Link to={'/about'} className="button">More About Me <span className="button-icon"><RiArrowRightLine /></span></Link>

      </div>

      <div className="color-block"></div>

     </section>
    </div>
  )
}

export default home