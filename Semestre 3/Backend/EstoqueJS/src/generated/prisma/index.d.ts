
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ProdutoModel
 * 
 */
export type ProdutoModel = $Result.DefaultSelection<Prisma.$ProdutoModelPayload>
/**
 * Model CategoriaProduto
 * 
 */
export type CategoriaProduto = $Result.DefaultSelection<Prisma.$CategoriaProdutoPayload>
/**
 * Model UnidadeMedida
 * 
 */
export type UnidadeMedida = $Result.DefaultSelection<Prisma.$UnidadeMedidaPayload>
/**
 * Model OperacaoEstoque
 * 
 */
export type OperacaoEstoque = $Result.DefaultSelection<Prisma.$OperacaoEstoquePayload>
/**
 * Model OperacaoEstoqueDetalhe
 * 
 */
export type OperacaoEstoqueDetalhe = $Result.DefaultSelection<Prisma.$OperacaoEstoqueDetalhePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more ProdutoModels
 * const produtoModels = await prisma.produtoModel.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more ProdutoModels
   * const produtoModels = await prisma.produtoModel.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.produtoModel`: Exposes CRUD operations for the **ProdutoModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProdutoModels
    * const produtoModels = await prisma.produtoModel.findMany()
    * ```
    */
  get produtoModel(): Prisma.ProdutoModelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoriaProduto`: Exposes CRUD operations for the **CategoriaProduto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategoriaProdutos
    * const categoriaProdutos = await prisma.categoriaProduto.findMany()
    * ```
    */
  get categoriaProduto(): Prisma.CategoriaProdutoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unidadeMedida`: Exposes CRUD operations for the **UnidadeMedida** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UnidadeMedidas
    * const unidadeMedidas = await prisma.unidadeMedida.findMany()
    * ```
    */
  get unidadeMedida(): Prisma.UnidadeMedidaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.operacaoEstoque`: Exposes CRUD operations for the **OperacaoEstoque** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OperacaoEstoques
    * const operacaoEstoques = await prisma.operacaoEstoque.findMany()
    * ```
    */
  get operacaoEstoque(): Prisma.OperacaoEstoqueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.operacaoEstoqueDetalhe`: Exposes CRUD operations for the **OperacaoEstoqueDetalhe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OperacaoEstoqueDetalhes
    * const operacaoEstoqueDetalhes = await prisma.operacaoEstoqueDetalhe.findMany()
    * ```
    */
  get operacaoEstoqueDetalhe(): Prisma.OperacaoEstoqueDetalheDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    ProdutoModel: 'ProdutoModel',
    CategoriaProduto: 'CategoriaProduto',
    UnidadeMedida: 'UnidadeMedida',
    OperacaoEstoque: 'OperacaoEstoque',
    OperacaoEstoqueDetalhe: 'OperacaoEstoqueDetalhe'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "produtoModel" | "categoriaProduto" | "unidadeMedida" | "operacaoEstoque" | "operacaoEstoqueDetalhe"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ProdutoModel: {
        payload: Prisma.$ProdutoModelPayload<ExtArgs>
        fields: Prisma.ProdutoModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProdutoModelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProdutoModelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoModelPayload>
          }
          findFirst: {
            args: Prisma.ProdutoModelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProdutoModelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoModelPayload>
          }
          findMany: {
            args: Prisma.ProdutoModelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoModelPayload>[]
          }
          create: {
            args: Prisma.ProdutoModelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoModelPayload>
          }
          createMany: {
            args: Prisma.ProdutoModelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProdutoModelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoModelPayload>[]
          }
          delete: {
            args: Prisma.ProdutoModelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoModelPayload>
          }
          update: {
            args: Prisma.ProdutoModelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoModelPayload>
          }
          deleteMany: {
            args: Prisma.ProdutoModelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProdutoModelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProdutoModelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoModelPayload>[]
          }
          upsert: {
            args: Prisma.ProdutoModelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoModelPayload>
          }
          aggregate: {
            args: Prisma.ProdutoModelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProdutoModel>
          }
          groupBy: {
            args: Prisma.ProdutoModelGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdutoModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProdutoModelCountArgs<ExtArgs>
            result: $Utils.Optional<ProdutoModelCountAggregateOutputType> | number
          }
        }
      }
      CategoriaProduto: {
        payload: Prisma.$CategoriaProdutoPayload<ExtArgs>
        fields: Prisma.CategoriaProdutoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaProdutoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaProdutoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaProdutoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaProdutoPayload>
          }
          findFirst: {
            args: Prisma.CategoriaProdutoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaProdutoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaProdutoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaProdutoPayload>
          }
          findMany: {
            args: Prisma.CategoriaProdutoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaProdutoPayload>[]
          }
          create: {
            args: Prisma.CategoriaProdutoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaProdutoPayload>
          }
          createMany: {
            args: Prisma.CategoriaProdutoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriaProdutoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaProdutoPayload>[]
          }
          delete: {
            args: Prisma.CategoriaProdutoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaProdutoPayload>
          }
          update: {
            args: Prisma.CategoriaProdutoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaProdutoPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaProdutoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaProdutoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriaProdutoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaProdutoPayload>[]
          }
          upsert: {
            args: Prisma.CategoriaProdutoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaProdutoPayload>
          }
          aggregate: {
            args: Prisma.CategoriaProdutoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoriaProduto>
          }
          groupBy: {
            args: Prisma.CategoriaProdutoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaProdutoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaProdutoCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaProdutoCountAggregateOutputType> | number
          }
        }
      }
      UnidadeMedida: {
        payload: Prisma.$UnidadeMedidaPayload<ExtArgs>
        fields: Prisma.UnidadeMedidaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnidadeMedidaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadeMedidaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnidadeMedidaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadeMedidaPayload>
          }
          findFirst: {
            args: Prisma.UnidadeMedidaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadeMedidaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnidadeMedidaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadeMedidaPayload>
          }
          findMany: {
            args: Prisma.UnidadeMedidaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadeMedidaPayload>[]
          }
          create: {
            args: Prisma.UnidadeMedidaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadeMedidaPayload>
          }
          createMany: {
            args: Prisma.UnidadeMedidaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnidadeMedidaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadeMedidaPayload>[]
          }
          delete: {
            args: Prisma.UnidadeMedidaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadeMedidaPayload>
          }
          update: {
            args: Prisma.UnidadeMedidaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadeMedidaPayload>
          }
          deleteMany: {
            args: Prisma.UnidadeMedidaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnidadeMedidaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UnidadeMedidaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadeMedidaPayload>[]
          }
          upsert: {
            args: Prisma.UnidadeMedidaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadeMedidaPayload>
          }
          aggregate: {
            args: Prisma.UnidadeMedidaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnidadeMedida>
          }
          groupBy: {
            args: Prisma.UnidadeMedidaGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnidadeMedidaGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnidadeMedidaCountArgs<ExtArgs>
            result: $Utils.Optional<UnidadeMedidaCountAggregateOutputType> | number
          }
        }
      }
      OperacaoEstoque: {
        payload: Prisma.$OperacaoEstoquePayload<ExtArgs>
        fields: Prisma.OperacaoEstoqueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OperacaoEstoqueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperacaoEstoquePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OperacaoEstoqueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperacaoEstoquePayload>
          }
          findFirst: {
            args: Prisma.OperacaoEstoqueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperacaoEstoquePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OperacaoEstoqueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperacaoEstoquePayload>
          }
          findMany: {
            args: Prisma.OperacaoEstoqueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperacaoEstoquePayload>[]
          }
          create: {
            args: Prisma.OperacaoEstoqueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperacaoEstoquePayload>
          }
          createMany: {
            args: Prisma.OperacaoEstoqueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OperacaoEstoqueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperacaoEstoquePayload>[]
          }
          delete: {
            args: Prisma.OperacaoEstoqueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperacaoEstoquePayload>
          }
          update: {
            args: Prisma.OperacaoEstoqueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperacaoEstoquePayload>
          }
          deleteMany: {
            args: Prisma.OperacaoEstoqueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OperacaoEstoqueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OperacaoEstoqueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperacaoEstoquePayload>[]
          }
          upsert: {
            args: Prisma.OperacaoEstoqueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperacaoEstoquePayload>
          }
          aggregate: {
            args: Prisma.OperacaoEstoqueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOperacaoEstoque>
          }
          groupBy: {
            args: Prisma.OperacaoEstoqueGroupByArgs<ExtArgs>
            result: $Utils.Optional<OperacaoEstoqueGroupByOutputType>[]
          }
          count: {
            args: Prisma.OperacaoEstoqueCountArgs<ExtArgs>
            result: $Utils.Optional<OperacaoEstoqueCountAggregateOutputType> | number
          }
        }
      }
      OperacaoEstoqueDetalhe: {
        payload: Prisma.$OperacaoEstoqueDetalhePayload<ExtArgs>
        fields: Prisma.OperacaoEstoqueDetalheFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OperacaoEstoqueDetalheFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperacaoEstoqueDetalhePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OperacaoEstoqueDetalheFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperacaoEstoqueDetalhePayload>
          }
          findFirst: {
            args: Prisma.OperacaoEstoqueDetalheFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperacaoEstoqueDetalhePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OperacaoEstoqueDetalheFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperacaoEstoqueDetalhePayload>
          }
          findMany: {
            args: Prisma.OperacaoEstoqueDetalheFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperacaoEstoqueDetalhePayload>[]
          }
          create: {
            args: Prisma.OperacaoEstoqueDetalheCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperacaoEstoqueDetalhePayload>
          }
          createMany: {
            args: Prisma.OperacaoEstoqueDetalheCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OperacaoEstoqueDetalheCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperacaoEstoqueDetalhePayload>[]
          }
          delete: {
            args: Prisma.OperacaoEstoqueDetalheDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperacaoEstoqueDetalhePayload>
          }
          update: {
            args: Prisma.OperacaoEstoqueDetalheUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperacaoEstoqueDetalhePayload>
          }
          deleteMany: {
            args: Prisma.OperacaoEstoqueDetalheDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OperacaoEstoqueDetalheUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OperacaoEstoqueDetalheUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperacaoEstoqueDetalhePayload>[]
          }
          upsert: {
            args: Prisma.OperacaoEstoqueDetalheUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperacaoEstoqueDetalhePayload>
          }
          aggregate: {
            args: Prisma.OperacaoEstoqueDetalheAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOperacaoEstoqueDetalhe>
          }
          groupBy: {
            args: Prisma.OperacaoEstoqueDetalheGroupByArgs<ExtArgs>
            result: $Utils.Optional<OperacaoEstoqueDetalheGroupByOutputType>[]
          }
          count: {
            args: Prisma.OperacaoEstoqueDetalheCountArgs<ExtArgs>
            result: $Utils.Optional<OperacaoEstoqueDetalheCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    produtoModel?: ProdutoModelOmit
    categoriaProduto?: CategoriaProdutoOmit
    unidadeMedida?: UnidadeMedidaOmit
    operacaoEstoque?: OperacaoEstoqueOmit
    operacaoEstoqueDetalhe?: OperacaoEstoqueDetalheOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type CategoriaProdutoCountOutputType
   */

  export type CategoriaProdutoCountOutputType = {
    produtos: number
  }

  export type CategoriaProdutoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produtos?: boolean | CategoriaProdutoCountOutputTypeCountProdutosArgs
  }

  // Custom InputTypes
  /**
   * CategoriaProdutoCountOutputType without action
   */
  export type CategoriaProdutoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaProdutoCountOutputType
     */
    select?: CategoriaProdutoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaProdutoCountOutputType without action
   */
  export type CategoriaProdutoCountOutputTypeCountProdutosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoModelWhereInput
  }


  /**
   * Count Type UnidadeMedidaCountOutputType
   */

  export type UnidadeMedidaCountOutputType = {
    produtos: number
  }

  export type UnidadeMedidaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produtos?: boolean | UnidadeMedidaCountOutputTypeCountProdutosArgs
  }

  // Custom InputTypes
  /**
   * UnidadeMedidaCountOutputType without action
   */
  export type UnidadeMedidaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnidadeMedidaCountOutputType
     */
    select?: UnidadeMedidaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UnidadeMedidaCountOutputType without action
   */
  export type UnidadeMedidaCountOutputTypeCountProdutosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoModelWhereInput
  }


  /**
   * Count Type OperacaoEstoqueCountOutputType
   */

  export type OperacaoEstoqueCountOutputType = {
    operacaoestoquedetalhes: number
  }

  export type OperacaoEstoqueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operacaoestoquedetalhes?: boolean | OperacaoEstoqueCountOutputTypeCountOperacaoestoquedetalhesArgs
  }

  // Custom InputTypes
  /**
   * OperacaoEstoqueCountOutputType without action
   */
  export type OperacaoEstoqueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperacaoEstoqueCountOutputType
     */
    select?: OperacaoEstoqueCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OperacaoEstoqueCountOutputType without action
   */
  export type OperacaoEstoqueCountOutputTypeCountOperacaoestoquedetalhesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperacaoEstoqueDetalheWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ProdutoModel
   */

  export type AggregateProdutoModel = {
    _count: ProdutoModelCountAggregateOutputType | null
    _avg: ProdutoModelAvgAggregateOutputType | null
    _sum: ProdutoModelSumAggregateOutputType | null
    _min: ProdutoModelMinAggregateOutputType | null
    _max: ProdutoModelMaxAggregateOutputType | null
  }

  export type ProdutoModelAvgAggregateOutputType = {
    id: number | null
    quantidadeAtual: number | null
    categoriaId: number | null
    unidadeMedidaId: number | null
  }

  export type ProdutoModelSumAggregateOutputType = {
    id: number | null
    quantidadeAtual: number | null
    categoriaId: number | null
    unidadeMedidaId: number | null
  }

  export type ProdutoModelMinAggregateOutputType = {
    id: number | null
    nome: string | null
    habilitado: boolean | null
    nomearquivofoto: string | null
    descricao: string | null
    quantidadeAtual: number | null
    categoriaId: number | null
    unidadeMedidaId: number | null
  }

  export type ProdutoModelMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    habilitado: boolean | null
    nomearquivofoto: string | null
    descricao: string | null
    quantidadeAtual: number | null
    categoriaId: number | null
    unidadeMedidaId: number | null
  }

  export type ProdutoModelCountAggregateOutputType = {
    id: number
    nome: number
    habilitado: number
    nomearquivofoto: number
    descricao: number
    quantidadeAtual: number
    categoriaId: number
    unidadeMedidaId: number
    _all: number
  }


  export type ProdutoModelAvgAggregateInputType = {
    id?: true
    quantidadeAtual?: true
    categoriaId?: true
    unidadeMedidaId?: true
  }

  export type ProdutoModelSumAggregateInputType = {
    id?: true
    quantidadeAtual?: true
    categoriaId?: true
    unidadeMedidaId?: true
  }

  export type ProdutoModelMinAggregateInputType = {
    id?: true
    nome?: true
    habilitado?: true
    nomearquivofoto?: true
    descricao?: true
    quantidadeAtual?: true
    categoriaId?: true
    unidadeMedidaId?: true
  }

  export type ProdutoModelMaxAggregateInputType = {
    id?: true
    nome?: true
    habilitado?: true
    nomearquivofoto?: true
    descricao?: true
    quantidadeAtual?: true
    categoriaId?: true
    unidadeMedidaId?: true
  }

  export type ProdutoModelCountAggregateInputType = {
    id?: true
    nome?: true
    habilitado?: true
    nomearquivofoto?: true
    descricao?: true
    quantidadeAtual?: true
    categoriaId?: true
    unidadeMedidaId?: true
    _all?: true
  }

  export type ProdutoModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProdutoModel to aggregate.
     */
    where?: ProdutoModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProdutoModels to fetch.
     */
    orderBy?: ProdutoModelOrderByWithRelationInput | ProdutoModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProdutoModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProdutoModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProdutoModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProdutoModels
    **/
    _count?: true | ProdutoModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdutoModelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdutoModelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutoModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutoModelMaxAggregateInputType
  }

  export type GetProdutoModelAggregateType<T extends ProdutoModelAggregateArgs> = {
        [P in keyof T & keyof AggregateProdutoModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProdutoModel[P]>
      : GetScalarType<T[P], AggregateProdutoModel[P]>
  }




  export type ProdutoModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoModelWhereInput
    orderBy?: ProdutoModelOrderByWithAggregationInput | ProdutoModelOrderByWithAggregationInput[]
    by: ProdutoModelScalarFieldEnum[] | ProdutoModelScalarFieldEnum
    having?: ProdutoModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutoModelCountAggregateInputType | true
    _avg?: ProdutoModelAvgAggregateInputType
    _sum?: ProdutoModelSumAggregateInputType
    _min?: ProdutoModelMinAggregateInputType
    _max?: ProdutoModelMaxAggregateInputType
  }

  export type ProdutoModelGroupByOutputType = {
    id: number
    nome: string
    habilitado: boolean
    nomearquivofoto: string
    descricao: string
    quantidadeAtual: number
    categoriaId: number
    unidadeMedidaId: number
    _count: ProdutoModelCountAggregateOutputType | null
    _avg: ProdutoModelAvgAggregateOutputType | null
    _sum: ProdutoModelSumAggregateOutputType | null
    _min: ProdutoModelMinAggregateOutputType | null
    _max: ProdutoModelMaxAggregateOutputType | null
  }

  type GetProdutoModelGroupByPayload<T extends ProdutoModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdutoModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutoModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutoModelGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutoModelGroupByOutputType[P]>
        }
      >
    >


  export type ProdutoModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    habilitado?: boolean
    nomearquivofoto?: boolean
    descricao?: boolean
    quantidadeAtual?: boolean
    categoriaId?: boolean
    unidadeMedidaId?: boolean
    categoria?: boolean | CategoriaProdutoDefaultArgs<ExtArgs>
    unidadeMedida?: boolean | UnidadeMedidaDefaultArgs<ExtArgs>
    operacaoEstoqueDetalhe?: boolean | ProdutoModel$operacaoEstoqueDetalheArgs<ExtArgs>
  }, ExtArgs["result"]["produtoModel"]>

  export type ProdutoModelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    habilitado?: boolean
    nomearquivofoto?: boolean
    descricao?: boolean
    quantidadeAtual?: boolean
    categoriaId?: boolean
    unidadeMedidaId?: boolean
    categoria?: boolean | CategoriaProdutoDefaultArgs<ExtArgs>
    unidadeMedida?: boolean | UnidadeMedidaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produtoModel"]>

  export type ProdutoModelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    habilitado?: boolean
    nomearquivofoto?: boolean
    descricao?: boolean
    quantidadeAtual?: boolean
    categoriaId?: boolean
    unidadeMedidaId?: boolean
    categoria?: boolean | CategoriaProdutoDefaultArgs<ExtArgs>
    unidadeMedida?: boolean | UnidadeMedidaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produtoModel"]>

  export type ProdutoModelSelectScalar = {
    id?: boolean
    nome?: boolean
    habilitado?: boolean
    nomearquivofoto?: boolean
    descricao?: boolean
    quantidadeAtual?: boolean
    categoriaId?: boolean
    unidadeMedidaId?: boolean
  }

  export type ProdutoModelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "habilitado" | "nomearquivofoto" | "descricao" | "quantidadeAtual" | "categoriaId" | "unidadeMedidaId", ExtArgs["result"]["produtoModel"]>
  export type ProdutoModelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaProdutoDefaultArgs<ExtArgs>
    unidadeMedida?: boolean | UnidadeMedidaDefaultArgs<ExtArgs>
    operacaoEstoqueDetalhe?: boolean | ProdutoModel$operacaoEstoqueDetalheArgs<ExtArgs>
  }
  export type ProdutoModelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaProdutoDefaultArgs<ExtArgs>
    unidadeMedida?: boolean | UnidadeMedidaDefaultArgs<ExtArgs>
  }
  export type ProdutoModelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaProdutoDefaultArgs<ExtArgs>
    unidadeMedida?: boolean | UnidadeMedidaDefaultArgs<ExtArgs>
  }

  export type $ProdutoModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProdutoModel"
    objects: {
      categoria: Prisma.$CategoriaProdutoPayload<ExtArgs>
      unidadeMedida: Prisma.$UnidadeMedidaPayload<ExtArgs>
      operacaoEstoqueDetalhe: Prisma.$OperacaoEstoqueDetalhePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      habilitado: boolean
      nomearquivofoto: string
      descricao: string
      quantidadeAtual: number
      categoriaId: number
      unidadeMedidaId: number
    }, ExtArgs["result"]["produtoModel"]>
    composites: {}
  }

  type ProdutoModelGetPayload<S extends boolean | null | undefined | ProdutoModelDefaultArgs> = $Result.GetResult<Prisma.$ProdutoModelPayload, S>

  type ProdutoModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProdutoModelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdutoModelCountAggregateInputType | true
    }

  export interface ProdutoModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProdutoModel'], meta: { name: 'ProdutoModel' } }
    /**
     * Find zero or one ProdutoModel that matches the filter.
     * @param {ProdutoModelFindUniqueArgs} args - Arguments to find a ProdutoModel
     * @example
     * // Get one ProdutoModel
     * const produtoModel = await prisma.produtoModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProdutoModelFindUniqueArgs>(args: SelectSubset<T, ProdutoModelFindUniqueArgs<ExtArgs>>): Prisma__ProdutoModelClient<$Result.GetResult<Prisma.$ProdutoModelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProdutoModel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProdutoModelFindUniqueOrThrowArgs} args - Arguments to find a ProdutoModel
     * @example
     * // Get one ProdutoModel
     * const produtoModel = await prisma.produtoModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProdutoModelFindUniqueOrThrowArgs>(args: SelectSubset<T, ProdutoModelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProdutoModelClient<$Result.GetResult<Prisma.$ProdutoModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProdutoModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoModelFindFirstArgs} args - Arguments to find a ProdutoModel
     * @example
     * // Get one ProdutoModel
     * const produtoModel = await prisma.produtoModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProdutoModelFindFirstArgs>(args?: SelectSubset<T, ProdutoModelFindFirstArgs<ExtArgs>>): Prisma__ProdutoModelClient<$Result.GetResult<Prisma.$ProdutoModelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProdutoModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoModelFindFirstOrThrowArgs} args - Arguments to find a ProdutoModel
     * @example
     * // Get one ProdutoModel
     * const produtoModel = await prisma.produtoModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProdutoModelFindFirstOrThrowArgs>(args?: SelectSubset<T, ProdutoModelFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProdutoModelClient<$Result.GetResult<Prisma.$ProdutoModelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProdutoModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoModelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProdutoModels
     * const produtoModels = await prisma.produtoModel.findMany()
     * 
     * // Get first 10 ProdutoModels
     * const produtoModels = await prisma.produtoModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produtoModelWithIdOnly = await prisma.produtoModel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProdutoModelFindManyArgs>(args?: SelectSubset<T, ProdutoModelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProdutoModel.
     * @param {ProdutoModelCreateArgs} args - Arguments to create a ProdutoModel.
     * @example
     * // Create one ProdutoModel
     * const ProdutoModel = await prisma.produtoModel.create({
     *   data: {
     *     // ... data to create a ProdutoModel
     *   }
     * })
     * 
     */
    create<T extends ProdutoModelCreateArgs>(args: SelectSubset<T, ProdutoModelCreateArgs<ExtArgs>>): Prisma__ProdutoModelClient<$Result.GetResult<Prisma.$ProdutoModelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProdutoModels.
     * @param {ProdutoModelCreateManyArgs} args - Arguments to create many ProdutoModels.
     * @example
     * // Create many ProdutoModels
     * const produtoModel = await prisma.produtoModel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProdutoModelCreateManyArgs>(args?: SelectSubset<T, ProdutoModelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProdutoModels and returns the data saved in the database.
     * @param {ProdutoModelCreateManyAndReturnArgs} args - Arguments to create many ProdutoModels.
     * @example
     * // Create many ProdutoModels
     * const produtoModel = await prisma.produtoModel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProdutoModels and only return the `id`
     * const produtoModelWithIdOnly = await prisma.produtoModel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProdutoModelCreateManyAndReturnArgs>(args?: SelectSubset<T, ProdutoModelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoModelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProdutoModel.
     * @param {ProdutoModelDeleteArgs} args - Arguments to delete one ProdutoModel.
     * @example
     * // Delete one ProdutoModel
     * const ProdutoModel = await prisma.produtoModel.delete({
     *   where: {
     *     // ... filter to delete one ProdutoModel
     *   }
     * })
     * 
     */
    delete<T extends ProdutoModelDeleteArgs>(args: SelectSubset<T, ProdutoModelDeleteArgs<ExtArgs>>): Prisma__ProdutoModelClient<$Result.GetResult<Prisma.$ProdutoModelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProdutoModel.
     * @param {ProdutoModelUpdateArgs} args - Arguments to update one ProdutoModel.
     * @example
     * // Update one ProdutoModel
     * const produtoModel = await prisma.produtoModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProdutoModelUpdateArgs>(args: SelectSubset<T, ProdutoModelUpdateArgs<ExtArgs>>): Prisma__ProdutoModelClient<$Result.GetResult<Prisma.$ProdutoModelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProdutoModels.
     * @param {ProdutoModelDeleteManyArgs} args - Arguments to filter ProdutoModels to delete.
     * @example
     * // Delete a few ProdutoModels
     * const { count } = await prisma.produtoModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProdutoModelDeleteManyArgs>(args?: SelectSubset<T, ProdutoModelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProdutoModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProdutoModels
     * const produtoModel = await prisma.produtoModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProdutoModelUpdateManyArgs>(args: SelectSubset<T, ProdutoModelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProdutoModels and returns the data updated in the database.
     * @param {ProdutoModelUpdateManyAndReturnArgs} args - Arguments to update many ProdutoModels.
     * @example
     * // Update many ProdutoModels
     * const produtoModel = await prisma.produtoModel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProdutoModels and only return the `id`
     * const produtoModelWithIdOnly = await prisma.produtoModel.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProdutoModelUpdateManyAndReturnArgs>(args: SelectSubset<T, ProdutoModelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoModelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProdutoModel.
     * @param {ProdutoModelUpsertArgs} args - Arguments to update or create a ProdutoModel.
     * @example
     * // Update or create a ProdutoModel
     * const produtoModel = await prisma.produtoModel.upsert({
     *   create: {
     *     // ... data to create a ProdutoModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProdutoModel we want to update
     *   }
     * })
     */
    upsert<T extends ProdutoModelUpsertArgs>(args: SelectSubset<T, ProdutoModelUpsertArgs<ExtArgs>>): Prisma__ProdutoModelClient<$Result.GetResult<Prisma.$ProdutoModelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProdutoModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoModelCountArgs} args - Arguments to filter ProdutoModels to count.
     * @example
     * // Count the number of ProdutoModels
     * const count = await prisma.produtoModel.count({
     *   where: {
     *     // ... the filter for the ProdutoModels we want to count
     *   }
     * })
    **/
    count<T extends ProdutoModelCountArgs>(
      args?: Subset<T, ProdutoModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutoModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProdutoModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdutoModelAggregateArgs>(args: Subset<T, ProdutoModelAggregateArgs>): Prisma.PrismaPromise<GetProdutoModelAggregateType<T>>

    /**
     * Group by ProdutoModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoModelGroupByArgs} args - Group by arguments.
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
      T extends ProdutoModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdutoModelGroupByArgs['orderBy'] }
        : { orderBy?: ProdutoModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProdutoModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutoModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProdutoModel model
   */
  readonly fields: ProdutoModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProdutoModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProdutoModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoria<T extends CategoriaProdutoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaProdutoDefaultArgs<ExtArgs>>): Prisma__CategoriaProdutoClient<$Result.GetResult<Prisma.$CategoriaProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    unidadeMedida<T extends UnidadeMedidaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UnidadeMedidaDefaultArgs<ExtArgs>>): Prisma__UnidadeMedidaClient<$Result.GetResult<Prisma.$UnidadeMedidaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    operacaoEstoqueDetalhe<T extends ProdutoModel$operacaoEstoqueDetalheArgs<ExtArgs> = {}>(args?: Subset<T, ProdutoModel$operacaoEstoqueDetalheArgs<ExtArgs>>): Prisma__OperacaoEstoqueDetalheClient<$Result.GetResult<Prisma.$OperacaoEstoqueDetalhePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProdutoModel model
   */
  interface ProdutoModelFieldRefs {
    readonly id: FieldRef<"ProdutoModel", 'Int'>
    readonly nome: FieldRef<"ProdutoModel", 'String'>
    readonly habilitado: FieldRef<"ProdutoModel", 'Boolean'>
    readonly nomearquivofoto: FieldRef<"ProdutoModel", 'String'>
    readonly descricao: FieldRef<"ProdutoModel", 'String'>
    readonly quantidadeAtual: FieldRef<"ProdutoModel", 'Int'>
    readonly categoriaId: FieldRef<"ProdutoModel", 'Int'>
    readonly unidadeMedidaId: FieldRef<"ProdutoModel", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProdutoModel findUnique
   */
  export type ProdutoModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoModel
     */
    select?: ProdutoModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoModel
     */
    omit?: ProdutoModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoModelInclude<ExtArgs> | null
    /**
     * Filter, which ProdutoModel to fetch.
     */
    where: ProdutoModelWhereUniqueInput
  }

  /**
   * ProdutoModel findUniqueOrThrow
   */
  export type ProdutoModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoModel
     */
    select?: ProdutoModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoModel
     */
    omit?: ProdutoModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoModelInclude<ExtArgs> | null
    /**
     * Filter, which ProdutoModel to fetch.
     */
    where: ProdutoModelWhereUniqueInput
  }

  /**
   * ProdutoModel findFirst
   */
  export type ProdutoModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoModel
     */
    select?: ProdutoModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoModel
     */
    omit?: ProdutoModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoModelInclude<ExtArgs> | null
    /**
     * Filter, which ProdutoModel to fetch.
     */
    where?: ProdutoModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProdutoModels to fetch.
     */
    orderBy?: ProdutoModelOrderByWithRelationInput | ProdutoModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProdutoModels.
     */
    cursor?: ProdutoModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProdutoModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProdutoModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProdutoModels.
     */
    distinct?: ProdutoModelScalarFieldEnum | ProdutoModelScalarFieldEnum[]
  }

  /**
   * ProdutoModel findFirstOrThrow
   */
  export type ProdutoModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoModel
     */
    select?: ProdutoModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoModel
     */
    omit?: ProdutoModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoModelInclude<ExtArgs> | null
    /**
     * Filter, which ProdutoModel to fetch.
     */
    where?: ProdutoModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProdutoModels to fetch.
     */
    orderBy?: ProdutoModelOrderByWithRelationInput | ProdutoModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProdutoModels.
     */
    cursor?: ProdutoModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProdutoModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProdutoModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProdutoModels.
     */
    distinct?: ProdutoModelScalarFieldEnum | ProdutoModelScalarFieldEnum[]
  }

  /**
   * ProdutoModel findMany
   */
  export type ProdutoModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoModel
     */
    select?: ProdutoModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoModel
     */
    omit?: ProdutoModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoModelInclude<ExtArgs> | null
    /**
     * Filter, which ProdutoModels to fetch.
     */
    where?: ProdutoModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProdutoModels to fetch.
     */
    orderBy?: ProdutoModelOrderByWithRelationInput | ProdutoModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProdutoModels.
     */
    cursor?: ProdutoModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProdutoModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProdutoModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProdutoModels.
     */
    distinct?: ProdutoModelScalarFieldEnum | ProdutoModelScalarFieldEnum[]
  }

  /**
   * ProdutoModel create
   */
  export type ProdutoModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoModel
     */
    select?: ProdutoModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoModel
     */
    omit?: ProdutoModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoModelInclude<ExtArgs> | null
    /**
     * The data needed to create a ProdutoModel.
     */
    data: XOR<ProdutoModelCreateInput, ProdutoModelUncheckedCreateInput>
  }

  /**
   * ProdutoModel createMany
   */
  export type ProdutoModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProdutoModels.
     */
    data: ProdutoModelCreateManyInput | ProdutoModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProdutoModel createManyAndReturn
   */
  export type ProdutoModelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoModel
     */
    select?: ProdutoModelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoModel
     */
    omit?: ProdutoModelOmit<ExtArgs> | null
    /**
     * The data used to create many ProdutoModels.
     */
    data: ProdutoModelCreateManyInput | ProdutoModelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoModelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProdutoModel update
   */
  export type ProdutoModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoModel
     */
    select?: ProdutoModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoModel
     */
    omit?: ProdutoModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoModelInclude<ExtArgs> | null
    /**
     * The data needed to update a ProdutoModel.
     */
    data: XOR<ProdutoModelUpdateInput, ProdutoModelUncheckedUpdateInput>
    /**
     * Choose, which ProdutoModel to update.
     */
    where: ProdutoModelWhereUniqueInput
  }

  /**
   * ProdutoModel updateMany
   */
  export type ProdutoModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProdutoModels.
     */
    data: XOR<ProdutoModelUpdateManyMutationInput, ProdutoModelUncheckedUpdateManyInput>
    /**
     * Filter which ProdutoModels to update
     */
    where?: ProdutoModelWhereInput
    /**
     * Limit how many ProdutoModels to update.
     */
    limit?: number
  }

  /**
   * ProdutoModel updateManyAndReturn
   */
  export type ProdutoModelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoModel
     */
    select?: ProdutoModelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoModel
     */
    omit?: ProdutoModelOmit<ExtArgs> | null
    /**
     * The data used to update ProdutoModels.
     */
    data: XOR<ProdutoModelUpdateManyMutationInput, ProdutoModelUncheckedUpdateManyInput>
    /**
     * Filter which ProdutoModels to update
     */
    where?: ProdutoModelWhereInput
    /**
     * Limit how many ProdutoModels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoModelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProdutoModel upsert
   */
  export type ProdutoModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoModel
     */
    select?: ProdutoModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoModel
     */
    omit?: ProdutoModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoModelInclude<ExtArgs> | null
    /**
     * The filter to search for the ProdutoModel to update in case it exists.
     */
    where: ProdutoModelWhereUniqueInput
    /**
     * In case the ProdutoModel found by the `where` argument doesn't exist, create a new ProdutoModel with this data.
     */
    create: XOR<ProdutoModelCreateInput, ProdutoModelUncheckedCreateInput>
    /**
     * In case the ProdutoModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProdutoModelUpdateInput, ProdutoModelUncheckedUpdateInput>
  }

  /**
   * ProdutoModel delete
   */
  export type ProdutoModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoModel
     */
    select?: ProdutoModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoModel
     */
    omit?: ProdutoModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoModelInclude<ExtArgs> | null
    /**
     * Filter which ProdutoModel to delete.
     */
    where: ProdutoModelWhereUniqueInput
  }

  /**
   * ProdutoModel deleteMany
   */
  export type ProdutoModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProdutoModels to delete
     */
    where?: ProdutoModelWhereInput
    /**
     * Limit how many ProdutoModels to delete.
     */
    limit?: number
  }

  /**
   * ProdutoModel.operacaoEstoqueDetalhe
   */
  export type ProdutoModel$operacaoEstoqueDetalheArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperacaoEstoqueDetalhe
     */
    select?: OperacaoEstoqueDetalheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperacaoEstoqueDetalhe
     */
    omit?: OperacaoEstoqueDetalheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperacaoEstoqueDetalheInclude<ExtArgs> | null
    where?: OperacaoEstoqueDetalheWhereInput
  }

  /**
   * ProdutoModel without action
   */
  export type ProdutoModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoModel
     */
    select?: ProdutoModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoModel
     */
    omit?: ProdutoModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoModelInclude<ExtArgs> | null
  }


  /**
   * Model CategoriaProduto
   */

  export type AggregateCategoriaProduto = {
    _count: CategoriaProdutoCountAggregateOutputType | null
    _avg: CategoriaProdutoAvgAggregateOutputType | null
    _sum: CategoriaProdutoSumAggregateOutputType | null
    _min: CategoriaProdutoMinAggregateOutputType | null
    _max: CategoriaProdutoMaxAggregateOutputType | null
  }

  export type CategoriaProdutoAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriaProdutoSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriaProdutoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
  }

  export type CategoriaProdutoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
  }

  export type CategoriaProdutoCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    _all: number
  }


  export type CategoriaProdutoAvgAggregateInputType = {
    id?: true
  }

  export type CategoriaProdutoSumAggregateInputType = {
    id?: true
  }

  export type CategoriaProdutoMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
  }

  export type CategoriaProdutoMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
  }

  export type CategoriaProdutoCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    _all?: true
  }

  export type CategoriaProdutoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoriaProduto to aggregate.
     */
    where?: CategoriaProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriaProdutos to fetch.
     */
    orderBy?: CategoriaProdutoOrderByWithRelationInput | CategoriaProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriaProdutos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriaProdutos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategoriaProdutos
    **/
    _count?: true | CategoriaProdutoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaProdutoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaProdutoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaProdutoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaProdutoMaxAggregateInputType
  }

  export type GetCategoriaProdutoAggregateType<T extends CategoriaProdutoAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoriaProduto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoriaProduto[P]>
      : GetScalarType<T[P], AggregateCategoriaProduto[P]>
  }




  export type CategoriaProdutoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaProdutoWhereInput
    orderBy?: CategoriaProdutoOrderByWithAggregationInput | CategoriaProdutoOrderByWithAggregationInput[]
    by: CategoriaProdutoScalarFieldEnum[] | CategoriaProdutoScalarFieldEnum
    having?: CategoriaProdutoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaProdutoCountAggregateInputType | true
    _avg?: CategoriaProdutoAvgAggregateInputType
    _sum?: CategoriaProdutoSumAggregateInputType
    _min?: CategoriaProdutoMinAggregateInputType
    _max?: CategoriaProdutoMaxAggregateInputType
  }

  export type CategoriaProdutoGroupByOutputType = {
    id: number
    nome: string
    descricao: string
    _count: CategoriaProdutoCountAggregateOutputType | null
    _avg: CategoriaProdutoAvgAggregateOutputType | null
    _sum: CategoriaProdutoSumAggregateOutputType | null
    _min: CategoriaProdutoMinAggregateOutputType | null
    _max: CategoriaProdutoMaxAggregateOutputType | null
  }

  type GetCategoriaProdutoGroupByPayload<T extends CategoriaProdutoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaProdutoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaProdutoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaProdutoGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaProdutoGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaProdutoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    produtos?: boolean | CategoriaProduto$produtosArgs<ExtArgs>
    _count?: boolean | CategoriaProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoriaProduto"]>

  export type CategoriaProdutoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["categoriaProduto"]>

  export type CategoriaProdutoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["categoriaProduto"]>

  export type CategoriaProdutoSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
  }

  export type CategoriaProdutoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao", ExtArgs["result"]["categoriaProduto"]>
  export type CategoriaProdutoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produtos?: boolean | CategoriaProduto$produtosArgs<ExtArgs>
    _count?: boolean | CategoriaProdutoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriaProdutoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriaProdutoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriaProdutoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CategoriaProduto"
    objects: {
      produtos: Prisma.$ProdutoModelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string
    }, ExtArgs["result"]["categoriaProduto"]>
    composites: {}
  }

  type CategoriaProdutoGetPayload<S extends boolean | null | undefined | CategoriaProdutoDefaultArgs> = $Result.GetResult<Prisma.$CategoriaProdutoPayload, S>

  type CategoriaProdutoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaProdutoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaProdutoCountAggregateInputType | true
    }

  export interface CategoriaProdutoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CategoriaProduto'], meta: { name: 'CategoriaProduto' } }
    /**
     * Find zero or one CategoriaProduto that matches the filter.
     * @param {CategoriaProdutoFindUniqueArgs} args - Arguments to find a CategoriaProduto
     * @example
     * // Get one CategoriaProduto
     * const categoriaProduto = await prisma.categoriaProduto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaProdutoFindUniqueArgs>(args: SelectSubset<T, CategoriaProdutoFindUniqueArgs<ExtArgs>>): Prisma__CategoriaProdutoClient<$Result.GetResult<Prisma.$CategoriaProdutoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CategoriaProduto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaProdutoFindUniqueOrThrowArgs} args - Arguments to find a CategoriaProduto
     * @example
     * // Get one CategoriaProduto
     * const categoriaProduto = await prisma.categoriaProduto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaProdutoFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaProdutoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaProdutoClient<$Result.GetResult<Prisma.$CategoriaProdutoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoriaProduto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaProdutoFindFirstArgs} args - Arguments to find a CategoriaProduto
     * @example
     * // Get one CategoriaProduto
     * const categoriaProduto = await prisma.categoriaProduto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaProdutoFindFirstArgs>(args?: SelectSubset<T, CategoriaProdutoFindFirstArgs<ExtArgs>>): Prisma__CategoriaProdutoClient<$Result.GetResult<Prisma.$CategoriaProdutoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoriaProduto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaProdutoFindFirstOrThrowArgs} args - Arguments to find a CategoriaProduto
     * @example
     * // Get one CategoriaProduto
     * const categoriaProduto = await prisma.categoriaProduto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaProdutoFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaProdutoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaProdutoClient<$Result.GetResult<Prisma.$CategoriaProdutoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CategoriaProdutos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaProdutoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoriaProdutos
     * const categoriaProdutos = await prisma.categoriaProduto.findMany()
     * 
     * // Get first 10 CategoriaProdutos
     * const categoriaProdutos = await prisma.categoriaProduto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaProdutoWithIdOnly = await prisma.categoriaProduto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriaProdutoFindManyArgs>(args?: SelectSubset<T, CategoriaProdutoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaProdutoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CategoriaProduto.
     * @param {CategoriaProdutoCreateArgs} args - Arguments to create a CategoriaProduto.
     * @example
     * // Create one CategoriaProduto
     * const CategoriaProduto = await prisma.categoriaProduto.create({
     *   data: {
     *     // ... data to create a CategoriaProduto
     *   }
     * })
     * 
     */
    create<T extends CategoriaProdutoCreateArgs>(args: SelectSubset<T, CategoriaProdutoCreateArgs<ExtArgs>>): Prisma__CategoriaProdutoClient<$Result.GetResult<Prisma.$CategoriaProdutoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CategoriaProdutos.
     * @param {CategoriaProdutoCreateManyArgs} args - Arguments to create many CategoriaProdutos.
     * @example
     * // Create many CategoriaProdutos
     * const categoriaProduto = await prisma.categoriaProduto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaProdutoCreateManyArgs>(args?: SelectSubset<T, CategoriaProdutoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CategoriaProdutos and returns the data saved in the database.
     * @param {CategoriaProdutoCreateManyAndReturnArgs} args - Arguments to create many CategoriaProdutos.
     * @example
     * // Create many CategoriaProdutos
     * const categoriaProduto = await prisma.categoriaProduto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CategoriaProdutos and only return the `id`
     * const categoriaProdutoWithIdOnly = await prisma.categoriaProduto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriaProdutoCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriaProdutoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaProdutoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CategoriaProduto.
     * @param {CategoriaProdutoDeleteArgs} args - Arguments to delete one CategoriaProduto.
     * @example
     * // Delete one CategoriaProduto
     * const CategoriaProduto = await prisma.categoriaProduto.delete({
     *   where: {
     *     // ... filter to delete one CategoriaProduto
     *   }
     * })
     * 
     */
    delete<T extends CategoriaProdutoDeleteArgs>(args: SelectSubset<T, CategoriaProdutoDeleteArgs<ExtArgs>>): Prisma__CategoriaProdutoClient<$Result.GetResult<Prisma.$CategoriaProdutoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CategoriaProduto.
     * @param {CategoriaProdutoUpdateArgs} args - Arguments to update one CategoriaProduto.
     * @example
     * // Update one CategoriaProduto
     * const categoriaProduto = await prisma.categoriaProduto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaProdutoUpdateArgs>(args: SelectSubset<T, CategoriaProdutoUpdateArgs<ExtArgs>>): Prisma__CategoriaProdutoClient<$Result.GetResult<Prisma.$CategoriaProdutoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CategoriaProdutos.
     * @param {CategoriaProdutoDeleteManyArgs} args - Arguments to filter CategoriaProdutos to delete.
     * @example
     * // Delete a few CategoriaProdutos
     * const { count } = await prisma.categoriaProduto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaProdutoDeleteManyArgs>(args?: SelectSubset<T, CategoriaProdutoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoriaProdutos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaProdutoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoriaProdutos
     * const categoriaProduto = await prisma.categoriaProduto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaProdutoUpdateManyArgs>(args: SelectSubset<T, CategoriaProdutoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoriaProdutos and returns the data updated in the database.
     * @param {CategoriaProdutoUpdateManyAndReturnArgs} args - Arguments to update many CategoriaProdutos.
     * @example
     * // Update many CategoriaProdutos
     * const categoriaProduto = await prisma.categoriaProduto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CategoriaProdutos and only return the `id`
     * const categoriaProdutoWithIdOnly = await prisma.categoriaProduto.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoriaProdutoUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriaProdutoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaProdutoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CategoriaProduto.
     * @param {CategoriaProdutoUpsertArgs} args - Arguments to update or create a CategoriaProduto.
     * @example
     * // Update or create a CategoriaProduto
     * const categoriaProduto = await prisma.categoriaProduto.upsert({
     *   create: {
     *     // ... data to create a CategoriaProduto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoriaProduto we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaProdutoUpsertArgs>(args: SelectSubset<T, CategoriaProdutoUpsertArgs<ExtArgs>>): Prisma__CategoriaProdutoClient<$Result.GetResult<Prisma.$CategoriaProdutoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CategoriaProdutos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaProdutoCountArgs} args - Arguments to filter CategoriaProdutos to count.
     * @example
     * // Count the number of CategoriaProdutos
     * const count = await prisma.categoriaProduto.count({
     *   where: {
     *     // ... the filter for the CategoriaProdutos we want to count
     *   }
     * })
    **/
    count<T extends CategoriaProdutoCountArgs>(
      args?: Subset<T, CategoriaProdutoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaProdutoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategoriaProduto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaProdutoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriaProdutoAggregateArgs>(args: Subset<T, CategoriaProdutoAggregateArgs>): Prisma.PrismaPromise<GetCategoriaProdutoAggregateType<T>>

    /**
     * Group by CategoriaProduto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaProdutoGroupByArgs} args - Group by arguments.
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
      T extends CategoriaProdutoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaProdutoGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaProdutoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriaProdutoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaProdutoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CategoriaProduto model
   */
  readonly fields: CategoriaProdutoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategoriaProduto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaProdutoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produtos<T extends CategoriaProduto$produtosArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaProduto$produtosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CategoriaProduto model
   */
  interface CategoriaProdutoFieldRefs {
    readonly id: FieldRef<"CategoriaProduto", 'Int'>
    readonly nome: FieldRef<"CategoriaProduto", 'String'>
    readonly descricao: FieldRef<"CategoriaProduto", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CategoriaProduto findUnique
   */
  export type CategoriaProdutoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaProduto
     */
    select?: CategoriaProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaProduto
     */
    omit?: CategoriaProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaProdutoInclude<ExtArgs> | null
    /**
     * Filter, which CategoriaProduto to fetch.
     */
    where: CategoriaProdutoWhereUniqueInput
  }

  /**
   * CategoriaProduto findUniqueOrThrow
   */
  export type CategoriaProdutoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaProduto
     */
    select?: CategoriaProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaProduto
     */
    omit?: CategoriaProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaProdutoInclude<ExtArgs> | null
    /**
     * Filter, which CategoriaProduto to fetch.
     */
    where: CategoriaProdutoWhereUniqueInput
  }

  /**
   * CategoriaProduto findFirst
   */
  export type CategoriaProdutoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaProduto
     */
    select?: CategoriaProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaProduto
     */
    omit?: CategoriaProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaProdutoInclude<ExtArgs> | null
    /**
     * Filter, which CategoriaProduto to fetch.
     */
    where?: CategoriaProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriaProdutos to fetch.
     */
    orderBy?: CategoriaProdutoOrderByWithRelationInput | CategoriaProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoriaProdutos.
     */
    cursor?: CategoriaProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriaProdutos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriaProdutos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoriaProdutos.
     */
    distinct?: CategoriaProdutoScalarFieldEnum | CategoriaProdutoScalarFieldEnum[]
  }

  /**
   * CategoriaProduto findFirstOrThrow
   */
  export type CategoriaProdutoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaProduto
     */
    select?: CategoriaProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaProduto
     */
    omit?: CategoriaProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaProdutoInclude<ExtArgs> | null
    /**
     * Filter, which CategoriaProduto to fetch.
     */
    where?: CategoriaProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriaProdutos to fetch.
     */
    orderBy?: CategoriaProdutoOrderByWithRelationInput | CategoriaProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoriaProdutos.
     */
    cursor?: CategoriaProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriaProdutos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriaProdutos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoriaProdutos.
     */
    distinct?: CategoriaProdutoScalarFieldEnum | CategoriaProdutoScalarFieldEnum[]
  }

  /**
   * CategoriaProduto findMany
   */
  export type CategoriaProdutoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaProduto
     */
    select?: CategoriaProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaProduto
     */
    omit?: CategoriaProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaProdutoInclude<ExtArgs> | null
    /**
     * Filter, which CategoriaProdutos to fetch.
     */
    where?: CategoriaProdutoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriaProdutos to fetch.
     */
    orderBy?: CategoriaProdutoOrderByWithRelationInput | CategoriaProdutoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategoriaProdutos.
     */
    cursor?: CategoriaProdutoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriaProdutos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriaProdutos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoriaProdutos.
     */
    distinct?: CategoriaProdutoScalarFieldEnum | CategoriaProdutoScalarFieldEnum[]
  }

  /**
   * CategoriaProduto create
   */
  export type CategoriaProdutoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaProduto
     */
    select?: CategoriaProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaProduto
     */
    omit?: CategoriaProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaProdutoInclude<ExtArgs> | null
    /**
     * The data needed to create a CategoriaProduto.
     */
    data: XOR<CategoriaProdutoCreateInput, CategoriaProdutoUncheckedCreateInput>
  }

  /**
   * CategoriaProduto createMany
   */
  export type CategoriaProdutoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CategoriaProdutos.
     */
    data: CategoriaProdutoCreateManyInput | CategoriaProdutoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CategoriaProduto createManyAndReturn
   */
  export type CategoriaProdutoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaProduto
     */
    select?: CategoriaProdutoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaProduto
     */
    omit?: CategoriaProdutoOmit<ExtArgs> | null
    /**
     * The data used to create many CategoriaProdutos.
     */
    data: CategoriaProdutoCreateManyInput | CategoriaProdutoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CategoriaProduto update
   */
  export type CategoriaProdutoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaProduto
     */
    select?: CategoriaProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaProduto
     */
    omit?: CategoriaProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaProdutoInclude<ExtArgs> | null
    /**
     * The data needed to update a CategoriaProduto.
     */
    data: XOR<CategoriaProdutoUpdateInput, CategoriaProdutoUncheckedUpdateInput>
    /**
     * Choose, which CategoriaProduto to update.
     */
    where: CategoriaProdutoWhereUniqueInput
  }

  /**
   * CategoriaProduto updateMany
   */
  export type CategoriaProdutoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CategoriaProdutos.
     */
    data: XOR<CategoriaProdutoUpdateManyMutationInput, CategoriaProdutoUncheckedUpdateManyInput>
    /**
     * Filter which CategoriaProdutos to update
     */
    where?: CategoriaProdutoWhereInput
    /**
     * Limit how many CategoriaProdutos to update.
     */
    limit?: number
  }

  /**
   * CategoriaProduto updateManyAndReturn
   */
  export type CategoriaProdutoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaProduto
     */
    select?: CategoriaProdutoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaProduto
     */
    omit?: CategoriaProdutoOmit<ExtArgs> | null
    /**
     * The data used to update CategoriaProdutos.
     */
    data: XOR<CategoriaProdutoUpdateManyMutationInput, CategoriaProdutoUncheckedUpdateManyInput>
    /**
     * Filter which CategoriaProdutos to update
     */
    where?: CategoriaProdutoWhereInput
    /**
     * Limit how many CategoriaProdutos to update.
     */
    limit?: number
  }

  /**
   * CategoriaProduto upsert
   */
  export type CategoriaProdutoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaProduto
     */
    select?: CategoriaProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaProduto
     */
    omit?: CategoriaProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaProdutoInclude<ExtArgs> | null
    /**
     * The filter to search for the CategoriaProduto to update in case it exists.
     */
    where: CategoriaProdutoWhereUniqueInput
    /**
     * In case the CategoriaProduto found by the `where` argument doesn't exist, create a new CategoriaProduto with this data.
     */
    create: XOR<CategoriaProdutoCreateInput, CategoriaProdutoUncheckedCreateInput>
    /**
     * In case the CategoriaProduto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaProdutoUpdateInput, CategoriaProdutoUncheckedUpdateInput>
  }

  /**
   * CategoriaProduto delete
   */
  export type CategoriaProdutoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaProduto
     */
    select?: CategoriaProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaProduto
     */
    omit?: CategoriaProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaProdutoInclude<ExtArgs> | null
    /**
     * Filter which CategoriaProduto to delete.
     */
    where: CategoriaProdutoWhereUniqueInput
  }

  /**
   * CategoriaProduto deleteMany
   */
  export type CategoriaProdutoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoriaProdutos to delete
     */
    where?: CategoriaProdutoWhereInput
    /**
     * Limit how many CategoriaProdutos to delete.
     */
    limit?: number
  }

  /**
   * CategoriaProduto.produtos
   */
  export type CategoriaProduto$produtosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoModel
     */
    select?: ProdutoModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoModel
     */
    omit?: ProdutoModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoModelInclude<ExtArgs> | null
    where?: ProdutoModelWhereInput
    orderBy?: ProdutoModelOrderByWithRelationInput | ProdutoModelOrderByWithRelationInput[]
    cursor?: ProdutoModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdutoModelScalarFieldEnum | ProdutoModelScalarFieldEnum[]
  }

  /**
   * CategoriaProduto without action
   */
  export type CategoriaProdutoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaProduto
     */
    select?: CategoriaProdutoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoriaProduto
     */
    omit?: CategoriaProdutoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaProdutoInclude<ExtArgs> | null
  }


  /**
   * Model UnidadeMedida
   */

  export type AggregateUnidadeMedida = {
    _count: UnidadeMedidaCountAggregateOutputType | null
    _avg: UnidadeMedidaAvgAggregateOutputType | null
    _sum: UnidadeMedidaSumAggregateOutputType | null
    _min: UnidadeMedidaMinAggregateOutputType | null
    _max: UnidadeMedidaMaxAggregateOutputType | null
  }

  export type UnidadeMedidaAvgAggregateOutputType = {
    id: number | null
  }

  export type UnidadeMedidaSumAggregateOutputType = {
    id: number | null
  }

  export type UnidadeMedidaMinAggregateOutputType = {
    id: number | null
    sigla: string | null
    descricao: string | null
    fracionavel: boolean | null
  }

  export type UnidadeMedidaMaxAggregateOutputType = {
    id: number | null
    sigla: string | null
    descricao: string | null
    fracionavel: boolean | null
  }

  export type UnidadeMedidaCountAggregateOutputType = {
    id: number
    sigla: number
    descricao: number
    fracionavel: number
    _all: number
  }


  export type UnidadeMedidaAvgAggregateInputType = {
    id?: true
  }

  export type UnidadeMedidaSumAggregateInputType = {
    id?: true
  }

  export type UnidadeMedidaMinAggregateInputType = {
    id?: true
    sigla?: true
    descricao?: true
    fracionavel?: true
  }

  export type UnidadeMedidaMaxAggregateInputType = {
    id?: true
    sigla?: true
    descricao?: true
    fracionavel?: true
  }

  export type UnidadeMedidaCountAggregateInputType = {
    id?: true
    sigla?: true
    descricao?: true
    fracionavel?: true
    _all?: true
  }

  export type UnidadeMedidaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnidadeMedida to aggregate.
     */
    where?: UnidadeMedidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnidadeMedidas to fetch.
     */
    orderBy?: UnidadeMedidaOrderByWithRelationInput | UnidadeMedidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnidadeMedidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnidadeMedidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnidadeMedidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UnidadeMedidas
    **/
    _count?: true | UnidadeMedidaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnidadeMedidaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnidadeMedidaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnidadeMedidaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnidadeMedidaMaxAggregateInputType
  }

  export type GetUnidadeMedidaAggregateType<T extends UnidadeMedidaAggregateArgs> = {
        [P in keyof T & keyof AggregateUnidadeMedida]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnidadeMedida[P]>
      : GetScalarType<T[P], AggregateUnidadeMedida[P]>
  }




  export type UnidadeMedidaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnidadeMedidaWhereInput
    orderBy?: UnidadeMedidaOrderByWithAggregationInput | UnidadeMedidaOrderByWithAggregationInput[]
    by: UnidadeMedidaScalarFieldEnum[] | UnidadeMedidaScalarFieldEnum
    having?: UnidadeMedidaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnidadeMedidaCountAggregateInputType | true
    _avg?: UnidadeMedidaAvgAggregateInputType
    _sum?: UnidadeMedidaSumAggregateInputType
    _min?: UnidadeMedidaMinAggregateInputType
    _max?: UnidadeMedidaMaxAggregateInputType
  }

  export type UnidadeMedidaGroupByOutputType = {
    id: number
    sigla: string
    descricao: string
    fracionavel: boolean
    _count: UnidadeMedidaCountAggregateOutputType | null
    _avg: UnidadeMedidaAvgAggregateOutputType | null
    _sum: UnidadeMedidaSumAggregateOutputType | null
    _min: UnidadeMedidaMinAggregateOutputType | null
    _max: UnidadeMedidaMaxAggregateOutputType | null
  }

  type GetUnidadeMedidaGroupByPayload<T extends UnidadeMedidaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnidadeMedidaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnidadeMedidaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnidadeMedidaGroupByOutputType[P]>
            : GetScalarType<T[P], UnidadeMedidaGroupByOutputType[P]>
        }
      >
    >


  export type UnidadeMedidaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sigla?: boolean
    descricao?: boolean
    fracionavel?: boolean
    produtos?: boolean | UnidadeMedida$produtosArgs<ExtArgs>
    _count?: boolean | UnidadeMedidaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unidadeMedida"]>

  export type UnidadeMedidaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sigla?: boolean
    descricao?: boolean
    fracionavel?: boolean
  }, ExtArgs["result"]["unidadeMedida"]>

  export type UnidadeMedidaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sigla?: boolean
    descricao?: boolean
    fracionavel?: boolean
  }, ExtArgs["result"]["unidadeMedida"]>

  export type UnidadeMedidaSelectScalar = {
    id?: boolean
    sigla?: boolean
    descricao?: boolean
    fracionavel?: boolean
  }

  export type UnidadeMedidaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sigla" | "descricao" | "fracionavel", ExtArgs["result"]["unidadeMedida"]>
  export type UnidadeMedidaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produtos?: boolean | UnidadeMedida$produtosArgs<ExtArgs>
    _count?: boolean | UnidadeMedidaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UnidadeMedidaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UnidadeMedidaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UnidadeMedidaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UnidadeMedida"
    objects: {
      produtos: Prisma.$ProdutoModelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sigla: string
      descricao: string
      fracionavel: boolean
    }, ExtArgs["result"]["unidadeMedida"]>
    composites: {}
  }

  type UnidadeMedidaGetPayload<S extends boolean | null | undefined | UnidadeMedidaDefaultArgs> = $Result.GetResult<Prisma.$UnidadeMedidaPayload, S>

  type UnidadeMedidaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnidadeMedidaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnidadeMedidaCountAggregateInputType | true
    }

  export interface UnidadeMedidaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UnidadeMedida'], meta: { name: 'UnidadeMedida' } }
    /**
     * Find zero or one UnidadeMedida that matches the filter.
     * @param {UnidadeMedidaFindUniqueArgs} args - Arguments to find a UnidadeMedida
     * @example
     * // Get one UnidadeMedida
     * const unidadeMedida = await prisma.unidadeMedida.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnidadeMedidaFindUniqueArgs>(args: SelectSubset<T, UnidadeMedidaFindUniqueArgs<ExtArgs>>): Prisma__UnidadeMedidaClient<$Result.GetResult<Prisma.$UnidadeMedidaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UnidadeMedida that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnidadeMedidaFindUniqueOrThrowArgs} args - Arguments to find a UnidadeMedida
     * @example
     * // Get one UnidadeMedida
     * const unidadeMedida = await prisma.unidadeMedida.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnidadeMedidaFindUniqueOrThrowArgs>(args: SelectSubset<T, UnidadeMedidaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnidadeMedidaClient<$Result.GetResult<Prisma.$UnidadeMedidaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnidadeMedida that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadeMedidaFindFirstArgs} args - Arguments to find a UnidadeMedida
     * @example
     * // Get one UnidadeMedida
     * const unidadeMedida = await prisma.unidadeMedida.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnidadeMedidaFindFirstArgs>(args?: SelectSubset<T, UnidadeMedidaFindFirstArgs<ExtArgs>>): Prisma__UnidadeMedidaClient<$Result.GetResult<Prisma.$UnidadeMedidaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnidadeMedida that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadeMedidaFindFirstOrThrowArgs} args - Arguments to find a UnidadeMedida
     * @example
     * // Get one UnidadeMedida
     * const unidadeMedida = await prisma.unidadeMedida.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnidadeMedidaFindFirstOrThrowArgs>(args?: SelectSubset<T, UnidadeMedidaFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnidadeMedidaClient<$Result.GetResult<Prisma.$UnidadeMedidaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UnidadeMedidas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadeMedidaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UnidadeMedidas
     * const unidadeMedidas = await prisma.unidadeMedida.findMany()
     * 
     * // Get first 10 UnidadeMedidas
     * const unidadeMedidas = await prisma.unidadeMedida.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unidadeMedidaWithIdOnly = await prisma.unidadeMedida.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnidadeMedidaFindManyArgs>(args?: SelectSubset<T, UnidadeMedidaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnidadeMedidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UnidadeMedida.
     * @param {UnidadeMedidaCreateArgs} args - Arguments to create a UnidadeMedida.
     * @example
     * // Create one UnidadeMedida
     * const UnidadeMedida = await prisma.unidadeMedida.create({
     *   data: {
     *     // ... data to create a UnidadeMedida
     *   }
     * })
     * 
     */
    create<T extends UnidadeMedidaCreateArgs>(args: SelectSubset<T, UnidadeMedidaCreateArgs<ExtArgs>>): Prisma__UnidadeMedidaClient<$Result.GetResult<Prisma.$UnidadeMedidaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UnidadeMedidas.
     * @param {UnidadeMedidaCreateManyArgs} args - Arguments to create many UnidadeMedidas.
     * @example
     * // Create many UnidadeMedidas
     * const unidadeMedida = await prisma.unidadeMedida.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnidadeMedidaCreateManyArgs>(args?: SelectSubset<T, UnidadeMedidaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UnidadeMedidas and returns the data saved in the database.
     * @param {UnidadeMedidaCreateManyAndReturnArgs} args - Arguments to create many UnidadeMedidas.
     * @example
     * // Create many UnidadeMedidas
     * const unidadeMedida = await prisma.unidadeMedida.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UnidadeMedidas and only return the `id`
     * const unidadeMedidaWithIdOnly = await prisma.unidadeMedida.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnidadeMedidaCreateManyAndReturnArgs>(args?: SelectSubset<T, UnidadeMedidaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnidadeMedidaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UnidadeMedida.
     * @param {UnidadeMedidaDeleteArgs} args - Arguments to delete one UnidadeMedida.
     * @example
     * // Delete one UnidadeMedida
     * const UnidadeMedida = await prisma.unidadeMedida.delete({
     *   where: {
     *     // ... filter to delete one UnidadeMedida
     *   }
     * })
     * 
     */
    delete<T extends UnidadeMedidaDeleteArgs>(args: SelectSubset<T, UnidadeMedidaDeleteArgs<ExtArgs>>): Prisma__UnidadeMedidaClient<$Result.GetResult<Prisma.$UnidadeMedidaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UnidadeMedida.
     * @param {UnidadeMedidaUpdateArgs} args - Arguments to update one UnidadeMedida.
     * @example
     * // Update one UnidadeMedida
     * const unidadeMedida = await prisma.unidadeMedida.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnidadeMedidaUpdateArgs>(args: SelectSubset<T, UnidadeMedidaUpdateArgs<ExtArgs>>): Prisma__UnidadeMedidaClient<$Result.GetResult<Prisma.$UnidadeMedidaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UnidadeMedidas.
     * @param {UnidadeMedidaDeleteManyArgs} args - Arguments to filter UnidadeMedidas to delete.
     * @example
     * // Delete a few UnidadeMedidas
     * const { count } = await prisma.unidadeMedida.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnidadeMedidaDeleteManyArgs>(args?: SelectSubset<T, UnidadeMedidaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnidadeMedidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadeMedidaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UnidadeMedidas
     * const unidadeMedida = await prisma.unidadeMedida.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnidadeMedidaUpdateManyArgs>(args: SelectSubset<T, UnidadeMedidaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnidadeMedidas and returns the data updated in the database.
     * @param {UnidadeMedidaUpdateManyAndReturnArgs} args - Arguments to update many UnidadeMedidas.
     * @example
     * // Update many UnidadeMedidas
     * const unidadeMedida = await prisma.unidadeMedida.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UnidadeMedidas and only return the `id`
     * const unidadeMedidaWithIdOnly = await prisma.unidadeMedida.updateManyAndReturn({
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
    updateManyAndReturn<T extends UnidadeMedidaUpdateManyAndReturnArgs>(args: SelectSubset<T, UnidadeMedidaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnidadeMedidaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UnidadeMedida.
     * @param {UnidadeMedidaUpsertArgs} args - Arguments to update or create a UnidadeMedida.
     * @example
     * // Update or create a UnidadeMedida
     * const unidadeMedida = await prisma.unidadeMedida.upsert({
     *   create: {
     *     // ... data to create a UnidadeMedida
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UnidadeMedida we want to update
     *   }
     * })
     */
    upsert<T extends UnidadeMedidaUpsertArgs>(args: SelectSubset<T, UnidadeMedidaUpsertArgs<ExtArgs>>): Prisma__UnidadeMedidaClient<$Result.GetResult<Prisma.$UnidadeMedidaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UnidadeMedidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadeMedidaCountArgs} args - Arguments to filter UnidadeMedidas to count.
     * @example
     * // Count the number of UnidadeMedidas
     * const count = await prisma.unidadeMedida.count({
     *   where: {
     *     // ... the filter for the UnidadeMedidas we want to count
     *   }
     * })
    **/
    count<T extends UnidadeMedidaCountArgs>(
      args?: Subset<T, UnidadeMedidaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnidadeMedidaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UnidadeMedida.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadeMedidaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UnidadeMedidaAggregateArgs>(args: Subset<T, UnidadeMedidaAggregateArgs>): Prisma.PrismaPromise<GetUnidadeMedidaAggregateType<T>>

    /**
     * Group by UnidadeMedida.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadeMedidaGroupByArgs} args - Group by arguments.
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
      T extends UnidadeMedidaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnidadeMedidaGroupByArgs['orderBy'] }
        : { orderBy?: UnidadeMedidaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UnidadeMedidaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnidadeMedidaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UnidadeMedida model
   */
  readonly fields: UnidadeMedidaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UnidadeMedida.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnidadeMedidaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produtos<T extends UnidadeMedida$produtosArgs<ExtArgs> = {}>(args?: Subset<T, UnidadeMedida$produtosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the UnidadeMedida model
   */
  interface UnidadeMedidaFieldRefs {
    readonly id: FieldRef<"UnidadeMedida", 'Int'>
    readonly sigla: FieldRef<"UnidadeMedida", 'String'>
    readonly descricao: FieldRef<"UnidadeMedida", 'String'>
    readonly fracionavel: FieldRef<"UnidadeMedida", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * UnidadeMedida findUnique
   */
  export type UnidadeMedidaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnidadeMedida
     */
    select?: UnidadeMedidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnidadeMedida
     */
    omit?: UnidadeMedidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadeMedidaInclude<ExtArgs> | null
    /**
     * Filter, which UnidadeMedida to fetch.
     */
    where: UnidadeMedidaWhereUniqueInput
  }

  /**
   * UnidadeMedida findUniqueOrThrow
   */
  export type UnidadeMedidaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnidadeMedida
     */
    select?: UnidadeMedidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnidadeMedida
     */
    omit?: UnidadeMedidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadeMedidaInclude<ExtArgs> | null
    /**
     * Filter, which UnidadeMedida to fetch.
     */
    where: UnidadeMedidaWhereUniqueInput
  }

  /**
   * UnidadeMedida findFirst
   */
  export type UnidadeMedidaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnidadeMedida
     */
    select?: UnidadeMedidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnidadeMedida
     */
    omit?: UnidadeMedidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadeMedidaInclude<ExtArgs> | null
    /**
     * Filter, which UnidadeMedida to fetch.
     */
    where?: UnidadeMedidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnidadeMedidas to fetch.
     */
    orderBy?: UnidadeMedidaOrderByWithRelationInput | UnidadeMedidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnidadeMedidas.
     */
    cursor?: UnidadeMedidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnidadeMedidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnidadeMedidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnidadeMedidas.
     */
    distinct?: UnidadeMedidaScalarFieldEnum | UnidadeMedidaScalarFieldEnum[]
  }

  /**
   * UnidadeMedida findFirstOrThrow
   */
  export type UnidadeMedidaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnidadeMedida
     */
    select?: UnidadeMedidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnidadeMedida
     */
    omit?: UnidadeMedidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadeMedidaInclude<ExtArgs> | null
    /**
     * Filter, which UnidadeMedida to fetch.
     */
    where?: UnidadeMedidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnidadeMedidas to fetch.
     */
    orderBy?: UnidadeMedidaOrderByWithRelationInput | UnidadeMedidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnidadeMedidas.
     */
    cursor?: UnidadeMedidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnidadeMedidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnidadeMedidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnidadeMedidas.
     */
    distinct?: UnidadeMedidaScalarFieldEnum | UnidadeMedidaScalarFieldEnum[]
  }

  /**
   * UnidadeMedida findMany
   */
  export type UnidadeMedidaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnidadeMedida
     */
    select?: UnidadeMedidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnidadeMedida
     */
    omit?: UnidadeMedidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadeMedidaInclude<ExtArgs> | null
    /**
     * Filter, which UnidadeMedidas to fetch.
     */
    where?: UnidadeMedidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnidadeMedidas to fetch.
     */
    orderBy?: UnidadeMedidaOrderByWithRelationInput | UnidadeMedidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UnidadeMedidas.
     */
    cursor?: UnidadeMedidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnidadeMedidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnidadeMedidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnidadeMedidas.
     */
    distinct?: UnidadeMedidaScalarFieldEnum | UnidadeMedidaScalarFieldEnum[]
  }

  /**
   * UnidadeMedida create
   */
  export type UnidadeMedidaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnidadeMedida
     */
    select?: UnidadeMedidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnidadeMedida
     */
    omit?: UnidadeMedidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadeMedidaInclude<ExtArgs> | null
    /**
     * The data needed to create a UnidadeMedida.
     */
    data: XOR<UnidadeMedidaCreateInput, UnidadeMedidaUncheckedCreateInput>
  }

  /**
   * UnidadeMedida createMany
   */
  export type UnidadeMedidaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UnidadeMedidas.
     */
    data: UnidadeMedidaCreateManyInput | UnidadeMedidaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UnidadeMedida createManyAndReturn
   */
  export type UnidadeMedidaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnidadeMedida
     */
    select?: UnidadeMedidaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UnidadeMedida
     */
    omit?: UnidadeMedidaOmit<ExtArgs> | null
    /**
     * The data used to create many UnidadeMedidas.
     */
    data: UnidadeMedidaCreateManyInput | UnidadeMedidaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UnidadeMedida update
   */
  export type UnidadeMedidaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnidadeMedida
     */
    select?: UnidadeMedidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnidadeMedida
     */
    omit?: UnidadeMedidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadeMedidaInclude<ExtArgs> | null
    /**
     * The data needed to update a UnidadeMedida.
     */
    data: XOR<UnidadeMedidaUpdateInput, UnidadeMedidaUncheckedUpdateInput>
    /**
     * Choose, which UnidadeMedida to update.
     */
    where: UnidadeMedidaWhereUniqueInput
  }

  /**
   * UnidadeMedida updateMany
   */
  export type UnidadeMedidaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UnidadeMedidas.
     */
    data: XOR<UnidadeMedidaUpdateManyMutationInput, UnidadeMedidaUncheckedUpdateManyInput>
    /**
     * Filter which UnidadeMedidas to update
     */
    where?: UnidadeMedidaWhereInput
    /**
     * Limit how many UnidadeMedidas to update.
     */
    limit?: number
  }

  /**
   * UnidadeMedida updateManyAndReturn
   */
  export type UnidadeMedidaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnidadeMedida
     */
    select?: UnidadeMedidaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UnidadeMedida
     */
    omit?: UnidadeMedidaOmit<ExtArgs> | null
    /**
     * The data used to update UnidadeMedidas.
     */
    data: XOR<UnidadeMedidaUpdateManyMutationInput, UnidadeMedidaUncheckedUpdateManyInput>
    /**
     * Filter which UnidadeMedidas to update
     */
    where?: UnidadeMedidaWhereInput
    /**
     * Limit how many UnidadeMedidas to update.
     */
    limit?: number
  }

  /**
   * UnidadeMedida upsert
   */
  export type UnidadeMedidaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnidadeMedida
     */
    select?: UnidadeMedidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnidadeMedida
     */
    omit?: UnidadeMedidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadeMedidaInclude<ExtArgs> | null
    /**
     * The filter to search for the UnidadeMedida to update in case it exists.
     */
    where: UnidadeMedidaWhereUniqueInput
    /**
     * In case the UnidadeMedida found by the `where` argument doesn't exist, create a new UnidadeMedida with this data.
     */
    create: XOR<UnidadeMedidaCreateInput, UnidadeMedidaUncheckedCreateInput>
    /**
     * In case the UnidadeMedida was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnidadeMedidaUpdateInput, UnidadeMedidaUncheckedUpdateInput>
  }

  /**
   * UnidadeMedida delete
   */
  export type UnidadeMedidaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnidadeMedida
     */
    select?: UnidadeMedidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnidadeMedida
     */
    omit?: UnidadeMedidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadeMedidaInclude<ExtArgs> | null
    /**
     * Filter which UnidadeMedida to delete.
     */
    where: UnidadeMedidaWhereUniqueInput
  }

  /**
   * UnidadeMedida deleteMany
   */
  export type UnidadeMedidaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnidadeMedidas to delete
     */
    where?: UnidadeMedidaWhereInput
    /**
     * Limit how many UnidadeMedidas to delete.
     */
    limit?: number
  }

  /**
   * UnidadeMedida.produtos
   */
  export type UnidadeMedida$produtosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoModel
     */
    select?: ProdutoModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoModel
     */
    omit?: ProdutoModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoModelInclude<ExtArgs> | null
    where?: ProdutoModelWhereInput
    orderBy?: ProdutoModelOrderByWithRelationInput | ProdutoModelOrderByWithRelationInput[]
    cursor?: ProdutoModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdutoModelScalarFieldEnum | ProdutoModelScalarFieldEnum[]
  }

  /**
   * UnidadeMedida without action
   */
  export type UnidadeMedidaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnidadeMedida
     */
    select?: UnidadeMedidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnidadeMedida
     */
    omit?: UnidadeMedidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadeMedidaInclude<ExtArgs> | null
  }


  /**
   * Model OperacaoEstoque
   */

  export type AggregateOperacaoEstoque = {
    _count: OperacaoEstoqueCountAggregateOutputType | null
    _avg: OperacaoEstoqueAvgAggregateOutputType | null
    _sum: OperacaoEstoqueSumAggregateOutputType | null
    _min: OperacaoEstoqueMinAggregateOutputType | null
    _max: OperacaoEstoqueMaxAggregateOutputType | null
  }

  export type OperacaoEstoqueAvgAggregateOutputType = {
    id: number | null
  }

  export type OperacaoEstoqueSumAggregateOutputType = {
    id: number | null
  }

  export type OperacaoEstoqueMinAggregateOutputType = {
    id: number | null
    hora: Date | null
    motivo: string | null
    entradasaida: string | null
  }

  export type OperacaoEstoqueMaxAggregateOutputType = {
    id: number | null
    hora: Date | null
    motivo: string | null
    entradasaida: string | null
  }

  export type OperacaoEstoqueCountAggregateOutputType = {
    id: number
    hora: number
    motivo: number
    entradasaida: number
    _all: number
  }


  export type OperacaoEstoqueAvgAggregateInputType = {
    id?: true
  }

  export type OperacaoEstoqueSumAggregateInputType = {
    id?: true
  }

  export type OperacaoEstoqueMinAggregateInputType = {
    id?: true
    hora?: true
    motivo?: true
    entradasaida?: true
  }

  export type OperacaoEstoqueMaxAggregateInputType = {
    id?: true
    hora?: true
    motivo?: true
    entradasaida?: true
  }

  export type OperacaoEstoqueCountAggregateInputType = {
    id?: true
    hora?: true
    motivo?: true
    entradasaida?: true
    _all?: true
  }

  export type OperacaoEstoqueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OperacaoEstoque to aggregate.
     */
    where?: OperacaoEstoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OperacaoEstoques to fetch.
     */
    orderBy?: OperacaoEstoqueOrderByWithRelationInput | OperacaoEstoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OperacaoEstoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OperacaoEstoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OperacaoEstoques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OperacaoEstoques
    **/
    _count?: true | OperacaoEstoqueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OperacaoEstoqueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OperacaoEstoqueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OperacaoEstoqueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OperacaoEstoqueMaxAggregateInputType
  }

  export type GetOperacaoEstoqueAggregateType<T extends OperacaoEstoqueAggregateArgs> = {
        [P in keyof T & keyof AggregateOperacaoEstoque]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOperacaoEstoque[P]>
      : GetScalarType<T[P], AggregateOperacaoEstoque[P]>
  }




  export type OperacaoEstoqueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperacaoEstoqueWhereInput
    orderBy?: OperacaoEstoqueOrderByWithAggregationInput | OperacaoEstoqueOrderByWithAggregationInput[]
    by: OperacaoEstoqueScalarFieldEnum[] | OperacaoEstoqueScalarFieldEnum
    having?: OperacaoEstoqueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OperacaoEstoqueCountAggregateInputType | true
    _avg?: OperacaoEstoqueAvgAggregateInputType
    _sum?: OperacaoEstoqueSumAggregateInputType
    _min?: OperacaoEstoqueMinAggregateInputType
    _max?: OperacaoEstoqueMaxAggregateInputType
  }

  export type OperacaoEstoqueGroupByOutputType = {
    id: number
    hora: Date
    motivo: string
    entradasaida: string
    _count: OperacaoEstoqueCountAggregateOutputType | null
    _avg: OperacaoEstoqueAvgAggregateOutputType | null
    _sum: OperacaoEstoqueSumAggregateOutputType | null
    _min: OperacaoEstoqueMinAggregateOutputType | null
    _max: OperacaoEstoqueMaxAggregateOutputType | null
  }

  type GetOperacaoEstoqueGroupByPayload<T extends OperacaoEstoqueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OperacaoEstoqueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OperacaoEstoqueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OperacaoEstoqueGroupByOutputType[P]>
            : GetScalarType<T[P], OperacaoEstoqueGroupByOutputType[P]>
        }
      >
    >


  export type OperacaoEstoqueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hora?: boolean
    motivo?: boolean
    entradasaida?: boolean
    operacaoestoquedetalhes?: boolean | OperacaoEstoque$operacaoestoquedetalhesArgs<ExtArgs>
    _count?: boolean | OperacaoEstoqueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operacaoEstoque"]>

  export type OperacaoEstoqueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hora?: boolean
    motivo?: boolean
    entradasaida?: boolean
  }, ExtArgs["result"]["operacaoEstoque"]>

  export type OperacaoEstoqueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hora?: boolean
    motivo?: boolean
    entradasaida?: boolean
  }, ExtArgs["result"]["operacaoEstoque"]>

  export type OperacaoEstoqueSelectScalar = {
    id?: boolean
    hora?: boolean
    motivo?: boolean
    entradasaida?: boolean
  }

  export type OperacaoEstoqueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hora" | "motivo" | "entradasaida", ExtArgs["result"]["operacaoEstoque"]>
  export type OperacaoEstoqueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operacaoestoquedetalhes?: boolean | OperacaoEstoque$operacaoestoquedetalhesArgs<ExtArgs>
    _count?: boolean | OperacaoEstoqueCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OperacaoEstoqueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OperacaoEstoqueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OperacaoEstoquePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OperacaoEstoque"
    objects: {
      operacaoestoquedetalhes: Prisma.$OperacaoEstoqueDetalhePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      hora: Date
      motivo: string
      entradasaida: string
    }, ExtArgs["result"]["operacaoEstoque"]>
    composites: {}
  }

  type OperacaoEstoqueGetPayload<S extends boolean | null | undefined | OperacaoEstoqueDefaultArgs> = $Result.GetResult<Prisma.$OperacaoEstoquePayload, S>

  type OperacaoEstoqueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OperacaoEstoqueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OperacaoEstoqueCountAggregateInputType | true
    }

  export interface OperacaoEstoqueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OperacaoEstoque'], meta: { name: 'OperacaoEstoque' } }
    /**
     * Find zero or one OperacaoEstoque that matches the filter.
     * @param {OperacaoEstoqueFindUniqueArgs} args - Arguments to find a OperacaoEstoque
     * @example
     * // Get one OperacaoEstoque
     * const operacaoEstoque = await prisma.operacaoEstoque.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OperacaoEstoqueFindUniqueArgs>(args: SelectSubset<T, OperacaoEstoqueFindUniqueArgs<ExtArgs>>): Prisma__OperacaoEstoqueClient<$Result.GetResult<Prisma.$OperacaoEstoquePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OperacaoEstoque that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OperacaoEstoqueFindUniqueOrThrowArgs} args - Arguments to find a OperacaoEstoque
     * @example
     * // Get one OperacaoEstoque
     * const operacaoEstoque = await prisma.operacaoEstoque.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OperacaoEstoqueFindUniqueOrThrowArgs>(args: SelectSubset<T, OperacaoEstoqueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OperacaoEstoqueClient<$Result.GetResult<Prisma.$OperacaoEstoquePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OperacaoEstoque that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperacaoEstoqueFindFirstArgs} args - Arguments to find a OperacaoEstoque
     * @example
     * // Get one OperacaoEstoque
     * const operacaoEstoque = await prisma.operacaoEstoque.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OperacaoEstoqueFindFirstArgs>(args?: SelectSubset<T, OperacaoEstoqueFindFirstArgs<ExtArgs>>): Prisma__OperacaoEstoqueClient<$Result.GetResult<Prisma.$OperacaoEstoquePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OperacaoEstoque that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperacaoEstoqueFindFirstOrThrowArgs} args - Arguments to find a OperacaoEstoque
     * @example
     * // Get one OperacaoEstoque
     * const operacaoEstoque = await prisma.operacaoEstoque.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OperacaoEstoqueFindFirstOrThrowArgs>(args?: SelectSubset<T, OperacaoEstoqueFindFirstOrThrowArgs<ExtArgs>>): Prisma__OperacaoEstoqueClient<$Result.GetResult<Prisma.$OperacaoEstoquePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OperacaoEstoques that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperacaoEstoqueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OperacaoEstoques
     * const operacaoEstoques = await prisma.operacaoEstoque.findMany()
     * 
     * // Get first 10 OperacaoEstoques
     * const operacaoEstoques = await prisma.operacaoEstoque.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const operacaoEstoqueWithIdOnly = await prisma.operacaoEstoque.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OperacaoEstoqueFindManyArgs>(args?: SelectSubset<T, OperacaoEstoqueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperacaoEstoquePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OperacaoEstoque.
     * @param {OperacaoEstoqueCreateArgs} args - Arguments to create a OperacaoEstoque.
     * @example
     * // Create one OperacaoEstoque
     * const OperacaoEstoque = await prisma.operacaoEstoque.create({
     *   data: {
     *     // ... data to create a OperacaoEstoque
     *   }
     * })
     * 
     */
    create<T extends OperacaoEstoqueCreateArgs>(args: SelectSubset<T, OperacaoEstoqueCreateArgs<ExtArgs>>): Prisma__OperacaoEstoqueClient<$Result.GetResult<Prisma.$OperacaoEstoquePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OperacaoEstoques.
     * @param {OperacaoEstoqueCreateManyArgs} args - Arguments to create many OperacaoEstoques.
     * @example
     * // Create many OperacaoEstoques
     * const operacaoEstoque = await prisma.operacaoEstoque.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OperacaoEstoqueCreateManyArgs>(args?: SelectSubset<T, OperacaoEstoqueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OperacaoEstoques and returns the data saved in the database.
     * @param {OperacaoEstoqueCreateManyAndReturnArgs} args - Arguments to create many OperacaoEstoques.
     * @example
     * // Create many OperacaoEstoques
     * const operacaoEstoque = await prisma.operacaoEstoque.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OperacaoEstoques and only return the `id`
     * const operacaoEstoqueWithIdOnly = await prisma.operacaoEstoque.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OperacaoEstoqueCreateManyAndReturnArgs>(args?: SelectSubset<T, OperacaoEstoqueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperacaoEstoquePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OperacaoEstoque.
     * @param {OperacaoEstoqueDeleteArgs} args - Arguments to delete one OperacaoEstoque.
     * @example
     * // Delete one OperacaoEstoque
     * const OperacaoEstoque = await prisma.operacaoEstoque.delete({
     *   where: {
     *     // ... filter to delete one OperacaoEstoque
     *   }
     * })
     * 
     */
    delete<T extends OperacaoEstoqueDeleteArgs>(args: SelectSubset<T, OperacaoEstoqueDeleteArgs<ExtArgs>>): Prisma__OperacaoEstoqueClient<$Result.GetResult<Prisma.$OperacaoEstoquePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OperacaoEstoque.
     * @param {OperacaoEstoqueUpdateArgs} args - Arguments to update one OperacaoEstoque.
     * @example
     * // Update one OperacaoEstoque
     * const operacaoEstoque = await prisma.operacaoEstoque.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OperacaoEstoqueUpdateArgs>(args: SelectSubset<T, OperacaoEstoqueUpdateArgs<ExtArgs>>): Prisma__OperacaoEstoqueClient<$Result.GetResult<Prisma.$OperacaoEstoquePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OperacaoEstoques.
     * @param {OperacaoEstoqueDeleteManyArgs} args - Arguments to filter OperacaoEstoques to delete.
     * @example
     * // Delete a few OperacaoEstoques
     * const { count } = await prisma.operacaoEstoque.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OperacaoEstoqueDeleteManyArgs>(args?: SelectSubset<T, OperacaoEstoqueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OperacaoEstoques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperacaoEstoqueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OperacaoEstoques
     * const operacaoEstoque = await prisma.operacaoEstoque.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OperacaoEstoqueUpdateManyArgs>(args: SelectSubset<T, OperacaoEstoqueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OperacaoEstoques and returns the data updated in the database.
     * @param {OperacaoEstoqueUpdateManyAndReturnArgs} args - Arguments to update many OperacaoEstoques.
     * @example
     * // Update many OperacaoEstoques
     * const operacaoEstoque = await prisma.operacaoEstoque.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OperacaoEstoques and only return the `id`
     * const operacaoEstoqueWithIdOnly = await prisma.operacaoEstoque.updateManyAndReturn({
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
    updateManyAndReturn<T extends OperacaoEstoqueUpdateManyAndReturnArgs>(args: SelectSubset<T, OperacaoEstoqueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperacaoEstoquePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OperacaoEstoque.
     * @param {OperacaoEstoqueUpsertArgs} args - Arguments to update or create a OperacaoEstoque.
     * @example
     * // Update or create a OperacaoEstoque
     * const operacaoEstoque = await prisma.operacaoEstoque.upsert({
     *   create: {
     *     // ... data to create a OperacaoEstoque
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OperacaoEstoque we want to update
     *   }
     * })
     */
    upsert<T extends OperacaoEstoqueUpsertArgs>(args: SelectSubset<T, OperacaoEstoqueUpsertArgs<ExtArgs>>): Prisma__OperacaoEstoqueClient<$Result.GetResult<Prisma.$OperacaoEstoquePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OperacaoEstoques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperacaoEstoqueCountArgs} args - Arguments to filter OperacaoEstoques to count.
     * @example
     * // Count the number of OperacaoEstoques
     * const count = await prisma.operacaoEstoque.count({
     *   where: {
     *     // ... the filter for the OperacaoEstoques we want to count
     *   }
     * })
    **/
    count<T extends OperacaoEstoqueCountArgs>(
      args?: Subset<T, OperacaoEstoqueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OperacaoEstoqueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OperacaoEstoque.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperacaoEstoqueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OperacaoEstoqueAggregateArgs>(args: Subset<T, OperacaoEstoqueAggregateArgs>): Prisma.PrismaPromise<GetOperacaoEstoqueAggregateType<T>>

    /**
     * Group by OperacaoEstoque.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperacaoEstoqueGroupByArgs} args - Group by arguments.
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
      T extends OperacaoEstoqueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OperacaoEstoqueGroupByArgs['orderBy'] }
        : { orderBy?: OperacaoEstoqueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OperacaoEstoqueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOperacaoEstoqueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OperacaoEstoque model
   */
  readonly fields: OperacaoEstoqueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OperacaoEstoque.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OperacaoEstoqueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    operacaoestoquedetalhes<T extends OperacaoEstoque$operacaoestoquedetalhesArgs<ExtArgs> = {}>(args?: Subset<T, OperacaoEstoque$operacaoestoquedetalhesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperacaoEstoqueDetalhePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the OperacaoEstoque model
   */
  interface OperacaoEstoqueFieldRefs {
    readonly id: FieldRef<"OperacaoEstoque", 'Int'>
    readonly hora: FieldRef<"OperacaoEstoque", 'DateTime'>
    readonly motivo: FieldRef<"OperacaoEstoque", 'String'>
    readonly entradasaida: FieldRef<"OperacaoEstoque", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OperacaoEstoque findUnique
   */
  export type OperacaoEstoqueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperacaoEstoque
     */
    select?: OperacaoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperacaoEstoque
     */
    omit?: OperacaoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperacaoEstoqueInclude<ExtArgs> | null
    /**
     * Filter, which OperacaoEstoque to fetch.
     */
    where: OperacaoEstoqueWhereUniqueInput
  }

  /**
   * OperacaoEstoque findUniqueOrThrow
   */
  export type OperacaoEstoqueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperacaoEstoque
     */
    select?: OperacaoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperacaoEstoque
     */
    omit?: OperacaoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperacaoEstoqueInclude<ExtArgs> | null
    /**
     * Filter, which OperacaoEstoque to fetch.
     */
    where: OperacaoEstoqueWhereUniqueInput
  }

  /**
   * OperacaoEstoque findFirst
   */
  export type OperacaoEstoqueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperacaoEstoque
     */
    select?: OperacaoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperacaoEstoque
     */
    omit?: OperacaoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperacaoEstoqueInclude<ExtArgs> | null
    /**
     * Filter, which OperacaoEstoque to fetch.
     */
    where?: OperacaoEstoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OperacaoEstoques to fetch.
     */
    orderBy?: OperacaoEstoqueOrderByWithRelationInput | OperacaoEstoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OperacaoEstoques.
     */
    cursor?: OperacaoEstoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OperacaoEstoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OperacaoEstoques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OperacaoEstoques.
     */
    distinct?: OperacaoEstoqueScalarFieldEnum | OperacaoEstoqueScalarFieldEnum[]
  }

  /**
   * OperacaoEstoque findFirstOrThrow
   */
  export type OperacaoEstoqueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperacaoEstoque
     */
    select?: OperacaoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperacaoEstoque
     */
    omit?: OperacaoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperacaoEstoqueInclude<ExtArgs> | null
    /**
     * Filter, which OperacaoEstoque to fetch.
     */
    where?: OperacaoEstoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OperacaoEstoques to fetch.
     */
    orderBy?: OperacaoEstoqueOrderByWithRelationInput | OperacaoEstoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OperacaoEstoques.
     */
    cursor?: OperacaoEstoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OperacaoEstoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OperacaoEstoques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OperacaoEstoques.
     */
    distinct?: OperacaoEstoqueScalarFieldEnum | OperacaoEstoqueScalarFieldEnum[]
  }

  /**
   * OperacaoEstoque findMany
   */
  export type OperacaoEstoqueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperacaoEstoque
     */
    select?: OperacaoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperacaoEstoque
     */
    omit?: OperacaoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperacaoEstoqueInclude<ExtArgs> | null
    /**
     * Filter, which OperacaoEstoques to fetch.
     */
    where?: OperacaoEstoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OperacaoEstoques to fetch.
     */
    orderBy?: OperacaoEstoqueOrderByWithRelationInput | OperacaoEstoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OperacaoEstoques.
     */
    cursor?: OperacaoEstoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OperacaoEstoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OperacaoEstoques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OperacaoEstoques.
     */
    distinct?: OperacaoEstoqueScalarFieldEnum | OperacaoEstoqueScalarFieldEnum[]
  }

  /**
   * OperacaoEstoque create
   */
  export type OperacaoEstoqueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperacaoEstoque
     */
    select?: OperacaoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperacaoEstoque
     */
    omit?: OperacaoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperacaoEstoqueInclude<ExtArgs> | null
    /**
     * The data needed to create a OperacaoEstoque.
     */
    data: XOR<OperacaoEstoqueCreateInput, OperacaoEstoqueUncheckedCreateInput>
  }

  /**
   * OperacaoEstoque createMany
   */
  export type OperacaoEstoqueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OperacaoEstoques.
     */
    data: OperacaoEstoqueCreateManyInput | OperacaoEstoqueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OperacaoEstoque createManyAndReturn
   */
  export type OperacaoEstoqueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperacaoEstoque
     */
    select?: OperacaoEstoqueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OperacaoEstoque
     */
    omit?: OperacaoEstoqueOmit<ExtArgs> | null
    /**
     * The data used to create many OperacaoEstoques.
     */
    data: OperacaoEstoqueCreateManyInput | OperacaoEstoqueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OperacaoEstoque update
   */
  export type OperacaoEstoqueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperacaoEstoque
     */
    select?: OperacaoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperacaoEstoque
     */
    omit?: OperacaoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperacaoEstoqueInclude<ExtArgs> | null
    /**
     * The data needed to update a OperacaoEstoque.
     */
    data: XOR<OperacaoEstoqueUpdateInput, OperacaoEstoqueUncheckedUpdateInput>
    /**
     * Choose, which OperacaoEstoque to update.
     */
    where: OperacaoEstoqueWhereUniqueInput
  }

  /**
   * OperacaoEstoque updateMany
   */
  export type OperacaoEstoqueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OperacaoEstoques.
     */
    data: XOR<OperacaoEstoqueUpdateManyMutationInput, OperacaoEstoqueUncheckedUpdateManyInput>
    /**
     * Filter which OperacaoEstoques to update
     */
    where?: OperacaoEstoqueWhereInput
    /**
     * Limit how many OperacaoEstoques to update.
     */
    limit?: number
  }

  /**
   * OperacaoEstoque updateManyAndReturn
   */
  export type OperacaoEstoqueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperacaoEstoque
     */
    select?: OperacaoEstoqueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OperacaoEstoque
     */
    omit?: OperacaoEstoqueOmit<ExtArgs> | null
    /**
     * The data used to update OperacaoEstoques.
     */
    data: XOR<OperacaoEstoqueUpdateManyMutationInput, OperacaoEstoqueUncheckedUpdateManyInput>
    /**
     * Filter which OperacaoEstoques to update
     */
    where?: OperacaoEstoqueWhereInput
    /**
     * Limit how many OperacaoEstoques to update.
     */
    limit?: number
  }

  /**
   * OperacaoEstoque upsert
   */
  export type OperacaoEstoqueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperacaoEstoque
     */
    select?: OperacaoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperacaoEstoque
     */
    omit?: OperacaoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperacaoEstoqueInclude<ExtArgs> | null
    /**
     * The filter to search for the OperacaoEstoque to update in case it exists.
     */
    where: OperacaoEstoqueWhereUniqueInput
    /**
     * In case the OperacaoEstoque found by the `where` argument doesn't exist, create a new OperacaoEstoque with this data.
     */
    create: XOR<OperacaoEstoqueCreateInput, OperacaoEstoqueUncheckedCreateInput>
    /**
     * In case the OperacaoEstoque was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OperacaoEstoqueUpdateInput, OperacaoEstoqueUncheckedUpdateInput>
  }

  /**
   * OperacaoEstoque delete
   */
  export type OperacaoEstoqueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperacaoEstoque
     */
    select?: OperacaoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperacaoEstoque
     */
    omit?: OperacaoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperacaoEstoqueInclude<ExtArgs> | null
    /**
     * Filter which OperacaoEstoque to delete.
     */
    where: OperacaoEstoqueWhereUniqueInput
  }

  /**
   * OperacaoEstoque deleteMany
   */
  export type OperacaoEstoqueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OperacaoEstoques to delete
     */
    where?: OperacaoEstoqueWhereInput
    /**
     * Limit how many OperacaoEstoques to delete.
     */
    limit?: number
  }

  /**
   * OperacaoEstoque.operacaoestoquedetalhes
   */
  export type OperacaoEstoque$operacaoestoquedetalhesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperacaoEstoqueDetalhe
     */
    select?: OperacaoEstoqueDetalheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperacaoEstoqueDetalhe
     */
    omit?: OperacaoEstoqueDetalheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperacaoEstoqueDetalheInclude<ExtArgs> | null
    where?: OperacaoEstoqueDetalheWhereInput
    orderBy?: OperacaoEstoqueDetalheOrderByWithRelationInput | OperacaoEstoqueDetalheOrderByWithRelationInput[]
    cursor?: OperacaoEstoqueDetalheWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OperacaoEstoqueDetalheScalarFieldEnum | OperacaoEstoqueDetalheScalarFieldEnum[]
  }

  /**
   * OperacaoEstoque without action
   */
  export type OperacaoEstoqueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperacaoEstoque
     */
    select?: OperacaoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperacaoEstoque
     */
    omit?: OperacaoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperacaoEstoqueInclude<ExtArgs> | null
  }


  /**
   * Model OperacaoEstoqueDetalhe
   */

  export type AggregateOperacaoEstoqueDetalhe = {
    _count: OperacaoEstoqueDetalheCountAggregateOutputType | null
    _avg: OperacaoEstoqueDetalheAvgAggregateOutputType | null
    _sum: OperacaoEstoqueDetalheSumAggregateOutputType | null
    _min: OperacaoEstoqueDetalheMinAggregateOutputType | null
    _max: OperacaoEstoqueDetalheMaxAggregateOutputType | null
  }

  export type OperacaoEstoqueDetalheAvgAggregateOutputType = {
    id: number | null
    quantidade: number | null
    precoCusto: number | null
    operacaoEstoqueId: number | null
    produtoId: number | null
  }

  export type OperacaoEstoqueDetalheSumAggregateOutputType = {
    id: number | null
    quantidade: number | null
    precoCusto: number | null
    operacaoEstoqueId: number | null
    produtoId: number | null
  }

  export type OperacaoEstoqueDetalheMinAggregateOutputType = {
    id: number | null
    quantidade: number | null
    precoCusto: number | null
    operacaoEstoqueId: number | null
    produtoId: number | null
  }

  export type OperacaoEstoqueDetalheMaxAggregateOutputType = {
    id: number | null
    quantidade: number | null
    precoCusto: number | null
    operacaoEstoqueId: number | null
    produtoId: number | null
  }

  export type OperacaoEstoqueDetalheCountAggregateOutputType = {
    id: number
    quantidade: number
    precoCusto: number
    operacaoEstoqueId: number
    produtoId: number
    _all: number
  }


  export type OperacaoEstoqueDetalheAvgAggregateInputType = {
    id?: true
    quantidade?: true
    precoCusto?: true
    operacaoEstoqueId?: true
    produtoId?: true
  }

  export type OperacaoEstoqueDetalheSumAggregateInputType = {
    id?: true
    quantidade?: true
    precoCusto?: true
    operacaoEstoqueId?: true
    produtoId?: true
  }

  export type OperacaoEstoqueDetalheMinAggregateInputType = {
    id?: true
    quantidade?: true
    precoCusto?: true
    operacaoEstoqueId?: true
    produtoId?: true
  }

  export type OperacaoEstoqueDetalheMaxAggregateInputType = {
    id?: true
    quantidade?: true
    precoCusto?: true
    operacaoEstoqueId?: true
    produtoId?: true
  }

  export type OperacaoEstoqueDetalheCountAggregateInputType = {
    id?: true
    quantidade?: true
    precoCusto?: true
    operacaoEstoqueId?: true
    produtoId?: true
    _all?: true
  }

  export type OperacaoEstoqueDetalheAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OperacaoEstoqueDetalhe to aggregate.
     */
    where?: OperacaoEstoqueDetalheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OperacaoEstoqueDetalhes to fetch.
     */
    orderBy?: OperacaoEstoqueDetalheOrderByWithRelationInput | OperacaoEstoqueDetalheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OperacaoEstoqueDetalheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OperacaoEstoqueDetalhes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OperacaoEstoqueDetalhes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OperacaoEstoqueDetalhes
    **/
    _count?: true | OperacaoEstoqueDetalheCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OperacaoEstoqueDetalheAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OperacaoEstoqueDetalheSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OperacaoEstoqueDetalheMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OperacaoEstoqueDetalheMaxAggregateInputType
  }

  export type GetOperacaoEstoqueDetalheAggregateType<T extends OperacaoEstoqueDetalheAggregateArgs> = {
        [P in keyof T & keyof AggregateOperacaoEstoqueDetalhe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOperacaoEstoqueDetalhe[P]>
      : GetScalarType<T[P], AggregateOperacaoEstoqueDetalhe[P]>
  }




  export type OperacaoEstoqueDetalheGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperacaoEstoqueDetalheWhereInput
    orderBy?: OperacaoEstoqueDetalheOrderByWithAggregationInput | OperacaoEstoqueDetalheOrderByWithAggregationInput[]
    by: OperacaoEstoqueDetalheScalarFieldEnum[] | OperacaoEstoqueDetalheScalarFieldEnum
    having?: OperacaoEstoqueDetalheScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OperacaoEstoqueDetalheCountAggregateInputType | true
    _avg?: OperacaoEstoqueDetalheAvgAggregateInputType
    _sum?: OperacaoEstoqueDetalheSumAggregateInputType
    _min?: OperacaoEstoqueDetalheMinAggregateInputType
    _max?: OperacaoEstoqueDetalheMaxAggregateInputType
  }

  export type OperacaoEstoqueDetalheGroupByOutputType = {
    id: number
    quantidade: number
    precoCusto: number
    operacaoEstoqueId: number
    produtoId: number
    _count: OperacaoEstoqueDetalheCountAggregateOutputType | null
    _avg: OperacaoEstoqueDetalheAvgAggregateOutputType | null
    _sum: OperacaoEstoqueDetalheSumAggregateOutputType | null
    _min: OperacaoEstoqueDetalheMinAggregateOutputType | null
    _max: OperacaoEstoqueDetalheMaxAggregateOutputType | null
  }

  type GetOperacaoEstoqueDetalheGroupByPayload<T extends OperacaoEstoqueDetalheGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OperacaoEstoqueDetalheGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OperacaoEstoqueDetalheGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OperacaoEstoqueDetalheGroupByOutputType[P]>
            : GetScalarType<T[P], OperacaoEstoqueDetalheGroupByOutputType[P]>
        }
      >
    >


  export type OperacaoEstoqueDetalheSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    precoCusto?: boolean
    operacaoEstoqueId?: boolean
    produtoId?: boolean
    operacaoEstoque?: boolean | OperacaoEstoqueDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operacaoEstoqueDetalhe"]>

  export type OperacaoEstoqueDetalheSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    precoCusto?: boolean
    operacaoEstoqueId?: boolean
    produtoId?: boolean
    operacaoEstoque?: boolean | OperacaoEstoqueDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operacaoEstoqueDetalhe"]>

  export type OperacaoEstoqueDetalheSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantidade?: boolean
    precoCusto?: boolean
    operacaoEstoqueId?: boolean
    produtoId?: boolean
    operacaoEstoque?: boolean | OperacaoEstoqueDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operacaoEstoqueDetalhe"]>

  export type OperacaoEstoqueDetalheSelectScalar = {
    id?: boolean
    quantidade?: boolean
    precoCusto?: boolean
    operacaoEstoqueId?: boolean
    produtoId?: boolean
  }

  export type OperacaoEstoqueDetalheOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantidade" | "precoCusto" | "operacaoEstoqueId" | "produtoId", ExtArgs["result"]["operacaoEstoqueDetalhe"]>
  export type OperacaoEstoqueDetalheInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operacaoEstoque?: boolean | OperacaoEstoqueDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoModelDefaultArgs<ExtArgs>
  }
  export type OperacaoEstoqueDetalheIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operacaoEstoque?: boolean | OperacaoEstoqueDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoModelDefaultArgs<ExtArgs>
  }
  export type OperacaoEstoqueDetalheIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    operacaoEstoque?: boolean | OperacaoEstoqueDefaultArgs<ExtArgs>
    produto?: boolean | ProdutoModelDefaultArgs<ExtArgs>
  }

  export type $OperacaoEstoqueDetalhePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OperacaoEstoqueDetalhe"
    objects: {
      operacaoEstoque: Prisma.$OperacaoEstoquePayload<ExtArgs>
      produto: Prisma.$ProdutoModelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quantidade: number
      precoCusto: number
      operacaoEstoqueId: number
      produtoId: number
    }, ExtArgs["result"]["operacaoEstoqueDetalhe"]>
    composites: {}
  }

  type OperacaoEstoqueDetalheGetPayload<S extends boolean | null | undefined | OperacaoEstoqueDetalheDefaultArgs> = $Result.GetResult<Prisma.$OperacaoEstoqueDetalhePayload, S>

  type OperacaoEstoqueDetalheCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OperacaoEstoqueDetalheFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OperacaoEstoqueDetalheCountAggregateInputType | true
    }

  export interface OperacaoEstoqueDetalheDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OperacaoEstoqueDetalhe'], meta: { name: 'OperacaoEstoqueDetalhe' } }
    /**
     * Find zero or one OperacaoEstoqueDetalhe that matches the filter.
     * @param {OperacaoEstoqueDetalheFindUniqueArgs} args - Arguments to find a OperacaoEstoqueDetalhe
     * @example
     * // Get one OperacaoEstoqueDetalhe
     * const operacaoEstoqueDetalhe = await prisma.operacaoEstoqueDetalhe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OperacaoEstoqueDetalheFindUniqueArgs>(args: SelectSubset<T, OperacaoEstoqueDetalheFindUniqueArgs<ExtArgs>>): Prisma__OperacaoEstoqueDetalheClient<$Result.GetResult<Prisma.$OperacaoEstoqueDetalhePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OperacaoEstoqueDetalhe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OperacaoEstoqueDetalheFindUniqueOrThrowArgs} args - Arguments to find a OperacaoEstoqueDetalhe
     * @example
     * // Get one OperacaoEstoqueDetalhe
     * const operacaoEstoqueDetalhe = await prisma.operacaoEstoqueDetalhe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OperacaoEstoqueDetalheFindUniqueOrThrowArgs>(args: SelectSubset<T, OperacaoEstoqueDetalheFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OperacaoEstoqueDetalheClient<$Result.GetResult<Prisma.$OperacaoEstoqueDetalhePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OperacaoEstoqueDetalhe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperacaoEstoqueDetalheFindFirstArgs} args - Arguments to find a OperacaoEstoqueDetalhe
     * @example
     * // Get one OperacaoEstoqueDetalhe
     * const operacaoEstoqueDetalhe = await prisma.operacaoEstoqueDetalhe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OperacaoEstoqueDetalheFindFirstArgs>(args?: SelectSubset<T, OperacaoEstoqueDetalheFindFirstArgs<ExtArgs>>): Prisma__OperacaoEstoqueDetalheClient<$Result.GetResult<Prisma.$OperacaoEstoqueDetalhePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OperacaoEstoqueDetalhe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperacaoEstoqueDetalheFindFirstOrThrowArgs} args - Arguments to find a OperacaoEstoqueDetalhe
     * @example
     * // Get one OperacaoEstoqueDetalhe
     * const operacaoEstoqueDetalhe = await prisma.operacaoEstoqueDetalhe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OperacaoEstoqueDetalheFindFirstOrThrowArgs>(args?: SelectSubset<T, OperacaoEstoqueDetalheFindFirstOrThrowArgs<ExtArgs>>): Prisma__OperacaoEstoqueDetalheClient<$Result.GetResult<Prisma.$OperacaoEstoqueDetalhePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OperacaoEstoqueDetalhes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperacaoEstoqueDetalheFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OperacaoEstoqueDetalhes
     * const operacaoEstoqueDetalhes = await prisma.operacaoEstoqueDetalhe.findMany()
     * 
     * // Get first 10 OperacaoEstoqueDetalhes
     * const operacaoEstoqueDetalhes = await prisma.operacaoEstoqueDetalhe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const operacaoEstoqueDetalheWithIdOnly = await prisma.operacaoEstoqueDetalhe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OperacaoEstoqueDetalheFindManyArgs>(args?: SelectSubset<T, OperacaoEstoqueDetalheFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperacaoEstoqueDetalhePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OperacaoEstoqueDetalhe.
     * @param {OperacaoEstoqueDetalheCreateArgs} args - Arguments to create a OperacaoEstoqueDetalhe.
     * @example
     * // Create one OperacaoEstoqueDetalhe
     * const OperacaoEstoqueDetalhe = await prisma.operacaoEstoqueDetalhe.create({
     *   data: {
     *     // ... data to create a OperacaoEstoqueDetalhe
     *   }
     * })
     * 
     */
    create<T extends OperacaoEstoqueDetalheCreateArgs>(args: SelectSubset<T, OperacaoEstoqueDetalheCreateArgs<ExtArgs>>): Prisma__OperacaoEstoqueDetalheClient<$Result.GetResult<Prisma.$OperacaoEstoqueDetalhePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OperacaoEstoqueDetalhes.
     * @param {OperacaoEstoqueDetalheCreateManyArgs} args - Arguments to create many OperacaoEstoqueDetalhes.
     * @example
     * // Create many OperacaoEstoqueDetalhes
     * const operacaoEstoqueDetalhe = await prisma.operacaoEstoqueDetalhe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OperacaoEstoqueDetalheCreateManyArgs>(args?: SelectSubset<T, OperacaoEstoqueDetalheCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OperacaoEstoqueDetalhes and returns the data saved in the database.
     * @param {OperacaoEstoqueDetalheCreateManyAndReturnArgs} args - Arguments to create many OperacaoEstoqueDetalhes.
     * @example
     * // Create many OperacaoEstoqueDetalhes
     * const operacaoEstoqueDetalhe = await prisma.operacaoEstoqueDetalhe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OperacaoEstoqueDetalhes and only return the `id`
     * const operacaoEstoqueDetalheWithIdOnly = await prisma.operacaoEstoqueDetalhe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OperacaoEstoqueDetalheCreateManyAndReturnArgs>(args?: SelectSubset<T, OperacaoEstoqueDetalheCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperacaoEstoqueDetalhePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OperacaoEstoqueDetalhe.
     * @param {OperacaoEstoqueDetalheDeleteArgs} args - Arguments to delete one OperacaoEstoqueDetalhe.
     * @example
     * // Delete one OperacaoEstoqueDetalhe
     * const OperacaoEstoqueDetalhe = await prisma.operacaoEstoqueDetalhe.delete({
     *   where: {
     *     // ... filter to delete one OperacaoEstoqueDetalhe
     *   }
     * })
     * 
     */
    delete<T extends OperacaoEstoqueDetalheDeleteArgs>(args: SelectSubset<T, OperacaoEstoqueDetalheDeleteArgs<ExtArgs>>): Prisma__OperacaoEstoqueDetalheClient<$Result.GetResult<Prisma.$OperacaoEstoqueDetalhePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OperacaoEstoqueDetalhe.
     * @param {OperacaoEstoqueDetalheUpdateArgs} args - Arguments to update one OperacaoEstoqueDetalhe.
     * @example
     * // Update one OperacaoEstoqueDetalhe
     * const operacaoEstoqueDetalhe = await prisma.operacaoEstoqueDetalhe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OperacaoEstoqueDetalheUpdateArgs>(args: SelectSubset<T, OperacaoEstoqueDetalheUpdateArgs<ExtArgs>>): Prisma__OperacaoEstoqueDetalheClient<$Result.GetResult<Prisma.$OperacaoEstoqueDetalhePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OperacaoEstoqueDetalhes.
     * @param {OperacaoEstoqueDetalheDeleteManyArgs} args - Arguments to filter OperacaoEstoqueDetalhes to delete.
     * @example
     * // Delete a few OperacaoEstoqueDetalhes
     * const { count } = await prisma.operacaoEstoqueDetalhe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OperacaoEstoqueDetalheDeleteManyArgs>(args?: SelectSubset<T, OperacaoEstoqueDetalheDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OperacaoEstoqueDetalhes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperacaoEstoqueDetalheUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OperacaoEstoqueDetalhes
     * const operacaoEstoqueDetalhe = await prisma.operacaoEstoqueDetalhe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OperacaoEstoqueDetalheUpdateManyArgs>(args: SelectSubset<T, OperacaoEstoqueDetalheUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OperacaoEstoqueDetalhes and returns the data updated in the database.
     * @param {OperacaoEstoqueDetalheUpdateManyAndReturnArgs} args - Arguments to update many OperacaoEstoqueDetalhes.
     * @example
     * // Update many OperacaoEstoqueDetalhes
     * const operacaoEstoqueDetalhe = await prisma.operacaoEstoqueDetalhe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OperacaoEstoqueDetalhes and only return the `id`
     * const operacaoEstoqueDetalheWithIdOnly = await prisma.operacaoEstoqueDetalhe.updateManyAndReturn({
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
    updateManyAndReturn<T extends OperacaoEstoqueDetalheUpdateManyAndReturnArgs>(args: SelectSubset<T, OperacaoEstoqueDetalheUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperacaoEstoqueDetalhePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OperacaoEstoqueDetalhe.
     * @param {OperacaoEstoqueDetalheUpsertArgs} args - Arguments to update or create a OperacaoEstoqueDetalhe.
     * @example
     * // Update or create a OperacaoEstoqueDetalhe
     * const operacaoEstoqueDetalhe = await prisma.operacaoEstoqueDetalhe.upsert({
     *   create: {
     *     // ... data to create a OperacaoEstoqueDetalhe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OperacaoEstoqueDetalhe we want to update
     *   }
     * })
     */
    upsert<T extends OperacaoEstoqueDetalheUpsertArgs>(args: SelectSubset<T, OperacaoEstoqueDetalheUpsertArgs<ExtArgs>>): Prisma__OperacaoEstoqueDetalheClient<$Result.GetResult<Prisma.$OperacaoEstoqueDetalhePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OperacaoEstoqueDetalhes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperacaoEstoqueDetalheCountArgs} args - Arguments to filter OperacaoEstoqueDetalhes to count.
     * @example
     * // Count the number of OperacaoEstoqueDetalhes
     * const count = await prisma.operacaoEstoqueDetalhe.count({
     *   where: {
     *     // ... the filter for the OperacaoEstoqueDetalhes we want to count
     *   }
     * })
    **/
    count<T extends OperacaoEstoqueDetalheCountArgs>(
      args?: Subset<T, OperacaoEstoqueDetalheCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OperacaoEstoqueDetalheCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OperacaoEstoqueDetalhe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperacaoEstoqueDetalheAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OperacaoEstoqueDetalheAggregateArgs>(args: Subset<T, OperacaoEstoqueDetalheAggregateArgs>): Prisma.PrismaPromise<GetOperacaoEstoqueDetalheAggregateType<T>>

    /**
     * Group by OperacaoEstoqueDetalhe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperacaoEstoqueDetalheGroupByArgs} args - Group by arguments.
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
      T extends OperacaoEstoqueDetalheGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OperacaoEstoqueDetalheGroupByArgs['orderBy'] }
        : { orderBy?: OperacaoEstoqueDetalheGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OperacaoEstoqueDetalheGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOperacaoEstoqueDetalheGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OperacaoEstoqueDetalhe model
   */
  readonly fields: OperacaoEstoqueDetalheFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OperacaoEstoqueDetalhe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OperacaoEstoqueDetalheClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    operacaoEstoque<T extends OperacaoEstoqueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OperacaoEstoqueDefaultArgs<ExtArgs>>): Prisma__OperacaoEstoqueClient<$Result.GetResult<Prisma.$OperacaoEstoquePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produto<T extends ProdutoModelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdutoModelDefaultArgs<ExtArgs>>): Prisma__ProdutoModelClient<$Result.GetResult<Prisma.$ProdutoModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OperacaoEstoqueDetalhe model
   */
  interface OperacaoEstoqueDetalheFieldRefs {
    readonly id: FieldRef<"OperacaoEstoqueDetalhe", 'Int'>
    readonly quantidade: FieldRef<"OperacaoEstoqueDetalhe", 'Int'>
    readonly precoCusto: FieldRef<"OperacaoEstoqueDetalhe", 'Float'>
    readonly operacaoEstoqueId: FieldRef<"OperacaoEstoqueDetalhe", 'Int'>
    readonly produtoId: FieldRef<"OperacaoEstoqueDetalhe", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * OperacaoEstoqueDetalhe findUnique
   */
  export type OperacaoEstoqueDetalheFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperacaoEstoqueDetalhe
     */
    select?: OperacaoEstoqueDetalheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperacaoEstoqueDetalhe
     */
    omit?: OperacaoEstoqueDetalheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperacaoEstoqueDetalheInclude<ExtArgs> | null
    /**
     * Filter, which OperacaoEstoqueDetalhe to fetch.
     */
    where: OperacaoEstoqueDetalheWhereUniqueInput
  }

  /**
   * OperacaoEstoqueDetalhe findUniqueOrThrow
   */
  export type OperacaoEstoqueDetalheFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperacaoEstoqueDetalhe
     */
    select?: OperacaoEstoqueDetalheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperacaoEstoqueDetalhe
     */
    omit?: OperacaoEstoqueDetalheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperacaoEstoqueDetalheInclude<ExtArgs> | null
    /**
     * Filter, which OperacaoEstoqueDetalhe to fetch.
     */
    where: OperacaoEstoqueDetalheWhereUniqueInput
  }

  /**
   * OperacaoEstoqueDetalhe findFirst
   */
  export type OperacaoEstoqueDetalheFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperacaoEstoqueDetalhe
     */
    select?: OperacaoEstoqueDetalheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperacaoEstoqueDetalhe
     */
    omit?: OperacaoEstoqueDetalheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperacaoEstoqueDetalheInclude<ExtArgs> | null
    /**
     * Filter, which OperacaoEstoqueDetalhe to fetch.
     */
    where?: OperacaoEstoqueDetalheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OperacaoEstoqueDetalhes to fetch.
     */
    orderBy?: OperacaoEstoqueDetalheOrderByWithRelationInput | OperacaoEstoqueDetalheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OperacaoEstoqueDetalhes.
     */
    cursor?: OperacaoEstoqueDetalheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OperacaoEstoqueDetalhes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OperacaoEstoqueDetalhes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OperacaoEstoqueDetalhes.
     */
    distinct?: OperacaoEstoqueDetalheScalarFieldEnum | OperacaoEstoqueDetalheScalarFieldEnum[]
  }

  /**
   * OperacaoEstoqueDetalhe findFirstOrThrow
   */
  export type OperacaoEstoqueDetalheFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperacaoEstoqueDetalhe
     */
    select?: OperacaoEstoqueDetalheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperacaoEstoqueDetalhe
     */
    omit?: OperacaoEstoqueDetalheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperacaoEstoqueDetalheInclude<ExtArgs> | null
    /**
     * Filter, which OperacaoEstoqueDetalhe to fetch.
     */
    where?: OperacaoEstoqueDetalheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OperacaoEstoqueDetalhes to fetch.
     */
    orderBy?: OperacaoEstoqueDetalheOrderByWithRelationInput | OperacaoEstoqueDetalheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OperacaoEstoqueDetalhes.
     */
    cursor?: OperacaoEstoqueDetalheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OperacaoEstoqueDetalhes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OperacaoEstoqueDetalhes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OperacaoEstoqueDetalhes.
     */
    distinct?: OperacaoEstoqueDetalheScalarFieldEnum | OperacaoEstoqueDetalheScalarFieldEnum[]
  }

  /**
   * OperacaoEstoqueDetalhe findMany
   */
  export type OperacaoEstoqueDetalheFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperacaoEstoqueDetalhe
     */
    select?: OperacaoEstoqueDetalheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperacaoEstoqueDetalhe
     */
    omit?: OperacaoEstoqueDetalheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperacaoEstoqueDetalheInclude<ExtArgs> | null
    /**
     * Filter, which OperacaoEstoqueDetalhes to fetch.
     */
    where?: OperacaoEstoqueDetalheWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OperacaoEstoqueDetalhes to fetch.
     */
    orderBy?: OperacaoEstoqueDetalheOrderByWithRelationInput | OperacaoEstoqueDetalheOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OperacaoEstoqueDetalhes.
     */
    cursor?: OperacaoEstoqueDetalheWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OperacaoEstoqueDetalhes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OperacaoEstoqueDetalhes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OperacaoEstoqueDetalhes.
     */
    distinct?: OperacaoEstoqueDetalheScalarFieldEnum | OperacaoEstoqueDetalheScalarFieldEnum[]
  }

  /**
   * OperacaoEstoqueDetalhe create
   */
  export type OperacaoEstoqueDetalheCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperacaoEstoqueDetalhe
     */
    select?: OperacaoEstoqueDetalheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperacaoEstoqueDetalhe
     */
    omit?: OperacaoEstoqueDetalheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperacaoEstoqueDetalheInclude<ExtArgs> | null
    /**
     * The data needed to create a OperacaoEstoqueDetalhe.
     */
    data: XOR<OperacaoEstoqueDetalheCreateInput, OperacaoEstoqueDetalheUncheckedCreateInput>
  }

  /**
   * OperacaoEstoqueDetalhe createMany
   */
  export type OperacaoEstoqueDetalheCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OperacaoEstoqueDetalhes.
     */
    data: OperacaoEstoqueDetalheCreateManyInput | OperacaoEstoqueDetalheCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OperacaoEstoqueDetalhe createManyAndReturn
   */
  export type OperacaoEstoqueDetalheCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperacaoEstoqueDetalhe
     */
    select?: OperacaoEstoqueDetalheSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OperacaoEstoqueDetalhe
     */
    omit?: OperacaoEstoqueDetalheOmit<ExtArgs> | null
    /**
     * The data used to create many OperacaoEstoqueDetalhes.
     */
    data: OperacaoEstoqueDetalheCreateManyInput | OperacaoEstoqueDetalheCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperacaoEstoqueDetalheIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OperacaoEstoqueDetalhe update
   */
  export type OperacaoEstoqueDetalheUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperacaoEstoqueDetalhe
     */
    select?: OperacaoEstoqueDetalheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperacaoEstoqueDetalhe
     */
    omit?: OperacaoEstoqueDetalheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperacaoEstoqueDetalheInclude<ExtArgs> | null
    /**
     * The data needed to update a OperacaoEstoqueDetalhe.
     */
    data: XOR<OperacaoEstoqueDetalheUpdateInput, OperacaoEstoqueDetalheUncheckedUpdateInput>
    /**
     * Choose, which OperacaoEstoqueDetalhe to update.
     */
    where: OperacaoEstoqueDetalheWhereUniqueInput
  }

  /**
   * OperacaoEstoqueDetalhe updateMany
   */
  export type OperacaoEstoqueDetalheUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OperacaoEstoqueDetalhes.
     */
    data: XOR<OperacaoEstoqueDetalheUpdateManyMutationInput, OperacaoEstoqueDetalheUncheckedUpdateManyInput>
    /**
     * Filter which OperacaoEstoqueDetalhes to update
     */
    where?: OperacaoEstoqueDetalheWhereInput
    /**
     * Limit how many OperacaoEstoqueDetalhes to update.
     */
    limit?: number
  }

  /**
   * OperacaoEstoqueDetalhe updateManyAndReturn
   */
  export type OperacaoEstoqueDetalheUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperacaoEstoqueDetalhe
     */
    select?: OperacaoEstoqueDetalheSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OperacaoEstoqueDetalhe
     */
    omit?: OperacaoEstoqueDetalheOmit<ExtArgs> | null
    /**
     * The data used to update OperacaoEstoqueDetalhes.
     */
    data: XOR<OperacaoEstoqueDetalheUpdateManyMutationInput, OperacaoEstoqueDetalheUncheckedUpdateManyInput>
    /**
     * Filter which OperacaoEstoqueDetalhes to update
     */
    where?: OperacaoEstoqueDetalheWhereInput
    /**
     * Limit how many OperacaoEstoqueDetalhes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperacaoEstoqueDetalheIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OperacaoEstoqueDetalhe upsert
   */
  export type OperacaoEstoqueDetalheUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperacaoEstoqueDetalhe
     */
    select?: OperacaoEstoqueDetalheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperacaoEstoqueDetalhe
     */
    omit?: OperacaoEstoqueDetalheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperacaoEstoqueDetalheInclude<ExtArgs> | null
    /**
     * The filter to search for the OperacaoEstoqueDetalhe to update in case it exists.
     */
    where: OperacaoEstoqueDetalheWhereUniqueInput
    /**
     * In case the OperacaoEstoqueDetalhe found by the `where` argument doesn't exist, create a new OperacaoEstoqueDetalhe with this data.
     */
    create: XOR<OperacaoEstoqueDetalheCreateInput, OperacaoEstoqueDetalheUncheckedCreateInput>
    /**
     * In case the OperacaoEstoqueDetalhe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OperacaoEstoqueDetalheUpdateInput, OperacaoEstoqueDetalheUncheckedUpdateInput>
  }

  /**
   * OperacaoEstoqueDetalhe delete
   */
  export type OperacaoEstoqueDetalheDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperacaoEstoqueDetalhe
     */
    select?: OperacaoEstoqueDetalheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperacaoEstoqueDetalhe
     */
    omit?: OperacaoEstoqueDetalheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperacaoEstoqueDetalheInclude<ExtArgs> | null
    /**
     * Filter which OperacaoEstoqueDetalhe to delete.
     */
    where: OperacaoEstoqueDetalheWhereUniqueInput
  }

  /**
   * OperacaoEstoqueDetalhe deleteMany
   */
  export type OperacaoEstoqueDetalheDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OperacaoEstoqueDetalhes to delete
     */
    where?: OperacaoEstoqueDetalheWhereInput
    /**
     * Limit how many OperacaoEstoqueDetalhes to delete.
     */
    limit?: number
  }

  /**
   * OperacaoEstoqueDetalhe without action
   */
  export type OperacaoEstoqueDetalheDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperacaoEstoqueDetalhe
     */
    select?: OperacaoEstoqueDetalheSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperacaoEstoqueDetalhe
     */
    omit?: OperacaoEstoqueDetalheOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperacaoEstoqueDetalheInclude<ExtArgs> | null
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


  export const ProdutoModelScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    habilitado: 'habilitado',
    nomearquivofoto: 'nomearquivofoto',
    descricao: 'descricao',
    quantidadeAtual: 'quantidadeAtual',
    categoriaId: 'categoriaId',
    unidadeMedidaId: 'unidadeMedidaId'
  };

  export type ProdutoModelScalarFieldEnum = (typeof ProdutoModelScalarFieldEnum)[keyof typeof ProdutoModelScalarFieldEnum]


  export const CategoriaProdutoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao'
  };

  export type CategoriaProdutoScalarFieldEnum = (typeof CategoriaProdutoScalarFieldEnum)[keyof typeof CategoriaProdutoScalarFieldEnum]


  export const UnidadeMedidaScalarFieldEnum: {
    id: 'id',
    sigla: 'sigla',
    descricao: 'descricao',
    fracionavel: 'fracionavel'
  };

  export type UnidadeMedidaScalarFieldEnum = (typeof UnidadeMedidaScalarFieldEnum)[keyof typeof UnidadeMedidaScalarFieldEnum]


  export const OperacaoEstoqueScalarFieldEnum: {
    id: 'id',
    hora: 'hora',
    motivo: 'motivo',
    entradasaida: 'entradasaida'
  };

  export type OperacaoEstoqueScalarFieldEnum = (typeof OperacaoEstoqueScalarFieldEnum)[keyof typeof OperacaoEstoqueScalarFieldEnum]


  export const OperacaoEstoqueDetalheScalarFieldEnum: {
    id: 'id',
    quantidade: 'quantidade',
    precoCusto: 'precoCusto',
    operacaoEstoqueId: 'operacaoEstoqueId',
    produtoId: 'produtoId'
  };

  export type OperacaoEstoqueDetalheScalarFieldEnum = (typeof OperacaoEstoqueDetalheScalarFieldEnum)[keyof typeof OperacaoEstoqueDetalheScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProdutoModelWhereInput = {
    AND?: ProdutoModelWhereInput | ProdutoModelWhereInput[]
    OR?: ProdutoModelWhereInput[]
    NOT?: ProdutoModelWhereInput | ProdutoModelWhereInput[]
    id?: IntFilter<"ProdutoModel"> | number
    nome?: StringFilter<"ProdutoModel"> | string
    habilitado?: BoolFilter<"ProdutoModel"> | boolean
    nomearquivofoto?: StringFilter<"ProdutoModel"> | string
    descricao?: StringFilter<"ProdutoModel"> | string
    quantidadeAtual?: IntFilter<"ProdutoModel"> | number
    categoriaId?: IntFilter<"ProdutoModel"> | number
    unidadeMedidaId?: IntFilter<"ProdutoModel"> | number
    categoria?: XOR<CategoriaProdutoScalarRelationFilter, CategoriaProdutoWhereInput>
    unidadeMedida?: XOR<UnidadeMedidaScalarRelationFilter, UnidadeMedidaWhereInput>
    operacaoEstoqueDetalhe?: XOR<OperacaoEstoqueDetalheNullableScalarRelationFilter, OperacaoEstoqueDetalheWhereInput> | null
  }

  export type ProdutoModelOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    habilitado?: SortOrder
    nomearquivofoto?: SortOrder
    descricao?: SortOrder
    quantidadeAtual?: SortOrder
    categoriaId?: SortOrder
    unidadeMedidaId?: SortOrder
    categoria?: CategoriaProdutoOrderByWithRelationInput
    unidadeMedida?: UnidadeMedidaOrderByWithRelationInput
    operacaoEstoqueDetalhe?: OperacaoEstoqueDetalheOrderByWithRelationInput
  }

  export type ProdutoModelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProdutoModelWhereInput | ProdutoModelWhereInput[]
    OR?: ProdutoModelWhereInput[]
    NOT?: ProdutoModelWhereInput | ProdutoModelWhereInput[]
    nome?: StringFilter<"ProdutoModel"> | string
    habilitado?: BoolFilter<"ProdutoModel"> | boolean
    nomearquivofoto?: StringFilter<"ProdutoModel"> | string
    descricao?: StringFilter<"ProdutoModel"> | string
    quantidadeAtual?: IntFilter<"ProdutoModel"> | number
    categoriaId?: IntFilter<"ProdutoModel"> | number
    unidadeMedidaId?: IntFilter<"ProdutoModel"> | number
    categoria?: XOR<CategoriaProdutoScalarRelationFilter, CategoriaProdutoWhereInput>
    unidadeMedida?: XOR<UnidadeMedidaScalarRelationFilter, UnidadeMedidaWhereInput>
    operacaoEstoqueDetalhe?: XOR<OperacaoEstoqueDetalheNullableScalarRelationFilter, OperacaoEstoqueDetalheWhereInput> | null
  }, "id">

  export type ProdutoModelOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    habilitado?: SortOrder
    nomearquivofoto?: SortOrder
    descricao?: SortOrder
    quantidadeAtual?: SortOrder
    categoriaId?: SortOrder
    unidadeMedidaId?: SortOrder
    _count?: ProdutoModelCountOrderByAggregateInput
    _avg?: ProdutoModelAvgOrderByAggregateInput
    _max?: ProdutoModelMaxOrderByAggregateInput
    _min?: ProdutoModelMinOrderByAggregateInput
    _sum?: ProdutoModelSumOrderByAggregateInput
  }

  export type ProdutoModelScalarWhereWithAggregatesInput = {
    AND?: ProdutoModelScalarWhereWithAggregatesInput | ProdutoModelScalarWhereWithAggregatesInput[]
    OR?: ProdutoModelScalarWhereWithAggregatesInput[]
    NOT?: ProdutoModelScalarWhereWithAggregatesInput | ProdutoModelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProdutoModel"> | number
    nome?: StringWithAggregatesFilter<"ProdutoModel"> | string
    habilitado?: BoolWithAggregatesFilter<"ProdutoModel"> | boolean
    nomearquivofoto?: StringWithAggregatesFilter<"ProdutoModel"> | string
    descricao?: StringWithAggregatesFilter<"ProdutoModel"> | string
    quantidadeAtual?: IntWithAggregatesFilter<"ProdutoModel"> | number
    categoriaId?: IntWithAggregatesFilter<"ProdutoModel"> | number
    unidadeMedidaId?: IntWithAggregatesFilter<"ProdutoModel"> | number
  }

  export type CategoriaProdutoWhereInput = {
    AND?: CategoriaProdutoWhereInput | CategoriaProdutoWhereInput[]
    OR?: CategoriaProdutoWhereInput[]
    NOT?: CategoriaProdutoWhereInput | CategoriaProdutoWhereInput[]
    id?: IntFilter<"CategoriaProduto"> | number
    nome?: StringFilter<"CategoriaProduto"> | string
    descricao?: StringFilter<"CategoriaProduto"> | string
    produtos?: ProdutoModelListRelationFilter
  }

  export type CategoriaProdutoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    produtos?: ProdutoModelOrderByRelationAggregateInput
  }

  export type CategoriaProdutoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoriaProdutoWhereInput | CategoriaProdutoWhereInput[]
    OR?: CategoriaProdutoWhereInput[]
    NOT?: CategoriaProdutoWhereInput | CategoriaProdutoWhereInput[]
    nome?: StringFilter<"CategoriaProduto"> | string
    descricao?: StringFilter<"CategoriaProduto"> | string
    produtos?: ProdutoModelListRelationFilter
  }, "id">

  export type CategoriaProdutoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    _count?: CategoriaProdutoCountOrderByAggregateInput
    _avg?: CategoriaProdutoAvgOrderByAggregateInput
    _max?: CategoriaProdutoMaxOrderByAggregateInput
    _min?: CategoriaProdutoMinOrderByAggregateInput
    _sum?: CategoriaProdutoSumOrderByAggregateInput
  }

  export type CategoriaProdutoScalarWhereWithAggregatesInput = {
    AND?: CategoriaProdutoScalarWhereWithAggregatesInput | CategoriaProdutoScalarWhereWithAggregatesInput[]
    OR?: CategoriaProdutoScalarWhereWithAggregatesInput[]
    NOT?: CategoriaProdutoScalarWhereWithAggregatesInput | CategoriaProdutoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CategoriaProduto"> | number
    nome?: StringWithAggregatesFilter<"CategoriaProduto"> | string
    descricao?: StringWithAggregatesFilter<"CategoriaProduto"> | string
  }

  export type UnidadeMedidaWhereInput = {
    AND?: UnidadeMedidaWhereInput | UnidadeMedidaWhereInput[]
    OR?: UnidadeMedidaWhereInput[]
    NOT?: UnidadeMedidaWhereInput | UnidadeMedidaWhereInput[]
    id?: IntFilter<"UnidadeMedida"> | number
    sigla?: StringFilter<"UnidadeMedida"> | string
    descricao?: StringFilter<"UnidadeMedida"> | string
    fracionavel?: BoolFilter<"UnidadeMedida"> | boolean
    produtos?: ProdutoModelListRelationFilter
  }

  export type UnidadeMedidaOrderByWithRelationInput = {
    id?: SortOrder
    sigla?: SortOrder
    descricao?: SortOrder
    fracionavel?: SortOrder
    produtos?: ProdutoModelOrderByRelationAggregateInput
  }

  export type UnidadeMedidaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UnidadeMedidaWhereInput | UnidadeMedidaWhereInput[]
    OR?: UnidadeMedidaWhereInput[]
    NOT?: UnidadeMedidaWhereInput | UnidadeMedidaWhereInput[]
    sigla?: StringFilter<"UnidadeMedida"> | string
    descricao?: StringFilter<"UnidadeMedida"> | string
    fracionavel?: BoolFilter<"UnidadeMedida"> | boolean
    produtos?: ProdutoModelListRelationFilter
  }, "id">

  export type UnidadeMedidaOrderByWithAggregationInput = {
    id?: SortOrder
    sigla?: SortOrder
    descricao?: SortOrder
    fracionavel?: SortOrder
    _count?: UnidadeMedidaCountOrderByAggregateInput
    _avg?: UnidadeMedidaAvgOrderByAggregateInput
    _max?: UnidadeMedidaMaxOrderByAggregateInput
    _min?: UnidadeMedidaMinOrderByAggregateInput
    _sum?: UnidadeMedidaSumOrderByAggregateInput
  }

  export type UnidadeMedidaScalarWhereWithAggregatesInput = {
    AND?: UnidadeMedidaScalarWhereWithAggregatesInput | UnidadeMedidaScalarWhereWithAggregatesInput[]
    OR?: UnidadeMedidaScalarWhereWithAggregatesInput[]
    NOT?: UnidadeMedidaScalarWhereWithAggregatesInput | UnidadeMedidaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UnidadeMedida"> | number
    sigla?: StringWithAggregatesFilter<"UnidadeMedida"> | string
    descricao?: StringWithAggregatesFilter<"UnidadeMedida"> | string
    fracionavel?: BoolWithAggregatesFilter<"UnidadeMedida"> | boolean
  }

  export type OperacaoEstoqueWhereInput = {
    AND?: OperacaoEstoqueWhereInput | OperacaoEstoqueWhereInput[]
    OR?: OperacaoEstoqueWhereInput[]
    NOT?: OperacaoEstoqueWhereInput | OperacaoEstoqueWhereInput[]
    id?: IntFilter<"OperacaoEstoque"> | number
    hora?: DateTimeFilter<"OperacaoEstoque"> | Date | string
    motivo?: StringFilter<"OperacaoEstoque"> | string
    entradasaida?: StringFilter<"OperacaoEstoque"> | string
    operacaoestoquedetalhes?: OperacaoEstoqueDetalheListRelationFilter
  }

  export type OperacaoEstoqueOrderByWithRelationInput = {
    id?: SortOrder
    hora?: SortOrder
    motivo?: SortOrder
    entradasaida?: SortOrder
    operacaoestoquedetalhes?: OperacaoEstoqueDetalheOrderByRelationAggregateInput
  }

  export type OperacaoEstoqueWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OperacaoEstoqueWhereInput | OperacaoEstoqueWhereInput[]
    OR?: OperacaoEstoqueWhereInput[]
    NOT?: OperacaoEstoqueWhereInput | OperacaoEstoqueWhereInput[]
    hora?: DateTimeFilter<"OperacaoEstoque"> | Date | string
    motivo?: StringFilter<"OperacaoEstoque"> | string
    entradasaida?: StringFilter<"OperacaoEstoque"> | string
    operacaoestoquedetalhes?: OperacaoEstoqueDetalheListRelationFilter
  }, "id">

  export type OperacaoEstoqueOrderByWithAggregationInput = {
    id?: SortOrder
    hora?: SortOrder
    motivo?: SortOrder
    entradasaida?: SortOrder
    _count?: OperacaoEstoqueCountOrderByAggregateInput
    _avg?: OperacaoEstoqueAvgOrderByAggregateInput
    _max?: OperacaoEstoqueMaxOrderByAggregateInput
    _min?: OperacaoEstoqueMinOrderByAggregateInput
    _sum?: OperacaoEstoqueSumOrderByAggregateInput
  }

  export type OperacaoEstoqueScalarWhereWithAggregatesInput = {
    AND?: OperacaoEstoqueScalarWhereWithAggregatesInput | OperacaoEstoqueScalarWhereWithAggregatesInput[]
    OR?: OperacaoEstoqueScalarWhereWithAggregatesInput[]
    NOT?: OperacaoEstoqueScalarWhereWithAggregatesInput | OperacaoEstoqueScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OperacaoEstoque"> | number
    hora?: DateTimeWithAggregatesFilter<"OperacaoEstoque"> | Date | string
    motivo?: StringWithAggregatesFilter<"OperacaoEstoque"> | string
    entradasaida?: StringWithAggregatesFilter<"OperacaoEstoque"> | string
  }

  export type OperacaoEstoqueDetalheWhereInput = {
    AND?: OperacaoEstoqueDetalheWhereInput | OperacaoEstoqueDetalheWhereInput[]
    OR?: OperacaoEstoqueDetalheWhereInput[]
    NOT?: OperacaoEstoqueDetalheWhereInput | OperacaoEstoqueDetalheWhereInput[]
    id?: IntFilter<"OperacaoEstoqueDetalhe"> | number
    quantidade?: IntFilter<"OperacaoEstoqueDetalhe"> | number
    precoCusto?: FloatFilter<"OperacaoEstoqueDetalhe"> | number
    operacaoEstoqueId?: IntFilter<"OperacaoEstoqueDetalhe"> | number
    produtoId?: IntFilter<"OperacaoEstoqueDetalhe"> | number
    operacaoEstoque?: XOR<OperacaoEstoqueScalarRelationFilter, OperacaoEstoqueWhereInput>
    produto?: XOR<ProdutoModelScalarRelationFilter, ProdutoModelWhereInput>
  }

  export type OperacaoEstoqueDetalheOrderByWithRelationInput = {
    id?: SortOrder
    quantidade?: SortOrder
    precoCusto?: SortOrder
    operacaoEstoqueId?: SortOrder
    produtoId?: SortOrder
    operacaoEstoque?: OperacaoEstoqueOrderByWithRelationInput
    produto?: ProdutoModelOrderByWithRelationInput
  }

  export type OperacaoEstoqueDetalheWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    produtoId?: number
    AND?: OperacaoEstoqueDetalheWhereInput | OperacaoEstoqueDetalheWhereInput[]
    OR?: OperacaoEstoqueDetalheWhereInput[]
    NOT?: OperacaoEstoqueDetalheWhereInput | OperacaoEstoqueDetalheWhereInput[]
    quantidade?: IntFilter<"OperacaoEstoqueDetalhe"> | number
    precoCusto?: FloatFilter<"OperacaoEstoqueDetalhe"> | number
    operacaoEstoqueId?: IntFilter<"OperacaoEstoqueDetalhe"> | number
    operacaoEstoque?: XOR<OperacaoEstoqueScalarRelationFilter, OperacaoEstoqueWhereInput>
    produto?: XOR<ProdutoModelScalarRelationFilter, ProdutoModelWhereInput>
  }, "id" | "produtoId">

  export type OperacaoEstoqueDetalheOrderByWithAggregationInput = {
    id?: SortOrder
    quantidade?: SortOrder
    precoCusto?: SortOrder
    operacaoEstoqueId?: SortOrder
    produtoId?: SortOrder
    _count?: OperacaoEstoqueDetalheCountOrderByAggregateInput
    _avg?: OperacaoEstoqueDetalheAvgOrderByAggregateInput
    _max?: OperacaoEstoqueDetalheMaxOrderByAggregateInput
    _min?: OperacaoEstoqueDetalheMinOrderByAggregateInput
    _sum?: OperacaoEstoqueDetalheSumOrderByAggregateInput
  }

  export type OperacaoEstoqueDetalheScalarWhereWithAggregatesInput = {
    AND?: OperacaoEstoqueDetalheScalarWhereWithAggregatesInput | OperacaoEstoqueDetalheScalarWhereWithAggregatesInput[]
    OR?: OperacaoEstoqueDetalheScalarWhereWithAggregatesInput[]
    NOT?: OperacaoEstoqueDetalheScalarWhereWithAggregatesInput | OperacaoEstoqueDetalheScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OperacaoEstoqueDetalhe"> | number
    quantidade?: IntWithAggregatesFilter<"OperacaoEstoqueDetalhe"> | number
    precoCusto?: FloatWithAggregatesFilter<"OperacaoEstoqueDetalhe"> | number
    operacaoEstoqueId?: IntWithAggregatesFilter<"OperacaoEstoqueDetalhe"> | number
    produtoId?: IntWithAggregatesFilter<"OperacaoEstoqueDetalhe"> | number
  }

  export type ProdutoModelCreateInput = {
    nome: string
    habilitado?: boolean
    nomearquivofoto: string
    descricao: string
    quantidadeAtual?: number
    categoria: CategoriaProdutoCreateNestedOneWithoutProdutosInput
    unidadeMedida: UnidadeMedidaCreateNestedOneWithoutProdutosInput
    operacaoEstoqueDetalhe?: OperacaoEstoqueDetalheCreateNestedOneWithoutProdutoInput
  }

  export type ProdutoModelUncheckedCreateInput = {
    id?: number
    nome: string
    habilitado?: boolean
    nomearquivofoto: string
    descricao: string
    quantidadeAtual?: number
    categoriaId: number
    unidadeMedidaId: number
    operacaoEstoqueDetalhe?: OperacaoEstoqueDetalheUncheckedCreateNestedOneWithoutProdutoInput
  }

  export type ProdutoModelUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    habilitado?: BoolFieldUpdateOperationsInput | boolean
    nomearquivofoto?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    quantidadeAtual?: IntFieldUpdateOperationsInput | number
    categoria?: CategoriaProdutoUpdateOneRequiredWithoutProdutosNestedInput
    unidadeMedida?: UnidadeMedidaUpdateOneRequiredWithoutProdutosNestedInput
    operacaoEstoqueDetalhe?: OperacaoEstoqueDetalheUpdateOneWithoutProdutoNestedInput
  }

  export type ProdutoModelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    habilitado?: BoolFieldUpdateOperationsInput | boolean
    nomearquivofoto?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    quantidadeAtual?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    unidadeMedidaId?: IntFieldUpdateOperationsInput | number
    operacaoEstoqueDetalhe?: OperacaoEstoqueDetalheUncheckedUpdateOneWithoutProdutoNestedInput
  }

  export type ProdutoModelCreateManyInput = {
    id?: number
    nome: string
    habilitado?: boolean
    nomearquivofoto: string
    descricao: string
    quantidadeAtual?: number
    categoriaId: number
    unidadeMedidaId: number
  }

  export type ProdutoModelUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    habilitado?: BoolFieldUpdateOperationsInput | boolean
    nomearquivofoto?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    quantidadeAtual?: IntFieldUpdateOperationsInput | number
  }

  export type ProdutoModelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    habilitado?: BoolFieldUpdateOperationsInput | boolean
    nomearquivofoto?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    quantidadeAtual?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    unidadeMedidaId?: IntFieldUpdateOperationsInput | number
  }

  export type CategoriaProdutoCreateInput = {
    nome: string
    descricao: string
    produtos?: ProdutoModelCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaProdutoUncheckedCreateInput = {
    id?: number
    nome: string
    descricao: string
    produtos?: ProdutoModelUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaProdutoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    produtos?: ProdutoModelUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaProdutoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    produtos?: ProdutoModelUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaProdutoCreateManyInput = {
    id?: number
    nome: string
    descricao: string
  }

  export type CategoriaProdutoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaProdutoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type UnidadeMedidaCreateInput = {
    sigla: string
    descricao: string
    fracionavel?: boolean
    produtos?: ProdutoModelCreateNestedManyWithoutUnidadeMedidaInput
  }

  export type UnidadeMedidaUncheckedCreateInput = {
    id?: number
    sigla: string
    descricao: string
    fracionavel?: boolean
    produtos?: ProdutoModelUncheckedCreateNestedManyWithoutUnidadeMedidaInput
  }

  export type UnidadeMedidaUpdateInput = {
    sigla?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    fracionavel?: BoolFieldUpdateOperationsInput | boolean
    produtos?: ProdutoModelUpdateManyWithoutUnidadeMedidaNestedInput
  }

  export type UnidadeMedidaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sigla?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    fracionavel?: BoolFieldUpdateOperationsInput | boolean
    produtos?: ProdutoModelUncheckedUpdateManyWithoutUnidadeMedidaNestedInput
  }

  export type UnidadeMedidaCreateManyInput = {
    id?: number
    sigla: string
    descricao: string
    fracionavel?: boolean
  }

  export type UnidadeMedidaUpdateManyMutationInput = {
    sigla?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    fracionavel?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UnidadeMedidaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sigla?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    fracionavel?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OperacaoEstoqueCreateInput = {
    hora?: Date | string
    motivo: string
    entradasaida: string
    operacaoestoquedetalhes?: OperacaoEstoqueDetalheCreateNestedManyWithoutOperacaoEstoqueInput
  }

  export type OperacaoEstoqueUncheckedCreateInput = {
    id?: number
    hora?: Date | string
    motivo: string
    entradasaida: string
    operacaoestoquedetalhes?: OperacaoEstoqueDetalheUncheckedCreateNestedManyWithoutOperacaoEstoqueInput
  }

  export type OperacaoEstoqueUpdateInput = {
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    entradasaida?: StringFieldUpdateOperationsInput | string
    operacaoestoquedetalhes?: OperacaoEstoqueDetalheUpdateManyWithoutOperacaoEstoqueNestedInput
  }

  export type OperacaoEstoqueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    entradasaida?: StringFieldUpdateOperationsInput | string
    operacaoestoquedetalhes?: OperacaoEstoqueDetalheUncheckedUpdateManyWithoutOperacaoEstoqueNestedInput
  }

  export type OperacaoEstoqueCreateManyInput = {
    id?: number
    hora?: Date | string
    motivo: string
    entradasaida: string
  }

  export type OperacaoEstoqueUpdateManyMutationInput = {
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    entradasaida?: StringFieldUpdateOperationsInput | string
  }

  export type OperacaoEstoqueUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    entradasaida?: StringFieldUpdateOperationsInput | string
  }

  export type OperacaoEstoqueDetalheCreateInput = {
    quantidade: number
    precoCusto: number
    operacaoEstoque: OperacaoEstoqueCreateNestedOneWithoutOperacaoestoquedetalhesInput
    produto: ProdutoModelCreateNestedOneWithoutOperacaoEstoqueDetalheInput
  }

  export type OperacaoEstoqueDetalheUncheckedCreateInput = {
    id?: number
    quantidade: number
    precoCusto: number
    operacaoEstoqueId: number
    produtoId: number
  }

  export type OperacaoEstoqueDetalheUpdateInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    precoCusto?: FloatFieldUpdateOperationsInput | number
    operacaoEstoque?: OperacaoEstoqueUpdateOneRequiredWithoutOperacaoestoquedetalhesNestedInput
    produto?: ProdutoModelUpdateOneRequiredWithoutOperacaoEstoqueDetalheNestedInput
  }

  export type OperacaoEstoqueDetalheUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    precoCusto?: FloatFieldUpdateOperationsInput | number
    operacaoEstoqueId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
  }

  export type OperacaoEstoqueDetalheCreateManyInput = {
    id?: number
    quantidade: number
    precoCusto: number
    operacaoEstoqueId: number
    produtoId: number
  }

  export type OperacaoEstoqueDetalheUpdateManyMutationInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    precoCusto?: FloatFieldUpdateOperationsInput | number
  }

  export type OperacaoEstoqueDetalheUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    precoCusto?: FloatFieldUpdateOperationsInput | number
    operacaoEstoqueId?: IntFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CategoriaProdutoScalarRelationFilter = {
    is?: CategoriaProdutoWhereInput
    isNot?: CategoriaProdutoWhereInput
  }

  export type UnidadeMedidaScalarRelationFilter = {
    is?: UnidadeMedidaWhereInput
    isNot?: UnidadeMedidaWhereInput
  }

  export type OperacaoEstoqueDetalheNullableScalarRelationFilter = {
    is?: OperacaoEstoqueDetalheWhereInput | null
    isNot?: OperacaoEstoqueDetalheWhereInput | null
  }

  export type ProdutoModelCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    habilitado?: SortOrder
    nomearquivofoto?: SortOrder
    descricao?: SortOrder
    quantidadeAtual?: SortOrder
    categoriaId?: SortOrder
    unidadeMedidaId?: SortOrder
  }

  export type ProdutoModelAvgOrderByAggregateInput = {
    id?: SortOrder
    quantidadeAtual?: SortOrder
    categoriaId?: SortOrder
    unidadeMedidaId?: SortOrder
  }

  export type ProdutoModelMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    habilitado?: SortOrder
    nomearquivofoto?: SortOrder
    descricao?: SortOrder
    quantidadeAtual?: SortOrder
    categoriaId?: SortOrder
    unidadeMedidaId?: SortOrder
  }

  export type ProdutoModelMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    habilitado?: SortOrder
    nomearquivofoto?: SortOrder
    descricao?: SortOrder
    quantidadeAtual?: SortOrder
    categoriaId?: SortOrder
    unidadeMedidaId?: SortOrder
  }

  export type ProdutoModelSumOrderByAggregateInput = {
    id?: SortOrder
    quantidadeAtual?: SortOrder
    categoriaId?: SortOrder
    unidadeMedidaId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProdutoModelListRelationFilter = {
    every?: ProdutoModelWhereInput
    some?: ProdutoModelWhereInput
    none?: ProdutoModelWhereInput
  }

  export type ProdutoModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriaProdutoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type CategoriaProdutoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriaProdutoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type CategoriaProdutoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type CategoriaProdutoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UnidadeMedidaCountOrderByAggregateInput = {
    id?: SortOrder
    sigla?: SortOrder
    descricao?: SortOrder
    fracionavel?: SortOrder
  }

  export type UnidadeMedidaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UnidadeMedidaMaxOrderByAggregateInput = {
    id?: SortOrder
    sigla?: SortOrder
    descricao?: SortOrder
    fracionavel?: SortOrder
  }

  export type UnidadeMedidaMinOrderByAggregateInput = {
    id?: SortOrder
    sigla?: SortOrder
    descricao?: SortOrder
    fracionavel?: SortOrder
  }

  export type UnidadeMedidaSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type OperacaoEstoqueDetalheListRelationFilter = {
    every?: OperacaoEstoqueDetalheWhereInput
    some?: OperacaoEstoqueDetalheWhereInput
    none?: OperacaoEstoqueDetalheWhereInput
  }

  export type OperacaoEstoqueDetalheOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OperacaoEstoqueCountOrderByAggregateInput = {
    id?: SortOrder
    hora?: SortOrder
    motivo?: SortOrder
    entradasaida?: SortOrder
  }

  export type OperacaoEstoqueAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OperacaoEstoqueMaxOrderByAggregateInput = {
    id?: SortOrder
    hora?: SortOrder
    motivo?: SortOrder
    entradasaida?: SortOrder
  }

  export type OperacaoEstoqueMinOrderByAggregateInput = {
    id?: SortOrder
    hora?: SortOrder
    motivo?: SortOrder
    entradasaida?: SortOrder
  }

  export type OperacaoEstoqueSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type OperacaoEstoqueScalarRelationFilter = {
    is?: OperacaoEstoqueWhereInput
    isNot?: OperacaoEstoqueWhereInput
  }

  export type ProdutoModelScalarRelationFilter = {
    is?: ProdutoModelWhereInput
    isNot?: ProdutoModelWhereInput
  }

  export type OperacaoEstoqueDetalheCountOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    precoCusto?: SortOrder
    operacaoEstoqueId?: SortOrder
    produtoId?: SortOrder
  }

  export type OperacaoEstoqueDetalheAvgOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    precoCusto?: SortOrder
    operacaoEstoqueId?: SortOrder
    produtoId?: SortOrder
  }

  export type OperacaoEstoqueDetalheMaxOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    precoCusto?: SortOrder
    operacaoEstoqueId?: SortOrder
    produtoId?: SortOrder
  }

  export type OperacaoEstoqueDetalheMinOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    precoCusto?: SortOrder
    operacaoEstoqueId?: SortOrder
    produtoId?: SortOrder
  }

  export type OperacaoEstoqueDetalheSumOrderByAggregateInput = {
    id?: SortOrder
    quantidade?: SortOrder
    precoCusto?: SortOrder
    operacaoEstoqueId?: SortOrder
    produtoId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CategoriaProdutoCreateNestedOneWithoutProdutosInput = {
    create?: XOR<CategoriaProdutoCreateWithoutProdutosInput, CategoriaProdutoUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: CategoriaProdutoCreateOrConnectWithoutProdutosInput
    connect?: CategoriaProdutoWhereUniqueInput
  }

  export type UnidadeMedidaCreateNestedOneWithoutProdutosInput = {
    create?: XOR<UnidadeMedidaCreateWithoutProdutosInput, UnidadeMedidaUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: UnidadeMedidaCreateOrConnectWithoutProdutosInput
    connect?: UnidadeMedidaWhereUniqueInput
  }

  export type OperacaoEstoqueDetalheCreateNestedOneWithoutProdutoInput = {
    create?: XOR<OperacaoEstoqueDetalheCreateWithoutProdutoInput, OperacaoEstoqueDetalheUncheckedCreateWithoutProdutoInput>
    connectOrCreate?: OperacaoEstoqueDetalheCreateOrConnectWithoutProdutoInput
    connect?: OperacaoEstoqueDetalheWhereUniqueInput
  }

  export type OperacaoEstoqueDetalheUncheckedCreateNestedOneWithoutProdutoInput = {
    create?: XOR<OperacaoEstoqueDetalheCreateWithoutProdutoInput, OperacaoEstoqueDetalheUncheckedCreateWithoutProdutoInput>
    connectOrCreate?: OperacaoEstoqueDetalheCreateOrConnectWithoutProdutoInput
    connect?: OperacaoEstoqueDetalheWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoriaProdutoUpdateOneRequiredWithoutProdutosNestedInput = {
    create?: XOR<CategoriaProdutoCreateWithoutProdutosInput, CategoriaProdutoUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: CategoriaProdutoCreateOrConnectWithoutProdutosInput
    upsert?: CategoriaProdutoUpsertWithoutProdutosInput
    connect?: CategoriaProdutoWhereUniqueInput
    update?: XOR<XOR<CategoriaProdutoUpdateToOneWithWhereWithoutProdutosInput, CategoriaProdutoUpdateWithoutProdutosInput>, CategoriaProdutoUncheckedUpdateWithoutProdutosInput>
  }

  export type UnidadeMedidaUpdateOneRequiredWithoutProdutosNestedInput = {
    create?: XOR<UnidadeMedidaCreateWithoutProdutosInput, UnidadeMedidaUncheckedCreateWithoutProdutosInput>
    connectOrCreate?: UnidadeMedidaCreateOrConnectWithoutProdutosInput
    upsert?: UnidadeMedidaUpsertWithoutProdutosInput
    connect?: UnidadeMedidaWhereUniqueInput
    update?: XOR<XOR<UnidadeMedidaUpdateToOneWithWhereWithoutProdutosInput, UnidadeMedidaUpdateWithoutProdutosInput>, UnidadeMedidaUncheckedUpdateWithoutProdutosInput>
  }

  export type OperacaoEstoqueDetalheUpdateOneWithoutProdutoNestedInput = {
    create?: XOR<OperacaoEstoqueDetalheCreateWithoutProdutoInput, OperacaoEstoqueDetalheUncheckedCreateWithoutProdutoInput>
    connectOrCreate?: OperacaoEstoqueDetalheCreateOrConnectWithoutProdutoInput
    upsert?: OperacaoEstoqueDetalheUpsertWithoutProdutoInput
    disconnect?: OperacaoEstoqueDetalheWhereInput | boolean
    delete?: OperacaoEstoqueDetalheWhereInput | boolean
    connect?: OperacaoEstoqueDetalheWhereUniqueInput
    update?: XOR<XOR<OperacaoEstoqueDetalheUpdateToOneWithWhereWithoutProdutoInput, OperacaoEstoqueDetalheUpdateWithoutProdutoInput>, OperacaoEstoqueDetalheUncheckedUpdateWithoutProdutoInput>
  }

  export type OperacaoEstoqueDetalheUncheckedUpdateOneWithoutProdutoNestedInput = {
    create?: XOR<OperacaoEstoqueDetalheCreateWithoutProdutoInput, OperacaoEstoqueDetalheUncheckedCreateWithoutProdutoInput>
    connectOrCreate?: OperacaoEstoqueDetalheCreateOrConnectWithoutProdutoInput
    upsert?: OperacaoEstoqueDetalheUpsertWithoutProdutoInput
    disconnect?: OperacaoEstoqueDetalheWhereInput | boolean
    delete?: OperacaoEstoqueDetalheWhereInput | boolean
    connect?: OperacaoEstoqueDetalheWhereUniqueInput
    update?: XOR<XOR<OperacaoEstoqueDetalheUpdateToOneWithWhereWithoutProdutoInput, OperacaoEstoqueDetalheUpdateWithoutProdutoInput>, OperacaoEstoqueDetalheUncheckedUpdateWithoutProdutoInput>
  }

  export type ProdutoModelCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ProdutoModelCreateWithoutCategoriaInput, ProdutoModelUncheckedCreateWithoutCategoriaInput> | ProdutoModelCreateWithoutCategoriaInput[] | ProdutoModelUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProdutoModelCreateOrConnectWithoutCategoriaInput | ProdutoModelCreateOrConnectWithoutCategoriaInput[]
    createMany?: ProdutoModelCreateManyCategoriaInputEnvelope
    connect?: ProdutoModelWhereUniqueInput | ProdutoModelWhereUniqueInput[]
  }

  export type ProdutoModelUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ProdutoModelCreateWithoutCategoriaInput, ProdutoModelUncheckedCreateWithoutCategoriaInput> | ProdutoModelCreateWithoutCategoriaInput[] | ProdutoModelUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProdutoModelCreateOrConnectWithoutCategoriaInput | ProdutoModelCreateOrConnectWithoutCategoriaInput[]
    createMany?: ProdutoModelCreateManyCategoriaInputEnvelope
    connect?: ProdutoModelWhereUniqueInput | ProdutoModelWhereUniqueInput[]
  }

  export type ProdutoModelUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ProdutoModelCreateWithoutCategoriaInput, ProdutoModelUncheckedCreateWithoutCategoriaInput> | ProdutoModelCreateWithoutCategoriaInput[] | ProdutoModelUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProdutoModelCreateOrConnectWithoutCategoriaInput | ProdutoModelCreateOrConnectWithoutCategoriaInput[]
    upsert?: ProdutoModelUpsertWithWhereUniqueWithoutCategoriaInput | ProdutoModelUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ProdutoModelCreateManyCategoriaInputEnvelope
    set?: ProdutoModelWhereUniqueInput | ProdutoModelWhereUniqueInput[]
    disconnect?: ProdutoModelWhereUniqueInput | ProdutoModelWhereUniqueInput[]
    delete?: ProdutoModelWhereUniqueInput | ProdutoModelWhereUniqueInput[]
    connect?: ProdutoModelWhereUniqueInput | ProdutoModelWhereUniqueInput[]
    update?: ProdutoModelUpdateWithWhereUniqueWithoutCategoriaInput | ProdutoModelUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ProdutoModelUpdateManyWithWhereWithoutCategoriaInput | ProdutoModelUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ProdutoModelScalarWhereInput | ProdutoModelScalarWhereInput[]
  }

  export type ProdutoModelUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ProdutoModelCreateWithoutCategoriaInput, ProdutoModelUncheckedCreateWithoutCategoriaInput> | ProdutoModelCreateWithoutCategoriaInput[] | ProdutoModelUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ProdutoModelCreateOrConnectWithoutCategoriaInput | ProdutoModelCreateOrConnectWithoutCategoriaInput[]
    upsert?: ProdutoModelUpsertWithWhereUniqueWithoutCategoriaInput | ProdutoModelUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ProdutoModelCreateManyCategoriaInputEnvelope
    set?: ProdutoModelWhereUniqueInput | ProdutoModelWhereUniqueInput[]
    disconnect?: ProdutoModelWhereUniqueInput | ProdutoModelWhereUniqueInput[]
    delete?: ProdutoModelWhereUniqueInput | ProdutoModelWhereUniqueInput[]
    connect?: ProdutoModelWhereUniqueInput | ProdutoModelWhereUniqueInput[]
    update?: ProdutoModelUpdateWithWhereUniqueWithoutCategoriaInput | ProdutoModelUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ProdutoModelUpdateManyWithWhereWithoutCategoriaInput | ProdutoModelUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ProdutoModelScalarWhereInput | ProdutoModelScalarWhereInput[]
  }

  export type ProdutoModelCreateNestedManyWithoutUnidadeMedidaInput = {
    create?: XOR<ProdutoModelCreateWithoutUnidadeMedidaInput, ProdutoModelUncheckedCreateWithoutUnidadeMedidaInput> | ProdutoModelCreateWithoutUnidadeMedidaInput[] | ProdutoModelUncheckedCreateWithoutUnidadeMedidaInput[]
    connectOrCreate?: ProdutoModelCreateOrConnectWithoutUnidadeMedidaInput | ProdutoModelCreateOrConnectWithoutUnidadeMedidaInput[]
    createMany?: ProdutoModelCreateManyUnidadeMedidaInputEnvelope
    connect?: ProdutoModelWhereUniqueInput | ProdutoModelWhereUniqueInput[]
  }

  export type ProdutoModelUncheckedCreateNestedManyWithoutUnidadeMedidaInput = {
    create?: XOR<ProdutoModelCreateWithoutUnidadeMedidaInput, ProdutoModelUncheckedCreateWithoutUnidadeMedidaInput> | ProdutoModelCreateWithoutUnidadeMedidaInput[] | ProdutoModelUncheckedCreateWithoutUnidadeMedidaInput[]
    connectOrCreate?: ProdutoModelCreateOrConnectWithoutUnidadeMedidaInput | ProdutoModelCreateOrConnectWithoutUnidadeMedidaInput[]
    createMany?: ProdutoModelCreateManyUnidadeMedidaInputEnvelope
    connect?: ProdutoModelWhereUniqueInput | ProdutoModelWhereUniqueInput[]
  }

  export type ProdutoModelUpdateManyWithoutUnidadeMedidaNestedInput = {
    create?: XOR<ProdutoModelCreateWithoutUnidadeMedidaInput, ProdutoModelUncheckedCreateWithoutUnidadeMedidaInput> | ProdutoModelCreateWithoutUnidadeMedidaInput[] | ProdutoModelUncheckedCreateWithoutUnidadeMedidaInput[]
    connectOrCreate?: ProdutoModelCreateOrConnectWithoutUnidadeMedidaInput | ProdutoModelCreateOrConnectWithoutUnidadeMedidaInput[]
    upsert?: ProdutoModelUpsertWithWhereUniqueWithoutUnidadeMedidaInput | ProdutoModelUpsertWithWhereUniqueWithoutUnidadeMedidaInput[]
    createMany?: ProdutoModelCreateManyUnidadeMedidaInputEnvelope
    set?: ProdutoModelWhereUniqueInput | ProdutoModelWhereUniqueInput[]
    disconnect?: ProdutoModelWhereUniqueInput | ProdutoModelWhereUniqueInput[]
    delete?: ProdutoModelWhereUniqueInput | ProdutoModelWhereUniqueInput[]
    connect?: ProdutoModelWhereUniqueInput | ProdutoModelWhereUniqueInput[]
    update?: ProdutoModelUpdateWithWhereUniqueWithoutUnidadeMedidaInput | ProdutoModelUpdateWithWhereUniqueWithoutUnidadeMedidaInput[]
    updateMany?: ProdutoModelUpdateManyWithWhereWithoutUnidadeMedidaInput | ProdutoModelUpdateManyWithWhereWithoutUnidadeMedidaInput[]
    deleteMany?: ProdutoModelScalarWhereInput | ProdutoModelScalarWhereInput[]
  }

  export type ProdutoModelUncheckedUpdateManyWithoutUnidadeMedidaNestedInput = {
    create?: XOR<ProdutoModelCreateWithoutUnidadeMedidaInput, ProdutoModelUncheckedCreateWithoutUnidadeMedidaInput> | ProdutoModelCreateWithoutUnidadeMedidaInput[] | ProdutoModelUncheckedCreateWithoutUnidadeMedidaInput[]
    connectOrCreate?: ProdutoModelCreateOrConnectWithoutUnidadeMedidaInput | ProdutoModelCreateOrConnectWithoutUnidadeMedidaInput[]
    upsert?: ProdutoModelUpsertWithWhereUniqueWithoutUnidadeMedidaInput | ProdutoModelUpsertWithWhereUniqueWithoutUnidadeMedidaInput[]
    createMany?: ProdutoModelCreateManyUnidadeMedidaInputEnvelope
    set?: ProdutoModelWhereUniqueInput | ProdutoModelWhereUniqueInput[]
    disconnect?: ProdutoModelWhereUniqueInput | ProdutoModelWhereUniqueInput[]
    delete?: ProdutoModelWhereUniqueInput | ProdutoModelWhereUniqueInput[]
    connect?: ProdutoModelWhereUniqueInput | ProdutoModelWhereUniqueInput[]
    update?: ProdutoModelUpdateWithWhereUniqueWithoutUnidadeMedidaInput | ProdutoModelUpdateWithWhereUniqueWithoutUnidadeMedidaInput[]
    updateMany?: ProdutoModelUpdateManyWithWhereWithoutUnidadeMedidaInput | ProdutoModelUpdateManyWithWhereWithoutUnidadeMedidaInput[]
    deleteMany?: ProdutoModelScalarWhereInput | ProdutoModelScalarWhereInput[]
  }

  export type OperacaoEstoqueDetalheCreateNestedManyWithoutOperacaoEstoqueInput = {
    create?: XOR<OperacaoEstoqueDetalheCreateWithoutOperacaoEstoqueInput, OperacaoEstoqueDetalheUncheckedCreateWithoutOperacaoEstoqueInput> | OperacaoEstoqueDetalheCreateWithoutOperacaoEstoqueInput[] | OperacaoEstoqueDetalheUncheckedCreateWithoutOperacaoEstoqueInput[]
    connectOrCreate?: OperacaoEstoqueDetalheCreateOrConnectWithoutOperacaoEstoqueInput | OperacaoEstoqueDetalheCreateOrConnectWithoutOperacaoEstoqueInput[]
    createMany?: OperacaoEstoqueDetalheCreateManyOperacaoEstoqueInputEnvelope
    connect?: OperacaoEstoqueDetalheWhereUniqueInput | OperacaoEstoqueDetalheWhereUniqueInput[]
  }

  export type OperacaoEstoqueDetalheUncheckedCreateNestedManyWithoutOperacaoEstoqueInput = {
    create?: XOR<OperacaoEstoqueDetalheCreateWithoutOperacaoEstoqueInput, OperacaoEstoqueDetalheUncheckedCreateWithoutOperacaoEstoqueInput> | OperacaoEstoqueDetalheCreateWithoutOperacaoEstoqueInput[] | OperacaoEstoqueDetalheUncheckedCreateWithoutOperacaoEstoqueInput[]
    connectOrCreate?: OperacaoEstoqueDetalheCreateOrConnectWithoutOperacaoEstoqueInput | OperacaoEstoqueDetalheCreateOrConnectWithoutOperacaoEstoqueInput[]
    createMany?: OperacaoEstoqueDetalheCreateManyOperacaoEstoqueInputEnvelope
    connect?: OperacaoEstoqueDetalheWhereUniqueInput | OperacaoEstoqueDetalheWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OperacaoEstoqueDetalheUpdateManyWithoutOperacaoEstoqueNestedInput = {
    create?: XOR<OperacaoEstoqueDetalheCreateWithoutOperacaoEstoqueInput, OperacaoEstoqueDetalheUncheckedCreateWithoutOperacaoEstoqueInput> | OperacaoEstoqueDetalheCreateWithoutOperacaoEstoqueInput[] | OperacaoEstoqueDetalheUncheckedCreateWithoutOperacaoEstoqueInput[]
    connectOrCreate?: OperacaoEstoqueDetalheCreateOrConnectWithoutOperacaoEstoqueInput | OperacaoEstoqueDetalheCreateOrConnectWithoutOperacaoEstoqueInput[]
    upsert?: OperacaoEstoqueDetalheUpsertWithWhereUniqueWithoutOperacaoEstoqueInput | OperacaoEstoqueDetalheUpsertWithWhereUniqueWithoutOperacaoEstoqueInput[]
    createMany?: OperacaoEstoqueDetalheCreateManyOperacaoEstoqueInputEnvelope
    set?: OperacaoEstoqueDetalheWhereUniqueInput | OperacaoEstoqueDetalheWhereUniqueInput[]
    disconnect?: OperacaoEstoqueDetalheWhereUniqueInput | OperacaoEstoqueDetalheWhereUniqueInput[]
    delete?: OperacaoEstoqueDetalheWhereUniqueInput | OperacaoEstoqueDetalheWhereUniqueInput[]
    connect?: OperacaoEstoqueDetalheWhereUniqueInput | OperacaoEstoqueDetalheWhereUniqueInput[]
    update?: OperacaoEstoqueDetalheUpdateWithWhereUniqueWithoutOperacaoEstoqueInput | OperacaoEstoqueDetalheUpdateWithWhereUniqueWithoutOperacaoEstoqueInput[]
    updateMany?: OperacaoEstoqueDetalheUpdateManyWithWhereWithoutOperacaoEstoqueInput | OperacaoEstoqueDetalheUpdateManyWithWhereWithoutOperacaoEstoqueInput[]
    deleteMany?: OperacaoEstoqueDetalheScalarWhereInput | OperacaoEstoqueDetalheScalarWhereInput[]
  }

  export type OperacaoEstoqueDetalheUncheckedUpdateManyWithoutOperacaoEstoqueNestedInput = {
    create?: XOR<OperacaoEstoqueDetalheCreateWithoutOperacaoEstoqueInput, OperacaoEstoqueDetalheUncheckedCreateWithoutOperacaoEstoqueInput> | OperacaoEstoqueDetalheCreateWithoutOperacaoEstoqueInput[] | OperacaoEstoqueDetalheUncheckedCreateWithoutOperacaoEstoqueInput[]
    connectOrCreate?: OperacaoEstoqueDetalheCreateOrConnectWithoutOperacaoEstoqueInput | OperacaoEstoqueDetalheCreateOrConnectWithoutOperacaoEstoqueInput[]
    upsert?: OperacaoEstoqueDetalheUpsertWithWhereUniqueWithoutOperacaoEstoqueInput | OperacaoEstoqueDetalheUpsertWithWhereUniqueWithoutOperacaoEstoqueInput[]
    createMany?: OperacaoEstoqueDetalheCreateManyOperacaoEstoqueInputEnvelope
    set?: OperacaoEstoqueDetalheWhereUniqueInput | OperacaoEstoqueDetalheWhereUniqueInput[]
    disconnect?: OperacaoEstoqueDetalheWhereUniqueInput | OperacaoEstoqueDetalheWhereUniqueInput[]
    delete?: OperacaoEstoqueDetalheWhereUniqueInput | OperacaoEstoqueDetalheWhereUniqueInput[]
    connect?: OperacaoEstoqueDetalheWhereUniqueInput | OperacaoEstoqueDetalheWhereUniqueInput[]
    update?: OperacaoEstoqueDetalheUpdateWithWhereUniqueWithoutOperacaoEstoqueInput | OperacaoEstoqueDetalheUpdateWithWhereUniqueWithoutOperacaoEstoqueInput[]
    updateMany?: OperacaoEstoqueDetalheUpdateManyWithWhereWithoutOperacaoEstoqueInput | OperacaoEstoqueDetalheUpdateManyWithWhereWithoutOperacaoEstoqueInput[]
    deleteMany?: OperacaoEstoqueDetalheScalarWhereInput | OperacaoEstoqueDetalheScalarWhereInput[]
  }

  export type OperacaoEstoqueCreateNestedOneWithoutOperacaoestoquedetalhesInput = {
    create?: XOR<OperacaoEstoqueCreateWithoutOperacaoestoquedetalhesInput, OperacaoEstoqueUncheckedCreateWithoutOperacaoestoquedetalhesInput>
    connectOrCreate?: OperacaoEstoqueCreateOrConnectWithoutOperacaoestoquedetalhesInput
    connect?: OperacaoEstoqueWhereUniqueInput
  }

  export type ProdutoModelCreateNestedOneWithoutOperacaoEstoqueDetalheInput = {
    create?: XOR<ProdutoModelCreateWithoutOperacaoEstoqueDetalheInput, ProdutoModelUncheckedCreateWithoutOperacaoEstoqueDetalheInput>
    connectOrCreate?: ProdutoModelCreateOrConnectWithoutOperacaoEstoqueDetalheInput
    connect?: ProdutoModelWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OperacaoEstoqueUpdateOneRequiredWithoutOperacaoestoquedetalhesNestedInput = {
    create?: XOR<OperacaoEstoqueCreateWithoutOperacaoestoquedetalhesInput, OperacaoEstoqueUncheckedCreateWithoutOperacaoestoquedetalhesInput>
    connectOrCreate?: OperacaoEstoqueCreateOrConnectWithoutOperacaoestoquedetalhesInput
    upsert?: OperacaoEstoqueUpsertWithoutOperacaoestoquedetalhesInput
    connect?: OperacaoEstoqueWhereUniqueInput
    update?: XOR<XOR<OperacaoEstoqueUpdateToOneWithWhereWithoutOperacaoestoquedetalhesInput, OperacaoEstoqueUpdateWithoutOperacaoestoquedetalhesInput>, OperacaoEstoqueUncheckedUpdateWithoutOperacaoestoquedetalhesInput>
  }

  export type ProdutoModelUpdateOneRequiredWithoutOperacaoEstoqueDetalheNestedInput = {
    create?: XOR<ProdutoModelCreateWithoutOperacaoEstoqueDetalheInput, ProdutoModelUncheckedCreateWithoutOperacaoEstoqueDetalheInput>
    connectOrCreate?: ProdutoModelCreateOrConnectWithoutOperacaoEstoqueDetalheInput
    upsert?: ProdutoModelUpsertWithoutOperacaoEstoqueDetalheInput
    connect?: ProdutoModelWhereUniqueInput
    update?: XOR<XOR<ProdutoModelUpdateToOneWithWhereWithoutOperacaoEstoqueDetalheInput, ProdutoModelUpdateWithoutOperacaoEstoqueDetalheInput>, ProdutoModelUncheckedUpdateWithoutOperacaoEstoqueDetalheInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CategoriaProdutoCreateWithoutProdutosInput = {
    nome: string
    descricao: string
  }

  export type CategoriaProdutoUncheckedCreateWithoutProdutosInput = {
    id?: number
    nome: string
    descricao: string
  }

  export type CategoriaProdutoCreateOrConnectWithoutProdutosInput = {
    where: CategoriaProdutoWhereUniqueInput
    create: XOR<CategoriaProdutoCreateWithoutProdutosInput, CategoriaProdutoUncheckedCreateWithoutProdutosInput>
  }

  export type UnidadeMedidaCreateWithoutProdutosInput = {
    sigla: string
    descricao: string
    fracionavel?: boolean
  }

  export type UnidadeMedidaUncheckedCreateWithoutProdutosInput = {
    id?: number
    sigla: string
    descricao: string
    fracionavel?: boolean
  }

  export type UnidadeMedidaCreateOrConnectWithoutProdutosInput = {
    where: UnidadeMedidaWhereUniqueInput
    create: XOR<UnidadeMedidaCreateWithoutProdutosInput, UnidadeMedidaUncheckedCreateWithoutProdutosInput>
  }

  export type OperacaoEstoqueDetalheCreateWithoutProdutoInput = {
    quantidade: number
    precoCusto: number
    operacaoEstoque: OperacaoEstoqueCreateNestedOneWithoutOperacaoestoquedetalhesInput
  }

  export type OperacaoEstoqueDetalheUncheckedCreateWithoutProdutoInput = {
    id?: number
    quantidade: number
    precoCusto: number
    operacaoEstoqueId: number
  }

  export type OperacaoEstoqueDetalheCreateOrConnectWithoutProdutoInput = {
    where: OperacaoEstoqueDetalheWhereUniqueInput
    create: XOR<OperacaoEstoqueDetalheCreateWithoutProdutoInput, OperacaoEstoqueDetalheUncheckedCreateWithoutProdutoInput>
  }

  export type CategoriaProdutoUpsertWithoutProdutosInput = {
    update: XOR<CategoriaProdutoUpdateWithoutProdutosInput, CategoriaProdutoUncheckedUpdateWithoutProdutosInput>
    create: XOR<CategoriaProdutoCreateWithoutProdutosInput, CategoriaProdutoUncheckedCreateWithoutProdutosInput>
    where?: CategoriaProdutoWhereInput
  }

  export type CategoriaProdutoUpdateToOneWithWhereWithoutProdutosInput = {
    where?: CategoriaProdutoWhereInput
    data: XOR<CategoriaProdutoUpdateWithoutProdutosInput, CategoriaProdutoUncheckedUpdateWithoutProdutosInput>
  }

  export type CategoriaProdutoUpdateWithoutProdutosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaProdutoUncheckedUpdateWithoutProdutosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type UnidadeMedidaUpsertWithoutProdutosInput = {
    update: XOR<UnidadeMedidaUpdateWithoutProdutosInput, UnidadeMedidaUncheckedUpdateWithoutProdutosInput>
    create: XOR<UnidadeMedidaCreateWithoutProdutosInput, UnidadeMedidaUncheckedCreateWithoutProdutosInput>
    where?: UnidadeMedidaWhereInput
  }

  export type UnidadeMedidaUpdateToOneWithWhereWithoutProdutosInput = {
    where?: UnidadeMedidaWhereInput
    data: XOR<UnidadeMedidaUpdateWithoutProdutosInput, UnidadeMedidaUncheckedUpdateWithoutProdutosInput>
  }

  export type UnidadeMedidaUpdateWithoutProdutosInput = {
    sigla?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    fracionavel?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UnidadeMedidaUncheckedUpdateWithoutProdutosInput = {
    id?: IntFieldUpdateOperationsInput | number
    sigla?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    fracionavel?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OperacaoEstoqueDetalheUpsertWithoutProdutoInput = {
    update: XOR<OperacaoEstoqueDetalheUpdateWithoutProdutoInput, OperacaoEstoqueDetalheUncheckedUpdateWithoutProdutoInput>
    create: XOR<OperacaoEstoqueDetalheCreateWithoutProdutoInput, OperacaoEstoqueDetalheUncheckedCreateWithoutProdutoInput>
    where?: OperacaoEstoqueDetalheWhereInput
  }

  export type OperacaoEstoqueDetalheUpdateToOneWithWhereWithoutProdutoInput = {
    where?: OperacaoEstoqueDetalheWhereInput
    data: XOR<OperacaoEstoqueDetalheUpdateWithoutProdutoInput, OperacaoEstoqueDetalheUncheckedUpdateWithoutProdutoInput>
  }

  export type OperacaoEstoqueDetalheUpdateWithoutProdutoInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    precoCusto?: FloatFieldUpdateOperationsInput | number
    operacaoEstoque?: OperacaoEstoqueUpdateOneRequiredWithoutOperacaoestoquedetalhesNestedInput
  }

  export type OperacaoEstoqueDetalheUncheckedUpdateWithoutProdutoInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    precoCusto?: FloatFieldUpdateOperationsInput | number
    operacaoEstoqueId?: IntFieldUpdateOperationsInput | number
  }

  export type ProdutoModelCreateWithoutCategoriaInput = {
    nome: string
    habilitado?: boolean
    nomearquivofoto: string
    descricao: string
    quantidadeAtual?: number
    unidadeMedida: UnidadeMedidaCreateNestedOneWithoutProdutosInput
    operacaoEstoqueDetalhe?: OperacaoEstoqueDetalheCreateNestedOneWithoutProdutoInput
  }

  export type ProdutoModelUncheckedCreateWithoutCategoriaInput = {
    id?: number
    nome: string
    habilitado?: boolean
    nomearquivofoto: string
    descricao: string
    quantidadeAtual?: number
    unidadeMedidaId: number
    operacaoEstoqueDetalhe?: OperacaoEstoqueDetalheUncheckedCreateNestedOneWithoutProdutoInput
  }

  export type ProdutoModelCreateOrConnectWithoutCategoriaInput = {
    where: ProdutoModelWhereUniqueInput
    create: XOR<ProdutoModelCreateWithoutCategoriaInput, ProdutoModelUncheckedCreateWithoutCategoriaInput>
  }

  export type ProdutoModelCreateManyCategoriaInputEnvelope = {
    data: ProdutoModelCreateManyCategoriaInput | ProdutoModelCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type ProdutoModelUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: ProdutoModelWhereUniqueInput
    update: XOR<ProdutoModelUpdateWithoutCategoriaInput, ProdutoModelUncheckedUpdateWithoutCategoriaInput>
    create: XOR<ProdutoModelCreateWithoutCategoriaInput, ProdutoModelUncheckedCreateWithoutCategoriaInput>
  }

  export type ProdutoModelUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: ProdutoModelWhereUniqueInput
    data: XOR<ProdutoModelUpdateWithoutCategoriaInput, ProdutoModelUncheckedUpdateWithoutCategoriaInput>
  }

  export type ProdutoModelUpdateManyWithWhereWithoutCategoriaInput = {
    where: ProdutoModelScalarWhereInput
    data: XOR<ProdutoModelUpdateManyMutationInput, ProdutoModelUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type ProdutoModelScalarWhereInput = {
    AND?: ProdutoModelScalarWhereInput | ProdutoModelScalarWhereInput[]
    OR?: ProdutoModelScalarWhereInput[]
    NOT?: ProdutoModelScalarWhereInput | ProdutoModelScalarWhereInput[]
    id?: IntFilter<"ProdutoModel"> | number
    nome?: StringFilter<"ProdutoModel"> | string
    habilitado?: BoolFilter<"ProdutoModel"> | boolean
    nomearquivofoto?: StringFilter<"ProdutoModel"> | string
    descricao?: StringFilter<"ProdutoModel"> | string
    quantidadeAtual?: IntFilter<"ProdutoModel"> | number
    categoriaId?: IntFilter<"ProdutoModel"> | number
    unidadeMedidaId?: IntFilter<"ProdutoModel"> | number
  }

  export type ProdutoModelCreateWithoutUnidadeMedidaInput = {
    nome: string
    habilitado?: boolean
    nomearquivofoto: string
    descricao: string
    quantidadeAtual?: number
    categoria: CategoriaProdutoCreateNestedOneWithoutProdutosInput
    operacaoEstoqueDetalhe?: OperacaoEstoqueDetalheCreateNestedOneWithoutProdutoInput
  }

  export type ProdutoModelUncheckedCreateWithoutUnidadeMedidaInput = {
    id?: number
    nome: string
    habilitado?: boolean
    nomearquivofoto: string
    descricao: string
    quantidadeAtual?: number
    categoriaId: number
    operacaoEstoqueDetalhe?: OperacaoEstoqueDetalheUncheckedCreateNestedOneWithoutProdutoInput
  }

  export type ProdutoModelCreateOrConnectWithoutUnidadeMedidaInput = {
    where: ProdutoModelWhereUniqueInput
    create: XOR<ProdutoModelCreateWithoutUnidadeMedidaInput, ProdutoModelUncheckedCreateWithoutUnidadeMedidaInput>
  }

  export type ProdutoModelCreateManyUnidadeMedidaInputEnvelope = {
    data: ProdutoModelCreateManyUnidadeMedidaInput | ProdutoModelCreateManyUnidadeMedidaInput[]
    skipDuplicates?: boolean
  }

  export type ProdutoModelUpsertWithWhereUniqueWithoutUnidadeMedidaInput = {
    where: ProdutoModelWhereUniqueInput
    update: XOR<ProdutoModelUpdateWithoutUnidadeMedidaInput, ProdutoModelUncheckedUpdateWithoutUnidadeMedidaInput>
    create: XOR<ProdutoModelCreateWithoutUnidadeMedidaInput, ProdutoModelUncheckedCreateWithoutUnidadeMedidaInput>
  }

  export type ProdutoModelUpdateWithWhereUniqueWithoutUnidadeMedidaInput = {
    where: ProdutoModelWhereUniqueInput
    data: XOR<ProdutoModelUpdateWithoutUnidadeMedidaInput, ProdutoModelUncheckedUpdateWithoutUnidadeMedidaInput>
  }

  export type ProdutoModelUpdateManyWithWhereWithoutUnidadeMedidaInput = {
    where: ProdutoModelScalarWhereInput
    data: XOR<ProdutoModelUpdateManyMutationInput, ProdutoModelUncheckedUpdateManyWithoutUnidadeMedidaInput>
  }

  export type OperacaoEstoqueDetalheCreateWithoutOperacaoEstoqueInput = {
    quantidade: number
    precoCusto: number
    produto: ProdutoModelCreateNestedOneWithoutOperacaoEstoqueDetalheInput
  }

  export type OperacaoEstoqueDetalheUncheckedCreateWithoutOperacaoEstoqueInput = {
    id?: number
    quantidade: number
    precoCusto: number
    produtoId: number
  }

  export type OperacaoEstoqueDetalheCreateOrConnectWithoutOperacaoEstoqueInput = {
    where: OperacaoEstoqueDetalheWhereUniqueInput
    create: XOR<OperacaoEstoqueDetalheCreateWithoutOperacaoEstoqueInput, OperacaoEstoqueDetalheUncheckedCreateWithoutOperacaoEstoqueInput>
  }

  export type OperacaoEstoqueDetalheCreateManyOperacaoEstoqueInputEnvelope = {
    data: OperacaoEstoqueDetalheCreateManyOperacaoEstoqueInput | OperacaoEstoqueDetalheCreateManyOperacaoEstoqueInput[]
    skipDuplicates?: boolean
  }

  export type OperacaoEstoqueDetalheUpsertWithWhereUniqueWithoutOperacaoEstoqueInput = {
    where: OperacaoEstoqueDetalheWhereUniqueInput
    update: XOR<OperacaoEstoqueDetalheUpdateWithoutOperacaoEstoqueInput, OperacaoEstoqueDetalheUncheckedUpdateWithoutOperacaoEstoqueInput>
    create: XOR<OperacaoEstoqueDetalheCreateWithoutOperacaoEstoqueInput, OperacaoEstoqueDetalheUncheckedCreateWithoutOperacaoEstoqueInput>
  }

  export type OperacaoEstoqueDetalheUpdateWithWhereUniqueWithoutOperacaoEstoqueInput = {
    where: OperacaoEstoqueDetalheWhereUniqueInput
    data: XOR<OperacaoEstoqueDetalheUpdateWithoutOperacaoEstoqueInput, OperacaoEstoqueDetalheUncheckedUpdateWithoutOperacaoEstoqueInput>
  }

  export type OperacaoEstoqueDetalheUpdateManyWithWhereWithoutOperacaoEstoqueInput = {
    where: OperacaoEstoqueDetalheScalarWhereInput
    data: XOR<OperacaoEstoqueDetalheUpdateManyMutationInput, OperacaoEstoqueDetalheUncheckedUpdateManyWithoutOperacaoEstoqueInput>
  }

  export type OperacaoEstoqueDetalheScalarWhereInput = {
    AND?: OperacaoEstoqueDetalheScalarWhereInput | OperacaoEstoqueDetalheScalarWhereInput[]
    OR?: OperacaoEstoqueDetalheScalarWhereInput[]
    NOT?: OperacaoEstoqueDetalheScalarWhereInput | OperacaoEstoqueDetalheScalarWhereInput[]
    id?: IntFilter<"OperacaoEstoqueDetalhe"> | number
    quantidade?: IntFilter<"OperacaoEstoqueDetalhe"> | number
    precoCusto?: FloatFilter<"OperacaoEstoqueDetalhe"> | number
    operacaoEstoqueId?: IntFilter<"OperacaoEstoqueDetalhe"> | number
    produtoId?: IntFilter<"OperacaoEstoqueDetalhe"> | number
  }

  export type OperacaoEstoqueCreateWithoutOperacaoestoquedetalhesInput = {
    hora?: Date | string
    motivo: string
    entradasaida: string
  }

  export type OperacaoEstoqueUncheckedCreateWithoutOperacaoestoquedetalhesInput = {
    id?: number
    hora?: Date | string
    motivo: string
    entradasaida: string
  }

  export type OperacaoEstoqueCreateOrConnectWithoutOperacaoestoquedetalhesInput = {
    where: OperacaoEstoqueWhereUniqueInput
    create: XOR<OperacaoEstoqueCreateWithoutOperacaoestoquedetalhesInput, OperacaoEstoqueUncheckedCreateWithoutOperacaoestoquedetalhesInput>
  }

  export type ProdutoModelCreateWithoutOperacaoEstoqueDetalheInput = {
    nome: string
    habilitado?: boolean
    nomearquivofoto: string
    descricao: string
    quantidadeAtual?: number
    categoria: CategoriaProdutoCreateNestedOneWithoutProdutosInput
    unidadeMedida: UnidadeMedidaCreateNestedOneWithoutProdutosInput
  }

  export type ProdutoModelUncheckedCreateWithoutOperacaoEstoqueDetalheInput = {
    id?: number
    nome: string
    habilitado?: boolean
    nomearquivofoto: string
    descricao: string
    quantidadeAtual?: number
    categoriaId: number
    unidadeMedidaId: number
  }

  export type ProdutoModelCreateOrConnectWithoutOperacaoEstoqueDetalheInput = {
    where: ProdutoModelWhereUniqueInput
    create: XOR<ProdutoModelCreateWithoutOperacaoEstoqueDetalheInput, ProdutoModelUncheckedCreateWithoutOperacaoEstoqueDetalheInput>
  }

  export type OperacaoEstoqueUpsertWithoutOperacaoestoquedetalhesInput = {
    update: XOR<OperacaoEstoqueUpdateWithoutOperacaoestoquedetalhesInput, OperacaoEstoqueUncheckedUpdateWithoutOperacaoestoquedetalhesInput>
    create: XOR<OperacaoEstoqueCreateWithoutOperacaoestoquedetalhesInput, OperacaoEstoqueUncheckedCreateWithoutOperacaoestoquedetalhesInput>
    where?: OperacaoEstoqueWhereInput
  }

  export type OperacaoEstoqueUpdateToOneWithWhereWithoutOperacaoestoquedetalhesInput = {
    where?: OperacaoEstoqueWhereInput
    data: XOR<OperacaoEstoqueUpdateWithoutOperacaoestoquedetalhesInput, OperacaoEstoqueUncheckedUpdateWithoutOperacaoestoquedetalhesInput>
  }

  export type OperacaoEstoqueUpdateWithoutOperacaoestoquedetalhesInput = {
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    entradasaida?: StringFieldUpdateOperationsInput | string
  }

  export type OperacaoEstoqueUncheckedUpdateWithoutOperacaoestoquedetalhesInput = {
    id?: IntFieldUpdateOperationsInput | number
    hora?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    entradasaida?: StringFieldUpdateOperationsInput | string
  }

  export type ProdutoModelUpsertWithoutOperacaoEstoqueDetalheInput = {
    update: XOR<ProdutoModelUpdateWithoutOperacaoEstoqueDetalheInput, ProdutoModelUncheckedUpdateWithoutOperacaoEstoqueDetalheInput>
    create: XOR<ProdutoModelCreateWithoutOperacaoEstoqueDetalheInput, ProdutoModelUncheckedCreateWithoutOperacaoEstoqueDetalheInput>
    where?: ProdutoModelWhereInput
  }

  export type ProdutoModelUpdateToOneWithWhereWithoutOperacaoEstoqueDetalheInput = {
    where?: ProdutoModelWhereInput
    data: XOR<ProdutoModelUpdateWithoutOperacaoEstoqueDetalheInput, ProdutoModelUncheckedUpdateWithoutOperacaoEstoqueDetalheInput>
  }

  export type ProdutoModelUpdateWithoutOperacaoEstoqueDetalheInput = {
    nome?: StringFieldUpdateOperationsInput | string
    habilitado?: BoolFieldUpdateOperationsInput | boolean
    nomearquivofoto?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    quantidadeAtual?: IntFieldUpdateOperationsInput | number
    categoria?: CategoriaProdutoUpdateOneRequiredWithoutProdutosNestedInput
    unidadeMedida?: UnidadeMedidaUpdateOneRequiredWithoutProdutosNestedInput
  }

  export type ProdutoModelUncheckedUpdateWithoutOperacaoEstoqueDetalheInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    habilitado?: BoolFieldUpdateOperationsInput | boolean
    nomearquivofoto?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    quantidadeAtual?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    unidadeMedidaId?: IntFieldUpdateOperationsInput | number
  }

  export type ProdutoModelCreateManyCategoriaInput = {
    id?: number
    nome: string
    habilitado?: boolean
    nomearquivofoto: string
    descricao: string
    quantidadeAtual?: number
    unidadeMedidaId: number
  }

  export type ProdutoModelUpdateWithoutCategoriaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    habilitado?: BoolFieldUpdateOperationsInput | boolean
    nomearquivofoto?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    quantidadeAtual?: IntFieldUpdateOperationsInput | number
    unidadeMedida?: UnidadeMedidaUpdateOneRequiredWithoutProdutosNestedInput
    operacaoEstoqueDetalhe?: OperacaoEstoqueDetalheUpdateOneWithoutProdutoNestedInput
  }

  export type ProdutoModelUncheckedUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    habilitado?: BoolFieldUpdateOperationsInput | boolean
    nomearquivofoto?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    quantidadeAtual?: IntFieldUpdateOperationsInput | number
    unidadeMedidaId?: IntFieldUpdateOperationsInput | number
    operacaoEstoqueDetalhe?: OperacaoEstoqueDetalheUncheckedUpdateOneWithoutProdutoNestedInput
  }

  export type ProdutoModelUncheckedUpdateManyWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    habilitado?: BoolFieldUpdateOperationsInput | boolean
    nomearquivofoto?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    quantidadeAtual?: IntFieldUpdateOperationsInput | number
    unidadeMedidaId?: IntFieldUpdateOperationsInput | number
  }

  export type ProdutoModelCreateManyUnidadeMedidaInput = {
    id?: number
    nome: string
    habilitado?: boolean
    nomearquivofoto: string
    descricao: string
    quantidadeAtual?: number
    categoriaId: number
  }

  export type ProdutoModelUpdateWithoutUnidadeMedidaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    habilitado?: BoolFieldUpdateOperationsInput | boolean
    nomearquivofoto?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    quantidadeAtual?: IntFieldUpdateOperationsInput | number
    categoria?: CategoriaProdutoUpdateOneRequiredWithoutProdutosNestedInput
    operacaoEstoqueDetalhe?: OperacaoEstoqueDetalheUpdateOneWithoutProdutoNestedInput
  }

  export type ProdutoModelUncheckedUpdateWithoutUnidadeMedidaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    habilitado?: BoolFieldUpdateOperationsInput | boolean
    nomearquivofoto?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    quantidadeAtual?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
    operacaoEstoqueDetalhe?: OperacaoEstoqueDetalheUncheckedUpdateOneWithoutProdutoNestedInput
  }

  export type ProdutoModelUncheckedUpdateManyWithoutUnidadeMedidaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    habilitado?: BoolFieldUpdateOperationsInput | boolean
    nomearquivofoto?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    quantidadeAtual?: IntFieldUpdateOperationsInput | number
    categoriaId?: IntFieldUpdateOperationsInput | number
  }

  export type OperacaoEstoqueDetalheCreateManyOperacaoEstoqueInput = {
    id?: number
    quantidade: number
    precoCusto: number
    produtoId: number
  }

  export type OperacaoEstoqueDetalheUpdateWithoutOperacaoEstoqueInput = {
    quantidade?: IntFieldUpdateOperationsInput | number
    precoCusto?: FloatFieldUpdateOperationsInput | number
    produto?: ProdutoModelUpdateOneRequiredWithoutOperacaoEstoqueDetalheNestedInput
  }

  export type OperacaoEstoqueDetalheUncheckedUpdateWithoutOperacaoEstoqueInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    precoCusto?: FloatFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
  }

  export type OperacaoEstoqueDetalheUncheckedUpdateManyWithoutOperacaoEstoqueInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantidade?: IntFieldUpdateOperationsInput | number
    precoCusto?: FloatFieldUpdateOperationsInput | number
    produtoId?: IntFieldUpdateOperationsInput | number
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