import React, { Component, createContext } from 'react'

export const TimeContext = createContext()
class TimeContextProvider extends Component {
 state={

 }
 render() {
  return (
   <TimeContext.Provider value={...this.state}>
    {this.props.children}
   </TimeContext.Provider>
  )
 }
}

export default TimeContextProvider