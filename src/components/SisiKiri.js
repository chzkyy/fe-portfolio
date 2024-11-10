import React from "react";

class SisiKiri extends React.Component {
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
                Full Stack Developer
            </p>
        );

        const contactMe = (
            <a
                className="btn btn-contact d-flex justify-content-center align-content-center align-items-center mt-4"
                href="mailto:ftrizkyy@gmail.com"
            >
                Contact Me!
            </a>
        );

        const socialLinks = [
            {
                name: "linkedin",
                link: "https://www.linkedin.com/in/rizkyfachurahman/",
                icon: "fa fa-linkedin"
            },
            {
                name: "github",
                link: "https://github.com/chzkyy",
                icon: "fa fa-github"
            },
            {
                name: "instagram",
                link: "https://www.instagram.com/_chzky/",
                icon: "fa fa-instagram"
            },
            {
                name: "behance",
                link: "https://www.behance.net/rizkyfachurahman",
                icon: "fa fa-behance"
            }
        ];

        const profilePicture = "/assets/profile.png";

        return (
            <div className="col-md-4 SKiri">
                <div className="info" data-aos="fade-in">
                    <div className="img-profile">
                        <img
                            src={profilePicture}
                            alt="profile"
                            className="rounded-circle profile"
                        />
                    </div>
                    <div className="home_social">
                        {socialLinks.map((social, index) => {
                            return (
                                <a
                                    href={social.link}
                                    rel="noopener noreferrer"
                                    className="home_social-link"
                                    aria-label={social.name}
                                    aria-hidden="true"
                                    key={social.name} // Use unique name instead of index
                                >
                                    <i className={social.icon} />
                                </a>
                            );
                        })}
                    </div>
                    <div className="about-us">
                        <div className="nama">
                            <h1>Rizky Fachurahman</h1>
                        </div>
                        <div className="about">
                            {about}
                        </div>
                        {contactMe}
                    </div>
                </div>
            </div>
        );
    }
}

export default SisiKiri;
