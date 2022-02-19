import { describe, expect, test, vi } from 'vitest';

import { errorUtils } from '@verdaccio/core';
import { ILocalPackageManager, IPackageStorage, IPluginStorage, Logger } from '@verdaccio/types';

import LocalMemory from '../src/index';
import { ConfigMemory } from '../src/local-memory';
import MemoryHandler from '../src/memory-handler';
import * as utils from '../src/utils';
import config from './partials/config';
import pkgExample from './partials/pkg';

const logger: Logger = {
  error: (e) => console.warn(e),
  info: (e) => console.warn(e),
  debug: (e) => console.warn(e),
  child: (e) => console.warn(e),
  warn: (e) => console.warn(e),
  http: (e) => console.warn(e),
  trace: (e) => console.warn(e),
};

const defaultConfig = { logger, config: null };

describe('memory unit test .', () => {
  test('should create an MemoryHandler instance', () => {
    const memoryHandler = new MemoryHandler(
      'test',
      {
        ['foo']: 'bar',
      },
      logger
    );

    expect(memoryHandler).toBeDefined();
  });

  test('should save a package', (done) => {
    const localMemory: IPluginStorage<ConfigMemory> = new LocalMemory(config, defaultConfig);
    const pkgName = 'test';

    const handler = localMemory.getPackageStorage(pkgName);
    expect(handler).toBeDefined();

    if (handler) {
      handler.savePackage(pkgName, pkgExample, (err) => {
        expect(err).toBeNull();
        handler.readPackage(pkgName, (err, data) => {
          expect(err).toBeNull();
          expect(data).toEqual(pkgExample);
          done();
        });
      });
    }
  });

  test('should fails on read a package does not exist', (done) => {
    const localMemory: IPluginStorage<ConfigMemory> = new LocalMemory(config, defaultConfig);
    const pkgName = 'test';

    const handler = localMemory.getPackageStorage(pkgName);
    expect(handler).toBeDefined();

    if (handler) {
      handler.readPackage(pkgName, (err) => {
        expect(err).not.toBeNull();
        expect(err.code).toBe(404);
        done();
      });
    }
  });

  test('should update a package', (done) => {
    const localMemory: IPluginStorage<ConfigMemory> = new LocalMemory(config, defaultConfig);
    const pkgName = 'test';

    const handler = localMemory.getPackageStorage(pkgName);
    expect(handler).toBeDefined();
    const onEnd = vi.fn();

    if (handler) {
      handler.savePackage(pkgName, pkgExample, (err) => {
        expect(err).toBeNull();

        handler.updatePackage(
          pkgName,
          (json, callback) => {
            expect(json).toBeDefined();
            expect(json.name).toBe(pkgExample.name);
            expect(callback).toBeDefined();
            callback(null);
          },
          (name, data, onEnd) => {
            expect(name).toBe(pkgName);
            expect(data.name).toBe(pkgExample.name);
            onEnd();
            expect(onEnd).toHaveBeenCalled();
            done();
          },
          (data) => {
            expect(data).toBeDefined();
            return data;
          },
          onEnd
        );
      });
    }
  });

  test('should fail updateHandler update a package', (done) => {
    const localMemory: IPluginStorage<ConfigMemory> = new LocalMemory(config, defaultConfig);
    const pkgName = 'test';

    const handler = localMemory.getPackageStorage(pkgName);
    expect(handler).toBeDefined();
    const onEnd = vi.fn((err) => {
      expect(err).not.toBeNull();
      expect(err).toEqual(errorUtils.getInternalError('some error'));
      done();
    });

    if (handler) {
      handler.savePackage(pkgName, pkgExample, (err) => {
        expect(err).toBeNull();

        handler.updatePackage(
          pkgName,
          (json, callback) => {
            expect(json).toBeDefined();
            expect(json.name).toBe(pkgExample.name);
            expect(callback).toBeDefined();
            callback(errorUtils.getInternalError('some error'));
          },
          () => {},
          // @ts-ignore
          () => {},
          onEnd
        );
      });
    }
  });

  test('should onWrite update a package', (done) => {
    const localMemory: IPluginStorage<ConfigMemory> = new LocalMemory(config, defaultConfig);
    const pkgName = 'test';

    const handler = localMemory.getPackageStorage(pkgName);
    expect(handler).toBeDefined();
    const onEnd = vi.fn((err) => {
      expect(err).not.toBeNull();
      expect(err).toEqual(errorUtils.getInternalError('error on parse the metadata'));
      done();
    });

    if (handler) {
      handler.savePackage(pkgName, pkgExample, (err) => {
        expect(err).toBeNull();

        handler.updatePackage(
          pkgName,
          (json, callback) => {
            expect(json).toBeDefined();
            expect(json.name).toBe(pkgExample.name);
            expect(callback).toBeDefined();
            callback(null);
          },
          (name, data, onEnd) => {
            expect(name).toBe(pkgName);
            expect(data.name).toBe(pkgExample.name);
            onEnd();
            expect(onEnd).toHaveBeenCalled();
            done();
          },
          () => {
            throw new Error('dadsads');
          },
          onEnd
        );
      });
    }
  });

  test('should delete a package', (done) => {
    const localMemory: IPluginStorage<ConfigMemory> = new LocalMemory(config, defaultConfig);
    const pkgName = 'test2';

    const handler: IPackageStorage = localMemory.getPackageStorage(pkgName);
    expect(handler).toBeDefined();
    if (handler) {
      handler.createPackage(pkgName, pkgExample, (err) => {
        expect(err).toBeNull();
        handler.deletePackage(pkgName).then((err) => {
          expect(err).toBeUndefined();
          handler.readPackage(pkgName, (err) => {
            expect(err).not.toBeNull();
            expect(err.message).toMatch(/no such package/);
            done();
          });
        });
      });
    }
  });
});

