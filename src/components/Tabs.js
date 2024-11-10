import React from "react";

class Tabs extends React.Component {
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

        const tabs = [
            {
                name : "About",
                id : "about-tab",
                controls: 'about',
                active : "true",
                selected : 'active'
            },
            {
                name : "Portofolio",
                id : "portofolio-tab",
                controls: 'portofolio',
                active : "false",
                selected : ''
            }
        ]
        
        return (
            <ul
                className="nav nav-tabs nav-pills flex-column flex-sm-row text-center border-0 rounded-nav"
                id="myTab"
                role="tablist"
                aria-owns="about-tab portofolio-tab"
            >
                {tabs.map((tab, index) => (
                    <li className="nav-item flex-sm-fill" key={index}>
                        <a
                            id={`${tab.id}-tab`}
                            data-toggle="tab"
                            href={`#${tab.controls}`}
                            role="tab"
                            aria-controls={`${tab.controls}`}
                            aria-selected={tab.active}
                            className={`nav-link border-0 font-weight-bold ${tab.selected ? "active" : ""}`}
                        >
                            {tab.name}
                        </a>
                    </li>
                ))}
                    
            </ul>
        );
    }
}

export default Tabs;