
import './App.css';
import ImageComponent from './components/image-component';
import SocialsComponent from './components/socials-component';
import TextComponent from './components/text-component';

function App() {
  return (
    <div className="App">
      <div className="container">
        <TextComponent />
        <ImageComponent />
        <SocialsComponent />
      </div>
    </div>
  );
}

export default App;
