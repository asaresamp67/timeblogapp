import React, { Component } from 'react'
import './Post.scss'
//import data from '../../data/blog'
import { TimeContext } from '../../context/TimeContext'

export default class Post extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)

    this.state = {
      slug: this.props.match.params.slug,
    }
  }

  static contextType = TimeContext

  render() {
    const { getPost } = this.context
    //console.log(this.context)
    //const { blogTitle } = this.context
    const post = getPost(this.state.slug)
    const { blogTitle, author, postedOn, blogImage, blogText } = post

    return (
      <div className='post'>
        <div className='post_heading'>
          <h1>{blogTitle}</h1>
          <p className='post_author'>
            Posted on: {postedOn}, by <span>{author}</span>
          </p>
          <div className='post_image'>
            <img
              src={blogImage}
              alt='author-img'
              className='item-img_container'
            />
          </div>
        </div>
        <p className='post_text'>{blogText}</p>
      </div>
    )
  }
}
