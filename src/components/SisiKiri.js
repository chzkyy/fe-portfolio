import React from "react";

class Sisi_kiri extends React.Component {
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

        const about = (
            <p>
                I‘am focus in Web Developer and interested in UI/UX Design and
                Mobile Development
            </p>
        )

        const contact_me = (
            <a
                className="btn btn-contact d-flex justify-content-center align-content-center align-items-center mt-4"
                href="mailto:ftrizkyy@gmail.com">
                Contact Me!
            </a>
        )
        
        const sosmed = [
            {
                name: "linkedin",
                link: "https://www.linkedin.com/in/rizkyfachurahman/",
                icon: "fa fa-linkedin"
            },
            {
                name: "github",
                link: "https://github.com/chzkyy",
                icon: "fa fa-github",
            },
            {
                name: "instagram",
                link: "https://www.instagram.com/_chzky/",
                icon: "fa fa-instagram",
            },
            {
                name: "behance",
                link: "https://www.behance.net/rizkyfachurahman",
                icon: "fa fa-behance",
            }
        ]

        const profile_picture = "/assets/profile.png";

        return (
            <div className="col-md-4 SKiri">
                <div className="info" data-aos="fade-in">
                    <div className="img-profile">
                        <img
                            src={profile_picture}
                            alt="profile"
                            className="rounded-circle profile"
                        />
                    </div>
                    <div className="home_social">
                        {sosmed.map((sosmed, index) => {
                            return (
                                <a
                                    href={sosmed.link}
                                    rel="noopener noreferrer"
                                    className="home_social-link"
                                    aria-label={sosmed.name}
                                    aria-hidden="true"
                                    key={index}

                                >
                                    <i className={sosmed.icon} />
                                </a>
                            )
                        })}
                    </div>
                    <div className="about-us">
                        <div className="nama">
                            <h1>Rizky Fachurahman</h1>
                        </div>
                        <div className="about">
                            {about}
                        </div>
                            {contact_me}
                    </div>
                </div>
            </div>
        );
    }
}

export default Sisi_kiri;