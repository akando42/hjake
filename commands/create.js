import fs from 'fs'
import nn from 'node-notifier'
import input from '@inquirer/input'
import chalk from 'chalk'
import shell from 'shelljs'
import { fileURLToPath } from 'url';
import path  from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __template = path.join(__dirname + "/../templates/store");

function notify(message){
  nn.notify({
    'title':'Hjake',
    'message':message
  });
}

export default async (model) => {
  const mongoDB = await input({ message: chalk.blue('What is your MongDB connecting link ?') });
  const mapBoxKey = await input({ message: chalk.yellow('What is your  Mapbox Key ?') });
  if(!model){
    const modelName = await input({ message: chalk.green('Data model name') });  
  }

  // console.log(__template);
  let api_dir = model+'/pages/api/';
  shell.cp('-R', __template, model);
  shell.cp(api_dir+"api_template.js",api_dir+model+".js");

  let api_endpoint = new String(model);
  shell.sed('-i', 'location', model, api_dir+model+".js");  

  if (mongoDB && mapBoxKey) {
    notify("Got both mongoDB link and mapBoxKey");  
  }

  process.exit(1);
}

