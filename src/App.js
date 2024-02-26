import {Route} from 'react-router-dom'


import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
function App() {
  return (
    <div>
<Route path='/' component={HomePage}/>
<Route path='/chats' component={ChatPage}/>
    </div>
  );
}

export default App;