describe('writing files', () => {
  test('should write a tarball', (done) => {
    const localMemory: IPluginStorage<ConfigMemory> = new LocalMemory(config, defaultConfig);
    const pkgName = 'test';
    const dataTarball = '12345';

    const handler = localMemory.getPackageStorage(pkgName);
    if (handler) {
      const stream = handler.writeTarball(pkgName);
      stream.on('data', (data) => {
        expect(data.toString()).toBe(dataTarball);
      });
      stream.on('open', () => {
        stream.done();
        stream.end();
      });
      stream.on('success', () => {
        done();
      });

      stream.write(dataTarball);
    }
  });
  test('should abort while write a tarball', (done) => {
    const localMemory: IPluginStorage<ConfigMemory> = new LocalMemory(config, defaultConfig);
    const pkgName = 'test-abort.tar.gz';
    const handler = localMemory.getPackageStorage(pkgName);

    if (handler) {
      const stream = handler.writeTarball(pkgName);
      stream.on('error', (err) => {
        expect(err).not.toBeNull();
        expect(err.message).toMatch(/transmision aborted/);
        done();
      });
      stream.on('open', () => {
        stream.abort();
      });
    }
  });
});

describe('reading files', () => {
  test('should read a tarball', (done) => {
    const localMemory: IPluginStorage<ConfigMemory> = new LocalMemory(config, defaultConfig);
    const pkgName = 'test.tar.gz';
    const dataTarball = '12345';

    const handler = localMemory.getPackageStorage(pkgName);

    if (handler) {
      const stream = handler.writeTarball(pkgName);
      stream.on('open', () => {
        stream.done();
        stream.end();
      });
      stream.on('success', () => {
        const readStream = handler.readTarball(pkgName);
        readStream.on('data', (data) => {
          expect(data.toString()).toBe(dataTarball);
          done();
        });
      });
      stream.write(dataTarball);
    }
  });

  test('should abort read a tarball', (done) => {
    const localMemory: IPluginStorage<ConfigMemory> = new LocalMemory(config, defaultConfig);
    const pkgName = 'test2.tar.gz';
    const dataTarball = '12345';

    const handler = localMemory.getPackageStorage(pkgName);

    if (handler) {
      const stream = handler.writeTarball(pkgName);
      stream.on('open', () => {
        stream.done();
        stream.end();
      });
      stream.on('success', () => {
        const readStream = handler.readTarball(pkgName);
        readStream.on('data', () => {
          readStream.abort();
        });
        readStream.on('error', (err) => {
          expect(err).not.toBeNull();
          expect(err.message).toMatch(/read has been aborted/);
          done();
        });
      });
      stream.write(dataTarball);
    }
  });

  test('should fails read a tarball not found', (done) => {
    const localMemory: IPluginStorage<ConfigMemory> = new LocalMemory(config, defaultConfig);
    const pkgName = 'test2.tar.gz';
    const handler = localMemory.getPackageStorage(pkgName);

    if (handler) {
      const readStream = handler.readTarball('not-found');
      readStream.on('error', (err) => {
        expect(err).not.toBeNull();
        expect(err.message).toMatch(/no such package/);
        done();
      });
    }
  });

  test('should fails on save a package', (done) => {
    const spy = vi.spyOn(utils, 'stringifyPackage').mockImplementation(() => {
      throw new Error('error on parse');
    });

    const localMemory: IPluginStorage<ConfigMemory> = new LocalMemory(config, defaultConfig);
    const pkgName = 'test';

    const handler: IPackageStorage = localMemory.getPackageStorage(pkgName) as ILocalPackageManager;

    handler.savePackage(pkgName, pkgExample, (err) => {
      expect(err).toEqual(errorUtils.getInternalError('error on parse'));
      spy.mockReset();
      done();
    });
  });

  test('should parse fails on update a package', (done) => {
    const spy = vi.spyOn(utils, 'parsePackage').mockImplementation(() => {
      throw new Error('error on parse');
    });
    const localMemory: IPluginStorage<ConfigMemory> = new LocalMemory(config, defaultConfig);

    const pkgName = 'test';

    const handler = localMemory.getPackageStorage(pkgName);
    expect(handler).toBeDefined();
    const onEnd = vi.fn((err) => {
      expect(err).not.toBeNull();
      expect(err).toEqual(errorUtils.getInternalError('error on parse'));
      spy.mockReset();
      done();
    });

    if (handler) {
      handler.savePackage(pkgName, pkgExample, (err) => {
        expect(err).toBeNull();
        handler.updatePackage(
          pkgName,
          () => {},
          () => {},
          // @ts-ignore
          () => {},
          onEnd
        );
      });
    }
  });
});
