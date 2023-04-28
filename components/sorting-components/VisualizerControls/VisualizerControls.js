import React from 'react';
import styles from './VisualizerControls.module.css';
import PropTypes from 'prop-types';

import Menu from '../Menu/Menu';

// Helper function
function isDisabled(action, disabled = false) {
  return action === undefined || disabled;
}

const VisualizerControls = ({
  // Actions
  onPlay,
  onPause,
  onAdjustSpeed,

  // States
  playing,
  playDisabled,
  pauseDisabled,
  playbackSpeed
}) => {




  return (
    <div className={styles.VisualizerControls}>

      {/* Play or Pause button - context dependent */}
        <div
            className={`VisualizerControls__CenterButton ${playing ? 'playing' : 'paused'} ${playing ? pauseDisabled ? 'disabled' : '' : playDisabled ? 'disabled' : ''}`}
            onClick={playing ? onPause : onPlay}
            style={{
                 width: '150px',
                 height: '50px',
                 paddingTop: '12px',
                 backgroundColor: 'white',
                 border: 'solid #33332d 2px',
                 boxShadow: '-3px 5px #33332d',
                 textAlign: 'center',
                 color: '#33332D',
                 fontSize: '18px'
            }}>
            {playing ? 'Pause' : 'Start'}
        </div>


      {/* Playback Speed */}
      <Menu
        items={['0.25x', '0.5x', '1x', '2x', '4x']}
        placeholder="Speed"
        selected={`Speed: ${playbackSpeed}x`}
        onSelect={onAdjustSpeed}
        noDropIcon
        className={styles.VisualizerControls__SpeedButton}
      />


    </div>
  );
};

VisualizerControls.propTypes = {
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onBackward: PropTypes.func,
  onForward: PropTypes.func,
  onRepeat: PropTypes.func,
  onAdjustSpeed: PropTypes.func,

  playing: PropTypes.bool,
  playDisabled: PropTypes.bool,
  pauseDisabled: PropTypes.bool,
  backwardDisabled: PropTypes.bool,
  forwardDisabled: PropTypes.bool,
  repeatDisabled: PropTypes.bool,
  playbackSpeed: PropTypes.number
};

export default VisualizerControls;
