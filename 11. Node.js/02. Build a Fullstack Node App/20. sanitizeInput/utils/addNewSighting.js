import path from "node:path";
import fs from "node:fs/promises";
import { getData } from "./getData.js";

const __dirname = import.meta.dirname;

export async function addNewSighting(newSighting) {
  try {
    const sightings = await getData();

    sightings.push(newSighting);

    const pathJSON = path.join(__dirname, "..", "data", "data.json");

    await fs.writeFile(pathJSON, JSON.stringify(sightings, null, 2), "utf8");
    /*

    4. Add the new sighting and check out the 'read' page.
    
    Bonus: figure out how to prettify the JSON!
    Remember to uncomment the import statement in routeHandler.js!!
*/
  } catch (err) {
    throw new Error(err);
  }
}
