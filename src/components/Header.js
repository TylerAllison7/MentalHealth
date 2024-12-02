import React from "react";

const Header = ({banner}) => {
    console.log(banner);
    return (
        <header
           className="header text-center py-8 bg-cover bg-center"
           style={{ backgroundImage: `url(./images/${banner})`}}
           alt="Mental Health Awareness Month is in May."
        >
        </header>
    );
}

export default Header;