/* eslint-disable */
import React from 'react';
import styles from './Place.module.css';
import mockData from '../../../mockData.js'

class Place extends React.Component {

  constructor(props) {
    super(props); // gain the ability to use this.props in constructor

    this.state = {
      place: this.props.place ? this.props.place : mockData[0].morePlacesID[0],
    };

    this.handleLike = this.handleLike.bind(this);
  }

  // a method to set liked to true and to be passed to Place component
  // takes in an event and an index
  handleLike(event) {
    const newState = Object.assign({}, this.state.place);
    newState.liked = !newState.liked;
    this.setState({
      place: newState
    });
  }

  render() {
    const liked = this.state.place.liked;
    const style = {
      fill: liked ? 'red' : 'none'
    }
    const path = window.location.href;
    let port = path.includes('3000') ? '3000' : '3004';
    const place = this.state.place;
    return (
      <li className={styles.slideContainerWrapper}>
        <div className={styles.slideContainer1}>
          <div className={styles.slideContainer1_1}>
            <a className={styles.slideLink} href={`http://localhost:${port}/${place.listingID}`} target='_blank'></a>
            <div className={styles.imageSectionWrapper}>
              <div className={
                styles.imageSection
              }>
                <div className={
                  styles.imageWrapper1
                }>
                  <div className={
                    styles.imageWrapper1_1
                  }>
                    <div className={
                    styles.imageWrapper1_1_1
                    }>
                      <img className={styles.image} src={place.pictureURL}></img>
                      <div className={
                      styles.imageWrapper1_1_1_1
                      }>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.imageWrapper2}>
                  <div className={styles.imageWrapper2_top}>
                    <div className={styles.imageWrapper2_top_right}>
                      <button type='button' className={styles.imageWrapper2_top_right_heartWrapper}>
                        <svg viewBox="0 0 32 32" className={styles.imageWrapper2_top_right_heart} onClick={this.handleLike} style={style}>
                          <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z">
                          </path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.scoreAndReviewSectionWrapper}>
              <div className={styles.scoreAndReviewSection1}>
                <span className={styles.scoreAndReviewSection1_1}>
                  <span className={styles.placeStarSectionWrapper}>
                    <svg viewBox="0 0 1000 1000" className={styles.placeStarSection}>
                      <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z">
                      </path>
                    </svg>
                  </span>
                  <span className={styles.placeScore}>
                    {place.score.toFixed(2)}
                  </span>
                  <span className={styles.placeReviewCount}>
                    ({place.reviewCount})
                  </span>
                </span>
              </div>
            </div>
            <div className={styles.roomAndBedSectionWrapper}>
              <ol className={styles.roomAndBedSection}>
                <li className={styles.roomSection}>
                  {place.roomType}
                </li>
                <li className={styles.bedSection}>
                  <span>
                    &nbsp;&middot;&nbsp;
                  </span>
                  {place.bedCount}
                </li>
              </ol>
            </div>
            <div className={styles.roomNameSection}>
              {place.roomName}
            </div>
            <div className={styles.costSectionWrapper}>
              <div className={styles.costSection}>
                <span className={styles.costPerNight}>
                  ${place.costPerNight}
                </span>
                <span>
                &nbsp;/ night&nbsp;
                </span>
              </div>
            </div>
          </div>
        </div>
      </li>
    )
  }
};

export default Place;
