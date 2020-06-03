import React from "react";
import styles from "./Filter.module.css";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Slider } from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";
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
    const PrettoSlider = withStyles({
        root: {
            color: "rgb(61, 28, 247)",
            height: 8,
        },
        thumb: {
            height: 24,
            width: 24,
            backgroundColor: "#fff",
            border: "2px solid currentColor",
            marginTop: -8,
            marginLeft: -12,
            "&:focus, &:hover, &$active": {
                boxShadow: "inherit",
            },
        },
        active: {},
        valueLabel: {
            left: "calc(-50% + 4px)",
        },
        track: {
            height: 8,
            borderRadius: 4,
        },
        rail: {
            height: 8,
            borderRadius: 4,
        },
    })(Slider);
    function valuetext(value) {
        let textValue;
        textValue = (parseFloat(value) / 1000.0).toString() + "K";
        return textValue;
    }
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h2>Filter Options</h2>
            </div>
            <div className={styles.options}>
                <div className={styles.checkboxes}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                style={{ color: "rgb(61, 28, 247)" }}
                                name="petrol"
                            />
                        }
                        label="Petrol"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                style={{ color: "rgb(61, 28, 247)" }}
                                name="diesel"
                            />
                        }
                        label="Diesel"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                style={{ color: "rgb(61, 28, 247)" }}
                                name="fuel"
                            />
                        }
                        label="Fuel"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                style={{ color: "rgb(61, 28, 247)" }}
                                name="noFuel"
                            />
                        }
                        label="No Fuel"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                style={{ color: "rgb(61, 28, 247)" }}
                                name="automatic"
                            />
                        }
                        label="Automatic"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                style={{ color: "rgb(61, 28, 247)" }}
                                name="manual"
                            />
                        }
                        label="Manual"
                    />
                </div>
                <h3
                    style={{
                        fontFamily: "Roboto",
                        fontWeight: "normal",
                        fontSize: "20px",
                        marginTop: "20px",
                    }}
                >
                    Maximum Price: {}
                    <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        valueLabelFormat={valuetext}
                        style={{
                            width: "250px",
                        }}
                        defaultValue={1500}
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
