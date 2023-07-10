import React, { useState, useEffect } from 'react'
import "./Home.css"
function Home() {
    const [showPopUp, setShowPopUp] = useState(false);

    useEffect(() => {
        if (showPopUp == false) {
            setTimeout(() => {
                setShowPopUp(true);
            }, 2000);
        }

    }, [showPopUp]);

    return (
        <>
            <div className='home-container'>
                <img className='iphonestatus' src="iphoneStatus.png" alt="Status Bar"></img>
                <div className='top-bar'>
                    <img className='chevron-left' src="Back.png" alt="Back button">
                    </img>
                    <div className='lavender-header'>
                        Lavender
                    </div>
                    <img className='profile-button' src="profile-button.png" alt="Profile">

                    </img>
                </div>
                <div className='content-meat'>
                    {showPopUp == true ? <>
                        <div className='Overlay'>
                            <div className='popupBox'>
                                <img class="popupClose" alt="Close Icon" src='CloseIcon.png' onClick={() => setShowPopUp(false)}></img>
                                <div className='popupTitle'>
                                    Welcome to Lavender
                                </div>
                                <img className='popupImg' alt='Lavender Phone' src='popUpImage.png'></img>
                                <p>Click below on the connections tab to start talking to people who could advise you on your preferred topics.</p>
                                <div className='divider' />
                                <p className='popup-bottom-text'>Click on connections to start talking</p>
                            </div>
                            <img class="popupTail" alt="Popup Tail" src='popupTail.png'></img>

                        </div>
                    </> : <></>}

                    <h1>Hey there!👋</h1>

                    <div className='Home-Buttons'>
                        <div className='home-button-text'>
                            <h2>Seek Advice</h2>
                            <p>Start selecting topics to seek advice on.</p>

                        </div>
                        <img className='seekIcon' src="share.png" alt="Seek Icon"></img>
                    </div>
                    <div className='Home-Buttons'>
                        <div className='home-button-text'>
                            <h2>Share my experience</h2>
                            <p>Start sharing topics to share experiences about</p>
                        </div>
                        <img className='shareIcon' src="share.png" alt="Share Icon"></img>
                    </div>
                    <div className='topic-history'>
                        <p>Go to my topic history</p>
                        <img className='nextButton' src="Go.png" alt="Right Chevron"></img>
                    </div>
                    <div className='Chat-History'>
                        <h1>Chats</h1>
                        <div className='chat-log tcr'>
                            <img className='chat-log-avatar' src='profile1.png' alt="Avatar1"></img>
                            <div className='chat-log-content'>
                                <div className='chat-text'>
                                    <div className='topText'>
                                        <h3>Sammy B.</h3>
                                        <p>06/06/23</p>
                                    </div>
                                    <div className='bottomText'>
                                        <p><img className='checkmark' alt='Check' src='checkmark.png' />Hi Sammy! I'm trying to get m...</p>
                                        <img className='nextButton no-padding' src="Go.png" alt="Right Chevron"></img>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='chat-log'>
                            <img className='chat-log-avatar' src='profile2.png' alt="Avatar2"></img>
                            <div className='chat-log-content'>
                                <div className='chat-text'>
                                    <div className='topText'>
                                        <h3>Lavender Bloom</h3>
                                        <p>05/14/23</p>
                                    </div>
                                    <div className='bottomText'>
                                        <p><img className='checkmark' alt='2Check' src='doublecheckmark.png' />How are you doing after the...</p>
                                        <img className='nextButton no-padding' src="Go.png" alt="Right Chevron"></img>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='chat-log bcr'>
                            <img className='chat-log-avatar' src='profile3.png' alt="Avatar3"></img>
                            <div className='chat-log-content'>
                                <div className='chat-text'>
                                    <div className='topText'>
                                        <h3>Lavender Violet</h3>
                                        <p>05/12/23</p>
                                    </div>
                                    <div className='bottomText'>
                                        <p><img className='checkmark' alt='2Check' src='doublecheckmark.png' />Violet I understand what you...</p>
                                        <img className='nextButton no-padding' src="Go.png" alt="Right Chevron"></img>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bottom-bar'>
                    <div className='nav-bar'>
                        <div className='nav-item i-l'>
                        <a href="#/connections" className='navIcon'><img  src="connectionIcon.png" alt="Connection Icon"></img></a>
                            <p>Connections</p>
                        </div>
                        <div className='nav-item-s nav-on'>
                            <img className='navIcon' src="homeIconOn.png" alt="Home icon"></img>
                            <p className='purple'>Home</p>
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

export default Home