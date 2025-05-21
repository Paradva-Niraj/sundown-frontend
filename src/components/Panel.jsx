import { useState } from 'react';
import '../style/components/Panel.css'
function Panel() {

    const [data, setData] = useState([
        {
            title: "Play New Kidvision",
            client: "NIKE",
            category: "Environment"
        },
        {
            title: "SOHO NYC",
            client: "ARC'TERYX",
            category: "Environment"
        },
        {
            title: "SOHO 2023",
            client: "CONVERSE",
            category: "Environment"
        },
        {
            title: "NYFW Popup",
            client: "AFTERPAY",
            category: "Experiential"
        },
        {
            title: "Makers Studio HOI",
            client: "NIKE",
            category: "Experiential"
        },
        {
            title: "Air Force 1 2021",
            client: "NIKE",
            category: "Environment"
        },
        {
            title: "50th Anniversary",
            client: "NIKE",
            category: "Environment"
        }
    ]
    )
    // console.log(data);

    return (
        // <div className='links'>
        //     <div className="elem">
        //         <div className="overlay"></div>
        //         <div className='data'>
        //             <h2>hello</h2>
        //             <div>
        //                 <h3>hello2 via</h3>
        //                 <h3>nicxx</h3>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <>
            
                <div className='links'>
            {    data.map((items,index) => (
                    <div className="elem" key={index}>
                        <div className="overlay"></div>
                        <div className='data'>
                            <h2>{items.title}</h2>
                            <div>
                                <h3>{items.client}</h3>
                                <h3>{items.category}</h3>
                            </div>
                        </div>
                    </div>
                    ))
                }
                </div>
        </>
    );
}

export default Panel;   