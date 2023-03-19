import React from 'react';
import ReactHlsPlayer from 'react-hls-player';

import './PreviewPlayer.scss';

interface IProps {
  classname:string,
  poster:string
  reference:React.MutableRefObject<HTMLVideoElement>
  link:string
}

const PreviewPlayer:React.FC<IProps> = ({
  classname,
  poster,
  link,
  reference,
}) => (
  <div className="courses-item__poster-video">
    <ReactHlsPlayer
      preload="none"
      autoPlay={false}
      src={`${link}`}
      playerRef={reference}
      poster={poster}
      className={classname}
      muted
    />
  </div>
);

export { PreviewPlayer };
