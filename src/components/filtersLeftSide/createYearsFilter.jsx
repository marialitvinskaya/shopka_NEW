import FilterComponent from "./filterComponent";
import year from "../../yearOfManufactoring";
import React from "react";

export default function CreateYearsFilter(year) {
    return (
        <FilterComponent
            key={year.id}
            value={year.value}
            label={year.label}
        />
    );
}