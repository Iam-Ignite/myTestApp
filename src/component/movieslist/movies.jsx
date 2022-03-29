import React, { useState, useEffect } from 'react';

const FetchMovie = () => {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	useEffect(() => {
		setLoading(true);
		fetch(
			`http://www.omdbapi.com/?s=Batman&page=2&apikey=f208557a`,
		)
			.then((response) => response.json())
			.then((response) => {
				if (response.Response === 'True') {
					setMovies(response.Search);
					setLoading(false);
					setErrorMessage('');
				} else {
					setErrorMessage(response.Error);
					setLoading(false);
				}
			});
	}, []);

	return (
		<div className='container'>
			{loading ? (
				<div className='loading'>Loading...</div>
			) : null}
			{errorMessage ? (
				<div className='errorMessage'>{errorMessage}</div>
			) : null}
			<div className='movie-conatiners'>
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

export default FetchMovie;
