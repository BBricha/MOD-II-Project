
import './App.css';
import Chatbot from './components/chatbot';
import CodeDebugg from './components/code_debugging';
import ContentGenerate from './components/content_generation';
import Form from './components/form.js';
import NavBar from './components/nav_bar';
import PhotoGenerate from './components/photo_generate';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      {/* <Form /> */}
      <Chatbot />
      <PhotoGenerate />
      {/* <ContentGenerate /> */}
      {/* <CodeDebugg /> */}

    </div>
  );
}

export default App;
