import React from 'react'


export default function Projects() {
    return (
        <section id="projects" className="projects-section">
            <div className="b-example-divider"></div>
            <div className="container px-4 py-5" id="hanging-icons">
                {/* Section heading for individual projects section */}
                <h2 className="pb-2 border-bottom">Individual Projects</h2>
                {/* project 1 */}
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="col d-flex align-items-start">
                        <div>
                            <h3 className="fs-2 text-body-emphasis">Restaurant Menu</h3>
                            <p>
                                Built a simple menu-style webpage using HTML & CSS.
                            </p>
                            <a href="https://restaurant-menu-catalogue.netlify.app/" className="btn btn-primary"> View Project </a>
                        </div>
                    </div>
                    {/* project 2 */}
                    <div className="col d-flex align-items-start">
                        <div>
                            <h3 className="fs-2 text-body-emphasis">Website Redesign(Spicy Den)</h3>
                            <p>
                                Completed an individual project that focused on using the Bootstrap framework to redesign a webpage with modern layout principles and a responsiveness for all types of devices.
                            </p>
                            <a href="https://spicy-den.netlify.app/" className="btn btn-primary"> View Project </a>
                        </div>
                    </div>
                    {/* project 3 */}
                    <div className="col d-flex align-items-start">
                        <div>
                            <h3 className="fs-2 text-body-emphasis">Digital Clock</h3>
                            <p>
                                Developed a digital clock that displays the current time and date and updates automatically using HTML, CSS and JavaScript
                            </p>
                            <a href="https://cityclockjs.netlify.app/" className="btn btn-primary"> View Project </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="b-example-divider"></div>
            <div className="container px-4 py-5" id="hanging-icons">
                {/* section heading for group projects section */}
                <h2 className="pb-2 border-bottom">Group Projects</h2>
                {/* project 1 */}
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="col d-flex align-items-start">

                        <div>
                            <h3 className="fs-2 text-body-emphasis">Group Portfolio Website</h3>
                            <p>
                                Collaborated with a group of software development students to design and develop a fully functional webpage, showcasing our ability of teamwork and problem solving.
                            </p>
                            <a href="https://group-1-portfolio.netlify.app/" className="btn btn-primary"> View Projects </a>
                        </div>
                    </div>
                    {/* project 2 */}
                    <div className="col d-flex align-items-start">

                        <div>
                            <h3 className="fs-2 text-body-emphasis">Website Redesign</h3>
                            <p>
                                The project involved redesigning an existing business website with a team, with the main objective being to improve the overall design and mobile responsiveness.
                            </p>
                            <a href="https://laylascoffeeshop.netlify.app/" className="btn btn-primary"> View Project </a>
                        </div>
                    </div>
                    {/* project 3 */}
                    <div className="col d-flex align-items-start">

                        <div>
                            <h3 className="fs-2 text-body-emphasis">Quiz App</h3>
                            <p>
                                Collaborated with a group of software development students to design and develop a fully functional quiz app.Using HTML,CSS & JavaScript.
                            </p>
                            <a href="https://roaring-kitten-2b1fc3.netlify.app/" className="btn btn-primary"> View Project </a>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}
