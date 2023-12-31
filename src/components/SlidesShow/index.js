import {Component} from 'react'
import SlidesShowContext from '../../Context/SlidesShowContext'
import './index.css'

class SlidesShow extends Component {
  render() {
    const {details, serialNumber} = this.props
    const {heading, description} = details
    return (
      <SlidesShowContext.Consumer>
        {value => {
          const {changeActiveTabId, activeIndex} = value
          const isActive = activeIndex === serialNumber - 1
          const bgColor = isActive ? 'active-tab-bg' : ''

          const changeSlide = () => {
            changeActiveTabId(serialNumber - 1)
          }

          return (
            <li
              className={`slides-list-item ${bgColor}`}
              onClick={changeSlide}
              testid={`slideTab${serialNumber}`}
            >
              <p className="slide-number">{serialNumber}</p>
              <div className="slide-tab">
                <h1 className="slide-heading">{heading} </h1>
                <p className="slide-desc">{description}</p>
              </div>
            </li>
          )
        }}
      </SlidesShowContext.Consumer>
    )
  }
}
export default SlidesShow
