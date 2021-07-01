import NameInput from "./NameInput";
import React from "react";
import { nameReducer } from "./nameReducer";
import { useStore } from "react-redux";

const NameWithInjector = () => {
  const store = useStore();

  React.useEffect(() => store.injectReducer("name", nameReducer), []);

  return <NameInput />;
};

export default NameWithInjector;
