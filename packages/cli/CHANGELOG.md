# @verdaccio/cli

## 6.0.0-6-next.30

### Patch Changes

- @verdaccio/fastify-migration@6.0.0-6-next.21
- @verdaccio/node-api@6.0.0-6-next.29

## 6.0.0-6-next.29

### Patch Changes

- @verdaccio/fastify-migration@6.0.0-6-next.20
- @verdaccio/node-api@6.0.0-6-next.28

## 6.0.0-6-next.28

### Patch Changes

- Updated dependencies [b78f3525]
  - @verdaccio/logger@6.0.0-6-next.10
  - @verdaccio/fastify-migration@6.0.0-6-next.19
  - @verdaccio/node-api@6.0.0-6-next.27

## 6.0.0-6-next.27

### Patch Changes

- Updated dependencies [730b5d8c]
  - @verdaccio/logger@6.0.0-6-next.9
  - @verdaccio/node-api@6.0.0-6-next.26
  - @verdaccio/fastify-migration@6.0.0-6-next.18

## 6.0.0-6-next.26

### Patch Changes

- Updated dependencies [a828271d]
- Updated dependencies [24b9be02]
- Updated dependencies [e75c0a3b]
  - @verdaccio/fastify-migration@6.0.0-6-next.17
  - @verdaccio/core@6.0.0-6-next.4
  - @verdaccio/logger@6.0.0-6-next.8
  - @verdaccio/node-api@6.0.0-6-next.25
  - @verdaccio/config@6.0.0-6-next.12

## 6.0.0-6-next.25

### Patch Changes

- Updated dependencies [f86c31ed]
- Updated dependencies [20c9e43e]
  - @verdaccio/fastify-migration@6.0.0-6-next.16
  - @verdaccio/config@6.0.0-6-next.11
  - @verdaccio/node-api@6.0.0-6-next.24

## 6.0.0-6-next.24

### Minor Changes

- 6c1eb021: feat: use warning codes for deprecation warnings

### Patch Changes

- Updated dependencies [6c1eb021]
  - @verdaccio/core@6.0.0-6-next.3
  - @verdaccio/logger@6.0.0-6-next.7
  - @verdaccio/node-api@6.0.0-6-next.23
  - @verdaccio/config@6.0.0-6-next.10
  - @verdaccio/fastify-migration@6.0.0-6-next.15

## 6.0.0-6-next.23

### Major Changes

- 794af76c: Remove Node 12 support

  - We need move to the new `undici` and does not support Node.js 12

### Minor Changes

- 154b2ecd: refactor: remove @verdaccio/commons-api in favor @verdaccio/core and remove duplications

### Patch Changes

- Updated dependencies [794af76c]
- Updated dependencies [b702ea36]
- Updated dependencies [154b2ecd]
  - @verdaccio/config@6.0.0-6-next.9
  - @verdaccio/fastify-migration@6.0.0-6-next.14
  - @verdaccio/logger@6.0.0-6-next.6
  - @verdaccio/node-api@6.0.0-6-next.22

## 6.0.0-6-next.22

### Patch Changes

- Updated dependencies [2c594910]
  - @verdaccio/logger@6.0.0-6-next.5
  - @verdaccio/fastify-migration@6.0.0-6-next.13
  - @verdaccio/node-api@6.0.0-6-next.21

## 6.0.0-6-next.21

### Major Changes

- 459b6fa7: refactor: search v1 endpoint and local-database

  - refactor search `api v1` endpoint, improve performance
  - remove usage of `async` dependency https://github.com/verdaccio/verdaccio/issues/1225
  - refactor method storage class
  - create new module `core` to reduce the ammount of modules with utilities
  - use `undici` instead `node-fetch`
  - use `fastify` instead `express` for functional test

  ### Breaking changes

  - plugin storage API changes
  - remove old search endpoint (return 404)
  - filter local private packages at plugin level

  The storage api changes for methods `get`, `add`, `remove` as promise base. The `search` methods also changes and recieves a `query` object that contains all query params from the client.

  ```ts
  export interface IPluginStorage<T> extends IPlugin {
    add(name: string): Promise<void>;
    remove(name: string): Promise<void>;
    get(): Promise<any>;
    init(): Promise<void>;
    getSecret(): Promise<string>;
    setSecret(secret: string): Promise<any>;
    getPackageStorage(packageInfo: string): IPackageStorage;
    search(query: searchUtils.SearchQuery): Promise<searchUtils.SearchItem[]>;
    saveToken(token: Token): Promise<any>;
    deleteToken(user: string, tokenKey: string): Promise<any>;
    readTokens(filter: TokenFilter): Promise<Token[]>;
  }
  ```

### Patch Changes

- Updated dependencies [459b6fa7]
  - @verdaccio/config@6.0.0-6-next.8
  - @verdaccio/fastify-migration@6.0.0-6-next.12
  - @verdaccio/node-api@6.0.0-6-next.20
  - @verdaccio/logger@6.0.0-6-next.4

## 6.0.0-6-next.20

### Patch Changes

