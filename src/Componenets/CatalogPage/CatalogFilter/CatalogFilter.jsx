import React from 'react';
import BasicSelect from "./Select";
import "./catalogFilter.scss"
import SelectPrice from "./SelectPrice";
import SelectSize from "./SelectSize";
import SelectBrand from "./SelectBrand";
const CatalogFilter = () => {
    return (
        <div className={'filter'}>
            <div className="filter__select">
               <SelectSize/>
            </div>
            <div className="filter__select">
               <SelectPrice/>
            </div>
            <div className="filter__select">
                <SelectBrand/>
            </div>
            <div className="filter__select">
                <BasicSelect/>
            </div>
        </div>
    );
};

export default CatalogFilter;