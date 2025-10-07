import { Data, Stream } from 'effect';
// prettier-ignore
import {
  BuildInput, FileOp, OpMetadata, FileActionMkDir,Definition, Meta,
  Source_LocationsEntry, UserOpt, BuildOp_AttrsEntry, HostIP, Platform,
  FileActionMkFile, DiffOp, Mount, Source, WorkerConstraints,
  BuildOp_InputsEntry, Input, Position, FileActionRm,ExecOp, NamedUserOpt,
  SourceInfo, BuildOp, Location, ProgressGroup, FileActionSymlink, CacheOpt,
  Locations, ProxyEnv, SSHOpt, CDIDevice, LowerDiffInput, Range, TmpfsOpt,
  ChownOpt, MergeInput, SecretEnv, Ulimit, Definition_MetadataEntry, MergeOp,
  SecretOpt, UpperDiffInput, ExportCache, Op, SourceOp_AttrsEntry, FileAction,
  OpMetadata_CapsEntry, SourceOp, FileActionCopy, OpMetadata_DescriptionEntry,
} from './generated/ops.ts';

console.log('asd');

type RemoteData = Data.TaggedEnum<{
  Loading: {};
  Success: { readonly data: string };
  Failure: { readonly reason: string };
}>;

const { $is, $match, Loading, Success } = Data.taggedEnum<RemoteData>();

// Use `$is` to create a type guard for "Loading"
const isLoading = $is('Loading');

console.log(isLoading(Loading()));
// Output: true
console.log(isLoading(Success({ data: 'test' })));
// Output: false

// Use `$match` for pattern matching
const matcher = $match({
  Loading: () => 'this is a Loading',
  Success: ({ data }) => `this is a Success: ${data}`,
  Failure: ({ reason }) => `this is a Failure: ${reason}`,
});

console.log(matcher(Success({ data: 'test' })));
// Output: "this is a Success: test"
