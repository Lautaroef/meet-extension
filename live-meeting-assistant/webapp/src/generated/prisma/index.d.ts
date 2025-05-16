
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model DataSource
 * 
 */
export type DataSource = $Result.DefaultSelection<Prisma.$DataSourcePayload>
/**
 * Model SyncedContent
 * 
 */
export type SyncedContent = $Result.DefaultSelection<Prisma.$SyncedContentPayload>
/**
 * Model Meeting
 * 
 */
export type Meeting = $Result.DefaultSelection<Prisma.$MeetingPayload>
/**
 * Model MeetingParticipant
 * 
 */
export type MeetingParticipant = $Result.DefaultSelection<Prisma.$MeetingParticipantPayload>
/**
 * Model PreMeetingBrief
 * 
 */
export type PreMeetingBrief = $Result.DefaultSelection<Prisma.$PreMeetingBriefPayload>
/**
 * Model GemAlert
 * 
 */
export type GemAlert = $Result.DefaultSelection<Prisma.$GemAlertPayload>
/**
 * Model UserFeedback
 * 
 */
export type UserFeedback = $Result.DefaultSelection<Prisma.$UserFeedbackPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DataSourceType: {
  NOTION: 'NOTION',
  GOOGLE_CALENDAR: 'GOOGLE_CALENDAR',
  EVERNOTE: 'EVERNOTE',
  SALESFORCE: 'SALESFORCE',
  HUBSPOT: 'HUBSPOT',
  MANUAL_TEXT: 'MANUAL_TEXT',
  FILE_UPLOAD: 'FILE_UPLOAD'
};

export type DataSourceType = (typeof DataSourceType)[keyof typeof DataSourceType]


export const FeedbackRating: {
  HELPFUL: 'HELPFUL',
  NOT_HELPFUL: 'NOT_HELPFUL',
  NEUTRAL: 'NEUTRAL'
};

export type FeedbackRating = (typeof FeedbackRating)[keyof typeof FeedbackRating]

}

export type DataSourceType = $Enums.DataSourceType

export const DataSourceType: typeof $Enums.DataSourceType

export type FeedbackRating = $Enums.FeedbackRating

