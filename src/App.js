import React from 'react';
import './App.css';
import CreatePost from './components/createPost';
import 'font-awesome/css/font-awesome.min.css';


class App extends React.Component {
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
          titel={this.state.title}
          content={this.state.content}
        />
          {this.state.posts.map((post, key) => 
            <div key={key} className={post.voteCount >= 0 ? "post-wrapper" : "post-wrapper post-wrapper-negative"}>
              <h4>{post.title}</h4>
              <p>{post.content}</p>
              <p>{post.voteCount}</p>
              <i
                className= "fa fa-angle-double-up"
                onClick={(e) => this.vote(e,post, "plus")}>
              </i>
              <i
                className= "fa fa-angle-double-down"
                onClick={(e) => this.vote(e,post, "minus")}>
              </i>
            </div>
        )}  
        
      </div>
    );
  }
}

export default App;
