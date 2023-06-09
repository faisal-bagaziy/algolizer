import { useState } from 'react';
import styles from './ContentHowItWorks.module.css';
import { CldVideoPlayer } from 'next-cloudinary';

function ContentHowItWorks() {
  const [selectedVideo, setSelectedVideo] = useState('sorting');

  const handleButtonClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className={styles.container} id='HowItWorks'>
      <h2 className={styles.title}>How it works</h2>
      <div className={styles.buttonsContainer}>
        <button className={selectedVideo === 'sorting' ? styles.selectedButton : styles.button} onClick={() => handleButtonClick('sorting')}>
          Sorting
        </button>
        <button className={selectedVideo === 'searching' ? styles.selectedButton : styles.button} onClick={() => handleButtonClick('searching')}>
          Searching
        </button>
        <button className={selectedVideo === 'learning' ? styles.selectedButton : styles.button} onClick={() => handleButtonClick('learning')}>
          Learning
        </button>
      </div>
      {selectedVideo === 'sorting' && (
        <div className={styles.videoContainer}>
          <CldVideoPlayer
              id='Sort_s2zaqk'
              width='480'
              height='480'
              src='https://res.cloudinary.com/dbkkaasqe/video/upload/v1683547887/Sort_s2zaqk.mp4'
              colors={{
                 accent: '#33332D',
                 base: '#E1E1E1',
                 text: '#fffff'
             }}
              logo={{
                 imageUrl: 'https://res.cloudinary.com/dbkkaasqe/image/upload/v1682575548/HeroPic_hds8jj.svg',
                 onClickUrl: 'https://github.com/faisal-bagaziy/algolizer'
             }}
          />
        </div>
      )}
      {selectedVideo === 'searching' && (
        <div className={styles.videoContainer}>
      <CldVideoPlayer
              id='Search_zl5sja'
              width='480'
              height='480'
              src='https://res.cloudinary.com/dbkkaasqe/video/upload/v1683548390/Search_zl5sja.mp4'
              colors={{
                 accent: '#33332D',
                 base: '#E1E1E1',
                 text: '#fffff'
             }}
              logo={{
                 imageUrl: 'https://res.cloudinary.com/dbkkaasqe/image/upload/v1682575548/HeroPic_hds8jj.svg',
                 onClickUrl: 'https://github.com/faisal-bagaziy/algolizer'
             }}
          />
        </div>
      )}
      {selectedVideo === 'learning' && (
        <div className={styles.videoContainer}>
          <CldVideoPlayer
            id='sea-turtle'
            width="480"
            height="480"
            src="samples/sea-turtle"
          />
        </div>
      )}
    </div>
  );
}

export default ContentHowItWorks;
