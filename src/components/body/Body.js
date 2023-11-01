import React, { useState, useEffect, useRef, createRef } from "react";
import style from "./Body.module.scss";

const progressBarStyles = {
  position: 'absolue',
  top: 0,
  left: 0,
  width: '100%',
  height: '0%', // this will be dynamically updated
  backgroundColor: 'white',
  zIndex: 500// to ensure it's above most other content
};


const Body = (props) => {
  
  const [rows,setRows] = useState([
    {
      image:
        "https://images.unsplash.com/photo-1502395809857-fd80069897d0?auto=format&fit=crop&q=80&w=2970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Sourcing of Raw Materials",
      text: "100% organic cotton from GreenFields Farms, Brazil.",
      active: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1616252993439-7e1924e5c29b?auto=format&fit=crop&q=80&w=2970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Yarn Spinning",
      text: "Spun at EcoSpin Industries, Denmark, using renewable energy.",
      active: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1506034844286-f98ed954e516?auto=format&fit=crop&q=80&w=2970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Dyeing and Printing",
      text: "Natural dyes by AquaDye Solutions, New Zealand, in a closed-loop system.",
      active: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1593671186131-d58817e7dee0?auto=format&fit=crop&q=80&w=2970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Fabric Weaving",
      text: "Weaved at LoomCrafters Ltd., India, upholding international labor standards.",
      active: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1533758488827-1ed0f9b03899?auto=format&fit=crop&q=80&w=2974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Cutting and Stitching",
      text: "Crafted by artisans at TailorMasters, Vietnam, in safe, fair-wage workshops.",
      active: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&q=80&w=2448&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Quality Assurance",
      text: "Checked at QualityGuardians Inc., Canada; defective items upcycled.",
      active: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80&w=2970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Packaging",
      text: "EcoPack Designs, Sweden, using biodegradable materials and soy-based inks.",
      active: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?auto=format&fit=crop&q=80&w=2970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Distribution",
      text: "Distributed via CleanTransit Co., Germany, emphasizing carbon-neutral transport.",
      active: false,
    },
    {
      image:
        "https://cloudfront-eu-central-1.images.arcpublishing.com/businessoffashion/B7YQHVFQWVGZJJ3CBJMZGH3RC4.jpg",
      title: "Bought by You",
      text: "Bought at FarFetch, and worn by you!",
      active: false,
    },
  ]);
  const rowRefs = useRef([]); // array for refs to each row

if (rowRefs.current.length !== rows.length) {
  // add or remove refs
  rowRefs.current = Array(rows.length)
    .fill()
    .map((_, i) => rowRefs.current[i] || createRef());
}

const handleClick = (id) => {
  props.appRef.current?.scrollTo({
    top: rowRefs.current[id].offsetTop-props.appRef.current.clientHeight/3.2,
    behavior: 'smooth'
  });
}

useEffect(() => {
}, [props.scrollPosition]);

  
  return (
    <div className={style.BodyHolder}>
      <div className={style.ProgressBar}>
      <div style={{ ...progressBarStyles, height: `calc(${props.scrollPercentage/100} * 50vh)` }} className={style.ProgressLine}>
        {rows.map((row, id) => (
          <div style={{ opacity: `${props.scrollPercentage+2>=id*(100/8)?1:0.5}`, 
          top:`calc(50vh * ${id}/ 8)`, 
          scale:`${props.scrollPercentage+2>=id*(100/8)?1:0.5}`,
        }} className={style.ProgressCircle}
        onClick={e=>handleClick(id)}>
          <div className={style.ProgressCircleInner}></div>
          </div>
          ))}
      </div>
      </div>
      {rows.map((row, id) => (
        <div key={id} className={`${style.Row} ${row.active===true?style.Active:style.Inactive} ${id % 2 === 0 ? "" : style.Reverse}`}  ref={(el) => {
          rowRefs.current[id] = el;
          if (el && props.scrollPosition >= el.offsetTop && props.scrollPosition < el.offsetTop + el.offsetHeight) {
            row.active = true;
          }
          else{
            row.active = false;
          }
        }}>
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
