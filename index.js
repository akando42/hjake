#!/usr/bin/env node

import cli from "commander";
import news from "./commands/news.js"
import create from "./commands/create.js"
// import weather from "./commands/weather.js"
// import contracts from "./commands/contracts.js"

cli.description("Automate The Boring Stuffs");
cli.name("hjake");
cli.usage("<command>");
cli.addHelpCommand(false);
cli.helpOption(false);

cli
  .command("news")
  .arguments("[newsID]", "ID of the Hackernews Article")
  .option("-p, --pretty", "Pretty print output from API.")
  .description("Open Top 10 Articles from Hacker News.")
  .action(news)

cli
  .command("create")
  .arguments("[model]", "Name for Model of Web Application")
  .description("Creating a new NextJS-MongoDB-Mapbox Project")
  .action(create)

cli.parse(process.argv);

