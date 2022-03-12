# verdaccio

## 6.0.0-6-next.37

### Patch Changes

- Updated dependencies [a2b69a08]
  - @verdaccio/ui-theme@6.0.0-6-next.22
  - @verdaccio/hooks@6.0.0-6-next.12
  - @verdaccio/node-api@6.0.0-6-next.29
  - @verdaccio/cli@6.0.0-6-next.30

## 6.0.0-6-next.36

### Patch Changes

- Updated dependencies [a179f1fd]
  - @verdaccio/ui-theme@6.0.0-6-next.21

## 6.0.0-6-next.35

### Patch Changes

- Updated dependencies [635ca3f9]
- Updated dependencies [aeff267d]
  - @verdaccio/ui-theme@6.0.0-6-next.20
  - verdaccio-htpasswd@11.0.0-6-next.12
  - @verdaccio/hooks@6.0.0-6-next.12
  - @verdaccio/cli@6.0.0-6-next.29
  - @verdaccio/node-api@6.0.0-6-next.28

## 6.0.0-6-next.34

### Patch Changes

- Updated dependencies [aa0b2aa9]
  - @verdaccio/ui-theme@6.0.0-6-next.19

## 6.0.0-6-next.33

### Patch Changes

- Updated dependencies [df53f61c]
  - @verdaccio/ui-theme@6.0.0-6-next.18

## 6.0.0-6-next.32

### Patch Changes

- Updated dependencies [b78f3525]
- Updated dependencies [c9089631]
  - @verdaccio/logger@6.0.0-6-next.10
  - @verdaccio/ui-theme@6.0.0-6-next.17
  - @verdaccio/cli@6.0.0-6-next.28
  - @verdaccio/hooks@6.0.0-6-next.12
  - @verdaccio/node-api@6.0.0-6-next.27

## 6.0.0-6-next.31

### Patch Changes

- Updated dependencies [ad3151c3]
  - @verdaccio/ui-theme@6.0.0-6-next.16

## 6.0.0-6-next.30

### Patch Changes

- Updated dependencies [7ff4808b]
  - @verdaccio/ui-theme@6.0.0-6-next.15

## 6.0.0-6-next.29

### Patch Changes

- Updated dependencies [048ac95e]
- Updated dependencies [730b5d8c]
  - @verdaccio/ui-theme@6.0.0-6-next.14
  - @verdaccio/logger@6.0.0-6-next.9
  - @verdaccio/node-api@6.0.0-6-next.26
  - @verdaccio/cli@6.0.0-6-next.27
  - @verdaccio/hooks@6.0.0-6-next.11

## 6.0.0-6-next.28

### Patch Changes

- Updated dependencies [a828271d]
- Updated dependencies [24b9be02]
- Updated dependencies [e75c0a3b]
- Updated dependencies [000d4374]
- Updated dependencies [b13a3fef]
  - @verdaccio/utils@6.0.0-6-next.10
  - verdaccio-audit@11.0.0-6-next.8
  - @verdaccio/logger@6.0.0-6-next.8
  - @verdaccio/ui-theme@6.0.0-6-next.13
  - @verdaccio/cli@6.0.0-6-next.26
  - @verdaccio/node-api@6.0.0-6-next.25
  - @verdaccio/hooks@6.0.0-6-next.10
  - verdaccio-htpasswd@11.0.0-6-next.11

## 6.0.0-6-next.27

### Patch Changes

- Updated dependencies [f86c31ed]
  - @verdaccio/utils@6.0.0-6-next.9
  - @verdaccio/cli@6.0.0-6-next.25
  - @verdaccio/mock@6.0.0-6-next.12
  - @verdaccio/hooks@6.0.0-6-next.9
  - @verdaccio/node-api@6.0.0-6-next.24
  - @verdaccio/ui-theme@6.0.0-6-next.12

## 6.0.0-6-next.26

### Patch Changes

