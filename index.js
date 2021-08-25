#!/usr/bin/env node

import cli from "commander";
import download from "./commands/download.js"
import create from "./commands/create.js"

cli.description("Automate The Boring Stuffs");
cli.name("hjake");
cli.usage("<command>");
cli.addHelpCommand(false);
cli.helpOption(false);

cli
  .command("download")
  .arguments("[postID]", "ID of post you would like to downloads")
  .option("-p, --pretty", "Pretty print output from API.")
  .description("Download a list of all posts or one post by ID")
  .action(download)

cli
  .command("create")
  .arguments("[model]", "Name for Model of Web Application")
  .description("Creating a new NextJS-MongoDB-Mapbox Project")
  .action(create)

cli.parse(process.argv);

