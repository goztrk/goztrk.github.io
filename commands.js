import { Command } from 'commander';

const program = new Command();
program.name('new-blog-post').description('Creates a new markdown file for blog post');

program.parse();
