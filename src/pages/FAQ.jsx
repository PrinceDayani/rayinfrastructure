import React, { useState}  from 'react'
import { Navbar } from 'react-bootstrap'
import "../styles/FAQ.css"


const FaqheroSection = () => {
  return (
    <div className="FaqheroSectionStyle">
      <div className="FaqheroSectionContent">
        <h1 className="FaqheroSectionTitle">FAQ</h1>
        <p className="FaqheroSectionText">
          To establish ourselves as an internationally respected engineering consultant, offering comprehensive and
          innovative solutions. We are committed to unmatched performance, unparalleled accountability, and exceptional
          client satisfaction.
        </p>
      </div>
    </div>
  );
}; 

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { question: "What services do you offer?", answer: "We provide engineering and project management solutions tailored to client needs." },
    { question: "How can I contact your team?", answer: "You can reach out to us via email or phone, available on our contact page." },
    { question: "What industries do you specialize in?", answer: "We specialize in infrastructure, energy, and urban development projects." },
    { question: "Do you offer customized solutions?", answer: "Yes, we tailor our solutions to meet the specific requirements of our clients." },
  ];

  return (
    <div className="sectionStyle">
      <h2 >
        Frequently Asked Questions
      </h2>
      <p>
        We provide high-quality engineering and project management solutions, focusing on safety, efficiency, and
        cost-effectiveness. Built on integrity and innovation, we strive to create lasting value for our clients and
        industry.
      </p>
      <div className="questionContainerStyle">
        {faqs.map((faq, index) => (
          <div key={index}>
            <div className="questionStyle" onClick={() => toggleAnswer(index)}>
              <span>{faq.question}</span>
              <span>{activeIndex === index ? "∧" : "∨"}</span>
            </div>
            {activeIndex === index && (
              <div className="answerStyle">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const CombinedSection = () => {
  return (
    <div className="containerStyle">
      <div className="leftImagesStyle">
        <div className="topImageStyle">
          <p>Top Image</p>
        </div>
        <div className="bottomImageStyle">
          <h6>Need More About Us</h6>
          <button className="outlineButtonStyle">Start a Project</button>
        </div>
      </div>
      <div className="sideImageStyle">
        <p>Side Image</p>
      </div>
      <div className="faqStyle">
        <FAQSection />
      </div>
    </div>
  );
};

const StartProjectSection = () => {
  return (
    <div className="StartProjectSectionStyle">
      <div className="StartProjectContent">
        <h1 className="StartProjectTitle">Building today for a sustainable tomorrow.</h1>
        <button className="StartProjectOutlineButtonStyle">Start A Project</button>
      </div>
    </div>
  );
};

const GetInTouch = () => {
  return (
    <div className="GetInTouchContainerStyle">
      <img
        src="https://via.placeholder.com/500x700"
        alt="Placeholder"
        className="imageStyle"
      />
      <div className="formContainerStyle">
        <h2 >Have a question? Get in touch</h2>
        <p>
          At Ray Infrastructures, we believe in building not just structures, but lasting legacies, combining
          cutting-edge technology, sustainable practices, and unparalleled craftsmanship to create spaces that stand the
          test of time and meet the evolving needs of the future.
        </p>
        <input type="text" placeholder="Name" className="inputStyle" />
        <input type="email" placeholder="Email" className="inputStyle" />
        <input type="text" placeholder="Subject" className="inputStyle" />
        <textarea placeholder="Message" rows="4" className="inputStyle"></textarea>
        <button className="buttonStyle">Send Message</button>
        <div className="mapStyle">Map Image Placeholder</div>
      </div>
    </div>
  );
};



const FAQ = () => {
  return (
    <>
        <Navbar />
        <FaqheroSection />
        <CombinedSection />
        <StartProjectSection />
        <GetInTouch />
    </>
  )
}

export default FAQ