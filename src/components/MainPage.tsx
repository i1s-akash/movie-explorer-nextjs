"use client";
import React from "react";
import { Container, Grid } from "@mui/material";
import Search from "@/components/Search/Search";
import MovieCard from "@/components/MovieCard/MovieCard";
import { fetchMovie } from "@/redux/slice";
import { connect } from "react-redux";
import styles from "./style.module.scss";
import { MovieData } from "./component.interface";

interface This {
  fetchMovie: Function;
  loading: boolean;
  movie_data: {
    results: MovieData[];
  };
  err: any;
}

const MovieListing: React.FC<This> = (This) => {
  const [searchInput, setSearchInput] = React.useState<string>("");
  const handleSearchMovies = (query: string) => {
    setSearchInput(query);
  };

  React.useEffect(() => {
    This.fetchMovie(searchInput);
  }, [searchInput]);

  const [movieData, setMovieData] = React.useState<MovieData[]>([]);
  React.useEffect(() => {
    let storeData: any = [];
    if (This.movie_data?.results && This.movie_data?.results?.length > 0) {
      This.movie_data?.results?.map((list: MovieData) => {
        storeData.push({
          ...list,
        });
      });
    }
    setMovieData(storeData);
  }, [This.movie_data]);

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Search searchMovies={handleSearchMovies} />
        </Grid>
        <Grid item xs={12} md={12}>
          <Grid container spacing={3}>
            {movieData?.length > 0 &&
              movieData?.map((list: MovieData) => {
                return (
                  <Grid item xs={12} sm={6} md={4} key={list.id}>
                    <MovieCard
                      id={list?.id}
                      title={list?.title}
                      release_date={list?.release_date}
                      overview={list?.overview}
                    />
                  </Grid>
                );
              })}
          </Grid>
          {!This.err && movieData?.length === 0 && (
            <div className={styles.noDataText}>
              <b>Type to search for movies</b>
            </div>
          )}
          {This.err && (
            <div className={styles.noDataText}>
              <b>{This.err}</b>
            </div>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state: any) => ({
  movie_data: state.movieReducer.movie_data,
  loading: state.movieReducer.loading,
  err: state.movieReducer.err,
});

export default connect(mapStateToProps, {
  fetchMovie,
})(MovieListing);
