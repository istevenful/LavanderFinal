import React from 'react'
import "./Chat.css"
function Chat() {
    return (
        <>
            <div className='home-container'>
                <img className='iphonestatus' src="iphoneStatus.png" alt="Status Bar"></img>
                <div className='top-bar'>
                    <a href='./profile' className='zIndex'><img className='chevron-left-chat' src="Back.png" alt="Back button">
                    </img></a>
                    <div className='chat-header'>
                        <img className='chat-avatar' alt='Avatar 3' src='profile3Zoom.png'></img>
                        <div className='NameandTime'>
                            <div className='chat-name'>Sammy B.</div>
                            <div className='active-status'>Active a week ago</div>
                        </div>
                    </div>
                    <img className='chat-icon' src="CardVideoCall.png" alt="Video">

                    </img>
                    <img className='chat-icon' src="CardCall.png" alt="Call">

                    </img>
                    <img className='chat-icon' src="Report.png" alt="Report">

                    </img>
                </div>
                <div className='content-meat-chat'>
                    <div className='chat-padding'>
                        <div className='chat-date'>
                            <p>Thur, Jul 6</p>
                        </div>
                        <div className='chat-message'>
                            <p>Hi Sammy! I’m trying to get my
                                top surgery date scheduled right
                                now... any advice? I don’t know anyone who’s had it and I’m scared of recovery and how I’ll feel after it’s done. Thanks for being here to answer these questions! (:</p>
                            <div className='seenTime'>8:41 PM <img className='seenCheck' alt='Check' src="checkmark.png"></img></div>
                        </div>
                    </div>
                </div>
                <div className='bottom-bar'>
                    <div className='nav-bar'>

                    </div>
                    <img className='botton-notch' src="bottomNotch.png" alt="Bottom pull up">
                    </img>
                </div>
            </div>
        </>
    )
}

export default Chat