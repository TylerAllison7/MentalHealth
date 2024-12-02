import Header from "../components/Header";
import Footer from "../components/Footer";
import Accordion from "../components/Accordion";
import React, { useState } from "react";
import Modal from "../components/Modal";

const Resources = () => {
    const accordionData = [
        {
          title: "The Trevor Project",
          content: "The Trevor Project provides crisis, advocacy, research, peer support, and education and public awareness services to LGBTQ+ groups."
        },
        {
          title: "National Alliance on Mental Illness (NAMI)",
          content: "The National Alliance on Mental Illness is an alliance of more than 600 local affiliates who work in communities to raise awareness and provide support and education that was not previously available to those in need."
        },
        {
          title: "Anxiety and Depression Association of America (ADAA)",
          content: "ADAA is an international nonprofit organization dedicated to the prevention, treatment, and cure of anxiety, depression, OCD, PTSD, and co-occurring disorders through the alignment of science, treatment, and education."
        },
        {
          title: "Rape, Abuse, and Incent National Network (RAINN)",
          content: "RAINN (Rape, Abuse & Incest National Network) is the nation's largest anti-sexual violence organization. RAINN created and operates the National Sexual Assault Hotline (800.656.HOPE, online.rainn.org y rainn.org/es) in partnership with more than 1,000 local sexual assault service providers across the country and operates the DoD Safe Helpline for the Department of Defense. RAINN also carries out programs to prevent sexual violence, help survivors, and ensure that perpetrators are brought to justice."
        }
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return(
        <div className="flex flex-col min-h-screen">
            <div className="container flex-grow p-4 max-w-6xl mx-auto">
                <Header
                    banner="banner.jpeg" 
                />
                <h1>Resources</h1>
                <p className="accordPara">
                    Need additional help? No worries! We work with a variety of organizations across the U.S. that bring provide great assistance in times of mental struggle. View some of the organizations we partner with below.
                </p>
                {accordionData.map((item, index) => (
                    <Accordion
                        key={index}
                        title={item.title}
                        content={item.content}
                    />
                ))}
                <p style={{marginTop: "30px"}}><strong>Need immediate help?</strong></p>
                <button onClick={openModal}>View Hotlines</button>
                <Modal isOpen={isModalOpen} onClose={closeModal} />
            </div>
            <Footer />
        </div>
    );
};

export default Resources;