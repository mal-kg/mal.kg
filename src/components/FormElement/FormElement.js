import React from 'react';
import {Grid, TextField} from "@mui/material";

const FormElement = (props) => {
    const {
        children,label, name, value, onChange, required, autoComplete, type, multiline, rows,
        xs, sm, md, lg, fullWidth,
    } = props
    return (
        <Grid item xs={xs} sm={sm} md={md} lg={lg}>
            <TextField
                multiline={multiline}
                fullWidth={fullWidth}
                rows={rows}
                type={type}
                required={required}
                autoComplete={autoComplete}
                label={label}
                name={name}
                value={value}
                onChange={onChange}
                style={{marginBottom: '10px'}}
            >
                {children}
            </TextField>
        </Grid>
    );
};

export default FormElement;