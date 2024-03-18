import React from "react";
import ApiExperience from "../services/ApiExperience";
import ApiEducation from "../services/ApiEducation";
import ApiSkills from "../services/ApiSkills";

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
        
        return (
            <div className="section_about">
                <div className="scroll">
                    <div className="content_about" data-aos="slide-up">
                        {/* Education */}
                        <ApiEducation />

                        {/* organisasi */}
                        <ApiExperience />
                        
                        {/* skills */}
                        <ApiSkills />
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default About;