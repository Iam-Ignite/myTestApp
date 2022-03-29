import './App.css';
import FetchMovie from './component/movieslist/movies';
import Search from './component/search/search';

function App() {
  return (
    <div className="App">
    <nav className="navbar">
      <span className="logo">MyTestApp</span>
    </nav>
    <section className="hero-containers">
     <div className="contents">
     <h1>Watch something incredible.</h1>
     </div>
    </section>
    
      <Search/>
  
       <h1>Action</h1>
       <div className="movies-row">
            <FetchMovie/>
      </div>

       <h1>Action</h1>
       <div className="movies-row">
            <FetchMovie/>
      </div>
    </div>
  );
}

export default App;