- Updated dependencies [6c1eb021]
  - @verdaccio/cli@6.0.0-6-next.24
  - @verdaccio/logger@6.0.0-6-next.7
  - @verdaccio/node-api@6.0.0-6-next.23
  - @verdaccio/hooks@6.0.0-6-next.9
  - verdaccio-htpasswd@11.0.0-6-next.10
  - @verdaccio/mock@6.0.0-6-next.11
  - @verdaccio/utils@6.0.0-6-next.8
  - @verdaccio/ui-theme@6.0.0-6-next.12

## 6.0.0-6-next.25

### Major Changes

- 794af76c: Remove Node 12 support

  - We need move to the new `undici` and does not support Node.js 12

### Minor Changes

- 154b2ecd: refactor: remove @verdaccio/commons-api in favor @verdaccio/core and remove duplications

### Patch Changes

- Updated dependencies [794af76c]
- Updated dependencies [b702ea36]
- Updated dependencies [154b2ecd]
  - @verdaccio/cli@6.0.0-6-next.23
  - verdaccio-htpasswd@11.0.0-6-next.9
  - @verdaccio/hooks@6.0.0-6-next.8
  - @verdaccio/logger@6.0.0-6-next.6
  - @verdaccio/mock@6.0.0-6-next.10
  - @verdaccio/node-api@6.0.0-6-next.22
  - verdaccio-audit@11.0.0-6-next.7
  - @verdaccio/ui-theme@6.0.0-6-next.12
  - @verdaccio/utils@6.0.0-6-next.7

## 6.0.0-6-next.24

### Patch Changes

- Updated dependencies [5fed1955]
- Updated dependencies [2c594910]
  - @verdaccio/ui-theme@6.0.0-6-next.11
  - @verdaccio/logger@6.0.0-6-next.5
  - @verdaccio/cli@6.0.0-6-next.22
  - @verdaccio/hooks@6.0.0-6-next.7
  - @verdaccio/node-api@6.0.0-6-next.21

## 6.0.0-6-next.23

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
  - @verdaccio/cli@6.0.0-6-next.21
  - @verdaccio/hooks@6.0.0-6-next.6
  - verdaccio-audit@11.0.0-6-next.6
  - @verdaccio/ui-theme@6.0.0-6-next.10
  - @verdaccio/utils@6.0.0-6-next.6
  - @verdaccio/mock@6.0.0-6-next.9
  - @verdaccio/node-api@6.0.0-6-next.20
  - verdaccio-htpasswd@11.0.0-6-next.8
  - @verdaccio/logger@6.0.0-6-next.4

## 6.0.0-6-next.22

### Patch Changes

- Updated dependencies [df0da3d6]
  - verdaccio-htpasswd@11.0.0-6-next.7
  - @verdaccio/hooks@6.0.0-6-next.5
  - @verdaccio/mock@6.0.0-6-next.8
  - @verdaccio/node-api@6.0.0-6-next.19
  - @verdaccio/cli@6.0.0-6-next.20
  - @verdaccio/ui-theme@6.0.0-6-next.9

## 6.0.0-6-next.21

### Patch Changes

- Updated dependencies [2e3b9552]
  - @verdaccio/cli@6.0.0-6-next.19

## 6.0.0-6-next.20

### Patch Changes

- Updated dependencies [f96b147e]
  - verdaccio-audit@11.0.0-6-next.5
  - @verdaccio/node-api@6.0.0-6-next.18
  - @verdaccio/cli@6.0.0-6-next.18
  - @verdaccio/ui-theme@6.0.0-6-next.9

## 6.0.0-6-next.19

### Patch Changes

- Updated dependencies [67406082]
  - @verdaccio/ui-theme@6.0.0-6-next.9

## 6.0.0-6-next.18

### Patch Changes

- Updated dependencies [d2c65da9]
- Updated dependencies [55ee3fdd]
  - @verdaccio/utils@6.0.0-6-next.5
  - @verdaccio/cli@6.0.0-6-next.17
  - @verdaccio/mock@6.0.0-6-next.7
  - @verdaccio/hooks@6.0.0-6-next.4
  - @verdaccio/node-api@6.0.0-6-next.17
  - @verdaccio/ui-theme@6.0.0-6-next.8

