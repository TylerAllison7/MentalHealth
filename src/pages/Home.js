import "../App.css";
import Header from "../components/Header";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

function Home() {
    function handleSubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);

        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    }

    return(
        <div className="App flex flex-col min-h-screen">
            <div className="container flex-grow p-4 max-w-6xl mx-auto">
                <Header
                    banner="banner.jpeg" 
                />

                <h1>What is Mental Health?</h1>
                <p>
                    Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act, 
                    and helps determine how we handle stress, relate to others, and make choices. Mental health is important at every
                    stage of life, from childhood and adolescence through adulthood. Over the course of your life, if you experience
                    mental health problems, your thinking, mood, and behavior could be affected.
                </p>

                <div className="formSection">
                    <h2>Get Connected</h2>
                    <form method="post" onSubmit={handleSubmit}>
                        <label>
                            Full Name: <input name="nameInput" defaultValue="First and Last Name" />
                        </label>
                        <br />
                        <label>
                            Email: <input name="email" defaultValue="yourname@company.com" />
                        </label>
                        <button type="submit">Submit form</button>
                    </form>
                </div>

                <Cards />
            </div>
            <Footer />
        </div>
    );
}

export default Home;