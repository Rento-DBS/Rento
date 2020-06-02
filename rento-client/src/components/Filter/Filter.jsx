import React from "react";
import styles from "./Filter.module.css";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Slider from "@material-ui/core/Slider";
import TextField from "@material-ui/core/TextField";

const Filter = () => {
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
                    control={<Checkbox color="primary" name="petrol" />}
                    label="Diesel"
                />
                <FormControlLabel
                    control={<Checkbox color="primary" name="petrol" />}
                    label="Fuel"
                />
                <FormControlLabel
                    control={<Checkbox color="primary" name="petrol" />}
                    label="No Fuel"
                />
                <FormControlLabel
                    control={<Checkbox color="primary" name="petrol" />}
                    label="Automatic"
                />
                <FormControlLabel
                    control={<Checkbox color="primary" name="petrol" />}
                    label="Manual"
                />
                <Slider
                    defaultValue={30}
                    // getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={100}
                    marks
                    min={1000}
                    max={3000}
                />
                <TextField id="standard-basic" label="Seats" />
                <TextField id="standard-basic" label="Pickup" />
            </div>
        </div>
    );
};

export default Filter;
