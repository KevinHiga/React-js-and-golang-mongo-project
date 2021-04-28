const fs = require('fs');
const path = require('path');
const faker = require('faker');
const md5 = require('md5');

function createBookss(limit = 5) {
  const result = [];

  for (let i = 0; i < limit; i++) {
    const name = faker.name.name();
    const direction = faker.name.direction();
    const year = faker.name.year();
    const avatarUrl = faker.name.avatarUrl();

    result.push({
      id: faker.random.uuid(),
      name,
      direction,
      year,
      avatarUrl,
    });
  }

  return result;
}

function main() {
  const data = {
    bookss: createBookss(),
  };

  fs.writeFileSync(
    path.resolve(__dirname, 'db.json'),
    JSON.stringify(data, null, 4)
  );
}

main();
