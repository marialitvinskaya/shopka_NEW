import FilterComponent from "./filterComponent";
import filterItem from "../../filterItems";
import React from "react";

export default function CreateSortingFilter(filterItem) {
    return (
        <FilterComponent
            key={filterItem.id}
            value={filterItem.value}
            label={filterItem.label}
        />
    );
}