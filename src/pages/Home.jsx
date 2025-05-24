import { useRef, useEffect } from "react";
import FirstPage from "../components/FirstPage";
import Header from "../components/Header";
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

function Home() {
  const scrollRef = useRef(null);
  const scrollInstance = useRef(null);

  useEffect(() => {
    // Initialize locomotive-scroll
    scrollInstance.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    // Update scroll after all content is loaded
    const handleLoad = () => {
      setTimeout(() => {
        scrollInstance.current?.update();
      }, 100); // wait for layout to settle
    };

    window.addEventListener("load", handleLoad);

    // Cleanup
    return () => {
      window.removeEventListener("load", handleLoad);
      scrollInstance.current?.destroy();
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