## 6.0.0-6-next.17

### Patch Changes

- @verdaccio/node-api@6.0.0-6-next.16
- @verdaccio/cli@6.0.0-6-next.16
- @verdaccio/ui-theme@6.0.0-6-next.8

## 6.0.0-6-next.16

### Patch Changes

- Updated dependencies [0da7031e]
  - @verdaccio/ui-theme@6.0.0-6-next.8
  - @verdaccio/hooks@6.0.0-6-next.4
  - @verdaccio/logger@6.0.0-6-next.4
  - @verdaccio/mock@6.0.0-6-next.6
  - @verdaccio/node-api@6.0.0-6-next.15
  - @verdaccio/cli@6.0.0-6-next.15

## 6.0.0-6-next.15

### Patch Changes

- Updated dependencies [aecbd226]
  - @verdaccio/ui-theme@6.0.0-6-next.7
  - @verdaccio/hooks@6.0.0-6-next.4
  - @verdaccio/logger@6.0.0-6-next.4
  - @verdaccio/mock@6.0.0-6-next.6
  - @verdaccio/node-api@6.0.0-6-next.14
  - @verdaccio/cli@6.0.0-6-next.14

## 6.0.0-6-next.14

### Patch Changes

- @verdaccio/cli@6.0.0-6-next.13
- @verdaccio/hooks@6.0.0-6-next.4
- @verdaccio/mock@6.0.0-6-next.6
- @verdaccio/node-api@6.0.0-6-next.13
- @verdaccio/ui-theme@6.0.0-6-next.6

## 6.0.0-6-next.13

### Patch Changes

- Updated dependencies [19d272d1]
  - @verdaccio/cli@6.0.0-6-next.12
  - @verdaccio/node-api@6.0.0-6-next.12
  - @verdaccio/hooks@6.0.0-6-next.4
  - @verdaccio/logger@6.0.0-6-next.4
  - @verdaccio/mock@6.0.0-6-next.5
  - @verdaccio/ui-theme@6.0.0-6-next.6

## 6.0.0-6-next.12

### Patch Changes

- 648575aa: Bug Fixes

  - fix escaped slash in namespaced packages

  #### Related tickets

  https://github.com/verdaccio/verdaccio/pull/2193

- Updated dependencies [648575aa]
  - @verdaccio/mock@6.0.0-6-next.5
  - @verdaccio/ui-theme@6.0.0-6-next.6
  - @verdaccio/utils@6.0.0-6-next.4
  - @verdaccio/cli@6.0.0-6-next.11
  - @verdaccio/hooks@6.0.0-6-next.4
  - @verdaccio/node-api@6.0.0-6-next.11

## 6.0.0-6-next.11

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
  - @verdaccio/cli@6.0.0-6-next.10
  - @verdaccio/logger@6.0.0-6-next.4
  - @verdaccio/node-api@6.0.0-6-next.10
  - @verdaccio/hooks@6.0.0-6-next.4
  - @verdaccio/mock@6.0.0-6-next.4
  - @verdaccio/ui-theme@6.0.0-alpha.5

## 6.0.0-6-next.10

### Patch Changes

- Updated dependencies [08aade9a]
  - @verdaccio/cli@6.0.0-6-next.9
  - @verdaccio/node-api@6.0.0-6-next.9
  - @verdaccio/ui-theme@6.0.0-alpha.5

## 5.0.0-alpha.9

### Patch Changes

- Updated dependencies [e0b7c4ff]
  - @verdaccio/ui-theme@5.0.0-alpha.5
  - @verdaccio/node-api@5.0.0-alpha.8
  - @verdaccio/cli@5.0.0-alpha.8

## 5.0.0-alpha.8

### Patch Changes

- Updated dependencies [64737a37]
  - @verdaccio/cli@5.0.0-alpha.7
  - @verdaccio/node-api@5.0.0-alpha.7
  - @verdaccio/ui-theme@5.0.0-alpha.4

## 5.0.0-alpha.7

### Patch Changes

