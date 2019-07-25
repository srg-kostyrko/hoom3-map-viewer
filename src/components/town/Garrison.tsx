// @flow
import React from "react";
import "../../assets/homm3/ui/army_icons.css";
import "./Garrison.css";
import { CreatureSlot } from "homm3-parsers";

function CreatureIcon({ creature }: { creature: CreatureSlot }) {
  if (!creature || !creature.type) {
    return <div className="army_icons index-0" />;
  }
  return (
    <div className={`army_icons ${creature.type}`}>
      <div className="qty">{creature.quantity}</div>
    </div>
  );
}

export const Garrison = ({ garrison }: { garrison: CreatureSlot[] }) => (
  <div className="garrison">
    {Array.from(Array(7), (_, i) => (
      <CreatureIcon key={i} creature={garrison[i]} />
    ))}
  </div>
);
