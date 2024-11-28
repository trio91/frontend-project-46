import * as yaml from 'js-yaml';

const getParse = (fileContent, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(fileContent);
    case 'yaml':
      return yaml.load(fileContent);
    case 'yml':
      return yaml.load(fileContent);
    default:
      throw new Error(`Format ${format} - is incorrect`);
  }
};

export default parse;