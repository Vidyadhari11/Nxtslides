import {Component} from 'react'
import SlidesShowContext from './Context/SlidesShowContext'
import NewButton from './components/NewButton'
import Slides from './components/Slides'
import './App.css'

// This is the list used in the application. You can move them to any component needed.
const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

const insert = (arr, index, newItem) => [
  ...arr.slice(0, index),
  newItem,
  ...arr.slice(index),
]

// Replace your code here
class App extends Component {
  state = {initialList: initialSlidesList, activeIndex: 0}

  changeActiveTabId = index => {
    this.setState({activeIndex: index})
  }

  addNewItem = item => {
    const {activeIndex} = this.state
    this.setState(prevState => {
      const {initialList} = prevState
      const newList = insert(initialList, activeIndex + 1, item)
      return {initialList: [...newList]}
    })
  }

  changeHeading = value => {
    const {activeIndex} = this.state
    this.setState(prevState => {
      const {initialList} = prevState
      const newList = initialList.map((each, index) => {
        if (activeIndex === index) {
          return {...each, heading: value}
        }
        return each
      })
      return {initialList: newList}
    })
  }

  changeDescription = value => {
    const {activeIndex} = this.state
    this.setState(prevState => {
      const {initialList} = prevState
      const newList = initialList.map((each, index) => {
        if (activeIndex === index) {
          return {...each, description: value}
        }
        return each
      })
      return {initialList: newList}
    })
  }

  render() {
    const {activeIndex, initialList} = this.state

    return (
      <div>
        <div className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-logo.png"
            alt="nxt slides logo"
            className="logo"
          />
          <h1 className="heading">Nxt Slides</h1>
        </div>
        <SlidesShowContext.Provider
          value={{
            initialList,
            activeIndex,
            changeActiveTabId: this.changeActiveTabId,
            addNewItem: this.addNewItem,
            changeHeading: this.changeHeading,
            changeDescription: this.changeDescription,
          }}
        >
          <>
            <NewButton />
            <Slides />
          </>
        </SlidesShowContext.Provider>
      </div>
    )
  }
}

export default App
