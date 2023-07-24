import { Command } from 'commander';

const program = new Command();
program.name('new-blog-post').description('Creates a new markdown file for blog post').version('0.0.1', '-v');

program.parse();