- Updated dependencies [174cdcaa]
  - verdaccio-htpasswd@10.0.0-alpha.6
  - @verdaccio/hooks@5.0.0-alpha.3
  - @verdaccio/node-api@5.0.0-alpha.6
  - @verdaccio/cli@5.0.0-alpha.6
  - @verdaccio/ui-theme@5.0.0-alpha.4

## 5.0.0-alpha.6

### Patch Changes

- Updated dependencies [f8a50baa]
  - verdaccio-htpasswd@10.0.0-alpha.5
  - verdaccio-audit@10.0.0-alpha.4
  - @verdaccio/hooks@5.0.0-alpha.3
  - @verdaccio/node-api@5.0.0-alpha.5
  - @verdaccio/cli@5.0.0-alpha.5
  - @verdaccio/ui-theme@5.0.0-alpha.4

## 5.0.0-alpha.5

### Patch Changes

- fecbb9be: chore: add release step to private regisry on merge changeset pr
- Updated dependencies [fecbb9be]
  - @verdaccio/ui-theme@5.0.0-alpha.4
  - @verdaccio/cli@5.0.0-alpha.4
  - verdaccio-htpasswd@10.0.0-alpha.4
  - @verdaccio/hooks@5.0.0-alpha.3
  - @verdaccio/logger@5.0.0-alpha.3
  - @verdaccio/mock@5.0.0-alpha.3
  - @verdaccio/node-api@5.0.0-alpha.4
  - verdaccio-audit@10.0.0-alpha.3
  - @verdaccio/utils@5.0.0-alpha.3

## 5.0.0-alpha.4

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
  - @verdaccio/cli@5.0.0-alpha.3
  - verdaccio-htpasswd@10.0.0-alpha.3
  - @verdaccio/hooks@5.0.0-alpha.2
  - @verdaccio/logger@5.0.0-alpha.2
  - @verdaccio/mock@5.0.0-alpha.2
  - @verdaccio/node-api@5.0.0-alpha.3
  - verdaccio-audit@10.0.0-alpha.2
  - @verdaccio/ui-theme@5.0.0-alpha.3
  - @verdaccio/utils@5.0.0-alpha.2

## 5.0.0-alpha.3

### Patch Changes

- Updated dependencies [2a327c4b]
  - verdaccio-htpasswd@10.0.0-alpha.2
  - @verdaccio/node-api@5.0.0-alpha.2
  - @verdaccio/cli@5.0.0-alpha.2
  - @verdaccio/ui-theme@5.0.0-alpha.2

## 5.0.0-alpha.2

### Minor Changes

- 6cb0b588: feat: ui theme plugin part of the application

### Patch Changes

- Updated dependencies [6cb0b588]
  - @verdaccio/ui-theme@5.0.0-alpha.2

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
- Updated dependencies [ae52ba35]
- Updated dependencies [26b494cb]
- Updated dependencies [b57b4338]
- Updated dependencies [add778d5]
- Updated dependencies [31af0164]
  - @verdaccio/cli@5.0.0-alpha.1
  - verdaccio-htpasswd@10.0.0-alpha.1
  - @verdaccio/hooks@5.0.0-alpha.1
  - @verdaccio/logger@5.0.0-alpha.1
  - @verdaccio/mock@5.0.0-alpha.1
  - @verdaccio/node-api@5.0.0-alpha.1
  - @verdaccio/utils@5.0.0-alpha.1

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
- Updated dependencies [ae52ba352]
- Updated dependencies [26b494cbd]
- Updated dependencies [b57b43388]
- Updated dependencies [add778d55]
- Updated dependencies [31af01641]
  - @verdaccio/cli@5.0.0-alpha.1
  - verdaccio-htpasswd@10.0.0-alpha.0
  - @verdaccio/hooks@5.0.0-alpha.1
  - @verdaccio/logger@5.0.0-alpha.1
  - @verdaccio/mock@5.0.0-alpha.1
  - @verdaccio/node-api@5.0.0-alpha.1
  - @verdaccio/utils@5.0.0-alpha.1
