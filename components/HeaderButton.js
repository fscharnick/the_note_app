import { HeaderButton } from "react-navigation-header-buttons";
import React from "react";

import { Ionicons } from "@expo/vector-icons";

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color="black"
    />
  );
};

export default CustomHeaderButton;
