import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Work <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Techical Product Support Engineer</h4>
                <h5>Qualitia Softwrae Pvt. Ltd.</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              • Engineered and validated automation workflows for the Qualitia platform by analyzing client-server architecture across
              earlier versions and latest as well, contributing to improved system performance and reliability.
              <br />• Developed and customized low-code/no-code automated test cases and suites in the Qualitia Client, integrating
              Selenium-based actions to enhance test automation capabilities.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Intern</h4>
                <h5>V6 Arthgyan LLP</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              • Optimized website content using React.js, enhancing UX for 1,000+
              daily visitors and reducing load times by 20%.
              <br />• Diagnosed and resolved 15+ critical functionality issues,
              improving stability and boosting daily interactions by 25 users.
              <br />• Collaborated with 3+ team members, conducting 50+ tests with
              Jest & Selenium, enhancing site functionality by 30%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelanced (Web Developer),</h4>
                <h5> Limitless™ Fitness Gym</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              • Developed a responsive website for Limitless Fitness Gym, incorporating a
              user-friendly interface and email-js functionality for seamless client communication.
              Designed the gym<span>'</span>s distinctive logo, fostering brand identity across 10+ platforms.
              <br />• Integrated a 5-tier rate card system with flexible monthly and yearly membership
              plans, enhancing user decision-making. Refined an engaging gallery to showcase the
              gym<span>'</span>s facilities and embedded Google Maps for seamless navigation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
