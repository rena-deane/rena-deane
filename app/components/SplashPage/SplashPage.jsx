import React from 'react';
import styles from './SplashPage.css';
import { setPageComplete } from '../../services/scormService';

const mixBlend = { mixBlendMode: 'color' }
const isolation = { isolation: 'isolate' }

const getClass = (ref) => {
    let currentTime = ref
    switch (currentTime) {
      case 'midnight':
        return styles.midnight
        break;
      case 'dawn':
        return styles.dawn
        break;
      case 'day':
        return styles.day
        break;
      case 'dusk':
        return styles.dusk
        break;
      case 'night':
        return styles.night
        break;
      default:
        return styles.day
    }
}

class SplashPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      time: null,
    }
  }

  componentDidMount() {
    let time = '';

    const d = new Date().getHours();

    if (d >= 0 && d <= 4) {
        time = 'midnight'
    } else if(d >= 5 && d <= 7) {
        time = 'dawn'
    } else if(d >= 8 && d <= 18) {
      time = 'dusk'
    } else {
      time = 'night'
    }

    this.setState({
      isLoaded: true,
      time: time
    })
  }

  render(){
    console.log(this.state);
    return (
      <div className={`${styles.container} ${getClass(this.state.time)}`}>
        { this.state.isLoaded ?
          <svg className={styles.logo} viewBox="0 0 413.64 379.02">
          <defs>
            <linearGradient id="a" x1="173.92" y1="323.97" x2="449.83" y2="48.06" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#efeff0"/>
              <stop offset="0.65" stopColor="#f1f1f2"/>
              <stop offset="0.88" stopColor="#f8f8f8"/>
              <stop offset="1" stopColor="#fff"/>
            </linearGradient>
          </defs>
          <g style={isolation}>
            <g>
              <g className={`${styles.fadeInUp}`}>
                <g opacity="0.75" style={mixBlend}>
                  <path d="M98.05,390.11h14.08c4.46,0,6.73.48,8.65,1.44,4,2,6.66,6,6.66,11.54,0,6.87-4,12-9.62,13.26v.14a9.85,9.85,0,0,1,1.1,1.72l10.78,20h-3.5l-11.4-21.29H101v21.29h-3Zm16,24c6.32,0,10.3-4.53,10.3-11.06a9.76,9.76,0,0,0-5.63-9.27c-1.37-.62-2.89-1-6.73-1H101v21.29Z" transform="translate(-98.05 -59.17)" fill="#8c8c8c"/>
                  <path d="M140.7,390.11H167v2.75H143.66v19.71h19.16v2.75H143.66v20.13h24.66v2.75H140.7Z" transform="translate(-98.05 -59.17)" fill="#8c8c8c"/>
                  <path d="M179.92,390.11h2.75l27.41,37.71c1.58,2.2,3.92,6,3.92,6h.14s-.34-3.64-.34-6V390.11h3v48.08H214l-27.41-37.71c-1.58-2.2-3.92-6-3.92-6h-.14s.34,3.64.34,6v37.71h-3Z" transform="translate(-98.05 -59.17)" fill="#8c8c8c"/>
                  <path d="M255.12,421.57h-20.4l-6.18,16.62h-3.16l18-48.08h3.16l18,48.08h-3.16Zm-10.23-28s-1,3.71-1.79,5.77l-7.35,19.51h18.34l-7.28-19.51c-.76-2.06-1.79-5.77-1.79-5.77Z" transform="translate(-98.05 -59.17)" fill="#8c8c8c"/>
                  <path d="M268.51,417.38h19v2.75h-19Z" transform="translate(-98.05 -59.17)" fill="#8c8c8c"/>
                  <path d="M297.63,390.11h15.11c14.29,0,24,8.79,24,24s-9.68,24-24,24H297.63Zm14.63,45.33c12.78,0,21.36-7.49,21.36-21.29s-8.59-21.29-21.36-21.29H300.58v42.58Z" transform="translate(-98.05 -59.17)" fill="#8c8c8c"/>
                  <path d="M348.52,390.11h26.31v2.75H351.47v19.71h19.16v2.75H351.47v20.13h24.66v2.75H348.52Z" transform="translate(-98.05 -59.17)" fill="#8c8c8c"/>
                  <path d="M411.29,421.57h-20.4l-6.18,16.62h-3.16l18-48.08h3.16l18,48.08h-3.16Zm-10.23-28s-1,3.71-1.79,5.77l-7.35,19.51h18.34L403,399.32c-.76-2.06-1.79-5.77-1.79-5.77Z" transform="translate(-98.05 -59.17)" fill="#8c8c8c"/>
                  <path d="M429.35,390.11h2.75l27.41,37.71c1.58,2.2,3.92,6,3.92,6h.14s-.34-3.64-.34-6V390.11h3v48.08h-2.75L436,400.48c-1.58-2.2-3.92-6-3.92-6H432s.34,3.64.34,6v37.71h-3Z" transform="translate(-98.05 -59.17)" fill="#8c8c8c"/>
                  <path d="M481,390.11H507.3v2.75H484v19.71h19.16v2.75H484v20.13h24.66v2.75H481Z" transform="translate(-98.05 -59.17)" fill="#8c8c8c"/>
                </g>
                <g>
                  <path d="M99.05,389.11h14.08c4.46,0,6.73.48,8.65,1.44,4,2,6.66,6,6.66,11.54,0,6.87-4,12-9.62,13.26v.14a9.85,9.85,0,0,1,1.1,1.72l10.78,20h-3.5l-11.4-21.29H102v21.29h-3Zm16,24c6.32,0,10.3-4.53,10.3-11.06a9.76,9.76,0,0,0-5.63-9.27c-1.37-.62-2.89-1-6.73-1H102v21.29Z" transform="translate(-98.05 -59.17)" fill="#fff"/>
                  <path d="M141.7,389.11H168v2.75H144.66v19.71h19.16v2.75H144.66v20.13h24.66v2.75H141.7Z" transform="translate(-98.05 -59.17)" fill="#fff"/>
                  <path d="M180.92,389.11h2.75l27.41,37.71c1.58,2.2,3.92,6,3.92,6h.14s-.34-3.64-.34-6V389.11h3v48.08H215l-27.41-37.71c-1.58-2.2-3.92-6-3.92-6h-.14s.34,3.64.34,6v37.71h-3Z" transform="translate(-98.05 -59.17)" fill="#fff"/>
                  <path d="M256.12,420.57h-20.4l-6.18,16.62h-3.16l18-48.08h3.16l18,48.08h-3.16Zm-10.23-28s-1,3.71-1.79,5.77l-7.35,19.51h18.34l-7.28-19.51c-.76-2.06-1.79-5.77-1.79-5.77Z" transform="translate(-98.05 -59.17)" fill="#fff"/>
                  <path d="M269.51,416.38h19v2.75h-19Z" transform="translate(-98.05 -59.17)" fill="#fff"/>
                  <path d="M298.63,389.11h15.11c14.29,0,24,8.79,24,24s-9.68,24-24,24H298.63Zm14.63,45.33c12.78,0,21.36-7.49,21.36-21.29s-8.59-21.29-21.36-21.29H301.58v42.58Z" transform="translate(-98.05 -59.17)" fill="#fff"/>
                  <path d="M349.52,389.11h26.31v2.75H352.47v19.71h19.16v2.75H352.47v20.13h24.66v2.75H349.52Z" transform="translate(-98.05 -59.17)" fill="#fff"/>
                  <path d="M412.29,420.57h-20.4l-6.18,16.62h-3.16l18-48.08h3.16l18,48.08h-3.16Zm-10.23-28s-1,3.71-1.79,5.77l-7.35,19.51h18.34L404,398.32c-.76-2.06-1.79-5.77-1.79-5.77Z" transform="translate(-98.05 -59.17)" fill="#fff"/>
                  <path d="M430.35,389.11h2.75l27.41,37.71c1.58,2.2,3.92,6,3.92,6h.14s-.34-3.64-.34-6V389.11h3v48.08h-2.75L437,399.48c-1.58-2.2-3.92-6-3.92-6H433s.34,3.64.34,6v37.71h-3Z" transform="translate(-98.05 -59.17)" fill="#fff"/>
                  <path d="M482,389.11H508.3v2.75H485v19.71h19.16v2.75H485v20.13h24.66v2.75H482Z" transform="translate(-98.05 -59.17)" fill="#fff"/>
                </g>
              </g>
              <g className={styles.fadeIn}>
                <g>
                  <path d="M124.87,224.75c11.47-17.21,51.34,2.88,81.56,24.56q2.4,0,4.81,0c-30.7-23.39-76-48.12-88.37-29.59-2.21,3.31-1.85,6.54.53,9.56A7.88,7.88,0,0,1,124.87,224.75Z" transform="translate(-98.05 -59.17)" fill="#d3d3d3"/>
                  <path d="M122.15,188.17S95.57,127.76,254.88,97.9c103-19.3,155-4.36,168.36,22.69C413.92,90.46,362,72.44,252.88,92.9c-159.31,29.86-132.74,90.27-132.74,90.27-.12-.27-.24-.53-.36-.79A57.86,57.86,0,0,0,122.15,188.17Z" transform="translate(-98.05 -59.17)" fill="#d3d3d3"/>
                  <path d="M430.7,305.42c-5.69,9.7-20.61,20.86-58.89,22.42-48.36,2-90.94-23.44-120.54-45.9-68.12,8.17-117.55-3.79-133.27-14.77a43.57,43.57,0,0,1-14.34-17.47A44.77,44.77,0,0,0,120,272.17c15.72,11,65.15,22.94,133.27,14.77,29.6,22.46,72.18,47.87,120.54,45.9,69.49-2.83,62-37.27,62-37.27S436.11,300.68,430.7,305.42Z" transform="translate(-98.05 -59.17)" fill="#d3d3d3"/>
                  <path d="M507.41,112.94c10.82,32.51-16.18,75.51-93.7,116.55C372.36,251.39,332.9,265.4,297,273.82q2.92,2.08,5.86,4.07c34.89-8.51,73-22.28,112.89-43.4C497.28,191.32,522.91,146,507.41,112.94Z" transform="translate(-98.05 -59.17)" fill="#d3d3d3"/>
                </g>
                <g style={mixBlend}>
                  <path d="M120.15,183.17S93.57,122.76,252.88,92.9C521,42.64,443.57,224.6,238.65,247.81c-58.44,6.62-128.34-9.23-115.79-28.06,13.68-20.51,67.69,12,97.62,37,24.28,20.27,81.83,74,151.31,71.13s62-37.27,62-37.27,1.59,29-76,12.87S217,179.31,142.49,185.28c-52.91,4.24-53.09,61.93-24.5,81.89,26.55,18.54,149.22,39.89,295.73-37.67S526.29,67.36,397.55,59.82C347.52,56.89,274.4,64,225,79,147.33,102.51,99,138.17,120.15,183.17Z" transform="translate(-98.05 -59.17)" fill="url(#a)"/>
                </g>
              </g>
            </g>
          </g>
        </svg> : <div>hi</div>
      }
        { setPageComplete() }
      </div>
    )
  }
}

export default SplashPage;
