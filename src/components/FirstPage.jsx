import { useState } from 'react';
import '../style/components/FirstPage.css'
import Mequee from './Mequee.jsx'
import Panel from './Panel.jsx';
const tabs = ['Design', 'Project', 'Execution'];

const tabData = {
    Design: {
        image: './page4-1.webp',
        text: 'Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.',
        bgColor: '#000000',
        align: 'center',
    },
    Project: {
        image: './page4-2.webp',
        text: 'Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.',
        bgColor: '#111111',
        align: 'left',
    },
    Execution: {
        image: './page4-3.webp',
        text: 'We ere with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.',
        bgColor: '#222222',
        align: 'right',
    }
};
function FirstPage() {
    const [activeTab, setActiveTab] = useState('Design');

    const { image, text, bgColor, align } = tabData[activeTab];

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        console.log(tab);
        
    }

    return (
        <>
            <div className='home-page'>
                <div className='left' data-scroll data-scroll-speed="3">
                    Sundown is a multi-disciplinary studio focused on creating unique, end-to-end experiences and environments.
                </div>
                <div className='right' data-scroll data-scroll-direction="horizontal" data-scroll-speed="3">
                    SPACES THAT INSPIRE
                </div>
            </div>
            <div className='home-video'>
                <video autoPlay muted loop playsInline>
                    <source src="video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className='hero-shape1' data-scroll></div>
            <div className='hero-shape2' data-scroll></div>
            <div className='hero-shape3' data-scroll></div>
            <Mequee />
            <div className='mequee-bottom'>
                <div className='top' data-scroll data-scroll-direction="vertical" data-scroll-speed="3">
                    <h1>We are a group of design-driven, goal-focused creators, producers, and designers who believe that the details make all the difference.</h1>
                </div>
                <div className='bottom' data-scroll data-scroll-direction="horizontal" data-scroll-speed="3">
                    <img src="./thumb.webp" />
                    <h3>
                        We love to create, we love to solve, we love to collaborate, and we love to turn amazing ideas into reality. We’re here to partner with you through every step of the process and know that relationships are the most important things we build.
                    </h3>
                </div>
                <div className='hero-shape4' data-scroll></div>
                <div className='hero-shape5' data-scroll></div>
            </div>
            <Panel />
            <div className="header-main">
                <div className='header-links'>
                    <h3> <a href="https://github.com/Paradva-Niraj" target="_blank" rel="noopener noreferrer"> All Projects - </a></h3>
                </div>
            </div>
            <div className='home-display'>
                    <div className='tabs-links'>
                        {
                            tabs.map((tab,index)=>(
                                <div className={activeTab==tab?'activediv':'nonactivediv'} key={index} onClick={() => handleTabChange(tab)}>{tab}</div>
                            ))
                        }
                    </div>
            </div>
        </>
    );
}

export default FirstPage;