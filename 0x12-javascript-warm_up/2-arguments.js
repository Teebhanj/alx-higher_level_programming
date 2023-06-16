#!/usr/bin/node
if (process.argv.length === null) {
  console.log('No argument');
} else if (process.argv.length === 0) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
