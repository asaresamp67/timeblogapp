import React, { Component, createContext } from 'react'
import data from '../data/blog'
export const TimeContext = createContext()
class TimeContextProvider extends Component {
  state = {
    blogData: data,
  }

  // componentDidMount() {
  //   let posts = this.formatData(data)
  // }

  // formatData(data) {
  //   let tempPost = data.map((item) => {
  //     let post = {
  //       ...item.data,
  //     }
  //     return post
  //   })
  //   return tempPost
  // }
  getPost = (slug) => {
    let tempPost = [...this.state.blogData]
    const post = tempPost.find((post) => post.slug === slug)
    return post
  }
  render() {
    return (
      <TimeContext.Provider value={{ ...this.state, getPost: this.getPost }}>
        {this.props.children}
      </TimeContext.Provider>
    )
  }
}

export default TimeContextProvider
