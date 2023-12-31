import {v4 as uuidv4} from 'uuid'
import SlidesShowContext from '../../Context/SlidesShowContext'
import './index.css'

const NewButton = () => (
  <SlidesShowContext.Consumer>
    {value => {
      const {addNewItem, activeIndex, changeActiveTabId} = value

      const onClickAddButton = () => {
        const id = uuidv4()
        const item = {
          id,
          heading: 'Heading',
          description: 'Description',
        }
        addNewItem(item)
        changeActiveTabId(activeIndex + 1)
      }

      const onDoubleClickBtn = () => {
        console.log('hi')
      }

      return (
        <div>
          <button
            type="button"
            onClick={onClickAddButton}
            onDoubleClick={onDoubleClickBtn}
            className="new"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
              alt="new plus icon"
              className="plus-icon"
            />
            New
          </button>
        </div>
      )
    }}
  </SlidesShowContext.Consumer>
)

export default NewButton
