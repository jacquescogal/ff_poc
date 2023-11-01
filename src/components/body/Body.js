import React, { useState, useEffect } from "react";
import style from "./Body.module.scss";

const Body = (props) => {
  const [rows, setRows] = useState([
    {
      image:
        "https://images.unsplash.com/photo-1502395809857-fd80069897d0?auto=format&fit=crop&q=80&w=2970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Sourcing of Raw Materials",
      text: "100% organic cotton from GreenFields Farms, Brazil.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1616252993439-7e1924e5c29b?auto=format&fit=crop&q=80&w=2970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Yarn Spinning",
      text: "Spun at EcoSpin Industries, Denmark, using renewable energy.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1506034844286-f98ed954e516?auto=format&fit=crop&q=80&w=2970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Dyeing and Printing",
      text: "Natural dyes by AquaDye Solutions, New Zealand, in a closed-loop system.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1593671186131-d58817e7dee0?auto=format&fit=crop&q=80&w=2970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Fabric Weaving",
      text: "Weaved at LoomCrafters Ltd., India, upholding international labor standards.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1533758488827-1ed0f9b03899?auto=format&fit=crop&q=80&w=2974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Cutting and Stitching",
      text: "Crafted by artisans at TailorMasters, Vietnam, in safe, fair-wage workshops.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&q=80&w=2448&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Quality Assurance",
      text: "Checked at QualityGuardians Inc., Canada; defective items upcycled.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80&w=2970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Packaging",
      text: "EcoPack Designs, Sweden, using biodegradable materials and soy-based inks.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?auto=format&fit=crop&q=80&w=2970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Distribution",
      text: "Distributed via CleanTransit Co., Germany, emphasizing carbon-neutral transport.",
    },
    {
      image:
        "https://cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/B7YQHVFQWVGZJJ3CBJMZGH3RC4.jpg",
      title: "Bought by You",
      text: "Bought at FarFetch, and worn by you!",
    },
  ]);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    console.log(window.scrollY);
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    // Attach the scroll listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup: remove the listener when the component is destroyed
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);  // The empty dependency array ensures this effect runs only on mount and unmount
  return (
    <div className={style.BodyHolder}>
      <p className={style.Scroll}>Current scroll position: {scrollPosition}px</p>
      {rows.map((row, id) => (
        <div key={id} className={`${style.Row} ${id % 2 === 0 ? "" : style.Reverse}`}>
          <img src={row.image} className={style.Image} />
          <div className={style.Text}>
            <div className={style.Block}>
              <h1 className={style.Title}>{row.title}</h1>
              <p className={style.Body}>{row.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Body;
