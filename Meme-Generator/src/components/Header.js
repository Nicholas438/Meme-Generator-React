import React from "react"

export default function Header(){
    return(
        <header className="header--meme">
                <img className = "troll-img" src = "./images/troll-face.png" alt="Troll"/>
                <h2 className="header--title">Meme Generator</h2>
                <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}