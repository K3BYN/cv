import Container from "../components/container";
import { skills, h_Skills, s_Skills } from "../js/perfil";
const Index = () => {
  return (
    <Container>
      <div className="container text-center">
        <div className="row">
          <div className="col-12 shadow-panel">
            <div className="row">
              <div className="col-12 col-md-5 border left-side shadow-lg p-3 rounded">
                <div className="overflow-hidden animate__animated animate__bounce">
                  <img
                    className="profile-img"
                    src="profile.png"
                    width={300}
                    height={300}
                  ></img>
                </div>
                <div className="mt-5 mb-3">
                  <div className="contact text-start">
                    <h1 className="text-uppercase">contact</h1>
                  </div>
                  <div className="text-start row">
                    <div className="col-12 mb-2 mt-4">
                      <i class="bx bx-sm bxs-phone bx-tada icon-bg"></i>
                      <p className="d-inline verticla-super ms-3">
                        +52 56 1566 8363
                      </p>
                    </div>
                    <div className="col-12 my-2">
                      <i class="bx bx-sm bx-envelope bx-tada icon-bg"></i>
                      <p className="d-inline verticla-super ms-3">
                        khernandezd1400@alumno.ipn.mx
                      </p>
                    </div>
                    <div className="col-12 mt-2">
                      <i class="bx bx-sm bx-location-plus bx-tada icon-bg"></i>
                      <p className="d-inline verticla-super ms-3">
                        México, Estado de México
                      </p>
                    </div>
                  </div>
                </div>
                <div className="code">
                  <div className="contact text-start mb-4">
                    <h1 className="text-uppercase">expertise skills</h1>
                  </div>
                  <div className="text-start px-3">  
                    {/* Skill Progress  */}
                    {skills.map(({ skill, percentage }, i) => (
                        <div className="row p-0" key={i}>
                        <div className="col-12 md-2 p-0">
                            <h5>{skill}</h5>
                        </div>
                        <div className="col-12 md-10 p-0">
                            <div className="progress">
                            <div
                                className="progress-bar bar-color"
                                role="progressbar"
                                style={{ width: `${percentage}%` }}
                            ></div>
                            </div>
                        </div>
                        </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-7 border right-side shadow-lg pb-3 pt-5 px-0 rounded">
                <div className="header-presentation">
                  <h1 className="text-uppercase">kevin hernández</h1>
                  <h5 className="text-uppercase">INFORMATIC ENGINEERING</h5>
                  <p className="text-uppercase">Front-end developer</p>
                </div>
                <div className="row">
                  <div className="col-2"></div>
                  <div className="col-8 mt-5">
                    <div className="text-start mb-5">
                      <h1 className="text-uppercase">about me</h1>
                      <p>
                        I have a great motivatión to polish my skills, I hope to
                        grow professionally up in a company that matches my
                        values and expectations.
                      </p>
                    </div>
                    <div className="text-start mb-5">
                      <h1 className="text-uppercase">work experience</h1>
                      <p className="mb-0 mt-3">
                        <b>2022 - 2023, Infinitysoft</b>
                      </p>
                      <ol className="ps-3">
                        <li>I developed mockups.</li>
                        <li>
                          I proposed designs to be more pleasant for the
                          stakeholder.
                        </li>
                        <li>
                          I implemented SASS for better software customization.
                        </li>
                        <li>
                          I implemented the grid system for a better
                          distribution of elements.
                        </li>
                        <li>
                          I worked with different frameworks such as metronic
                          and porto admin.
                        </li>
                        <li>
                          I Added animations to objects for a better user
                          experience.
                        </li>
                      </ol>
                      <p>
                        <em>Front-end developer</em>
                      </p>
                    </div>
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="mb-5 text-start">
                          <h1 className="text-uppercase font-subtitle">
                            Hard skills
                          </h1>
                          <ol className="ps-3">
                            <li>Front-end development</li>
                            <li>Back-end development</li>
                            <li>User interface desing</li>
                            <li>Database management</li>
                            <li>Node Apps</li>
                          </ol>
                        </div>
                        <div className="mb-5 text-start">
                          <h1 className="text-uppercase font-subtitle">
                            Education
                          </h1>
                          <div className="mb-3 text-start">
                            <p className="mb-0 mt-3">
                              <b>2018 - 2022</b>
                            </p>
                            <p className="mb-0">Informatic Engineering</p>
                            <p>
                              <em className="text-uppercase">upiicsa</em>
                            </p>
                          </div>
                          <div className="mb-3 text-start">
                            <p className="mb-0 mt-3">
                              <b>2015 - 2018</b>
                            </p>
                            <p className="mb-0">Informatic Technician</p>
                            <p>
                              <em className="text-uppercase">cecyt 12</em>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="mb-5 text-start">
                          <h1 className="text-uppercase font-subtitle">
                            soft skills
                          </h1>
                          <ol className="ps-3">
                            <li>Time management</li>
                            <li>Teamwork</li>
                            <li>Empathy</li>
                            <li>Communication</li>
                            <li>Responsability</li>
                          </ol>
                        </div>
                        <div className="mb-4 text-start">
                          <h1 className="text-uppercase font-subtitle">
                            Languajes
                          </h1>
                          <p className="mb-0">English B2</p>
                          <p>Spanish - native</p>
                        </div>
                        <div className="text-start">
                          <h1 className="text-uppercase font-subtitle">
                            Github
                          </h1>
                          <a
                            className="text-decoration-none"
                            href="https://github.com/K3BYN"
                          >
                            https://github.com/K3BYN
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Index;
