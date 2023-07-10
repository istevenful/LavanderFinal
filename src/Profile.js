import React, { useState, useEffect } from 'react'
import "./Profile.css"

function Profile() {
    return (
        <>
            <div className='home-container'>
                <img className='iphonestatus' src="iphoneStatus.png" alt="Status Bar"></img>
                <div className='top-bar'>
                    <a href='./connections' className='zIndex'><img className='chevron-left' src="Back.png" alt="Back button">
                    </img></a>
                    <div className='lavender-header'>
                        Lavender
                    </div>
                    <img className='profile-button' src="profile-button.png" alt="Profile">

                    </img>
                </div>
                <div className='content-meat'>

                    <div className='ProfilesCard'>
                        <img className='pcard-img' alt='Avatar 3 Zoomed' src='profile3Zoom.png'></img>
                        <div className='pName'>Sammy B.</div>
                        <div className='pronouns'>They/Them/He</div>
                        <div className='card-buttons'>
                            <a className='card-button-link' href='./chat'> <img  className='card-icons' alt='Chat Icon' src='CardChat.png'></img></a>
                            <img className='card-icons' alt='Video Icon' src='CardVideoCall.png'></img>
                            <img className='card-icons' alt='Call Icon' src='CardCall.png'></img>
                            <img className='card-icons' alt='Fav Icon' src='CardFav.png'></img>
                        </div>
                    </div>
                    <div className='profile-content'>
                        <div className='title1'>
                            About Sammy B. :
                        </div>
                        <div className='text1'>
                            I love being involved in my community and volunteering at my local LGBTQ+ center. I grew up not knowing any trans men and all I wanted was someone to answer my questions. So here I am trying to be that person for you!
                        </div>
                        <div className='title1'>
                            Topics Sammy B. has experience on:
                        </div>
                        <div className='text1'>
                            HRT, Top Surgery, Coming Out, Unaccepting Family, and Dating while Trans
                        </div>
                    </div>
                </div>
                <div className='bottom-bar'>
                    <div className='nav-bar'>
                        <div className='nav-item i-l nav-on'>
                            <a href="./connections" className='navIcon'><img src="connectionIconOn.png" alt="Connection Icon" ></img></a>
                            <p className='purple'>Connections</p>
                        </div>
                        <div className='nav-item-s '>
                            <a href="./" className='navIcon'><img src="homeIcon.png" alt="Home icon"></img></a>
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

export default Profile