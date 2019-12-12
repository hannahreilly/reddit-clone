import React from 'react';
import './App.css';
import Post from './components/post'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  
  render() {
    return (
      <div className="App">
        <Post />
    </div>
  )
}

}
export default App;
