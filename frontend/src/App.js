
// import { Button } from '@chakra-ui/react';
import {Route} from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <div className="App">
     {/* Hello man Come
          <Button colorScheme='red'>Button</Button> */}
     <Route path="/" component={Homepage} exact/>
     <Route path="/chats" component={ChatPage} />
    </div>
  );
}

export default App;
