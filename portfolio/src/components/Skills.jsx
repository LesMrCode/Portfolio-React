import React from 'react'

export default function Skills() {
    return (
        // skills section //
        <section id="skills" className="skills-section">
            {/* section heading */}
            <h1 className="skills-header">Skills & Expertise</h1>

            <div className="container-skills">

                <div className="row">
                    <div className="col-12 col-md">
                    </div>
                    <div className="col-6 col-md">
                        {/* list for programming languges */}
                        <h5>Programming Languages</h5>
                        <ul className="list-unstyled text-small">
                            <li className="mb-1">
                                <a className="link-secondary text-decoration-none" href="#"
                                >HTML</a
                                >
                            </li>
                            <li className="mb-1">
                                <a className="link-secondary text-decoration-none" href="#"
                                >CSS</a
                                >
                            </li>
                            <li className="mb-1">
                                <a className="link-secondary text-decoration-none" href="#"
                                >Bootstrap</a
                                >
                            </li>
                            <li className="mb-1">
                                <a className="link-secondary text-decoration-none" href="#"
                                >JavaScript</a
                                >
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        {/* list of tools */}
                        <h5>Tools</h5>
                        <ul className="list-unstyled text-small">
                            <li className="mb-1">
                                <a className="link-secondary text-decoration-none" href="#"
                                >Visual Studio Code</a
                                >
                            </li>
                            <li className="mb-1">
                                <a className="link-secondary text-decoration-none" href="#"
                                >Git/Github</a
                                >
                            </li>
                            <li className="mb-1">
                                <a className="link-secondary text-decoration-none" href="#"
                                >Microsoft Suite</a
                                >
                            </li>
                            <li className="mb-1">
                                <a className="link-secondary text-decoration-none" href="#"
                                >Generative AI</a
                                >
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        {/* list of soft skills */}
                        <h5>Soft Skills</h5>
                        <ul className="list-unstyled text-small">
                            <li className="mb-1">
                                <a className="link-secondary text-decoration-none" href="#">Teamwork</a>
                            </li>
                            <li className="mb-1">
                                <a className="link-secondary text-decoration-none" href="#"
                                >Collaboration</a
                                >
                            </li>
                            <li className="mb-1">
                                <a className="link-secondary text-decoration-none" href="#"
                                >Problem Solving</a
                                >
                            </li>
                            <li className="mb-1">
                                <a className="link-secondary text-decoration-none" href="#"
                                >Adaptability</a
                                >
                            </li>
                            <li className="mb-1">
                                <a className="link-secondary text-decoration-none" href="#"
                                >Critical Thinking</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}