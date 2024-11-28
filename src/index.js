import { readFileSync } from 'fs';
import { resolve } from 'path';
import { cwd } from 'process';
import { parse } from './fileParser';

const getFileContent = (pathOfFile) => readFileSync(resolve(cwd(), pathOfFile), 'utf-8');