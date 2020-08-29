import React, { Component } from 'react'
import { TimeContext } from '../../context/TimeContext'
import BlogList from '../../blogList/BlogList'
import './Home.scss'

export default class Home extends Component {
  static contextType = TimeContext
  render() {
    console.log(this.context)
    const { blogData } = this.context

    return (
      <div className='blog-container'>
        <ul className='blog-container_list'>
          {blogData.map((blog) => {
            return <BlogList key={blog.id} blog={blog} />
          })}
        </ul>
        <div className='blog-container_sidebar'>hello</div>
      </div>
    )
  }
}
