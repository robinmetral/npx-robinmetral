#! /usr/bin/env node

const cfonts = require("cfonts");
const boxen = require("boxen");
const chalk = require("chalk");
const data = require("./data.js");
const picture = require("./picture");

const showPicture = () => picture;

const showName = name => {
  const bigName = cfonts.render(name, {
    colors: ["white", "yellow"]
  });
  return bigName.string;
};

const showWebsite = () => `🔗 ${data.website}\n`;

const showLocation = () =>
  `🌍 ${data.location.city}, ${data.location.country}\n`;

const showDescription = () => `${data.description}\n`;

const showLinks = () =>
  data.links
    .map(link => chalk`{gray ${link.label}:} {yellow ${link.url}}\n`)
    .join("");

showCommand = () => chalk`{yellow $} {green npx ${data.package}}\n`;

const displayAll = () => `
${showPicture()}
${showName(`${data.name.first}\n${data.name.last}`)}
${showWebsite()}
${showLocation()}
${showDescription()}
${showLinks()}
${showCommand()}
`;

console.log(
  boxen(displayAll(), { padding: 1, margin: 1, borderStyle: "round" })
);
