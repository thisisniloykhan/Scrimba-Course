import sanitizeHtml from "sanitize-html";

export async function sanitizeInput(input) {
  for (const [key, value] of Object.entries(input)) {
    input[key] = sanitizeHtml(value, {
      allowedTags: ["b"],
      allowedAttributes: {},
    });
  }

  return input;
}
