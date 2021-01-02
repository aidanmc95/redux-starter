import { compose, pipe } from "lodash/fp"

let input = "   Hi   "
let output = "<div>" + input.trim() + "</div>"

const trim = str => str.trim();
const wrapInDiv = type => str => `<${type}>${str}</${type}>`;
const toLowerCase = str => str.toLowerCase();

const transform = pipe(trim, toLowerCase, wrapInDiv("div"))
transform(input)