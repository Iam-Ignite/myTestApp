import React, { useState, useEffect } from 'react';

const Search = () => {
	const [search, setSearch] = useState('');
	const [movies, setMovies] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');

	useEffect(() => {
		if (search && search.length > 1) {
			fetch(
				`http://www.omdbapi.com/?s=${search}&apikey=f208557a`,
			)
				.then((response) => response.json())
				.then((response) => {
					if (response.Response === 'True') {
						setMovies(response.Search);
						setErrorMessage('');
					} else {
						setErrorMessage(response.Error);
					}
				});
		}
	}, [search]);

	const updateSearch = (e) => {
		setSearch(e.target.value);
	};

	const searchMovies = (e) => {
		e.preventDefault();
	};

	return (
		<div className='container'>
			<div className='input-search'>
				<h4>Search Movies</h4>
				<form onSubmit={searchMovies}>
					<input
						type='text'
						value={search}
						onChange={updateSearch}
					/>
				</form>
			</div>
			{errorMessage ? (
				<div className='errorMessage'>{errorMessage}</div>
			) : null}
			<div className='movie-conatiner '>
				{movies.map((movie) => (
					<div
						className='movies-card'
						style={{
							backgroundImage: `url(${movie.Poster})`,
						}}>
						<p key={movie.imdbID}>
							<span>
								{movie.Title} <br />({movie.Year})
							</span>
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Search;
