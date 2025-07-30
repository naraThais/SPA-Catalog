// src/components/CoffeeList/CoffeeList.js
import React from "react";
import {
  MapTo,
  withComponentMappingContext,
  AllowedComponentsContainer
} from "@adobe/aem-react-editable-components";
import "./PetList.css";

const EditConfig = {
  emptyLabel: "Pet List",
  isEmpty: (props) =>
    !props || !props.cqItems || Object.keys(props.cqItems).length === 0
};

const PetList = (props) => (
  <div className="coffee-list-root">
    <AllowedComponentsContainer {...props} />
  </div>
);

export default MapTo("catalogo/components/petlist")(
  withComponentMappingContext(PetList),
  EditConfig
);