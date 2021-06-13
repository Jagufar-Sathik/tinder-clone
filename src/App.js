// import logo from './logo.svg';
import './App.css';
import './Header.css'
import Header from "./Header"
import TinderCards from './TinderCards'
import SwipeButtons from './SwipeButtons'

function App() {
  return (
    //BEM class naming convention
    <div className="app">
{/* app header */}
<Header />
<TinderCards />
{/* TInder cards -middle*/}
{/* swipe buttons -footer*/}
<SwipeButtons />



    </div>
  );
}

export default App;
