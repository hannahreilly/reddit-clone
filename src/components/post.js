import React, { Component } from 'react';
import CreatePost from './components/createPost';
import 'font-awesome/css/font-awesome.min.css';
import PostList from './components/postList';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
      author: "Hannah Reilly",
      voteCount: 0,
      posts: [{
        title: "this is a post",
        content: "my post is good",
        author: "Hannah Reilly",
        voteCount: 0
      }]
    }

  }
}

  
onContentChange = (e) => {
  const content = e.target.value;
  const name = e.target.name;
  this.setState({
    [name]: content
  })
}

postSubmit = (e) => {
  e.preventDefault();
  const posts = this.state.posts;
  const newPost = {
    author: this.state.author,
    content: this.state.content,
    title: this.state.title,
    voteCount: 0
  }
  posts.push(newPost);

  this.setState({
    posts,
    content: "",
    title: ""
  })
}

vote = (e, sentPost, operator) => {
  e.preventDefault();
  const posts = this.state.posts.filter(checkPost => sentPost.title !== checkPost.title);
  switch (operator) {
    case "plus":
      sentPost.voteCount++
      break;
    case "minus":
      sentPost.voteCount--
      break;
    default:
      console.log("something terrible has happened")
  }

  posts.push(sentPost);
  posts.sort((a, b) => b.voteCount - a.voteCount);

  this.setState({
    posts: posts
  })
}

render() {
  console.log(this.state.posts);
  return (
    <div className="App">
      <h1>Reddit</h1>
      <CreatePost
        postSubmit={this.postSubmit}
        onContentChange={this.onContentChange}
        title={this.state.title}
        content={this.state.content}
      />
      <PostList
        posts={this.state.posts}
        vote={this.vote}
      />
    </div>
  );
}

export default Post;