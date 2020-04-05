import React from "react";
import { observer } from "mobx-react-lite";
import { useAppStore } from "../../store/AppStore";
import { MetaType, Creature } from "homm3-parsers";
import { CreaturePicture } from "./CreaturePicture";

export const CreaturePreview = observer(() => {
  const appStore = useAppStore();
  const { selectedObject } = appStore;
  if (!selectedObject || selectedObject.body.type !== MetaType.Creature)
    return null;
  const creature = selectedObject.body.data;

  return (
    <div className="creature">
      <div className="picture">
        <CreaturePicture
          creature={
            (selectedObject.attributes.objectSubType as unknown) as Creature
          }
        />
      </div>
      <div className="info">
        <div>Qty: {creature.quantity}</div>
        <div>Disposition: {creature.disposition}</div>
        <div>Never flees: {creature.neverFlees ? "yes" : "no"}</div>
        <div>Does not grow: {creature.doesNotGrow ? "yes" : "no"}</div>
        {/* {creature.hasMessageAndTreasure} */}
      </div>
    </div>
  );
});
