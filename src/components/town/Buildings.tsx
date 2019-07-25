// @flow
import React from "react";

import "../../assets/homm3/towns/buildings.css";
import {
  Town,
  TownRoE,
  TownAB
} from "homm3-parsers/dist/types/parsers/h3m/contracts/objects/Town";
import { Building } from "homm3-parsers";

type Props = {
  town: Town | TownAB | TownRoE;
};

export const Buildings = ({ town }: Props) => {
  let buildings = [
    <div
      key="villageHall"
      className={`building building--${Building.VillageHall}`}
    />,
    <div key="extraAnimation" className={`building building--extraAnimation`} />
  ];

  if (town.buildingsCustomized) {
    for (const building of town.buildings.built) {
      buildings.push(
        <div key={building} className={`building building--${building}`} />
      );
      switch (building) {
        case Building.TownHall:
          buildings.push(
            <div
              key="extraTownHall"
              className="building building--extraTownHall"
            />
          );
          break;
        case Building.CityHall:
          buildings.push(
            <div
              key="extraCityHall"
              className="building building--extraCityHall"
            />
          );
          break;
        case Building.Capitol:
          buildings.push(
            <div
              key="extraCapitol"
              className="building building--extraCapitol"
            />
          );
          break;
        case Building.Horde1:
          if (town.buildings.built.includes(Building.DwellingUp1)) {
            buildings.push(
              <div key="horde1Upgr" className="building building--horde1Upgr" />
            );
          }
          break;
        case Building.Horde2:
          if (town.buildings.built.includes(Building.DwellingUp2)) {
            buildings.push(
              <div key="horde2Upgr" className="building building--horde2Upgr" />
            );
          }
          break;
        case Building.Horde3:
          if (town.buildings.built.includes(Building.DwellingUp3)) {
            buildings.push(
              <div key="horde3Upgr" className="building building--horde3Upgr" />
            );
          }
          break;
        case Building.Horde4:
          if (town.buildings.built.includes(Building.DwellingUp4)) {
            buildings.push(
              <div key="horde4Upgr" className="building building--horde4Upgr" />
            );
          }
          break;
        case Building.Horde5:
          if (town.buildings.built.includes(Building.DwellingUp5)) {
            buildings.push(
              <div key="horde5Upgr" className="building building--horde5Upgr" />
            );
          }
          break;
        default:
        // noop
      }
    }
  } else if (town.hasFort) {
    buildings.push(
      <div
        key={Building.Fort}
        className={`building building--${Building.Fort}`}
      />
    );
  }
  return <div className="town--buildings">{buildings}</div>;
};
