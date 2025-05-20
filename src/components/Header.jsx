import '../style/components/Header.css'

function Header() {
    return (
        <>
            <div className="header-main">
                <img src="./studio.svg" alt="" srcset="" />
                <div className='header-links'>
                    <h3> <a href="http://" target="_blank" rel="noopener noreferrer"> Work </a></h3>
                    <h3> <a href="http://" target="_blank" rel="noopener noreferrer"> Studio </a> </h3>
                    <h3> <a href="http://" target="_blank" rel="noopener noreferrer">   Contact   </a> </h3>
                </div>
            </div>
           
        </>
    );
}

export default Header;