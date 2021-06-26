import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import styles from "./Cards.module.css";

const Cards = ({ data: { cases, county, deaths, tested } }) => {
  if (!cases) {
    return "...Loading";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="space-between">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.cases)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={cases} duration={2.5} separator="," />
            </Typography>
            <Typography variant="body2">
              Number of active cases of cd-19 in {county}
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={deaths} duration={2.5} separator="," />
            </Typography>
            <Typography variant="body2">
              Number of deaths from cd-19 in {county}
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.tested)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Tested
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={tested} duration={2.5} separator="," />
            </Typography>
            <Typography variant="body2">
              Number of those tested for cd-19 in {county}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
