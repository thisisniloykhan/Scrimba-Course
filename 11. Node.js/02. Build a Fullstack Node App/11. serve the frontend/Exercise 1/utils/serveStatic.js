import path from "node:path";
import fs from "node:fs/promises";
import { sendResponse } from "./sendResponse.js";
import { getContentType } from "./getContentType.js";

export async function serveStatic(req, res, baseDir) {
  /*
Challenge: 
  1. Write code below to serve files from our public directory.
     
     Don’t worry about handling errors for now.
     hint.md for help!
*/

  const filePath = path.join(baseDir, "public");

  const pathToResource = path.join(
    filePath,
    req.url === "/" ? "index.html" : req.url,
  );

  const ext = path.extname(pathToResource);
  const contentType = getContentType(ext);

  try {
    const content = await fs.readFile(pathToResource);
    sendResponse(res, 200, contentType, content);
  } catch (err) {
    if (err.code === "ENOENT") {
      const content = await fs.readFile(path.join(filePath, "404.html"));
      sendResponse(res, 404, "text/html", content);
    } else {
      sendResponse(
        res,
        500,
        "text/html",
        `<html><h1>Server Error: ${err.code}</h1></html>`,
      );
    }
  }
}
