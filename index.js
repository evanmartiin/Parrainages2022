import fetchData, { data } from "./data/fetchData.js";
import fs from 'fs';
import path from 'path';
import byCandidates from "./data/byCandidates.js";
import byDepartments from "./data/byDepartments.js";
import byCommunes from "./data/byCommunes.js";

const main = async () => {
  await fetchData();
  fs.writeFileSync(path.resolve('data/json/raw.json'), JSON.stringify(data, null, 2));
  byCandidates(data);
  byDepartments(data);
  byCommunes(data);
};

main();
