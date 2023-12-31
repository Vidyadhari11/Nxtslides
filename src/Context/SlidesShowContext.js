import React from 'react'

const SlidesShowContext = React.createContext({
  initialList: [],
  activeIndex: 0,
  changeActiveTabId: () => {},
  addNewItem: () => {},
  changeHeading: () => {},
  changeDescription: () => {},
})

export default SlidesShowContext
