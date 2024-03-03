import Link from "next/link";
import { Button } from "@mui/material";
import { MovieData } from "../component.interface";
import styles from "./MovieCard.module.scss";

const MovieCard = ({ id, title, release_date, overview }: MovieData) => {
  const shortedTitle = title.slice(0, 30);
  const shortedOverview = overview.slice(0, 200);
  return (
    <div className={styles.movieCard}>
      <h6 className={styles.movieTitle}>{shortedTitle}</h6>
      <p className={styles.releaseDate}>Release Date: {release_date}</p>
      <p className={styles.movieInfo}>{shortedOverview}</p>
      <Link href={`/movie-details/${id}`} target="_blank">
        <Button variant="outlined" color="primary">
          Know More
        </Button>
      </Link>
    </div>
  );
};

export default MovieCard;
