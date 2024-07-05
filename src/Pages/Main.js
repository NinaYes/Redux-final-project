import image from '../Assets/Space.avif';
import imageTwo from '../Assets/SpaceTwo.avif';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


function Main () {
    gsap.registerPlugin(useGSAP);

    useGSAP(() => {
         gsap.to(".room", {y: 60, ease: "slow", duration: 1});
         gsap.from(".mainThree, .mainFour", {opacity:0, duration: 2, delay: 1, stagger: .6});
      });

    return (
        <div className="main">
            <div className="mainTwo">
                <img className="room" src={image} alt="gallery"/>
                <div className = "mainThree">
                    <h1 className="header">Platformart <br />Gallery</h1>
                    <p className="text">Platformart Gallery is Canada’s leading public art gallery devoted exclusively to contemporary visual art. Learn more about our mandate, vision and history!</p>
                    <p className="text">As we remain a non-profit institution, our aim is to share art with wider audiences through free admission to our exhibitions, public programs and educational publications.</p>
                    <p className="text">Since 1987, Platformart has been on a mission to create an open culture and community with inspiring contemporary art and ideas. For the past 35 years, we've stayed true to our commitment to exhibit artists from diverse backgrounds, draw attention to pressing issues, and connect with communities from Canada and around the world through contemporary art. </p>
                    <p className="text"> To this day, Platformart remains an open place for thought-provoking art, ideas, and conversations.</p>
                </div>
            </div>
            <div className="mainFive">      
                <div className="mainFour">    
                    <p className="text">Platformart Gallery is located right at Downtown Toronto's Waterfront. Here, you experience contemporary art, dance, theater, performance, restaurants, cafes, and breathtaking views of Toronto's scenic waterfront, all within walking distance!</p>
                    <p className="text">Platformart Gallery comprises five main exhibition spaces, including the Main Ballrom with a beautiful view of Lake Ontario. Gallery space also extends to the lobby with spacious rental spaces. Designed to showcase the diverce nature of contemporary art, our space is available for special events and rentals.</p>
                    <p className="text">Platformart Gallery is on a mission to provide communities with an open space for cultural exchange and thought-provoking contemporary art. That’s why we offer free access to our gallery and programs. All year around.</p>
                    <p className="text">Platformart Gallery promotes physical and social inclusion. Our gallery is wheelchair accessible and includes an accessible restroom. Both levels of the gallery are serviceable by elevator, and we also welcome guide dogs and other service animals.</p>
                    <p className="text">Welcome!</p>
                </div>       
                <img className="roomTwo" src={imageTwo} alt="gallery"/>
            </div>
        </div>
        

          
    )
}
export default Main;