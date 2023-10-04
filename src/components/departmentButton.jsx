import * as React from 'react';
import Button from '@mui/material/Button';
import FilterListIcon from '@mui/icons-material/FilterList';

export default function DepartmentButton() {
    return (

            <Button variant="outlined"  color="primary" sx={{mb:5, width: "304px", height: "56px", borderRadius: "6px", border: "1px solid ", borderColor: "primary.light", p: 1.5, textTransform: "none", fontSize: "1.5rem", fontWeight: 700}}
                    startIcon=<FilterListIcon />>
                Departments
            </Button>


    );
}