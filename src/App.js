import React from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import LocationDetails from "./components/LocationDetails/LocationDetails";
import Map from "./components/Map/Map";
import List from "./components/List/List";

export default function App() {
    return (
        <>
            <CssBaseline />
            <Navbar />
            <Grid container spacing={3} style={{ width: "100%" }}>
                <Grid item xs={12} md={4}>
                    <List />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map />
                </Grid>
            </Grid>
        </>
    );
}
