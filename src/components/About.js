import React from "react";

class About extends React.Component {
    constructor() {
        super();
        this.state = {
            expanded: true,
            activeKey: "1"
        };
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(eventKey) {
        this.setState({
            activeKey: eventKey
        });
    }
    render() {

        const education = [
            {
                education : "Binus University",
                specialty : "Bachelor's degree, Computer Science",
                year : "2019 - 2023"
            }
        ]

        const experience = [
            {
                job : "Staff Back End Developer",
                company : "PT Dire Teknologi Bersama",
                year : "Oct 2023 - Present",
                desc : "",
            },
            {
                job : "Staff Application Development Analyst",
                company : "PT BCA Multifinance",
                year : "Apr 2022 - Mar 2023",
                desc : [
                    "Developing KUR website using CodeIgniter 3",
                    "Developing Scoring System website using CodeIgniter 3",
                    "Create background service scheduler with cron job",
                    "Developing e-KYC Website using CodeIgniter 3",
                    "Integrating RestAPI into the website",
                    "Worked with Version Control(Git), Documentation, Readable code"
                ],
            }
        ]

        const skills = [
            {
                category : "Web Developer",
                skills : [
                    {
                        name : "HTML",
                        desc : "Develop accessible and SEO-friendly websites with HTML5 semantics and best practice.",
                        image : "assets/skills_Icon/html.svg"
                    },
                    {
                        name : "CSS",
                        desc : "Create CSS animations, responsive & cross-browser websites, and architect CSS codebases for reusability and maintainability.",
                        image: "assets/skills_Icon/css.svg"
                    },
                    {
                        name : "Javascript",
                        desc : "Understand OOP concepts, Functional programming, DOM, Data structures, etc.",
                        image: "assets/skills_Icon/javascript.svg"
                    },
                    {
                        name : "PHP",
                        desc : "Understand OOP concepts, Functional programming, Data structures, Develop web applications, etc.",
                        image: "assets/skills_Icon/php.svg"
                    },
                    {
                        name : "Laravel",
                        desc : "Develop web applications with MVC architecture, data manipulation and validation, eloquent ORM, and security and permissions.",
                        image: "assets/skills_Icon/Laravel.svg"
                    },
                    {
                        name : "CodeIgniter",
                        desc : "Develop web applications with MVC architecture, data manipulation and validation, eloquent ORM, and security and permissions.",
                        image: "assets/skills_Icon/codeigniter.svg"
                    }
                ]
            },
            {
                category : "Mobile Development",
                skills : [
                    {
                        name : "Flutter",
                        desc : "Develop multi-platform applications with reusable widgets, REST API, data persistence, Firebase, Bloc state management, etc.",
                        image: "assets/skills_Icon/flutter.svg"
                    },
                    {
                        name : "Android Studio (Java)",
                        desc : "Develop simple interactive android apps, work with activities, layouts, intents, listviews, recyclerview, adapters, fragments, etc.",
                        image: "assets/skills_Icon/Android_Studio.svg"
                    }
                ]
            },
            {
                category : "Design",
                skills : [
                    {
                        name : "Figma",
                        desc : "Create low-fidelity to high-fidelity designs, build fully interactive prototypes for mobile and desktop apps, work with design systems, components, auto layout, etc.",
                        image: "assets/skills_Icon/figma.svg"
                    },
                    {
                        name : "Adobe XD",
                        desc : "Create low-fidelity to high-fidelity designs, build fully interactive prototypes for mobile and desktop apps, work with design systems, components, smart layout, etc.",
                        image: "assets/skills_Icon/adobe-xd.svg"
                    },
                    {
                        name : "Adobe Photoshop",
                        desc : "Create and manipulate image, work with pen tool, selection tool clipping masks, colors, layers, etc.",
                        image: "assets/skills_Icon/adobe-photoshop.svg"
                    }
                ]
            }
        ]

        return (
            <div className="section_about">
                <div className="scroll">
                    <div className="content_about" data-aos="slide-up">
                        {/* Education */}
                        <div className="education">
                            <h1 className="education_title">My Education</h1>
                            {education.map((edu, index) => (
                                <div className="education_container" key={index}>
                                    <div className="education_time">
                                        <span className="education_rounder" />
                                        <span className="education_line" />
                                    </div>
                                    <div className="education_detail">
                                        <h2 className="education_race">{edu.education}</h2>
                                        <p className="education_specialty">{edu.specialty}</p>
                                        <p className="education_year">{edu.year}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* organisasi */}
                        <div className="education">
                            <h1 className="organisasi">Experience</h1>
                            {experience.map((exp, index) => (
                                <div className="education_container" key={index}>
                                    <div className="education_time">
                                        <span className="education_rounder" />
                                        <span className="education_line" />
                                    </div>
                                    <div className="education_detail mb-4">
                                        <h2 className="education_race"> {exp.job} @{" "} <span className="instansi">{exp.company}</span></h2>
                                        <p className="education_year">{exp.year}</p>
                                        <p className="job_desc">
                                            {exp.desc.length > 0 ? exp.desc.map((desc, index) => (
                                                <span key={index}>- {desc}<br /></span>
                                            )) : <span> </span>}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        
                        {/* skills */}
                        <div className="skills" id="skills">
                            <h1 className="section_title">Skills</h1>
                            <div className="acc">
                                {skills.map((skill, index) => (
                                    <div className="acc__card" key={index}>
                                        <div className="acc__title">{skill.category}</div>
                                        <div className="acc__panel">
                                            <div className="skill_list grids">
                                                {skill.skills.map((skill, index) => (
                                                    <div className="skill_data" key={index}>
                                                        <div className="skill_img">
                                                            <img
                                                                src={skill.image}
                                                                alt={skill.name}
                                                            />
                                                        </div>
                                                        <div className="skill_text">
                                                            <h3 className="skill_name">{skill.name}</h3>
                                                            <p className="skill_desc">{skill.desc}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;