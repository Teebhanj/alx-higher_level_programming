#!/usr/bin/node
const firstArgument = process.argv[0];
if (!firstArgument) {
  console.log('No argument');
} else {
  console.log(firstArgument);
}
