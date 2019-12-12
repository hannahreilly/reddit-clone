import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      posts: []
    }
  }
  
  onChange = (e) => {
    const content = e.target.value;
    this.setState({
      content
    })
  }

  postSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.postSubmit}>
          <input
            type="textarea"
            name="content"
            value={this.state.content}
            placeholder="Post It"
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="post" 
            />
        </form>
      </div>
    );
  }
}

export default App;
