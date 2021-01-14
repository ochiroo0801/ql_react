import React from "react";
import { RotateSpinner } from "react-spinners-kit";

import css from "./style.module.scss";

function PreLoader() {
  return (
    <div className={css.preLoader}>
      <RotateSpinner size={80} color="#414fe6" />
    </div>
  );
}

export default PreLoader;
