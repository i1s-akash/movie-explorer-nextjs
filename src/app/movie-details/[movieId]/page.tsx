import styles from "../moviedetails.module.scss";
import { Container, Grid, Typography, Paper } from "@mui/material";

interface This {
  params: {
    movieId: string | number;
  };
}

const MovieDetailsPage: React.FC<This> = async ({ params }) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${process.env.NEXT_API_KEY}`,
    { next: { revalidate: 10 } }
  );

  const res = await data.json();

  return (
    <Container className={styles.container}>
      <Grid item xs={12} md={12}>
        <Paper elevation={3} className={styles.paper}>
          <Typography variant="h4" gutterBottom>
            {res?.original_title}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {res?.status}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {res?.overview}
          </Typography>
          <Typography variant="body2">Popularity: {res?.popularity}</Typography>
        </Paper>
      </Grid>
    </Container>
  );
};

export default MovieDetailsPage;
