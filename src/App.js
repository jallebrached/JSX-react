import './App.css';
import Address from './component/profil/Address';
import FullName from './component/profil/FullName';
import ProfilePhoto from './component/profil/ProfilePhoto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <ProfilePhoto/>
       <FullName/>
       <Address/> 
      </header>
    </div>
  );
}

export default App;
