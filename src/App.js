import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import './App.css';

const particleOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 400
      }
    }
  }
}

const app = new Clarifai.App({
  apiKey: '6ede32fb1a4040aa9509839c2e29e2b8'
})

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageURL: '',
      box: {},
      route: 'signin',
      isSignedIn: false
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log('width', width, 'height', height, 'box', clarifaiFace);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box)
    this.setState({ box: box })
  }

  onInputChange = (event) => {
    this.setState({
      input: event.target.value
    });
  }

  onButtonSubmit = () => {
    this.setState({
      imageURL: this.state.input
    });
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    this.setState({
      route: route
    });
    route === 'home'
      ? this.setState({ isSignedIn: true })
      : this.setState({ isSignedIn: false });
  }




  render() {
    const { isSignedIn, route, box, imageURL } = this.state;
    const { onRouteChange, onInputChange, onButtonSubmit } = this;
    return (
      <div className="App">
        <Particles
          className='particles'
          params={particleOptions} />
        <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} />
        {(() => {
          switch (route) {
            case 'signin':
              return <SignIn onRouteChange={onRouteChange} />
            case 'register':
              return <Register onRouteChange={onRouteChange} />
            case 'home':
              return <div>
                <Logo />
                <Rank />
                <ImageLinkForm
                  onInputChange={onInputChange}
                  onButtonSubmit={onButtonSubmit} />
                <FaceRecognition box={box} imageURL={imageURL} />
              </div>
            default:
              return null;
          }
        })()}

      </div>
    );
  }

}

export default App;
