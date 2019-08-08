import React from 'react';
//import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';
import "./App.css"


class App extends React.Component {
  constructor(prpos){
    super(prpos)
    console.log("콘스트")
  }
  state = {
    //이 데이터는 변한다.
    isLoading : true,
    movies : [],
    count : 0
  };

  getMovies = async() => {
    const { data :{ data : {movies} }}=await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    console.log(movies);
    this.setState({ movies, isLoading : false });
  }

  add = () => {
    console.log("add")
    this.setState(current => ({count: current.count + 1 }));
  };
  
  minus = () => {
    console.log("minus")
    this.setState(current => ({count: current.count - 1 }));
  };

  componentDidMount(){
    this.getMovies();

  }

  componentDidUpdate(){
    console.log("upade!");
  }

  componentWillUnmount(){
    alert("qq");
  }
  render() {
   console.log("render");
   const { isLoading, movies } = this.state;
    return (<section className="container">
     {isLoading ? (<div className="loader"></div>) : 
     ( 
     <div className="movies">
       {movies.map(movie =>(
       <Movie key={movie.id} genres={movie.genres} id={movie.id} year={movie.year} title={movie.title}  summary={movie.summary} poster={movie.medium_cover_image} />
       ))}
     </div> 
     )} 
     
      </section>
    )
  }  
}

export default App;
