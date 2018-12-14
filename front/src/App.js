import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div className="App">
        <form method="POST" encType="multipart/form-data" action="http://localhost:5000/uploaddufichier">
          <input type="file" name="monfichier" multiple accept="image/png"/>
          <button> envoyer </button>
        </form>
      </div>
    );
  }
}

export default App;
