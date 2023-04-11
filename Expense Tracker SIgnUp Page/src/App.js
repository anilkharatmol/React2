import './App.css';
import { AuthContextProvider } from './Components/AuthContext';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <AuthContextProvider>
    <div className='App'>
      <SignUp/>
    </div>
    </AuthContextProvider>
    );
}

export default App;
