import {Component} from 'react'
import SlidesShowContext from '../../Context/SlidesShowContext'
import SlidesShow from '../SlidesShow'
import Slide from '../Slide'
import './index.css'

class Slides extends Component {
  render() {
    return (
      <SlidesShowContext.Consumer>
        {value => {
          const {initialList} = value
          return (
            <div className="slides-container">
              <ol className="slides-list">
                {initialList.map((each, index) => (
                  <SlidesShow
                    key={each.id}
                    details={each}
                    serialNumber={index + 1}
                  />
                ))}
              </ol>
              <Slide />
            </div>
          )
        }}
      </SlidesShowContext.Consumer>
    )
  }
}

export default Slides
