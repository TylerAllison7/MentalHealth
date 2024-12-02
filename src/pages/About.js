import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";

const About = () => {
    const carouselData = [
        {
          image: "./images/therapist.jpg",
          title: "Free Therapy",
          description: "Top therapists from around the world are available through our virtual appointment scheduler."
        },
        {
          image: "./images/newsletter.jpg",
          title: "Email Newsletter",
          description: "Get connected with our email newsletter, which shares weekly tips, tricks, and resources for stress management and mental health management."
        },
        {
          image: "./images/students.jpeg",
          title: "Student Community",
          description: "Sometimes, it's easier to talk to peers. Reach out to other college students connected with Hand-in-Hand to assist with accountability, share advice, and forge friendships."
        }
      ];

    return(
        <div className="flex flex-col min-h-screen">
            <div className="container flex-grow p-4 max-w-6xl mx-auto">
                <Header
                    banner="banner.jpeg" 
                />
                <h1>About Hand-in-Hand</h1>
                <p>
                    Hand-in-Hand provides psychological services to students in need on campuses across the world. With access to millions of people across the world, we have the largest network of
                     mental health services. 
                </p>

                <h2 style={{textAlign: `center`}}>Services We Offer</h2>
                <Carousel items={carouselData} />

                <h2>Our Mission</h2>
                <p>Hand-in-Hand strives to eliminate stigma and provide mental health resources to students in college. We understand that college is one of the most vulnerable times in a person' 
                    life, and we hope to be there whenever someone is in need. 
                </p>
            </div>
            <Footer />
        </div>
        
    );
}

export default About;