export const FeedbackRating: typeof $Enums.FeedbackRating

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dataSource`: Exposes CRUD operations for the **DataSource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DataSources
    * const dataSources = await prisma.dataSource.findMany()
    * ```
    */
  get dataSource(): Prisma.DataSourceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.syncedContent`: Exposes CRUD operations for the **SyncedContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SyncedContents
    * const syncedContents = await prisma.syncedContent.findMany()
    * ```
    */
  get syncedContent(): Prisma.SyncedContentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meeting`: Exposes CRUD operations for the **Meeting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meetings
    * const meetings = await prisma.meeting.findMany()
    * ```
    */
  get meeting(): Prisma.MeetingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meetingParticipant`: Exposes CRUD operations for the **MeetingParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MeetingParticipants
    * const meetingParticipants = await prisma.meetingParticipant.findMany()
    * ```
    */
  get meetingParticipant(): Prisma.MeetingParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.preMeetingBrief`: Exposes CRUD operations for the **PreMeetingBrief** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PreMeetingBriefs
    * const preMeetingBriefs = await prisma.preMeetingBrief.findMany()
    * ```
    */
  get preMeetingBrief(): Prisma.PreMeetingBriefDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gemAlert`: Exposes CRUD operations for the **GemAlert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GemAlerts
    * const gemAlerts = await prisma.gemAlert.findMany()
    * ```
    */
  get gemAlert(): Prisma.GemAlertDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userFeedback`: Exposes CRUD operations for the **UserFeedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserFeedbacks
    * const userFeedbacks = await prisma.userFeedback.findMany()
    * ```
    */
  get userFeedback(): Prisma.UserFeedbackDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    DataSource: 'DataSource',
    SyncedContent: 'SyncedContent',
    Meeting: 'Meeting',
    MeetingParticipant: 'MeetingParticipant',
    PreMeetingBrief: 'PreMeetingBrief',
    GemAlert: 'GemAlert',
    UserFeedback: 'UserFeedback'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "dataSource" | "syncedContent" | "meeting" | "meetingParticipant" | "preMeetingBrief" | "gemAlert" | "userFeedback"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      DataSource: {
        payload: Prisma.$DataSourcePayload<ExtArgs>
        fields: Prisma.DataSourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DataSourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DataSourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSourcePayload>
          }
          findFirst: {
            args: Prisma.DataSourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DataSourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSourcePayload>
          }
          findMany: {
            args: Prisma.DataSourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSourcePayload>[]
          }
          create: {
            args: Prisma.DataSourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSourcePayload>
          }
          createMany: {
            args: Prisma.DataSourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DataSourceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSourcePayload>[]
          }
          delete: {
            args: Prisma.DataSourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSourcePayload>
          }
          update: {
            args: Prisma.DataSourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSourcePayload>
          }
          deleteMany: {
            args: Prisma.DataSourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DataSourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DataSourceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSourcePayload>[]
          }
          upsert: {
            args: Prisma.DataSourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataSourcePayload>
          }
          aggregate: {
            args: Prisma.DataSourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDataSource>
          }
          groupBy: {
            args: Prisma.DataSourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DataSourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DataSourceCountArgs<ExtArgs>
            result: $Utils.Optional<DataSourceCountAggregateOutputType> | number
          }
        }
      }
      SyncedContent: {
        payload: Prisma.$SyncedContentPayload<ExtArgs>
        fields: Prisma.SyncedContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SyncedContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncedContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SyncedContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncedContentPayload>
          }
          findFirst: {
            args: Prisma.SyncedContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncedContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SyncedContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncedContentPayload>
          }
          findMany: {
            args: Prisma.SyncedContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncedContentPayload>[]
          }
          create: {
            args: Prisma.SyncedContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncedContentPayload>
          }
          createMany: {
            args: Prisma.SyncedContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SyncedContentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncedContentPayload>[]
          }
          delete: {
            args: Prisma.SyncedContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncedContentPayload>
          }
          update: {
            args: Prisma.SyncedContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncedContentPayload>
          }
          deleteMany: {
            args: Prisma.SyncedContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SyncedContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SyncedContentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncedContentPayload>[]
          }
          upsert: {
            args: Prisma.SyncedContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncedContentPayload>
          }
          aggregate: {
            args: Prisma.SyncedContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSyncedContent>
          }
          groupBy: {
            args: Prisma.SyncedContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<SyncedContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.SyncedContentCountArgs<ExtArgs>
            result: $Utils.Optional<SyncedContentCountAggregateOutputType> | number
          }
        }
      }
      Meeting: {
        payload: Prisma.$MeetingPayload<ExtArgs>
        fields: Prisma.MeetingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeetingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeetingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          findFirst: {
            args: Prisma.MeetingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeetingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          findMany: {
            args: Prisma.MeetingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>[]
          }
          create: {
            args: Prisma.MeetingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          createMany: {
            args: Prisma.MeetingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MeetingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>[]
          }
          delete: {
            args: Prisma.MeetingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          update: {
            args: Prisma.MeetingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          deleteMany: {
            args: Prisma.MeetingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MeetingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MeetingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>[]
          }
          upsert: {
            args: Prisma.MeetingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          aggregate: {
            args: Prisma.MeetingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeeting>
          }
          groupBy: {
            args: Prisma.MeetingGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeetingGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeetingCountArgs<ExtArgs>
            result: $Utils.Optional<MeetingCountAggregateOutputType> | number
          }
        }
      }
      MeetingParticipant: {
        payload: Prisma.$MeetingParticipantPayload<ExtArgs>
        fields: Prisma.MeetingParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeetingParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeetingParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingParticipantPayload>
          }
          findFirst: {
            args: Prisma.MeetingParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeetingParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingParticipantPayload>
          }
          findMany: {
            args: Prisma.MeetingParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingParticipantPayload>[]
          }
          create: {
            args: Prisma.MeetingParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingParticipantPayload>
          }
          createMany: {
            args: Prisma.MeetingParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MeetingParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingParticipantPayload>[]
          }
          delete: {
            args: Prisma.MeetingParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingParticipantPayload>
          }
          update: {
            args: Prisma.MeetingParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingParticipantPayload>
          }
          deleteMany: {
            args: Prisma.MeetingParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MeetingParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MeetingParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingParticipantPayload>[]
          }
          upsert: {
            args: Prisma.MeetingParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingParticipantPayload>
          }
          aggregate: {
            args: Prisma.MeetingParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeetingParticipant>
          }
          groupBy: {
            args: Prisma.MeetingParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeetingParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeetingParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<MeetingParticipantCountAggregateOutputType> | number
          }
        }
      }
      PreMeetingBrief: {
        payload: Prisma.$PreMeetingBriefPayload<ExtArgs>
        fields: Prisma.PreMeetingBriefFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PreMeetingBriefFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreMeetingBriefPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PreMeetingBriefFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreMeetingBriefPayload>
          }
          findFirst: {
            args: Prisma.PreMeetingBriefFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreMeetingBriefPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PreMeetingBriefFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreMeetingBriefPayload>
          }
          findMany: {
            args: Prisma.PreMeetingBriefFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreMeetingBriefPayload>[]
          }
          create: {
            args: Prisma.PreMeetingBriefCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreMeetingBriefPayload>
          }
          createMany: {
            args: Prisma.PreMeetingBriefCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PreMeetingBriefCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreMeetingBriefPayload>[]
          }
          delete: {
            args: Prisma.PreMeetingBriefDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreMeetingBriefPayload>
          }
          update: {
            args: Prisma.PreMeetingBriefUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreMeetingBriefPayload>
          }
          deleteMany: {
            args: Prisma.PreMeetingBriefDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PreMeetingBriefUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PreMeetingBriefUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreMeetingBriefPayload>[]
          }
          upsert: {
            args: Prisma.PreMeetingBriefUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreMeetingBriefPayload>
          }
          aggregate: {
            args: Prisma.PreMeetingBriefAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePreMeetingBrief>
          }
          groupBy: {
            args: Prisma.PreMeetingBriefGroupByArgs<ExtArgs>
            result: $Utils.Optional<PreMeetingBriefGroupByOutputType>[]
          }
          count: {
            args: Prisma.PreMeetingBriefCountArgs<ExtArgs>
            result: $Utils.Optional<PreMeetingBriefCountAggregateOutputType> | number
          }
        }
      }
      GemAlert: {
        payload: Prisma.$GemAlertPayload<ExtArgs>
        fields: Prisma.GemAlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GemAlertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GemAlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GemAlertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GemAlertPayload>
          }
          findFirst: {
            args: Prisma.GemAlertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GemAlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GemAlertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GemAlertPayload>
          }
          findMany: {
            args: Prisma.GemAlertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GemAlertPayload>[]
          }
          create: {
            args: Prisma.GemAlertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GemAlertPayload>
          }
          createMany: {
            args: Prisma.GemAlertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GemAlertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GemAlertPayload>[]
          }
          delete: {
            args: Prisma.GemAlertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GemAlertPayload>
          }
          update: {
            args: Prisma.GemAlertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GemAlertPayload>
          }
          deleteMany: {
            args: Prisma.GemAlertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GemAlertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GemAlertUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GemAlertPayload>[]
          }
          upsert: {
            args: Prisma.GemAlertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GemAlertPayload>
          }
          aggregate: {
            args: Prisma.GemAlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGemAlert>
          }
          groupBy: {
            args: Prisma.GemAlertGroupByArgs<ExtArgs>
            result: $Utils.Optional<GemAlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.GemAlertCountArgs<ExtArgs>
            result: $Utils.Optional<GemAlertCountAggregateOutputType> | number
          }
        }
      }
      UserFeedback: {
        payload: Prisma.$UserFeedbackPayload<ExtArgs>
        fields: Prisma.UserFeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFeedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFeedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFeedbackPayload>
          }
          findFirst: {
            args: Prisma.UserFeedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFeedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFeedbackPayload>
          }
          findMany: {
            args: Prisma.UserFeedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFeedbackPayload>[]
          }
          create: {
            args: Prisma.UserFeedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFeedbackPayload>
          }
          createMany: {
            args: Prisma.UserFeedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserFeedbackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFeedbackPayload>[]
          }
          delete: {
            args: Prisma.UserFeedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFeedbackPayload>
          }
          update: {
            args: Prisma.UserFeedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFeedbackPayload>
          }
          deleteMany: {
            args: Prisma.UserFeedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserFeedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserFeedbackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFeedbackPayload>[]
          }
          upsert: {
            args: Prisma.UserFeedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFeedbackPayload>
          }
          aggregate: {
            args: Prisma.UserFeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserFeedback>
          }
          groupBy: {
            args: Prisma.UserFeedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserFeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserFeedbackCountArgs<ExtArgs>
            result: $Utils.Optional<UserFeedbackCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    dataSource?: DataSourceOmit
    syncedContent?: SyncedContentOmit
    meeting?: MeetingOmit
    meetingParticipant?: MeetingParticipantOmit
    preMeetingBrief?: PreMeetingBriefOmit
    gemAlert?: GemAlertOmit
    userFeedback?: UserFeedbackOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    dataSources: number
    meetingsAsOwner: number
    meetingAttendees: number
    preMeetingBriefs: number
    gemAlerts: number
    userFeedbacks: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataSources?: boolean | UserCountOutputTypeCountDataSourcesArgs
    meetingsAsOwner?: boolean | UserCountOutputTypeCountMeetingsAsOwnerArgs
    meetingAttendees?: boolean | UserCountOutputTypeCountMeetingAttendeesArgs
    preMeetingBriefs?: boolean | UserCountOutputTypeCountPreMeetingBriefsArgs
    gemAlerts?: boolean | UserCountOutputTypeCountGemAlertsArgs
    userFeedbacks?: boolean | UserCountOutputTypeCountUserFeedbacksArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDataSourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataSourceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMeetingsAsOwnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMeetingAttendeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingParticipantWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPreMeetingBriefsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PreMeetingBriefWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGemAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GemAlertWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserFeedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFeedbackWhereInput
  }


  /**
   * Count Type DataSourceCountOutputType
   */

  export type DataSourceCountOutputType = {
    syncedContents: number
  }

  export type DataSourceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    syncedContents?: boolean | DataSourceCountOutputTypeCountSyncedContentsArgs
  }

  // Custom InputTypes
  /**
   * DataSourceCountOutputType without action
   */
  export type DataSourceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSourceCountOutputType
     */
    select?: DataSourceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DataSourceCountOutputType without action
   */
  export type DataSourceCountOutputTypeCountSyncedContentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SyncedContentWhereInput
  }


  /**
   * Count Type MeetingCountOutputType
   */

  export type MeetingCountOutputType = {
    participants: number
    gemAlerts: number
  }

  export type MeetingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | MeetingCountOutputTypeCountParticipantsArgs
    gemAlerts?: boolean | MeetingCountOutputTypeCountGemAlertsArgs
  }

  // Custom InputTypes
  /**
   * MeetingCountOutputType without action
   */
  export type MeetingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingCountOutputType
     */
    select?: MeetingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MeetingCountOutputType without action
   */
  export type MeetingCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingParticipantWhereInput
  }

  /**
   * MeetingCountOutputType without action
   */
  export type MeetingCountOutputTypeCountGemAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GemAlertWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dataSources?: boolean | User$dataSourcesArgs<ExtArgs>
    meetingsAsOwner?: boolean | User$meetingsAsOwnerArgs<ExtArgs>
    meetingAttendees?: boolean | User$meetingAttendeesArgs<ExtArgs>
    preMeetingBriefs?: boolean | User$preMeetingBriefsArgs<ExtArgs>
    gemAlerts?: boolean | User$gemAlertsArgs<ExtArgs>
    userFeedbacks?: boolean | User$userFeedbacksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataSources?: boolean | User$dataSourcesArgs<ExtArgs>
    meetingsAsOwner?: boolean | User$meetingsAsOwnerArgs<ExtArgs>
    meetingAttendees?: boolean | User$meetingAttendeesArgs<ExtArgs>
    preMeetingBriefs?: boolean | User$preMeetingBriefsArgs<ExtArgs>
    gemAlerts?: boolean | User$gemAlertsArgs<ExtArgs>
    userFeedbacks?: boolean | User$userFeedbacksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      dataSources: Prisma.$DataSourcePayload<ExtArgs>[]
      meetingsAsOwner: Prisma.$MeetingPayload<ExtArgs>[]
      meetingAttendees: Prisma.$MeetingParticipantPayload<ExtArgs>[]
      preMeetingBriefs: Prisma.$PreMeetingBriefPayload<ExtArgs>[]
      gemAlerts: Prisma.$GemAlertPayload<ExtArgs>[]
      userFeedbacks: Prisma.$UserFeedbackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dataSources<T extends User$dataSourcesArgs<ExtArgs> = {}>(args?: Subset<T, User$dataSourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataSourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    meetingsAsOwner<T extends User$meetingsAsOwnerArgs<ExtArgs> = {}>(args?: Subset<T, User$meetingsAsOwnerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    meetingAttendees<T extends User$meetingAttendeesArgs<ExtArgs> = {}>(args?: Subset<T, User$meetingAttendeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    preMeetingBriefs<T extends User$preMeetingBriefsArgs<ExtArgs> = {}>(args?: Subset<T, User$preMeetingBriefsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreMeetingBriefPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gemAlerts<T extends User$gemAlertsArgs<ExtArgs> = {}>(args?: Subset<T, User$gemAlertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GemAlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userFeedbacks<T extends User$userFeedbacksArgs<ExtArgs> = {}>(args?: Subset<T, User$userFeedbacksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.dataSources
   */
  export type User$dataSourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSource
     */
    select?: DataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSource
     */
    omit?: DataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataSourceInclude<ExtArgs> | null
    where?: DataSourceWhereInput
    orderBy?: DataSourceOrderByWithRelationInput | DataSourceOrderByWithRelationInput[]
    cursor?: DataSourceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DataSourceScalarFieldEnum | DataSourceScalarFieldEnum[]
  }

  /**
   * User.meetingsAsOwner
   */
  export type User$meetingsAsOwnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    where?: MeetingWhereInput
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    cursor?: MeetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * User.meetingAttendees
   */
  export type User$meetingAttendeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantInclude<ExtArgs> | null
    where?: MeetingParticipantWhereInput
    orderBy?: MeetingParticipantOrderByWithRelationInput | MeetingParticipantOrderByWithRelationInput[]
    cursor?: MeetingParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingParticipantScalarFieldEnum | MeetingParticipantScalarFieldEnum[]
  }

  /**
   * User.preMeetingBriefs
   */
  export type User$preMeetingBriefsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreMeetingBrief
     */
    select?: PreMeetingBriefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreMeetingBrief
     */
    omit?: PreMeetingBriefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreMeetingBriefInclude<ExtArgs> | null
    where?: PreMeetingBriefWhereInput
    orderBy?: PreMeetingBriefOrderByWithRelationInput | PreMeetingBriefOrderByWithRelationInput[]
    cursor?: PreMeetingBriefWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PreMeetingBriefScalarFieldEnum | PreMeetingBriefScalarFieldEnum[]
  }

  /**
   * User.gemAlerts
   */
  export type User$gemAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GemAlert
     */
    select?: GemAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GemAlert
     */
    omit?: GemAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GemAlertInclude<ExtArgs> | null
    where?: GemAlertWhereInput
    orderBy?: GemAlertOrderByWithRelationInput | GemAlertOrderByWithRelationInput[]
    cursor?: GemAlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GemAlertScalarFieldEnum | GemAlertScalarFieldEnum[]
  }

  /**
   * User.userFeedbacks
   */
  export type User$userFeedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFeedback
     */
    select?: UserFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFeedback
     */
    omit?: UserFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFeedbackInclude<ExtArgs> | null
    where?: UserFeedbackWhereInput
    orderBy?: UserFeedbackOrderByWithRelationInput | UserFeedbackOrderByWithRelationInput[]
    cursor?: UserFeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFeedbackScalarFieldEnum | UserFeedbackScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model DataSource
   */

  export type AggregateDataSource = {
    _count: DataSourceCountAggregateOutputType | null
    _min: DataSourceMinAggregateOutputType | null
    _max: DataSourceMaxAggregateOutputType | null
  }

  export type DataSourceMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.DataSourceType | null
    name: string | null
    accessToken: string | null
    refreshToken: string | null
    scope: string | null
    lastSyncedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DataSourceMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.DataSourceType | null
    name: string | null
    accessToken: string | null
    refreshToken: string | null
    scope: string | null
    lastSyncedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DataSourceCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    name: number
    accessToken: number
    refreshToken: number
    scope: number
    lastSyncedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DataSourceMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    name?: true
    accessToken?: true
    refreshToken?: true
    scope?: true
    lastSyncedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DataSourceMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    name?: true
    accessToken?: true
    refreshToken?: true
    scope?: true
    lastSyncedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DataSourceCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    name?: true
    accessToken?: true
    refreshToken?: true
    scope?: true
    lastSyncedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DataSourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataSource to aggregate.
     */
    where?: DataSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataSources to fetch.
     */
    orderBy?: DataSourceOrderByWithRelationInput | DataSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DataSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DataSources
    **/
    _count?: true | DataSourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataSourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataSourceMaxAggregateInputType
  }

  export type GetDataSourceAggregateType<T extends DataSourceAggregateArgs> = {
        [P in keyof T & keyof AggregateDataSource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataSource[P]>
      : GetScalarType<T[P], AggregateDataSource[P]>
  }




  export type DataSourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataSourceWhereInput
    orderBy?: DataSourceOrderByWithAggregationInput | DataSourceOrderByWithAggregationInput[]
    by: DataSourceScalarFieldEnum[] | DataSourceScalarFieldEnum
    having?: DataSourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataSourceCountAggregateInputType | true
    _min?: DataSourceMinAggregateInputType
    _max?: DataSourceMaxAggregateInputType
  }

  export type DataSourceGroupByOutputType = {
    id: string
    userId: string
    type: $Enums.DataSourceType
    name: string
    accessToken: string | null
    refreshToken: string | null
    scope: string | null
    lastSyncedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: DataSourceCountAggregateOutputType | null
    _min: DataSourceMinAggregateOutputType | null
    _max: DataSourceMaxAggregateOutputType | null
  }

  type GetDataSourceGroupByPayload<T extends DataSourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DataSourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataSourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataSourceGroupByOutputType[P]>
            : GetScalarType<T[P], DataSourceGroupByOutputType[P]>
        }
      >
    >


  export type DataSourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    name?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    scope?: boolean
    lastSyncedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    syncedContents?: boolean | DataSource$syncedContentsArgs<ExtArgs>
    _count?: boolean | DataSourceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataSource"]>

  export type DataSourceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    name?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    scope?: boolean
    lastSyncedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataSource"]>

  export type DataSourceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    name?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    scope?: boolean
    lastSyncedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataSource"]>

  export type DataSourceSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    name?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    scope?: boolean
    lastSyncedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DataSourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "name" | "accessToken" | "refreshToken" | "scope" | "lastSyncedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["dataSource"]>
  export type DataSourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    syncedContents?: boolean | DataSource$syncedContentsArgs<ExtArgs>
    _count?: boolean | DataSourceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DataSourceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DataSourceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DataSourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DataSource"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      syncedContents: Prisma.$SyncedContentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: $Enums.DataSourceType
      name: string
      accessToken: string | null
      refreshToken: string | null
      scope: string | null
      lastSyncedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dataSource"]>
    composites: {}
  }

  type DataSourceGetPayload<S extends boolean | null | undefined | DataSourceDefaultArgs> = $Result.GetResult<Prisma.$DataSourcePayload, S>

  type DataSourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DataSourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DataSourceCountAggregateInputType | true
    }

  export interface DataSourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DataSource'], meta: { name: 'DataSource' } }
    /**
     * Find zero or one DataSource that matches the filter.
     * @param {DataSourceFindUniqueArgs} args - Arguments to find a DataSource
     * @example
     * // Get one DataSource
     * const dataSource = await prisma.dataSource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DataSourceFindUniqueArgs>(args: SelectSubset<T, DataSourceFindUniqueArgs<ExtArgs>>): Prisma__DataSourceClient<$Result.GetResult<Prisma.$DataSourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DataSource that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DataSourceFindUniqueOrThrowArgs} args - Arguments to find a DataSource
     * @example
     * // Get one DataSource
     * const dataSource = await prisma.dataSource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DataSourceFindUniqueOrThrowArgs>(args: SelectSubset<T, DataSourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DataSourceClient<$Result.GetResult<Prisma.$DataSourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataSource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataSourceFindFirstArgs} args - Arguments to find a DataSource
     * @example
     * // Get one DataSource
     * const dataSource = await prisma.dataSource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DataSourceFindFirstArgs>(args?: SelectSubset<T, DataSourceFindFirstArgs<ExtArgs>>): Prisma__DataSourceClient<$Result.GetResult<Prisma.$DataSourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataSource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataSourceFindFirstOrThrowArgs} args - Arguments to find a DataSource
     * @example
     * // Get one DataSource
     * const dataSource = await prisma.dataSource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DataSourceFindFirstOrThrowArgs>(args?: SelectSubset<T, DataSourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DataSourceClient<$Result.GetResult<Prisma.$DataSourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DataSources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataSourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DataSources
     * const dataSources = await prisma.dataSource.findMany()
     * 
     * // Get first 10 DataSources
     * const dataSources = await prisma.dataSource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dataSourceWithIdOnly = await prisma.dataSource.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DataSourceFindManyArgs>(args?: SelectSubset<T, DataSourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataSourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DataSource.
     * @param {DataSourceCreateArgs} args - Arguments to create a DataSource.
     * @example
     * // Create one DataSource
     * const DataSource = await prisma.dataSource.create({
     *   data: {
     *     // ... data to create a DataSource
     *   }
     * })
     * 
     */
    create<T extends DataSourceCreateArgs>(args: SelectSubset<T, DataSourceCreateArgs<ExtArgs>>): Prisma__DataSourceClient<$Result.GetResult<Prisma.$DataSourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DataSources.
     * @param {DataSourceCreateManyArgs} args - Arguments to create many DataSources.
     * @example
     * // Create many DataSources
     * const dataSource = await prisma.dataSource.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DataSourceCreateManyArgs>(args?: SelectSubset<T, DataSourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DataSources and returns the data saved in the database.
     * @param {DataSourceCreateManyAndReturnArgs} args - Arguments to create many DataSources.
     * @example
     * // Create many DataSources
     * const dataSource = await prisma.dataSource.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DataSources and only return the `id`
     * const dataSourceWithIdOnly = await prisma.dataSource.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DataSourceCreateManyAndReturnArgs>(args?: SelectSubset<T, DataSourceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataSourcePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DataSource.
     * @param {DataSourceDeleteArgs} args - Arguments to delete one DataSource.
     * @example
     * // Delete one DataSource
     * const DataSource = await prisma.dataSource.delete({
     *   where: {
     *     // ... filter to delete one DataSource
     *   }
     * })
     * 
     */
    delete<T extends DataSourceDeleteArgs>(args: SelectSubset<T, DataSourceDeleteArgs<ExtArgs>>): Prisma__DataSourceClient<$Result.GetResult<Prisma.$DataSourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DataSource.
     * @param {DataSourceUpdateArgs} args - Arguments to update one DataSource.
     * @example
     * // Update one DataSource
     * const dataSource = await prisma.dataSource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DataSourceUpdateArgs>(args: SelectSubset<T, DataSourceUpdateArgs<ExtArgs>>): Prisma__DataSourceClient<$Result.GetResult<Prisma.$DataSourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DataSources.
     * @param {DataSourceDeleteManyArgs} args - Arguments to filter DataSources to delete.
     * @example
     * // Delete a few DataSources
     * const { count } = await prisma.dataSource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DataSourceDeleteManyArgs>(args?: SelectSubset<T, DataSourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataSources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataSourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DataSources
     * const dataSource = await prisma.dataSource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DataSourceUpdateManyArgs>(args: SelectSubset<T, DataSourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataSources and returns the data updated in the database.
     * @param {DataSourceUpdateManyAndReturnArgs} args - Arguments to update many DataSources.
     * @example
     * // Update many DataSources
     * const dataSource = await prisma.dataSource.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DataSources and only return the `id`
     * const dataSourceWithIdOnly = await prisma.dataSource.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DataSourceUpdateManyAndReturnArgs>(args: SelectSubset<T, DataSourceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataSourcePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DataSource.
     * @param {DataSourceUpsertArgs} args - Arguments to update or create a DataSource.
     * @example
     * // Update or create a DataSource
     * const dataSource = await prisma.dataSource.upsert({
     *   create: {
     *     // ... data to create a DataSource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DataSource we want to update
     *   }
     * })
     */
    upsert<T extends DataSourceUpsertArgs>(args: SelectSubset<T, DataSourceUpsertArgs<ExtArgs>>): Prisma__DataSourceClient<$Result.GetResult<Prisma.$DataSourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DataSources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataSourceCountArgs} args - Arguments to filter DataSources to count.
     * @example
     * // Count the number of DataSources
     * const count = await prisma.dataSource.count({
     *   where: {
     *     // ... the filter for the DataSources we want to count
     *   }
     * })
    **/
    count<T extends DataSourceCountArgs>(
      args?: Subset<T, DataSourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataSourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DataSource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataSourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DataSourceAggregateArgs>(args: Subset<T, DataSourceAggregateArgs>): Prisma.PrismaPromise<GetDataSourceAggregateType<T>>

    /**
     * Group by DataSource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataSourceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DataSourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataSourceGroupByArgs['orderBy'] }
        : { orderBy?: DataSourceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DataSourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataSourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DataSource model
   */
  readonly fields: DataSourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DataSource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DataSourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    syncedContents<T extends DataSource$syncedContentsArgs<ExtArgs> = {}>(args?: Subset<T, DataSource$syncedContentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncedContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DataSource model
   */
  interface DataSourceFieldRefs {
    readonly id: FieldRef<"DataSource", 'String'>
    readonly userId: FieldRef<"DataSource", 'String'>
    readonly type: FieldRef<"DataSource", 'DataSourceType'>
    readonly name: FieldRef<"DataSource", 'String'>
    readonly accessToken: FieldRef<"DataSource", 'String'>
    readonly refreshToken: FieldRef<"DataSource", 'String'>
    readonly scope: FieldRef<"DataSource", 'String'>
    readonly lastSyncedAt: FieldRef<"DataSource", 'DateTime'>
    readonly createdAt: FieldRef<"DataSource", 'DateTime'>
    readonly updatedAt: FieldRef<"DataSource", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DataSource findUnique
   */
  export type DataSourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSource
     */
    select?: DataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSource
     */
    omit?: DataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataSourceInclude<ExtArgs> | null
    /**
     * Filter, which DataSource to fetch.
     */
    where: DataSourceWhereUniqueInput
  }

  /**
   * DataSource findUniqueOrThrow
   */
  export type DataSourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSource
     */
    select?: DataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSource
     */
    omit?: DataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataSourceInclude<ExtArgs> | null
    /**
     * Filter, which DataSource to fetch.
     */
    where: DataSourceWhereUniqueInput
  }

  /**
   * DataSource findFirst
   */
  export type DataSourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSource
     */
    select?: DataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSource
     */
    omit?: DataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataSourceInclude<ExtArgs> | null
    /**
     * Filter, which DataSource to fetch.
     */
    where?: DataSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataSources to fetch.
     */
    orderBy?: DataSourceOrderByWithRelationInput | DataSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataSources.
     */
    cursor?: DataSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataSources.
     */
    distinct?: DataSourceScalarFieldEnum | DataSourceScalarFieldEnum[]
  }

  /**
   * DataSource findFirstOrThrow
   */
  export type DataSourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSource
     */
    select?: DataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSource
     */
    omit?: DataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataSourceInclude<ExtArgs> | null
    /**
     * Filter, which DataSource to fetch.
     */
    where?: DataSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataSources to fetch.
     */
    orderBy?: DataSourceOrderByWithRelationInput | DataSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataSources.
     */
    cursor?: DataSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataSources.
     */
    distinct?: DataSourceScalarFieldEnum | DataSourceScalarFieldEnum[]
  }

  /**
   * DataSource findMany
   */
  export type DataSourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSource
     */
    select?: DataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSource
     */
    omit?: DataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataSourceInclude<ExtArgs> | null
    /**
     * Filter, which DataSources to fetch.
     */
    where?: DataSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataSources to fetch.
     */
    orderBy?: DataSourceOrderByWithRelationInput | DataSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DataSources.
     */
    cursor?: DataSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataSources.
     */
    skip?: number
    distinct?: DataSourceScalarFieldEnum | DataSourceScalarFieldEnum[]
  }

  /**
   * DataSource create
   */
  export type DataSourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSource
     */
    select?: DataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSource
     */
    omit?: DataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataSourceInclude<ExtArgs> | null
    /**
     * The data needed to create a DataSource.
     */
    data: XOR<DataSourceCreateInput, DataSourceUncheckedCreateInput>
  }

  /**
   * DataSource createMany
   */
  export type DataSourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DataSources.
     */
    data: DataSourceCreateManyInput | DataSourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DataSource createManyAndReturn
   */
  export type DataSourceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSource
     */
    select?: DataSourceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DataSource
     */
    omit?: DataSourceOmit<ExtArgs> | null
    /**
     * The data used to create many DataSources.
     */
    data: DataSourceCreateManyInput | DataSourceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataSourceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DataSource update
   */
  export type DataSourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSource
     */
    select?: DataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSource
     */
    omit?: DataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataSourceInclude<ExtArgs> | null
    /**
     * The data needed to update a DataSource.
     */
    data: XOR<DataSourceUpdateInput, DataSourceUncheckedUpdateInput>
    /**
     * Choose, which DataSource to update.
     */
    where: DataSourceWhereUniqueInput
  }

  /**
   * DataSource updateMany
   */
  export type DataSourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DataSources.
     */
    data: XOR<DataSourceUpdateManyMutationInput, DataSourceUncheckedUpdateManyInput>
    /**
     * Filter which DataSources to update
     */
    where?: DataSourceWhereInput
    /**
     * Limit how many DataSources to update.
     */
    limit?: number
  }

  /**
   * DataSource updateManyAndReturn
   */
  export type DataSourceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSource
     */
    select?: DataSourceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DataSource
     */
    omit?: DataSourceOmit<ExtArgs> | null
    /**
     * The data used to update DataSources.
     */
    data: XOR<DataSourceUpdateManyMutationInput, DataSourceUncheckedUpdateManyInput>
    /**
     * Filter which DataSources to update
     */
    where?: DataSourceWhereInput
    /**
     * Limit how many DataSources to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataSourceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DataSource upsert
   */
  export type DataSourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSource
     */
    select?: DataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSource
     */
    omit?: DataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataSourceInclude<ExtArgs> | null
    /**
     * The filter to search for the DataSource to update in case it exists.
     */
    where: DataSourceWhereUniqueInput
    /**
     * In case the DataSource found by the `where` argument doesn't exist, create a new DataSource with this data.
     */
    create: XOR<DataSourceCreateInput, DataSourceUncheckedCreateInput>
    /**
     * In case the DataSource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DataSourceUpdateInput, DataSourceUncheckedUpdateInput>
  }

  /**
   * DataSource delete
   */
  export type DataSourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSource
     */
    select?: DataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSource
     */
    omit?: DataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataSourceInclude<ExtArgs> | null
    /**
     * Filter which DataSource to delete.
     */
    where: DataSourceWhereUniqueInput
  }

  /**
   * DataSource deleteMany
   */
  export type DataSourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataSources to delete
     */
    where?: DataSourceWhereInput
    /**
     * Limit how many DataSources to delete.
     */
    limit?: number
  }

  /**
   * DataSource.syncedContents
   */
  export type DataSource$syncedContentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncedContent
     */
    select?: SyncedContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncedContent
     */
    omit?: SyncedContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncedContentInclude<ExtArgs> | null
    where?: SyncedContentWhereInput
    orderBy?: SyncedContentOrderByWithRelationInput | SyncedContentOrderByWithRelationInput[]
    cursor?: SyncedContentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SyncedContentScalarFieldEnum | SyncedContentScalarFieldEnum[]
  }

  /**
   * DataSource without action
   */
  export type DataSourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataSource
     */
    select?: DataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataSource
     */
    omit?: DataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataSourceInclude<ExtArgs> | null
  }


  /**
   * Model SyncedContent
   */

  export type AggregateSyncedContent = {
    _count: SyncedContentCountAggregateOutputType | null
    _min: SyncedContentMinAggregateOutputType | null
    _max: SyncedContentMaxAggregateOutputType | null
  }

  export type SyncedContentMinAggregateOutputType = {
    id: string | null
    dataSourceId: string | null
    userId: string | null
    contentType: string | null
    sourceItemId: string | null
    processedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SyncedContentMaxAggregateOutputType = {
    id: string | null
    dataSourceId: string | null
    userId: string | null
    contentType: string | null
    sourceItemId: string | null
    processedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SyncedContentCountAggregateOutputType = {
    id: number
    dataSourceId: number
    userId: number
    contentType: number
    content: number
    embedding: number
    sourceItemId: number
    processedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SyncedContentMinAggregateInputType = {
    id?: true
    dataSourceId?: true
    userId?: true
    contentType?: true
    sourceItemId?: true
    processedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SyncedContentMaxAggregateInputType = {
    id?: true
    dataSourceId?: true
    userId?: true
    contentType?: true
    sourceItemId?: true
    processedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SyncedContentCountAggregateInputType = {
    id?: true
    dataSourceId?: true
    userId?: true
    contentType?: true
    content?: true
    embedding?: true
    sourceItemId?: true
    processedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SyncedContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SyncedContent to aggregate.
     */
    where?: SyncedContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncedContents to fetch.
     */
    orderBy?: SyncedContentOrderByWithRelationInput | SyncedContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SyncedContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncedContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncedContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SyncedContents
    **/
    _count?: true | SyncedContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SyncedContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SyncedContentMaxAggregateInputType
  }

  export type GetSyncedContentAggregateType<T extends SyncedContentAggregateArgs> = {
        [P in keyof T & keyof AggregateSyncedContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSyncedContent[P]>
      : GetScalarType<T[P], AggregateSyncedContent[P]>
  }




  export type SyncedContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SyncedContentWhereInput
    orderBy?: SyncedContentOrderByWithAggregationInput | SyncedContentOrderByWithAggregationInput[]
    by: SyncedContentScalarFieldEnum[] | SyncedContentScalarFieldEnum
    having?: SyncedContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SyncedContentCountAggregateInputType | true
    _min?: SyncedContentMinAggregateInputType
    _max?: SyncedContentMaxAggregateInputType
  }

  export type SyncedContentGroupByOutputType = {
    id: string
    dataSourceId: string
    userId: string
    contentType: string
    content: JsonValue
    embedding: JsonValue | null
    sourceItemId: string | null
    processedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: SyncedContentCountAggregateOutputType | null
    _min: SyncedContentMinAggregateOutputType | null
    _max: SyncedContentMaxAggregateOutputType | null
  }

  type GetSyncedContentGroupByPayload<T extends SyncedContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SyncedContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SyncedContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SyncedContentGroupByOutputType[P]>
            : GetScalarType<T[P], SyncedContentGroupByOutputType[P]>
        }
      >
    >


  export type SyncedContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataSourceId?: boolean
    userId?: boolean
    contentType?: boolean
    content?: boolean
    embedding?: boolean
    sourceItemId?: boolean
    processedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dataSource?: boolean | DataSourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["syncedContent"]>

  export type SyncedContentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataSourceId?: boolean
    userId?: boolean
    contentType?: boolean
    content?: boolean
    embedding?: boolean
    sourceItemId?: boolean
    processedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dataSource?: boolean | DataSourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["syncedContent"]>

  export type SyncedContentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataSourceId?: boolean
    userId?: boolean
    contentType?: boolean
    content?: boolean
    embedding?: boolean
    sourceItemId?: boolean
    processedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dataSource?: boolean | DataSourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["syncedContent"]>

  export type SyncedContentSelectScalar = {
    id?: boolean
    dataSourceId?: boolean
    userId?: boolean
    contentType?: boolean
    content?: boolean
    embedding?: boolean
    sourceItemId?: boolean
    processedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SyncedContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dataSourceId" | "userId" | "contentType" | "content" | "embedding" | "sourceItemId" | "processedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["syncedContent"]>
  export type SyncedContentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataSource?: boolean | DataSourceDefaultArgs<ExtArgs>
  }
  export type SyncedContentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataSource?: boolean | DataSourceDefaultArgs<ExtArgs>
  }
  export type SyncedContentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataSource?: boolean | DataSourceDefaultArgs<ExtArgs>
  }

  export type $SyncedContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SyncedContent"
    objects: {
      dataSource: Prisma.$DataSourcePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dataSourceId: string
      userId: string
      contentType: string
      content: Prisma.JsonValue
      embedding: Prisma.JsonValue | null
      sourceItemId: string | null
      processedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["syncedContent"]>
    composites: {}
  }

  type SyncedContentGetPayload<S extends boolean | null | undefined | SyncedContentDefaultArgs> = $Result.GetResult<Prisma.$SyncedContentPayload, S>

  type SyncedContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SyncedContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SyncedContentCountAggregateInputType | true
    }

  export interface SyncedContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SyncedContent'], meta: { name: 'SyncedContent' } }
    /**
     * Find zero or one SyncedContent that matches the filter.
     * @param {SyncedContentFindUniqueArgs} args - Arguments to find a SyncedContent
     * @example
     * // Get one SyncedContent
     * const syncedContent = await prisma.syncedContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SyncedContentFindUniqueArgs>(args: SelectSubset<T, SyncedContentFindUniqueArgs<ExtArgs>>): Prisma__SyncedContentClient<$Result.GetResult<Prisma.$SyncedContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SyncedContent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SyncedContentFindUniqueOrThrowArgs} args - Arguments to find a SyncedContent
     * @example
     * // Get one SyncedContent
     * const syncedContent = await prisma.syncedContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SyncedContentFindUniqueOrThrowArgs>(args: SelectSubset<T, SyncedContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SyncedContentClient<$Result.GetResult<Prisma.$SyncedContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SyncedContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncedContentFindFirstArgs} args - Arguments to find a SyncedContent
     * @example
     * // Get one SyncedContent
     * const syncedContent = await prisma.syncedContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SyncedContentFindFirstArgs>(args?: SelectSubset<T, SyncedContentFindFirstArgs<ExtArgs>>): Prisma__SyncedContentClient<$Result.GetResult<Prisma.$SyncedContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SyncedContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncedContentFindFirstOrThrowArgs} args - Arguments to find a SyncedContent
     * @example
     * // Get one SyncedContent
     * const syncedContent = await prisma.syncedContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SyncedContentFindFirstOrThrowArgs>(args?: SelectSubset<T, SyncedContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__SyncedContentClient<$Result.GetResult<Prisma.$SyncedContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SyncedContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncedContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SyncedContents
     * const syncedContents = await prisma.syncedContent.findMany()
     * 
     * // Get first 10 SyncedContents
     * const syncedContents = await prisma.syncedContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const syncedContentWithIdOnly = await prisma.syncedContent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SyncedContentFindManyArgs>(args?: SelectSubset<T, SyncedContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncedContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SyncedContent.
     * @param {SyncedContentCreateArgs} args - Arguments to create a SyncedContent.
     * @example
     * // Create one SyncedContent
     * const SyncedContent = await prisma.syncedContent.create({
     *   data: {
     *     // ... data to create a SyncedContent
     *   }
     * })
     * 
     */
    create<T extends SyncedContentCreateArgs>(args: SelectSubset<T, SyncedContentCreateArgs<ExtArgs>>): Prisma__SyncedContentClient<$Result.GetResult<Prisma.$SyncedContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SyncedContents.
     * @param {SyncedContentCreateManyArgs} args - Arguments to create many SyncedContents.
     * @example
     * // Create many SyncedContents
     * const syncedContent = await prisma.syncedContent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SyncedContentCreateManyArgs>(args?: SelectSubset<T, SyncedContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SyncedContents and returns the data saved in the database.
     * @param {SyncedContentCreateManyAndReturnArgs} args - Arguments to create many SyncedContents.
     * @example
     * // Create many SyncedContents
     * const syncedContent = await prisma.syncedContent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SyncedContents and only return the `id`
     * const syncedContentWithIdOnly = await prisma.syncedContent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SyncedContentCreateManyAndReturnArgs>(args?: SelectSubset<T, SyncedContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncedContentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SyncedContent.
     * @param {SyncedContentDeleteArgs} args - Arguments to delete one SyncedContent.
     * @example
     * // Delete one SyncedContent
     * const SyncedContent = await prisma.syncedContent.delete({
     *   where: {
     *     // ... filter to delete one SyncedContent
     *   }
     * })
     * 
     */
    delete<T extends SyncedContentDeleteArgs>(args: SelectSubset<T, SyncedContentDeleteArgs<ExtArgs>>): Prisma__SyncedContentClient<$Result.GetResult<Prisma.$SyncedContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SyncedContent.
     * @param {SyncedContentUpdateArgs} args - Arguments to update one SyncedContent.
     * @example
     * // Update one SyncedContent
     * const syncedContent = await prisma.syncedContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SyncedContentUpdateArgs>(args: SelectSubset<T, SyncedContentUpdateArgs<ExtArgs>>): Prisma__SyncedContentClient<$Result.GetResult<Prisma.$SyncedContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SyncedContents.
     * @param {SyncedContentDeleteManyArgs} args - Arguments to filter SyncedContents to delete.
     * @example
     * // Delete a few SyncedContents
     * const { count } = await prisma.syncedContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SyncedContentDeleteManyArgs>(args?: SelectSubset<T, SyncedContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SyncedContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncedContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SyncedContents
     * const syncedContent = await prisma.syncedContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SyncedContentUpdateManyArgs>(args: SelectSubset<T, SyncedContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SyncedContents and returns the data updated in the database.
     * @param {SyncedContentUpdateManyAndReturnArgs} args - Arguments to update many SyncedContents.
     * @example
     * // Update many SyncedContents
     * const syncedContent = await prisma.syncedContent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SyncedContents and only return the `id`
     * const syncedContentWithIdOnly = await prisma.syncedContent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SyncedContentUpdateManyAndReturnArgs>(args: SelectSubset<T, SyncedContentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncedContentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SyncedContent.
     * @param {SyncedContentUpsertArgs} args - Arguments to update or create a SyncedContent.
     * @example
     * // Update or create a SyncedContent
     * const syncedContent = await prisma.syncedContent.upsert({
     *   create: {
     *     // ... data to create a SyncedContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SyncedContent we want to update
     *   }
     * })
     */
    upsert<T extends SyncedContentUpsertArgs>(args: SelectSubset<T, SyncedContentUpsertArgs<ExtArgs>>): Prisma__SyncedContentClient<$Result.GetResult<Prisma.$SyncedContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SyncedContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncedContentCountArgs} args - Arguments to filter SyncedContents to count.
     * @example
     * // Count the number of SyncedContents
     * const count = await prisma.syncedContent.count({
     *   where: {
     *     // ... the filter for the SyncedContents we want to count
     *   }
     * })
    **/
    count<T extends SyncedContentCountArgs>(
      args?: Subset<T, SyncedContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SyncedContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SyncedContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncedContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SyncedContentAggregateArgs>(args: Subset<T, SyncedContentAggregateArgs>): Prisma.PrismaPromise<GetSyncedContentAggregateType<T>>

    /**
     * Group by SyncedContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncedContentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SyncedContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SyncedContentGroupByArgs['orderBy'] }
        : { orderBy?: SyncedContentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SyncedContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSyncedContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SyncedContent model
   */
  readonly fields: SyncedContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SyncedContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SyncedContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dataSource<T extends DataSourceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DataSourceDefaultArgs<ExtArgs>>): Prisma__DataSourceClient<$Result.GetResult<Prisma.$DataSourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SyncedContent model
   */
  interface SyncedContentFieldRefs {
    readonly id: FieldRef<"SyncedContent", 'String'>
    readonly dataSourceId: FieldRef<"SyncedContent", 'String'>
    readonly userId: FieldRef<"SyncedContent", 'String'>
    readonly contentType: FieldRef<"SyncedContent", 'String'>
    readonly content: FieldRef<"SyncedContent", 'Json'>
    readonly embedding: FieldRef<"SyncedContent", 'Json'>
    readonly sourceItemId: FieldRef<"SyncedContent", 'String'>
    readonly processedAt: FieldRef<"SyncedContent", 'DateTime'>
    readonly createdAt: FieldRef<"SyncedContent", 'DateTime'>
    readonly updatedAt: FieldRef<"SyncedContent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SyncedContent findUnique
   */
  export type SyncedContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncedContent
     */
    select?: SyncedContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncedContent
     */
    omit?: SyncedContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncedContentInclude<ExtArgs> | null
    /**
     * Filter, which SyncedContent to fetch.
     */
    where: SyncedContentWhereUniqueInput
  }

  /**
   * SyncedContent findUniqueOrThrow
   */
  export type SyncedContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncedContent
     */
    select?: SyncedContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncedContent
     */
    omit?: SyncedContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncedContentInclude<ExtArgs> | null
    /**
     * Filter, which SyncedContent to fetch.
     */
    where: SyncedContentWhereUniqueInput
  }

  /**
   * SyncedContent findFirst
   */
  export type SyncedContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncedContent
     */
    select?: SyncedContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncedContent
     */
    omit?: SyncedContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncedContentInclude<ExtArgs> | null
    /**
     * Filter, which SyncedContent to fetch.
     */
    where?: SyncedContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncedContents to fetch.
     */
    orderBy?: SyncedContentOrderByWithRelationInput | SyncedContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SyncedContents.
     */
    cursor?: SyncedContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncedContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncedContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncedContents.
     */
    distinct?: SyncedContentScalarFieldEnum | SyncedContentScalarFieldEnum[]
  }

  /**
   * SyncedContent findFirstOrThrow
   */
  export type SyncedContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncedContent
     */
    select?: SyncedContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncedContent
     */
    omit?: SyncedContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncedContentInclude<ExtArgs> | null
    /**
     * Filter, which SyncedContent to fetch.
     */
    where?: SyncedContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncedContents to fetch.
     */
    orderBy?: SyncedContentOrderByWithRelationInput | SyncedContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SyncedContents.
     */
    cursor?: SyncedContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncedContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncedContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncedContents.
     */
    distinct?: SyncedContentScalarFieldEnum | SyncedContentScalarFieldEnum[]
  }

  /**
   * SyncedContent findMany
   */
  export type SyncedContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncedContent
     */
    select?: SyncedContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncedContent
     */
    omit?: SyncedContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncedContentInclude<ExtArgs> | null
    /**
     * Filter, which SyncedContents to fetch.
     */
    where?: SyncedContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncedContents to fetch.
     */
    orderBy?: SyncedContentOrderByWithRelationInput | SyncedContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SyncedContents.
     */
    cursor?: SyncedContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncedContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncedContents.
     */
    skip?: number
    distinct?: SyncedContentScalarFieldEnum | SyncedContentScalarFieldEnum[]
  }

  /**
   * SyncedContent create
   */
  export type SyncedContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncedContent
     */
    select?: SyncedContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncedContent
     */
    omit?: SyncedContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncedContentInclude<ExtArgs> | null
    /**
     * The data needed to create a SyncedContent.
     */
    data: XOR<SyncedContentCreateInput, SyncedContentUncheckedCreateInput>
  }

  /**
   * SyncedContent createMany
   */
  export type SyncedContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SyncedContents.
     */
    data: SyncedContentCreateManyInput | SyncedContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SyncedContent createManyAndReturn
   */
  export type SyncedContentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncedContent
     */
    select?: SyncedContentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SyncedContent
     */
    omit?: SyncedContentOmit<ExtArgs> | null
    /**
     * The data used to create many SyncedContents.
     */
    data: SyncedContentCreateManyInput | SyncedContentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncedContentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SyncedContent update
   */
  export type SyncedContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncedContent
     */
    select?: SyncedContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncedContent
     */
    omit?: SyncedContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncedContentInclude<ExtArgs> | null
    /**
     * The data needed to update a SyncedContent.
     */
    data: XOR<SyncedContentUpdateInput, SyncedContentUncheckedUpdateInput>
    /**
     * Choose, which SyncedContent to update.
     */
    where: SyncedContentWhereUniqueInput
  }

  /**
   * SyncedContent updateMany
   */
  export type SyncedContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SyncedContents.
     */
    data: XOR<SyncedContentUpdateManyMutationInput, SyncedContentUncheckedUpdateManyInput>
    /**
     * Filter which SyncedContents to update
     */
    where?: SyncedContentWhereInput
    /**
     * Limit how many SyncedContents to update.
     */
    limit?: number
  }

  /**
   * SyncedContent updateManyAndReturn
   */
  export type SyncedContentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncedContent
     */
    select?: SyncedContentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SyncedContent
     */
    omit?: SyncedContentOmit<ExtArgs> | null
    /**
     * The data used to update SyncedContents.
     */
    data: XOR<SyncedContentUpdateManyMutationInput, SyncedContentUncheckedUpdateManyInput>
    /**
     * Filter which SyncedContents to update
     */
    where?: SyncedContentWhereInput
    /**
     * Limit how many SyncedContents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncedContentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SyncedContent upsert
   */
  export type SyncedContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncedContent
     */
    select?: SyncedContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncedContent
     */
    omit?: SyncedContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncedContentInclude<ExtArgs> | null
    /**
     * The filter to search for the SyncedContent to update in case it exists.
     */
    where: SyncedContentWhereUniqueInput
    /**
     * In case the SyncedContent found by the `where` argument doesn't exist, create a new SyncedContent with this data.
     */
    create: XOR<SyncedContentCreateInput, SyncedContentUncheckedCreateInput>
    /**
     * In case the SyncedContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SyncedContentUpdateInput, SyncedContentUncheckedUpdateInput>
  }

  /**
   * SyncedContent delete
   */
  export type SyncedContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncedContent
     */
    select?: SyncedContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncedContent
     */
    omit?: SyncedContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncedContentInclude<ExtArgs> | null
    /**
     * Filter which SyncedContent to delete.
     */
    where: SyncedContentWhereUniqueInput
  }

  /**
   * SyncedContent deleteMany
   */
  export type SyncedContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SyncedContents to delete
     */
    where?: SyncedContentWhereInput
    /**
     * Limit how many SyncedContents to delete.
     */
    limit?: number
  }

  /**
   * SyncedContent without action
   */
  export type SyncedContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncedContent
     */
    select?: SyncedContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncedContent
     */
    omit?: SyncedContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SyncedContentInclude<ExtArgs> | null
  }


  /**
   * Model Meeting
   */

  export type AggregateMeeting = {
    _count: MeetingCountAggregateOutputType | null
    _min: MeetingMinAggregateOutputType | null
    _max: MeetingMaxAggregateOutputType | null
  }

  export type MeetingMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    title: string | null
    startTime: Date | null
    endTime: Date | null
    sourceCalendarEventId: string | null
    platformUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MeetingMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    title: string | null
    startTime: Date | null
    endTime: Date | null
    sourceCalendarEventId: string | null
    platformUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MeetingCountAggregateOutputType = {
    id: number
    ownerId: number
    title: number
    startTime: number
    endTime: number
    sourceCalendarEventId: number
    platformUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MeetingMinAggregateInputType = {
    id?: true
    ownerId?: true
    title?: true
    startTime?: true
    endTime?: true
    sourceCalendarEventId?: true
    platformUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MeetingMaxAggregateInputType = {
    id?: true
    ownerId?: true
    title?: true
    startTime?: true
    endTime?: true
    sourceCalendarEventId?: true
    platformUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MeetingCountAggregateInputType = {
    id?: true
    ownerId?: true
    title?: true
    startTime?: true
    endTime?: true
    sourceCalendarEventId?: true
    platformUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MeetingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meeting to aggregate.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meetings
    **/
    _count?: true | MeetingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeetingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeetingMaxAggregateInputType
  }

  export type GetMeetingAggregateType<T extends MeetingAggregateArgs> = {
        [P in keyof T & keyof AggregateMeeting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeeting[P]>
      : GetScalarType<T[P], AggregateMeeting[P]>
  }




  export type MeetingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingWhereInput
    orderBy?: MeetingOrderByWithAggregationInput | MeetingOrderByWithAggregationInput[]
    by: MeetingScalarFieldEnum[] | MeetingScalarFieldEnum
    having?: MeetingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeetingCountAggregateInputType | true
    _min?: MeetingMinAggregateInputType
    _max?: MeetingMaxAggregateInputType
  }

  export type MeetingGroupByOutputType = {
    id: string
    ownerId: string
    title: string | null
    startTime: Date
    endTime: Date | null
    sourceCalendarEventId: string | null
    platformUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: MeetingCountAggregateOutputType | null
    _min: MeetingMinAggregateOutputType | null
    _max: MeetingMaxAggregateOutputType | null
  }

  type GetMeetingGroupByPayload<T extends MeetingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeetingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeetingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeetingGroupByOutputType[P]>
            : GetScalarType<T[P], MeetingGroupByOutputType[P]>
        }
      >
    >


  export type MeetingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    title?: boolean
    startTime?: boolean
    endTime?: boolean
    sourceCalendarEventId?: boolean
    platformUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    participants?: boolean | Meeting$participantsArgs<ExtArgs>
    preMeetingBrief?: boolean | Meeting$preMeetingBriefArgs<ExtArgs>
    gemAlerts?: boolean | Meeting$gemAlertsArgs<ExtArgs>
    _count?: boolean | MeetingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meeting"]>

  export type MeetingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    title?: boolean
    startTime?: boolean
    endTime?: boolean
    sourceCalendarEventId?: boolean
    platformUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meeting"]>

  export type MeetingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    title?: boolean
    startTime?: boolean
    endTime?: boolean
    sourceCalendarEventId?: boolean
    platformUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meeting"]>

  export type MeetingSelectScalar = {
    id?: boolean
    ownerId?: boolean
    title?: boolean
    startTime?: boolean
    endTime?: boolean
    sourceCalendarEventId?: boolean
    platformUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MeetingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "title" | "startTime" | "endTime" | "sourceCalendarEventId" | "platformUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["meeting"]>
  export type MeetingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    participants?: boolean | Meeting$participantsArgs<ExtArgs>
    preMeetingBrief?: boolean | Meeting$preMeetingBriefArgs<ExtArgs>
    gemAlerts?: boolean | Meeting$gemAlertsArgs<ExtArgs>
    _count?: boolean | MeetingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MeetingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MeetingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MeetingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meeting"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      participants: Prisma.$MeetingParticipantPayload<ExtArgs>[]
      preMeetingBrief: Prisma.$PreMeetingBriefPayload<ExtArgs> | null
      gemAlerts: Prisma.$GemAlertPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      title: string | null
      startTime: Date
      endTime: Date | null
      sourceCalendarEventId: string | null
      platformUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["meeting"]>
    composites: {}
  }

  type MeetingGetPayload<S extends boolean | null | undefined | MeetingDefaultArgs> = $Result.GetResult<Prisma.$MeetingPayload, S>

  type MeetingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MeetingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeetingCountAggregateInputType | true
    }

  export interface MeetingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meeting'], meta: { name: 'Meeting' } }
    /**
     * Find zero or one Meeting that matches the filter.
     * @param {MeetingFindUniqueArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeetingFindUniqueArgs>(args: SelectSubset<T, MeetingFindUniqueArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meeting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MeetingFindUniqueOrThrowArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeetingFindUniqueOrThrowArgs>(args: SelectSubset<T, MeetingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meeting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindFirstArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeetingFindFirstArgs>(args?: SelectSubset<T, MeetingFindFirstArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meeting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindFirstOrThrowArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeetingFindFirstOrThrowArgs>(args?: SelectSubset<T, MeetingFindFirstOrThrowArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meetings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meetings
     * const meetings = await prisma.meeting.findMany()
     * 
     * // Get first 10 Meetings
     * const meetings = await prisma.meeting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meetingWithIdOnly = await prisma.meeting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MeetingFindManyArgs>(args?: SelectSubset<T, MeetingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meeting.
     * @param {MeetingCreateArgs} args - Arguments to create a Meeting.
     * @example
     * // Create one Meeting
     * const Meeting = await prisma.meeting.create({
     *   data: {
     *     // ... data to create a Meeting
     *   }
     * })
     * 
     */
    create<T extends MeetingCreateArgs>(args: SelectSubset<T, MeetingCreateArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meetings.
     * @param {MeetingCreateManyArgs} args - Arguments to create many Meetings.
     * @example
     * // Create many Meetings
     * const meeting = await prisma.meeting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MeetingCreateManyArgs>(args?: SelectSubset<T, MeetingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Meetings and returns the data saved in the database.
     * @param {MeetingCreateManyAndReturnArgs} args - Arguments to create many Meetings.
     * @example
     * // Create many Meetings
     * const meeting = await prisma.meeting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Meetings and only return the `id`
     * const meetingWithIdOnly = await prisma.meeting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MeetingCreateManyAndReturnArgs>(args?: SelectSubset<T, MeetingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meeting.
     * @param {MeetingDeleteArgs} args - Arguments to delete one Meeting.
     * @example
     * // Delete one Meeting
     * const Meeting = await prisma.meeting.delete({
     *   where: {
     *     // ... filter to delete one Meeting
     *   }
     * })
     * 
     */
    delete<T extends MeetingDeleteArgs>(args: SelectSubset<T, MeetingDeleteArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meeting.
     * @param {MeetingUpdateArgs} args - Arguments to update one Meeting.
     * @example
     * // Update one Meeting
     * const meeting = await prisma.meeting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MeetingUpdateArgs>(args: SelectSubset<T, MeetingUpdateArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meetings.
     * @param {MeetingDeleteManyArgs} args - Arguments to filter Meetings to delete.
     * @example
     * // Delete a few Meetings
     * const { count } = await prisma.meeting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MeetingDeleteManyArgs>(args?: SelectSubset<T, MeetingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meetings
     * const meeting = await prisma.meeting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MeetingUpdateManyArgs>(args: SelectSubset<T, MeetingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meetings and returns the data updated in the database.
     * @param {MeetingUpdateManyAndReturnArgs} args - Arguments to update many Meetings.
     * @example
     * // Update many Meetings
     * const meeting = await prisma.meeting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Meetings and only return the `id`
     * const meetingWithIdOnly = await prisma.meeting.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MeetingUpdateManyAndReturnArgs>(args: SelectSubset<T, MeetingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meeting.
     * @param {MeetingUpsertArgs} args - Arguments to update or create a Meeting.
     * @example
     * // Update or create a Meeting
     * const meeting = await prisma.meeting.upsert({
     *   create: {
     *     // ... data to create a Meeting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meeting we want to update
     *   }
     * })
     */
    upsert<T extends MeetingUpsertArgs>(args: SelectSubset<T, MeetingUpsertArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingCountArgs} args - Arguments to filter Meetings to count.
     * @example
     * // Count the number of Meetings
     * const count = await prisma.meeting.count({
     *   where: {
     *     // ... the filter for the Meetings we want to count
     *   }
     * })
    **/
    count<T extends MeetingCountArgs>(
      args?: Subset<T, MeetingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeetingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MeetingAggregateArgs>(args: Subset<T, MeetingAggregateArgs>): Prisma.PrismaPromise<GetMeetingAggregateType<T>>

    /**
     * Group by Meeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MeetingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeetingGroupByArgs['orderBy'] }
        : { orderBy?: MeetingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MeetingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeetingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meeting model
   */
  readonly fields: MeetingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meeting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeetingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participants<T extends Meeting$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Meeting$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    preMeetingBrief<T extends Meeting$preMeetingBriefArgs<ExtArgs> = {}>(args?: Subset<T, Meeting$preMeetingBriefArgs<ExtArgs>>): Prisma__PreMeetingBriefClient<$Result.GetResult<Prisma.$PreMeetingBriefPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    gemAlerts<T extends Meeting$gemAlertsArgs<ExtArgs> = {}>(args?: Subset<T, Meeting$gemAlertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GemAlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Meeting model
   */
  interface MeetingFieldRefs {
    readonly id: FieldRef<"Meeting", 'String'>
    readonly ownerId: FieldRef<"Meeting", 'String'>
    readonly title: FieldRef<"Meeting", 'String'>
    readonly startTime: FieldRef<"Meeting", 'DateTime'>
    readonly endTime: FieldRef<"Meeting", 'DateTime'>
    readonly sourceCalendarEventId: FieldRef<"Meeting", 'String'>
    readonly platformUrl: FieldRef<"Meeting", 'String'>
    readonly createdAt: FieldRef<"Meeting", 'DateTime'>
    readonly updatedAt: FieldRef<"Meeting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Meeting findUnique
   */
  export type MeetingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting findUniqueOrThrow
   */
  export type MeetingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting findFirst
   */
  export type MeetingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meetings.
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meetings.
     */
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Meeting findFirstOrThrow
   */
  export type MeetingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meetings.
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meetings.
     */
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Meeting findMany
   */
  export type MeetingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meetings to fetch.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meetings.
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Meeting create
   */
  export type MeetingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * The data needed to create a Meeting.
     */
    data: XOR<MeetingCreateInput, MeetingUncheckedCreateInput>
  }

  /**
   * Meeting createMany
   */
  export type MeetingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Meetings.
     */
    data: MeetingCreateManyInput | MeetingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meeting createManyAndReturn
   */
  export type MeetingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * The data used to create many Meetings.
     */
    data: MeetingCreateManyInput | MeetingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meeting update
   */
  export type MeetingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * The data needed to update a Meeting.
     */
    data: XOR<MeetingUpdateInput, MeetingUncheckedUpdateInput>
    /**
     * Choose, which Meeting to update.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting updateMany
   */
  export type MeetingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Meetings.
     */
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyInput>
    /**
     * Filter which Meetings to update
     */
    where?: MeetingWhereInput
    /**
     * Limit how many Meetings to update.
     */
    limit?: number
  }

  /**
   * Meeting updateManyAndReturn
   */
  export type MeetingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * The data used to update Meetings.
     */
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyInput>
    /**
     * Filter which Meetings to update
     */
    where?: MeetingWhereInput
    /**
     * Limit how many Meetings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meeting upsert
   */
  export type MeetingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * The filter to search for the Meeting to update in case it exists.
     */
    where: MeetingWhereUniqueInput
    /**
     * In case the Meeting found by the `where` argument doesn't exist, create a new Meeting with this data.
     */
    create: XOR<MeetingCreateInput, MeetingUncheckedCreateInput>
    /**
     * In case the Meeting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeetingUpdateInput, MeetingUncheckedUpdateInput>
  }

  /**
   * Meeting delete
   */
  export type MeetingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter which Meeting to delete.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting deleteMany
   */
  export type MeetingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meetings to delete
     */
    where?: MeetingWhereInput
    /**
     * Limit how many Meetings to delete.
     */
    limit?: number
  }

  /**
   * Meeting.participants
   */
  export type Meeting$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantInclude<ExtArgs> | null
    where?: MeetingParticipantWhereInput
    orderBy?: MeetingParticipantOrderByWithRelationInput | MeetingParticipantOrderByWithRelationInput[]
    cursor?: MeetingParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingParticipantScalarFieldEnum | MeetingParticipantScalarFieldEnum[]
  }

  /**
   * Meeting.preMeetingBrief
   */
  export type Meeting$preMeetingBriefArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreMeetingBrief
     */
    select?: PreMeetingBriefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreMeetingBrief
     */
    omit?: PreMeetingBriefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreMeetingBriefInclude<ExtArgs> | null
    where?: PreMeetingBriefWhereInput
  }

  /**
   * Meeting.gemAlerts
   */
  export type Meeting$gemAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GemAlert
     */
    select?: GemAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GemAlert
     */
    omit?: GemAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GemAlertInclude<ExtArgs> | null
    where?: GemAlertWhereInput
    orderBy?: GemAlertOrderByWithRelationInput | GemAlertOrderByWithRelationInput[]
    cursor?: GemAlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GemAlertScalarFieldEnum | GemAlertScalarFieldEnum[]
  }

  /**
   * Meeting without action
   */
  export type MeetingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
  }


  /**
   * Model MeetingParticipant
   */

  export type AggregateMeetingParticipant = {
    _count: MeetingParticipantCountAggregateOutputType | null
    _min: MeetingParticipantMinAggregateOutputType | null
    _max: MeetingParticipantMaxAggregateOutputType | null
  }

  export type MeetingParticipantMinAggregateOutputType = {
    id: string | null
    meetingId: string | null
    userId: string | null
    name: string | null
    email: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MeetingParticipantMaxAggregateOutputType = {
    id: string | null
    meetingId: string | null
    userId: string | null
    name: string | null
    email: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MeetingParticipantCountAggregateOutputType = {
    id: number
    meetingId: number
    userId: number
    name: number
    email: number
    role: number
    insights: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MeetingParticipantMinAggregateInputType = {
    id?: true
    meetingId?: true
    userId?: true
    name?: true
    email?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MeetingParticipantMaxAggregateInputType = {
    id?: true
    meetingId?: true
    userId?: true
    name?: true
    email?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MeetingParticipantCountAggregateInputType = {
    id?: true
    meetingId?: true
    userId?: true
    name?: true
    email?: true
    role?: true
    insights?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MeetingParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MeetingParticipant to aggregate.
     */
    where?: MeetingParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeetingParticipants to fetch.
     */
    orderBy?: MeetingParticipantOrderByWithRelationInput | MeetingParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeetingParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeetingParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeetingParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MeetingParticipants
    **/
    _count?: true | MeetingParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeetingParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeetingParticipantMaxAggregateInputType
  }

  export type GetMeetingParticipantAggregateType<T extends MeetingParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateMeetingParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeetingParticipant[P]>
      : GetScalarType<T[P], AggregateMeetingParticipant[P]>
  }




  export type MeetingParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingParticipantWhereInput
    orderBy?: MeetingParticipantOrderByWithAggregationInput | MeetingParticipantOrderByWithAggregationInput[]
    by: MeetingParticipantScalarFieldEnum[] | MeetingParticipantScalarFieldEnum
    having?: MeetingParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeetingParticipantCountAggregateInputType | true
    _min?: MeetingParticipantMinAggregateInputType
    _max?: MeetingParticipantMaxAggregateInputType
  }

  export type MeetingParticipantGroupByOutputType = {
    id: string
    meetingId: string
    userId: string | null
    name: string | null
    email: string | null
    role: string | null
    insights: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: MeetingParticipantCountAggregateOutputType | null
    _min: MeetingParticipantMinAggregateOutputType | null
    _max: MeetingParticipantMaxAggregateOutputType | null
  }

  type GetMeetingParticipantGroupByPayload<T extends MeetingParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeetingParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeetingParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeetingParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], MeetingParticipantGroupByOutputType[P]>
        }
      >
    >


  export type MeetingParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meetingId?: boolean
    userId?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    insights?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    user?: boolean | MeetingParticipant$userArgs<ExtArgs>
  }, ExtArgs["result"]["meetingParticipant"]>

  export type MeetingParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meetingId?: boolean
    userId?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    insights?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    user?: boolean | MeetingParticipant$userArgs<ExtArgs>
  }, ExtArgs["result"]["meetingParticipant"]>

  export type MeetingParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meetingId?: boolean
    userId?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    insights?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    user?: boolean | MeetingParticipant$userArgs<ExtArgs>
  }, ExtArgs["result"]["meetingParticipant"]>

  export type MeetingParticipantSelectScalar = {
    id?: boolean
    meetingId?: boolean
    userId?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    insights?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MeetingParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "meetingId" | "userId" | "name" | "email" | "role" | "insights" | "createdAt" | "updatedAt", ExtArgs["result"]["meetingParticipant"]>
  export type MeetingParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    user?: boolean | MeetingParticipant$userArgs<ExtArgs>
  }
  export type MeetingParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    user?: boolean | MeetingParticipant$userArgs<ExtArgs>
  }
  export type MeetingParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    user?: boolean | MeetingParticipant$userArgs<ExtArgs>
  }

  export type $MeetingParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MeetingParticipant"
    objects: {
      meeting: Prisma.$MeetingPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      meetingId: string
      userId: string | null
      name: string | null
      email: string | null
      role: string | null
      insights: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["meetingParticipant"]>
    composites: {}
  }

  type MeetingParticipantGetPayload<S extends boolean | null | undefined | MeetingParticipantDefaultArgs> = $Result.GetResult<Prisma.$MeetingParticipantPayload, S>

  type MeetingParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MeetingParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeetingParticipantCountAggregateInputType | true
    }

  export interface MeetingParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MeetingParticipant'], meta: { name: 'MeetingParticipant' } }
    /**
     * Find zero or one MeetingParticipant that matches the filter.
     * @param {MeetingParticipantFindUniqueArgs} args - Arguments to find a MeetingParticipant
     * @example
     * // Get one MeetingParticipant
     * const meetingParticipant = await prisma.meetingParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeetingParticipantFindUniqueArgs>(args: SelectSubset<T, MeetingParticipantFindUniqueArgs<ExtArgs>>): Prisma__MeetingParticipantClient<$Result.GetResult<Prisma.$MeetingParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MeetingParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MeetingParticipantFindUniqueOrThrowArgs} args - Arguments to find a MeetingParticipant
     * @example
     * // Get one MeetingParticipant
     * const meetingParticipant = await prisma.meetingParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeetingParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, MeetingParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MeetingParticipantClient<$Result.GetResult<Prisma.$MeetingParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MeetingParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingParticipantFindFirstArgs} args - Arguments to find a MeetingParticipant
     * @example
     * // Get one MeetingParticipant
     * const meetingParticipant = await prisma.meetingParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeetingParticipantFindFirstArgs>(args?: SelectSubset<T, MeetingParticipantFindFirstArgs<ExtArgs>>): Prisma__MeetingParticipantClient<$Result.GetResult<Prisma.$MeetingParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MeetingParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingParticipantFindFirstOrThrowArgs} args - Arguments to find a MeetingParticipant
     * @example
     * // Get one MeetingParticipant
     * const meetingParticipant = await prisma.meetingParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeetingParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, MeetingParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__MeetingParticipantClient<$Result.GetResult<Prisma.$MeetingParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MeetingParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MeetingParticipants
     * const meetingParticipants = await prisma.meetingParticipant.findMany()
     * 
     * // Get first 10 MeetingParticipants
     * const meetingParticipants = await prisma.meetingParticipant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meetingParticipantWithIdOnly = await prisma.meetingParticipant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MeetingParticipantFindManyArgs>(args?: SelectSubset<T, MeetingParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MeetingParticipant.
     * @param {MeetingParticipantCreateArgs} args - Arguments to create a MeetingParticipant.
     * @example
     * // Create one MeetingParticipant
     * const MeetingParticipant = await prisma.meetingParticipant.create({
     *   data: {
     *     // ... data to create a MeetingParticipant
     *   }
     * })
     * 
     */
    create<T extends MeetingParticipantCreateArgs>(args: SelectSubset<T, MeetingParticipantCreateArgs<ExtArgs>>): Prisma__MeetingParticipantClient<$Result.GetResult<Prisma.$MeetingParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MeetingParticipants.
     * @param {MeetingParticipantCreateManyArgs} args - Arguments to create many MeetingParticipants.
     * @example
     * // Create many MeetingParticipants
     * const meetingParticipant = await prisma.meetingParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MeetingParticipantCreateManyArgs>(args?: SelectSubset<T, MeetingParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MeetingParticipants and returns the data saved in the database.
     * @param {MeetingParticipantCreateManyAndReturnArgs} args - Arguments to create many MeetingParticipants.
     * @example
     * // Create many MeetingParticipants
     * const meetingParticipant = await prisma.meetingParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MeetingParticipants and only return the `id`
     * const meetingParticipantWithIdOnly = await prisma.meetingParticipant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MeetingParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, MeetingParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MeetingParticipant.
     * @param {MeetingParticipantDeleteArgs} args - Arguments to delete one MeetingParticipant.
     * @example
     * // Delete one MeetingParticipant
     * const MeetingParticipant = await prisma.meetingParticipant.delete({
     *   where: {
     *     // ... filter to delete one MeetingParticipant
     *   }
     * })
     * 
     */
    delete<T extends MeetingParticipantDeleteArgs>(args: SelectSubset<T, MeetingParticipantDeleteArgs<ExtArgs>>): Prisma__MeetingParticipantClient<$Result.GetResult<Prisma.$MeetingParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MeetingParticipant.
     * @param {MeetingParticipantUpdateArgs} args - Arguments to update one MeetingParticipant.
     * @example
     * // Update one MeetingParticipant
     * const meetingParticipant = await prisma.meetingParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MeetingParticipantUpdateArgs>(args: SelectSubset<T, MeetingParticipantUpdateArgs<ExtArgs>>): Prisma__MeetingParticipantClient<$Result.GetResult<Prisma.$MeetingParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MeetingParticipants.
     * @param {MeetingParticipantDeleteManyArgs} args - Arguments to filter MeetingParticipants to delete.
     * @example
     * // Delete a few MeetingParticipants
     * const { count } = await prisma.meetingParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MeetingParticipantDeleteManyArgs>(args?: SelectSubset<T, MeetingParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MeetingParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MeetingParticipants
     * const meetingParticipant = await prisma.meetingParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MeetingParticipantUpdateManyArgs>(args: SelectSubset<T, MeetingParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MeetingParticipants and returns the data updated in the database.
     * @param {MeetingParticipantUpdateManyAndReturnArgs} args - Arguments to update many MeetingParticipants.
     * @example
     * // Update many MeetingParticipants
     * const meetingParticipant = await prisma.meetingParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MeetingParticipants and only return the `id`
     * const meetingParticipantWithIdOnly = await prisma.meetingParticipant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MeetingParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, MeetingParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MeetingParticipant.
     * @param {MeetingParticipantUpsertArgs} args - Arguments to update or create a MeetingParticipant.
     * @example
     * // Update or create a MeetingParticipant
     * const meetingParticipant = await prisma.meetingParticipant.upsert({
     *   create: {
     *     // ... data to create a MeetingParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MeetingParticipant we want to update
     *   }
     * })
     */
    upsert<T extends MeetingParticipantUpsertArgs>(args: SelectSubset<T, MeetingParticipantUpsertArgs<ExtArgs>>): Prisma__MeetingParticipantClient<$Result.GetResult<Prisma.$MeetingParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MeetingParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingParticipantCountArgs} args - Arguments to filter MeetingParticipants to count.
     * @example
     * // Count the number of MeetingParticipants
     * const count = await prisma.meetingParticipant.count({
     *   where: {
     *     // ... the filter for the MeetingParticipants we want to count
     *   }
     * })
    **/
    count<T extends MeetingParticipantCountArgs>(
      args?: Subset<T, MeetingParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeetingParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MeetingParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MeetingParticipantAggregateArgs>(args: Subset<T, MeetingParticipantAggregateArgs>): Prisma.PrismaPromise<GetMeetingParticipantAggregateType<T>>

    /**
     * Group by MeetingParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingParticipantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MeetingParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeetingParticipantGroupByArgs['orderBy'] }
        : { orderBy?: MeetingParticipantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MeetingParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeetingParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MeetingParticipant model
   */
  readonly fields: MeetingParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MeetingParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeetingParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meeting<T extends MeetingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MeetingDefaultArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends MeetingParticipant$userArgs<ExtArgs> = {}>(args?: Subset<T, MeetingParticipant$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MeetingParticipant model
   */
  interface MeetingParticipantFieldRefs {
    readonly id: FieldRef<"MeetingParticipant", 'String'>
    readonly meetingId: FieldRef<"MeetingParticipant", 'String'>
    readonly userId: FieldRef<"MeetingParticipant", 'String'>
    readonly name: FieldRef<"MeetingParticipant", 'String'>
    readonly email: FieldRef<"MeetingParticipant", 'String'>
    readonly role: FieldRef<"MeetingParticipant", 'String'>
    readonly insights: FieldRef<"MeetingParticipant", 'Json'>
    readonly createdAt: FieldRef<"MeetingParticipant", 'DateTime'>
    readonly updatedAt: FieldRef<"MeetingParticipant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MeetingParticipant findUnique
   */
  export type MeetingParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantInclude<ExtArgs> | null
    /**
     * Filter, which MeetingParticipant to fetch.
     */
    where: MeetingParticipantWhereUniqueInput
  }

  /**
   * MeetingParticipant findUniqueOrThrow
   */
  export type MeetingParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantInclude<ExtArgs> | null
    /**
     * Filter, which MeetingParticipant to fetch.
     */
    where: MeetingParticipantWhereUniqueInput
  }

  /**
   * MeetingParticipant findFirst
   */
  export type MeetingParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantInclude<ExtArgs> | null
    /**
     * Filter, which MeetingParticipant to fetch.
     */
    where?: MeetingParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeetingParticipants to fetch.
     */
    orderBy?: MeetingParticipantOrderByWithRelationInput | MeetingParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MeetingParticipants.
     */
    cursor?: MeetingParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeetingParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeetingParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MeetingParticipants.
     */
    distinct?: MeetingParticipantScalarFieldEnum | MeetingParticipantScalarFieldEnum[]
  }

  /**
   * MeetingParticipant findFirstOrThrow
   */
  export type MeetingParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantInclude<ExtArgs> | null
    /**
     * Filter, which MeetingParticipant to fetch.
     */
    where?: MeetingParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeetingParticipants to fetch.
     */
    orderBy?: MeetingParticipantOrderByWithRelationInput | MeetingParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MeetingParticipants.
     */
    cursor?: MeetingParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeetingParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeetingParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MeetingParticipants.
     */
    distinct?: MeetingParticipantScalarFieldEnum | MeetingParticipantScalarFieldEnum[]
  }

  /**
   * MeetingParticipant findMany
   */
  export type MeetingParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantInclude<ExtArgs> | null
    /**
     * Filter, which MeetingParticipants to fetch.
     */
    where?: MeetingParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MeetingParticipants to fetch.
     */
    orderBy?: MeetingParticipantOrderByWithRelationInput | MeetingParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MeetingParticipants.
     */
    cursor?: MeetingParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MeetingParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MeetingParticipants.
     */
    skip?: number
    distinct?: MeetingParticipantScalarFieldEnum | MeetingParticipantScalarFieldEnum[]
  }

  /**
   * MeetingParticipant create
   */
  export type MeetingParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a MeetingParticipant.
     */
    data: XOR<MeetingParticipantCreateInput, MeetingParticipantUncheckedCreateInput>
  }

  /**
   * MeetingParticipant createMany
   */
  export type MeetingParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MeetingParticipants.
     */
    data: MeetingParticipantCreateManyInput | MeetingParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MeetingParticipant createManyAndReturn
   */
  export type MeetingParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many MeetingParticipants.
     */
    data: MeetingParticipantCreateManyInput | MeetingParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MeetingParticipant update
   */
  export type MeetingParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a MeetingParticipant.
     */
    data: XOR<MeetingParticipantUpdateInput, MeetingParticipantUncheckedUpdateInput>
    /**
     * Choose, which MeetingParticipant to update.
     */
    where: MeetingParticipantWhereUniqueInput
  }

  /**
   * MeetingParticipant updateMany
   */
  export type MeetingParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MeetingParticipants.
     */
    data: XOR<MeetingParticipantUpdateManyMutationInput, MeetingParticipantUncheckedUpdateManyInput>
    /**
     * Filter which MeetingParticipants to update
     */
    where?: MeetingParticipantWhereInput
    /**
     * Limit how many MeetingParticipants to update.
     */
    limit?: number
  }

  /**
   * MeetingParticipant updateManyAndReturn
   */
  export type MeetingParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * The data used to update MeetingParticipants.
     */
    data: XOR<MeetingParticipantUpdateManyMutationInput, MeetingParticipantUncheckedUpdateManyInput>
    /**
     * Filter which MeetingParticipants to update
     */
    where?: MeetingParticipantWhereInput
    /**
     * Limit how many MeetingParticipants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MeetingParticipant upsert
   */
  export type MeetingParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the MeetingParticipant to update in case it exists.
     */
    where: MeetingParticipantWhereUniqueInput
    /**
     * In case the MeetingParticipant found by the `where` argument doesn't exist, create a new MeetingParticipant with this data.
     */
    create: XOR<MeetingParticipantCreateInput, MeetingParticipantUncheckedCreateInput>
    /**
     * In case the MeetingParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeetingParticipantUpdateInput, MeetingParticipantUncheckedUpdateInput>
  }

  /**
   * MeetingParticipant delete
   */
  export type MeetingParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantInclude<ExtArgs> | null
    /**
     * Filter which MeetingParticipant to delete.
     */
    where: MeetingParticipantWhereUniqueInput
  }

  /**
   * MeetingParticipant deleteMany
   */
  export type MeetingParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MeetingParticipants to delete
     */
    where?: MeetingParticipantWhereInput
    /**
     * Limit how many MeetingParticipants to delete.
     */
    limit?: number
  }

  /**
   * MeetingParticipant.user
   */
  export type MeetingParticipant$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * MeetingParticipant without action
   */
  export type MeetingParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingParticipant
     */
    select?: MeetingParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MeetingParticipant
     */
    omit?: MeetingParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingParticipantInclude<ExtArgs> | null
  }


  /**
   * Model PreMeetingBrief
   */

  export type AggregatePreMeetingBrief = {
    _count: PreMeetingBriefCountAggregateOutputType | null
    _min: PreMeetingBriefMinAggregateOutputType | null
    _max: PreMeetingBriefMaxAggregateOutputType | null
  }

  export type PreMeetingBriefMinAggregateOutputType = {
    id: string | null
    meetingId: string | null
    userId: string | null
    generatedAt: Date | null
    sentAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PreMeetingBriefMaxAggregateOutputType = {
    id: string | null
    meetingId: string | null
    userId: string | null
    generatedAt: Date | null
    sentAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PreMeetingBriefCountAggregateOutputType = {
    id: number
    meetingId: number
    userId: number
    content: number
    generatedAt: number
    sentAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PreMeetingBriefMinAggregateInputType = {
    id?: true
    meetingId?: true
    userId?: true
    generatedAt?: true
    sentAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PreMeetingBriefMaxAggregateInputType = {
    id?: true
    meetingId?: true
    userId?: true
    generatedAt?: true
    sentAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PreMeetingBriefCountAggregateInputType = {
    id?: true
    meetingId?: true
    userId?: true
    content?: true
    generatedAt?: true
    sentAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PreMeetingBriefAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PreMeetingBrief to aggregate.
     */
    where?: PreMeetingBriefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PreMeetingBriefs to fetch.
     */
    orderBy?: PreMeetingBriefOrderByWithRelationInput | PreMeetingBriefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PreMeetingBriefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PreMeetingBriefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PreMeetingBriefs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PreMeetingBriefs
    **/
    _count?: true | PreMeetingBriefCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PreMeetingBriefMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PreMeetingBriefMaxAggregateInputType
  }

  export type GetPreMeetingBriefAggregateType<T extends PreMeetingBriefAggregateArgs> = {
        [P in keyof T & keyof AggregatePreMeetingBrief]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePreMeetingBrief[P]>
      : GetScalarType<T[P], AggregatePreMeetingBrief[P]>
  }




  export type PreMeetingBriefGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PreMeetingBriefWhereInput
    orderBy?: PreMeetingBriefOrderByWithAggregationInput | PreMeetingBriefOrderByWithAggregationInput[]
    by: PreMeetingBriefScalarFieldEnum[] | PreMeetingBriefScalarFieldEnum
    having?: PreMeetingBriefScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PreMeetingBriefCountAggregateInputType | true
    _min?: PreMeetingBriefMinAggregateInputType
    _max?: PreMeetingBriefMaxAggregateInputType
  }

  export type PreMeetingBriefGroupByOutputType = {
    id: string
    meetingId: string
    userId: string
    content: JsonValue
    generatedAt: Date
    sentAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PreMeetingBriefCountAggregateOutputType | null
    _min: PreMeetingBriefMinAggregateOutputType | null
    _max: PreMeetingBriefMaxAggregateOutputType | null
  }

  type GetPreMeetingBriefGroupByPayload<T extends PreMeetingBriefGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PreMeetingBriefGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PreMeetingBriefGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PreMeetingBriefGroupByOutputType[P]>
            : GetScalarType<T[P], PreMeetingBriefGroupByOutputType[P]>
        }
      >
    >


  export type PreMeetingBriefSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meetingId?: boolean
    userId?: boolean
    content?: boolean
    generatedAt?: boolean
    sentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preMeetingBrief"]>

  export type PreMeetingBriefSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meetingId?: boolean
    userId?: boolean
    content?: boolean
    generatedAt?: boolean
    sentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preMeetingBrief"]>

  export type PreMeetingBriefSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meetingId?: boolean
    userId?: boolean
    content?: boolean
    generatedAt?: boolean
    sentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preMeetingBrief"]>

  export type PreMeetingBriefSelectScalar = {
    id?: boolean
    meetingId?: boolean
    userId?: boolean
    content?: boolean
    generatedAt?: boolean
    sentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PreMeetingBriefOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "meetingId" | "userId" | "content" | "generatedAt" | "sentAt" | "createdAt" | "updatedAt", ExtArgs["result"]["preMeetingBrief"]>
  export type PreMeetingBriefInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PreMeetingBriefIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PreMeetingBriefIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PreMeetingBriefPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PreMeetingBrief"
    objects: {
      meeting: Prisma.$MeetingPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      meetingId: string
      userId: string
      content: Prisma.JsonValue
      generatedAt: Date
      sentAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["preMeetingBrief"]>
    composites: {}
  }

  type PreMeetingBriefGetPayload<S extends boolean | null | undefined | PreMeetingBriefDefaultArgs> = $Result.GetResult<Prisma.$PreMeetingBriefPayload, S>

  type PreMeetingBriefCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PreMeetingBriefFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PreMeetingBriefCountAggregateInputType | true
    }

  export interface PreMeetingBriefDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PreMeetingBrief'], meta: { name: 'PreMeetingBrief' } }
    /**
     * Find zero or one PreMeetingBrief that matches the filter.
     * @param {PreMeetingBriefFindUniqueArgs} args - Arguments to find a PreMeetingBrief
     * @example
     * // Get one PreMeetingBrief
     * const preMeetingBrief = await prisma.preMeetingBrief.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PreMeetingBriefFindUniqueArgs>(args: SelectSubset<T, PreMeetingBriefFindUniqueArgs<ExtArgs>>): Prisma__PreMeetingBriefClient<$Result.GetResult<Prisma.$PreMeetingBriefPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PreMeetingBrief that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PreMeetingBriefFindUniqueOrThrowArgs} args - Arguments to find a PreMeetingBrief
     * @example
     * // Get one PreMeetingBrief
     * const preMeetingBrief = await prisma.preMeetingBrief.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PreMeetingBriefFindUniqueOrThrowArgs>(args: SelectSubset<T, PreMeetingBriefFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PreMeetingBriefClient<$Result.GetResult<Prisma.$PreMeetingBriefPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PreMeetingBrief that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreMeetingBriefFindFirstArgs} args - Arguments to find a PreMeetingBrief
     * @example
     * // Get one PreMeetingBrief
     * const preMeetingBrief = await prisma.preMeetingBrief.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PreMeetingBriefFindFirstArgs>(args?: SelectSubset<T, PreMeetingBriefFindFirstArgs<ExtArgs>>): Prisma__PreMeetingBriefClient<$Result.GetResult<Prisma.$PreMeetingBriefPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PreMeetingBrief that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreMeetingBriefFindFirstOrThrowArgs} args - Arguments to find a PreMeetingBrief
     * @example
     * // Get one PreMeetingBrief
     * const preMeetingBrief = await prisma.preMeetingBrief.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PreMeetingBriefFindFirstOrThrowArgs>(args?: SelectSubset<T, PreMeetingBriefFindFirstOrThrowArgs<ExtArgs>>): Prisma__PreMeetingBriefClient<$Result.GetResult<Prisma.$PreMeetingBriefPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PreMeetingBriefs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreMeetingBriefFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PreMeetingBriefs
     * const preMeetingBriefs = await prisma.preMeetingBrief.findMany()
     * 
     * // Get first 10 PreMeetingBriefs
     * const preMeetingBriefs = await prisma.preMeetingBrief.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const preMeetingBriefWithIdOnly = await prisma.preMeetingBrief.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PreMeetingBriefFindManyArgs>(args?: SelectSubset<T, PreMeetingBriefFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreMeetingBriefPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PreMeetingBrief.
     * @param {PreMeetingBriefCreateArgs} args - Arguments to create a PreMeetingBrief.
     * @example
     * // Create one PreMeetingBrief
     * const PreMeetingBrief = await prisma.preMeetingBrief.create({
     *   data: {
     *     // ... data to create a PreMeetingBrief
     *   }
     * })
     * 
     */
    create<T extends PreMeetingBriefCreateArgs>(args: SelectSubset<T, PreMeetingBriefCreateArgs<ExtArgs>>): Prisma__PreMeetingBriefClient<$Result.GetResult<Prisma.$PreMeetingBriefPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PreMeetingBriefs.
     * @param {PreMeetingBriefCreateManyArgs} args - Arguments to create many PreMeetingBriefs.
     * @example
     * // Create many PreMeetingBriefs
     * const preMeetingBrief = await prisma.preMeetingBrief.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PreMeetingBriefCreateManyArgs>(args?: SelectSubset<T, PreMeetingBriefCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PreMeetingBriefs and returns the data saved in the database.
     * @param {PreMeetingBriefCreateManyAndReturnArgs} args - Arguments to create many PreMeetingBriefs.
     * @example
     * // Create many PreMeetingBriefs
     * const preMeetingBrief = await prisma.preMeetingBrief.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PreMeetingBriefs and only return the `id`
     * const preMeetingBriefWithIdOnly = await prisma.preMeetingBrief.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PreMeetingBriefCreateManyAndReturnArgs>(args?: SelectSubset<T, PreMeetingBriefCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreMeetingBriefPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PreMeetingBrief.
     * @param {PreMeetingBriefDeleteArgs} args - Arguments to delete one PreMeetingBrief.
     * @example
     * // Delete one PreMeetingBrief
     * const PreMeetingBrief = await prisma.preMeetingBrief.delete({
     *   where: {
     *     // ... filter to delete one PreMeetingBrief
     *   }
     * })
     * 
     */
    delete<T extends PreMeetingBriefDeleteArgs>(args: SelectSubset<T, PreMeetingBriefDeleteArgs<ExtArgs>>): Prisma__PreMeetingBriefClient<$Result.GetResult<Prisma.$PreMeetingBriefPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PreMeetingBrief.
     * @param {PreMeetingBriefUpdateArgs} args - Arguments to update one PreMeetingBrief.
     * @example
     * // Update one PreMeetingBrief
     * const preMeetingBrief = await prisma.preMeetingBrief.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PreMeetingBriefUpdateArgs>(args: SelectSubset<T, PreMeetingBriefUpdateArgs<ExtArgs>>): Prisma__PreMeetingBriefClient<$Result.GetResult<Prisma.$PreMeetingBriefPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PreMeetingBriefs.
     * @param {PreMeetingBriefDeleteManyArgs} args - Arguments to filter PreMeetingBriefs to delete.
     * @example
     * // Delete a few PreMeetingBriefs
     * const { count } = await prisma.preMeetingBrief.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PreMeetingBriefDeleteManyArgs>(args?: SelectSubset<T, PreMeetingBriefDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PreMeetingBriefs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreMeetingBriefUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PreMeetingBriefs
     * const preMeetingBrief = await prisma.preMeetingBrief.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PreMeetingBriefUpdateManyArgs>(args: SelectSubset<T, PreMeetingBriefUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PreMeetingBriefs and returns the data updated in the database.
     * @param {PreMeetingBriefUpdateManyAndReturnArgs} args - Arguments to update many PreMeetingBriefs.
     * @example
     * // Update many PreMeetingBriefs
     * const preMeetingBrief = await prisma.preMeetingBrief.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PreMeetingBriefs and only return the `id`
     * const preMeetingBriefWithIdOnly = await prisma.preMeetingBrief.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PreMeetingBriefUpdateManyAndReturnArgs>(args: SelectSubset<T, PreMeetingBriefUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreMeetingBriefPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PreMeetingBrief.
     * @param {PreMeetingBriefUpsertArgs} args - Arguments to update or create a PreMeetingBrief.
     * @example
     * // Update or create a PreMeetingBrief
     * const preMeetingBrief = await prisma.preMeetingBrief.upsert({
     *   create: {
     *     // ... data to create a PreMeetingBrief
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PreMeetingBrief we want to update
     *   }
     * })
     */
    upsert<T extends PreMeetingBriefUpsertArgs>(args: SelectSubset<T, PreMeetingBriefUpsertArgs<ExtArgs>>): Prisma__PreMeetingBriefClient<$Result.GetResult<Prisma.$PreMeetingBriefPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PreMeetingBriefs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreMeetingBriefCountArgs} args - Arguments to filter PreMeetingBriefs to count.
     * @example
     * // Count the number of PreMeetingBriefs
     * const count = await prisma.preMeetingBrief.count({
     *   where: {
     *     // ... the filter for the PreMeetingBriefs we want to count
     *   }
     * })
    **/
    count<T extends PreMeetingBriefCountArgs>(
      args?: Subset<T, PreMeetingBriefCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PreMeetingBriefCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PreMeetingBrief.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreMeetingBriefAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PreMeetingBriefAggregateArgs>(args: Subset<T, PreMeetingBriefAggregateArgs>): Prisma.PrismaPromise<GetPreMeetingBriefAggregateType<T>>

    /**
     * Group by PreMeetingBrief.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreMeetingBriefGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PreMeetingBriefGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PreMeetingBriefGroupByArgs['orderBy'] }
        : { orderBy?: PreMeetingBriefGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PreMeetingBriefGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPreMeetingBriefGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PreMeetingBrief model
   */
  readonly fields: PreMeetingBriefFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PreMeetingBrief.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PreMeetingBriefClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meeting<T extends MeetingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MeetingDefaultArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PreMeetingBrief model
   */
  interface PreMeetingBriefFieldRefs {
    readonly id: FieldRef<"PreMeetingBrief", 'String'>
    readonly meetingId: FieldRef<"PreMeetingBrief", 'String'>
    readonly userId: FieldRef<"PreMeetingBrief", 'String'>
    readonly content: FieldRef<"PreMeetingBrief", 'Json'>
    readonly generatedAt: FieldRef<"PreMeetingBrief", 'DateTime'>
    readonly sentAt: FieldRef<"PreMeetingBrief", 'DateTime'>
    readonly createdAt: FieldRef<"PreMeetingBrief", 'DateTime'>
    readonly updatedAt: FieldRef<"PreMeetingBrief", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PreMeetingBrief findUnique
   */
  export type PreMeetingBriefFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreMeetingBrief
     */
    select?: PreMeetingBriefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreMeetingBrief
     */
    omit?: PreMeetingBriefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreMeetingBriefInclude<ExtArgs> | null
    /**
     * Filter, which PreMeetingBrief to fetch.
     */
    where: PreMeetingBriefWhereUniqueInput
  }

  /**
   * PreMeetingBrief findUniqueOrThrow
   */
  export type PreMeetingBriefFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreMeetingBrief
     */
    select?: PreMeetingBriefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreMeetingBrief
     */
    omit?: PreMeetingBriefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreMeetingBriefInclude<ExtArgs> | null
    /**
     * Filter, which PreMeetingBrief to fetch.
     */
    where: PreMeetingBriefWhereUniqueInput
  }

  /**
   * PreMeetingBrief findFirst
   */
  export type PreMeetingBriefFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreMeetingBrief
     */
    select?: PreMeetingBriefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreMeetingBrief
     */
    omit?: PreMeetingBriefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreMeetingBriefInclude<ExtArgs> | null
    /**
     * Filter, which PreMeetingBrief to fetch.
     */
    where?: PreMeetingBriefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PreMeetingBriefs to fetch.
     */
    orderBy?: PreMeetingBriefOrderByWithRelationInput | PreMeetingBriefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PreMeetingBriefs.
     */
    cursor?: PreMeetingBriefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PreMeetingBriefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PreMeetingBriefs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PreMeetingBriefs.
     */
    distinct?: PreMeetingBriefScalarFieldEnum | PreMeetingBriefScalarFieldEnum[]
  }

  /**
   * PreMeetingBrief findFirstOrThrow
   */
  export type PreMeetingBriefFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreMeetingBrief
     */
    select?: PreMeetingBriefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreMeetingBrief
     */
    omit?: PreMeetingBriefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreMeetingBriefInclude<ExtArgs> | null
    /**
     * Filter, which PreMeetingBrief to fetch.
     */
    where?: PreMeetingBriefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PreMeetingBriefs to fetch.
     */
    orderBy?: PreMeetingBriefOrderByWithRelationInput | PreMeetingBriefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PreMeetingBriefs.
     */
    cursor?: PreMeetingBriefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PreMeetingBriefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PreMeetingBriefs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PreMeetingBriefs.
     */
    distinct?: PreMeetingBriefScalarFieldEnum | PreMeetingBriefScalarFieldEnum[]
  }

  /**
   * PreMeetingBrief findMany
   */
  export type PreMeetingBriefFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreMeetingBrief
     */
    select?: PreMeetingBriefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreMeetingBrief
     */
    omit?: PreMeetingBriefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreMeetingBriefInclude<ExtArgs> | null
    /**
     * Filter, which PreMeetingBriefs to fetch.
     */
    where?: PreMeetingBriefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PreMeetingBriefs to fetch.
     */
    orderBy?: PreMeetingBriefOrderByWithRelationInput | PreMeetingBriefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PreMeetingBriefs.
     */
    cursor?: PreMeetingBriefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PreMeetingBriefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PreMeetingBriefs.
     */
    skip?: number
    distinct?: PreMeetingBriefScalarFieldEnum | PreMeetingBriefScalarFieldEnum[]
  }

  /**
   * PreMeetingBrief create
   */
  export type PreMeetingBriefCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreMeetingBrief
     */
    select?: PreMeetingBriefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreMeetingBrief
     */
    omit?: PreMeetingBriefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreMeetingBriefInclude<ExtArgs> | null
    /**
     * The data needed to create a PreMeetingBrief.
     */
    data: XOR<PreMeetingBriefCreateInput, PreMeetingBriefUncheckedCreateInput>
  }

  /**
   * PreMeetingBrief createMany
   */
  export type PreMeetingBriefCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PreMeetingBriefs.
     */
    data: PreMeetingBriefCreateManyInput | PreMeetingBriefCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PreMeetingBrief createManyAndReturn
   */
  export type PreMeetingBriefCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreMeetingBrief
     */
    select?: PreMeetingBriefSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PreMeetingBrief
     */
    omit?: PreMeetingBriefOmit<ExtArgs> | null
    /**
     * The data used to create many PreMeetingBriefs.
     */
    data: PreMeetingBriefCreateManyInput | PreMeetingBriefCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreMeetingBriefIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PreMeetingBrief update
   */
  export type PreMeetingBriefUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreMeetingBrief
     */
    select?: PreMeetingBriefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreMeetingBrief
     */
    omit?: PreMeetingBriefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreMeetingBriefInclude<ExtArgs> | null
    /**
     * The data needed to update a PreMeetingBrief.
     */
    data: XOR<PreMeetingBriefUpdateInput, PreMeetingBriefUncheckedUpdateInput>
    /**
     * Choose, which PreMeetingBrief to update.
     */
    where: PreMeetingBriefWhereUniqueInput
  }

  /**
   * PreMeetingBrief updateMany
   */
  export type PreMeetingBriefUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PreMeetingBriefs.
     */
    data: XOR<PreMeetingBriefUpdateManyMutationInput, PreMeetingBriefUncheckedUpdateManyInput>
    /**
     * Filter which PreMeetingBriefs to update
     */
    where?: PreMeetingBriefWhereInput
    /**
     * Limit how many PreMeetingBriefs to update.
     */
    limit?: number
  }

  /**
   * PreMeetingBrief updateManyAndReturn
   */
  export type PreMeetingBriefUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreMeetingBrief
     */
    select?: PreMeetingBriefSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PreMeetingBrief
     */
    omit?: PreMeetingBriefOmit<ExtArgs> | null
    /**
     * The data used to update PreMeetingBriefs.
     */
    data: XOR<PreMeetingBriefUpdateManyMutationInput, PreMeetingBriefUncheckedUpdateManyInput>
    /**
     * Filter which PreMeetingBriefs to update
     */
    where?: PreMeetingBriefWhereInput
    /**
     * Limit how many PreMeetingBriefs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreMeetingBriefIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PreMeetingBrief upsert
   */
  export type PreMeetingBriefUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreMeetingBrief
     */
    select?: PreMeetingBriefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreMeetingBrief
     */
    omit?: PreMeetingBriefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreMeetingBriefInclude<ExtArgs> | null
    /**
     * The filter to search for the PreMeetingBrief to update in case it exists.
     */
    where: PreMeetingBriefWhereUniqueInput
    /**
     * In case the PreMeetingBrief found by the `where` argument doesn't exist, create a new PreMeetingBrief with this data.
     */
    create: XOR<PreMeetingBriefCreateInput, PreMeetingBriefUncheckedCreateInput>
    /**
     * In case the PreMeetingBrief was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PreMeetingBriefUpdateInput, PreMeetingBriefUncheckedUpdateInput>
  }

  /**
   * PreMeetingBrief delete
   */
  export type PreMeetingBriefDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreMeetingBrief
     */
    select?: PreMeetingBriefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreMeetingBrief
     */
    omit?: PreMeetingBriefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreMeetingBriefInclude<ExtArgs> | null
    /**
     * Filter which PreMeetingBrief to delete.
     */
    where: PreMeetingBriefWhereUniqueInput
  }

  /**
   * PreMeetingBrief deleteMany
   */
  export type PreMeetingBriefDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PreMeetingBriefs to delete
     */
    where?: PreMeetingBriefWhereInput
    /**
     * Limit how many PreMeetingBriefs to delete.
     */
    limit?: number
  }

  /**
   * PreMeetingBrief without action
   */
  export type PreMeetingBriefDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreMeetingBrief
     */
    select?: PreMeetingBriefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PreMeetingBrief
     */
    omit?: PreMeetingBriefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreMeetingBriefInclude<ExtArgs> | null
  }


  /**
   * Model GemAlert
   */

  export type AggregateGemAlert = {
    _count: GemAlertCountAggregateOutputType | null
    _min: GemAlertMinAggregateOutputType | null
    _max: GemAlertMaxAggregateOutputType | null
  }

  export type GemAlertMinAggregateOutputType = {
    id: string | null
    meetingId: string | null
    userId: string | null
    timestamp: Date | null
    trigger: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GemAlertMaxAggregateOutputType = {
    id: string | null
    meetingId: string | null
    userId: string | null
    timestamp: Date | null
    trigger: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GemAlertCountAggregateOutputType = {
    id: number
    meetingId: number
    userId: number
    timestamp: number
    trigger: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GemAlertMinAggregateInputType = {
    id?: true
    meetingId?: true
    userId?: true
    timestamp?: true
    trigger?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GemAlertMaxAggregateInputType = {
    id?: true
    meetingId?: true
    userId?: true
    timestamp?: true
    trigger?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GemAlertCountAggregateInputType = {
    id?: true
    meetingId?: true
    userId?: true
    timestamp?: true
    trigger?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GemAlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GemAlert to aggregate.
     */
    where?: GemAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GemAlerts to fetch.
     */
    orderBy?: GemAlertOrderByWithRelationInput | GemAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GemAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GemAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GemAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GemAlerts
    **/
    _count?: true | GemAlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GemAlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GemAlertMaxAggregateInputType
  }

  export type GetGemAlertAggregateType<T extends GemAlertAggregateArgs> = {
        [P in keyof T & keyof AggregateGemAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGemAlert[P]>
      : GetScalarType<T[P], AggregateGemAlert[P]>
  }




  export type GemAlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GemAlertWhereInput
    orderBy?: GemAlertOrderByWithAggregationInput | GemAlertOrderByWithAggregationInput[]
    by: GemAlertScalarFieldEnum[] | GemAlertScalarFieldEnum
    having?: GemAlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GemAlertCountAggregateInputType | true
    _min?: GemAlertMinAggregateInputType
    _max?: GemAlertMaxAggregateInputType
  }

  export type GemAlertGroupByOutputType = {
    id: string
    meetingId: string
    userId: string
    timestamp: Date
    trigger: string | null
    content: string
    createdAt: Date
    updatedAt: Date
    _count: GemAlertCountAggregateOutputType | null
    _min: GemAlertMinAggregateOutputType | null
    _max: GemAlertMaxAggregateOutputType | null
  }

  type GetGemAlertGroupByPayload<T extends GemAlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GemAlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GemAlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GemAlertGroupByOutputType[P]>
            : GetScalarType<T[P], GemAlertGroupByOutputType[P]>
        }
      >
    >


  export type GemAlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meetingId?: boolean
    userId?: boolean
    timestamp?: boolean
    trigger?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    userFeedback?: boolean | GemAlert$userFeedbackArgs<ExtArgs>
  }, ExtArgs["result"]["gemAlert"]>

  export type GemAlertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meetingId?: boolean
    userId?: boolean
    timestamp?: boolean
    trigger?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gemAlert"]>

  export type GemAlertSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    meetingId?: boolean
    userId?: boolean
    timestamp?: boolean
    trigger?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gemAlert"]>

  export type GemAlertSelectScalar = {
    id?: boolean
    meetingId?: boolean
    userId?: boolean
    timestamp?: boolean
    trigger?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GemAlertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "meetingId" | "userId" | "timestamp" | "trigger" | "content" | "createdAt" | "updatedAt", ExtArgs["result"]["gemAlert"]>
  export type GemAlertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    userFeedback?: boolean | GemAlert$userFeedbackArgs<ExtArgs>
  }
  export type GemAlertIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GemAlertIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GemAlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GemAlert"
    objects: {
      meeting: Prisma.$MeetingPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      userFeedback: Prisma.$UserFeedbackPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      meetingId: string
      userId: string
      timestamp: Date
      trigger: string | null
      content: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gemAlert"]>
    composites: {}
  }

  type GemAlertGetPayload<S extends boolean | null | undefined | GemAlertDefaultArgs> = $Result.GetResult<Prisma.$GemAlertPayload, S>

  type GemAlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GemAlertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GemAlertCountAggregateInputType | true
    }

  export interface GemAlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GemAlert'], meta: { name: 'GemAlert' } }
    /**
     * Find zero or one GemAlert that matches the filter.
     * @param {GemAlertFindUniqueArgs} args - Arguments to find a GemAlert
     * @example
     * // Get one GemAlert
     * const gemAlert = await prisma.gemAlert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GemAlertFindUniqueArgs>(args: SelectSubset<T, GemAlertFindUniqueArgs<ExtArgs>>): Prisma__GemAlertClient<$Result.GetResult<Prisma.$GemAlertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GemAlert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GemAlertFindUniqueOrThrowArgs} args - Arguments to find a GemAlert
     * @example
     * // Get one GemAlert
     * const gemAlert = await prisma.gemAlert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GemAlertFindUniqueOrThrowArgs>(args: SelectSubset<T, GemAlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GemAlertClient<$Result.GetResult<Prisma.$GemAlertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GemAlert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GemAlertFindFirstArgs} args - Arguments to find a GemAlert
     * @example
     * // Get one GemAlert
     * const gemAlert = await prisma.gemAlert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GemAlertFindFirstArgs>(args?: SelectSubset<T, GemAlertFindFirstArgs<ExtArgs>>): Prisma__GemAlertClient<$Result.GetResult<Prisma.$GemAlertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GemAlert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GemAlertFindFirstOrThrowArgs} args - Arguments to find a GemAlert
     * @example
     * // Get one GemAlert
     * const gemAlert = await prisma.gemAlert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GemAlertFindFirstOrThrowArgs>(args?: SelectSubset<T, GemAlertFindFirstOrThrowArgs<ExtArgs>>): Prisma__GemAlertClient<$Result.GetResult<Prisma.$GemAlertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GemAlerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GemAlertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GemAlerts
     * const gemAlerts = await prisma.gemAlert.findMany()
     * 
     * // Get first 10 GemAlerts
     * const gemAlerts = await prisma.gemAlert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gemAlertWithIdOnly = await prisma.gemAlert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GemAlertFindManyArgs>(args?: SelectSubset<T, GemAlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GemAlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GemAlert.
     * @param {GemAlertCreateArgs} args - Arguments to create a GemAlert.
     * @example
     * // Create one GemAlert
     * const GemAlert = await prisma.gemAlert.create({
     *   data: {
     *     // ... data to create a GemAlert
     *   }
     * })
     * 
     */
    create<T extends GemAlertCreateArgs>(args: SelectSubset<T, GemAlertCreateArgs<ExtArgs>>): Prisma__GemAlertClient<$Result.GetResult<Prisma.$GemAlertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GemAlerts.
     * @param {GemAlertCreateManyArgs} args - Arguments to create many GemAlerts.
     * @example
     * // Create many GemAlerts
     * const gemAlert = await prisma.gemAlert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GemAlertCreateManyArgs>(args?: SelectSubset<T, GemAlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GemAlerts and returns the data saved in the database.
     * @param {GemAlertCreateManyAndReturnArgs} args - Arguments to create many GemAlerts.
     * @example
     * // Create many GemAlerts
     * const gemAlert = await prisma.gemAlert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GemAlerts and only return the `id`
     * const gemAlertWithIdOnly = await prisma.gemAlert.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GemAlertCreateManyAndReturnArgs>(args?: SelectSubset<T, GemAlertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GemAlertPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GemAlert.
     * @param {GemAlertDeleteArgs} args - Arguments to delete one GemAlert.
     * @example
     * // Delete one GemAlert
     * const GemAlert = await prisma.gemAlert.delete({
     *   where: {
     *     // ... filter to delete one GemAlert
     *   }
     * })
     * 
     */
    delete<T extends GemAlertDeleteArgs>(args: SelectSubset<T, GemAlertDeleteArgs<ExtArgs>>): Prisma__GemAlertClient<$Result.GetResult<Prisma.$GemAlertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GemAlert.
     * @param {GemAlertUpdateArgs} args - Arguments to update one GemAlert.
     * @example
     * // Update one GemAlert
     * const gemAlert = await prisma.gemAlert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GemAlertUpdateArgs>(args: SelectSubset<T, GemAlertUpdateArgs<ExtArgs>>): Prisma__GemAlertClient<$Result.GetResult<Prisma.$GemAlertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GemAlerts.
     * @param {GemAlertDeleteManyArgs} args - Arguments to filter GemAlerts to delete.
     * @example
     * // Delete a few GemAlerts
     * const { count } = await prisma.gemAlert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GemAlertDeleteManyArgs>(args?: SelectSubset<T, GemAlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GemAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GemAlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GemAlerts
     * const gemAlert = await prisma.gemAlert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GemAlertUpdateManyArgs>(args: SelectSubset<T, GemAlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GemAlerts and returns the data updated in the database.
     * @param {GemAlertUpdateManyAndReturnArgs} args - Arguments to update many GemAlerts.
     * @example
     * // Update many GemAlerts
     * const gemAlert = await prisma.gemAlert.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GemAlerts and only return the `id`
     * const gemAlertWithIdOnly = await prisma.gemAlert.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GemAlertUpdateManyAndReturnArgs>(args: SelectSubset<T, GemAlertUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GemAlertPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GemAlert.
     * @param {GemAlertUpsertArgs} args - Arguments to update or create a GemAlert.
     * @example
     * // Update or create a GemAlert
     * const gemAlert = await prisma.gemAlert.upsert({
     *   create: {
     *     // ... data to create a GemAlert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GemAlert we want to update
     *   }
     * })
     */
    upsert<T extends GemAlertUpsertArgs>(args: SelectSubset<T, GemAlertUpsertArgs<ExtArgs>>): Prisma__GemAlertClient<$Result.GetResult<Prisma.$GemAlertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GemAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GemAlertCountArgs} args - Arguments to filter GemAlerts to count.
     * @example
     * // Count the number of GemAlerts
     * const count = await prisma.gemAlert.count({
     *   where: {
     *     // ... the filter for the GemAlerts we want to count
     *   }
     * })
    **/
    count<T extends GemAlertCountArgs>(
      args?: Subset<T, GemAlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GemAlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GemAlert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GemAlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GemAlertAggregateArgs>(args: Subset<T, GemAlertAggregateArgs>): Prisma.PrismaPromise<GetGemAlertAggregateType<T>>

    /**
     * Group by GemAlert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GemAlertGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GemAlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GemAlertGroupByArgs['orderBy'] }
        : { orderBy?: GemAlertGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GemAlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGemAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GemAlert model
   */
  readonly fields: GemAlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GemAlert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GemAlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meeting<T extends MeetingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MeetingDefaultArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userFeedback<T extends GemAlert$userFeedbackArgs<ExtArgs> = {}>(args?: Subset<T, GemAlert$userFeedbackArgs<ExtArgs>>): Prisma__UserFeedbackClient<$Result.GetResult<Prisma.$UserFeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GemAlert model
   */
  interface GemAlertFieldRefs {
    readonly id: FieldRef<"GemAlert", 'String'>
    readonly meetingId: FieldRef<"GemAlert", 'String'>
    readonly userId: FieldRef<"GemAlert", 'String'>
    readonly timestamp: FieldRef<"GemAlert", 'DateTime'>
    readonly trigger: FieldRef<"GemAlert", 'String'>
    readonly content: FieldRef<"GemAlert", 'String'>
    readonly createdAt: FieldRef<"GemAlert", 'DateTime'>
    readonly updatedAt: FieldRef<"GemAlert", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GemAlert findUnique
   */
  export type GemAlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GemAlert
     */
    select?: GemAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GemAlert
     */
    omit?: GemAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GemAlertInclude<ExtArgs> | null
    /**
     * Filter, which GemAlert to fetch.
     */
    where: GemAlertWhereUniqueInput
  }

  /**
   * GemAlert findUniqueOrThrow
   */
  export type GemAlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GemAlert
     */
    select?: GemAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GemAlert
     */
    omit?: GemAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GemAlertInclude<ExtArgs> | null
    /**
     * Filter, which GemAlert to fetch.
     */
    where: GemAlertWhereUniqueInput
  }

  /**
   * GemAlert findFirst
   */
  export type GemAlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GemAlert
     */
    select?: GemAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GemAlert
     */
    omit?: GemAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GemAlertInclude<ExtArgs> | null
    /**
     * Filter, which GemAlert to fetch.
     */
    where?: GemAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GemAlerts to fetch.
     */
    orderBy?: GemAlertOrderByWithRelationInput | GemAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GemAlerts.
     */
    cursor?: GemAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GemAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GemAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GemAlerts.
     */
    distinct?: GemAlertScalarFieldEnum | GemAlertScalarFieldEnum[]
  }

  /**
   * GemAlert findFirstOrThrow
   */
  export type GemAlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GemAlert
     */
    select?: GemAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GemAlert
     */
    omit?: GemAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GemAlertInclude<ExtArgs> | null
    /**
     * Filter, which GemAlert to fetch.
     */
    where?: GemAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GemAlerts to fetch.
     */
    orderBy?: GemAlertOrderByWithRelationInput | GemAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GemAlerts.
     */
    cursor?: GemAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GemAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GemAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GemAlerts.
     */
    distinct?: GemAlertScalarFieldEnum | GemAlertScalarFieldEnum[]
  }

  /**
   * GemAlert findMany
   */
  export type GemAlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GemAlert
     */
    select?: GemAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GemAlert
     */
    omit?: GemAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GemAlertInclude<ExtArgs> | null
    /**
     * Filter, which GemAlerts to fetch.
     */
    where?: GemAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GemAlerts to fetch.
     */
    orderBy?: GemAlertOrderByWithRelationInput | GemAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GemAlerts.
     */
    cursor?: GemAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GemAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GemAlerts.
     */
    skip?: number
    distinct?: GemAlertScalarFieldEnum | GemAlertScalarFieldEnum[]
  }

  /**
   * GemAlert create
   */
  export type GemAlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GemAlert
     */
    select?: GemAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GemAlert
     */
    omit?: GemAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GemAlertInclude<ExtArgs> | null
    /**
     * The data needed to create a GemAlert.
     */
    data: XOR<GemAlertCreateInput, GemAlertUncheckedCreateInput>
  }

  /**
   * GemAlert createMany
   */
  export type GemAlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GemAlerts.
     */
    data: GemAlertCreateManyInput | GemAlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GemAlert createManyAndReturn
   */
  export type GemAlertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GemAlert
     */
    select?: GemAlertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GemAlert
     */
    omit?: GemAlertOmit<ExtArgs> | null
    /**
     * The data used to create many GemAlerts.
     */
    data: GemAlertCreateManyInput | GemAlertCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GemAlertIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GemAlert update
   */
  export type GemAlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GemAlert
     */
    select?: GemAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GemAlert
     */
    omit?: GemAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GemAlertInclude<ExtArgs> | null
    /**
     * The data needed to update a GemAlert.
     */
    data: XOR<GemAlertUpdateInput, GemAlertUncheckedUpdateInput>
    /**
     * Choose, which GemAlert to update.
     */
    where: GemAlertWhereUniqueInput
  }

  /**
   * GemAlert updateMany
   */
  export type GemAlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GemAlerts.
     */
    data: XOR<GemAlertUpdateManyMutationInput, GemAlertUncheckedUpdateManyInput>
    /**
     * Filter which GemAlerts to update
     */
    where?: GemAlertWhereInput
    /**
     * Limit how many GemAlerts to update.
     */
    limit?: number
  }

  /**
   * GemAlert updateManyAndReturn
   */
  export type GemAlertUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GemAlert
     */
    select?: GemAlertSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GemAlert
     */
    omit?: GemAlertOmit<ExtArgs> | null
    /**
     * The data used to update GemAlerts.
     */
    data: XOR<GemAlertUpdateManyMutationInput, GemAlertUncheckedUpdateManyInput>
    /**
     * Filter which GemAlerts to update
     */
    where?: GemAlertWhereInput
    /**
     * Limit how many GemAlerts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GemAlertIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GemAlert upsert
   */
  export type GemAlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GemAlert
     */
    select?: GemAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GemAlert
     */
    omit?: GemAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GemAlertInclude<ExtArgs> | null
    /**
     * The filter to search for the GemAlert to update in case it exists.
     */
    where: GemAlertWhereUniqueInput
    /**
     * In case the GemAlert found by the `where` argument doesn't exist, create a new GemAlert with this data.
     */
    create: XOR<GemAlertCreateInput, GemAlertUncheckedCreateInput>
    /**
     * In case the GemAlert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GemAlertUpdateInput, GemAlertUncheckedUpdateInput>
  }

  /**
   * GemAlert delete
   */
  export type GemAlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GemAlert
     */
    select?: GemAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GemAlert
     */
    omit?: GemAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GemAlertInclude<ExtArgs> | null
    /**
     * Filter which GemAlert to delete.
     */
    where: GemAlertWhereUniqueInput
  }

  /**
   * GemAlert deleteMany
   */
  export type GemAlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GemAlerts to delete
     */
    where?: GemAlertWhereInput
    /**
     * Limit how many GemAlerts to delete.
     */
    limit?: number
  }

  /**
   * GemAlert.userFeedback
   */
  export type GemAlert$userFeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFeedback
     */
    select?: UserFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFeedback
     */
    omit?: UserFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFeedbackInclude<ExtArgs> | null
    where?: UserFeedbackWhereInput
  }

  /**
   * GemAlert without action
   */
  export type GemAlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GemAlert
     */
    select?: GemAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GemAlert
     */
    omit?: GemAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GemAlertInclude<ExtArgs> | null
  }


  /**
   * Model UserFeedback
   */

  export type AggregateUserFeedback = {
    _count: UserFeedbackCountAggregateOutputType | null
    _min: UserFeedbackMinAggregateOutputType | null
    _max: UserFeedbackMaxAggregateOutputType | null
  }

  export type UserFeedbackMinAggregateOutputType = {
    id: string | null
    userId: string | null
    gemAlertId: string | null
    rating: $Enums.FeedbackRating | null
    comment: string | null
    createdAt: Date | null
  }

  export type UserFeedbackMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    gemAlertId: string | null
    rating: $Enums.FeedbackRating | null
    comment: string | null
    createdAt: Date | null
  }

  export type UserFeedbackCountAggregateOutputType = {
    id: number
    userId: number
    gemAlertId: number
    rating: number
    comment: number
    createdAt: number
    _all: number
  }


  export type UserFeedbackMinAggregateInputType = {
    id?: true
    userId?: true
    gemAlertId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type UserFeedbackMaxAggregateInputType = {
    id?: true
    userId?: true
    gemAlertId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type UserFeedbackCountAggregateInputType = {
    id?: true
    userId?: true
    gemAlertId?: true
    rating?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type UserFeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFeedback to aggregate.
     */
    where?: UserFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFeedbacks to fetch.
     */
    orderBy?: UserFeedbackOrderByWithRelationInput | UserFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserFeedbacks
    **/
    _count?: true | UserFeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserFeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserFeedbackMaxAggregateInputType
  }

  export type GetUserFeedbackAggregateType<T extends UserFeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateUserFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserFeedback[P]>
      : GetScalarType<T[P], AggregateUserFeedback[P]>
  }




  export type UserFeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFeedbackWhereInput
    orderBy?: UserFeedbackOrderByWithAggregationInput | UserFeedbackOrderByWithAggregationInput[]
    by: UserFeedbackScalarFieldEnum[] | UserFeedbackScalarFieldEnum
    having?: UserFeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserFeedbackCountAggregateInputType | true
    _min?: UserFeedbackMinAggregateInputType
    _max?: UserFeedbackMaxAggregateInputType
  }

  export type UserFeedbackGroupByOutputType = {
    id: string
    userId: string
    gemAlertId: string | null
    rating: $Enums.FeedbackRating
    comment: string | null
    createdAt: Date
    _count: UserFeedbackCountAggregateOutputType | null
    _min: UserFeedbackMinAggregateOutputType | null
    _max: UserFeedbackMaxAggregateOutputType | null
  }

  type GetUserFeedbackGroupByPayload<T extends UserFeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserFeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserFeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserFeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], UserFeedbackGroupByOutputType[P]>
        }
      >
    >


  export type UserFeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gemAlertId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    gemAlert?: boolean | UserFeedback$gemAlertArgs<ExtArgs>
  }, ExtArgs["result"]["userFeedback"]>

  export type UserFeedbackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gemAlertId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    gemAlert?: boolean | UserFeedback$gemAlertArgs<ExtArgs>
  }, ExtArgs["result"]["userFeedback"]>

  export type UserFeedbackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    gemAlertId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    gemAlert?: boolean | UserFeedback$gemAlertArgs<ExtArgs>
  }, ExtArgs["result"]["userFeedback"]>

  export type UserFeedbackSelectScalar = {
    id?: boolean
    userId?: boolean
    gemAlertId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type UserFeedbackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "gemAlertId" | "rating" | "comment" | "createdAt", ExtArgs["result"]["userFeedback"]>
  export type UserFeedbackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    gemAlert?: boolean | UserFeedback$gemAlertArgs<ExtArgs>
  }
  export type UserFeedbackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    gemAlert?: boolean | UserFeedback$gemAlertArgs<ExtArgs>
  }
  export type UserFeedbackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    gemAlert?: boolean | UserFeedback$gemAlertArgs<ExtArgs>
  }

  export type $UserFeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserFeedback"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      gemAlert: Prisma.$GemAlertPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      gemAlertId: string | null
      rating: $Enums.FeedbackRating
      comment: string | null
      createdAt: Date
    }, ExtArgs["result"]["userFeedback"]>
    composites: {}
  }

  type UserFeedbackGetPayload<S extends boolean | null | undefined | UserFeedbackDefaultArgs> = $Result.GetResult<Prisma.$UserFeedbackPayload, S>

  type UserFeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFeedbackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserFeedbackCountAggregateInputType | true
    }

  export interface UserFeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserFeedback'], meta: { name: 'UserFeedback' } }
    /**
     * Find zero or one UserFeedback that matches the filter.
     * @param {UserFeedbackFindUniqueArgs} args - Arguments to find a UserFeedback
     * @example
     * // Get one UserFeedback
     * const userFeedback = await prisma.userFeedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFeedbackFindUniqueArgs>(args: SelectSubset<T, UserFeedbackFindUniqueArgs<ExtArgs>>): Prisma__UserFeedbackClient<$Result.GetResult<Prisma.$UserFeedbackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserFeedback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFeedbackFindUniqueOrThrowArgs} args - Arguments to find a UserFeedback
     * @example
     * // Get one UserFeedback
     * const userFeedback = await prisma.userFeedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFeedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserFeedbackClient<$Result.GetResult<Prisma.$UserFeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFeedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFeedbackFindFirstArgs} args - Arguments to find a UserFeedback
     * @example
     * // Get one UserFeedback
     * const userFeedback = await prisma.userFeedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFeedbackFindFirstArgs>(args?: SelectSubset<T, UserFeedbackFindFirstArgs<ExtArgs>>): Prisma__UserFeedbackClient<$Result.GetResult<Prisma.$UserFeedbackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFeedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFeedbackFindFirstOrThrowArgs} args - Arguments to find a UserFeedback
     * @example
     * // Get one UserFeedback
     * const userFeedback = await prisma.userFeedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFeedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserFeedbackClient<$Result.GetResult<Prisma.$UserFeedbackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserFeedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserFeedbacks
     * const userFeedbacks = await prisma.userFeedback.findMany()
     * 
     * // Get first 10 UserFeedbacks
     * const userFeedbacks = await prisma.userFeedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userFeedbackWithIdOnly = await prisma.userFeedback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFeedbackFindManyArgs>(args?: SelectSubset<T, UserFeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserFeedback.
     * @param {UserFeedbackCreateArgs} args - Arguments to create a UserFeedback.
     * @example
     * // Create one UserFeedback
     * const UserFeedback = await prisma.userFeedback.create({
     *   data: {
     *     // ... data to create a UserFeedback
     *   }
     * })
     * 
     */
    create<T extends UserFeedbackCreateArgs>(args: SelectSubset<T, UserFeedbackCreateArgs<ExtArgs>>): Prisma__UserFeedbackClient<$Result.GetResult<Prisma.$UserFeedbackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserFeedbacks.
     * @param {UserFeedbackCreateManyArgs} args - Arguments to create many UserFeedbacks.
     * @example
     * // Create many UserFeedbacks
     * const userFeedback = await prisma.userFeedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserFeedbackCreateManyArgs>(args?: SelectSubset<T, UserFeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserFeedbacks and returns the data saved in the database.
     * @param {UserFeedbackCreateManyAndReturnArgs} args - Arguments to create many UserFeedbacks.
     * @example
     * // Create many UserFeedbacks
     * const userFeedback = await prisma.userFeedback.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserFeedbacks and only return the `id`
     * const userFeedbackWithIdOnly = await prisma.userFeedback.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserFeedbackCreateManyAndReturnArgs>(args?: SelectSubset<T, UserFeedbackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFeedbackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserFeedback.
     * @param {UserFeedbackDeleteArgs} args - Arguments to delete one UserFeedback.
     * @example
     * // Delete one UserFeedback
     * const UserFeedback = await prisma.userFeedback.delete({
     *   where: {
     *     // ... filter to delete one UserFeedback
     *   }
     * })
     * 
     */
    delete<T extends UserFeedbackDeleteArgs>(args: SelectSubset<T, UserFeedbackDeleteArgs<ExtArgs>>): Prisma__UserFeedbackClient<$Result.GetResult<Prisma.$UserFeedbackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserFeedback.
     * @param {UserFeedbackUpdateArgs} args - Arguments to update one UserFeedback.
     * @example
     * // Update one UserFeedback
     * const userFeedback = await prisma.userFeedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserFeedbackUpdateArgs>(args: SelectSubset<T, UserFeedbackUpdateArgs<ExtArgs>>): Prisma__UserFeedbackClient<$Result.GetResult<Prisma.$UserFeedbackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserFeedbacks.
     * @param {UserFeedbackDeleteManyArgs} args - Arguments to filter UserFeedbacks to delete.
     * @example
     * // Delete a few UserFeedbacks
     * const { count } = await prisma.userFeedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserFeedbackDeleteManyArgs>(args?: SelectSubset<T, UserFeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFeedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserFeedbacks
     * const userFeedback = await prisma.userFeedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserFeedbackUpdateManyArgs>(args: SelectSubset<T, UserFeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFeedbacks and returns the data updated in the database.
     * @param {UserFeedbackUpdateManyAndReturnArgs} args - Arguments to update many UserFeedbacks.
     * @example
     * // Update many UserFeedbacks
     * const userFeedback = await prisma.userFeedback.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserFeedbacks and only return the `id`
     * const userFeedbackWithIdOnly = await prisma.userFeedback.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserFeedbackUpdateManyAndReturnArgs>(args: SelectSubset<T, UserFeedbackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFeedbackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserFeedback.
     * @param {UserFeedbackUpsertArgs} args - Arguments to update or create a UserFeedback.
     * @example
     * // Update or create a UserFeedback
     * const userFeedback = await prisma.userFeedback.upsert({
     *   create: {
     *     // ... data to create a UserFeedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserFeedback we want to update
     *   }
     * })
     */
    upsert<T extends UserFeedbackUpsertArgs>(args: SelectSubset<T, UserFeedbackUpsertArgs<ExtArgs>>): Prisma__UserFeedbackClient<$Result.GetResult<Prisma.$UserFeedbackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserFeedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFeedbackCountArgs} args - Arguments to filter UserFeedbacks to count.
     * @example
     * // Count the number of UserFeedbacks
     * const count = await prisma.userFeedback.count({
     *   where: {
     *     // ... the filter for the UserFeedbacks we want to count
     *   }
     * })
    **/
    count<T extends UserFeedbackCountArgs>(
      args?: Subset<T, UserFeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserFeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserFeedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserFeedbackAggregateArgs>(args: Subset<T, UserFeedbackAggregateArgs>): Prisma.PrismaPromise<GetUserFeedbackAggregateType<T>>

    /**
     * Group by UserFeedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFeedbackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserFeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserFeedbackGroupByArgs['orderBy'] }
        : { orderBy?: UserFeedbackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserFeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserFeedback model
   */
  readonly fields: UserFeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserFeedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserFeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    gemAlert<T extends UserFeedback$gemAlertArgs<ExtArgs> = {}>(args?: Subset<T, UserFeedback$gemAlertArgs<ExtArgs>>): Prisma__GemAlertClient<$Result.GetResult<Prisma.$GemAlertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserFeedback model
   */
  interface UserFeedbackFieldRefs {
    readonly id: FieldRef<"UserFeedback", 'String'>
    readonly userId: FieldRef<"UserFeedback", 'String'>
    readonly gemAlertId: FieldRef<"UserFeedback", 'String'>
    readonly rating: FieldRef<"UserFeedback", 'FeedbackRating'>
    readonly comment: FieldRef<"UserFeedback", 'String'>
    readonly createdAt: FieldRef<"UserFeedback", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserFeedback findUnique
   */
  export type UserFeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFeedback
     */
    select?: UserFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFeedback
     */
    omit?: UserFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which UserFeedback to fetch.
     */
    where: UserFeedbackWhereUniqueInput
  }

  /**
   * UserFeedback findUniqueOrThrow
   */
  export type UserFeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFeedback
     */
    select?: UserFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFeedback
     */
    omit?: UserFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which UserFeedback to fetch.
     */
    where: UserFeedbackWhereUniqueInput
  }

  /**
   * UserFeedback findFirst
   */
  export type UserFeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFeedback
     */
    select?: UserFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFeedback
     */
    omit?: UserFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which UserFeedback to fetch.
     */
    where?: UserFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFeedbacks to fetch.
     */
    orderBy?: UserFeedbackOrderByWithRelationInput | UserFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFeedbacks.
     */
    cursor?: UserFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFeedbacks.
     */
    distinct?: UserFeedbackScalarFieldEnum | UserFeedbackScalarFieldEnum[]
  }

  /**
   * UserFeedback findFirstOrThrow
   */
  export type UserFeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFeedback
     */
    select?: UserFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFeedback
     */
    omit?: UserFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which UserFeedback to fetch.
     */
    where?: UserFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFeedbacks to fetch.
     */
    orderBy?: UserFeedbackOrderByWithRelationInput | UserFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFeedbacks.
     */
    cursor?: UserFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFeedbacks.
     */
    distinct?: UserFeedbackScalarFieldEnum | UserFeedbackScalarFieldEnum[]
  }

  /**
   * UserFeedback findMany
   */
  export type UserFeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFeedback
     */
    select?: UserFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFeedback
     */
    omit?: UserFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which UserFeedbacks to fetch.
     */
    where?: UserFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFeedbacks to fetch.
     */
    orderBy?: UserFeedbackOrderByWithRelationInput | UserFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserFeedbacks.
     */
    cursor?: UserFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFeedbacks.
     */
    skip?: number
    distinct?: UserFeedbackScalarFieldEnum | UserFeedbackScalarFieldEnum[]
  }

  /**
   * UserFeedback create
   */
  export type UserFeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFeedback
     */
    select?: UserFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFeedback
     */
    omit?: UserFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFeedbackInclude<ExtArgs> | null
    /**
     * The data needed to create a UserFeedback.
     */
    data: XOR<UserFeedbackCreateInput, UserFeedbackUncheckedCreateInput>
  }

  /**
   * UserFeedback createMany
   */
  export type UserFeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserFeedbacks.
     */
    data: UserFeedbackCreateManyInput | UserFeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserFeedback createManyAndReturn
   */
  export type UserFeedbackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFeedback
     */
    select?: UserFeedbackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserFeedback
     */
    omit?: UserFeedbackOmit<ExtArgs> | null
    /**
     * The data used to create many UserFeedbacks.
     */
    data: UserFeedbackCreateManyInput | UserFeedbackCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFeedbackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserFeedback update
   */
  export type UserFeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFeedback
     */
    select?: UserFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFeedback
     */
    omit?: UserFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFeedbackInclude<ExtArgs> | null
    /**
     * The data needed to update a UserFeedback.
     */
    data: XOR<UserFeedbackUpdateInput, UserFeedbackUncheckedUpdateInput>
    /**
     * Choose, which UserFeedback to update.
     */
    where: UserFeedbackWhereUniqueInput
  }

  /**
   * UserFeedback updateMany
   */
  export type UserFeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserFeedbacks.
     */
    data: XOR<UserFeedbackUpdateManyMutationInput, UserFeedbackUncheckedUpdateManyInput>
    /**
     * Filter which UserFeedbacks to update
     */
    where?: UserFeedbackWhereInput
    /**
     * Limit how many UserFeedbacks to update.
     */
    limit?: number
  }

  /**
   * UserFeedback updateManyAndReturn
   */
  export type UserFeedbackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFeedback
     */
    select?: UserFeedbackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserFeedback
     */
    omit?: UserFeedbackOmit<ExtArgs> | null
    /**
     * The data used to update UserFeedbacks.
     */
    data: XOR<UserFeedbackUpdateManyMutationInput, UserFeedbackUncheckedUpdateManyInput>
    /**
     * Filter which UserFeedbacks to update
     */
    where?: UserFeedbackWhereInput
    /**
     * Limit how many UserFeedbacks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFeedbackIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserFeedback upsert
   */
  export type UserFeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFeedback
     */
    select?: UserFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFeedback
     */
    omit?: UserFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFeedbackInclude<ExtArgs> | null
    /**
     * The filter to search for the UserFeedback to update in case it exists.
     */
    where: UserFeedbackWhereUniqueInput
    /**
     * In case the UserFeedback found by the `where` argument doesn't exist, create a new UserFeedback with this data.
     */
    create: XOR<UserFeedbackCreateInput, UserFeedbackUncheckedCreateInput>
    /**
     * In case the UserFeedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserFeedbackUpdateInput, UserFeedbackUncheckedUpdateInput>
  }

  /**
   * UserFeedback delete
   */
  export type UserFeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFeedback
     */
    select?: UserFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFeedback
     */
    omit?: UserFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFeedbackInclude<ExtArgs> | null
    /**
     * Filter which UserFeedback to delete.
     */
    where: UserFeedbackWhereUniqueInput
  }

  /**
   * UserFeedback deleteMany
   */
  export type UserFeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFeedbacks to delete
     */
    where?: UserFeedbackWhereInput
    /**
     * Limit how many UserFeedbacks to delete.
     */
    limit?: number
  }

  /**
   * UserFeedback.gemAlert
   */
  export type UserFeedback$gemAlertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GemAlert
     */
    select?: GemAlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GemAlert
     */
    omit?: GemAlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GemAlertInclude<ExtArgs> | null
    where?: GemAlertWhereInput
  }

  /**
   * UserFeedback without action
   */
  export type UserFeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFeedback
     */
    select?: UserFeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFeedback
     */
    omit?: UserFeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFeedbackInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DataSourceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    name: 'name',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    scope: 'scope',
    lastSyncedAt: 'lastSyncedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DataSourceScalarFieldEnum = (typeof DataSourceScalarFieldEnum)[keyof typeof DataSourceScalarFieldEnum]


  export const SyncedContentScalarFieldEnum: {
    id: 'id',
    dataSourceId: 'dataSourceId',
    userId: 'userId',
    contentType: 'contentType',
    content: 'content',
    embedding: 'embedding',
    sourceItemId: 'sourceItemId',
    processedAt: 'processedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SyncedContentScalarFieldEnum = (typeof SyncedContentScalarFieldEnum)[keyof typeof SyncedContentScalarFieldEnum]


  export const MeetingScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    title: 'title',
    startTime: 'startTime',
    endTime: 'endTime',
    sourceCalendarEventId: 'sourceCalendarEventId',
    platformUrl: 'platformUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MeetingScalarFieldEnum = (typeof MeetingScalarFieldEnum)[keyof typeof MeetingScalarFieldEnum]


  export const MeetingParticipantScalarFieldEnum: {
    id: 'id',
    meetingId: 'meetingId',
    userId: 'userId',
    name: 'name',
    email: 'email',
    role: 'role',
    insights: 'insights',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MeetingParticipantScalarFieldEnum = (typeof MeetingParticipantScalarFieldEnum)[keyof typeof MeetingParticipantScalarFieldEnum]


  export const PreMeetingBriefScalarFieldEnum: {
    id: 'id',
    meetingId: 'meetingId',
    userId: 'userId',
    content: 'content',
    generatedAt: 'generatedAt',
    sentAt: 'sentAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PreMeetingBriefScalarFieldEnum = (typeof PreMeetingBriefScalarFieldEnum)[keyof typeof PreMeetingBriefScalarFieldEnum]


  export const GemAlertScalarFieldEnum: {
    id: 'id',
    meetingId: 'meetingId',
    userId: 'userId',
    timestamp: 'timestamp',
    trigger: 'trigger',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GemAlertScalarFieldEnum = (typeof GemAlertScalarFieldEnum)[keyof typeof GemAlertScalarFieldEnum]


  export const UserFeedbackScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    gemAlertId: 'gemAlertId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type UserFeedbackScalarFieldEnum = (typeof UserFeedbackScalarFieldEnum)[keyof typeof UserFeedbackScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'DataSourceType'
   */
  export type EnumDataSourceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DataSourceType'>
    


  /**
   * Reference to a field of type 'DataSourceType[]'
   */
  export type ListEnumDataSourceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DataSourceType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'FeedbackRating'
   */
  export type EnumFeedbackRatingFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeedbackRating'>
    


  /**
   * Reference to a field of type 'FeedbackRating[]'
   */
  export type ListEnumFeedbackRatingFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeedbackRating[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    dataSources?: DataSourceListRelationFilter
    meetingsAsOwner?: MeetingListRelationFilter
    meetingAttendees?: MeetingParticipantListRelationFilter
    preMeetingBriefs?: PreMeetingBriefListRelationFilter
    gemAlerts?: GemAlertListRelationFilter
    userFeedbacks?: UserFeedbackListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dataSources?: DataSourceOrderByRelationAggregateInput
    meetingsAsOwner?: MeetingOrderByRelationAggregateInput
    meetingAttendees?: MeetingParticipantOrderByRelationAggregateInput
    preMeetingBriefs?: PreMeetingBriefOrderByRelationAggregateInput
    gemAlerts?: GemAlertOrderByRelationAggregateInput
    userFeedbacks?: UserFeedbackOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    dataSources?: DataSourceListRelationFilter
    meetingsAsOwner?: MeetingListRelationFilter
    meetingAttendees?: MeetingParticipantListRelationFilter
    preMeetingBriefs?: PreMeetingBriefListRelationFilter
    gemAlerts?: GemAlertListRelationFilter
    userFeedbacks?: UserFeedbackListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DataSourceWhereInput = {
    AND?: DataSourceWhereInput | DataSourceWhereInput[]
    OR?: DataSourceWhereInput[]
    NOT?: DataSourceWhereInput | DataSourceWhereInput[]
    id?: StringFilter<"DataSource"> | string
    userId?: StringFilter<"DataSource"> | string
    type?: EnumDataSourceTypeFilter<"DataSource"> | $Enums.DataSourceType
    name?: StringFilter<"DataSource"> | string
    accessToken?: StringNullableFilter<"DataSource"> | string | null
    refreshToken?: StringNullableFilter<"DataSource"> | string | null
    scope?: StringNullableFilter<"DataSource"> | string | null
    lastSyncedAt?: DateTimeNullableFilter<"DataSource"> | Date | string | null
    createdAt?: DateTimeFilter<"DataSource"> | Date | string
    updatedAt?: DateTimeFilter<"DataSource"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    syncedContents?: SyncedContentListRelationFilter
  }

  export type DataSourceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    lastSyncedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    syncedContents?: SyncedContentOrderByRelationAggregateInput
  }

  export type DataSourceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DataSourceWhereInput | DataSourceWhereInput[]
    OR?: DataSourceWhereInput[]
    NOT?: DataSourceWhereInput | DataSourceWhereInput[]
    userId?: StringFilter<"DataSource"> | string
    type?: EnumDataSourceTypeFilter<"DataSource"> | $Enums.DataSourceType
    name?: StringFilter<"DataSource"> | string
    accessToken?: StringNullableFilter<"DataSource"> | string | null
    refreshToken?: StringNullableFilter<"DataSource"> | string | null
    scope?: StringNullableFilter<"DataSource"> | string | null
    lastSyncedAt?: DateTimeNullableFilter<"DataSource"> | Date | string | null
    createdAt?: DateTimeFilter<"DataSource"> | Date | string
    updatedAt?: DateTimeFilter<"DataSource"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    syncedContents?: SyncedContentListRelationFilter
  }, "id">

  export type DataSourceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    lastSyncedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DataSourceCountOrderByAggregateInput
    _max?: DataSourceMaxOrderByAggregateInput
    _min?: DataSourceMinOrderByAggregateInput
  }

  export type DataSourceScalarWhereWithAggregatesInput = {
    AND?: DataSourceScalarWhereWithAggregatesInput | DataSourceScalarWhereWithAggregatesInput[]
    OR?: DataSourceScalarWhereWithAggregatesInput[]
    NOT?: DataSourceScalarWhereWithAggregatesInput | DataSourceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DataSource"> | string
    userId?: StringWithAggregatesFilter<"DataSource"> | string
    type?: EnumDataSourceTypeWithAggregatesFilter<"DataSource"> | $Enums.DataSourceType
    name?: StringWithAggregatesFilter<"DataSource"> | string
    accessToken?: StringNullableWithAggregatesFilter<"DataSource"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"DataSource"> | string | null
    scope?: StringNullableWithAggregatesFilter<"DataSource"> | string | null
    lastSyncedAt?: DateTimeNullableWithAggregatesFilter<"DataSource"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DataSource"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DataSource"> | Date | string
  }

  export type SyncedContentWhereInput = {
    AND?: SyncedContentWhereInput | SyncedContentWhereInput[]
    OR?: SyncedContentWhereInput[]
    NOT?: SyncedContentWhereInput | SyncedContentWhereInput[]
    id?: StringFilter<"SyncedContent"> | string
    dataSourceId?: StringFilter<"SyncedContent"> | string
    userId?: StringFilter<"SyncedContent"> | string
    contentType?: StringFilter<"SyncedContent"> | string
    content?: JsonFilter<"SyncedContent">
    embedding?: JsonNullableFilter<"SyncedContent">
    sourceItemId?: StringNullableFilter<"SyncedContent"> | string | null
    processedAt?: DateTimeFilter<"SyncedContent"> | Date | string
    createdAt?: DateTimeFilter<"SyncedContent"> | Date | string
    updatedAt?: DateTimeFilter<"SyncedContent"> | Date | string
    dataSource?: XOR<DataSourceScalarRelationFilter, DataSourceWhereInput>
  }

  export type SyncedContentOrderByWithRelationInput = {
    id?: SortOrder
    dataSourceId?: SortOrder
    userId?: SortOrder
    contentType?: SortOrder
    content?: SortOrder
    embedding?: SortOrderInput | SortOrder
    sourceItemId?: SortOrderInput | SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dataSource?: DataSourceOrderByWithRelationInput
  }

  export type SyncedContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SyncedContentWhereInput | SyncedContentWhereInput[]
    OR?: SyncedContentWhereInput[]
    NOT?: SyncedContentWhereInput | SyncedContentWhereInput[]
    dataSourceId?: StringFilter<"SyncedContent"> | string
    userId?: StringFilter<"SyncedContent"> | string
    contentType?: StringFilter<"SyncedContent"> | string
    content?: JsonFilter<"SyncedContent">
    embedding?: JsonNullableFilter<"SyncedContent">
    sourceItemId?: StringNullableFilter<"SyncedContent"> | string | null
    processedAt?: DateTimeFilter<"SyncedContent"> | Date | string
    createdAt?: DateTimeFilter<"SyncedContent"> | Date | string
    updatedAt?: DateTimeFilter<"SyncedContent"> | Date | string
    dataSource?: XOR<DataSourceScalarRelationFilter, DataSourceWhereInput>
  }, "id">

  export type SyncedContentOrderByWithAggregationInput = {
    id?: SortOrder
    dataSourceId?: SortOrder
    userId?: SortOrder
    contentType?: SortOrder
    content?: SortOrder
    embedding?: SortOrderInput | SortOrder
    sourceItemId?: SortOrderInput | SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SyncedContentCountOrderByAggregateInput
    _max?: SyncedContentMaxOrderByAggregateInput
    _min?: SyncedContentMinOrderByAggregateInput
  }

  export type SyncedContentScalarWhereWithAggregatesInput = {
    AND?: SyncedContentScalarWhereWithAggregatesInput | SyncedContentScalarWhereWithAggregatesInput[]
    OR?: SyncedContentScalarWhereWithAggregatesInput[]
    NOT?: SyncedContentScalarWhereWithAggregatesInput | SyncedContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SyncedContent"> | string
    dataSourceId?: StringWithAggregatesFilter<"SyncedContent"> | string
    userId?: StringWithAggregatesFilter<"SyncedContent"> | string
    contentType?: StringWithAggregatesFilter<"SyncedContent"> | string
    content?: JsonWithAggregatesFilter<"SyncedContent">
    embedding?: JsonNullableWithAggregatesFilter<"SyncedContent">
    sourceItemId?: StringNullableWithAggregatesFilter<"SyncedContent"> | string | null
    processedAt?: DateTimeWithAggregatesFilter<"SyncedContent"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"SyncedContent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SyncedContent"> | Date | string
  }

  export type MeetingWhereInput = {
    AND?: MeetingWhereInput | MeetingWhereInput[]
    OR?: MeetingWhereInput[]
    NOT?: MeetingWhereInput | MeetingWhereInput[]
    id?: StringFilter<"Meeting"> | string
    ownerId?: StringFilter<"Meeting"> | string
    title?: StringNullableFilter<"Meeting"> | string | null
    startTime?: DateTimeFilter<"Meeting"> | Date | string
    endTime?: DateTimeNullableFilter<"Meeting"> | Date | string | null
    sourceCalendarEventId?: StringNullableFilter<"Meeting"> | string | null
    platformUrl?: StringNullableFilter<"Meeting"> | string | null
    createdAt?: DateTimeFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeFilter<"Meeting"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    participants?: MeetingParticipantListRelationFilter
    preMeetingBrief?: XOR<PreMeetingBriefNullableScalarRelationFilter, PreMeetingBriefWhereInput> | null
    gemAlerts?: GemAlertListRelationFilter
  }

  export type MeetingOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    sourceCalendarEventId?: SortOrderInput | SortOrder
    platformUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    participants?: MeetingParticipantOrderByRelationAggregateInput
    preMeetingBrief?: PreMeetingBriefOrderByWithRelationInput
    gemAlerts?: GemAlertOrderByRelationAggregateInput
  }

  export type MeetingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sourceCalendarEventId?: string
    AND?: MeetingWhereInput | MeetingWhereInput[]
    OR?: MeetingWhereInput[]
    NOT?: MeetingWhereInput | MeetingWhereInput[]
    ownerId?: StringFilter<"Meeting"> | string
    title?: StringNullableFilter<"Meeting"> | string | null
    startTime?: DateTimeFilter<"Meeting"> | Date | string
    endTime?: DateTimeNullableFilter<"Meeting"> | Date | string | null
    platformUrl?: StringNullableFilter<"Meeting"> | string | null
    createdAt?: DateTimeFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeFilter<"Meeting"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    participants?: MeetingParticipantListRelationFilter
    preMeetingBrief?: XOR<PreMeetingBriefNullableScalarRelationFilter, PreMeetingBriefWhereInput> | null
    gemAlerts?: GemAlertListRelationFilter
  }, "id" | "sourceCalendarEventId">

  export type MeetingOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    sourceCalendarEventId?: SortOrderInput | SortOrder
    platformUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MeetingCountOrderByAggregateInput
    _max?: MeetingMaxOrderByAggregateInput
    _min?: MeetingMinOrderByAggregateInput
  }

  export type MeetingScalarWhereWithAggregatesInput = {
    AND?: MeetingScalarWhereWithAggregatesInput | MeetingScalarWhereWithAggregatesInput[]
    OR?: MeetingScalarWhereWithAggregatesInput[]
    NOT?: MeetingScalarWhereWithAggregatesInput | MeetingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Meeting"> | string
    ownerId?: StringWithAggregatesFilter<"Meeting"> | string
    title?: StringNullableWithAggregatesFilter<"Meeting"> | string | null
    startTime?: DateTimeWithAggregatesFilter<"Meeting"> | Date | string
    endTime?: DateTimeNullableWithAggregatesFilter<"Meeting"> | Date | string | null
    sourceCalendarEventId?: StringNullableWithAggregatesFilter<"Meeting"> | string | null
    platformUrl?: StringNullableWithAggregatesFilter<"Meeting"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Meeting"> | Date | string
  }

  export type MeetingParticipantWhereInput = {
    AND?: MeetingParticipantWhereInput | MeetingParticipantWhereInput[]
    OR?: MeetingParticipantWhereInput[]
    NOT?: MeetingParticipantWhereInput | MeetingParticipantWhereInput[]
    id?: StringFilter<"MeetingParticipant"> | string
    meetingId?: StringFilter<"MeetingParticipant"> | string
    userId?: StringNullableFilter<"MeetingParticipant"> | string | null
    name?: StringNullableFilter<"MeetingParticipant"> | string | null
    email?: StringNullableFilter<"MeetingParticipant"> | string | null
    role?: StringNullableFilter<"MeetingParticipant"> | string | null
    insights?: JsonNullableFilter<"MeetingParticipant">
    createdAt?: DateTimeFilter<"MeetingParticipant"> | Date | string
    updatedAt?: DateTimeFilter<"MeetingParticipant"> | Date | string
    meeting?: XOR<MeetingScalarRelationFilter, MeetingWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type MeetingParticipantOrderByWithRelationInput = {
    id?: SortOrder
    meetingId?: SortOrder
    userId?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    insights?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    meeting?: MeetingOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type MeetingParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MeetingParticipantWhereInput | MeetingParticipantWhereInput[]
    OR?: MeetingParticipantWhereInput[]
    NOT?: MeetingParticipantWhereInput | MeetingParticipantWhereInput[]
    meetingId?: StringFilter<"MeetingParticipant"> | string
    userId?: StringNullableFilter<"MeetingParticipant"> | string | null
    name?: StringNullableFilter<"MeetingParticipant"> | string | null
    email?: StringNullableFilter<"MeetingParticipant"> | string | null
    role?: StringNullableFilter<"MeetingParticipant"> | string | null
    insights?: JsonNullableFilter<"MeetingParticipant">
    createdAt?: DateTimeFilter<"MeetingParticipant"> | Date | string
    updatedAt?: DateTimeFilter<"MeetingParticipant"> | Date | string
    meeting?: XOR<MeetingScalarRelationFilter, MeetingWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type MeetingParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    meetingId?: SortOrder
    userId?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    insights?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MeetingParticipantCountOrderByAggregateInput
    _max?: MeetingParticipantMaxOrderByAggregateInput
    _min?: MeetingParticipantMinOrderByAggregateInput
  }

  export type MeetingParticipantScalarWhereWithAggregatesInput = {
    AND?: MeetingParticipantScalarWhereWithAggregatesInput | MeetingParticipantScalarWhereWithAggregatesInput[]
    OR?: MeetingParticipantScalarWhereWithAggregatesInput[]
    NOT?: MeetingParticipantScalarWhereWithAggregatesInput | MeetingParticipantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MeetingParticipant"> | string
    meetingId?: StringWithAggregatesFilter<"MeetingParticipant"> | string
    userId?: StringNullableWithAggregatesFilter<"MeetingParticipant"> | string | null
    name?: StringNullableWithAggregatesFilter<"MeetingParticipant"> | string | null
    email?: StringNullableWithAggregatesFilter<"MeetingParticipant"> | string | null
    role?: StringNullableWithAggregatesFilter<"MeetingParticipant"> | string | null
    insights?: JsonNullableWithAggregatesFilter<"MeetingParticipant">
    createdAt?: DateTimeWithAggregatesFilter<"MeetingParticipant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MeetingParticipant"> | Date | string
  }

  export type PreMeetingBriefWhereInput = {
    AND?: PreMeetingBriefWhereInput | PreMeetingBriefWhereInput[]
    OR?: PreMeetingBriefWhereInput[]
    NOT?: PreMeetingBriefWhereInput | PreMeetingBriefWhereInput[]
    id?: StringFilter<"PreMeetingBrief"> | string
    meetingId?: StringFilter<"PreMeetingBrief"> | string
    userId?: StringFilter<"PreMeetingBrief"> | string
    content?: JsonFilter<"PreMeetingBrief">
    generatedAt?: DateTimeFilter<"PreMeetingBrief"> | Date | string
    sentAt?: DateTimeNullableFilter<"PreMeetingBrief"> | Date | string | null
    createdAt?: DateTimeFilter<"PreMeetingBrief"> | Date | string
    updatedAt?: DateTimeFilter<"PreMeetingBrief"> | Date | string
    meeting?: XOR<MeetingScalarRelationFilter, MeetingWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PreMeetingBriefOrderByWithRelationInput = {
    id?: SortOrder
    meetingId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    generatedAt?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    meeting?: MeetingOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type PreMeetingBriefWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    meetingId?: string
    AND?: PreMeetingBriefWhereInput | PreMeetingBriefWhereInput[]
    OR?: PreMeetingBriefWhereInput[]
    NOT?: PreMeetingBriefWhereInput | PreMeetingBriefWhereInput[]
    userId?: StringFilter<"PreMeetingBrief"> | string
    content?: JsonFilter<"PreMeetingBrief">
    generatedAt?: DateTimeFilter<"PreMeetingBrief"> | Date | string
    sentAt?: DateTimeNullableFilter<"PreMeetingBrief"> | Date | string | null
    createdAt?: DateTimeFilter<"PreMeetingBrief"> | Date | string
    updatedAt?: DateTimeFilter<"PreMeetingBrief"> | Date | string
    meeting?: XOR<MeetingScalarRelationFilter, MeetingWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "meetingId">

  export type PreMeetingBriefOrderByWithAggregationInput = {
    id?: SortOrder
    meetingId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    generatedAt?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PreMeetingBriefCountOrderByAggregateInput
    _max?: PreMeetingBriefMaxOrderByAggregateInput
    _min?: PreMeetingBriefMinOrderByAggregateInput
  }

  export type PreMeetingBriefScalarWhereWithAggregatesInput = {
    AND?: PreMeetingBriefScalarWhereWithAggregatesInput | PreMeetingBriefScalarWhereWithAggregatesInput[]
    OR?: PreMeetingBriefScalarWhereWithAggregatesInput[]
    NOT?: PreMeetingBriefScalarWhereWithAggregatesInput | PreMeetingBriefScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PreMeetingBrief"> | string
    meetingId?: StringWithAggregatesFilter<"PreMeetingBrief"> | string
    userId?: StringWithAggregatesFilter<"PreMeetingBrief"> | string
    content?: JsonWithAggregatesFilter<"PreMeetingBrief">
    generatedAt?: DateTimeWithAggregatesFilter<"PreMeetingBrief"> | Date | string
    sentAt?: DateTimeNullableWithAggregatesFilter<"PreMeetingBrief"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PreMeetingBrief"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PreMeetingBrief"> | Date | string
  }

  export type GemAlertWhereInput = {
    AND?: GemAlertWhereInput | GemAlertWhereInput[]
    OR?: GemAlertWhereInput[]
    NOT?: GemAlertWhereInput | GemAlertWhereInput[]
    id?: StringFilter<"GemAlert"> | string
    meetingId?: StringFilter<"GemAlert"> | string
    userId?: StringFilter<"GemAlert"> | string
    timestamp?: DateTimeFilter<"GemAlert"> | Date | string
    trigger?: StringNullableFilter<"GemAlert"> | string | null
    content?: StringFilter<"GemAlert"> | string
    createdAt?: DateTimeFilter<"GemAlert"> | Date | string
    updatedAt?: DateTimeFilter<"GemAlert"> | Date | string
    meeting?: XOR<MeetingScalarRelationFilter, MeetingWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    userFeedback?: XOR<UserFeedbackNullableScalarRelationFilter, UserFeedbackWhereInput> | null
  }

  export type GemAlertOrderByWithRelationInput = {
    id?: SortOrder
    meetingId?: SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
    trigger?: SortOrderInput | SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    meeting?: MeetingOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    userFeedback?: UserFeedbackOrderByWithRelationInput
  }

  export type GemAlertWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GemAlertWhereInput | GemAlertWhereInput[]
    OR?: GemAlertWhereInput[]
    NOT?: GemAlertWhereInput | GemAlertWhereInput[]
    meetingId?: StringFilter<"GemAlert"> | string
    userId?: StringFilter<"GemAlert"> | string
    timestamp?: DateTimeFilter<"GemAlert"> | Date | string
    trigger?: StringNullableFilter<"GemAlert"> | string | null
    content?: StringFilter<"GemAlert"> | string
    createdAt?: DateTimeFilter<"GemAlert"> | Date | string
    updatedAt?: DateTimeFilter<"GemAlert"> | Date | string
    meeting?: XOR<MeetingScalarRelationFilter, MeetingWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    userFeedback?: XOR<UserFeedbackNullableScalarRelationFilter, UserFeedbackWhereInput> | null
  }, "id">

  export type GemAlertOrderByWithAggregationInput = {
    id?: SortOrder
    meetingId?: SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
    trigger?: SortOrderInput | SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GemAlertCountOrderByAggregateInput
    _max?: GemAlertMaxOrderByAggregateInput
    _min?: GemAlertMinOrderByAggregateInput
  }

  export type GemAlertScalarWhereWithAggregatesInput = {
    AND?: GemAlertScalarWhereWithAggregatesInput | GemAlertScalarWhereWithAggregatesInput[]
    OR?: GemAlertScalarWhereWithAggregatesInput[]
    NOT?: GemAlertScalarWhereWithAggregatesInput | GemAlertScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GemAlert"> | string
    meetingId?: StringWithAggregatesFilter<"GemAlert"> | string
    userId?: StringWithAggregatesFilter<"GemAlert"> | string
    timestamp?: DateTimeWithAggregatesFilter<"GemAlert"> | Date | string
    trigger?: StringNullableWithAggregatesFilter<"GemAlert"> | string | null
    content?: StringWithAggregatesFilter<"GemAlert"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GemAlert"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GemAlert"> | Date | string
  }

  export type UserFeedbackWhereInput = {
    AND?: UserFeedbackWhereInput | UserFeedbackWhereInput[]
    OR?: UserFeedbackWhereInput[]
    NOT?: UserFeedbackWhereInput | UserFeedbackWhereInput[]
    id?: StringFilter<"UserFeedback"> | string
    userId?: StringFilter<"UserFeedback"> | string
    gemAlertId?: StringNullableFilter<"UserFeedback"> | string | null
    rating?: EnumFeedbackRatingFilter<"UserFeedback"> | $Enums.FeedbackRating
    comment?: StringNullableFilter<"UserFeedback"> | string | null
    createdAt?: DateTimeFilter<"UserFeedback"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    gemAlert?: XOR<GemAlertNullableScalarRelationFilter, GemAlertWhereInput> | null
  }

  export type UserFeedbackOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    gemAlertId?: SortOrderInput | SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    gemAlert?: GemAlertOrderByWithRelationInput
  }

  export type UserFeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    gemAlertId?: string
    AND?: UserFeedbackWhereInput | UserFeedbackWhereInput[]
    OR?: UserFeedbackWhereInput[]
    NOT?: UserFeedbackWhereInput | UserFeedbackWhereInput[]
    userId?: StringFilter<"UserFeedback"> | string
    rating?: EnumFeedbackRatingFilter<"UserFeedback"> | $Enums.FeedbackRating
    comment?: StringNullableFilter<"UserFeedback"> | string | null
    createdAt?: DateTimeFilter<"UserFeedback"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    gemAlert?: XOR<GemAlertNullableScalarRelationFilter, GemAlertWhereInput> | null
  }, "id" | "gemAlertId">

  export type UserFeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    gemAlertId?: SortOrderInput | SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserFeedbackCountOrderByAggregateInput
    _max?: UserFeedbackMaxOrderByAggregateInput
    _min?: UserFeedbackMinOrderByAggregateInput
  }

  export type UserFeedbackScalarWhereWithAggregatesInput = {
    AND?: UserFeedbackScalarWhereWithAggregatesInput | UserFeedbackScalarWhereWithAggregatesInput[]
    OR?: UserFeedbackScalarWhereWithAggregatesInput[]
    NOT?: UserFeedbackScalarWhereWithAggregatesInput | UserFeedbackScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserFeedback"> | string
    userId?: StringWithAggregatesFilter<"UserFeedback"> | string
    gemAlertId?: StringNullableWithAggregatesFilter<"UserFeedback"> | string | null
    rating?: EnumFeedbackRatingWithAggregatesFilter<"UserFeedback"> | $Enums.FeedbackRating
    comment?: StringNullableWithAggregatesFilter<"UserFeedback"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserFeedback"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dataSources?: DataSourceCreateNestedManyWithoutUserInput
    meetingsAsOwner?: MeetingCreateNestedManyWithoutOwnerInput
    meetingAttendees?: MeetingParticipantCreateNestedManyWithoutUserInput
    preMeetingBriefs?: PreMeetingBriefCreateNestedManyWithoutUserInput
    gemAlerts?: GemAlertCreateNestedManyWithoutUserInput
    userFeedbacks?: UserFeedbackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dataSources?: DataSourceUncheckedCreateNestedManyWithoutUserInput
    meetingsAsOwner?: MeetingUncheckedCreateNestedManyWithoutOwnerInput
    meetingAttendees?: MeetingParticipantUncheckedCreateNestedManyWithoutUserInput
    preMeetingBriefs?: PreMeetingBriefUncheckedCreateNestedManyWithoutUserInput
    gemAlerts?: GemAlertUncheckedCreateNestedManyWithoutUserInput
    userFeedbacks?: UserFeedbackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataSources?: DataSourceUpdateManyWithoutUserNestedInput
    meetingsAsOwner?: MeetingUpdateManyWithoutOwnerNestedInput
    meetingAttendees?: MeetingParticipantUpdateManyWithoutUserNestedInput
    preMeetingBriefs?: PreMeetingBriefUpdateManyWithoutUserNestedInput
    gemAlerts?: GemAlertUpdateManyWithoutUserNestedInput
    userFeedbacks?: UserFeedbackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataSources?: DataSourceUncheckedUpdateManyWithoutUserNestedInput
    meetingsAsOwner?: MeetingUncheckedUpdateManyWithoutOwnerNestedInput
    meetingAttendees?: MeetingParticipantUncheckedUpdateManyWithoutUserNestedInput
    preMeetingBriefs?: PreMeetingBriefUncheckedUpdateManyWithoutUserNestedInput
    gemAlerts?: GemAlertUncheckedUpdateManyWithoutUserNestedInput
    userFeedbacks?: UserFeedbackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataSourceCreateInput = {
    id?: string
    type: $Enums.DataSourceType
    name: string
    accessToken?: string | null
    refreshToken?: string | null
    scope?: string | null
    lastSyncedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDataSourcesInput
    syncedContents?: SyncedContentCreateNestedManyWithoutDataSourceInput
  }

  export type DataSourceUncheckedCreateInput = {
    id?: string
    userId: string
    type: $Enums.DataSourceType
    name: string
    accessToken?: string | null
    refreshToken?: string | null
    scope?: string | null
    lastSyncedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncedContents?: SyncedContentUncheckedCreateNestedManyWithoutDataSourceInput
  }

  export type DataSourceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    name?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDataSourcesNestedInput
    syncedContents?: SyncedContentUpdateManyWithoutDataSourceNestedInput
  }

  export type DataSourceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    name?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncedContents?: SyncedContentUncheckedUpdateManyWithoutDataSourceNestedInput
  }

  export type DataSourceCreateManyInput = {
    id?: string
    userId: string
    type: $Enums.DataSourceType
    name: string
    accessToken?: string | null
    refreshToken?: string | null
    scope?: string | null
    lastSyncedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DataSourceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    name?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataSourceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    name?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncedContentCreateInput = {
    id?: string
    userId: string
    contentType: string
    content: JsonNullValueInput | InputJsonValue
    embedding?: NullableJsonNullValueInput | InputJsonValue
    sourceItemId?: string | null
    processedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    dataSource: DataSourceCreateNestedOneWithoutSyncedContentsInput
  }

  export type SyncedContentUncheckedCreateInput = {
    id?: string
    dataSourceId: string
    userId: string
    contentType: string
    content: JsonNullValueInput | InputJsonValue
    embedding?: NullableJsonNullValueInput | InputJsonValue
    sourceItemId?: string | null
    processedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SyncedContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    embedding?: NullableJsonNullValueInput | InputJsonValue
    sourceItemId?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataSource?: DataSourceUpdateOneRequiredWithoutSyncedContentsNestedInput
  }

  export type SyncedContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataSourceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    embedding?: NullableJsonNullValueInput | InputJsonValue
    sourceItemId?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncedContentCreateManyInput = {
    id?: string
    dataSourceId: string
    userId: string
    contentType: string
    content: JsonNullValueInput | InputJsonValue
    embedding?: NullableJsonNullValueInput | InputJsonValue
    sourceItemId?: string | null
    processedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SyncedContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    embedding?: NullableJsonNullValueInput | InputJsonValue
    sourceItemId?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncedContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dataSourceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    embedding?: NullableJsonNullValueInput | InputJsonValue
    sourceItemId?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingCreateInput = {
    id?: string
    title?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    sourceCalendarEventId?: string | null
    platformUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutMeetingsAsOwnerInput
    participants?: MeetingParticipantCreateNestedManyWithoutMeetingInput
    preMeetingBrief?: PreMeetingBriefCreateNestedOneWithoutMeetingInput
    gemAlerts?: GemAlertCreateNestedManyWithoutMeetingInput
  }

  export type MeetingUncheckedCreateInput = {
    id?: string
    ownerId: string
    title?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    sourceCalendarEventId?: string | null
    platformUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: MeetingParticipantUncheckedCreateNestedManyWithoutMeetingInput
    preMeetingBrief?: PreMeetingBriefUncheckedCreateNestedOneWithoutMeetingInput
    gemAlerts?: GemAlertUncheckedCreateNestedManyWithoutMeetingInput
  }

  export type MeetingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceCalendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutMeetingsAsOwnerNestedInput
    participants?: MeetingParticipantUpdateManyWithoutMeetingNestedInput
    preMeetingBrief?: PreMeetingBriefUpdateOneWithoutMeetingNestedInput
    gemAlerts?: GemAlertUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceCalendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: MeetingParticipantUncheckedUpdateManyWithoutMeetingNestedInput
    preMeetingBrief?: PreMeetingBriefUncheckedUpdateOneWithoutMeetingNestedInput
    gemAlerts?: GemAlertUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingCreateManyInput = {
    id?: string
    ownerId: string
    title?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    sourceCalendarEventId?: string | null
    platformUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceCalendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceCalendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingParticipantCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    role?: string | null
    insights?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    meeting: MeetingCreateNestedOneWithoutParticipantsInput
    user?: UserCreateNestedOneWithoutMeetingAttendeesInput
  }

  export type MeetingParticipantUncheckedCreateInput = {
    id?: string
    meetingId: string
    userId?: string | null
    name?: string | null
    email?: string | null
    role?: string | null
    insights?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingParticipantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    insights?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meeting?: MeetingUpdateOneRequiredWithoutParticipantsNestedInput
    user?: UserUpdateOneWithoutMeetingAttendeesNestedInput
  }

  export type MeetingParticipantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    meetingId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    insights?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingParticipantCreateManyInput = {
    id?: string
    meetingId: string
    userId?: string | null
    name?: string | null
    email?: string | null
    role?: string | null
    insights?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingParticipantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    insights?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingParticipantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    meetingId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    insights?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreMeetingBriefCreateInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    generatedAt?: Date | string
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meeting: MeetingCreateNestedOneWithoutPreMeetingBriefInput
    user: UserCreateNestedOneWithoutPreMeetingBriefsInput
  }

  export type PreMeetingBriefUncheckedCreateInput = {
    id?: string
    meetingId: string
    userId: string
    content: JsonNullValueInput | InputJsonValue
    generatedAt?: Date | string
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PreMeetingBriefUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meeting?: MeetingUpdateOneRequiredWithoutPreMeetingBriefNestedInput
    user?: UserUpdateOneRequiredWithoutPreMeetingBriefsNestedInput
  }

  export type PreMeetingBriefUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    meetingId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreMeetingBriefCreateManyInput = {
    id?: string
    meetingId: string
    userId: string
    content: JsonNullValueInput | InputJsonValue
    generatedAt?: Date | string
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PreMeetingBriefUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreMeetingBriefUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    meetingId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GemAlertCreateInput = {
    id?: string
    timestamp?: Date | string
    trigger?: string | null
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    meeting: MeetingCreateNestedOneWithoutGemAlertsInput
    user: UserCreateNestedOneWithoutGemAlertsInput
    userFeedback?: UserFeedbackCreateNestedOneWithoutGemAlertInput
  }

  export type GemAlertUncheckedCreateInput = {
    id?: string
    meetingId: string
    userId: string
    timestamp?: Date | string
    trigger?: string | null
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userFeedback?: UserFeedbackUncheckedCreateNestedOneWithoutGemAlertInput
  }

  export type GemAlertUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    trigger?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meeting?: MeetingUpdateOneRequiredWithoutGemAlertsNestedInput
    user?: UserUpdateOneRequiredWithoutGemAlertsNestedInput
    userFeedback?: UserFeedbackUpdateOneWithoutGemAlertNestedInput
  }

  export type GemAlertUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    meetingId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    trigger?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userFeedback?: UserFeedbackUncheckedUpdateOneWithoutGemAlertNestedInput
  }

  export type GemAlertCreateManyInput = {
    id?: string
    meetingId: string
    userId: string
    timestamp?: Date | string
    trigger?: string | null
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GemAlertUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    trigger?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GemAlertUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    meetingId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    trigger?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFeedbackCreateInput = {
    id?: string
    rating: $Enums.FeedbackRating
    comment?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserFeedbacksInput
    gemAlert?: GemAlertCreateNestedOneWithoutUserFeedbackInput
  }

  export type UserFeedbackUncheckedCreateInput = {
    id?: string
    userId: string
    gemAlertId?: string | null
    rating: $Enums.FeedbackRating
    comment?: string | null
    createdAt?: Date | string
  }

  export type UserFeedbackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: EnumFeedbackRatingFieldUpdateOperationsInput | $Enums.FeedbackRating
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserFeedbacksNestedInput
    gemAlert?: GemAlertUpdateOneWithoutUserFeedbackNestedInput
  }

  export type UserFeedbackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gemAlertId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: EnumFeedbackRatingFieldUpdateOperationsInput | $Enums.FeedbackRating
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFeedbackCreateManyInput = {
    id?: string
    userId: string
    gemAlertId?: string | null
    rating: $Enums.FeedbackRating
    comment?: string | null
    createdAt?: Date | string
  }

  export type UserFeedbackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: EnumFeedbackRatingFieldUpdateOperationsInput | $Enums.FeedbackRating
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFeedbackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    gemAlertId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: EnumFeedbackRatingFieldUpdateOperationsInput | $Enums.FeedbackRating
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DataSourceListRelationFilter = {
    every?: DataSourceWhereInput
    some?: DataSourceWhereInput
    none?: DataSourceWhereInput
  }

  export type MeetingListRelationFilter = {
    every?: MeetingWhereInput
    some?: MeetingWhereInput
    none?: MeetingWhereInput
  }

  export type MeetingParticipantListRelationFilter = {
    every?: MeetingParticipantWhereInput
    some?: MeetingParticipantWhereInput
    none?: MeetingParticipantWhereInput
  }

  export type PreMeetingBriefListRelationFilter = {
    every?: PreMeetingBriefWhereInput
    some?: PreMeetingBriefWhereInput
    none?: PreMeetingBriefWhereInput
  }

  export type GemAlertListRelationFilter = {
    every?: GemAlertWhereInput
    some?: GemAlertWhereInput
    none?: GemAlertWhereInput
  }

  export type UserFeedbackListRelationFilter = {
    every?: UserFeedbackWhereInput
    some?: UserFeedbackWhereInput
    none?: UserFeedbackWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DataSourceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MeetingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MeetingParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PreMeetingBriefOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GemAlertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserFeedbackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumDataSourceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DataSourceType | EnumDataSourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DataSourceType[] | ListEnumDataSourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DataSourceType[] | ListEnumDataSourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDataSourceTypeFilter<$PrismaModel> | $Enums.DataSourceType
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SyncedContentListRelationFilter = {
    every?: SyncedContentWhereInput
    some?: SyncedContentWhereInput
    none?: SyncedContentWhereInput
  }

  export type SyncedContentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DataSourceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    scope?: SortOrder
    lastSyncedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DataSourceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    scope?: SortOrder
    lastSyncedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DataSourceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    name?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    scope?: SortOrder
    lastSyncedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDataSourceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DataSourceType | EnumDataSourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DataSourceType[] | ListEnumDataSourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DataSourceType[] | ListEnumDataSourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDataSourceTypeWithAggregatesFilter<$PrismaModel> | $Enums.DataSourceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDataSourceTypeFilter<$PrismaModel>
    _max?: NestedEnumDataSourceTypeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DataSourceScalarRelationFilter = {
    is?: DataSourceWhereInput
    isNot?: DataSourceWhereInput
  }

  export type SyncedContentCountOrderByAggregateInput = {
    id?: SortOrder
    dataSourceId?: SortOrder
    userId?: SortOrder
    contentType?: SortOrder
    content?: SortOrder
    embedding?: SortOrder
    sourceItemId?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SyncedContentMaxOrderByAggregateInput = {
    id?: SortOrder
    dataSourceId?: SortOrder
    userId?: SortOrder
    contentType?: SortOrder
    sourceItemId?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SyncedContentMinOrderByAggregateInput = {
    id?: SortOrder
    dataSourceId?: SortOrder
    userId?: SortOrder
    contentType?: SortOrder
    sourceItemId?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type PreMeetingBriefNullableScalarRelationFilter = {
    is?: PreMeetingBriefWhereInput | null
    isNot?: PreMeetingBriefWhereInput | null
  }

  export type MeetingCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    sourceCalendarEventId?: SortOrder
    platformUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MeetingMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    sourceCalendarEventId?: SortOrder
    platformUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MeetingMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    sourceCalendarEventId?: SortOrder
    platformUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MeetingScalarRelationFilter = {
    is?: MeetingWhereInput
    isNot?: MeetingWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type MeetingParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    meetingId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    insights?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MeetingParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    meetingId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MeetingParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    meetingId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PreMeetingBriefCountOrderByAggregateInput = {
    id?: SortOrder
    meetingId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    generatedAt?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PreMeetingBriefMaxOrderByAggregateInput = {
    id?: SortOrder
    meetingId?: SortOrder
    userId?: SortOrder
    generatedAt?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PreMeetingBriefMinOrderByAggregateInput = {
    id?: SortOrder
    meetingId?: SortOrder
    userId?: SortOrder
    generatedAt?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserFeedbackNullableScalarRelationFilter = {
    is?: UserFeedbackWhereInput | null
    isNot?: UserFeedbackWhereInput | null
  }

  export type GemAlertCountOrderByAggregateInput = {
    id?: SortOrder
    meetingId?: SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
    trigger?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GemAlertMaxOrderByAggregateInput = {
    id?: SortOrder
    meetingId?: SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
    trigger?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GemAlertMinOrderByAggregateInput = {
    id?: SortOrder
    meetingId?: SortOrder
    userId?: SortOrder
    timestamp?: SortOrder
    trigger?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumFeedbackRatingFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedbackRating | EnumFeedbackRatingFieldRefInput<$PrismaModel>
    in?: $Enums.FeedbackRating[] | ListEnumFeedbackRatingFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeedbackRating[] | ListEnumFeedbackRatingFieldRefInput<$PrismaModel>
    not?: NestedEnumFeedbackRatingFilter<$PrismaModel> | $Enums.FeedbackRating
  }

  export type GemAlertNullableScalarRelationFilter = {
    is?: GemAlertWhereInput | null
    isNot?: GemAlertWhereInput | null
  }

  export type UserFeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gemAlertId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type UserFeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gemAlertId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type UserFeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gemAlertId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumFeedbackRatingWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedbackRating | EnumFeedbackRatingFieldRefInput<$PrismaModel>
    in?: $Enums.FeedbackRating[] | ListEnumFeedbackRatingFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeedbackRating[] | ListEnumFeedbackRatingFieldRefInput<$PrismaModel>
    not?: NestedEnumFeedbackRatingWithAggregatesFilter<$PrismaModel> | $Enums.FeedbackRating
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFeedbackRatingFilter<$PrismaModel>
    _max?: NestedEnumFeedbackRatingFilter<$PrismaModel>
  }

  export type DataSourceCreateNestedManyWithoutUserInput = {
    create?: XOR<DataSourceCreateWithoutUserInput, DataSourceUncheckedCreateWithoutUserInput> | DataSourceCreateWithoutUserInput[] | DataSourceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DataSourceCreateOrConnectWithoutUserInput | DataSourceCreateOrConnectWithoutUserInput[]
    createMany?: DataSourceCreateManyUserInputEnvelope
    connect?: DataSourceWhereUniqueInput | DataSourceWhereUniqueInput[]
  }

  export type MeetingCreateNestedManyWithoutOwnerInput = {
    create?: XOR<MeetingCreateWithoutOwnerInput, MeetingUncheckedCreateWithoutOwnerInput> | MeetingCreateWithoutOwnerInput[] | MeetingUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutOwnerInput | MeetingCreateOrConnectWithoutOwnerInput[]
    createMany?: MeetingCreateManyOwnerInputEnvelope
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
  }

  export type MeetingParticipantCreateNestedManyWithoutUserInput = {
    create?: XOR<MeetingParticipantCreateWithoutUserInput, MeetingParticipantUncheckedCreateWithoutUserInput> | MeetingParticipantCreateWithoutUserInput[] | MeetingParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MeetingParticipantCreateOrConnectWithoutUserInput | MeetingParticipantCreateOrConnectWithoutUserInput[]
    createMany?: MeetingParticipantCreateManyUserInputEnvelope
    connect?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
  }

  export type PreMeetingBriefCreateNestedManyWithoutUserInput = {
    create?: XOR<PreMeetingBriefCreateWithoutUserInput, PreMeetingBriefUncheckedCreateWithoutUserInput> | PreMeetingBriefCreateWithoutUserInput[] | PreMeetingBriefUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PreMeetingBriefCreateOrConnectWithoutUserInput | PreMeetingBriefCreateOrConnectWithoutUserInput[]
    createMany?: PreMeetingBriefCreateManyUserInputEnvelope
    connect?: PreMeetingBriefWhereUniqueInput | PreMeetingBriefWhereUniqueInput[]
  }

  export type GemAlertCreateNestedManyWithoutUserInput = {
    create?: XOR<GemAlertCreateWithoutUserInput, GemAlertUncheckedCreateWithoutUserInput> | GemAlertCreateWithoutUserInput[] | GemAlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GemAlertCreateOrConnectWithoutUserInput | GemAlertCreateOrConnectWithoutUserInput[]
    createMany?: GemAlertCreateManyUserInputEnvelope
    connect?: GemAlertWhereUniqueInput | GemAlertWhereUniqueInput[]
  }

  export type UserFeedbackCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFeedbackCreateWithoutUserInput, UserFeedbackUncheckedCreateWithoutUserInput> | UserFeedbackCreateWithoutUserInput[] | UserFeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFeedbackCreateOrConnectWithoutUserInput | UserFeedbackCreateOrConnectWithoutUserInput[]
    createMany?: UserFeedbackCreateManyUserInputEnvelope
    connect?: UserFeedbackWhereUniqueInput | UserFeedbackWhereUniqueInput[]
  }

  export type DataSourceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DataSourceCreateWithoutUserInput, DataSourceUncheckedCreateWithoutUserInput> | DataSourceCreateWithoutUserInput[] | DataSourceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DataSourceCreateOrConnectWithoutUserInput | DataSourceCreateOrConnectWithoutUserInput[]
    createMany?: DataSourceCreateManyUserInputEnvelope
    connect?: DataSourceWhereUniqueInput | DataSourceWhereUniqueInput[]
  }

  export type MeetingUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<MeetingCreateWithoutOwnerInput, MeetingUncheckedCreateWithoutOwnerInput> | MeetingCreateWithoutOwnerInput[] | MeetingUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutOwnerInput | MeetingCreateOrConnectWithoutOwnerInput[]
    createMany?: MeetingCreateManyOwnerInputEnvelope
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
  }

  export type MeetingParticipantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MeetingParticipantCreateWithoutUserInput, MeetingParticipantUncheckedCreateWithoutUserInput> | MeetingParticipantCreateWithoutUserInput[] | MeetingParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MeetingParticipantCreateOrConnectWithoutUserInput | MeetingParticipantCreateOrConnectWithoutUserInput[]
    createMany?: MeetingParticipantCreateManyUserInputEnvelope
    connect?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
  }

  export type PreMeetingBriefUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PreMeetingBriefCreateWithoutUserInput, PreMeetingBriefUncheckedCreateWithoutUserInput> | PreMeetingBriefCreateWithoutUserInput[] | PreMeetingBriefUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PreMeetingBriefCreateOrConnectWithoutUserInput | PreMeetingBriefCreateOrConnectWithoutUserInput[]
    createMany?: PreMeetingBriefCreateManyUserInputEnvelope
    connect?: PreMeetingBriefWhereUniqueInput | PreMeetingBriefWhereUniqueInput[]
  }

  export type GemAlertUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GemAlertCreateWithoutUserInput, GemAlertUncheckedCreateWithoutUserInput> | GemAlertCreateWithoutUserInput[] | GemAlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GemAlertCreateOrConnectWithoutUserInput | GemAlertCreateOrConnectWithoutUserInput[]
    createMany?: GemAlertCreateManyUserInputEnvelope
    connect?: GemAlertWhereUniqueInput | GemAlertWhereUniqueInput[]
  }

  export type UserFeedbackUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFeedbackCreateWithoutUserInput, UserFeedbackUncheckedCreateWithoutUserInput> | UserFeedbackCreateWithoutUserInput[] | UserFeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFeedbackCreateOrConnectWithoutUserInput | UserFeedbackCreateOrConnectWithoutUserInput[]
    createMany?: UserFeedbackCreateManyUserInputEnvelope
    connect?: UserFeedbackWhereUniqueInput | UserFeedbackWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DataSourceUpdateManyWithoutUserNestedInput = {
    create?: XOR<DataSourceCreateWithoutUserInput, DataSourceUncheckedCreateWithoutUserInput> | DataSourceCreateWithoutUserInput[] | DataSourceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DataSourceCreateOrConnectWithoutUserInput | DataSourceCreateOrConnectWithoutUserInput[]
    upsert?: DataSourceUpsertWithWhereUniqueWithoutUserInput | DataSourceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DataSourceCreateManyUserInputEnvelope
    set?: DataSourceWhereUniqueInput | DataSourceWhereUniqueInput[]
    disconnect?: DataSourceWhereUniqueInput | DataSourceWhereUniqueInput[]
    delete?: DataSourceWhereUniqueInput | DataSourceWhereUniqueInput[]
    connect?: DataSourceWhereUniqueInput | DataSourceWhereUniqueInput[]
    update?: DataSourceUpdateWithWhereUniqueWithoutUserInput | DataSourceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DataSourceUpdateManyWithWhereWithoutUserInput | DataSourceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DataSourceScalarWhereInput | DataSourceScalarWhereInput[]
  }

  export type MeetingUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<MeetingCreateWithoutOwnerInput, MeetingUncheckedCreateWithoutOwnerInput> | MeetingCreateWithoutOwnerInput[] | MeetingUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutOwnerInput | MeetingCreateOrConnectWithoutOwnerInput[]
    upsert?: MeetingUpsertWithWhereUniqueWithoutOwnerInput | MeetingUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: MeetingCreateManyOwnerInputEnvelope
    set?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    disconnect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    delete?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    update?: MeetingUpdateWithWhereUniqueWithoutOwnerInput | MeetingUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: MeetingUpdateManyWithWhereWithoutOwnerInput | MeetingUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
  }

  export type MeetingParticipantUpdateManyWithoutUserNestedInput = {
    create?: XOR<MeetingParticipantCreateWithoutUserInput, MeetingParticipantUncheckedCreateWithoutUserInput> | MeetingParticipantCreateWithoutUserInput[] | MeetingParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MeetingParticipantCreateOrConnectWithoutUserInput | MeetingParticipantCreateOrConnectWithoutUserInput[]
    upsert?: MeetingParticipantUpsertWithWhereUniqueWithoutUserInput | MeetingParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MeetingParticipantCreateManyUserInputEnvelope
    set?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    disconnect?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    delete?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    connect?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    update?: MeetingParticipantUpdateWithWhereUniqueWithoutUserInput | MeetingParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MeetingParticipantUpdateManyWithWhereWithoutUserInput | MeetingParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MeetingParticipantScalarWhereInput | MeetingParticipantScalarWhereInput[]
  }

  export type PreMeetingBriefUpdateManyWithoutUserNestedInput = {
    create?: XOR<PreMeetingBriefCreateWithoutUserInput, PreMeetingBriefUncheckedCreateWithoutUserInput> | PreMeetingBriefCreateWithoutUserInput[] | PreMeetingBriefUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PreMeetingBriefCreateOrConnectWithoutUserInput | PreMeetingBriefCreateOrConnectWithoutUserInput[]
    upsert?: PreMeetingBriefUpsertWithWhereUniqueWithoutUserInput | PreMeetingBriefUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PreMeetingBriefCreateManyUserInputEnvelope
    set?: PreMeetingBriefWhereUniqueInput | PreMeetingBriefWhereUniqueInput[]
    disconnect?: PreMeetingBriefWhereUniqueInput | PreMeetingBriefWhereUniqueInput[]
    delete?: PreMeetingBriefWhereUniqueInput | PreMeetingBriefWhereUniqueInput[]
    connect?: PreMeetingBriefWhereUniqueInput | PreMeetingBriefWhereUniqueInput[]
    update?: PreMeetingBriefUpdateWithWhereUniqueWithoutUserInput | PreMeetingBriefUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PreMeetingBriefUpdateManyWithWhereWithoutUserInput | PreMeetingBriefUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PreMeetingBriefScalarWhereInput | PreMeetingBriefScalarWhereInput[]
  }

  export type GemAlertUpdateManyWithoutUserNestedInput = {
    create?: XOR<GemAlertCreateWithoutUserInput, GemAlertUncheckedCreateWithoutUserInput> | GemAlertCreateWithoutUserInput[] | GemAlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GemAlertCreateOrConnectWithoutUserInput | GemAlertCreateOrConnectWithoutUserInput[]
    upsert?: GemAlertUpsertWithWhereUniqueWithoutUserInput | GemAlertUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GemAlertCreateManyUserInputEnvelope
    set?: GemAlertWhereUniqueInput | GemAlertWhereUniqueInput[]
    disconnect?: GemAlertWhereUniqueInput | GemAlertWhereUniqueInput[]
    delete?: GemAlertWhereUniqueInput | GemAlertWhereUniqueInput[]
    connect?: GemAlertWhereUniqueInput | GemAlertWhereUniqueInput[]
    update?: GemAlertUpdateWithWhereUniqueWithoutUserInput | GemAlertUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GemAlertUpdateManyWithWhereWithoutUserInput | GemAlertUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GemAlertScalarWhereInput | GemAlertScalarWhereInput[]
  }

  export type UserFeedbackUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFeedbackCreateWithoutUserInput, UserFeedbackUncheckedCreateWithoutUserInput> | UserFeedbackCreateWithoutUserInput[] | UserFeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFeedbackCreateOrConnectWithoutUserInput | UserFeedbackCreateOrConnectWithoutUserInput[]
    upsert?: UserFeedbackUpsertWithWhereUniqueWithoutUserInput | UserFeedbackUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFeedbackCreateManyUserInputEnvelope
    set?: UserFeedbackWhereUniqueInput | UserFeedbackWhereUniqueInput[]
    disconnect?: UserFeedbackWhereUniqueInput | UserFeedbackWhereUniqueInput[]
    delete?: UserFeedbackWhereUniqueInput | UserFeedbackWhereUniqueInput[]
    connect?: UserFeedbackWhereUniqueInput | UserFeedbackWhereUniqueInput[]
    update?: UserFeedbackUpdateWithWhereUniqueWithoutUserInput | UserFeedbackUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFeedbackUpdateManyWithWhereWithoutUserInput | UserFeedbackUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFeedbackScalarWhereInput | UserFeedbackScalarWhereInput[]
  }

  export type DataSourceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DataSourceCreateWithoutUserInput, DataSourceUncheckedCreateWithoutUserInput> | DataSourceCreateWithoutUserInput[] | DataSourceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DataSourceCreateOrConnectWithoutUserInput | DataSourceCreateOrConnectWithoutUserInput[]
    upsert?: DataSourceUpsertWithWhereUniqueWithoutUserInput | DataSourceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DataSourceCreateManyUserInputEnvelope
    set?: DataSourceWhereUniqueInput | DataSourceWhereUniqueInput[]
    disconnect?: DataSourceWhereUniqueInput | DataSourceWhereUniqueInput[]
    delete?: DataSourceWhereUniqueInput | DataSourceWhereUniqueInput[]
    connect?: DataSourceWhereUniqueInput | DataSourceWhereUniqueInput[]
    update?: DataSourceUpdateWithWhereUniqueWithoutUserInput | DataSourceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DataSourceUpdateManyWithWhereWithoutUserInput | DataSourceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DataSourceScalarWhereInput | DataSourceScalarWhereInput[]
  }

  export type MeetingUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<MeetingCreateWithoutOwnerInput, MeetingUncheckedCreateWithoutOwnerInput> | MeetingCreateWithoutOwnerInput[] | MeetingUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutOwnerInput | MeetingCreateOrConnectWithoutOwnerInput[]
    upsert?: MeetingUpsertWithWhereUniqueWithoutOwnerInput | MeetingUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: MeetingCreateManyOwnerInputEnvelope
    set?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    disconnect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    delete?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    update?: MeetingUpdateWithWhereUniqueWithoutOwnerInput | MeetingUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: MeetingUpdateManyWithWhereWithoutOwnerInput | MeetingUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
  }

  export type MeetingParticipantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MeetingParticipantCreateWithoutUserInput, MeetingParticipantUncheckedCreateWithoutUserInput> | MeetingParticipantCreateWithoutUserInput[] | MeetingParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MeetingParticipantCreateOrConnectWithoutUserInput | MeetingParticipantCreateOrConnectWithoutUserInput[]
    upsert?: MeetingParticipantUpsertWithWhereUniqueWithoutUserInput | MeetingParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MeetingParticipantCreateManyUserInputEnvelope
    set?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    disconnect?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    delete?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    connect?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    update?: MeetingParticipantUpdateWithWhereUniqueWithoutUserInput | MeetingParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MeetingParticipantUpdateManyWithWhereWithoutUserInput | MeetingParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MeetingParticipantScalarWhereInput | MeetingParticipantScalarWhereInput[]
  }

  export type PreMeetingBriefUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PreMeetingBriefCreateWithoutUserInput, PreMeetingBriefUncheckedCreateWithoutUserInput> | PreMeetingBriefCreateWithoutUserInput[] | PreMeetingBriefUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PreMeetingBriefCreateOrConnectWithoutUserInput | PreMeetingBriefCreateOrConnectWithoutUserInput[]
    upsert?: PreMeetingBriefUpsertWithWhereUniqueWithoutUserInput | PreMeetingBriefUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PreMeetingBriefCreateManyUserInputEnvelope
    set?: PreMeetingBriefWhereUniqueInput | PreMeetingBriefWhereUniqueInput[]
    disconnect?: PreMeetingBriefWhereUniqueInput | PreMeetingBriefWhereUniqueInput[]
    delete?: PreMeetingBriefWhereUniqueInput | PreMeetingBriefWhereUniqueInput[]
    connect?: PreMeetingBriefWhereUniqueInput | PreMeetingBriefWhereUniqueInput[]
    update?: PreMeetingBriefUpdateWithWhereUniqueWithoutUserInput | PreMeetingBriefUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PreMeetingBriefUpdateManyWithWhereWithoutUserInput | PreMeetingBriefUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PreMeetingBriefScalarWhereInput | PreMeetingBriefScalarWhereInput[]
  }

  export type GemAlertUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GemAlertCreateWithoutUserInput, GemAlertUncheckedCreateWithoutUserInput> | GemAlertCreateWithoutUserInput[] | GemAlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GemAlertCreateOrConnectWithoutUserInput | GemAlertCreateOrConnectWithoutUserInput[]
    upsert?: GemAlertUpsertWithWhereUniqueWithoutUserInput | GemAlertUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GemAlertCreateManyUserInputEnvelope
    set?: GemAlertWhereUniqueInput | GemAlertWhereUniqueInput[]
    disconnect?: GemAlertWhereUniqueInput | GemAlertWhereUniqueInput[]
    delete?: GemAlertWhereUniqueInput | GemAlertWhereUniqueInput[]
    connect?: GemAlertWhereUniqueInput | GemAlertWhereUniqueInput[]
    update?: GemAlertUpdateWithWhereUniqueWithoutUserInput | GemAlertUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GemAlertUpdateManyWithWhereWithoutUserInput | GemAlertUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GemAlertScalarWhereInput | GemAlertScalarWhereInput[]
  }

  export type UserFeedbackUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFeedbackCreateWithoutUserInput, UserFeedbackUncheckedCreateWithoutUserInput> | UserFeedbackCreateWithoutUserInput[] | UserFeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFeedbackCreateOrConnectWithoutUserInput | UserFeedbackCreateOrConnectWithoutUserInput[]
    upsert?: UserFeedbackUpsertWithWhereUniqueWithoutUserInput | UserFeedbackUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFeedbackCreateManyUserInputEnvelope
    set?: UserFeedbackWhereUniqueInput | UserFeedbackWhereUniqueInput[]
    disconnect?: UserFeedbackWhereUniqueInput | UserFeedbackWhereUniqueInput[]
    delete?: UserFeedbackWhereUniqueInput | UserFeedbackWhereUniqueInput[]
    connect?: UserFeedbackWhereUniqueInput | UserFeedbackWhereUniqueInput[]
    update?: UserFeedbackUpdateWithWhereUniqueWithoutUserInput | UserFeedbackUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFeedbackUpdateManyWithWhereWithoutUserInput | UserFeedbackUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFeedbackScalarWhereInput | UserFeedbackScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDataSourcesInput = {
    create?: XOR<UserCreateWithoutDataSourcesInput, UserUncheckedCreateWithoutDataSourcesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDataSourcesInput
    connect?: UserWhereUniqueInput
  }

  export type SyncedContentCreateNestedManyWithoutDataSourceInput = {
    create?: XOR<SyncedContentCreateWithoutDataSourceInput, SyncedContentUncheckedCreateWithoutDataSourceInput> | SyncedContentCreateWithoutDataSourceInput[] | SyncedContentUncheckedCreateWithoutDataSourceInput[]
    connectOrCreate?: SyncedContentCreateOrConnectWithoutDataSourceInput | SyncedContentCreateOrConnectWithoutDataSourceInput[]
    createMany?: SyncedContentCreateManyDataSourceInputEnvelope
    connect?: SyncedContentWhereUniqueInput | SyncedContentWhereUniqueInput[]
  }

  export type SyncedContentUncheckedCreateNestedManyWithoutDataSourceInput = {
    create?: XOR<SyncedContentCreateWithoutDataSourceInput, SyncedContentUncheckedCreateWithoutDataSourceInput> | SyncedContentCreateWithoutDataSourceInput[] | SyncedContentUncheckedCreateWithoutDataSourceInput[]
    connectOrCreate?: SyncedContentCreateOrConnectWithoutDataSourceInput | SyncedContentCreateOrConnectWithoutDataSourceInput[]
    createMany?: SyncedContentCreateManyDataSourceInputEnvelope
    connect?: SyncedContentWhereUniqueInput | SyncedContentWhereUniqueInput[]
  }

  export type EnumDataSourceTypeFieldUpdateOperationsInput = {
    set?: $Enums.DataSourceType
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutDataSourcesNestedInput = {
    create?: XOR<UserCreateWithoutDataSourcesInput, UserUncheckedCreateWithoutDataSourcesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDataSourcesInput
    upsert?: UserUpsertWithoutDataSourcesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDataSourcesInput, UserUpdateWithoutDataSourcesInput>, UserUncheckedUpdateWithoutDataSourcesInput>
  }

  export type SyncedContentUpdateManyWithoutDataSourceNestedInput = {
    create?: XOR<SyncedContentCreateWithoutDataSourceInput, SyncedContentUncheckedCreateWithoutDataSourceInput> | SyncedContentCreateWithoutDataSourceInput[] | SyncedContentUncheckedCreateWithoutDataSourceInput[]
    connectOrCreate?: SyncedContentCreateOrConnectWithoutDataSourceInput | SyncedContentCreateOrConnectWithoutDataSourceInput[]
    upsert?: SyncedContentUpsertWithWhereUniqueWithoutDataSourceInput | SyncedContentUpsertWithWhereUniqueWithoutDataSourceInput[]
    createMany?: SyncedContentCreateManyDataSourceInputEnvelope
    set?: SyncedContentWhereUniqueInput | SyncedContentWhereUniqueInput[]
    disconnect?: SyncedContentWhereUniqueInput | SyncedContentWhereUniqueInput[]
    delete?: SyncedContentWhereUniqueInput | SyncedContentWhereUniqueInput[]
    connect?: SyncedContentWhereUniqueInput | SyncedContentWhereUniqueInput[]
    update?: SyncedContentUpdateWithWhereUniqueWithoutDataSourceInput | SyncedContentUpdateWithWhereUniqueWithoutDataSourceInput[]
    updateMany?: SyncedContentUpdateManyWithWhereWithoutDataSourceInput | SyncedContentUpdateManyWithWhereWithoutDataSourceInput[]
    deleteMany?: SyncedContentScalarWhereInput | SyncedContentScalarWhereInput[]
  }

  export type SyncedContentUncheckedUpdateManyWithoutDataSourceNestedInput = {
    create?: XOR<SyncedContentCreateWithoutDataSourceInput, SyncedContentUncheckedCreateWithoutDataSourceInput> | SyncedContentCreateWithoutDataSourceInput[] | SyncedContentUncheckedCreateWithoutDataSourceInput[]
    connectOrCreate?: SyncedContentCreateOrConnectWithoutDataSourceInput | SyncedContentCreateOrConnectWithoutDataSourceInput[]
    upsert?: SyncedContentUpsertWithWhereUniqueWithoutDataSourceInput | SyncedContentUpsertWithWhereUniqueWithoutDataSourceInput[]
    createMany?: SyncedContentCreateManyDataSourceInputEnvelope
    set?: SyncedContentWhereUniqueInput | SyncedContentWhereUniqueInput[]
    disconnect?: SyncedContentWhereUniqueInput | SyncedContentWhereUniqueInput[]
    delete?: SyncedContentWhereUniqueInput | SyncedContentWhereUniqueInput[]
    connect?: SyncedContentWhereUniqueInput | SyncedContentWhereUniqueInput[]
    update?: SyncedContentUpdateWithWhereUniqueWithoutDataSourceInput | SyncedContentUpdateWithWhereUniqueWithoutDataSourceInput[]
    updateMany?: SyncedContentUpdateManyWithWhereWithoutDataSourceInput | SyncedContentUpdateManyWithWhereWithoutDataSourceInput[]
    deleteMany?: SyncedContentScalarWhereInput | SyncedContentScalarWhereInput[]
  }

  export type DataSourceCreateNestedOneWithoutSyncedContentsInput = {
    create?: XOR<DataSourceCreateWithoutSyncedContentsInput, DataSourceUncheckedCreateWithoutSyncedContentsInput>
    connectOrCreate?: DataSourceCreateOrConnectWithoutSyncedContentsInput
    connect?: DataSourceWhereUniqueInput
  }

  export type DataSourceUpdateOneRequiredWithoutSyncedContentsNestedInput = {
    create?: XOR<DataSourceCreateWithoutSyncedContentsInput, DataSourceUncheckedCreateWithoutSyncedContentsInput>
    connectOrCreate?: DataSourceCreateOrConnectWithoutSyncedContentsInput
    upsert?: DataSourceUpsertWithoutSyncedContentsInput
    connect?: DataSourceWhereUniqueInput
    update?: XOR<XOR<DataSourceUpdateToOneWithWhereWithoutSyncedContentsInput, DataSourceUpdateWithoutSyncedContentsInput>, DataSourceUncheckedUpdateWithoutSyncedContentsInput>
  }

  export type UserCreateNestedOneWithoutMeetingsAsOwnerInput = {
    create?: XOR<UserCreateWithoutMeetingsAsOwnerInput, UserUncheckedCreateWithoutMeetingsAsOwnerInput>
    connectOrCreate?: UserCreateOrConnectWithoutMeetingsAsOwnerInput
    connect?: UserWhereUniqueInput
  }

  export type MeetingParticipantCreateNestedManyWithoutMeetingInput = {
    create?: XOR<MeetingParticipantCreateWithoutMeetingInput, MeetingParticipantUncheckedCreateWithoutMeetingInput> | MeetingParticipantCreateWithoutMeetingInput[] | MeetingParticipantUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: MeetingParticipantCreateOrConnectWithoutMeetingInput | MeetingParticipantCreateOrConnectWithoutMeetingInput[]
    createMany?: MeetingParticipantCreateManyMeetingInputEnvelope
    connect?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
  }

  export type PreMeetingBriefCreateNestedOneWithoutMeetingInput = {
    create?: XOR<PreMeetingBriefCreateWithoutMeetingInput, PreMeetingBriefUncheckedCreateWithoutMeetingInput>
    connectOrCreate?: PreMeetingBriefCreateOrConnectWithoutMeetingInput
    connect?: PreMeetingBriefWhereUniqueInput
  }

  export type GemAlertCreateNestedManyWithoutMeetingInput = {
    create?: XOR<GemAlertCreateWithoutMeetingInput, GemAlertUncheckedCreateWithoutMeetingInput> | GemAlertCreateWithoutMeetingInput[] | GemAlertUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: GemAlertCreateOrConnectWithoutMeetingInput | GemAlertCreateOrConnectWithoutMeetingInput[]
    createMany?: GemAlertCreateManyMeetingInputEnvelope
    connect?: GemAlertWhereUniqueInput | GemAlertWhereUniqueInput[]
  }

  export type MeetingParticipantUncheckedCreateNestedManyWithoutMeetingInput = {
    create?: XOR<MeetingParticipantCreateWithoutMeetingInput, MeetingParticipantUncheckedCreateWithoutMeetingInput> | MeetingParticipantCreateWithoutMeetingInput[] | MeetingParticipantUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: MeetingParticipantCreateOrConnectWithoutMeetingInput | MeetingParticipantCreateOrConnectWithoutMeetingInput[]
    createMany?: MeetingParticipantCreateManyMeetingInputEnvelope
    connect?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
  }

  export type PreMeetingBriefUncheckedCreateNestedOneWithoutMeetingInput = {
    create?: XOR<PreMeetingBriefCreateWithoutMeetingInput, PreMeetingBriefUncheckedCreateWithoutMeetingInput>
    connectOrCreate?: PreMeetingBriefCreateOrConnectWithoutMeetingInput
    connect?: PreMeetingBriefWhereUniqueInput
  }

  export type GemAlertUncheckedCreateNestedManyWithoutMeetingInput = {
    create?: XOR<GemAlertCreateWithoutMeetingInput, GemAlertUncheckedCreateWithoutMeetingInput> | GemAlertCreateWithoutMeetingInput[] | GemAlertUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: GemAlertCreateOrConnectWithoutMeetingInput | GemAlertCreateOrConnectWithoutMeetingInput[]
    createMany?: GemAlertCreateManyMeetingInputEnvelope
    connect?: GemAlertWhereUniqueInput | GemAlertWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutMeetingsAsOwnerNestedInput = {
    create?: XOR<UserCreateWithoutMeetingsAsOwnerInput, UserUncheckedCreateWithoutMeetingsAsOwnerInput>
    connectOrCreate?: UserCreateOrConnectWithoutMeetingsAsOwnerInput
    upsert?: UserUpsertWithoutMeetingsAsOwnerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMeetingsAsOwnerInput, UserUpdateWithoutMeetingsAsOwnerInput>, UserUncheckedUpdateWithoutMeetingsAsOwnerInput>
  }

  export type MeetingParticipantUpdateManyWithoutMeetingNestedInput = {
    create?: XOR<MeetingParticipantCreateWithoutMeetingInput, MeetingParticipantUncheckedCreateWithoutMeetingInput> | MeetingParticipantCreateWithoutMeetingInput[] | MeetingParticipantUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: MeetingParticipantCreateOrConnectWithoutMeetingInput | MeetingParticipantCreateOrConnectWithoutMeetingInput[]
    upsert?: MeetingParticipantUpsertWithWhereUniqueWithoutMeetingInput | MeetingParticipantUpsertWithWhereUniqueWithoutMeetingInput[]
    createMany?: MeetingParticipantCreateManyMeetingInputEnvelope
    set?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    disconnect?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    delete?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    connect?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    update?: MeetingParticipantUpdateWithWhereUniqueWithoutMeetingInput | MeetingParticipantUpdateWithWhereUniqueWithoutMeetingInput[]
    updateMany?: MeetingParticipantUpdateManyWithWhereWithoutMeetingInput | MeetingParticipantUpdateManyWithWhereWithoutMeetingInput[]
    deleteMany?: MeetingParticipantScalarWhereInput | MeetingParticipantScalarWhereInput[]
  }

  export type PreMeetingBriefUpdateOneWithoutMeetingNestedInput = {
    create?: XOR<PreMeetingBriefCreateWithoutMeetingInput, PreMeetingBriefUncheckedCreateWithoutMeetingInput>
    connectOrCreate?: PreMeetingBriefCreateOrConnectWithoutMeetingInput
    upsert?: PreMeetingBriefUpsertWithoutMeetingInput
    disconnect?: PreMeetingBriefWhereInput | boolean
    delete?: PreMeetingBriefWhereInput | boolean
    connect?: PreMeetingBriefWhereUniqueInput
    update?: XOR<XOR<PreMeetingBriefUpdateToOneWithWhereWithoutMeetingInput, PreMeetingBriefUpdateWithoutMeetingInput>, PreMeetingBriefUncheckedUpdateWithoutMeetingInput>
  }

  export type GemAlertUpdateManyWithoutMeetingNestedInput = {
    create?: XOR<GemAlertCreateWithoutMeetingInput, GemAlertUncheckedCreateWithoutMeetingInput> | GemAlertCreateWithoutMeetingInput[] | GemAlertUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: GemAlertCreateOrConnectWithoutMeetingInput | GemAlertCreateOrConnectWithoutMeetingInput[]
    upsert?: GemAlertUpsertWithWhereUniqueWithoutMeetingInput | GemAlertUpsertWithWhereUniqueWithoutMeetingInput[]
    createMany?: GemAlertCreateManyMeetingInputEnvelope
    set?: GemAlertWhereUniqueInput | GemAlertWhereUniqueInput[]
    disconnect?: GemAlertWhereUniqueInput | GemAlertWhereUniqueInput[]
    delete?: GemAlertWhereUniqueInput | GemAlertWhereUniqueInput[]
    connect?: GemAlertWhereUniqueInput | GemAlertWhereUniqueInput[]
    update?: GemAlertUpdateWithWhereUniqueWithoutMeetingInput | GemAlertUpdateWithWhereUniqueWithoutMeetingInput[]
    updateMany?: GemAlertUpdateManyWithWhereWithoutMeetingInput | GemAlertUpdateManyWithWhereWithoutMeetingInput[]
    deleteMany?: GemAlertScalarWhereInput | GemAlertScalarWhereInput[]
  }

  export type MeetingParticipantUncheckedUpdateManyWithoutMeetingNestedInput = {
    create?: XOR<MeetingParticipantCreateWithoutMeetingInput, MeetingParticipantUncheckedCreateWithoutMeetingInput> | MeetingParticipantCreateWithoutMeetingInput[] | MeetingParticipantUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: MeetingParticipantCreateOrConnectWithoutMeetingInput | MeetingParticipantCreateOrConnectWithoutMeetingInput[]
    upsert?: MeetingParticipantUpsertWithWhereUniqueWithoutMeetingInput | MeetingParticipantUpsertWithWhereUniqueWithoutMeetingInput[]
    createMany?: MeetingParticipantCreateManyMeetingInputEnvelope
    set?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    disconnect?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    delete?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    connect?: MeetingParticipantWhereUniqueInput | MeetingParticipantWhereUniqueInput[]
    update?: MeetingParticipantUpdateWithWhereUniqueWithoutMeetingInput | MeetingParticipantUpdateWithWhereUniqueWithoutMeetingInput[]
    updateMany?: MeetingParticipantUpdateManyWithWhereWithoutMeetingInput | MeetingParticipantUpdateManyWithWhereWithoutMeetingInput[]
    deleteMany?: MeetingParticipantScalarWhereInput | MeetingParticipantScalarWhereInput[]
  }

  export type PreMeetingBriefUncheckedUpdateOneWithoutMeetingNestedInput = {
    create?: XOR<PreMeetingBriefCreateWithoutMeetingInput, PreMeetingBriefUncheckedCreateWithoutMeetingInput>
    connectOrCreate?: PreMeetingBriefCreateOrConnectWithoutMeetingInput
    upsert?: PreMeetingBriefUpsertWithoutMeetingInput
    disconnect?: PreMeetingBriefWhereInput | boolean
    delete?: PreMeetingBriefWhereInput | boolean
    connect?: PreMeetingBriefWhereUniqueInput
    update?: XOR<XOR<PreMeetingBriefUpdateToOneWithWhereWithoutMeetingInput, PreMeetingBriefUpdateWithoutMeetingInput>, PreMeetingBriefUncheckedUpdateWithoutMeetingInput>
  }

  export type GemAlertUncheckedUpdateManyWithoutMeetingNestedInput = {
    create?: XOR<GemAlertCreateWithoutMeetingInput, GemAlertUncheckedCreateWithoutMeetingInput> | GemAlertCreateWithoutMeetingInput[] | GemAlertUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: GemAlertCreateOrConnectWithoutMeetingInput | GemAlertCreateOrConnectWithoutMeetingInput[]
    upsert?: GemAlertUpsertWithWhereUniqueWithoutMeetingInput | GemAlertUpsertWithWhereUniqueWithoutMeetingInput[]
    createMany?: GemAlertCreateManyMeetingInputEnvelope
    set?: GemAlertWhereUniqueInput | GemAlertWhereUniqueInput[]
    disconnect?: GemAlertWhereUniqueInput | GemAlertWhereUniqueInput[]
    delete?: GemAlertWhereUniqueInput | GemAlertWhereUniqueInput[]
    connect?: GemAlertWhereUniqueInput | GemAlertWhereUniqueInput[]
    update?: GemAlertUpdateWithWhereUniqueWithoutMeetingInput | GemAlertUpdateWithWhereUniqueWithoutMeetingInput[]
    updateMany?: GemAlertUpdateManyWithWhereWithoutMeetingInput | GemAlertUpdateManyWithWhereWithoutMeetingInput[]
    deleteMany?: GemAlertScalarWhereInput | GemAlertScalarWhereInput[]
  }

  export type MeetingCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<MeetingCreateWithoutParticipantsInput, MeetingUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: MeetingCreateOrConnectWithoutParticipantsInput
    connect?: MeetingWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMeetingAttendeesInput = {
    create?: XOR<UserCreateWithoutMeetingAttendeesInput, UserUncheckedCreateWithoutMeetingAttendeesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMeetingAttendeesInput
    connect?: UserWhereUniqueInput
  }

  export type MeetingUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<MeetingCreateWithoutParticipantsInput, MeetingUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: MeetingCreateOrConnectWithoutParticipantsInput
    upsert?: MeetingUpsertWithoutParticipantsInput
    connect?: MeetingWhereUniqueInput
    update?: XOR<XOR<MeetingUpdateToOneWithWhereWithoutParticipantsInput, MeetingUpdateWithoutParticipantsInput>, MeetingUncheckedUpdateWithoutParticipantsInput>
  }

  export type UserUpdateOneWithoutMeetingAttendeesNestedInput = {
    create?: XOR<UserCreateWithoutMeetingAttendeesInput, UserUncheckedCreateWithoutMeetingAttendeesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMeetingAttendeesInput
    upsert?: UserUpsertWithoutMeetingAttendeesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMeetingAttendeesInput, UserUpdateWithoutMeetingAttendeesInput>, UserUncheckedUpdateWithoutMeetingAttendeesInput>
  }

  export type MeetingCreateNestedOneWithoutPreMeetingBriefInput = {
    create?: XOR<MeetingCreateWithoutPreMeetingBriefInput, MeetingUncheckedCreateWithoutPreMeetingBriefInput>
    connectOrCreate?: MeetingCreateOrConnectWithoutPreMeetingBriefInput
    connect?: MeetingWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPreMeetingBriefsInput = {
    create?: XOR<UserCreateWithoutPreMeetingBriefsInput, UserUncheckedCreateWithoutPreMeetingBriefsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreMeetingBriefsInput
    connect?: UserWhereUniqueInput
  }

  export type MeetingUpdateOneRequiredWithoutPreMeetingBriefNestedInput = {
    create?: XOR<MeetingCreateWithoutPreMeetingBriefInput, MeetingUncheckedCreateWithoutPreMeetingBriefInput>
    connectOrCreate?: MeetingCreateOrConnectWithoutPreMeetingBriefInput
    upsert?: MeetingUpsertWithoutPreMeetingBriefInput
    connect?: MeetingWhereUniqueInput
    update?: XOR<XOR<MeetingUpdateToOneWithWhereWithoutPreMeetingBriefInput, MeetingUpdateWithoutPreMeetingBriefInput>, MeetingUncheckedUpdateWithoutPreMeetingBriefInput>
  }

  export type UserUpdateOneRequiredWithoutPreMeetingBriefsNestedInput = {
    create?: XOR<UserCreateWithoutPreMeetingBriefsInput, UserUncheckedCreateWithoutPreMeetingBriefsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreMeetingBriefsInput
    upsert?: UserUpsertWithoutPreMeetingBriefsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPreMeetingBriefsInput, UserUpdateWithoutPreMeetingBriefsInput>, UserUncheckedUpdateWithoutPreMeetingBriefsInput>
  }

  export type MeetingCreateNestedOneWithoutGemAlertsInput = {
    create?: XOR<MeetingCreateWithoutGemAlertsInput, MeetingUncheckedCreateWithoutGemAlertsInput>
    connectOrCreate?: MeetingCreateOrConnectWithoutGemAlertsInput
    connect?: MeetingWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGemAlertsInput = {
    create?: XOR<UserCreateWithoutGemAlertsInput, UserUncheckedCreateWithoutGemAlertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGemAlertsInput
    connect?: UserWhereUniqueInput
  }

  export type UserFeedbackCreateNestedOneWithoutGemAlertInput = {
    create?: XOR<UserFeedbackCreateWithoutGemAlertInput, UserFeedbackUncheckedCreateWithoutGemAlertInput>
    connectOrCreate?: UserFeedbackCreateOrConnectWithoutGemAlertInput
    connect?: UserFeedbackWhereUniqueInput
  }

  export type UserFeedbackUncheckedCreateNestedOneWithoutGemAlertInput = {
    create?: XOR<UserFeedbackCreateWithoutGemAlertInput, UserFeedbackUncheckedCreateWithoutGemAlertInput>
    connectOrCreate?: UserFeedbackCreateOrConnectWithoutGemAlertInput
    connect?: UserFeedbackWhereUniqueInput
  }

  export type MeetingUpdateOneRequiredWithoutGemAlertsNestedInput = {
    create?: XOR<MeetingCreateWithoutGemAlertsInput, MeetingUncheckedCreateWithoutGemAlertsInput>
    connectOrCreate?: MeetingCreateOrConnectWithoutGemAlertsInput
    upsert?: MeetingUpsertWithoutGemAlertsInput
    connect?: MeetingWhereUniqueInput
    update?: XOR<XOR<MeetingUpdateToOneWithWhereWithoutGemAlertsInput, MeetingUpdateWithoutGemAlertsInput>, MeetingUncheckedUpdateWithoutGemAlertsInput>
  }

  export type UserUpdateOneRequiredWithoutGemAlertsNestedInput = {
    create?: XOR<UserCreateWithoutGemAlertsInput, UserUncheckedCreateWithoutGemAlertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGemAlertsInput
    upsert?: UserUpsertWithoutGemAlertsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGemAlertsInput, UserUpdateWithoutGemAlertsInput>, UserUncheckedUpdateWithoutGemAlertsInput>
  }

  export type UserFeedbackUpdateOneWithoutGemAlertNestedInput = {
    create?: XOR<UserFeedbackCreateWithoutGemAlertInput, UserFeedbackUncheckedCreateWithoutGemAlertInput>
    connectOrCreate?: UserFeedbackCreateOrConnectWithoutGemAlertInput
    upsert?: UserFeedbackUpsertWithoutGemAlertInput
    disconnect?: UserFeedbackWhereInput | boolean
    delete?: UserFeedbackWhereInput | boolean
    connect?: UserFeedbackWhereUniqueInput
    update?: XOR<XOR<UserFeedbackUpdateToOneWithWhereWithoutGemAlertInput, UserFeedbackUpdateWithoutGemAlertInput>, UserFeedbackUncheckedUpdateWithoutGemAlertInput>
  }

  export type UserFeedbackUncheckedUpdateOneWithoutGemAlertNestedInput = {
    create?: XOR<UserFeedbackCreateWithoutGemAlertInput, UserFeedbackUncheckedCreateWithoutGemAlertInput>
    connectOrCreate?: UserFeedbackCreateOrConnectWithoutGemAlertInput
    upsert?: UserFeedbackUpsertWithoutGemAlertInput
    disconnect?: UserFeedbackWhereInput | boolean
    delete?: UserFeedbackWhereInput | boolean
    connect?: UserFeedbackWhereUniqueInput
    update?: XOR<XOR<UserFeedbackUpdateToOneWithWhereWithoutGemAlertInput, UserFeedbackUpdateWithoutGemAlertInput>, UserFeedbackUncheckedUpdateWithoutGemAlertInput>
  }

  export type UserCreateNestedOneWithoutUserFeedbacksInput = {
    create?: XOR<UserCreateWithoutUserFeedbacksInput, UserUncheckedCreateWithoutUserFeedbacksInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserFeedbacksInput
    connect?: UserWhereUniqueInput
  }

  export type GemAlertCreateNestedOneWithoutUserFeedbackInput = {
    create?: XOR<GemAlertCreateWithoutUserFeedbackInput, GemAlertUncheckedCreateWithoutUserFeedbackInput>
    connectOrCreate?: GemAlertCreateOrConnectWithoutUserFeedbackInput
    connect?: GemAlertWhereUniqueInput
  }

  export type EnumFeedbackRatingFieldUpdateOperationsInput = {
    set?: $Enums.FeedbackRating
  }

  export type UserUpdateOneRequiredWithoutUserFeedbacksNestedInput = {
    create?: XOR<UserCreateWithoutUserFeedbacksInput, UserUncheckedCreateWithoutUserFeedbacksInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserFeedbacksInput
    upsert?: UserUpsertWithoutUserFeedbacksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserFeedbacksInput, UserUpdateWithoutUserFeedbacksInput>, UserUncheckedUpdateWithoutUserFeedbacksInput>
  }

  export type GemAlertUpdateOneWithoutUserFeedbackNestedInput = {
    create?: XOR<GemAlertCreateWithoutUserFeedbackInput, GemAlertUncheckedCreateWithoutUserFeedbackInput>
    connectOrCreate?: GemAlertCreateOrConnectWithoutUserFeedbackInput
    upsert?: GemAlertUpsertWithoutUserFeedbackInput
    disconnect?: GemAlertWhereInput | boolean
    delete?: GemAlertWhereInput | boolean
    connect?: GemAlertWhereUniqueInput
    update?: XOR<XOR<GemAlertUpdateToOneWithWhereWithoutUserFeedbackInput, GemAlertUpdateWithoutUserFeedbackInput>, GemAlertUncheckedUpdateWithoutUserFeedbackInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumDataSourceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DataSourceType | EnumDataSourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DataSourceType[] | ListEnumDataSourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DataSourceType[] | ListEnumDataSourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDataSourceTypeFilter<$PrismaModel> | $Enums.DataSourceType
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumDataSourceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DataSourceType | EnumDataSourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DataSourceType[] | ListEnumDataSourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DataSourceType[] | ListEnumDataSourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDataSourceTypeWithAggregatesFilter<$PrismaModel> | $Enums.DataSourceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDataSourceTypeFilter<$PrismaModel>
    _max?: NestedEnumDataSourceTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumFeedbackRatingFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedbackRating | EnumFeedbackRatingFieldRefInput<$PrismaModel>
    in?: $Enums.FeedbackRating[] | ListEnumFeedbackRatingFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeedbackRating[] | ListEnumFeedbackRatingFieldRefInput<$PrismaModel>
    not?: NestedEnumFeedbackRatingFilter<$PrismaModel> | $Enums.FeedbackRating
  }

  export type NestedEnumFeedbackRatingWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeedbackRating | EnumFeedbackRatingFieldRefInput<$PrismaModel>
    in?: $Enums.FeedbackRating[] | ListEnumFeedbackRatingFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeedbackRating[] | ListEnumFeedbackRatingFieldRefInput<$PrismaModel>
    not?: NestedEnumFeedbackRatingWithAggregatesFilter<$PrismaModel> | $Enums.FeedbackRating
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFeedbackRatingFilter<$PrismaModel>
    _max?: NestedEnumFeedbackRatingFilter<$PrismaModel>
  }

  export type DataSourceCreateWithoutUserInput = {
    id?: string
    type: $Enums.DataSourceType
    name: string
    accessToken?: string | null
    refreshToken?: string | null
    scope?: string | null
    lastSyncedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncedContents?: SyncedContentCreateNestedManyWithoutDataSourceInput
  }

  export type DataSourceUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.DataSourceType
    name: string
    accessToken?: string | null
    refreshToken?: string | null
    scope?: string | null
    lastSyncedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncedContents?: SyncedContentUncheckedCreateNestedManyWithoutDataSourceInput
  }

  export type DataSourceCreateOrConnectWithoutUserInput = {
    where: DataSourceWhereUniqueInput
    create: XOR<DataSourceCreateWithoutUserInput, DataSourceUncheckedCreateWithoutUserInput>
  }

  export type DataSourceCreateManyUserInputEnvelope = {
    data: DataSourceCreateManyUserInput | DataSourceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MeetingCreateWithoutOwnerInput = {
    id?: string
    title?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    sourceCalendarEventId?: string | null
    platformUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: MeetingParticipantCreateNestedManyWithoutMeetingInput
    preMeetingBrief?: PreMeetingBriefCreateNestedOneWithoutMeetingInput
    gemAlerts?: GemAlertCreateNestedManyWithoutMeetingInput
  }

  export type MeetingUncheckedCreateWithoutOwnerInput = {
    id?: string
    title?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    sourceCalendarEventId?: string | null
    platformUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: MeetingParticipantUncheckedCreateNestedManyWithoutMeetingInput
    preMeetingBrief?: PreMeetingBriefUncheckedCreateNestedOneWithoutMeetingInput
    gemAlerts?: GemAlertUncheckedCreateNestedManyWithoutMeetingInput
  }

  export type MeetingCreateOrConnectWithoutOwnerInput = {
    where: MeetingWhereUniqueInput
    create: XOR<MeetingCreateWithoutOwnerInput, MeetingUncheckedCreateWithoutOwnerInput>
  }

  export type MeetingCreateManyOwnerInputEnvelope = {
    data: MeetingCreateManyOwnerInput | MeetingCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type MeetingParticipantCreateWithoutUserInput = {
    id?: string
    name?: string | null
    email?: string | null
    role?: string | null
    insights?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    meeting: MeetingCreateNestedOneWithoutParticipantsInput
  }

  export type MeetingParticipantUncheckedCreateWithoutUserInput = {
    id?: string
    meetingId: string
    name?: string | null
    email?: string | null
    role?: string | null
    insights?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingParticipantCreateOrConnectWithoutUserInput = {
    where: MeetingParticipantWhereUniqueInput
    create: XOR<MeetingParticipantCreateWithoutUserInput, MeetingParticipantUncheckedCreateWithoutUserInput>
  }

  export type MeetingParticipantCreateManyUserInputEnvelope = {
    data: MeetingParticipantCreateManyUserInput | MeetingParticipantCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PreMeetingBriefCreateWithoutUserInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    generatedAt?: Date | string
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meeting: MeetingCreateNestedOneWithoutPreMeetingBriefInput
  }

  export type PreMeetingBriefUncheckedCreateWithoutUserInput = {
    id?: string
    meetingId: string
    content: JsonNullValueInput | InputJsonValue
    generatedAt?: Date | string
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PreMeetingBriefCreateOrConnectWithoutUserInput = {
    where: PreMeetingBriefWhereUniqueInput
    create: XOR<PreMeetingBriefCreateWithoutUserInput, PreMeetingBriefUncheckedCreateWithoutUserInput>
  }

  export type PreMeetingBriefCreateManyUserInputEnvelope = {
    data: PreMeetingBriefCreateManyUserInput | PreMeetingBriefCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GemAlertCreateWithoutUserInput = {
    id?: string
    timestamp?: Date | string
    trigger?: string | null
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    meeting: MeetingCreateNestedOneWithoutGemAlertsInput
    userFeedback?: UserFeedbackCreateNestedOneWithoutGemAlertInput
  }

  export type GemAlertUncheckedCreateWithoutUserInput = {
    id?: string
    meetingId: string
    timestamp?: Date | string
    trigger?: string | null
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userFeedback?: UserFeedbackUncheckedCreateNestedOneWithoutGemAlertInput
  }

  export type GemAlertCreateOrConnectWithoutUserInput = {
    where: GemAlertWhereUniqueInput
    create: XOR<GemAlertCreateWithoutUserInput, GemAlertUncheckedCreateWithoutUserInput>
  }

  export type GemAlertCreateManyUserInputEnvelope = {
    data: GemAlertCreateManyUserInput | GemAlertCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserFeedbackCreateWithoutUserInput = {
    id?: string
    rating: $Enums.FeedbackRating
    comment?: string | null
    createdAt?: Date | string
    gemAlert?: GemAlertCreateNestedOneWithoutUserFeedbackInput
  }

  export type UserFeedbackUncheckedCreateWithoutUserInput = {
    id?: string
    gemAlertId?: string | null
    rating: $Enums.FeedbackRating
    comment?: string | null
    createdAt?: Date | string
  }

  export type UserFeedbackCreateOrConnectWithoutUserInput = {
    where: UserFeedbackWhereUniqueInput
    create: XOR<UserFeedbackCreateWithoutUserInput, UserFeedbackUncheckedCreateWithoutUserInput>
  }

  export type UserFeedbackCreateManyUserInputEnvelope = {
    data: UserFeedbackCreateManyUserInput | UserFeedbackCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DataSourceUpsertWithWhereUniqueWithoutUserInput = {
    where: DataSourceWhereUniqueInput
    update: XOR<DataSourceUpdateWithoutUserInput, DataSourceUncheckedUpdateWithoutUserInput>
    create: XOR<DataSourceCreateWithoutUserInput, DataSourceUncheckedCreateWithoutUserInput>
  }

  export type DataSourceUpdateWithWhereUniqueWithoutUserInput = {
    where: DataSourceWhereUniqueInput
    data: XOR<DataSourceUpdateWithoutUserInput, DataSourceUncheckedUpdateWithoutUserInput>
  }

  export type DataSourceUpdateManyWithWhereWithoutUserInput = {
    where: DataSourceScalarWhereInput
    data: XOR<DataSourceUpdateManyMutationInput, DataSourceUncheckedUpdateManyWithoutUserInput>
  }

  export type DataSourceScalarWhereInput = {
    AND?: DataSourceScalarWhereInput | DataSourceScalarWhereInput[]
    OR?: DataSourceScalarWhereInput[]
    NOT?: DataSourceScalarWhereInput | DataSourceScalarWhereInput[]
    id?: StringFilter<"DataSource"> | string
    userId?: StringFilter<"DataSource"> | string
    type?: EnumDataSourceTypeFilter<"DataSource"> | $Enums.DataSourceType
    name?: StringFilter<"DataSource"> | string
    accessToken?: StringNullableFilter<"DataSource"> | string | null
    refreshToken?: StringNullableFilter<"DataSource"> | string | null
    scope?: StringNullableFilter<"DataSource"> | string | null
    lastSyncedAt?: DateTimeNullableFilter<"DataSource"> | Date | string | null
    createdAt?: DateTimeFilter<"DataSource"> | Date | string
    updatedAt?: DateTimeFilter<"DataSource"> | Date | string
  }

  export type MeetingUpsertWithWhereUniqueWithoutOwnerInput = {
    where: MeetingWhereUniqueInput
    update: XOR<MeetingUpdateWithoutOwnerInput, MeetingUncheckedUpdateWithoutOwnerInput>
    create: XOR<MeetingCreateWithoutOwnerInput, MeetingUncheckedCreateWithoutOwnerInput>
  }

  export type MeetingUpdateWithWhereUniqueWithoutOwnerInput = {
    where: MeetingWhereUniqueInput
    data: XOR<MeetingUpdateWithoutOwnerInput, MeetingUncheckedUpdateWithoutOwnerInput>
  }

  export type MeetingUpdateManyWithWhereWithoutOwnerInput = {
    where: MeetingScalarWhereInput
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyWithoutOwnerInput>
  }

  export type MeetingScalarWhereInput = {
    AND?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
    OR?: MeetingScalarWhereInput[]
    NOT?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
    id?: StringFilter<"Meeting"> | string
    ownerId?: StringFilter<"Meeting"> | string
    title?: StringNullableFilter<"Meeting"> | string | null
    startTime?: DateTimeFilter<"Meeting"> | Date | string
    endTime?: DateTimeNullableFilter<"Meeting"> | Date | string | null
    sourceCalendarEventId?: StringNullableFilter<"Meeting"> | string | null
    platformUrl?: StringNullableFilter<"Meeting"> | string | null
    createdAt?: DateTimeFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeFilter<"Meeting"> | Date | string
  }

  export type MeetingParticipantUpsertWithWhereUniqueWithoutUserInput = {
    where: MeetingParticipantWhereUniqueInput
    update: XOR<MeetingParticipantUpdateWithoutUserInput, MeetingParticipantUncheckedUpdateWithoutUserInput>
    create: XOR<MeetingParticipantCreateWithoutUserInput, MeetingParticipantUncheckedCreateWithoutUserInput>
  }

  export type MeetingParticipantUpdateWithWhereUniqueWithoutUserInput = {
    where: MeetingParticipantWhereUniqueInput
    data: XOR<MeetingParticipantUpdateWithoutUserInput, MeetingParticipantUncheckedUpdateWithoutUserInput>
  }

  export type MeetingParticipantUpdateManyWithWhereWithoutUserInput = {
    where: MeetingParticipantScalarWhereInput
    data: XOR<MeetingParticipantUpdateManyMutationInput, MeetingParticipantUncheckedUpdateManyWithoutUserInput>
  }

  export type MeetingParticipantScalarWhereInput = {
    AND?: MeetingParticipantScalarWhereInput | MeetingParticipantScalarWhereInput[]
    OR?: MeetingParticipantScalarWhereInput[]
    NOT?: MeetingParticipantScalarWhereInput | MeetingParticipantScalarWhereInput[]
    id?: StringFilter<"MeetingParticipant"> | string
    meetingId?: StringFilter<"MeetingParticipant"> | string
    userId?: StringNullableFilter<"MeetingParticipant"> | string | null
    name?: StringNullableFilter<"MeetingParticipant"> | string | null
    email?: StringNullableFilter<"MeetingParticipant"> | string | null
    role?: StringNullableFilter<"MeetingParticipant"> | string | null
    insights?: JsonNullableFilter<"MeetingParticipant">
    createdAt?: DateTimeFilter<"MeetingParticipant"> | Date | string
    updatedAt?: DateTimeFilter<"MeetingParticipant"> | Date | string
  }

  export type PreMeetingBriefUpsertWithWhereUniqueWithoutUserInput = {
    where: PreMeetingBriefWhereUniqueInput
    update: XOR<PreMeetingBriefUpdateWithoutUserInput, PreMeetingBriefUncheckedUpdateWithoutUserInput>
    create: XOR<PreMeetingBriefCreateWithoutUserInput, PreMeetingBriefUncheckedCreateWithoutUserInput>
  }

  export type PreMeetingBriefUpdateWithWhereUniqueWithoutUserInput = {
    where: PreMeetingBriefWhereUniqueInput
    data: XOR<PreMeetingBriefUpdateWithoutUserInput, PreMeetingBriefUncheckedUpdateWithoutUserInput>
  }

  export type PreMeetingBriefUpdateManyWithWhereWithoutUserInput = {
    where: PreMeetingBriefScalarWhereInput
    data: XOR<PreMeetingBriefUpdateManyMutationInput, PreMeetingBriefUncheckedUpdateManyWithoutUserInput>
  }

  export type PreMeetingBriefScalarWhereInput = {
    AND?: PreMeetingBriefScalarWhereInput | PreMeetingBriefScalarWhereInput[]
    OR?: PreMeetingBriefScalarWhereInput[]
    NOT?: PreMeetingBriefScalarWhereInput | PreMeetingBriefScalarWhereInput[]
    id?: StringFilter<"PreMeetingBrief"> | string
    meetingId?: StringFilter<"PreMeetingBrief"> | string
    userId?: StringFilter<"PreMeetingBrief"> | string
    content?: JsonFilter<"PreMeetingBrief">
    generatedAt?: DateTimeFilter<"PreMeetingBrief"> | Date | string
    sentAt?: DateTimeNullableFilter<"PreMeetingBrief"> | Date | string | null
    createdAt?: DateTimeFilter<"PreMeetingBrief"> | Date | string
    updatedAt?: DateTimeFilter<"PreMeetingBrief"> | Date | string
  }

  export type GemAlertUpsertWithWhereUniqueWithoutUserInput = {
    where: GemAlertWhereUniqueInput
    update: XOR<GemAlertUpdateWithoutUserInput, GemAlertUncheckedUpdateWithoutUserInput>
    create: XOR<GemAlertCreateWithoutUserInput, GemAlertUncheckedCreateWithoutUserInput>
  }

  export type GemAlertUpdateWithWhereUniqueWithoutUserInput = {
    where: GemAlertWhereUniqueInput
    data: XOR<GemAlertUpdateWithoutUserInput, GemAlertUncheckedUpdateWithoutUserInput>
  }

  export type GemAlertUpdateManyWithWhereWithoutUserInput = {
    where: GemAlertScalarWhereInput
    data: XOR<GemAlertUpdateManyMutationInput, GemAlertUncheckedUpdateManyWithoutUserInput>
  }

  export type GemAlertScalarWhereInput = {
    AND?: GemAlertScalarWhereInput | GemAlertScalarWhereInput[]
    OR?: GemAlertScalarWhereInput[]
    NOT?: GemAlertScalarWhereInput | GemAlertScalarWhereInput[]
    id?: StringFilter<"GemAlert"> | string
    meetingId?: StringFilter<"GemAlert"> | string
    userId?: StringFilter<"GemAlert"> | string
    timestamp?: DateTimeFilter<"GemAlert"> | Date | string
    trigger?: StringNullableFilter<"GemAlert"> | string | null
    content?: StringFilter<"GemAlert"> | string
    createdAt?: DateTimeFilter<"GemAlert"> | Date | string
    updatedAt?: DateTimeFilter<"GemAlert"> | Date | string
  }

  export type UserFeedbackUpsertWithWhereUniqueWithoutUserInput = {
    where: UserFeedbackWhereUniqueInput
    update: XOR<UserFeedbackUpdateWithoutUserInput, UserFeedbackUncheckedUpdateWithoutUserInput>
    create: XOR<UserFeedbackCreateWithoutUserInput, UserFeedbackUncheckedCreateWithoutUserInput>
  }

  export type UserFeedbackUpdateWithWhereUniqueWithoutUserInput = {
    where: UserFeedbackWhereUniqueInput
    data: XOR<UserFeedbackUpdateWithoutUserInput, UserFeedbackUncheckedUpdateWithoutUserInput>
  }

  export type UserFeedbackUpdateManyWithWhereWithoutUserInput = {
    where: UserFeedbackScalarWhereInput
    data: XOR<UserFeedbackUpdateManyMutationInput, UserFeedbackUncheckedUpdateManyWithoutUserInput>
  }

  export type UserFeedbackScalarWhereInput = {
    AND?: UserFeedbackScalarWhereInput | UserFeedbackScalarWhereInput[]
    OR?: UserFeedbackScalarWhereInput[]
    NOT?: UserFeedbackScalarWhereInput | UserFeedbackScalarWhereInput[]
    id?: StringFilter<"UserFeedback"> | string
    userId?: StringFilter<"UserFeedback"> | string
    gemAlertId?: StringNullableFilter<"UserFeedback"> | string | null
    rating?: EnumFeedbackRatingFilter<"UserFeedback"> | $Enums.FeedbackRating
    comment?: StringNullableFilter<"UserFeedback"> | string | null
    createdAt?: DateTimeFilter<"UserFeedback"> | Date | string
  }

  export type UserCreateWithoutDataSourcesInput = {
    id?: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meetingsAsOwner?: MeetingCreateNestedManyWithoutOwnerInput
    meetingAttendees?: MeetingParticipantCreateNestedManyWithoutUserInput
    preMeetingBriefs?: PreMeetingBriefCreateNestedManyWithoutUserInput
    gemAlerts?: GemAlertCreateNestedManyWithoutUserInput
    userFeedbacks?: UserFeedbackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDataSourcesInput = {
    id?: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meetingsAsOwner?: MeetingUncheckedCreateNestedManyWithoutOwnerInput
    meetingAttendees?: MeetingParticipantUncheckedCreateNestedManyWithoutUserInput
    preMeetingBriefs?: PreMeetingBriefUncheckedCreateNestedManyWithoutUserInput
    gemAlerts?: GemAlertUncheckedCreateNestedManyWithoutUserInput
    userFeedbacks?: UserFeedbackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDataSourcesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDataSourcesInput, UserUncheckedCreateWithoutDataSourcesInput>
  }

  export type SyncedContentCreateWithoutDataSourceInput = {
    id?: string
    userId: string
    contentType: string
    content: JsonNullValueInput | InputJsonValue
    embedding?: NullableJsonNullValueInput | InputJsonValue
    sourceItemId?: string | null
    processedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SyncedContentUncheckedCreateWithoutDataSourceInput = {
    id?: string
    userId: string
    contentType: string
    content: JsonNullValueInput | InputJsonValue
    embedding?: NullableJsonNullValueInput | InputJsonValue
    sourceItemId?: string | null
    processedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SyncedContentCreateOrConnectWithoutDataSourceInput = {
    where: SyncedContentWhereUniqueInput
    create: XOR<SyncedContentCreateWithoutDataSourceInput, SyncedContentUncheckedCreateWithoutDataSourceInput>
  }

  export type SyncedContentCreateManyDataSourceInputEnvelope = {
    data: SyncedContentCreateManyDataSourceInput | SyncedContentCreateManyDataSourceInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDataSourcesInput = {
    update: XOR<UserUpdateWithoutDataSourcesInput, UserUncheckedUpdateWithoutDataSourcesInput>
    create: XOR<UserCreateWithoutDataSourcesInput, UserUncheckedCreateWithoutDataSourcesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDataSourcesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDataSourcesInput, UserUncheckedUpdateWithoutDataSourcesInput>
  }

  export type UserUpdateWithoutDataSourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingsAsOwner?: MeetingUpdateManyWithoutOwnerNestedInput
    meetingAttendees?: MeetingParticipantUpdateManyWithoutUserNestedInput
    preMeetingBriefs?: PreMeetingBriefUpdateManyWithoutUserNestedInput
    gemAlerts?: GemAlertUpdateManyWithoutUserNestedInput
    userFeedbacks?: UserFeedbackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDataSourcesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meetingsAsOwner?: MeetingUncheckedUpdateManyWithoutOwnerNestedInput
    meetingAttendees?: MeetingParticipantUncheckedUpdateManyWithoutUserNestedInput
    preMeetingBriefs?: PreMeetingBriefUncheckedUpdateManyWithoutUserNestedInput
    gemAlerts?: GemAlertUncheckedUpdateManyWithoutUserNestedInput
    userFeedbacks?: UserFeedbackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SyncedContentUpsertWithWhereUniqueWithoutDataSourceInput = {
    where: SyncedContentWhereUniqueInput
    update: XOR<SyncedContentUpdateWithoutDataSourceInput, SyncedContentUncheckedUpdateWithoutDataSourceInput>
    create: XOR<SyncedContentCreateWithoutDataSourceInput, SyncedContentUncheckedCreateWithoutDataSourceInput>
  }

  export type SyncedContentUpdateWithWhereUniqueWithoutDataSourceInput = {
    where: SyncedContentWhereUniqueInput
    data: XOR<SyncedContentUpdateWithoutDataSourceInput, SyncedContentUncheckedUpdateWithoutDataSourceInput>
  }

  export type SyncedContentUpdateManyWithWhereWithoutDataSourceInput = {
    where: SyncedContentScalarWhereInput
    data: XOR<SyncedContentUpdateManyMutationInput, SyncedContentUncheckedUpdateManyWithoutDataSourceInput>
  }

  export type SyncedContentScalarWhereInput = {
    AND?: SyncedContentScalarWhereInput | SyncedContentScalarWhereInput[]
    OR?: SyncedContentScalarWhereInput[]
    NOT?: SyncedContentScalarWhereInput | SyncedContentScalarWhereInput[]
    id?: StringFilter<"SyncedContent"> | string
    dataSourceId?: StringFilter<"SyncedContent"> | string
    userId?: StringFilter<"SyncedContent"> | string
    contentType?: StringFilter<"SyncedContent"> | string
    content?: JsonFilter<"SyncedContent">
    embedding?: JsonNullableFilter<"SyncedContent">
    sourceItemId?: StringNullableFilter<"SyncedContent"> | string | null
    processedAt?: DateTimeFilter<"SyncedContent"> | Date | string
    createdAt?: DateTimeFilter<"SyncedContent"> | Date | string
    updatedAt?: DateTimeFilter<"SyncedContent"> | Date | string
  }

  export type DataSourceCreateWithoutSyncedContentsInput = {
    id?: string
    type: $Enums.DataSourceType
    name: string
    accessToken?: string | null
    refreshToken?: string | null
    scope?: string | null
    lastSyncedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDataSourcesInput
  }

  export type DataSourceUncheckedCreateWithoutSyncedContentsInput = {
    id?: string
    userId: string
    type: $Enums.DataSourceType
    name: string
    accessToken?: string | null
    refreshToken?: string | null
    scope?: string | null
    lastSyncedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DataSourceCreateOrConnectWithoutSyncedContentsInput = {
    where: DataSourceWhereUniqueInput
    create: XOR<DataSourceCreateWithoutSyncedContentsInput, DataSourceUncheckedCreateWithoutSyncedContentsInput>
  }

  export type DataSourceUpsertWithoutSyncedContentsInput = {
    update: XOR<DataSourceUpdateWithoutSyncedContentsInput, DataSourceUncheckedUpdateWithoutSyncedContentsInput>
    create: XOR<DataSourceCreateWithoutSyncedContentsInput, DataSourceUncheckedCreateWithoutSyncedContentsInput>
    where?: DataSourceWhereInput
  }

  export type DataSourceUpdateToOneWithWhereWithoutSyncedContentsInput = {
    where?: DataSourceWhereInput
    data: XOR<DataSourceUpdateWithoutSyncedContentsInput, DataSourceUncheckedUpdateWithoutSyncedContentsInput>
  }

  export type DataSourceUpdateWithoutSyncedContentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    name?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDataSourcesNestedInput
  }

  export type DataSourceUncheckedUpdateWithoutSyncedContentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    name?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutMeetingsAsOwnerInput = {
    id?: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dataSources?: DataSourceCreateNestedManyWithoutUserInput
    meetingAttendees?: MeetingParticipantCreateNestedManyWithoutUserInput
    preMeetingBriefs?: PreMeetingBriefCreateNestedManyWithoutUserInput
    gemAlerts?: GemAlertCreateNestedManyWithoutUserInput
    userFeedbacks?: UserFeedbackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMeetingsAsOwnerInput = {
    id?: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dataSources?: DataSourceUncheckedCreateNestedManyWithoutUserInput
    meetingAttendees?: MeetingParticipantUncheckedCreateNestedManyWithoutUserInput
    preMeetingBriefs?: PreMeetingBriefUncheckedCreateNestedManyWithoutUserInput
    gemAlerts?: GemAlertUncheckedCreateNestedManyWithoutUserInput
    userFeedbacks?: UserFeedbackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMeetingsAsOwnerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMeetingsAsOwnerInput, UserUncheckedCreateWithoutMeetingsAsOwnerInput>
  }

  export type MeetingParticipantCreateWithoutMeetingInput = {
    id?: string
    name?: string | null
    email?: string | null
    role?: string | null
    insights?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutMeetingAttendeesInput
  }

  export type MeetingParticipantUncheckedCreateWithoutMeetingInput = {
    id?: string
    userId?: string | null
    name?: string | null
    email?: string | null
    role?: string | null
    insights?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingParticipantCreateOrConnectWithoutMeetingInput = {
    where: MeetingParticipantWhereUniqueInput
    create: XOR<MeetingParticipantCreateWithoutMeetingInput, MeetingParticipantUncheckedCreateWithoutMeetingInput>
  }

  export type MeetingParticipantCreateManyMeetingInputEnvelope = {
    data: MeetingParticipantCreateManyMeetingInput | MeetingParticipantCreateManyMeetingInput[]
    skipDuplicates?: boolean
  }

  export type PreMeetingBriefCreateWithoutMeetingInput = {
    id?: string
    content: JsonNullValueInput | InputJsonValue
    generatedAt?: Date | string
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPreMeetingBriefsInput
  }

  export type PreMeetingBriefUncheckedCreateWithoutMeetingInput = {
    id?: string
    userId: string
    content: JsonNullValueInput | InputJsonValue
    generatedAt?: Date | string
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PreMeetingBriefCreateOrConnectWithoutMeetingInput = {
    where: PreMeetingBriefWhereUniqueInput
    create: XOR<PreMeetingBriefCreateWithoutMeetingInput, PreMeetingBriefUncheckedCreateWithoutMeetingInput>
  }

  export type GemAlertCreateWithoutMeetingInput = {
    id?: string
    timestamp?: Date | string
    trigger?: string | null
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGemAlertsInput
    userFeedback?: UserFeedbackCreateNestedOneWithoutGemAlertInput
  }

  export type GemAlertUncheckedCreateWithoutMeetingInput = {
    id?: string
    userId: string
    timestamp?: Date | string
    trigger?: string | null
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userFeedback?: UserFeedbackUncheckedCreateNestedOneWithoutGemAlertInput
  }

  export type GemAlertCreateOrConnectWithoutMeetingInput = {
    where: GemAlertWhereUniqueInput
    create: XOR<GemAlertCreateWithoutMeetingInput, GemAlertUncheckedCreateWithoutMeetingInput>
  }

  export type GemAlertCreateManyMeetingInputEnvelope = {
    data: GemAlertCreateManyMeetingInput | GemAlertCreateManyMeetingInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMeetingsAsOwnerInput = {
    update: XOR<UserUpdateWithoutMeetingsAsOwnerInput, UserUncheckedUpdateWithoutMeetingsAsOwnerInput>
    create: XOR<UserCreateWithoutMeetingsAsOwnerInput, UserUncheckedCreateWithoutMeetingsAsOwnerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMeetingsAsOwnerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMeetingsAsOwnerInput, UserUncheckedUpdateWithoutMeetingsAsOwnerInput>
  }

  export type UserUpdateWithoutMeetingsAsOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataSources?: DataSourceUpdateManyWithoutUserNestedInput
    meetingAttendees?: MeetingParticipantUpdateManyWithoutUserNestedInput
    preMeetingBriefs?: PreMeetingBriefUpdateManyWithoutUserNestedInput
    gemAlerts?: GemAlertUpdateManyWithoutUserNestedInput
    userFeedbacks?: UserFeedbackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMeetingsAsOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataSources?: DataSourceUncheckedUpdateManyWithoutUserNestedInput
    meetingAttendees?: MeetingParticipantUncheckedUpdateManyWithoutUserNestedInput
    preMeetingBriefs?: PreMeetingBriefUncheckedUpdateManyWithoutUserNestedInput
    gemAlerts?: GemAlertUncheckedUpdateManyWithoutUserNestedInput
    userFeedbacks?: UserFeedbackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MeetingParticipantUpsertWithWhereUniqueWithoutMeetingInput = {
    where: MeetingParticipantWhereUniqueInput
    update: XOR<MeetingParticipantUpdateWithoutMeetingInput, MeetingParticipantUncheckedUpdateWithoutMeetingInput>
    create: XOR<MeetingParticipantCreateWithoutMeetingInput, MeetingParticipantUncheckedCreateWithoutMeetingInput>
  }

  export type MeetingParticipantUpdateWithWhereUniqueWithoutMeetingInput = {
    where: MeetingParticipantWhereUniqueInput
    data: XOR<MeetingParticipantUpdateWithoutMeetingInput, MeetingParticipantUncheckedUpdateWithoutMeetingInput>
  }

  export type MeetingParticipantUpdateManyWithWhereWithoutMeetingInput = {
    where: MeetingParticipantScalarWhereInput
    data: XOR<MeetingParticipantUpdateManyMutationInput, MeetingParticipantUncheckedUpdateManyWithoutMeetingInput>
  }

  export type PreMeetingBriefUpsertWithoutMeetingInput = {
    update: XOR<PreMeetingBriefUpdateWithoutMeetingInput, PreMeetingBriefUncheckedUpdateWithoutMeetingInput>
    create: XOR<PreMeetingBriefCreateWithoutMeetingInput, PreMeetingBriefUncheckedCreateWithoutMeetingInput>
    where?: PreMeetingBriefWhereInput
  }

  export type PreMeetingBriefUpdateToOneWithWhereWithoutMeetingInput = {
    where?: PreMeetingBriefWhereInput
    data: XOR<PreMeetingBriefUpdateWithoutMeetingInput, PreMeetingBriefUncheckedUpdateWithoutMeetingInput>
  }

  export type PreMeetingBriefUpdateWithoutMeetingInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPreMeetingBriefsNestedInput
  }

  export type PreMeetingBriefUncheckedUpdateWithoutMeetingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GemAlertUpsertWithWhereUniqueWithoutMeetingInput = {
    where: GemAlertWhereUniqueInput
    update: XOR<GemAlertUpdateWithoutMeetingInput, GemAlertUncheckedUpdateWithoutMeetingInput>
    create: XOR<GemAlertCreateWithoutMeetingInput, GemAlertUncheckedCreateWithoutMeetingInput>
  }

  export type GemAlertUpdateWithWhereUniqueWithoutMeetingInput = {
    where: GemAlertWhereUniqueInput
    data: XOR<GemAlertUpdateWithoutMeetingInput, GemAlertUncheckedUpdateWithoutMeetingInput>
  }

  export type GemAlertUpdateManyWithWhereWithoutMeetingInput = {
    where: GemAlertScalarWhereInput
    data: XOR<GemAlertUpdateManyMutationInput, GemAlertUncheckedUpdateManyWithoutMeetingInput>
  }

  export type MeetingCreateWithoutParticipantsInput = {
    id?: string
    title?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    sourceCalendarEventId?: string | null
    platformUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutMeetingsAsOwnerInput
    preMeetingBrief?: PreMeetingBriefCreateNestedOneWithoutMeetingInput
    gemAlerts?: GemAlertCreateNestedManyWithoutMeetingInput
  }

  export type MeetingUncheckedCreateWithoutParticipantsInput = {
    id?: string
    ownerId: string
    title?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    sourceCalendarEventId?: string | null
    platformUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    preMeetingBrief?: PreMeetingBriefUncheckedCreateNestedOneWithoutMeetingInput
    gemAlerts?: GemAlertUncheckedCreateNestedManyWithoutMeetingInput
  }

  export type MeetingCreateOrConnectWithoutParticipantsInput = {
    where: MeetingWhereUniqueInput
    create: XOR<MeetingCreateWithoutParticipantsInput, MeetingUncheckedCreateWithoutParticipantsInput>
  }

  export type UserCreateWithoutMeetingAttendeesInput = {
    id?: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dataSources?: DataSourceCreateNestedManyWithoutUserInput
    meetingsAsOwner?: MeetingCreateNestedManyWithoutOwnerInput
    preMeetingBriefs?: PreMeetingBriefCreateNestedManyWithoutUserInput
    gemAlerts?: GemAlertCreateNestedManyWithoutUserInput
    userFeedbacks?: UserFeedbackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMeetingAttendeesInput = {
    id?: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dataSources?: DataSourceUncheckedCreateNestedManyWithoutUserInput
    meetingsAsOwner?: MeetingUncheckedCreateNestedManyWithoutOwnerInput
    preMeetingBriefs?: PreMeetingBriefUncheckedCreateNestedManyWithoutUserInput
    gemAlerts?: GemAlertUncheckedCreateNestedManyWithoutUserInput
    userFeedbacks?: UserFeedbackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMeetingAttendeesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMeetingAttendeesInput, UserUncheckedCreateWithoutMeetingAttendeesInput>
  }

  export type MeetingUpsertWithoutParticipantsInput = {
    update: XOR<MeetingUpdateWithoutParticipantsInput, MeetingUncheckedUpdateWithoutParticipantsInput>
    create: XOR<MeetingCreateWithoutParticipantsInput, MeetingUncheckedCreateWithoutParticipantsInput>
    where?: MeetingWhereInput
  }

  export type MeetingUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: MeetingWhereInput
    data: XOR<MeetingUpdateWithoutParticipantsInput, MeetingUncheckedUpdateWithoutParticipantsInput>
  }

  export type MeetingUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceCalendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutMeetingsAsOwnerNestedInput
    preMeetingBrief?: PreMeetingBriefUpdateOneWithoutMeetingNestedInput
    gemAlerts?: GemAlertUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceCalendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preMeetingBrief?: PreMeetingBriefUncheckedUpdateOneWithoutMeetingNestedInput
    gemAlerts?: GemAlertUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type UserUpsertWithoutMeetingAttendeesInput = {
    update: XOR<UserUpdateWithoutMeetingAttendeesInput, UserUncheckedUpdateWithoutMeetingAttendeesInput>
    create: XOR<UserCreateWithoutMeetingAttendeesInput, UserUncheckedCreateWithoutMeetingAttendeesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMeetingAttendeesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMeetingAttendeesInput, UserUncheckedUpdateWithoutMeetingAttendeesInput>
  }

  export type UserUpdateWithoutMeetingAttendeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataSources?: DataSourceUpdateManyWithoutUserNestedInput
    meetingsAsOwner?: MeetingUpdateManyWithoutOwnerNestedInput
    preMeetingBriefs?: PreMeetingBriefUpdateManyWithoutUserNestedInput
    gemAlerts?: GemAlertUpdateManyWithoutUserNestedInput
    userFeedbacks?: UserFeedbackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMeetingAttendeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataSources?: DataSourceUncheckedUpdateManyWithoutUserNestedInput
    meetingsAsOwner?: MeetingUncheckedUpdateManyWithoutOwnerNestedInput
    preMeetingBriefs?: PreMeetingBriefUncheckedUpdateManyWithoutUserNestedInput
    gemAlerts?: GemAlertUncheckedUpdateManyWithoutUserNestedInput
    userFeedbacks?: UserFeedbackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MeetingCreateWithoutPreMeetingBriefInput = {
    id?: string
    title?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    sourceCalendarEventId?: string | null
    platformUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutMeetingsAsOwnerInput
    participants?: MeetingParticipantCreateNestedManyWithoutMeetingInput
    gemAlerts?: GemAlertCreateNestedManyWithoutMeetingInput
  }

  export type MeetingUncheckedCreateWithoutPreMeetingBriefInput = {
    id?: string
    ownerId: string
    title?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    sourceCalendarEventId?: string | null
    platformUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: MeetingParticipantUncheckedCreateNestedManyWithoutMeetingInput
    gemAlerts?: GemAlertUncheckedCreateNestedManyWithoutMeetingInput
  }

  export type MeetingCreateOrConnectWithoutPreMeetingBriefInput = {
    where: MeetingWhereUniqueInput
    create: XOR<MeetingCreateWithoutPreMeetingBriefInput, MeetingUncheckedCreateWithoutPreMeetingBriefInput>
  }

  export type UserCreateWithoutPreMeetingBriefsInput = {
    id?: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dataSources?: DataSourceCreateNestedManyWithoutUserInput
    meetingsAsOwner?: MeetingCreateNestedManyWithoutOwnerInput
    meetingAttendees?: MeetingParticipantCreateNestedManyWithoutUserInput
    gemAlerts?: GemAlertCreateNestedManyWithoutUserInput
    userFeedbacks?: UserFeedbackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPreMeetingBriefsInput = {
    id?: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dataSources?: DataSourceUncheckedCreateNestedManyWithoutUserInput
    meetingsAsOwner?: MeetingUncheckedCreateNestedManyWithoutOwnerInput
    meetingAttendees?: MeetingParticipantUncheckedCreateNestedManyWithoutUserInput
    gemAlerts?: GemAlertUncheckedCreateNestedManyWithoutUserInput
    userFeedbacks?: UserFeedbackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPreMeetingBriefsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPreMeetingBriefsInput, UserUncheckedCreateWithoutPreMeetingBriefsInput>
  }

  export type MeetingUpsertWithoutPreMeetingBriefInput = {
    update: XOR<MeetingUpdateWithoutPreMeetingBriefInput, MeetingUncheckedUpdateWithoutPreMeetingBriefInput>
    create: XOR<MeetingCreateWithoutPreMeetingBriefInput, MeetingUncheckedCreateWithoutPreMeetingBriefInput>
    where?: MeetingWhereInput
  }

  export type MeetingUpdateToOneWithWhereWithoutPreMeetingBriefInput = {
    where?: MeetingWhereInput
    data: XOR<MeetingUpdateWithoutPreMeetingBriefInput, MeetingUncheckedUpdateWithoutPreMeetingBriefInput>
  }

  export type MeetingUpdateWithoutPreMeetingBriefInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceCalendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutMeetingsAsOwnerNestedInput
    participants?: MeetingParticipantUpdateManyWithoutMeetingNestedInput
    gemAlerts?: GemAlertUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateWithoutPreMeetingBriefInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceCalendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: MeetingParticipantUncheckedUpdateManyWithoutMeetingNestedInput
    gemAlerts?: GemAlertUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type UserUpsertWithoutPreMeetingBriefsInput = {
    update: XOR<UserUpdateWithoutPreMeetingBriefsInput, UserUncheckedUpdateWithoutPreMeetingBriefsInput>
    create: XOR<UserCreateWithoutPreMeetingBriefsInput, UserUncheckedCreateWithoutPreMeetingBriefsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPreMeetingBriefsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPreMeetingBriefsInput, UserUncheckedUpdateWithoutPreMeetingBriefsInput>
  }

  export type UserUpdateWithoutPreMeetingBriefsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataSources?: DataSourceUpdateManyWithoutUserNestedInput
    meetingsAsOwner?: MeetingUpdateManyWithoutOwnerNestedInput
    meetingAttendees?: MeetingParticipantUpdateManyWithoutUserNestedInput
    gemAlerts?: GemAlertUpdateManyWithoutUserNestedInput
    userFeedbacks?: UserFeedbackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPreMeetingBriefsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataSources?: DataSourceUncheckedUpdateManyWithoutUserNestedInput
    meetingsAsOwner?: MeetingUncheckedUpdateManyWithoutOwnerNestedInput
    meetingAttendees?: MeetingParticipantUncheckedUpdateManyWithoutUserNestedInput
    gemAlerts?: GemAlertUncheckedUpdateManyWithoutUserNestedInput
    userFeedbacks?: UserFeedbackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MeetingCreateWithoutGemAlertsInput = {
    id?: string
    title?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    sourceCalendarEventId?: string | null
    platformUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutMeetingsAsOwnerInput
    participants?: MeetingParticipantCreateNestedManyWithoutMeetingInput
    preMeetingBrief?: PreMeetingBriefCreateNestedOneWithoutMeetingInput
  }

  export type MeetingUncheckedCreateWithoutGemAlertsInput = {
    id?: string
    ownerId: string
    title?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    sourceCalendarEventId?: string | null
    platformUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    participants?: MeetingParticipantUncheckedCreateNestedManyWithoutMeetingInput
    preMeetingBrief?: PreMeetingBriefUncheckedCreateNestedOneWithoutMeetingInput
  }

  export type MeetingCreateOrConnectWithoutGemAlertsInput = {
    where: MeetingWhereUniqueInput
    create: XOR<MeetingCreateWithoutGemAlertsInput, MeetingUncheckedCreateWithoutGemAlertsInput>
  }

  export type UserCreateWithoutGemAlertsInput = {
    id?: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dataSources?: DataSourceCreateNestedManyWithoutUserInput
    meetingsAsOwner?: MeetingCreateNestedManyWithoutOwnerInput
    meetingAttendees?: MeetingParticipantCreateNestedManyWithoutUserInput
    preMeetingBriefs?: PreMeetingBriefCreateNestedManyWithoutUserInput
    userFeedbacks?: UserFeedbackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGemAlertsInput = {
    id?: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dataSources?: DataSourceUncheckedCreateNestedManyWithoutUserInput
    meetingsAsOwner?: MeetingUncheckedCreateNestedManyWithoutOwnerInput
    meetingAttendees?: MeetingParticipantUncheckedCreateNestedManyWithoutUserInput
    preMeetingBriefs?: PreMeetingBriefUncheckedCreateNestedManyWithoutUserInput
    userFeedbacks?: UserFeedbackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGemAlertsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGemAlertsInput, UserUncheckedCreateWithoutGemAlertsInput>
  }

  export type UserFeedbackCreateWithoutGemAlertInput = {
    id?: string
    rating: $Enums.FeedbackRating
    comment?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserFeedbacksInput
  }

  export type UserFeedbackUncheckedCreateWithoutGemAlertInput = {
    id?: string
    userId: string
    rating: $Enums.FeedbackRating
    comment?: string | null
    createdAt?: Date | string
  }

  export type UserFeedbackCreateOrConnectWithoutGemAlertInput = {
    where: UserFeedbackWhereUniqueInput
    create: XOR<UserFeedbackCreateWithoutGemAlertInput, UserFeedbackUncheckedCreateWithoutGemAlertInput>
  }

  export type MeetingUpsertWithoutGemAlertsInput = {
    update: XOR<MeetingUpdateWithoutGemAlertsInput, MeetingUncheckedUpdateWithoutGemAlertsInput>
    create: XOR<MeetingCreateWithoutGemAlertsInput, MeetingUncheckedCreateWithoutGemAlertsInput>
    where?: MeetingWhereInput
  }

  export type MeetingUpdateToOneWithWhereWithoutGemAlertsInput = {
    where?: MeetingWhereInput
    data: XOR<MeetingUpdateWithoutGemAlertsInput, MeetingUncheckedUpdateWithoutGemAlertsInput>
  }

  export type MeetingUpdateWithoutGemAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceCalendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutMeetingsAsOwnerNestedInput
    participants?: MeetingParticipantUpdateManyWithoutMeetingNestedInput
    preMeetingBrief?: PreMeetingBriefUpdateOneWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateWithoutGemAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceCalendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: MeetingParticipantUncheckedUpdateManyWithoutMeetingNestedInput
    preMeetingBrief?: PreMeetingBriefUncheckedUpdateOneWithoutMeetingNestedInput
  }

  export type UserUpsertWithoutGemAlertsInput = {
    update: XOR<UserUpdateWithoutGemAlertsInput, UserUncheckedUpdateWithoutGemAlertsInput>
    create: XOR<UserCreateWithoutGemAlertsInput, UserUncheckedCreateWithoutGemAlertsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGemAlertsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGemAlertsInput, UserUncheckedUpdateWithoutGemAlertsInput>
  }

  export type UserUpdateWithoutGemAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataSources?: DataSourceUpdateManyWithoutUserNestedInput
    meetingsAsOwner?: MeetingUpdateManyWithoutOwnerNestedInput
    meetingAttendees?: MeetingParticipantUpdateManyWithoutUserNestedInput
    preMeetingBriefs?: PreMeetingBriefUpdateManyWithoutUserNestedInput
    userFeedbacks?: UserFeedbackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGemAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataSources?: DataSourceUncheckedUpdateManyWithoutUserNestedInput
    meetingsAsOwner?: MeetingUncheckedUpdateManyWithoutOwnerNestedInput
    meetingAttendees?: MeetingParticipantUncheckedUpdateManyWithoutUserNestedInput
    preMeetingBriefs?: PreMeetingBriefUncheckedUpdateManyWithoutUserNestedInput
    userFeedbacks?: UserFeedbackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserFeedbackUpsertWithoutGemAlertInput = {
    update: XOR<UserFeedbackUpdateWithoutGemAlertInput, UserFeedbackUncheckedUpdateWithoutGemAlertInput>
    create: XOR<UserFeedbackCreateWithoutGemAlertInput, UserFeedbackUncheckedCreateWithoutGemAlertInput>
    where?: UserFeedbackWhereInput
  }

  export type UserFeedbackUpdateToOneWithWhereWithoutGemAlertInput = {
    where?: UserFeedbackWhereInput
    data: XOR<UserFeedbackUpdateWithoutGemAlertInput, UserFeedbackUncheckedUpdateWithoutGemAlertInput>
  }

  export type UserFeedbackUpdateWithoutGemAlertInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: EnumFeedbackRatingFieldUpdateOperationsInput | $Enums.FeedbackRating
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserFeedbacksNestedInput
  }

  export type UserFeedbackUncheckedUpdateWithoutGemAlertInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: EnumFeedbackRatingFieldUpdateOperationsInput | $Enums.FeedbackRating
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutUserFeedbacksInput = {
    id?: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dataSources?: DataSourceCreateNestedManyWithoutUserInput
    meetingsAsOwner?: MeetingCreateNestedManyWithoutOwnerInput
    meetingAttendees?: MeetingParticipantCreateNestedManyWithoutUserInput
    preMeetingBriefs?: PreMeetingBriefCreateNestedManyWithoutUserInput
    gemAlerts?: GemAlertCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserFeedbacksInput = {
    id?: string
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dataSources?: DataSourceUncheckedCreateNestedManyWithoutUserInput
    meetingsAsOwner?: MeetingUncheckedCreateNestedManyWithoutOwnerInput
    meetingAttendees?: MeetingParticipantUncheckedCreateNestedManyWithoutUserInput
    preMeetingBriefs?: PreMeetingBriefUncheckedCreateNestedManyWithoutUserInput
    gemAlerts?: GemAlertUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserFeedbacksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserFeedbacksInput, UserUncheckedCreateWithoutUserFeedbacksInput>
  }

  export type GemAlertCreateWithoutUserFeedbackInput = {
    id?: string
    timestamp?: Date | string
    trigger?: string | null
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    meeting: MeetingCreateNestedOneWithoutGemAlertsInput
    user: UserCreateNestedOneWithoutGemAlertsInput
  }

  export type GemAlertUncheckedCreateWithoutUserFeedbackInput = {
    id?: string
    meetingId: string
    userId: string
    timestamp?: Date | string
    trigger?: string | null
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GemAlertCreateOrConnectWithoutUserFeedbackInput = {
    where: GemAlertWhereUniqueInput
    create: XOR<GemAlertCreateWithoutUserFeedbackInput, GemAlertUncheckedCreateWithoutUserFeedbackInput>
  }

  export type UserUpsertWithoutUserFeedbacksInput = {
    update: XOR<UserUpdateWithoutUserFeedbacksInput, UserUncheckedUpdateWithoutUserFeedbacksInput>
    create: XOR<UserCreateWithoutUserFeedbacksInput, UserUncheckedCreateWithoutUserFeedbacksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserFeedbacksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserFeedbacksInput, UserUncheckedUpdateWithoutUserFeedbacksInput>
  }

  export type UserUpdateWithoutUserFeedbacksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataSources?: DataSourceUpdateManyWithoutUserNestedInput
    meetingsAsOwner?: MeetingUpdateManyWithoutOwnerNestedInput
    meetingAttendees?: MeetingParticipantUpdateManyWithoutUserNestedInput
    preMeetingBriefs?: PreMeetingBriefUpdateManyWithoutUserNestedInput
    gemAlerts?: GemAlertUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserFeedbacksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataSources?: DataSourceUncheckedUpdateManyWithoutUserNestedInput
    meetingsAsOwner?: MeetingUncheckedUpdateManyWithoutOwnerNestedInput
    meetingAttendees?: MeetingParticipantUncheckedUpdateManyWithoutUserNestedInput
    preMeetingBriefs?: PreMeetingBriefUncheckedUpdateManyWithoutUserNestedInput
    gemAlerts?: GemAlertUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GemAlertUpsertWithoutUserFeedbackInput = {
    update: XOR<GemAlertUpdateWithoutUserFeedbackInput, GemAlertUncheckedUpdateWithoutUserFeedbackInput>
    create: XOR<GemAlertCreateWithoutUserFeedbackInput, GemAlertUncheckedCreateWithoutUserFeedbackInput>
    where?: GemAlertWhereInput
  }

  export type GemAlertUpdateToOneWithWhereWithoutUserFeedbackInput = {
    where?: GemAlertWhereInput
    data: XOR<GemAlertUpdateWithoutUserFeedbackInput, GemAlertUncheckedUpdateWithoutUserFeedbackInput>
  }

  export type GemAlertUpdateWithoutUserFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    trigger?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meeting?: MeetingUpdateOneRequiredWithoutGemAlertsNestedInput
    user?: UserUpdateOneRequiredWithoutGemAlertsNestedInput
  }

  export type GemAlertUncheckedUpdateWithoutUserFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    meetingId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    trigger?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataSourceCreateManyUserInput = {
    id?: string
    type: $Enums.DataSourceType
    name: string
    accessToken?: string | null
    refreshToken?: string | null
    scope?: string | null
    lastSyncedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingCreateManyOwnerInput = {
    id?: string
    title?: string | null
    startTime: Date | string
    endTime?: Date | string | null
    sourceCalendarEventId?: string | null
    platformUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingParticipantCreateManyUserInput = {
    id?: string
    meetingId: string
    name?: string | null
    email?: string | null
    role?: string | null
    insights?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PreMeetingBriefCreateManyUserInput = {
    id?: string
    meetingId: string
    content: JsonNullValueInput | InputJsonValue
    generatedAt?: Date | string
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GemAlertCreateManyUserInput = {
    id?: string
    meetingId: string
    timestamp?: Date | string
    trigger?: string | null
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserFeedbackCreateManyUserInput = {
    id?: string
    gemAlertId?: string | null
    rating: $Enums.FeedbackRating
    comment?: string | null
    createdAt?: Date | string
  }

  export type DataSourceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    name?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncedContents?: SyncedContentUpdateManyWithoutDataSourceNestedInput
  }

  export type DataSourceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    name?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncedContents?: SyncedContentUncheckedUpdateManyWithoutDataSourceNestedInput
  }

  export type DataSourceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDataSourceTypeFieldUpdateOperationsInput | $Enums.DataSourceType
    name?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceCalendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: MeetingParticipantUpdateManyWithoutMeetingNestedInput
    preMeetingBrief?: PreMeetingBriefUpdateOneWithoutMeetingNestedInput
    gemAlerts?: GemAlertUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceCalendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: MeetingParticipantUncheckedUpdateManyWithoutMeetingNestedInput
    preMeetingBrief?: PreMeetingBriefUncheckedUpdateOneWithoutMeetingNestedInput
    gemAlerts?: GemAlertUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceCalendarEventId?: NullableStringFieldUpdateOperationsInput | string | null
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingParticipantUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    insights?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meeting?: MeetingUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type MeetingParticipantUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    meetingId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    insights?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingParticipantUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    meetingId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    insights?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreMeetingBriefUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meeting?: MeetingUpdateOneRequiredWithoutPreMeetingBriefNestedInput
  }

  export type PreMeetingBriefUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    meetingId?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreMeetingBriefUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    meetingId?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    generatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GemAlertUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    trigger?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meeting?: MeetingUpdateOneRequiredWithoutGemAlertsNestedInput
    userFeedback?: UserFeedbackUpdateOneWithoutGemAlertNestedInput
  }

  export type GemAlertUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    meetingId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    trigger?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userFeedback?: UserFeedbackUncheckedUpdateOneWithoutGemAlertNestedInput
  }

  export type GemAlertUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    meetingId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    trigger?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFeedbackUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: EnumFeedbackRatingFieldUpdateOperationsInput | $Enums.FeedbackRating
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gemAlert?: GemAlertUpdateOneWithoutUserFeedbackNestedInput
  }

  export type UserFeedbackUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gemAlertId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: EnumFeedbackRatingFieldUpdateOperationsInput | $Enums.FeedbackRating
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFeedbackUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    gemAlertId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: EnumFeedbackRatingFieldUpdateOperationsInput | $Enums.FeedbackRating
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncedContentCreateManyDataSourceInput = {
    id?: string
    userId: string
    contentType: string
    content: JsonNullValueInput | InputJsonValue
    embedding?: NullableJsonNullValueInput | InputJsonValue
    sourceItemId?: string | null
    processedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SyncedContentUpdateWithoutDataSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    embedding?: NullableJsonNullValueInput | InputJsonValue
    sourceItemId?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncedContentUncheckedUpdateWithoutDataSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    embedding?: NullableJsonNullValueInput | InputJsonValue
    sourceItemId?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncedContentUncheckedUpdateManyWithoutDataSourceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contentType?: StringFieldUpdateOperationsInput | string
    content?: JsonNullValueInput | InputJsonValue
    embedding?: NullableJsonNullValueInput | InputJsonValue
    sourceItemId?: NullableStringFieldUpdateOperationsInput | string | null
    processedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingParticipantCreateManyMeetingInput = {
    id?: string
    userId?: string | null
    name?: string | null
    email?: string | null
    role?: string | null
    insights?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GemAlertCreateManyMeetingInput = {
    id?: string
    userId: string
    timestamp?: Date | string
    trigger?: string | null
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingParticipantUpdateWithoutMeetingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    insights?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutMeetingAttendeesNestedInput
  }

  export type MeetingParticipantUncheckedUpdateWithoutMeetingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    insights?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingParticipantUncheckedUpdateManyWithoutMeetingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    insights?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GemAlertUpdateWithoutMeetingInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    trigger?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGemAlertsNestedInput
    userFeedback?: UserFeedbackUpdateOneWithoutGemAlertNestedInput
  }

  export type GemAlertUncheckedUpdateWithoutMeetingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    trigger?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userFeedback?: UserFeedbackUncheckedUpdateOneWithoutGemAlertNestedInput
  }

  export type GemAlertUncheckedUpdateManyWithoutMeetingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    trigger?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}