- Updated dependencies [df0da3d6]
  - @verdaccio/fastify-migration@6.0.0-6-next.11
  - @verdaccio/node-api@6.0.0-6-next.19

## 6.0.0-6-next.19

### Major Changes

- 2e3b9552: feat: node 14 as minimum for running cli

## 6.0.0-6-next.18

### Patch Changes

- @verdaccio/node-api@6.0.0-6-next.18

## 6.0.0-6-next.17

### Minor Changes

- 55ee3fdd: [Fastify] Add ping endpoint

### Patch Changes

- Updated dependencies [55ee3fdd]
  - @verdaccio/fastify-migration@6.0.0-6-next.10
  - @verdaccio/config@6.0.0-6-next.7
  - @verdaccio/node-api@6.0.0-6-next.17

## 6.0.0-6-next.16

### Patch Changes

- @verdaccio/node-api@6.0.0-6-next.16

## 6.0.0-6-next.15

### Patch Changes

- @verdaccio/fastify-migration@6.0.0-6-next.9
- @verdaccio/logger@6.0.0-6-next.4
- @verdaccio/node-api@6.0.0-6-next.15

## 6.0.0-6-next.14

### Patch Changes

- @verdaccio/fastify-migration@6.0.0-6-next.9
- @verdaccio/logger@6.0.0-6-next.4
- @verdaccio/node-api@6.0.0-6-next.14

## 6.0.0-6-next.13

### Patch Changes

- Updated dependencies [1b217fd3]
  - @verdaccio/config@6.0.0-6-next.6
  - @verdaccio/node-api@6.0.0-6-next.13

## 6.0.0-6-next.12

### Patch Changes

- 19d272d1: fix: restore logger on init

  Enable logger after parse configuration and log the very first step on startup phase.

  ```bash
   warn --- experiments are enabled, it is recommended do not use experiments in production comment out this section to disable it
   info --- support for experiment [token]  is disabled
   info --- support for experiment [search]  is disabled
  (node:50831) Warning: config.logs is deprecated, rename configuration to "config.log"
  (Use `node --trace-warnings ...` to show where the warning was created)
   info --- http address http://localhost:4873/
   info --- version: 6.0.0-6-next.11
   info --- server started
  ```

- Updated dependencies [19d272d1]
  - @verdaccio/node-api@6.0.0-6-next.12
  - @verdaccio/fastify-migration@6.0.0-6-next.9
  - @verdaccio/logger@6.0.0-6-next.4

## 6.0.0-6-next.11

### Patch Changes

- Updated dependencies [1810ed0d]
  - @verdaccio/config@6.0.0-6-next.5
  - @verdaccio/node-api@6.0.0-6-next.11

## 6.0.0-6-next.10

### Major Changes

- 5c5057fc: feat: node api new structure based on promise

  ```js
  import { runServer } from '@verdaccio/node-api';
  // or
  import { runServer } from 'verdaccio';

  const app = await runServer(); // default configuration
  const app = await runServer('./config/config.yaml');
  const app = await runServer({ configuration });
  app.listen(4000, event => {
    // do something
  });
  ```

  ### Breaking Change

  If you are using the node-api, the new structure is Promise based and less arguments.

### Patch Changes

- Updated dependencies [5c5057fc]
  - @verdaccio/config@6.0.0-6-next.4
  - @verdaccio/node-api@6.0.0-6-next.10

## 6.0.0-6-next.9

### Major Changes

- 08aade9a: feat: use clipanion over commander

### Patch Changes

- @verdaccio/node-api@6.0.0-6-next.9

## 5.0.0-alpha.8

### Patch Changes

- @verdaccio/node-api@5.0.0-alpha.8

## 5.0.0-alpha.7

### Minor Changes

- 64737a37: feat: improve cli loggin on start up

### Patch Changes

- Updated dependencies [64737a37]
  - @verdaccio/node-api@5.0.0-alpha.7

## 5.0.0-alpha.6

### Patch Changes

- @verdaccio/node-api@5.0.0-alpha.6

## 5.0.0-alpha.5

### Patch Changes

- @verdaccio/node-api@5.0.0-alpha.5

## 5.0.0-alpha.4

### Patch Changes

- fecbb9be: chore: add release step to private regisry on merge changeset pr
- Updated dependencies [fecbb9be]
  - @verdaccio/config@5.0.0-alpha.3
  - @verdaccio/logger@5.0.0-alpha.3
  - @verdaccio/node-api@5.0.0-alpha.4

## 5.0.0-alpha.3

### Minor Changes

- 54c58d1e: feat: add server rate limit protection to all request

  To modify custom values, use the server settings property.

  ```markdown
  server:

  ## https://www.npmjs.com/package/express-rate-limit#configuration-options

  rateLimit:
  windowMs: 1000
  max: 10000
  ```

  The values are intended to be high, if you want to improve security of your server consider
  using different values.

### Patch Changes

- Updated dependencies [54c58d1e]
  - @verdaccio/config@5.0.0-alpha.2
  - @verdaccio/logger@5.0.0-alpha.2
  - @verdaccio/node-api@5.0.0-alpha.3

