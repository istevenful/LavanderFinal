import React, { useState, useEffect } from 'react'
import "./Connection.css"

function Connection() {
    return (
        <>
            <div className='home-container'>
                <img className='iphonestatus' src="iphoneStatus.png" alt="Status Bar"></img>
                <div className='top-bar'>
                    <a href='#/'><img className='chevron-left' src="Back.png" alt="Back button">
                    </img></a>
                    <div className='lavender-header'>
                        Lavender
                    </div>
                    <img className='profile-button' src="profile-button.png" alt="Profile">

                    </img>
                </div>
                <div className='content-meat'>

                    <h1 className='mainText'>Your Connections</h1>
                    <p className='subText'>These are 5 recommendations of experiences
                        Lavender members based on the topics you are
                        seeking advice on. Click on their profile to start talking.</p>

                    <div className='userProfiles'>
                    <div className='profileS'>
                            <div className='profileDetailsSmall'>
                                <img className='avatar' alt='Profile Avatar' src='profile3.png'></img>
                                <h1 className='mainText'>Sammy B.</h1>
                                <p className='pronouns '>They/Them/He</p>
                                <img className='fav-button' src="favButton.png" alt="Favorite Button"></img>
                            </div>
                            <h2>About:</h2>
                            <p className='about-bio '>I love being involved in my community and volunteering at my local LGBTQ+ center. I grew up not knowing any trans men and all I wanted was someone to answer my questions.</p>
                        </div>
                        <a href='#/profile' className='black'><div className='profileL'>
                            <div className='profileDetails'>
                                <img className='avatar' alt='Profile Avatar' src='profile3.png'></img>
                                <h1>Sammy B.</h1>
                                <p className='pronouns '>They/Them/He</p>
                                <img className='fav-button' src="favButton.png" alt="Favorite Button"></img>
                            </div>
                            <h2>About:</h2>
                            <p className='about-bio '>I love being involved in my community and volunteering at my local LGBTQ+ center. I grew up not knowing any trans men and all I wanted was someone to answer my questions.</p>
                        </div>
                        </a>
                        <div className='profileS'>
                            <div className='profileDetailsSmall'>
                                <img className='avatar' alt='Profile Avatar' src='profile3.png'></img>
                                <h1>Sammy B.</h1>
                                <p className='pronouns '>They/Them/He</p>
                                <img className='fav-button' src="favButton.png" alt="Favorite Button"></img>
                            </div>
                            <h2>About:</h2>
                            <p className='about-bio '>I love being involved in my community and volunteering at my local LGBTQ+ center. I grew up not knowing any trans men and all I wanted was</p>
                        </div>
                    </div>
                    <div className='RefreshButton'>
                        <img className='rbut' alt='Refresh Button' src='RefreshButton.png'></img>
                        <p className='refreshText '>Refresh my recommendations</p>
                    </div>
                </div>
                <div className='bottom-bar'>
                    <div className='nav-bar'>
                        <div className='nav-item i-l nav-on'>
                            <img className='navIcon ' src="connectionIconOn.png" alt="Connection Icon" ></img>
                            <p className='purple'>Connections</p>
                        </div>
                        <div className='nav-item-s '>
                        <a href="#/" className='navIcon'><img  src="homeIcon.png" alt="Home icon"></img></a>
                            <p>Home</p>
                        </div>
                        <div className='nav-item-s '>
                            <img className='navIcon' src="storiesIcon.png" alt="Story icon"></img>
                            <p>Stories</p>
                        </div>
                        <div className='nav-item i-r'>
                            <img className='navIcon' src="favIcon.png" alt="Fav Icon"></img>
                            <p>Favorites</p>
                        </div>
                    </div>
                    <img className='botton-notch' src="bottomNotch.png" alt="Bottom pull up">
                    </img>
                </div>
            </div>
        </>
    )
}

export default Connection