import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  const handleVideo = () => {
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
  };

  return (
    <div className="app__video">
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circlr flex__center"
          onClick={handleVideo}
        >
          {playVideo
            ? <BsPauseFill color="#fff" fontSize={30} />
            : <BsFillPlayFill color="#fff" fontSize={30} />
          }
        </div>
      </div>
    </div>
  );
};

export default Intro;