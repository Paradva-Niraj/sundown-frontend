import { useRef,useEffect } from "react";
import FirstPage from "../components/FirstPage";
import Header from "../components/Header";
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

function Home() {
    const scrollRef = useRef(null);

    useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

    return ( 
        <div data-scroll-container ref={scrollRef}>
            <Header />
            <FirstPage />           
        </div>
     );
}

export default Home;