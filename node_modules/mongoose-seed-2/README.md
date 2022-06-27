# mongoose-seeder-2

Simple tool to clear & and populate your mongo db written in Typescript.

## Installation

```typescript
yarn add -D mongoose-seed-2
```

## Usage

```typescript
// seed.ts

import mongoose from 'mongoose';
import { Seeder } from 'mongoose-seeder-2';

// 1. import models, so they register in mongoose
import { User } from './src/app/models';
// model example:
// mongoose.model('User', new mongoose.Schema({ email: String, unique: true }));

async function seed() {
  // 2. connect seeder
  const seeder = new Seeder(
    'mongodb://<username>:<password>@<server>.mlab.com:<port>/<project>'
  );

  // 3. Pass names of models to be cleared
  await seeder.clearModels(['User']);

  // 4. Pass data to initialize db where key is model, and value is list of documents
  await seeder.populateModels({
    User: [{ email: 'foo@bar.com' }, { email: 'foo@baz.com' }],
  });

  await seeder.disconnect();
}

seed();
```

## License

MIT
