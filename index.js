#!/usr/bin/env node

import cli from "commander";
import download from "./commands/download.js"
import posts from "./commands/posts.js"
import users from "./commands/users.js"
import comments from "./commands/comments.js"

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
  .command("posts")
  .arguments("[postID]", "ID of post you would like to downloads")
  .option("-p, --pretty", "Pretty print output from API.")
  .description("Download a list of all posts or one post by ID")
  .action(posts)

cli
  .command("comments")
  .arguments("[postID]", "ID of post you would like to downloads")
  .option("-p, --pretty", "Pretty print output from API.")
  .description("Download a list of all posts or one post by ID")
  .action(comments)

cli
  .command("users")
  .arguments("[postID]", "ID of post you would like to downloads")
  .option("-p, --pretty", "Pretty print output from API.")
  .description("Download a list of all posts or one post by ID")
  .action(users)

cli.parse(process.argv);

