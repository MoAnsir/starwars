import React from "react";
import "./listView.css";

const listView = props => {
    const profileUrlStart = "https://api.adorable.io/avatars/150/";
    const profileUrlEnd = ".png";
    return (
        <div className="listView">
            {props.items.map(item => (
                <div className="user" key={item.name} onClick={props.click}>
                    <img className="user__img rounded-lg" src={profileUrlStart + item.name + profileUrlEnd} alt=""/>
                    <p className="user__name">name: {item.name}</p>
                    <p className="user__birth">birth_year: {item.birth_year}</p>
                    <p className="user__height">Height: {item.height}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default listView;
