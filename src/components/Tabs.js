import React from "react";

class Tabs extends React.Component {
    render() {
        const tabs = [
            {
                name: "About",
                id: "about-tab",
                controls: "about",
                key: "1",
            },
            {
                name: "Portfolio",
                id: "portofolio-tab",
                controls: "portofolio",
                key: "2",
            },
        ];

        return (
            <ul
                className="nav nav-tabs nav-pills flex-column flex-sm-row text-center border-0 rounded-nav"
                id="myTab"
                role="tablist"
            >
                {tabs.map((tab) => (
                    <li
                        className="nav-item flex-sm-fill"
                        key={tab.key}
                        role="presentation"
                    >
                        <a
                            id={tab.id}
                            href={`#${tab.controls}`}
                            className={`nav-link border-0 font-weight-bold ${
                                this.props.activeKey === tab.key ? "active" : ""
                            }`}
                            role="tab"
                            aria-controls={tab.controls}
                            aria-selected={
                                this.props.activeKey === tab.key ? "true" : "false"
                            }
                            onClick={(e) => {
                                e.preventDefault();
                                this.props.onSelect(tab.key);
                            }}
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
