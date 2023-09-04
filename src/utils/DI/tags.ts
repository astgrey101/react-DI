import {tag} from "brandi";
import {tagged} from "brandi-react";

export const TAGS = {
  planet: tag('planet'),
};

export const withPlanetTag = tagged(TAGS.planet);
