import React, { Component } from 'react';

class Blog extends Component {
  render() {

    if(this.props.data){
      console.log(this.props.data.blog.map(data => data))
      var blogData = this.props.data.blog.map(info => {
        return <div className="blog-card">
          <div className="blog-content">
            <h4 className="title">{info.title}</h4>
            <div className="post">{info.post}</div>
            <a href="https://medium.com/@naiem4288ps://" style={{float: 'right'}}>Read more...</a>
          </div>
        </div>
      })
    }
      
return (
  <div id="blog">
    <h2>My Blog</h2>
    <div className="blog-card-section">
        {blogData}
    </div>
  </div>
);
  }
}

export default Blog;




