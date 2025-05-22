# Rules of this repo (until 1.0.0)

- no tests
- no documentation
- no distractions
- no automation
- no sidetracking
- no quality control
- no publishing
- no maintenance
- no order
- no system
- no organization
- no releases
- no discussions
- no linting
- no thinking
- NO PERFECTIONISM!!!!
- no restrictions
- no looking at the source code
- ~~no~~ ⭐️ing
- no rules
- and nothing else except this repo

## Goodies, saves, inspiration and other random links

1. https://pkg.go.dev/github.com/moby/buildkit/client/llb
2. https://github.com/dagger/dagger

## TODO

1. research into [vtproto generation](https://github.com/moby/buildkit/pull/5342#issuecomment-2362232396)?
2. write decorator to apply to all functions, that will save all its inputs and outputs into a global registry, for later inspection
3. attempt to generate a build from single inlined tree shaken script
4. maybe take some code to generate ts types from schema and back stored in [Effect-TS/language-service](https://github.com/Effect-TS/language-service)

## Selling points

1. JS -- top used language, TS - 5th most popular
2. Effect.ts -- pure functions for reproducability
3. Support for dynamic code parametrization instead of templating yamls with unreliable, untraceable `${}`
4. Better observability and tracing globally what teams need help with docker more than other and how build times change over time.
5. Dockerfile components reuse and shared parametrized configs.
6. Modules, packages, and inheritance for LLBs
7. Much better UX with much better autocomplete (in-IDE autocomplete for secrets names, or build args, provided by the type-system)
8. Show the world of buildkit for frontenders
9. TypeScript has C-style syntax and can be more easily understood by Java devs, than something closest to buildkit -- Go. There's no Java buildkit frontends anyway.
10. R&D. Experience I get from writing this implementation can be applied to solve problems for a company. We need experiments before doing big stuff!
11. [Why TypeScript for Infrastructure?](https://mattrickard.com/why-typescript-for-infrastructure)
12. Cloud development kit is cool and gaining popularity.

## Notes

1. gogo/proto deprecated: [moby/buildkit#3119](https://github.com/moby/buildkit/issues/3119)
2. there's nothing in Effect.ts codebase about protobuf or gRPC. Only MsgPack, which is irrelevant
3. important thing is to somehow be aware of every cacheable shit in existence, so that we can work with artifacts based on their cache. We need to store and calculate [hashes](https://mattrickard.com/vertical-workflow-engines).
4. Don't forget to disable telemetry if any would be present in projects.
5. Strictly follow rules of License of the project chosen as a basis.
6. Use @generated field from jsdoc

## Ecosystem od TS/JS generation from protobuf

Available solutions related to generation of JS/TS (at 21 may 2025). Testing results provided by [bufbuild/protobuf-conformance](https://github.com/bufbuild/protobuf-conformance)

| NPM                                                                              | Last published some time ago | Tests required | Tests optional | TS  | GitHub                                                            | Stars | Repo N years old | Comment                                                                                                                                                   |
| -------------------------------------------------------------------------------- | ---------------------------- | -------------- | -------------- | --- | ----------------------------------------------------------------- | ----- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@bufbuild/protobuf](https://www.npmjs.com/package/@bufbuild/protobuf)           | 8 days                       | 100%           | 100%           | +   | [bufbuild/protobuf-es](https://github.com/bufbuild/protobuf-es)   | 1.3k  | 3                | This package provides the runtime library for the [@bufbuild/protoc-gen-es](https://www.npmjs.com/package/@bufbuild/protoc-gen-es) code generator plugin. |
| [@bufbuild/protoc-gen-es](https://www.npmjs.com/package/@bufbuild/protoc-gen-es) | 8 days                       | 100%           | 100%           | +   | [bufbuild/protobuf-es](https://github.com/bufbuild/protobuf-es)   | 1.3k  | 3                | Standard protoc plugin.                                                                                                                                   |
| [@bufbuild/protoplugin](https://www.npmjs.com/package/@bufbuild/protoplugin)     | 8 days                       | 100%           | 100%           | +   | [bufbuild/protobuf-es](https://github.com/bufbuild/protobuf-es)   | 1.3k  | 3                | Framework to create TS generation plugins. Recommended even by creator of [@protobuf-ts/plugin](https://www.npmjs.com/package/@protobuf-ts/plugin).       |
| [@protobuf-ts/plugin](https://www.npmjs.com/package/@protobuf-ts/plugin)         | 19 days                      | 99.9%          | 99.9%          | +   | [timostamm/protobuf-ts](https://github.com/timostamm/protobuf-ts) | 1.2k  | 5                | Standard protoc plugin.                                                                                                                                   |
| [@protobuf-ts/runtime](https://www.npmjs.com/package/@protobuf-ts/runtime)       | 19 days                      | 99.9%          | 99.9%          | +   | [timostamm/protobuf-ts](https://github.com/timostamm/protobuf-ts) | 1.2k  | 5                | This package provides the runtime library for the [@protobuf-ts/plugin](https://www.npmjs.com/package/@protobuf-ts/plugin) code generator plugin.         |

### Bad decision to use

| NPM                                                                                          | Last published some time ago | Tests required | Tests optional | TS  | GitHub                                                                                        | Stars | Repo N years old | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| -------------------------------------------------------------------------------------------- | ---------------------------- | -------------- | -------------- | --- | --------------------------------------------------------------------------------------------- | ----- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@protobuf-ts/plugin-framework](https://www.npmjs.com/package/@protobuf-ts/plugin-framework) | 19 days                      | 99.9%          | 99.9%          | +   | [timostamm/protobuf-ts](https://github.com/timostamm/protobuf-ts)                             | 1.2k  | 5                | It's [deprecated](https://github.com/timostamm/protobuf-ts/pull/717), the author recommends [@bufbuild/protoplugin](https://www.npmjs.com/package/@bufbuild/protoplugin). Also author explained that it relies on an old version of Typescript, which is the reason to not use it as a base for my project.                                                                                                                                                                                                                     |
| [ts-proto](https://www.npmjs.com/package/ts-proto)                                           | 2 months                     | 65.1%          | 5.86%          | +   | [stephenh/ts-proto](https://github.com/stephenh/ts-proto)                                     | 2.4k  | 6                | Cannot generate code for Protobuf Editions. Also has mediocre conformance and maintainer didn't care enough to setup a test suite for that conformance. Not very actively developed. Has unfixed reported bugs.                                                                                                                                                                                                                                                                                                                 |
| [protoscript](https://www.npmjs.com/package/protoscript)                                     | 3 months                     | 46.2%          | 17.9%          | +   | [TateThurston/protoscript](https://github.com/TateThurston/protoscript)                       | 71    | 3                | Very young library (`v0.0.23`). Fails a significant amount of tests. Not very much activity present from the author lately. Cannot generate code for Protobuf Editions.                                                                                                                                                                                                                                                                                                                                                         |
| [protobufjs](https://www.npmjs.com/package/protobufjs)                                       | 9 months                     | 13.6%          | 12.5%          | +   | [protobufjs/protobuf.js](https://github.com/protobufjs/protobuf.js)                           | 10.2k | 9                | Has poor tests results. Didn't have releases for a long time also. Author of [ts-proto](https://www.npmjs.com/package/ts-proto) believes it's aging & stagnant, and migrated from it to [@bufbuild/protobuf](https://www.npmjs.com/package/@bufbuild/protobuf). Even though it can generate typescript, the whole repo is written in pure javascript and for that reason cannot be used as a base for my project.                                                                                                               |
| [protoc-gen-ts](https://www.npmjs.com/package/protoc-gen-ts)                                 | 2 years                      | 20.8%          | 27.6%          | +   | [thesayyn/protoc-gen-ts](https://github.com/thesayyn/protoc-gen-ts)                           | 379   | 6                | Haven't been publishing for a long time, doesn't pass conformance tests according to [this](https://github.com/bufbuild/protobuf-conformance/tree/main/impl/protoc-gen-ts). Also [maintainer's quite busy](https://github.com/thesayyn/protoc-gen-ts/issues/255#issuecomment-2733953351) and this project is not a priority for them right now. The version inside NPM is written in TS, however the maintainer was going to rewrite it to rust. This rust version is not finished. Won't be helpful because I don't know Rust. |
| [google-protobuf](https://www.npmjs.com/package/google-protobuf)                             | 10 months                    | 69.4%          | 53.2%          | -   | [protocolbuffers/protobuf-javascript](https://github.com/protocolbuffers/protobuf-javascript) | 419   | 10               | Does not support ESM. Doesn't support Typescript generation. Written purely in javascript and for that reason cannot be used as a base for my project                                                                                                                                                                                                                                                                                                                                                                           |
| [protons](https://www.npmjs.com/package/protons)                                             | 1 day                        |                |                | +   | [ipfs/protons](https://github.com/ipfs/protons/tree/main/packages/protons)                    | 35    | 11               | Too limited in functionality, for example doesn't support oneOf. proto3 semantics only                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [@sisyphus.js/compiler](https://www.npmjs.com/package/@sisyphus.js/compiler)                 | 2 years                      |                |                | +   | [ButterCam/sisyphus.js](https://github.com/ButterCam/sisyphus.js)                             | 22    | 3                | Haven't been released for a long time. Not maintained. Written in non-English, which makes it difficult to understand.                                                                                                                                                                                                                                                                                                                                                                                                          |
| [pbjs](https://www.npmjs.com/package/pbjs)                                                   | 5 years                      |                |                | +   | [evanw/pbjs](https://github.com/evanw/pbjs/)                                                  | 95    | 9                | Not maintained and not production ready (at `v0.0.14`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [pbf](https://www.npmjs.com/package/pbf)                                                     | 10 months                    |                |                | -   | [pbf](https://github.com/mapbox/pbf)                                                          | 826   | 12               | Very low level library. Written in pure JS. Generates only JS.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [ts-protoc-gen](https://www.npmjs.com/package/ts-protoc-gen)                                 | 4 years                      |                |                | -   | [improbable-eng/ts-protoc-gen](https://github.com/improbable-eng/ts-protoc-gen)               | 1.4k  | 8                | Basically unmaintained and didn't have releases for a very long time. Plus it generates only `.d.ts` declarations instead of usual typescript, which makes it a bad candidate for a base of my project. Bad ES6 support.                                                                                                                                                                                                                                                                                                        |

### Irrelevant to the problem or wont be helpful

| NPM                                                                                | Last published some time ago | Tests required | Tests optional | TS  | GitHub                                                                                            | Stars | Repo N years old | Comment                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------- | ---------------------------- | -------------- | -------------- | --- | ------------------------------------------------------------------------------------------------- | ----- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@connectrpc/connect](https://www.npmjs.com/package/@connectrpc/connect)           | 3 months                     |                |                | +   | [connectrpc/connect-es](https://github.com/connectrpc/connect-es)                                 | 1.5k  | 3                | This is not a thing to generate typescript based on .proto schema, which makes it irrelevant to my project. It generates RPC clients and uses [@bufbuild/protoc-gen-es](https://www.npmjs.com/package/@bufbuild/protoc-gen-es) for that. |
| [@connectrpc/connect-node](https://www.npmjs.com/package/@connectrpc/connect-node) | 3 months                     |                |                | +   | [connectrpc/connect-es](https://github.com/connectrpc/connect-es)                                 | 1.5k  | 3                | This is not a thing to generate typescript based on .proto schema, which makes it irrelevant to my project. It generates RPC clients and uses [@bufbuild/protoc-gen-es](https://www.npmjs.com/package/@bufbuild/protoc-gen-es) for that. |
| [protoc-gen-js](https://www.npmjs.com/package/protoc-gen-js)                       | 4 months                     |                |                | -   | [yinzara/protoc-gen-js](https://github.com/yinzara/protoc-gen-js)                                 | 6     | 6                | It's packaged [protocolbuffers/protobuf-javascript](https://github.com/protocolbuffers/protobuf-javascript) protoc plugin binary. It's purely a wrapper. There's nothing to base my project on.                                          |
| [@bufbuild/buf](https://www.npmjs.com/package/@bufbuild/buf)                       | 8 days                       |                |                | -   | [bufbuild/buf](https://github.com/bufbuild/buf)                                                   | 9.9k  | 6                | It's only a CLI, that's also written in go. It can call other TS generation plugins, but not a plugin itself, which makes it irrelevant to my problem.                                                                                   |
|                                                                                    |                              |                |                | -   | [tmc/grpcutil/protoc-gen-tstypes](https://github.com/tmc/grpcutil/tree/master/protoc-gen-tstypes) | 50    | 9                | Generates only .d.ts declarations, written in Go, wasn't updated for a long time.                                                                                                                                                        |
| [protobuf.js](https://www.npmjs.com/package/protobuf.js)                           | 11 years                     |                |                | -   | [nlf/protobuf.js](https://github.com/nlf/protobuf.js)                                             | 24    | 13               | Very old and very dead.                                                                                                                                                                                                                  |
| [protobuf](https://www.npmjs.com/package/protobuf)                                 | 8 years                      |                |                | -   | [chrisdew/protobuf](https://github.com/chrisdew/protobuf)                                         | 231   | 14               | Very old and very dead.                                                                                                                                                                                                                  |
| [protocol-buffers](https://www.npmjs.com/package/protocol-buffers)                 | 3 years                      |                |                | -   | [mafintosh/protocol-buffers](https://github.com/mafintosh/protocol-buffers)                       | 762   | 11               | Very old and very dead.                                                                                                                                                                                                                  |

## Plan

### Done

1. analyze other existing libraries for generating typescript from .proto, to choose a better basis.

### Potential tasks, not required to an immediate success of th project

1. PR to ts-proto to enable tree-shaking?
2. maybe implement something like [this](https://typia.io/docs/protobuf/encode/) to generate protobuf schema from Effect RPC declarations?
3. make UI visualizations like I wanted for my smarthouse, but for entities representing dockerfiles, so that nodes have parametrized inputs representing build args, one of which is FROM field
4. GUI to inspect and create LLB of buildkit
5. registry for LLBs
6. Research selling points of infrastructure as code
7. Write a letter to [this dude](https://mattrickard.com/request-for-project-typescript-docker-construct)?
8. maybe add my implementation later to [grpc-ecosystem/awesome-grpc](https://github.com/grpc-ecosystem/awesome-grpc)
9. vscode plugin to highlight pieces of Bash code inside those container definition classes
