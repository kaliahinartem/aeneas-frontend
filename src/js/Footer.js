import React from "react";

const socialLinks = [
    {
        id: "github",
        url: "https://github.com/AeneasPlatform",
    },
];

const Footer = ({ version }) => {
    return (
        <div className="menu-footer">
            <div>Powered by Aeneas core team</div>
            <div>
                {socialLinks.map((item) => (
                    <a
                        key={item.id}
                        className={`social ${item.id}`}
                        href={item.url}
                        target="_blank"
                    ></a>
                ))}
            </div>
            <div>
                <a className="fade" href="http://aeneas.pm/" target="_blank">
                    http://aeneas.pm/
                </a>
            </div>
        </div>
    );
};

export default Footer;
