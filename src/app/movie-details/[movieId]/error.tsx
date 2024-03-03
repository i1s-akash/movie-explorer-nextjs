"use client";
import { useEffect } from "react";
import { Button } from "@mui/material";
import styles from "../moviedetails.module.scss";

export default function Error({ error, reset }: any) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={styles.main}>
      <div className={styles.centerIt}>
        <h2>Something went wrong!</h2>
        <Button variant="contained" color="secondary" onClick={() => reset()}>Try Again</Button>
      </div>
    </div>
  );
}
