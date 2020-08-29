import React, { Component } from 'react'
import './BlogList.scss'
import { Link } from 'react-router-dom'

class BlogList extends Component {
  render() {
    //console.log(this.context)
    const {
      author,
      postedOn,
      blogTitle,
      blogImage,
      blogText,
      slug,
    } = this.props.blog

    return (
      <li className='item'>
        <div className='item_img'>
          <img
            src={blogImage}
            alt='author-img'
            className='item-img_container'
          />
        </div>
        <div className='item_info'>
          <Link path to={'/' + slug}>
            <h2>{blogTitle}</h2>
          </Link>

          <p>{blogText.slice(0, 150)}...</p>
          <p className='author'>
            {postedOn}, by <span>{author}</span>
          </p>
        </div>
      </li>
    )
  }
}

export default BlogList
