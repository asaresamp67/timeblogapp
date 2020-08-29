import React, { Component } from 'react'
import './Post.scss'
import data from '../../data/blog'
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
        <h1>{blogTitle}</h1>
        <p className='author'>
          {postedOn}, by <span>{author}</span>
        </p>
        <div className='item_img'>
          <img
            src={blogImage}
            alt='author-img'
            className='item-img_container'
          />
        </div>
        <p>{blogText}</p>
      </div>
    )
  }
}
