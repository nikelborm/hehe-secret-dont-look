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

1. https://mattrickard.com/request-for-project-typescript-docker-construct
2. https://pkg.go.dev/github.com/moby/buildkit/client/llb
3. https://github.com/dagger/dagger

## TODO

1. benchmark which protobuf generate TS files are the smallest, or faster working
2. PR to ts-proto to enable tree-shaking?
3. analyze other existing libraries for generating typescript from .proto, to choose a better basis.
4. research into [vtproto generation](https://github.com/moby/buildkit/pull/5342#issuecomment-2362232396)?
5. write decorator to apply to all functions, that will save all its inputs and outputs into a global registry, for later inspection
6. attempt to generate a build from single inlined tree shaken script
7. GUI to inspect and create LLB of buildkit + registry for buildkit configurations
8. maybe take some code to generate ts types from schema and back stored in [Effect-TS/language-service](https://github.com/Effect-TS/language-service)
9.

## Notes

1. gogo/proto deprecated: [moby/buildkit#3119](https://github.com/moby/buildkit/issues/3119)
2. protobuf.js is dead
3. there's nothing in Effect.ts codebase about protobuf or gRPC. Only MsgPack, which is irrelevant

Available solutions for generating JS/TS (at 21 may 2025). Testing result provided by [bufbuild/protobuf-conformance](https://github.com/bufbuild/protobuf-conformance)

| GitHub                                                                                        | Stars  | Repo age     | Tests required | Tests optional | PM                                                                                           | Last published | Comment                                                                                                                     |
| --------------------------------------------------------------------------------------------- | ------ | ------------ | -------------- | -------------- | -------------------------------------------------------------------------------------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------- |
| [bufbuild/protobuf-es](https://github.com/bufbuild/protobuf-es)                               | 1.3k   | 3 years old  | 100%           | 100%           | [@bufbuild/protobuf](https://www.npmjs.com/package/@bufbuild/protobuf)                       | 8 days ago     |                                                                                                                             |
| [bufbuild/protobuf-es](https://github.com/bufbuild/protobuf-es)                               | 1.3k   | 3 years old  | 100%           | 100%           | [@bufbuild/protoc-gen-es](https://www.npmjs.com/package/@bufbuild/protoc-gen-es)             | 8 days ago     |                                                                                                                             |
| [bufbuild/buf](https://github.com/bufbuild/buf)                                               | 9.9k   | 6 years old  |                |                | [@bufbuild/buf](https://www.npmjs.com/package/@bufbuild/buf)                                 | 8 days ago     |                                                                                                                             |
| [bufbuild/protobuf-es](https://github.com/bufbuild/protobuf-es)                               | 1.3k   | 3 years old  | 100%           | 100%           | [@bufbuild/protoplugin](https://www.npmjs.com/package/@bufbuild/protoplugin)                 | 8 days ago     |                                                                                                                             |
| [connectrpc/connect-es](https://github.com/connectrpc/connect-es)                             | 1.5k   | 3 years old  |                |                | [@connectrpc/connect-node](https://www.npmjs.com/package/@connectrpc/connect-node)           | 3 months ago   |                                                                                                                             |
| [connectrpc/connect-es](https://github.com/connectrpc/connect-es)                             | 1.5k   | 3 years old  |                |                | [@connectrpc/connect](https://www.npmjs.com/package/@connectrpc/connect)                     | 3 months ago   |                                                                                                                             |
| [stephenh/ts-proto](https://github.com/stephenh/ts-proto)                                     | 2.4k   | 6 years old  | 65.1%          | 5.86%          | [ts-proto](https://www.npmjs.com/package/ts-proto)                                           | 2 months ago   |                                                                                                                             |
| [timostamm/protobuf-ts](https://github.com/timostamm/protobuf-ts)                             | 1.2k   | 5 years old  | 99.9%          | 99.9%          | [@protobuf-ts/plugin](https://www.npmjs.com/package/@protobuf-ts/plugin)                     | 19 days ago    |                                                                                                                             |
| [timostamm/protobuf-ts](https://github.com/timostamm/protobuf-ts)                             | 1.2k   | 5 years old  | 99.9%          | 99.9%          | [@protobuf-ts/plugin-framework](https://www.npmjs.com/package/@protobuf-ts/plugin-framework) | 19 days ago    | [deprecated](https://github.com/timostamm/protobuf-ts/pull/717)                                                             |
| [protocolbuffers/protobuf-javascript](https://github.com/protocolbuffers/protobuf-javascript) | 419 😹 | 10 years old | 69.4%          | 53.2%          | [google-protobuf](https://www.npmjs.com/package/google-protobuf)                             | 10 months ago  |                                                                                                                             |
| [yinzara/protoc-gen-js](https://github.com/yinzara/protoc-gen-js)                             | 6      | 6 years old  |                |                | [protoc-gen-js](https://www.npmjs.com/package/protoc-gen-js)                                 | 4 months ago   | packaged [protocolbuffers/protobuf-javascript](https://github.com/protocolbuffers/protobuf-javascript) protoc plugin binary |
| [protobufjs/protobuf.js](https://github.com/protobufjs/protobuf.js)                           | 10.2k  | 9 years old  | 13.6%          | 12.5%          | [protobufjs](https://www.npmjs.com/package/protobufjs)                                       | 9 months ago   |                                                                                                                             |
| [thesayyn/protoc-gen-ts](https://github.com/thesayyn/protoc-gen-ts)                           | 379    | 6 years old  | 20.8%          | 27.6%          | [protoc-gen-ts](https://www.npmjs.com/package/protoc-gen-ts)                                 | 2 years ago    |                                                                                                                             |
| [TateThurston/protoscript](https://github.com/TateThurston/protoscript)                       | 71     | 3 years old  | 46.2%          | 17.9%          | [protoscript](https://www.npmjs.com/package/protoscript)                                     | 3 months ago   |                                                                                                                             |

## Plan
