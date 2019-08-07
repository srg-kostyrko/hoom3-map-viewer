// @flow
import React from "react";
import { observer } from "mobx-react-lite";

import { Buildings } from "./Buildings";
import { Garrison } from "./Garrison";

import { getAlignmentByHeader } from "../map/utils";
import { useAppStore } from "../../store/AppStore";
import { MetaType } from "homm3-parsers";
import "./Town.css";

export const Town = observer(() => {
  const appStore = useAppStore();
  const { selectedObject } = appStore;
  if (!selectedObject || selectedObject.body.type !== MetaType.Town)
    return null;
  const town = selectedObject.body.data;
  const alignment = getAlignmentByHeader(selectedObject.attributes.header);

  return (
    <div className={`town--${alignment}`}>
      <div className="town--buildings">
        <Buildings alignment={alignment} town={town} />
      </div>
      <Garrison garrison={town.hasGarrison ? town.garrison : []} />
    </div>
  );
});
