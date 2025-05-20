import '../style/components/FirstPage.css'
function FirstPage() {
    return (
        <>
            <div className='home-page'>
                <div className='left'>
                    Sundown is a multi-disciplinary studio focused on creating unique, end-to-end experiences and environments.
                </div>
                <div className='right'>
                    SPACES THAT INSPIRE
                </div>
            </div>
            <div className='home-video'>
                <video autoPlay muted loop playsInline>
                    <source src="video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

        </>
    );
}

export default FirstPage;