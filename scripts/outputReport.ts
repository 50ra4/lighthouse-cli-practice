import { readdirSync } from 'node:fs';

const main = () => {
  const files = readdirSync('src', {
    withFileTypes: true,
    recursive: true,
  })
    .filter((dirent) => dirent.isFile())
    .map((dirent) => dirent.name);
  console.log(files);
};

main();
