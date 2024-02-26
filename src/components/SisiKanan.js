import React from "react";
import Tabs  from "./Tabs";
import About from "./About";

class Sisi_kanan extends React.Component {
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
                            <About />
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
                                                {/* Project 6 */}
                                                <article>
                                                    <img src="assets/plant_store.png" alt="Plant_store" />
                                                    <div className="text">
                                                        <h3>Plant Store</h3>
                                                        <p className="Pdesc">
                                                            Plantstore is a personal project I'm working on.
                                                        </p>
                                                        <div className="Ptools">
                                                            <div className="tools">Flutter</div>
                                                            <div className="tools">Dart</div>
                                                            <div className="tools">Figma</div>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            className="btn-detail"
                                                            data-toggle="modal"
                                                            data-target="#myModal6"
                                                        >
                                                            View Detail
                                                        </button>
                                                    </div>
                                                </article>
                                                <div id="myModal6" className="modal fade" role="dialog">
                                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h4 className="modal-title">Plant Store</h4>
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
                                                                        src="assets/plant_store.png"
                                                                        className="img-project"
                                                                        alt="Cangz"
                                                                    />
                                                                </div>
                                                                <h5 className="Pdesc">
                                                                    Plantstore is a personal project I'm working on.
                                                                </h5>
                                                                <div className="Prole">
                                                                    <span>
                                                                        Project Role :{" "}
                                                                        <b>UI/UX Design and Front End Developer</b>
                                                                    </span>
                                                                    <span>- Create UI Design using figma</span>
                                                                    <span>
                                                                        - Implement code from UI Design using Flutter
                                                                        Framework
                                                                    </span>
                                                                    <span>
                                                                        - Create login &amp; register with email
                                                                    </span>
                                                                    <span>- Connect to firebase</span>
                                                                </div>
                                                                <div className="Ptools">
                                                                    <div className="tools">Flutter</div>
                                                                    <div className="tools">Dart</div>
                                                                    <div className="tools">Figma</div>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <a
                                                                    href="https://github.com/chzkyy/plantstore"
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    <button type="button" className="btn-view">
                                                                        View Code
                                                                    </button>
                                                                </a>
                                                                <a
                                                                    href="https://www.figma.com/file/237hdAvYYdjov8tlWhR7wd/PlantStore?node-id=0%3A1"
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    <button type="button" className="btn-view">
                                                                        View Design
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Project 5 */}
                                                <article>
                                                    <img src="assets/CangzSkrt.png" alt="Cangz" />
                                                    <div className="text">
                                                        <h3>CangzSkrt</h3>
                                                        <p className="Pdesc">
                                                            Price information search app on coffeshop.
                                                        </p>
                                                        <div className="Ptools">
                                                            <div className="tools">Flutter</div>
                                                            <div className="tools">Dart</div>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            className="btn-detail"
                                                            data-toggle="modal"
                                                            data-target="#myModal"
                                                        >
                                                            View Detail
                                                        </button>
                                                    </div>
                                                </article>
                                                <div id="myModal" className="modal fade" role="dialog">
                                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h4 className="modal-title">CANGZSKRT</h4>
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
                                                                        src="assets/CangzSkrt.png"
                                                                        className="img-project"
                                                                        alt="Cangz"
                                                                    />
                                                                </div>
                                                                <h5 className="Pdesc">
                                                                    Cangz skrt is an app that aims to find places
                                                                    we've never known before. As well as helping
                                                                    people to explore new places nearby.
                                                                </h5>
                                                                <div className="Prole">
                                                                    <span>
                                                                        Project Role : <b>Front End Developer</b>
                                                                    </span>
                                                                    <span>
                                                                        - Implement code from UI Design using Flutter
                                                                        Framework
                                                                    </span>
                                                                </div>
                                                                <div className="Ptools">
                                                                    <div className="tools">Flutter</div>
                                                                    <div className="tools">Dart</div>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <a
                                                                    href="https://github.com/chzkyy/CangzSkrt"
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    <button type="button" className="btn-view">
                                                                        View Code
                                                                    </button>
                                                                </a>
                                                                <a
                                                                    href="https://drive.google.com/drive/folders/1_37gX4qiLyKa7tYe0QfTmeEWdc4T2h25?usp=sharing"
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    <button type="button" className="btn-view">
                                                                        View Project
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Project 4 */}
                                                <article>
                                                    <img src="assets/aseekin-laravel.png" alt="Cangz" />
                                                    <div className="text">
                                                        <h3>Aseekin</h3>
                                                        <p className="Pdesc">Web version of Aseekin.</p>
                                                        <div className="Ptools">
                                                            <div className="tools">Laravel</div>
                                                            <div className="tools">Bootstrap</div>
                                                            <div className="tools">jQuery</div>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            className="btn-detail"
                                                            data-toggle="modal"
                                                            data-target="#myModal2"
                                                        >
                                                            View Detail
                                                        </button>
                                                    </div>
                                                </article>
                                                <div id="myModal2" className="modal fade" role="dialog">
                                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h4 className="modal-title">
                                                                    Aseekin - Web Version
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
                                                                        src="assets/aseekin-laravel.png"
                                                                        className="img-project"
                                                                        alt="Cangz"
                                                                    />
                                                                </div>
                                                                <h5 className="Pdesc">
                                                                    Aseekin is a mobile app that can help you when
                                                                    you are traveling, Aseekin can be easily used
                                                                    because it has several main features needed when
                                                                    traveling, making your trip easier. Aseekin also
                                                                    provides information about the range of costs
                                                                    that you will spend when you travel.
                                                                </h5>
                                                                <div className="Prole">
                                                                    <span>
                                                                        Project Role :{" "}
                                                                        <b>Front and Back End Developer</b>
                                                                    </span>
                                                                    <span>- Implement code from UI Design</span>
                                                                    <span>- Create database</span>
                                                                    <span>
                                                                        - Connecting the Google API into the website
                                                                    </span>
                                                                    <span>
                                                                        - Connecting front end code into a database
                                                                    </span>
                                                                </div>
                                                                <div className="Ptools">
                                                                    <div className="tools">Laravel</div>
                                                                    <div className="tools">Bootstrap</div>
                                                                    <div className="tools">jQuery</div>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <a
                                                                    href="https://github.com/chzkyy/laravel-aseekin"
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    <button type="button" className="btn-view">
                                                                        View Code
                                                                    </button>
                                                                </a>
                                                                <a
                                                                    href="https://aseekin.cupacu.my.id"
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    <button type="button" className="btn-view">
                                                                        View Project
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Project 3 */}
                                                <article>
                                                    <img src="assets/vanimals.png" alt="Cangz" />
                                                    <div className="text">
                                                        <h3>Vanimals</h3>
                                                        <p className="Pdesc">
                                                            Vanimals is an animal voice recognition app.
                                                        </p>
                                                        <div className="Ptools">
                                                            <div className="tools">Flutter</div>
                                                            <div className="tools">Dart</div>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            className="btn-detail"
                                                            data-toggle="modal"
                                                            data-target="#myModal3"
                                                        >
                                                            View Detail
                                                        </button>
                                                    </div>
                                                </article>
                                                <div id="myModal3" className="modal fade" role="dialog">
                                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h4 className="modal-title">Vanimals</h4>
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
                                                                        src="assets/vanimals.png"
                                                                        className="img-project"
                                                                        alt="Cangz"
                                                                    />
                                                                </div>
                                                                <h5 className="Pdesc">
                                                                    Vanimals is an animal voice recognition app,
                                                                    vanimals created aimed at introducing animals to
                                                                    children. This app is created using flutter
                                                                    framework.
                                                                </h5>
                                                                <div className="Prole">
                                                                    <span>
                                                                        Project Role : <b>Front End Developer</b>
                                                                    </span>
                                                                    <span>
                                                                        - Implement code from UI Design using Flutter
                                                                        Framework
                                                                    </span>
                                                                </div>
                                                                <div className="Ptools">
                                                                    <div className="tools">Flutter</div>
                                                                    <div className="tools">Dart</div>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <a
                                                                    href="https://github.com/chzkyy/flutter-vanimals"
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    <button type="button" className="btn-view">
                                                                        View Code
                                                                    </button>
                                                                </a>
                                                                <a
                                                                    href="https://drive.google.com/file/d/1mNtDW9iexd7fvnSceCKv0TlDQfTD2uKl/view?usp=sharing"
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    <button type="button" className="btn-view">
                                                                        View Project
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Project 2 */}
                                                <article>
                                                    <img src="assets/MelekTech.png" alt="Cangz" />
                                                    <div className="text">
                                                        <h3>MelekTech</h3>
                                                        <p className="Pdesc">
                                                            MelekTech is a website that connect business owner
                                                            with freelances.
                                                        </p>
                                                        <div className="Ptools">
                                                            <div className="tools">Figma</div>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            className="btn-detail"
                                                            data-toggle="modal"
                                                            data-target="#myModal4"
                                                        >
                                                            View Detail
                                                        </button>
                                                    </div>
                                                </article>
                                                <div id="myModal4" className="modal fade" role="dialog">
                                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h4 className="modal-title">MelekTech</h4>
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
                                                                        src="assets/MelekTech.png"
                                                                        className="img-project"
                                                                        alt="Cangz"
                                                                    />
                                                                </div>
                                                                <h5 className="Pdesc">
                                                                    MelekTech is a website that connect business
                                                                    owner with freelances. we intend to help
                                                                    business to grow and adept to digitalized era.
                                                                    with this platfrom We have some features like
                                                                    forum that can be used for discussions for
                                                                    business owner to other business owner, matching
                                                                    business owner to freelancers etc.
                                                                </h5>
                                                                <div className="Prole">
                                                                    <span>
                                                                        Project Role : <b>UI/UX Design</b>
                                                                    </span>
                                                                    <span>
                                                                        - Collaborate with other designers to conduct
                                                                        user research (remote interviews).
                                                                    </span>
                                                                    <span>
                                                                        - Create site map, user flow, wireframes,
                                                                        lo-fi, hi-fi and prototype.
                                                                    </span>
                                                                </div>
                                                                <div className="Ptools">
                                                                    <div className="tools">Figma</div>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <a
                                                                    href="https://www.figma.com/proto/kYBqc0jNeLFyAZw51H0qLs/Hackathon?node-id=59%3A70&scaling=min-zoom&page-id=0%3A1"
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    <button type="button" className="btn-view">
                                                                        View Prototype
                                                                    </button>
                                                                </a>
                                                                <a
                                                                    href="https://www.figma.com/file/kYBqc0jNeLFyAZw51H0qLs/Hackathon?node-id=0%3A1"
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    <button type="button" className="btn-view">
                                                                        View Project
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Project 1 */}
                                                <article>
                                                    <img src="assets/ux-aseekin.png" alt="Cangz" />
                                                    <div className="text">
                                                        <h3>Aseekin</h3>
                                                        <p className="Pdesc">
                                                            Aseekin is a mobile app that can help you when you
                                                            are traveling.
                                                        </p>
                                                        <div className="Ptools">
                                                            <div className="tools">Figma</div>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            className="btn-detail"
                                                            data-toggle="modal"
                                                            data-target="#myModal5"
                                                        >
                                                            View Detail
                                                        </button>
                                                    </div>
                                                </article>
                                                <div id="myModal5" className="modal fade" role="dialog">
                                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h4 className="modal-title">Aseekin - UI</h4>
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
                                                                        src="assets/ux-aseekin.png"
                                                                        className="img-project"
                                                                        alt="Cangz"
                                                                    />
                                                                </div>
                                                                <h5 className="Pdesc">
                                                                    Aseekin is a mobile app that can help you when
                                                                    you are traveling, Aseekin can be easily used
                                                                    because it has several main features needed when
                                                                    traveling, making your trip easier. Aseekin also
                                                                    provides information about the range of costs
                                                                    that you will spend when you travel. Aseekin can
                                                                    also be your tour guide and this application can
                                                                    show you some recommended tourist destinations
                                                                    in the city.
                                                                </h5>
                                                                <div className="Prole">
                                                                    <span>
                                                                        Project Role : <b>UI/UX Designer</b>
                                                                    </span>
                                                                    <span>
                                                                        - Collaborate with other designers to conduct
                                                                        user research (interviews using
                                                                        questionnaires)
                                                                    </span>
                                                                    <span>
                                                                        - Create wireframes, lo-fi, hi-fi and
                                                                        prototype
                                                                    </span>
                                                                </div>
                                                                <div className="Ptools">
                                                                    <div className="tools">Figma</div>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <a
                                                                    href="https://www.figma.com/proto/otMh7TaruYdioGOa4o598M/ASeekin_Final?node-id=6%3A30&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A78"
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    <button type="button" className="btn-view">
                                                                        View Prototype
                                                                    </button>
                                                                </a>
                                                                <a
                                                                    href="https://www.figma.com/file/otMh7TaruYdioGOa4o598M/ASeekin_Final?node-id=6%3A30"
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    <button type="button" className="btn-view">
                                                                        View Project
                                                                    </button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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