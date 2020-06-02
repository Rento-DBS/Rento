import React from "react";
import styles from "./Filter.module.css";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Slider from "@material-ui/core/Slider";
import TextField from "@material-ui/core/TextField";

const Filter = ({
    isPetrol,
    isDiesel,
    isFuel,
    isNoFuel,
    isAutomatic,
    isManual,
    maxPrice,
    seats,
    pickup,
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h2>Filter Options</h2>
            </div>
            <div className={styles.options}>
                <FormControlLabel
                    control={<Checkbox color="primary" name="petrol" />}
                    label="Petrol"
                />
                <FormControlLabel
                    control={<Checkbox color="primary" name="diesel" />}
                    label="Diesel"
                />
                <FormControlLabel
                    control={<Checkbox color="primary" name="fuel" />}
                    label="Fuel"
                />
                <FormControlLabel
                    control={<Checkbox color="primary" name="noFuel" />}
                    label="No Fuel"
                />
                <FormControlLabel
                    control={<Checkbox color="primary" name="automatic" />}
                    label="Automatic"
                />
                <FormControlLabel
                    control={<Checkbox color="primary" name="manual" />}
                    label="Manual"
                />
                <h3
                    style={{
                        fontFamily: "Roboto",
                        fontWeight: "normal",
                        fontSize: "20px",
                    }}
                >
                    Maximum Price: {}
                    <Slider
                        id="slider"
                        defaultValue={2500}
                        // getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={100}
                        min={1000}
                        max={2500}
                    />
                </h3>
                <TextField id="seats" label="Seats" />
                <TextField id="pickup" label="Pickup" />
            </div>
        </div>
    );
};

export default Filter;