## 5.0.0-alpha.2

### Patch Changes

- @verdaccio/node-api@5.0.0-alpha.2

## 5.0.0-alpha.1

### Major Changes

- d87fa026: feat!: experiments config renamed to flags

  - The `experiments` configuration is renamed to `flags`. The functionality is exactly the same.

  ```js
  flags: token: false;
  search: false;
  ```

  - The `self_path` property from the config file is being removed in favor of `config_file` full path.
  - Refactor `config` module, better types and utilities

- da1ee9c8: - Replace signature handler for legacy tokens by removing deprecated crypto.createDecipher by createCipheriv

  - Introduce environment variables for legacy tokens

  ### Code Improvements

  - Add debug library for improve developer experience

  ### Breaking change

  - The new signature invalidates all previous tokens generated by Verdaccio 4 or previous versions.
  - The secret key must have 32 characters long.

  ### New environment variables

  - `VERDACCIO_LEGACY_ALGORITHM`: Allows to define the specific algorithm for the token signature which by default is `aes-256-ctr`
  - `VERDACCIO_LEGACY_ENCRYPTION_KEY`: By default, the token stores in the database, but using this variable allows to get it from memory

### Minor Changes

- 26b494cb: feat: add typescript project references settings

  Reading https://ebaytech.berlin/optimizing-multi-package-apps-with-typescript-project-references-d5c57a3b4440 I realized I can use project references to solve the issue to pre-compile modules on develop mode.

  It allows to navigate (IDE) trough the packages without need compile the packages.

  Add two `tsconfig`, one using the previous existing configuration that is able to produce declaration files (`tsconfig.build`) and a new one `tsconfig` which is enables [_projects references_](https://www.typescriptlang.org/docs/handbook/project-references.html).

### Patch Changes

- b57b4338: Enable prerelease mode with **changesets**
- 31af0164: ESLint Warnings Fixed

  Related to issue #1461

  - max-len: most of the sensible max-len errors are fixed
  - no-unused-vars: most of these types of errors are fixed by deleting not needed declarations
  - @typescript-eslint/no-unused-vars: same as above

- Updated dependencies [d87fa026]
- Updated dependencies [da1ee9c8]
- Updated dependencies [26b494cb]
- Updated dependencies [b57b4338]
- Updated dependencies [add778d5]
- Updated dependencies [31af0164]
  - @verdaccio/config@5.0.0-alpha.1
  - @verdaccio/logger@5.0.0-alpha.1
  - @verdaccio/node-api@5.0.0-alpha.1

## 5.0.0-alpha.1

### Major Changes

- d87fa0268: feat!: experiments config renamed to flags

  - The `experiments` configuration is renamed to `flags`. The functionality is exactly the same.

  ```js
  flags: token: false;
  search: false;
  ```

  - The `self_path` property from the config file is being removed in favor of `config_file` full path.
  - Refactor `config` module, better types and utilities

- da1ee9c82: - Replace signature handler for legacy tokens by removing deprecated crypto.createDecipher by createCipheriv

  - Introduce environment variables for legacy tokens

  ### Code Improvements

  - Add debug library for improve developer experience

  ### Breaking change

  - The new signature invalidates all previous tokens generated by Verdaccio 4 or previous versions.
  - The secret key must have 32 characters long.

  ### New environment variables

  - `VERDACCIO_LEGACY_ALGORITHM`: Allows to define the specific algorithm for the token signature which by default is `aes-256-ctr`
  - `VERDACCIO_LEGACY_ENCRYPTION_KEY`: By default, the token stores in the database, but using this variable allows to get it from memory

### Minor Changes

- 26b494cbd: feat: add typescript project references settings

  Reading https://ebaytech.berlin/optimizing-multi-package-apps-with-typescript-project-references-d5c57a3b4440 I realized I can use project references to solve the issue to pre-compile modules on develop mode.

  It allows to navigate (IDE) trough the packages without need compile the packages.

  Add two `tsconfig`, one using the previous existing configuration that is able to produce declaration files (`tsconfig.build`) and a new one `tsconfig` which is enables [_projects references_](https://www.typescriptlang.org/docs/handbook/project-references.html).

### Patch Changes

- b57b43388: Enable prerelease mode with **changesets**
- 31af01641: ESLint Warnings Fixed

  Related to issue #1461

  - max-len: most of the sensible max-len errors are fixed
  - no-unused-vars: most of these types of errors are fixed by deleting not needed declarations
  - @typescript-eslint/no-unused-vars: same as above

- Updated dependencies [d87fa0268]
- Updated dependencies [da1ee9c82]
- Updated dependencies [26b494cbd]
- Updated dependencies [b57b43388]
- Updated dependencies [add778d55]
- Updated dependencies [31af01641]
  - @verdaccio/config@5.0.0-alpha.1
  - @verdaccio/logger@5.0.0-alpha.1
  - @verdaccio/node-api@5.0.0-alpha.1
