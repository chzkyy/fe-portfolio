import React from "react";
import Tabs from "./Tabs";
import axios from "axios";
import parse from "html-react-parser";
import $ from "jquery";
import Loading from "./../loading";


let token;
const url = process.env.REACT_APP_API_URL;
const signature = process.env.REACT_APP_API_SIGNATURE;
const auth = process.env.REACT_APP_API_AUTH;
class Sisi_kanan extends React.Component {
    constructor() {
        super();
        this.state = {
            expanded: true,
            activeKey: "1",
            portfolio: [],
            education: [],
            experience: [],
            skills: [],
        };
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(eventKey) {
        this.setState({
            activeKey: eventKey,
        });
    }

    componentDidMount() {
        this.data();
    }

    data = async () => {
        const headers = {
            accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
            Authorization:
                "Basic "+ auth,
        };
        var clientCredential = null;
        await axios
            .get(url + "clientCredentials", {
                headers: headers,
            })
            .then((response) => {
                clientCredential = response.data;
                if (clientCredential.code === 200) {
                    token = clientCredential.data.token;
                    this.ApiCall(token);
                }
            })
            .catch((error) => { });
    };

    ApiCall($token) {
        // const [portfolio, setPortfolio] = useState([]);

        const options = {
            headers: {
                accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true",
                Authorization: "Bearer " + token,
            },
        };

        const data = {
            signature: signature,
        };
        
        // api call

        // portfolio
        axios.post(url + "portfolio", data, options)
            .then((response) => {
                this.setState({ portfolio: response.data });
            })
            .catch((error) => { });

        // education
        axios.post(url + "education", data, options)
            .then((response) => {
                this.setState({ education: response.data });
            })
            .catch((error) => { });

        // experience
        axios.post(url + "experience", data, options)
            .then((response) => {
                this.setState({ experience: response.data });
            })
            .catch((error) => { });

        // skills
        axios.post(url + "skills", data, options)
            .then((response) => {
                this.setState({ skills: response.data });
            })
            .catch((error) => { });
    }

    hide = (index) => {
        return function (j) {
            // mendapatkan dropdown yang di klik
            var dropDown = $(`.acc__panel:eq(${index})`);
            // membuka dropdown yang di klik dan menutup dropdown yang lain dan menghapus class active
            $(`.acc__panel`).not(dropDown).slideUp();
            $(`.acc__title`).not(dropDown).removeClass('active');

            // jika dropdown yang di klik sudah terbuka, dan di klik lagi, maka dropdown akan tertutup serta menghapus class active
            if($(dropDown).is(":visible")) {
                // $(dropDown).slideUp();
                $(`.acc__title:eq(${index})`).removeClass('active');
            } else {
                $(`.acc__title:eq(${index})`).addClass('active');
            }
            

            $(dropDown).stop(false, true).slideToggle();
            j.preventDefault();
        };
    };
 
    render() {
        // create loading screen while fetching data
        if (this.state.portfolio.length === 0 || this.state.education.length === 0 || this.state.experience.length === 0 || this.state.skills.length === 0) {
            return (
                <div className="loading">
                    <Loading />
                </div>
            );
        }
        return (
            <div className="col-md-8 SContent">
                <div className="container_content">
                    {/* tabs  */}
                    <Tabs />

                    <div id="myTabContent" className="tab-content">
                        <div
                            id="about"
                            role="tabpanel"
                            aria-labelledby="about-tab"
                            className="tab-pane fade py-4 show active"
                        >
                            <div className="section_about">
                                <div className="scroll">
                                    <div className="content_about" data-aos="slide-up">
                                        {/* Education */}
                                        <div className="education">
                                            <h1 className="education_title">My Education</h1>
                                            {this.state.education.data?.map((edu, index) => (
                                                <div className="education_container" key={index}>
                                                    <div className="education_time">
                                                        <span className="education_rounder" />
                                                        <span className="education_line" />
                                                    </div>
                                                    <div className="education_detail mb-4">
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
                                            {this.state.experience.data?.map((exp, index) => (
                                                <div className="education_container" key={index}>
                                                    <div className="education_time">
                                                        <span className="education_rounder" />
                                                        <span className="education_line" />
                                                    </div>
                                                    <div className="education_detail mb-4">
                                                        <h2 className="education_race"> {exp.position} @{" "} <span className="instansi">{exp.company}</span></h2>
                                                        <p className="education_year">{exp.role}</p>
                                                        <p className="education_year">{exp.year}</p>
                                                        <p className="job_desc">
                                                            {exp.description.length > 0 ? exp.description.map((desc, index) => (
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
                                                {this.state.skills.data?.map((skill, index) => (
                                                    <div className="acc__card mb-2" key={index}>
                                                        {/* create acc title on click */}
                                                        <div className="acc__title" onClick={this.hide(index)}>{skill.category}</div>
                                                        <div className="acc__panel">
                                                            <div className="skill_list grids">
                                                                {skill.skills?.map((skill, index) => (
                                                                    <div className="skill_data" key={index}>
                                                                        <div className="skill_img">
                                                                            <img src={skill.image} alt={skill.name} />
                                                                        </div>
                                                                        <div className="skill_text">
                                                                            <h3 className="skill_name">{skill.name}</h3>
                                                                            <p className="skill_desc">{skill.description}</p>
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
                        </div>

                        {/* porto */}
                        <div
                            id="portofolio"
                            role="tabpanel"
                            aria-labelledby="portofolio-tab"
                            className="tab-pane fade py-4"
                        >
                            <div className="section_portfolio">
                                <div className="scroll">
                                    {/* portfolio */}
                                    <div className="portfolio" data-aos="fade-in">
                                        <h1 className="works_title">My Portofolio</h1>
                                        <div className="container-portfolio">
                                            <div className="grid">
                                                {/* Project 1 */}
                                                {this.state.portfolio.data?.sort((a, b) => a.id - b.id).reverse().slice(0, 6)
                                                .map(
                                                    (port, index) => (
                                                        <div className="grid2" key={index}>
                                                            <article>
                                                                <img src={port.image} alt={port.name} />
                                                                <div className="text">
                                                                    <h3>{port.name}</h3>
                                                                    <p className="Pdesc">
                                                                        {port.short_description}
                                                                    </p>
                                                                    <div className="Ptools">
                                                                        {/* pisahkan tools berdasarkan , */}
                                                                        {port.tools
                                                                            .split(",")
                                                                            .map((tool, index) => (
                                                                                <div className="tools" key={index}>
                                                                                    {tool}
                                                                                </div>
                                                                            ))}
                                                                    </div>
                                                                    <button
                                                                        type="button"
                                                                        className="btn-detail"
                                                                        data-toggle="modal"
                                                                        data-target={`#myModal_${index}`}
                                                                    >
                                                                        View Detail
                                                                    </button>
                                                                </div>
                                                            </article>

                                                            {/* Modal */}
                                                            <div
                                                                id={`myModal_${index}`}
                                                                className="modal fade"
                                                                role="dialog"
                                                            >
                                                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                                    <div className="modal-content">
                                                                        <div className="modal-header">
                                                                            <h4 className="modal-title">
                                                                                {port.name}
                                                                            </h4>
                                                                            <button
                                                                                type="button"
                                                                                className="close"
                                                                                data-dismiss="modal"
                                                                            >
                                                                                ×
                                                                            </button>
                                                                        </div>
                                                                        <div className="modal-body">
                                                                            <div className="container-body">
                                                                                <img
                                                                                    src={port.image}
                                                                                    className="img-project"
                                                                                    alt={port.name}
                                                                                />
                                                                            </div>
                                                                            <h5 className="Pdesc">
                                                                                {parse(port.long_description)}
                                                                            </h5>
                                                                            <div className="Prole">
                                                                                <span>
                                                                                    Project Role :{" "}
                                                                                    <b>{parse(port.role)}</b>
                                                                                </span>
                                                                                <span>
                                                                                    {parse(port.project_role_description)}
                                                                                </span>
                                                                            </div>
                                                                            <div className="Ptools">
                                                                                {port.tools
                                                                                    .split(",")
                                                                                    .map((tool, index) => (
                                                                                        <div className="tools" key={index}>
                                                                                            {tool}
                                                                                        </div>
                                                                                    ))}
                                                                            </div>
                                                                        </div>
                                                                        <div className="modal-footer">
                                                                            <a
                                                                                href={port.link_project}
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                            >
                                                                                <button
                                                                                    type="button"
                                                                                    className="btn-view"
                                                                                >
                                                                                    View Prototype
                                                                                </button>
                                                                            </a>
                                                                            <a
                                                                                href={port.link_github}
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                            >
                                                                                <button
                                                                                    type="button"
                                                                                    className="btn-view"
                                                                                >
                                                                                    View Project
                                                                                </button>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ),
                                                    []
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sisi_kanan;