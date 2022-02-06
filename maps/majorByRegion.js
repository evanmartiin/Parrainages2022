import findMajor from "./findMajor.js";
import { rawRegions } from "../public/regions.js";

export default function majorByRegion(data) {
  let regions = [];

  data.forEach((vote) => {
    let linkedRegion = rawRegions.find((el) => el.dep_name === vote[5])?.region_name;
    if (!rawRegions.find((el) => el.dep_name === vote[5])) {
        linkedRegion = vote[5];
    }

    let region = regions.find((el) => el.name === linkedRegion);

    if (!region) {
      regions.push({ name: linkedRegion, votes: [] });
      region = regions.find((el) => el.name === linkedRegion);
    }

    region.votes.push(vote[6]);
  });

  regions.forEach((region) => (region.major = findMajor(region.votes)));

  return regions;
}
