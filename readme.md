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
3. https://github.com/grpc/grpc-node/issues/2038
4. https://testcontainers.com/

## TODO

1. research into [vtproto generation](https://github.com/moby/buildkit/pull/5342#issuecomment-2362232396)?
2. write decorator to apply to all functions, that will save all its inputs and outputs into a global registry, for later inspection
3. attempt to generate a build from single inlined tree shaken script
4. maybe take some code to generate ts types from schema and back stored in [Effect-TS/language-service](https://github.com/Effect-TS/language-service)
5. Importer from Dockerfiles and to dockerfiles
6. Package with scraped info from Dockerhub such as container names

## Selling points

1. JS -- top used language, TS - 5th most popular
2. Effect.ts -- pure functions for reproducability
3. Support for dynamic code parametrization instead of templating yamls with unreliable, untraceable `${}`
4. Better observability and tracing globally what teams need help with docker more than other and how build times change over time.
5. Dockerfile components reuse and shared parametrized configs.
6. Modules, packages, and inheritance for LLBs
7. Much better UX with much better autocomplete (in-IDE autocomplete for secrets names, or build args, provided by the type-system)
8. Show the world of buildkit and Docker for frontenders
9. TypeScript has C-style syntax and can be more easily understood by Java devs, than something closest to buildkit -- Go. There's no Java buildkit frontends anyway.
10. R&D. Experience I get from writing this implementation can be applied to solve problems for a company. We need experiments before doing big stuff!
11. [Why TypeScript for Infrastructure?](https://mattrickard.com/why-typescript-for-infrastructure)
12. Cloud development kit is cool and gaining popularity.
13. targets, that can't be used from outside with the help of ESM
14. ability to import from other Dockerfiles

## Notes

1. gogo/proto deprecated: [moby/buildkit#3119](https://github.com/moby/buildkit/issues/3119)
2. there's nothing in Effect.ts codebase about protobuf or gRPC. Only MsgPack, which is irrelevant
3. important thing is to somehow be aware of every cacheable shit in existence, so that we can work with artifacts based on their cache. We need to store and calculate [hashes](https://mattrickard.com/vertical-workflow-engines).
4. Don't forget to disable telemetry if any would be present in projects.
5. Strictly follow rules of License of the project chosen as a basis.
6. Use @generated field from jsdoc
7. [fp-ts/optic](https://github.com/fp-ts/optic), [gcanti/monocle-ts](https://github.com/gcanti/monocle-ts)
8. [Discord: Inquiry About gRPC Protobuf Support in Effect Library](https://discord.com/channels/795981131316985866/1417143834227376190)
9. For insights at how to build my docker config thing look through
   [@fpk/k8s source](https://github.com/tim-smart/fpk/tree/master/packages/k8s/src)
   and [usage example](https://github.com/tim-smart/cluster-docker/blob/main/manifests/shooter/index.ts)
10. PR [moby/buildkit#6393](https://github.com/moby/buildkit/pull/6393) that might be helpful in creating NPM package exporter
11. potential adopter: [edgeandnode/amp-typescript](https://github.com/edgeandnode/amp-typescript)
12. [entropitor/terraform-providers](https://github.com/entropitor/terraform-providers/tree/main)
13. [Gemini Code wiki of BuildKit](https://codewiki.google/github.com/moby/buildkit)
14. [Devin DeepWiki of BuildKit](https://deepwiki.com/moby/buildkit)

## [Ecosystem of TS/JS generation from protobuf](./ecosystem.md)

## Plan

See [plan](./plan.md)

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
