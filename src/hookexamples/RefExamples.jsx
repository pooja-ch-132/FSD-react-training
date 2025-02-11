import React, { useEffect, useRef, useState } from "react";
import VIDEO from "./Video.mp4";
const RefExamples = () => {
  const [play, setPlay] = useState(true);
  const eleRef = useRef();
  const videoRef = useRef();
  console.log(videoRef);
  //console.log(eleRef);
  useEffect(() => {
    eleRef.current.style.color = "teal";
    eleRef.current.innerText = "React Ref";
  });

  let playOrpause = () => {
    if (play == true) {
      videoRef.current.play();
      console.log(play);
      setPlay(false);
    } else {
      videoRef.current.pause();
      console.log(play);
      setPlay(true);
    }
  };
  return (
    <div>
      <h1 ref={eleRef}>Ref Examples</h1>
      <video src={VIDEO} ref={videoRef} onClick={playOrpause}></video>
    </div>
  );
};

export default RefExamples;
