
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
 * Model address
 * 
 */
export type address = $Result.DefaultSelection<Prisma.$addressPayload>
/**
 * Model cart
 * 
 */
export type cart = $Result.DefaultSelection<Prisma.$cartPayload>
/**
 * Model categories
 * 
 */
export type categories = $Result.DefaultSelection<Prisma.$categoriesPayload>
/**
 * Model colors
 * 
 */
export type colors = $Result.DefaultSelection<Prisma.$colorsPayload>
/**
 * Model customer
 * 
 */
export type customer = $Result.DefaultSelection<Prisma.$customerPayload>
/**
 * Model otp
 * 
 */
export type otp = $Result.DefaultSelection<Prisma.$otpPayload>
/**
 * Model products
 * 
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>
/**
 * Model sizes
 * 
 */
export type sizes = $Result.DefaultSelection<Prisma.$sizesPayload>
/**
 * Model compare
 * 
 */
export type compare = $Result.DefaultSelection<Prisma.$comparePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Addresses
 * const addresses = await prisma.address.findMany()
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
   * // Fetch zero or more Addresses
   * const addresses = await prisma.address.findMany()
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
   * `prisma.address`: Exposes CRUD operations for the **address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.addressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cart`: Exposes CRUD operations for the **cart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.cart.findMany()
    * ```
    */
  get cart(): Prisma.cartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.colors`: Exposes CRUD operations for the **colors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Colors
    * const colors = await prisma.colors.findMany()
    * ```
    */
  get colors(): Prisma.colorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.customerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.otp`: Exposes CRUD operations for the **otp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Otps
    * const otps = await prisma.otp.findMany()
    * ```
    */
  get otp(): Prisma.otpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sizes`: Exposes CRUD operations for the **sizes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sizes
    * const sizes = await prisma.sizes.findMany()
    * ```
    */
  get sizes(): Prisma.sizesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.compare`: Exposes CRUD operations for the **compare** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Compares
    * const compares = await prisma.compare.findMany()
    * ```
    */
  get compare(): Prisma.compareDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    address: 'address',
    cart: 'cart',
    categories: 'categories',
    colors: 'colors',
    customer: 'customer',
    otp: 'otp',
    products: 'products',
    sizes: 'sizes',
    compare: 'compare'
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
      modelProps: "address" | "cart" | "categories" | "colors" | "customer" | "otp" | "products" | "sizes" | "compare"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      address: {
        payload: Prisma.$addressPayload<ExtArgs>
        fields: Prisma.addressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.addressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.addressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload>
          }
          findFirst: {
            args: Prisma.addressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.addressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload>
          }
          findMany: {
            args: Prisma.addressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload>[]
          }
          create: {
            args: Prisma.addressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload>
          }
          createMany: {
            args: Prisma.addressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.addressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload>[]
          }
          delete: {
            args: Prisma.addressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload>
          }
          update: {
            args: Prisma.addressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload>
          }
          deleteMany: {
            args: Prisma.addressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.addressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.addressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload>[]
          }
          upsert: {
            args: Prisma.addressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.addressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.addressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      cart: {
        payload: Prisma.$cartPayload<ExtArgs>
        fields: Prisma.cartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          findFirst: {
            args: Prisma.cartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          findMany: {
            args: Prisma.cartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>[]
          }
          create: {
            args: Prisma.cartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          createMany: {
            args: Prisma.cartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>[]
          }
          delete: {
            args: Prisma.cartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          update: {
            args: Prisma.cartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          deleteMany: {
            args: Prisma.cartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>[]
          }
          upsert: {
            args: Prisma.cartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          aggregate: {
            args: Prisma.CartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCart>
          }
          groupBy: {
            args: Prisma.cartGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartGroupByOutputType>[]
          }
          count: {
            args: Prisma.cartCountArgs<ExtArgs>
            result: $Utils.Optional<CartCountAggregateOutputType> | number
          }
        }
      }
      categories: {
        payload: Prisma.$categoriesPayload<ExtArgs>
        fields: Prisma.categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findFirst: {
            args: Prisma.categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findMany: {
            args: Prisma.categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          create: {
            args: Prisma.categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          createMany: {
            args: Prisma.categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          delete: {
            args: Prisma.categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          update: {
            args: Prisma.categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          deleteMany: {
            args: Prisma.categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          upsert: {
            args: Prisma.categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      colors: {
        payload: Prisma.$colorsPayload<ExtArgs>
        fields: Prisma.colorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.colorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.colorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colorsPayload>
          }
          findFirst: {
            args: Prisma.colorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.colorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colorsPayload>
          }
          findMany: {
            args: Prisma.colorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colorsPayload>[]
          }
          create: {
            args: Prisma.colorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colorsPayload>
          }
          createMany: {
            args: Prisma.colorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.colorsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colorsPayload>[]
          }
          delete: {
            args: Prisma.colorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colorsPayload>
          }
          update: {
            args: Prisma.colorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colorsPayload>
          }
          deleteMany: {
            args: Prisma.colorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.colorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.colorsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colorsPayload>[]
          }
          upsert: {
            args: Prisma.colorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$colorsPayload>
          }
          aggregate: {
            args: Prisma.ColorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateColors>
          }
          groupBy: {
            args: Prisma.colorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ColorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.colorsCountArgs<ExtArgs>
            result: $Utils.Optional<ColorsCountAggregateOutputType> | number
          }
        }
      }
      customer: {
        payload: Prisma.$customerPayload<ExtArgs>
        fields: Prisma.customerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.customerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.customerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          findFirst: {
            args: Prisma.customerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.customerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          findMany: {
            args: Prisma.customerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>[]
          }
          create: {
            args: Prisma.customerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          createMany: {
            args: Prisma.customerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.customerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>[]
          }
          delete: {
            args: Prisma.customerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          update: {
            args: Prisma.customerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          deleteMany: {
            args: Prisma.customerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.customerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.customerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>[]
          }
          upsert: {
            args: Prisma.customerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.customerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.customerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      otp: {
        payload: Prisma.$otpPayload<ExtArgs>
        fields: Prisma.otpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.otpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.otpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload>
          }
          findFirst: {
            args: Prisma.otpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.otpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload>
          }
          findMany: {
            args: Prisma.otpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload>[]
          }
          create: {
            args: Prisma.otpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload>
          }
          createMany: {
            args: Prisma.otpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.otpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload>[]
          }
          delete: {
            args: Prisma.otpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload>
          }
          update: {
            args: Prisma.otpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload>
          }
          deleteMany: {
            args: Prisma.otpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.otpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.otpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload>[]
          }
          upsert: {
            args: Prisma.otpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpPayload>
          }
          aggregate: {
            args: Prisma.OtpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtp>
          }
          groupBy: {
            args: Prisma.otpGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtpGroupByOutputType>[]
          }
          count: {
            args: Prisma.otpCountArgs<ExtArgs>
            result: $Utils.Optional<OtpCountAggregateOutputType> | number
          }
        }
      }
      products: {
        payload: Prisma.$productsPayload<ExtArgs>
        fields: Prisma.productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      sizes: {
        payload: Prisma.$sizesPayload<ExtArgs>
        fields: Prisma.sizesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sizesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sizesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sizesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sizesPayload>
          }
          findFirst: {
            args: Prisma.sizesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sizesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sizesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sizesPayload>
          }
          findMany: {
            args: Prisma.sizesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sizesPayload>[]
          }
          create: {
            args: Prisma.sizesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sizesPayload>
          }
          createMany: {
            args: Prisma.sizesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sizesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sizesPayload>[]
          }
          delete: {
            args: Prisma.sizesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sizesPayload>
          }
          update: {
            args: Prisma.sizesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sizesPayload>
          }
          deleteMany: {
            args: Prisma.sizesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sizesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sizesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sizesPayload>[]
          }
          upsert: {
            args: Prisma.sizesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sizesPayload>
          }
          aggregate: {
            args: Prisma.SizesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSizes>
          }
          groupBy: {
            args: Prisma.sizesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SizesGroupByOutputType>[]
          }
          count: {
            args: Prisma.sizesCountArgs<ExtArgs>
            result: $Utils.Optional<SizesCountAggregateOutputType> | number
          }
        }
      }
      compare: {
        payload: Prisma.$comparePayload<ExtArgs>
        fields: Prisma.compareFieldRefs
        operations: {
          findUnique: {
            args: Prisma.compareFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comparePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.compareFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comparePayload>
          }
          findFirst: {
            args: Prisma.compareFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comparePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.compareFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comparePayload>
          }
          findMany: {
            args: Prisma.compareFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comparePayload>[]
          }
          create: {
            args: Prisma.compareCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comparePayload>
          }
          createMany: {
            args: Prisma.compareCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.compareCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comparePayload>[]
          }
          delete: {
            args: Prisma.compareDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comparePayload>
          }
          update: {
            args: Prisma.compareUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comparePayload>
          }
          deleteMany: {
            args: Prisma.compareDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.compareUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.compareUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comparePayload>[]
          }
          upsert: {
            args: Prisma.compareUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comparePayload>
          }
          aggregate: {
            args: Prisma.CompareAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompare>
          }
          groupBy: {
            args: Prisma.compareGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompareGroupByOutputType>[]
          }
          count: {
            args: Prisma.compareCountArgs<ExtArgs>
            result: $Utils.Optional<CompareCountAggregateOutputType> | number
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
    address?: addressOmit
    cart?: cartOmit
    categories?: categoriesOmit
    colors?: colorsOmit
    customer?: customerOmit
    otp?: otpOmit
    products?: productsOmit
    sizes?: sizesOmit
    compare?: compareOmit
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
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    address: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | CustomerCountOutputTypeCountAddressArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountAddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: addressWhereInput
  }


  /**
   * Models
   */

  /**
   * Model address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    id: number | null
    postal_code: number | null
  }

  export type AddressSumAggregateOutputType = {
    id: number | null
    postal_code: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: number | null
    customer_id: string | null
    postal_code: number | null
    province: string | null
    city: string | null
    address: string | null
    detailed_address: string | null
    customer_name: string | null
    customer_number: string | null
  }

  export type AddressMaxAggregateOutputType = {
    id: number | null
    customer_id: string | null
    postal_code: number | null
    province: string | null
    city: string | null
    address: string | null
    detailed_address: string | null
    customer_name: string | null
    customer_number: string | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    customer_id: number
    postal_code: number
    province: number
    city: number
    address: number
    detailed_address: number
    customer_name: number
    customer_number: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    id?: true
    postal_code?: true
  }

  export type AddressSumAggregateInputType = {
    id?: true
    postal_code?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    customer_id?: true
    postal_code?: true
    province?: true
    city?: true
    address?: true
    detailed_address?: true
    customer_name?: true
    customer_number?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    customer_id?: true
    postal_code?: true
    province?: true
    city?: true
    address?: true
    detailed_address?: true
    customer_name?: true
    customer_number?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    customer_id?: true
    postal_code?: true
    province?: true
    city?: true
    address?: true
    detailed_address?: true
    customer_name?: true
    customer_number?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which address to aggregate.
     */
    where?: addressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressOrderByWithRelationInput | addressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: addressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type addressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: addressWhereInput
    orderBy?: addressOrderByWithAggregationInput | addressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: addressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: number
    customer_id: string
    postal_code: number
    province: string
    city: string
    address: string
    detailed_address: string
    customer_name: string
    customer_number: string
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends addressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type addressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_id?: boolean
    postal_code?: boolean
    province?: boolean
    city?: boolean
    address?: boolean
    detailed_address?: boolean
    customer_name?: boolean
    customer_number?: boolean
    customer?: boolean | customerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type addressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_id?: boolean
    postal_code?: boolean
    province?: boolean
    city?: boolean
    address?: boolean
    detailed_address?: boolean
    customer_name?: boolean
    customer_number?: boolean
    customer?: boolean | customerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type addressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_id?: boolean
    postal_code?: boolean
    province?: boolean
    city?: boolean
    address?: boolean
    detailed_address?: boolean
    customer_name?: boolean
    customer_number?: boolean
    customer?: boolean | customerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type addressSelectScalar = {
    id?: boolean
    customer_id?: boolean
    postal_code?: boolean
    province?: boolean
    city?: boolean
    address?: boolean
    detailed_address?: boolean
    customer_name?: boolean
    customer_number?: boolean
  }

  export type addressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customer_id" | "postal_code" | "province" | "city" | "address" | "detailed_address" | "customer_name" | "customer_number", ExtArgs["result"]["address"]>
  export type addressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customerDefaultArgs<ExtArgs>
  }
  export type addressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customerDefaultArgs<ExtArgs>
  }
  export type addressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | customerDefaultArgs<ExtArgs>
  }

  export type $addressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "address"
    objects: {
      customer: Prisma.$customerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      customer_id: string
      postal_code: number
      province: string
      city: string
      address: string
      detailed_address: string
      customer_name: string
      customer_number: string
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type addressGetPayload<S extends boolean | null | undefined | addressDefaultArgs> = $Result.GetResult<Prisma.$addressPayload, S>

  type addressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<addressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface addressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['address'], meta: { name: 'address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {addressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends addressFindUniqueArgs>(args: SelectSubset<T, addressFindUniqueArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {addressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends addressFindUniqueOrThrowArgs>(args: SelectSubset<T, addressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends addressFindFirstArgs>(args?: SelectSubset<T, addressFindFirstArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends addressFindFirstOrThrowArgs>(args?: SelectSubset<T, addressFindFirstOrThrowArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends addressFindManyArgs>(args?: SelectSubset<T, addressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {addressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends addressCreateArgs>(args: SelectSubset<T, addressCreateArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {addressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends addressCreateManyArgs>(args?: SelectSubset<T, addressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {addressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends addressCreateManyAndReturnArgs>(args?: SelectSubset<T, addressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address.
     * @param {addressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends addressDeleteArgs>(args: SelectSubset<T, addressDeleteArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {addressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends addressUpdateArgs>(args: SelectSubset<T, addressUpdateArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {addressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends addressDeleteManyArgs>(args?: SelectSubset<T, addressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends addressUpdateManyArgs>(args: SelectSubset<T, addressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {addressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.updateManyAndReturn({
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
    updateManyAndReturn<T extends addressUpdateManyAndReturnArgs>(args: SelectSubset<T, addressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address.
     * @param {addressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends addressUpsertArgs>(args: SelectSubset<T, addressUpsertArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends addressCountArgs>(
      args?: Subset<T, addressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressGroupByArgs} args - Group by arguments.
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
      T extends addressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: addressGroupByArgs['orderBy'] }
        : { orderBy?: addressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, addressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the address model
   */
  readonly fields: addressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__addressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends customerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, customerDefaultArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the address model
   */
  interface addressFieldRefs {
    readonly id: FieldRef<"address", 'Int'>
    readonly customer_id: FieldRef<"address", 'String'>
    readonly postal_code: FieldRef<"address", 'Int'>
    readonly province: FieldRef<"address", 'String'>
    readonly city: FieldRef<"address", 'String'>
    readonly address: FieldRef<"address", 'String'>
    readonly detailed_address: FieldRef<"address", 'String'>
    readonly customer_name: FieldRef<"address", 'String'>
    readonly customer_number: FieldRef<"address", 'String'>
  }
    

  // Custom InputTypes
  /**
   * address findUnique
   */
  export type addressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * Filter, which address to fetch.
     */
    where: addressWhereUniqueInput
  }

  /**
   * address findUniqueOrThrow
   */
  export type addressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * Filter, which address to fetch.
     */
    where: addressWhereUniqueInput
  }

  /**
   * address findFirst
   */
  export type addressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * Filter, which address to fetch.
     */
    where?: addressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressOrderByWithRelationInput | addressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for addresses.
     */
    cursor?: addressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * address findFirstOrThrow
   */
  export type addressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * Filter, which address to fetch.
     */
    where?: addressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressOrderByWithRelationInput | addressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for addresses.
     */
    cursor?: addressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * address findMany
   */
  export type addressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * Filter, which addresses to fetch.
     */
    where?: addressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressOrderByWithRelationInput | addressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing addresses.
     */
    cursor?: addressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * address create
   */
  export type addressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * The data needed to create a address.
     */
    data: XOR<addressCreateInput, addressUncheckedCreateInput>
  }

  /**
   * address createMany
   */
  export type addressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many addresses.
     */
    data: addressCreateManyInput | addressCreateManyInput[]
  }

  /**
   * address createManyAndReturn
   */
  export type addressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * The data used to create many addresses.
     */
    data: addressCreateManyInput | addressCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * address update
   */
  export type addressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * The data needed to update a address.
     */
    data: XOR<addressUpdateInput, addressUncheckedUpdateInput>
    /**
     * Choose, which address to update.
     */
    where: addressWhereUniqueInput
  }

  /**
   * address updateMany
   */
  export type addressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update addresses.
     */
    data: XOR<addressUpdateManyMutationInput, addressUncheckedUpdateManyInput>
    /**
     * Filter which addresses to update
     */
    where?: addressWhereInput
    /**
     * Limit how many addresses to update.
     */
    limit?: number
  }

  /**
   * address updateManyAndReturn
   */
  export type addressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * The data used to update addresses.
     */
    data: XOR<addressUpdateManyMutationInput, addressUncheckedUpdateManyInput>
    /**
     * Filter which addresses to update
     */
    where?: addressWhereInput
    /**
     * Limit how many addresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * address upsert
   */
  export type addressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * The filter to search for the address to update in case it exists.
     */
    where: addressWhereUniqueInput
    /**
     * In case the address found by the `where` argument doesn't exist, create a new address with this data.
     */
    create: XOR<addressCreateInput, addressUncheckedCreateInput>
    /**
     * In case the address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<addressUpdateInput, addressUncheckedUpdateInput>
  }

  /**
   * address delete
   */
  export type addressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * Filter which address to delete.
     */
    where: addressWhereUniqueInput
  }

  /**
   * address deleteMany
   */
  export type addressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which addresses to delete
     */
    where?: addressWhereInput
    /**
     * Limit how many addresses to delete.
     */
    limit?: number
  }

  /**
   * address without action
   */
  export type addressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
  }


  /**
   * Model cart
   */

  export type AggregateCart = {
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  export type CartAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
  }

  export type CartSumAggregateOutputType = {
    id: number | null
    quantity: number | null
  }

  export type CartMinAggregateOutputType = {
    id: number | null
    quantity: number | null
    customer_id: string | null
    product_id: string | null
    color: string | null
    size: string | null
  }

  export type CartMaxAggregateOutputType = {
    id: number | null
    quantity: number | null
    customer_id: string | null
    product_id: string | null
    color: string | null
    size: string | null
  }

  export type CartCountAggregateOutputType = {
    id: number
    quantity: number
    customer_id: number
    product_id: number
    color: number
    size: number
    _all: number
  }


  export type CartAvgAggregateInputType = {
    id?: true
    quantity?: true
  }

  export type CartSumAggregateInputType = {
    id?: true
    quantity?: true
  }

  export type CartMinAggregateInputType = {
    id?: true
    quantity?: true
    customer_id?: true
    product_id?: true
    color?: true
    size?: true
  }

  export type CartMaxAggregateInputType = {
    id?: true
    quantity?: true
    customer_id?: true
    product_id?: true
    color?: true
    size?: true
  }

  export type CartCountAggregateInputType = {
    id?: true
    quantity?: true
    customer_id?: true
    product_id?: true
    color?: true
    size?: true
    _all?: true
  }

  export type CartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cart to aggregate.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned carts
    **/
    _count?: true | CartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartMaxAggregateInputType
  }

  export type GetCartAggregateType<T extends CartAggregateArgs> = {
        [P in keyof T & keyof AggregateCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart[P]>
      : GetScalarType<T[P], AggregateCart[P]>
  }




  export type cartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartWhereInput
    orderBy?: cartOrderByWithAggregationInput | cartOrderByWithAggregationInput[]
    by: CartScalarFieldEnum[] | CartScalarFieldEnum
    having?: cartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartCountAggregateInputType | true
    _avg?: CartAvgAggregateInputType
    _sum?: CartSumAggregateInputType
    _min?: CartMinAggregateInputType
    _max?: CartMaxAggregateInputType
  }

  export type CartGroupByOutputType = {
    id: number
    quantity: number
    customer_id: string
    product_id: string
    color: string
    size: string
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  type GetCartGroupByPayload<T extends cartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartGroupByOutputType[P]>
            : GetScalarType<T[P], CartGroupByOutputType[P]>
        }
      >
    >


  export type cartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    customer_id?: boolean
    product_id?: boolean
    color?: boolean
    size?: boolean
  }, ExtArgs["result"]["cart"]>

  export type cartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    customer_id?: boolean
    product_id?: boolean
    color?: boolean
    size?: boolean
  }, ExtArgs["result"]["cart"]>

  export type cartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    customer_id?: boolean
    product_id?: boolean
    color?: boolean
    size?: boolean
  }, ExtArgs["result"]["cart"]>

  export type cartSelectScalar = {
    id?: boolean
    quantity?: boolean
    customer_id?: boolean
    product_id?: boolean
    color?: boolean
    size?: boolean
  }

  export type cartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantity" | "customer_id" | "product_id" | "color" | "size", ExtArgs["result"]["cart"]>

  export type $cartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cart"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quantity: number
      customer_id: string
      product_id: string
      color: string
      size: string
    }, ExtArgs["result"]["cart"]>
    composites: {}
  }

  type cartGetPayload<S extends boolean | null | undefined | cartDefaultArgs> = $Result.GetResult<Prisma.$cartPayload, S>

  type cartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartCountAggregateInputType | true
    }

  export interface cartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cart'], meta: { name: 'cart' } }
    /**
     * Find zero or one Cart that matches the filter.
     * @param {cartFindUniqueArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cartFindUniqueArgs>(args: SelectSubset<T, cartFindUniqueArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cartFindUniqueOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cartFindUniqueOrThrowArgs>(args: SelectSubset<T, cartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartFindFirstArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cartFindFirstArgs>(args?: SelectSubset<T, cartFindFirstArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartFindFirstOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cartFindFirstOrThrowArgs>(args?: SelectSubset<T, cartFindFirstOrThrowArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.cart.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.cart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartWithIdOnly = await prisma.cart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cartFindManyArgs>(args?: SelectSubset<T, cartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cart.
     * @param {cartCreateArgs} args - Arguments to create a Cart.
     * @example
     * // Create one Cart
     * const Cart = await prisma.cart.create({
     *   data: {
     *     // ... data to create a Cart
     *   }
     * })
     * 
     */
    create<T extends cartCreateArgs>(args: SelectSubset<T, cartCreateArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carts.
     * @param {cartCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cartCreateManyArgs>(args?: SelectSubset<T, cartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carts and returns the data saved in the database.
     * @param {cartCreateManyAndReturnArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carts and only return the `id`
     * const cartWithIdOnly = await prisma.cart.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cartCreateManyAndReturnArgs>(args?: SelectSubset<T, cartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cart.
     * @param {cartDeleteArgs} args - Arguments to delete one Cart.
     * @example
     * // Delete one Cart
     * const Cart = await prisma.cart.delete({
     *   where: {
     *     // ... filter to delete one Cart
     *   }
     * })
     * 
     */
    delete<T extends cartDeleteArgs>(args: SelectSubset<T, cartDeleteArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cart.
     * @param {cartUpdateArgs} args - Arguments to update one Cart.
     * @example
     * // Update one Cart
     * const cart = await prisma.cart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cartUpdateArgs>(args: SelectSubset<T, cartUpdateArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carts.
     * @param {cartDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.cart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cartDeleteManyArgs>(args?: SelectSubset<T, cartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cartUpdateManyArgs>(args: SelectSubset<T, cartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts and returns the data updated in the database.
     * @param {cartUpdateManyAndReturnArgs} args - Arguments to update many Carts.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carts and only return the `id`
     * const cartWithIdOnly = await prisma.cart.updateManyAndReturn({
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
    updateManyAndReturn<T extends cartUpdateManyAndReturnArgs>(args: SelectSubset<T, cartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cart.
     * @param {cartUpsertArgs} args - Arguments to update or create a Cart.
     * @example
     * // Update or create a Cart
     * const cart = await prisma.cart.upsert({
     *   create: {
     *     // ... data to create a Cart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart we want to update
     *   }
     * })
     */
    upsert<T extends cartUpsertArgs>(args: SelectSubset<T, cartUpsertArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.cart.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends cartCountArgs>(
      args?: Subset<T, cartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartAggregateArgs>(args: Subset<T, CartAggregateArgs>): Prisma.PrismaPromise<GetCartAggregateType<T>>

    /**
     * Group by Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartGroupByArgs} args - Group by arguments.
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
      T extends cartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cartGroupByArgs['orderBy'] }
        : { orderBy?: cartGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cart model
   */
  readonly fields: cartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the cart model
   */
  interface cartFieldRefs {
    readonly id: FieldRef<"cart", 'Int'>
    readonly quantity: FieldRef<"cart", 'Int'>
    readonly customer_id: FieldRef<"cart", 'String'>
    readonly product_id: FieldRef<"cart", 'String'>
    readonly color: FieldRef<"cart", 'String'>
    readonly size: FieldRef<"cart", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cart findUnique
   */
  export type cartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where: cartWhereUniqueInput
  }

  /**
   * cart findUniqueOrThrow
   */
  export type cartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where: cartWhereUniqueInput
  }

  /**
   * cart findFirst
   */
  export type cartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carts.
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * cart findFirstOrThrow
   */
  export type cartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carts.
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * cart findMany
   */
  export type cartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing carts.
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * cart create
   */
  export type cartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * The data needed to create a cart.
     */
    data: XOR<cartCreateInput, cartUncheckedCreateInput>
  }

  /**
   * cart createMany
   */
  export type cartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many carts.
     */
    data: cartCreateManyInput | cartCreateManyInput[]
  }

  /**
   * cart createManyAndReturn
   */
  export type cartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * The data used to create many carts.
     */
    data: cartCreateManyInput | cartCreateManyInput[]
  }

  /**
   * cart update
   */
  export type cartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * The data needed to update a cart.
     */
    data: XOR<cartUpdateInput, cartUncheckedUpdateInput>
    /**
     * Choose, which cart to update.
     */
    where: cartWhereUniqueInput
  }

  /**
   * cart updateMany
   */
  export type cartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update carts.
     */
    data: XOR<cartUpdateManyMutationInput, cartUncheckedUpdateManyInput>
    /**
     * Filter which carts to update
     */
    where?: cartWhereInput
    /**
     * Limit how many carts to update.
     */
    limit?: number
  }

  /**
   * cart updateManyAndReturn
   */
  export type cartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * The data used to update carts.
     */
    data: XOR<cartUpdateManyMutationInput, cartUncheckedUpdateManyInput>
    /**
     * Filter which carts to update
     */
    where?: cartWhereInput
    /**
     * Limit how many carts to update.
     */
    limit?: number
  }

  /**
   * cart upsert
   */
  export type cartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * The filter to search for the cart to update in case it exists.
     */
    where: cartWhereUniqueInput
    /**
     * In case the cart found by the `where` argument doesn't exist, create a new cart with this data.
     */
    create: XOR<cartCreateInput, cartUncheckedCreateInput>
    /**
     * In case the cart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cartUpdateInput, cartUncheckedUpdateInput>
  }

  /**
   * cart delete
   */
  export type cartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Filter which cart to delete.
     */
    where: cartWhereUniqueInput
  }

  /**
   * cart deleteMany
   */
  export type cartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carts to delete
     */
    where?: cartWhereInput
    /**
     * Limit how many carts to delete.
     */
    limit?: number
  }

  /**
   * cart without action
   */
  export type cartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
  }


  /**
   * Model categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
    parent_id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: number | null
    parent_id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
    url: string | null
    parent_id: number | null
    image: string | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    url: string | null
    parent_id: number | null
    image: string | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    name: number
    url: number
    parent_id: number
    image: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
    parent_id?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
    parent_id?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    parent_id?: true
    image?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    parent_id?: true
    image?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    parent_id?: true
    image?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to aggregate.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithAggregationInput | categoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: number
    name: string
    url: string
    parent_id: number | null
    image: string | null
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    parent_id?: boolean
    image?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    parent_id?: boolean
    image?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    parent_id?: boolean
    image?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectScalar = {
    id?: boolean
    name?: boolean
    url?: boolean
    parent_id?: boolean
    image?: boolean
  }

  export type categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "url" | "parent_id" | "image", ExtArgs["result"]["categories"]>

  export type $categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categories"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      url: string
      parent_id: number | null
      image: string | null
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = $Result.GetResult<Prisma.$categoriesPayload, S>

  type categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categories'], meta: { name: 'categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriesFindUniqueArgs>(args: SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriesFindFirstArgs>(args?: SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoriesFindManyArgs>(args?: SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends categoriesCreateArgs>(args: SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriesCreateManyArgs>(args?: SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends categoriesDeleteArgs>(args: SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriesUpdateArgs>(args: SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriesDeleteManyArgs>(args?: SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriesUpdateManyArgs>(args: SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.updateManyAndReturn({
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
    updateManyAndReturn<T extends categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends categoriesUpsertArgs>(args: SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesGroupByArgs} args - Group by arguments.
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
      T extends categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriesGroupByArgs['orderBy'] }
        : { orderBy?: categoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categories model
   */
  readonly fields: categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the categories model
   */
  interface categoriesFieldRefs {
    readonly id: FieldRef<"categories", 'Int'>
    readonly name: FieldRef<"categories", 'String'>
    readonly url: FieldRef<"categories", 'String'>
    readonly parent_id: FieldRef<"categories", 'Int'>
    readonly image: FieldRef<"categories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findUniqueOrThrow
   */
  export type categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findFirstOrThrow
   */
  export type categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findMany
   */
  export type categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories create
   */
  export type categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data needed to create a categories.
     */
    data: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
  }

  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
  }

  /**
   * categories createManyAndReturn
   */
  export type categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
  }

  /**
   * categories update
   */
  export type categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data needed to update a categories.
     */
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
    /**
     * Choose, which categories to update.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories updateManyAndReturn
   */
  export type categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories upsert
   */
  export type categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The filter to search for the categories to update in case it exists.
     */
    where: categoriesWhereUniqueInput
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     */
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
  }

  /**
   * categories delete
   */
  export type categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Filter which categories to delete.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * categories without action
   */
  export type categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
  }


  /**
   * Model colors
   */

  export type AggregateColors = {
    _count: ColorsCountAggregateOutputType | null
    _avg: ColorsAvgAggregateOutputType | null
    _sum: ColorsSumAggregateOutputType | null
    _min: ColorsMinAggregateOutputType | null
    _max: ColorsMaxAggregateOutputType | null
  }

  export type ColorsAvgAggregateOutputType = {
    id: number | null
  }

  export type ColorsSumAggregateOutputType = {
    id: number | null
  }

  export type ColorsMinAggregateOutputType = {
    id: number | null
    color: string | null
  }

  export type ColorsMaxAggregateOutputType = {
    id: number | null
    color: string | null
  }

  export type ColorsCountAggregateOutputType = {
    id: number
    color: number
    _all: number
  }


  export type ColorsAvgAggregateInputType = {
    id?: true
  }

  export type ColorsSumAggregateInputType = {
    id?: true
  }

  export type ColorsMinAggregateInputType = {
    id?: true
    color?: true
  }

  export type ColorsMaxAggregateInputType = {
    id?: true
    color?: true
  }

  export type ColorsCountAggregateInputType = {
    id?: true
    color?: true
    _all?: true
  }

  export type ColorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which colors to aggregate.
     */
    where?: colorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of colors to fetch.
     */
    orderBy?: colorsOrderByWithRelationInput | colorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: colorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` colors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` colors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned colors
    **/
    _count?: true | ColorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ColorsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ColorsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ColorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ColorsMaxAggregateInputType
  }

  export type GetColorsAggregateType<T extends ColorsAggregateArgs> = {
        [P in keyof T & keyof AggregateColors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateColors[P]>
      : GetScalarType<T[P], AggregateColors[P]>
  }




  export type colorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: colorsWhereInput
    orderBy?: colorsOrderByWithAggregationInput | colorsOrderByWithAggregationInput[]
    by: ColorsScalarFieldEnum[] | ColorsScalarFieldEnum
    having?: colorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ColorsCountAggregateInputType | true
    _avg?: ColorsAvgAggregateInputType
    _sum?: ColorsSumAggregateInputType
    _min?: ColorsMinAggregateInputType
    _max?: ColorsMaxAggregateInputType
  }

  export type ColorsGroupByOutputType = {
    id: number
    color: string
    _count: ColorsCountAggregateOutputType | null
    _avg: ColorsAvgAggregateOutputType | null
    _sum: ColorsSumAggregateOutputType | null
    _min: ColorsMinAggregateOutputType | null
    _max: ColorsMaxAggregateOutputType | null
  }

  type GetColorsGroupByPayload<T extends colorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ColorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ColorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ColorsGroupByOutputType[P]>
            : GetScalarType<T[P], ColorsGroupByOutputType[P]>
        }
      >
    >


  export type colorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    color?: boolean
  }, ExtArgs["result"]["colors"]>

  export type colorsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    color?: boolean
  }, ExtArgs["result"]["colors"]>

  export type colorsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    color?: boolean
  }, ExtArgs["result"]["colors"]>

  export type colorsSelectScalar = {
    id?: boolean
    color?: boolean
  }

  export type colorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "color", ExtArgs["result"]["colors"]>

  export type $colorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "colors"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      color: string
    }, ExtArgs["result"]["colors"]>
    composites: {}
  }

  type colorsGetPayload<S extends boolean | null | undefined | colorsDefaultArgs> = $Result.GetResult<Prisma.$colorsPayload, S>

  type colorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<colorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ColorsCountAggregateInputType | true
    }

  export interface colorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['colors'], meta: { name: 'colors' } }
    /**
     * Find zero or one Colors that matches the filter.
     * @param {colorsFindUniqueArgs} args - Arguments to find a Colors
     * @example
     * // Get one Colors
     * const colors = await prisma.colors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends colorsFindUniqueArgs>(args: SelectSubset<T, colorsFindUniqueArgs<ExtArgs>>): Prisma__colorsClient<$Result.GetResult<Prisma.$colorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Colors that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {colorsFindUniqueOrThrowArgs} args - Arguments to find a Colors
     * @example
     * // Get one Colors
     * const colors = await prisma.colors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends colorsFindUniqueOrThrowArgs>(args: SelectSubset<T, colorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__colorsClient<$Result.GetResult<Prisma.$colorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Colors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {colorsFindFirstArgs} args - Arguments to find a Colors
     * @example
     * // Get one Colors
     * const colors = await prisma.colors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends colorsFindFirstArgs>(args?: SelectSubset<T, colorsFindFirstArgs<ExtArgs>>): Prisma__colorsClient<$Result.GetResult<Prisma.$colorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Colors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {colorsFindFirstOrThrowArgs} args - Arguments to find a Colors
     * @example
     * // Get one Colors
     * const colors = await prisma.colors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends colorsFindFirstOrThrowArgs>(args?: SelectSubset<T, colorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__colorsClient<$Result.GetResult<Prisma.$colorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Colors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {colorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Colors
     * const colors = await prisma.colors.findMany()
     * 
     * // Get first 10 Colors
     * const colors = await prisma.colors.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const colorsWithIdOnly = await prisma.colors.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends colorsFindManyArgs>(args?: SelectSubset<T, colorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$colorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Colors.
     * @param {colorsCreateArgs} args - Arguments to create a Colors.
     * @example
     * // Create one Colors
     * const Colors = await prisma.colors.create({
     *   data: {
     *     // ... data to create a Colors
     *   }
     * })
     * 
     */
    create<T extends colorsCreateArgs>(args: SelectSubset<T, colorsCreateArgs<ExtArgs>>): Prisma__colorsClient<$Result.GetResult<Prisma.$colorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Colors.
     * @param {colorsCreateManyArgs} args - Arguments to create many Colors.
     * @example
     * // Create many Colors
     * const colors = await prisma.colors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends colorsCreateManyArgs>(args?: SelectSubset<T, colorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Colors and returns the data saved in the database.
     * @param {colorsCreateManyAndReturnArgs} args - Arguments to create many Colors.
     * @example
     * // Create many Colors
     * const colors = await prisma.colors.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Colors and only return the `id`
     * const colorsWithIdOnly = await prisma.colors.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends colorsCreateManyAndReturnArgs>(args?: SelectSubset<T, colorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$colorsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Colors.
     * @param {colorsDeleteArgs} args - Arguments to delete one Colors.
     * @example
     * // Delete one Colors
     * const Colors = await prisma.colors.delete({
     *   where: {
     *     // ... filter to delete one Colors
     *   }
     * })
     * 
     */
    delete<T extends colorsDeleteArgs>(args: SelectSubset<T, colorsDeleteArgs<ExtArgs>>): Prisma__colorsClient<$Result.GetResult<Prisma.$colorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Colors.
     * @param {colorsUpdateArgs} args - Arguments to update one Colors.
     * @example
     * // Update one Colors
     * const colors = await prisma.colors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends colorsUpdateArgs>(args: SelectSubset<T, colorsUpdateArgs<ExtArgs>>): Prisma__colorsClient<$Result.GetResult<Prisma.$colorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Colors.
     * @param {colorsDeleteManyArgs} args - Arguments to filter Colors to delete.
     * @example
     * // Delete a few Colors
     * const { count } = await prisma.colors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends colorsDeleteManyArgs>(args?: SelectSubset<T, colorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {colorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Colors
     * const colors = await prisma.colors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends colorsUpdateManyArgs>(args: SelectSubset<T, colorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colors and returns the data updated in the database.
     * @param {colorsUpdateManyAndReturnArgs} args - Arguments to update many Colors.
     * @example
     * // Update many Colors
     * const colors = await prisma.colors.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Colors and only return the `id`
     * const colorsWithIdOnly = await prisma.colors.updateManyAndReturn({
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
    updateManyAndReturn<T extends colorsUpdateManyAndReturnArgs>(args: SelectSubset<T, colorsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$colorsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Colors.
     * @param {colorsUpsertArgs} args - Arguments to update or create a Colors.
     * @example
     * // Update or create a Colors
     * const colors = await prisma.colors.upsert({
     *   create: {
     *     // ... data to create a Colors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Colors we want to update
     *   }
     * })
     */
    upsert<T extends colorsUpsertArgs>(args: SelectSubset<T, colorsUpsertArgs<ExtArgs>>): Prisma__colorsClient<$Result.GetResult<Prisma.$colorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Colors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {colorsCountArgs} args - Arguments to filter Colors to count.
     * @example
     * // Count the number of Colors
     * const count = await prisma.colors.count({
     *   where: {
     *     // ... the filter for the Colors we want to count
     *   }
     * })
    **/
    count<T extends colorsCountArgs>(
      args?: Subset<T, colorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ColorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Colors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ColorsAggregateArgs>(args: Subset<T, ColorsAggregateArgs>): Prisma.PrismaPromise<GetColorsAggregateType<T>>

    /**
     * Group by Colors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {colorsGroupByArgs} args - Group by arguments.
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
      T extends colorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: colorsGroupByArgs['orderBy'] }
        : { orderBy?: colorsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, colorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetColorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the colors model
   */
  readonly fields: colorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for colors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__colorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the colors model
   */
  interface colorsFieldRefs {
    readonly id: FieldRef<"colors", 'Int'>
    readonly color: FieldRef<"colors", 'String'>
  }
    

  // Custom InputTypes
  /**
   * colors findUnique
   */
  export type colorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colors
     */
    select?: colorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the colors
     */
    omit?: colorsOmit<ExtArgs> | null
    /**
     * Filter, which colors to fetch.
     */
    where: colorsWhereUniqueInput
  }

  /**
   * colors findUniqueOrThrow
   */
  export type colorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colors
     */
    select?: colorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the colors
     */
    omit?: colorsOmit<ExtArgs> | null
    /**
     * Filter, which colors to fetch.
     */
    where: colorsWhereUniqueInput
  }

  /**
   * colors findFirst
   */
  export type colorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colors
     */
    select?: colorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the colors
     */
    omit?: colorsOmit<ExtArgs> | null
    /**
     * Filter, which colors to fetch.
     */
    where?: colorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of colors to fetch.
     */
    orderBy?: colorsOrderByWithRelationInput | colorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for colors.
     */
    cursor?: colorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` colors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` colors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of colors.
     */
    distinct?: ColorsScalarFieldEnum | ColorsScalarFieldEnum[]
  }

  /**
   * colors findFirstOrThrow
   */
  export type colorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colors
     */
    select?: colorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the colors
     */
    omit?: colorsOmit<ExtArgs> | null
    /**
     * Filter, which colors to fetch.
     */
    where?: colorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of colors to fetch.
     */
    orderBy?: colorsOrderByWithRelationInput | colorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for colors.
     */
    cursor?: colorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` colors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` colors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of colors.
     */
    distinct?: ColorsScalarFieldEnum | ColorsScalarFieldEnum[]
  }

  /**
   * colors findMany
   */
  export type colorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colors
     */
    select?: colorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the colors
     */
    omit?: colorsOmit<ExtArgs> | null
    /**
     * Filter, which colors to fetch.
     */
    where?: colorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of colors to fetch.
     */
    orderBy?: colorsOrderByWithRelationInput | colorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing colors.
     */
    cursor?: colorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` colors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` colors.
     */
    skip?: number
    distinct?: ColorsScalarFieldEnum | ColorsScalarFieldEnum[]
  }

  /**
   * colors create
   */
  export type colorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colors
     */
    select?: colorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the colors
     */
    omit?: colorsOmit<ExtArgs> | null
    /**
     * The data needed to create a colors.
     */
    data: XOR<colorsCreateInput, colorsUncheckedCreateInput>
  }

  /**
   * colors createMany
   */
  export type colorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many colors.
     */
    data: colorsCreateManyInput | colorsCreateManyInput[]
  }

  /**
   * colors createManyAndReturn
   */
  export type colorsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colors
     */
    select?: colorsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the colors
     */
    omit?: colorsOmit<ExtArgs> | null
    /**
     * The data used to create many colors.
     */
    data: colorsCreateManyInput | colorsCreateManyInput[]
  }

  /**
   * colors update
   */
  export type colorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colors
     */
    select?: colorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the colors
     */
    omit?: colorsOmit<ExtArgs> | null
    /**
     * The data needed to update a colors.
     */
    data: XOR<colorsUpdateInput, colorsUncheckedUpdateInput>
    /**
     * Choose, which colors to update.
     */
    where: colorsWhereUniqueInput
  }

  /**
   * colors updateMany
   */
  export type colorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update colors.
     */
    data: XOR<colorsUpdateManyMutationInput, colorsUncheckedUpdateManyInput>
    /**
     * Filter which colors to update
     */
    where?: colorsWhereInput
    /**
     * Limit how many colors to update.
     */
    limit?: number
  }

  /**
   * colors updateManyAndReturn
   */
  export type colorsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colors
     */
    select?: colorsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the colors
     */
    omit?: colorsOmit<ExtArgs> | null
    /**
     * The data used to update colors.
     */
    data: XOR<colorsUpdateManyMutationInput, colorsUncheckedUpdateManyInput>
    /**
     * Filter which colors to update
     */
    where?: colorsWhereInput
    /**
     * Limit how many colors to update.
     */
    limit?: number
  }

  /**
   * colors upsert
   */
  export type colorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colors
     */
    select?: colorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the colors
     */
    omit?: colorsOmit<ExtArgs> | null
    /**
     * The filter to search for the colors to update in case it exists.
     */
    where: colorsWhereUniqueInput
    /**
     * In case the colors found by the `where` argument doesn't exist, create a new colors with this data.
     */
    create: XOR<colorsCreateInput, colorsUncheckedCreateInput>
    /**
     * In case the colors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<colorsUpdateInput, colorsUncheckedUpdateInput>
  }

  /**
   * colors delete
   */
  export type colorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colors
     */
    select?: colorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the colors
     */
    omit?: colorsOmit<ExtArgs> | null
    /**
     * Filter which colors to delete.
     */
    where: colorsWhereUniqueInput
  }

  /**
   * colors deleteMany
   */
  export type colorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which colors to delete
     */
    where?: colorsWhereInput
    /**
     * Limit how many colors to delete.
     */
    limit?: number
  }

  /**
   * colors without action
   */
  export type colorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the colors
     */
    select?: colorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the colors
     */
    omit?: colorsOmit<ExtArgs> | null
  }


  /**
   * Model customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    name: string | null
    family: string | null
    number: string | null
    email: string | null
    geust: boolean | null
    created_at: Date | null
    created_at_fa: string | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    family: string | null
    number: string | null
    email: string | null
    geust: boolean | null
    created_at: Date | null
    created_at_fa: string | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    family: number
    number: number
    email: number
    geust: number
    created_at: number
    created_at_fa: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    family?: true
    number?: true
    email?: true
    geust?: true
    created_at?: true
    created_at_fa?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    family?: true
    number?: true
    email?: true
    geust?: true
    created_at?: true
    created_at_fa?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    family?: true
    number?: true
    email?: true
    geust?: true
    created_at?: true
    created_at_fa?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customer to aggregate.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type customerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customerWhereInput
    orderBy?: customerOrderByWithAggregationInput | customerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: customerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    name: string | null
    family: string | null
    number: string | null
    email: string | null
    geust: boolean
    created_at: Date | null
    created_at_fa: string | null
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends customerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type customerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    family?: boolean
    number?: boolean
    email?: boolean
    geust?: boolean
    created_at?: boolean
    created_at_fa?: boolean
    address?: boolean | customer$addressArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type customerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    family?: boolean
    number?: boolean
    email?: boolean
    geust?: boolean
    created_at?: boolean
    created_at_fa?: boolean
  }, ExtArgs["result"]["customer"]>

  export type customerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    family?: boolean
    number?: boolean
    email?: boolean
    geust?: boolean
    created_at?: boolean
    created_at_fa?: boolean
  }, ExtArgs["result"]["customer"]>

  export type customerSelectScalar = {
    id?: boolean
    name?: boolean
    family?: boolean
    number?: boolean
    email?: boolean
    geust?: boolean
    created_at?: boolean
    created_at_fa?: boolean
  }

  export type customerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "family" | "number" | "email" | "geust" | "created_at" | "created_at_fa", ExtArgs["result"]["customer"]>
  export type customerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | customer$addressArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type customerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type customerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $customerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "customer"
    objects: {
      address: Prisma.$addressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      family: string | null
      number: string | null
      email: string | null
      geust: boolean
      created_at: Date | null
      created_at_fa: string | null
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type customerGetPayload<S extends boolean | null | undefined | customerDefaultArgs> = $Result.GetResult<Prisma.$customerPayload, S>

  type customerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<customerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface customerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customer'], meta: { name: 'customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {customerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends customerFindUniqueArgs>(args: SelectSubset<T, customerFindUniqueArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {customerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends customerFindUniqueOrThrowArgs>(args: SelectSubset<T, customerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends customerFindFirstArgs>(args?: SelectSubset<T, customerFindFirstArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends customerFindFirstOrThrowArgs>(args?: SelectSubset<T, customerFindFirstOrThrowArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends customerFindManyArgs>(args?: SelectSubset<T, customerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {customerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends customerCreateArgs>(args: SelectSubset<T, customerCreateArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {customerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends customerCreateManyArgs>(args?: SelectSubset<T, customerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {customerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends customerCreateManyAndReturnArgs>(args?: SelectSubset<T, customerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {customerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends customerDeleteArgs>(args: SelectSubset<T, customerDeleteArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {customerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends customerUpdateArgs>(args: SelectSubset<T, customerUpdateArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {customerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends customerDeleteManyArgs>(args?: SelectSubset<T, customerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends customerUpdateManyArgs>(args: SelectSubset<T, customerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {customerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
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
    updateManyAndReturn<T extends customerUpdateManyAndReturnArgs>(args: SelectSubset<T, customerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {customerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends customerUpsertArgs>(args: SelectSubset<T, customerUpsertArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends customerCountArgs>(
      args?: Subset<T, customerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerGroupByArgs} args - Group by arguments.
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
      T extends customerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customerGroupByArgs['orderBy'] }
        : { orderBy?: customerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, customerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the customer model
   */
  readonly fields: customerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    address<T extends customer$addressArgs<ExtArgs> = {}>(args?: Subset<T, customer$addressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the customer model
   */
  interface customerFieldRefs {
    readonly id: FieldRef<"customer", 'String'>
    readonly name: FieldRef<"customer", 'String'>
    readonly family: FieldRef<"customer", 'String'>
    readonly number: FieldRef<"customer", 'String'>
    readonly email: FieldRef<"customer", 'String'>
    readonly geust: FieldRef<"customer", 'Boolean'>
    readonly created_at: FieldRef<"customer", 'DateTime'>
    readonly created_at_fa: FieldRef<"customer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * customer findUnique
   */
  export type customerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer findUniqueOrThrow
   */
  export type customerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer findFirst
   */
  export type customerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * customer findFirstOrThrow
   */
  export type customerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * customer findMany
   */
  export type customerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing customers.
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * customer create
   */
  export type customerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * The data needed to create a customer.
     */
    data: XOR<customerCreateInput, customerUncheckedCreateInput>
  }

  /**
   * customer createMany
   */
  export type customerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customers.
     */
    data: customerCreateManyInput | customerCreateManyInput[]
  }

  /**
   * customer createManyAndReturn
   */
  export type customerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * The data used to create many customers.
     */
    data: customerCreateManyInput | customerCreateManyInput[]
  }

  /**
   * customer update
   */
  export type customerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * The data needed to update a customer.
     */
    data: XOR<customerUpdateInput, customerUncheckedUpdateInput>
    /**
     * Choose, which customer to update.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer updateMany
   */
  export type customerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customers.
     */
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customerWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
  }

  /**
   * customer updateManyAndReturn
   */
  export type customerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * The data used to update customers.
     */
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customerWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
  }

  /**
   * customer upsert
   */
  export type customerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * The filter to search for the customer to update in case it exists.
     */
    where: customerWhereUniqueInput
    /**
     * In case the customer found by the `where` argument doesn't exist, create a new customer with this data.
     */
    create: XOR<customerCreateInput, customerUncheckedCreateInput>
    /**
     * In case the customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customerUpdateInput, customerUncheckedUpdateInput>
  }

  /**
   * customer delete
   */
  export type customerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter which customer to delete.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer deleteMany
   */
  export type customerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to delete
     */
    where?: customerWhereInput
    /**
     * Limit how many customers to delete.
     */
    limit?: number
  }

  /**
   * customer.address
   */
  export type customer$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    where?: addressWhereInput
    orderBy?: addressOrderByWithRelationInput | addressOrderByWithRelationInput[]
    cursor?: addressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * customer without action
   */
  export type customerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
  }


  /**
   * Model otp
   */

  export type AggregateOtp = {
    _count: OtpCountAggregateOutputType | null
    _avg: OtpAvgAggregateOutputType | null
    _sum: OtpSumAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  export type OtpAvgAggregateOutputType = {
    id: number | null
    serial: number | null
  }

  export type OtpSumAggregateOutputType = {
    id: number | null
    serial: number | null
  }

  export type OtpMinAggregateOutputType = {
    id: number | null
    serial: number | null
    number: string | null
    expired_at: Date | null
  }

  export type OtpMaxAggregateOutputType = {
    id: number | null
    serial: number | null
    number: string | null
    expired_at: Date | null
  }

  export type OtpCountAggregateOutputType = {
    id: number
    serial: number
    number: number
    expired_at: number
    _all: number
  }


  export type OtpAvgAggregateInputType = {
    id?: true
    serial?: true
  }

  export type OtpSumAggregateInputType = {
    id?: true
    serial?: true
  }

  export type OtpMinAggregateInputType = {
    id?: true
    serial?: true
    number?: true
    expired_at?: true
  }

  export type OtpMaxAggregateInputType = {
    id?: true
    serial?: true
    number?: true
    expired_at?: true
  }

  export type OtpCountAggregateInputType = {
    id?: true
    serial?: true
    number?: true
    expired_at?: true
    _all?: true
  }

  export type OtpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which otp to aggregate.
     */
    where?: otpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of otps to fetch.
     */
    orderBy?: otpOrderByWithRelationInput | otpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: otpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned otps
    **/
    _count?: true | OtpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OtpAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OtpSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtpMaxAggregateInputType
  }

  export type GetOtpAggregateType<T extends OtpAggregateArgs> = {
        [P in keyof T & keyof AggregateOtp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtp[P]>
      : GetScalarType<T[P], AggregateOtp[P]>
  }




  export type otpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: otpWhereInput
    orderBy?: otpOrderByWithAggregationInput | otpOrderByWithAggregationInput[]
    by: OtpScalarFieldEnum[] | OtpScalarFieldEnum
    having?: otpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtpCountAggregateInputType | true
    _avg?: OtpAvgAggregateInputType
    _sum?: OtpSumAggregateInputType
    _min?: OtpMinAggregateInputType
    _max?: OtpMaxAggregateInputType
  }

  export type OtpGroupByOutputType = {
    id: number
    serial: number
    number: string
    expired_at: Date
    _count: OtpCountAggregateOutputType | null
    _avg: OtpAvgAggregateOutputType | null
    _sum: OtpSumAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  type GetOtpGroupByPayload<T extends otpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtpGroupByOutputType[P]>
            : GetScalarType<T[P], OtpGroupByOutputType[P]>
        }
      >
    >


  export type otpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serial?: boolean
    number?: boolean
    expired_at?: boolean
  }, ExtArgs["result"]["otp"]>

  export type otpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serial?: boolean
    number?: boolean
    expired_at?: boolean
  }, ExtArgs["result"]["otp"]>

  export type otpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serial?: boolean
    number?: boolean
    expired_at?: boolean
  }, ExtArgs["result"]["otp"]>

  export type otpSelectScalar = {
    id?: boolean
    serial?: boolean
    number?: boolean
    expired_at?: boolean
  }

  export type otpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "serial" | "number" | "expired_at", ExtArgs["result"]["otp"]>

  export type $otpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "otp"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      serial: number
      number: string
      expired_at: Date
    }, ExtArgs["result"]["otp"]>
    composites: {}
  }

  type otpGetPayload<S extends boolean | null | undefined | otpDefaultArgs> = $Result.GetResult<Prisma.$otpPayload, S>

  type otpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<otpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OtpCountAggregateInputType | true
    }

  export interface otpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['otp'], meta: { name: 'otp' } }
    /**
     * Find zero or one Otp that matches the filter.
     * @param {otpFindUniqueArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends otpFindUniqueArgs>(args: SelectSubset<T, otpFindUniqueArgs<ExtArgs>>): Prisma__otpClient<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Otp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {otpFindUniqueOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends otpFindUniqueOrThrowArgs>(args: SelectSubset<T, otpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__otpClient<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Otp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otpFindFirstArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends otpFindFirstArgs>(args?: SelectSubset<T, otpFindFirstArgs<ExtArgs>>): Prisma__otpClient<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Otp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otpFindFirstOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends otpFindFirstOrThrowArgs>(args?: SelectSubset<T, otpFindFirstOrThrowArgs<ExtArgs>>): Prisma__otpClient<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Otps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Otps
     * const otps = await prisma.otp.findMany()
     * 
     * // Get first 10 Otps
     * const otps = await prisma.otp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otpWithIdOnly = await prisma.otp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends otpFindManyArgs>(args?: SelectSubset<T, otpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Otp.
     * @param {otpCreateArgs} args - Arguments to create a Otp.
     * @example
     * // Create one Otp
     * const Otp = await prisma.otp.create({
     *   data: {
     *     // ... data to create a Otp
     *   }
     * })
     * 
     */
    create<T extends otpCreateArgs>(args: SelectSubset<T, otpCreateArgs<ExtArgs>>): Prisma__otpClient<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Otps.
     * @param {otpCreateManyArgs} args - Arguments to create many Otps.
     * @example
     * // Create many Otps
     * const otp = await prisma.otp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends otpCreateManyArgs>(args?: SelectSubset<T, otpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Otps and returns the data saved in the database.
     * @param {otpCreateManyAndReturnArgs} args - Arguments to create many Otps.
     * @example
     * // Create many Otps
     * const otp = await prisma.otp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Otps and only return the `id`
     * const otpWithIdOnly = await prisma.otp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends otpCreateManyAndReturnArgs>(args?: SelectSubset<T, otpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Otp.
     * @param {otpDeleteArgs} args - Arguments to delete one Otp.
     * @example
     * // Delete one Otp
     * const Otp = await prisma.otp.delete({
     *   where: {
     *     // ... filter to delete one Otp
     *   }
     * })
     * 
     */
    delete<T extends otpDeleteArgs>(args: SelectSubset<T, otpDeleteArgs<ExtArgs>>): Prisma__otpClient<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Otp.
     * @param {otpUpdateArgs} args - Arguments to update one Otp.
     * @example
     * // Update one Otp
     * const otp = await prisma.otp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends otpUpdateArgs>(args: SelectSubset<T, otpUpdateArgs<ExtArgs>>): Prisma__otpClient<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Otps.
     * @param {otpDeleteManyArgs} args - Arguments to filter Otps to delete.
     * @example
     * // Delete a few Otps
     * const { count } = await prisma.otp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends otpDeleteManyArgs>(args?: SelectSubset<T, otpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Otps
     * const otp = await prisma.otp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends otpUpdateManyArgs>(args: SelectSubset<T, otpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Otps and returns the data updated in the database.
     * @param {otpUpdateManyAndReturnArgs} args - Arguments to update many Otps.
     * @example
     * // Update many Otps
     * const otp = await prisma.otp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Otps and only return the `id`
     * const otpWithIdOnly = await prisma.otp.updateManyAndReturn({
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
    updateManyAndReturn<T extends otpUpdateManyAndReturnArgs>(args: SelectSubset<T, otpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Otp.
     * @param {otpUpsertArgs} args - Arguments to update or create a Otp.
     * @example
     * // Update or create a Otp
     * const otp = await prisma.otp.upsert({
     *   create: {
     *     // ... data to create a Otp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Otp we want to update
     *   }
     * })
     */
    upsert<T extends otpUpsertArgs>(args: SelectSubset<T, otpUpsertArgs<ExtArgs>>): Prisma__otpClient<$Result.GetResult<Prisma.$otpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otpCountArgs} args - Arguments to filter Otps to count.
     * @example
     * // Count the number of Otps
     * const count = await prisma.otp.count({
     *   where: {
     *     // ... the filter for the Otps we want to count
     *   }
     * })
    **/
    count<T extends otpCountArgs>(
      args?: Subset<T, otpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OtpAggregateArgs>(args: Subset<T, OtpAggregateArgs>): Prisma.PrismaPromise<GetOtpAggregateType<T>>

    /**
     * Group by Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otpGroupByArgs} args - Group by arguments.
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
      T extends otpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: otpGroupByArgs['orderBy'] }
        : { orderBy?: otpGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, otpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the otp model
   */
  readonly fields: otpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for otp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__otpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the otp model
   */
  interface otpFieldRefs {
    readonly id: FieldRef<"otp", 'Int'>
    readonly serial: FieldRef<"otp", 'Int'>
    readonly number: FieldRef<"otp", 'String'>
    readonly expired_at: FieldRef<"otp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * otp findUnique
   */
  export type otpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otp
     */
    omit?: otpOmit<ExtArgs> | null
    /**
     * Filter, which otp to fetch.
     */
    where: otpWhereUniqueInput
  }

  /**
   * otp findUniqueOrThrow
   */
  export type otpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otp
     */
    omit?: otpOmit<ExtArgs> | null
    /**
     * Filter, which otp to fetch.
     */
    where: otpWhereUniqueInput
  }

  /**
   * otp findFirst
   */
  export type otpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otp
     */
    omit?: otpOmit<ExtArgs> | null
    /**
     * Filter, which otp to fetch.
     */
    where?: otpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of otps to fetch.
     */
    orderBy?: otpOrderByWithRelationInput | otpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for otps.
     */
    cursor?: otpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * otp findFirstOrThrow
   */
  export type otpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otp
     */
    omit?: otpOmit<ExtArgs> | null
    /**
     * Filter, which otp to fetch.
     */
    where?: otpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of otps to fetch.
     */
    orderBy?: otpOrderByWithRelationInput | otpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for otps.
     */
    cursor?: otpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * otp findMany
   */
  export type otpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otp
     */
    omit?: otpOmit<ExtArgs> | null
    /**
     * Filter, which otps to fetch.
     */
    where?: otpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of otps to fetch.
     */
    orderBy?: otpOrderByWithRelationInput | otpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing otps.
     */
    cursor?: otpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` otps.
     */
    skip?: number
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * otp create
   */
  export type otpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otp
     */
    omit?: otpOmit<ExtArgs> | null
    /**
     * The data needed to create a otp.
     */
    data: XOR<otpCreateInput, otpUncheckedCreateInput>
  }

  /**
   * otp createMany
   */
  export type otpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many otps.
     */
    data: otpCreateManyInput | otpCreateManyInput[]
  }

  /**
   * otp createManyAndReturn
   */
  export type otpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the otp
     */
    omit?: otpOmit<ExtArgs> | null
    /**
     * The data used to create many otps.
     */
    data: otpCreateManyInput | otpCreateManyInput[]
  }

  /**
   * otp update
   */
  export type otpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otp
     */
    omit?: otpOmit<ExtArgs> | null
    /**
     * The data needed to update a otp.
     */
    data: XOR<otpUpdateInput, otpUncheckedUpdateInput>
    /**
     * Choose, which otp to update.
     */
    where: otpWhereUniqueInput
  }

  /**
   * otp updateMany
   */
  export type otpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update otps.
     */
    data: XOR<otpUpdateManyMutationInput, otpUncheckedUpdateManyInput>
    /**
     * Filter which otps to update
     */
    where?: otpWhereInput
    /**
     * Limit how many otps to update.
     */
    limit?: number
  }

  /**
   * otp updateManyAndReturn
   */
  export type otpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the otp
     */
    omit?: otpOmit<ExtArgs> | null
    /**
     * The data used to update otps.
     */
    data: XOR<otpUpdateManyMutationInput, otpUncheckedUpdateManyInput>
    /**
     * Filter which otps to update
     */
    where?: otpWhereInput
    /**
     * Limit how many otps to update.
     */
    limit?: number
  }

  /**
   * otp upsert
   */
  export type otpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otp
     */
    omit?: otpOmit<ExtArgs> | null
    /**
     * The filter to search for the otp to update in case it exists.
     */
    where: otpWhereUniqueInput
    /**
     * In case the otp found by the `where` argument doesn't exist, create a new otp with this data.
     */
    create: XOR<otpCreateInput, otpUncheckedCreateInput>
    /**
     * In case the otp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<otpUpdateInput, otpUncheckedUpdateInput>
  }

  /**
   * otp delete
   */
  export type otpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otp
     */
    omit?: otpOmit<ExtArgs> | null
    /**
     * Filter which otp to delete.
     */
    where: otpWhereUniqueInput
  }

  /**
   * otp deleteMany
   */
  export type otpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which otps to delete
     */
    where?: otpWhereInput
    /**
     * Limit how many otps to delete.
     */
    limit?: number
  }

  /**
   * otp without action
   */
  export type otpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otp
     */
    select?: otpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otp
     */
    omit?: otpOmit<ExtArgs> | null
  }


  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    price: number | null
    special: number | null
    rate: number | null
    category: number | null
    quantity: number | null
  }

  export type ProductsSumAggregateOutputType = {
    price: number | null
    special: number | null
    rate: number | null
    category: number | null
    quantity: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    image: string | null
    price: number | null
    special: number | null
    warranty: string | null
    rate: number | null
    category: number | null
    description: string | null
    quantity: number | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    image: string | null
    price: number | null
    special: number | null
    warranty: string | null
    rate: number | null
    category: number | null
    description: string | null
    quantity: number | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    name: number
    url: number
    image: number
    price: number
    special: number
    warranty: number
    rate: number
    category: number
    description: number
    quantity: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    price?: true
    special?: true
    rate?: true
    category?: true
    quantity?: true
  }

  export type ProductsSumAggregateInputType = {
    price?: true
    special?: true
    rate?: true
    category?: true
    quantity?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    image?: true
    price?: true
    special?: true
    warranty?: true
    rate?: true
    category?: true
    description?: true
    quantity?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    image?: true
    price?: true
    special?: true
    warranty?: true
    rate?: true
    category?: true
    description?: true
    quantity?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    image?: true
    price?: true
    special?: true
    warranty?: true
    rate?: true
    category?: true
    description?: true
    quantity?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
    orderBy?: productsOrderByWithAggregationInput | productsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: string
    name: string
    url: string
    image: string
    price: number
    special: number
    warranty: string | null
    rate: number | null
    category: number
    description: string | null
    quantity: number
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    image?: boolean
    price?: boolean
    special?: boolean
    warranty?: boolean
    rate?: boolean
    category?: boolean
    description?: boolean
    quantity?: boolean
  }, ExtArgs["result"]["products"]>

  export type productsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    image?: boolean
    price?: boolean
    special?: boolean
    warranty?: boolean
    rate?: boolean
    category?: boolean
    description?: boolean
    quantity?: boolean
  }, ExtArgs["result"]["products"]>

  export type productsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    image?: boolean
    price?: boolean
    special?: boolean
    warranty?: boolean
    rate?: boolean
    category?: boolean
    description?: boolean
    quantity?: boolean
  }, ExtArgs["result"]["products"]>

  export type productsSelectScalar = {
    id?: boolean
    name?: boolean
    url?: boolean
    image?: boolean
    price?: boolean
    special?: boolean
    warranty?: boolean
    rate?: boolean
    category?: boolean
    description?: boolean
    quantity?: boolean
  }

  export type productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "url" | "image" | "price" | "special" | "warranty" | "rate" | "category" | "description" | "quantity", ExtArgs["result"]["products"]>

  export type $productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      url: string
      image: string
      price: number
      special: number
      warranty: string | null
      rate: number | null
      category: number
      description: string | null
      quantity: number
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = $Result.GetResult<Prisma.$productsPayload, S>

  type productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products'], meta: { name: 'products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productsFindUniqueArgs>(args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(args: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productsFindFirstArgs>(args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productsFindManyArgs>(args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends productsCreateArgs>(args: SelectSubset<T, productsCreateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productsCreateManyArgs>(args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {productsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productsCreateManyAndReturnArgs>(args?: SelectSubset<T, productsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends productsDeleteArgs>(args: SelectSubset<T, productsDeleteArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productsUpdateArgs>(args: SelectSubset<T, productsUpdateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productsDeleteManyArgs>(args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productsUpdateManyArgs>(args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {productsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.updateManyAndReturn({
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
    updateManyAndReturn<T extends productsUpdateManyAndReturnArgs>(args: SelectSubset<T, productsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends productsUpsertArgs>(args: SelectSubset<T, productsUpsertArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
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
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs['orderBy'] }
        : { orderBy?: productsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products model
   */
  readonly fields: productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the products model
   */
  interface productsFieldRefs {
    readonly id: FieldRef<"products", 'String'>
    readonly name: FieldRef<"products", 'String'>
    readonly url: FieldRef<"products", 'String'>
    readonly image: FieldRef<"products", 'String'>
    readonly price: FieldRef<"products", 'Float'>
    readonly special: FieldRef<"products", 'Int'>
    readonly warranty: FieldRef<"products", 'String'>
    readonly rate: FieldRef<"products", 'Float'>
    readonly category: FieldRef<"products", 'Int'>
    readonly description: FieldRef<"products", 'String'>
    readonly quantity: FieldRef<"products", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findFirst
   */
  export type productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findMany
   */
  export type productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products create
   */
  export type productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data needed to create a products.
     */
    data: XOR<productsCreateInput, productsUncheckedCreateInput>
  }

  /**
   * products createMany
   */
  export type productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
  }

  /**
   * products createManyAndReturn
   */
  export type productsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
  }

  /**
   * products update
   */
  export type productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products updateManyAndReturn
   */
  export type productsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products upsert
   */
  export type productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }

  /**
   * products delete
   */
  export type productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * products without action
   */
  export type productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
  }


  /**
   * Model sizes
   */

  export type AggregateSizes = {
    _count: SizesCountAggregateOutputType | null
    _avg: SizesAvgAggregateOutputType | null
    _sum: SizesSumAggregateOutputType | null
    _min: SizesMinAggregateOutputType | null
    _max: SizesMaxAggregateOutputType | null
  }

  export type SizesAvgAggregateOutputType = {
    id: number | null
  }

  export type SizesSumAggregateOutputType = {
    id: number | null
  }

  export type SizesMinAggregateOutputType = {
    id: number | null
    size: string | null
  }

  export type SizesMaxAggregateOutputType = {
    id: number | null
    size: string | null
  }

  export type SizesCountAggregateOutputType = {
    id: number
    size: number
    _all: number
  }


  export type SizesAvgAggregateInputType = {
    id?: true
  }

  export type SizesSumAggregateInputType = {
    id?: true
  }

  export type SizesMinAggregateInputType = {
    id?: true
    size?: true
  }

  export type SizesMaxAggregateInputType = {
    id?: true
    size?: true
  }

  export type SizesCountAggregateInputType = {
    id?: true
    size?: true
    _all?: true
  }

  export type SizesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sizes to aggregate.
     */
    where?: sizesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sizes to fetch.
     */
    orderBy?: sizesOrderByWithRelationInput | sizesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sizesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sizes
    **/
    _count?: true | SizesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SizesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SizesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SizesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SizesMaxAggregateInputType
  }

  export type GetSizesAggregateType<T extends SizesAggregateArgs> = {
        [P in keyof T & keyof AggregateSizes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSizes[P]>
      : GetScalarType<T[P], AggregateSizes[P]>
  }




  export type sizesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sizesWhereInput
    orderBy?: sizesOrderByWithAggregationInput | sizesOrderByWithAggregationInput[]
    by: SizesScalarFieldEnum[] | SizesScalarFieldEnum
    having?: sizesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SizesCountAggregateInputType | true
    _avg?: SizesAvgAggregateInputType
    _sum?: SizesSumAggregateInputType
    _min?: SizesMinAggregateInputType
    _max?: SizesMaxAggregateInputType
  }

  export type SizesGroupByOutputType = {
    id: number
    size: string
    _count: SizesCountAggregateOutputType | null
    _avg: SizesAvgAggregateOutputType | null
    _sum: SizesSumAggregateOutputType | null
    _min: SizesMinAggregateOutputType | null
    _max: SizesMaxAggregateOutputType | null
  }

  type GetSizesGroupByPayload<T extends sizesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SizesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SizesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SizesGroupByOutputType[P]>
            : GetScalarType<T[P], SizesGroupByOutputType[P]>
        }
      >
    >


  export type sizesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    size?: boolean
  }, ExtArgs["result"]["sizes"]>

  export type sizesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    size?: boolean
  }, ExtArgs["result"]["sizes"]>

  export type sizesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    size?: boolean
  }, ExtArgs["result"]["sizes"]>

  export type sizesSelectScalar = {
    id?: boolean
    size?: boolean
  }

  export type sizesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "size", ExtArgs["result"]["sizes"]>

  export type $sizesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sizes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      size: string
    }, ExtArgs["result"]["sizes"]>
    composites: {}
  }

  type sizesGetPayload<S extends boolean | null | undefined | sizesDefaultArgs> = $Result.GetResult<Prisma.$sizesPayload, S>

  type sizesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sizesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SizesCountAggregateInputType | true
    }

  export interface sizesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sizes'], meta: { name: 'sizes' } }
    /**
     * Find zero or one Sizes that matches the filter.
     * @param {sizesFindUniqueArgs} args - Arguments to find a Sizes
     * @example
     * // Get one Sizes
     * const sizes = await prisma.sizes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sizesFindUniqueArgs>(args: SelectSubset<T, sizesFindUniqueArgs<ExtArgs>>): Prisma__sizesClient<$Result.GetResult<Prisma.$sizesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sizes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sizesFindUniqueOrThrowArgs} args - Arguments to find a Sizes
     * @example
     * // Get one Sizes
     * const sizes = await prisma.sizes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sizesFindUniqueOrThrowArgs>(args: SelectSubset<T, sizesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sizesClient<$Result.GetResult<Prisma.$sizesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sizes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sizesFindFirstArgs} args - Arguments to find a Sizes
     * @example
     * // Get one Sizes
     * const sizes = await prisma.sizes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sizesFindFirstArgs>(args?: SelectSubset<T, sizesFindFirstArgs<ExtArgs>>): Prisma__sizesClient<$Result.GetResult<Prisma.$sizesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sizes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sizesFindFirstOrThrowArgs} args - Arguments to find a Sizes
     * @example
     * // Get one Sizes
     * const sizes = await prisma.sizes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sizesFindFirstOrThrowArgs>(args?: SelectSubset<T, sizesFindFirstOrThrowArgs<ExtArgs>>): Prisma__sizesClient<$Result.GetResult<Prisma.$sizesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sizes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sizesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sizes
     * const sizes = await prisma.sizes.findMany()
     * 
     * // Get first 10 Sizes
     * const sizes = await prisma.sizes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sizesWithIdOnly = await prisma.sizes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sizesFindManyArgs>(args?: SelectSubset<T, sizesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sizesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sizes.
     * @param {sizesCreateArgs} args - Arguments to create a Sizes.
     * @example
     * // Create one Sizes
     * const Sizes = await prisma.sizes.create({
     *   data: {
     *     // ... data to create a Sizes
     *   }
     * })
     * 
     */
    create<T extends sizesCreateArgs>(args: SelectSubset<T, sizesCreateArgs<ExtArgs>>): Prisma__sizesClient<$Result.GetResult<Prisma.$sizesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sizes.
     * @param {sizesCreateManyArgs} args - Arguments to create many Sizes.
     * @example
     * // Create many Sizes
     * const sizes = await prisma.sizes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sizesCreateManyArgs>(args?: SelectSubset<T, sizesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sizes and returns the data saved in the database.
     * @param {sizesCreateManyAndReturnArgs} args - Arguments to create many Sizes.
     * @example
     * // Create many Sizes
     * const sizes = await prisma.sizes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sizes and only return the `id`
     * const sizesWithIdOnly = await prisma.sizes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sizesCreateManyAndReturnArgs>(args?: SelectSubset<T, sizesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sizesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sizes.
     * @param {sizesDeleteArgs} args - Arguments to delete one Sizes.
     * @example
     * // Delete one Sizes
     * const Sizes = await prisma.sizes.delete({
     *   where: {
     *     // ... filter to delete one Sizes
     *   }
     * })
     * 
     */
    delete<T extends sizesDeleteArgs>(args: SelectSubset<T, sizesDeleteArgs<ExtArgs>>): Prisma__sizesClient<$Result.GetResult<Prisma.$sizesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sizes.
     * @param {sizesUpdateArgs} args - Arguments to update one Sizes.
     * @example
     * // Update one Sizes
     * const sizes = await prisma.sizes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sizesUpdateArgs>(args: SelectSubset<T, sizesUpdateArgs<ExtArgs>>): Prisma__sizesClient<$Result.GetResult<Prisma.$sizesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sizes.
     * @param {sizesDeleteManyArgs} args - Arguments to filter Sizes to delete.
     * @example
     * // Delete a few Sizes
     * const { count } = await prisma.sizes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sizesDeleteManyArgs>(args?: SelectSubset<T, sizesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sizesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sizes
     * const sizes = await prisma.sizes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sizesUpdateManyArgs>(args: SelectSubset<T, sizesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sizes and returns the data updated in the database.
     * @param {sizesUpdateManyAndReturnArgs} args - Arguments to update many Sizes.
     * @example
     * // Update many Sizes
     * const sizes = await prisma.sizes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sizes and only return the `id`
     * const sizesWithIdOnly = await prisma.sizes.updateManyAndReturn({
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
    updateManyAndReturn<T extends sizesUpdateManyAndReturnArgs>(args: SelectSubset<T, sizesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sizesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sizes.
     * @param {sizesUpsertArgs} args - Arguments to update or create a Sizes.
     * @example
     * // Update or create a Sizes
     * const sizes = await prisma.sizes.upsert({
     *   create: {
     *     // ... data to create a Sizes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sizes we want to update
     *   }
     * })
     */
    upsert<T extends sizesUpsertArgs>(args: SelectSubset<T, sizesUpsertArgs<ExtArgs>>): Prisma__sizesClient<$Result.GetResult<Prisma.$sizesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sizesCountArgs} args - Arguments to filter Sizes to count.
     * @example
     * // Count the number of Sizes
     * const count = await prisma.sizes.count({
     *   where: {
     *     // ... the filter for the Sizes we want to count
     *   }
     * })
    **/
    count<T extends sizesCountArgs>(
      args?: Subset<T, sizesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SizesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SizesAggregateArgs>(args: Subset<T, SizesAggregateArgs>): Prisma.PrismaPromise<GetSizesAggregateType<T>>

    /**
     * Group by Sizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sizesGroupByArgs} args - Group by arguments.
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
      T extends sizesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sizesGroupByArgs['orderBy'] }
        : { orderBy?: sizesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, sizesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSizesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sizes model
   */
  readonly fields: sizesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sizes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sizesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the sizes model
   */
  interface sizesFieldRefs {
    readonly id: FieldRef<"sizes", 'Int'>
    readonly size: FieldRef<"sizes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * sizes findUnique
   */
  export type sizesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sizes
     */
    select?: sizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sizes
     */
    omit?: sizesOmit<ExtArgs> | null
    /**
     * Filter, which sizes to fetch.
     */
    where: sizesWhereUniqueInput
  }

  /**
   * sizes findUniqueOrThrow
   */
  export type sizesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sizes
     */
    select?: sizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sizes
     */
    omit?: sizesOmit<ExtArgs> | null
    /**
     * Filter, which sizes to fetch.
     */
    where: sizesWhereUniqueInput
  }

  /**
   * sizes findFirst
   */
  export type sizesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sizes
     */
    select?: sizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sizes
     */
    omit?: sizesOmit<ExtArgs> | null
    /**
     * Filter, which sizes to fetch.
     */
    where?: sizesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sizes to fetch.
     */
    orderBy?: sizesOrderByWithRelationInput | sizesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sizes.
     */
    cursor?: sizesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sizes.
     */
    distinct?: SizesScalarFieldEnum | SizesScalarFieldEnum[]
  }

  /**
   * sizes findFirstOrThrow
   */
  export type sizesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sizes
     */
    select?: sizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sizes
     */
    omit?: sizesOmit<ExtArgs> | null
    /**
     * Filter, which sizes to fetch.
     */
    where?: sizesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sizes to fetch.
     */
    orderBy?: sizesOrderByWithRelationInput | sizesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sizes.
     */
    cursor?: sizesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sizes.
     */
    distinct?: SizesScalarFieldEnum | SizesScalarFieldEnum[]
  }

  /**
   * sizes findMany
   */
  export type sizesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sizes
     */
    select?: sizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sizes
     */
    omit?: sizesOmit<ExtArgs> | null
    /**
     * Filter, which sizes to fetch.
     */
    where?: sizesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sizes to fetch.
     */
    orderBy?: sizesOrderByWithRelationInput | sizesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sizes.
     */
    cursor?: sizesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sizes.
     */
    skip?: number
    distinct?: SizesScalarFieldEnum | SizesScalarFieldEnum[]
  }

  /**
   * sizes create
   */
  export type sizesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sizes
     */
    select?: sizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sizes
     */
    omit?: sizesOmit<ExtArgs> | null
    /**
     * The data needed to create a sizes.
     */
    data: XOR<sizesCreateInput, sizesUncheckedCreateInput>
  }

  /**
   * sizes createMany
   */
  export type sizesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sizes.
     */
    data: sizesCreateManyInput | sizesCreateManyInput[]
  }

  /**
   * sizes createManyAndReturn
   */
  export type sizesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sizes
     */
    select?: sizesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sizes
     */
    omit?: sizesOmit<ExtArgs> | null
    /**
     * The data used to create many sizes.
     */
    data: sizesCreateManyInput | sizesCreateManyInput[]
  }

  /**
   * sizes update
   */
  export type sizesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sizes
     */
    select?: sizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sizes
     */
    omit?: sizesOmit<ExtArgs> | null
    /**
     * The data needed to update a sizes.
     */
    data: XOR<sizesUpdateInput, sizesUncheckedUpdateInput>
    /**
     * Choose, which sizes to update.
     */
    where: sizesWhereUniqueInput
  }

  /**
   * sizes updateMany
   */
  export type sizesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sizes.
     */
    data: XOR<sizesUpdateManyMutationInput, sizesUncheckedUpdateManyInput>
    /**
     * Filter which sizes to update
     */
    where?: sizesWhereInput
    /**
     * Limit how many sizes to update.
     */
    limit?: number
  }

  /**
   * sizes updateManyAndReturn
   */
  export type sizesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sizes
     */
    select?: sizesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sizes
     */
    omit?: sizesOmit<ExtArgs> | null
    /**
     * The data used to update sizes.
     */
    data: XOR<sizesUpdateManyMutationInput, sizesUncheckedUpdateManyInput>
    /**
     * Filter which sizes to update
     */
    where?: sizesWhereInput
    /**
     * Limit how many sizes to update.
     */
    limit?: number
  }

  /**
   * sizes upsert
   */
  export type sizesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sizes
     */
    select?: sizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sizes
     */
    omit?: sizesOmit<ExtArgs> | null
    /**
     * The filter to search for the sizes to update in case it exists.
     */
    where: sizesWhereUniqueInput
    /**
     * In case the sizes found by the `where` argument doesn't exist, create a new sizes with this data.
     */
    create: XOR<sizesCreateInput, sizesUncheckedCreateInput>
    /**
     * In case the sizes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sizesUpdateInput, sizesUncheckedUpdateInput>
  }

  /**
   * sizes delete
   */
  export type sizesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sizes
     */
    select?: sizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sizes
     */
    omit?: sizesOmit<ExtArgs> | null
    /**
     * Filter which sizes to delete.
     */
    where: sizesWhereUniqueInput
  }

  /**
   * sizes deleteMany
   */
  export type sizesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sizes to delete
     */
    where?: sizesWhereInput
    /**
     * Limit how many sizes to delete.
     */
    limit?: number
  }

  /**
   * sizes without action
   */
  export type sizesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sizes
     */
    select?: sizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sizes
     */
    omit?: sizesOmit<ExtArgs> | null
  }


  /**
   * Model compare
   */

  export type AggregateCompare = {
    _count: CompareCountAggregateOutputType | null
    _avg: CompareAvgAggregateOutputType | null
    _sum: CompareSumAggregateOutputType | null
    _min: CompareMinAggregateOutputType | null
    _max: CompareMaxAggregateOutputType | null
  }

  export type CompareAvgAggregateOutputType = {
    id: number | null
  }

  export type CompareSumAggregateOutputType = {
    id: number | null
  }

  export type CompareMinAggregateOutputType = {
    id: number | null
    product_id: string | null
    customer_id: string | null
  }

  export type CompareMaxAggregateOutputType = {
    id: number | null
    product_id: string | null
    customer_id: string | null
  }

  export type CompareCountAggregateOutputType = {
    id: number
    product_id: number
    customer_id: number
    _all: number
  }


  export type CompareAvgAggregateInputType = {
    id?: true
  }

  export type CompareSumAggregateInputType = {
    id?: true
  }

  export type CompareMinAggregateInputType = {
    id?: true
    product_id?: true
    customer_id?: true
  }

  export type CompareMaxAggregateInputType = {
    id?: true
    product_id?: true
    customer_id?: true
  }

  export type CompareCountAggregateInputType = {
    id?: true
    product_id?: true
    customer_id?: true
    _all?: true
  }

  export type CompareAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which compare to aggregate.
     */
    where?: compareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of compares to fetch.
     */
    orderBy?: compareOrderByWithRelationInput | compareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: compareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` compares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` compares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned compares
    **/
    _count?: true | CompareCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompareAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompareSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompareMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompareMaxAggregateInputType
  }

  export type GetCompareAggregateType<T extends CompareAggregateArgs> = {
        [P in keyof T & keyof AggregateCompare]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompare[P]>
      : GetScalarType<T[P], AggregateCompare[P]>
  }




  export type compareGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: compareWhereInput
    orderBy?: compareOrderByWithAggregationInput | compareOrderByWithAggregationInput[]
    by: CompareScalarFieldEnum[] | CompareScalarFieldEnum
    having?: compareScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompareCountAggregateInputType | true
    _avg?: CompareAvgAggregateInputType
    _sum?: CompareSumAggregateInputType
    _min?: CompareMinAggregateInputType
    _max?: CompareMaxAggregateInputType
  }

  export type CompareGroupByOutputType = {
    id: number
    product_id: string
    customer_id: string
    _count: CompareCountAggregateOutputType | null
    _avg: CompareAvgAggregateOutputType | null
    _sum: CompareSumAggregateOutputType | null
    _min: CompareMinAggregateOutputType | null
    _max: CompareMaxAggregateOutputType | null
  }

  type GetCompareGroupByPayload<T extends compareGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompareGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompareGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompareGroupByOutputType[P]>
            : GetScalarType<T[P], CompareGroupByOutputType[P]>
        }
      >
    >


  export type compareSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    customer_id?: boolean
  }, ExtArgs["result"]["compare"]>

  export type compareSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    customer_id?: boolean
  }, ExtArgs["result"]["compare"]>

  export type compareSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    customer_id?: boolean
  }, ExtArgs["result"]["compare"]>

  export type compareSelectScalar = {
    id?: boolean
    product_id?: boolean
    customer_id?: boolean
  }

  export type compareOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "product_id" | "customer_id", ExtArgs["result"]["compare"]>

  export type $comparePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "compare"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      product_id: string
      customer_id: string
    }, ExtArgs["result"]["compare"]>
    composites: {}
  }

  type compareGetPayload<S extends boolean | null | undefined | compareDefaultArgs> = $Result.GetResult<Prisma.$comparePayload, S>

  type compareCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<compareFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompareCountAggregateInputType | true
    }

  export interface compareDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['compare'], meta: { name: 'compare' } }
    /**
     * Find zero or one Compare that matches the filter.
     * @param {compareFindUniqueArgs} args - Arguments to find a Compare
     * @example
     * // Get one Compare
     * const compare = await prisma.compare.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends compareFindUniqueArgs>(args: SelectSubset<T, compareFindUniqueArgs<ExtArgs>>): Prisma__compareClient<$Result.GetResult<Prisma.$comparePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Compare that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {compareFindUniqueOrThrowArgs} args - Arguments to find a Compare
     * @example
     * // Get one Compare
     * const compare = await prisma.compare.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends compareFindUniqueOrThrowArgs>(args: SelectSubset<T, compareFindUniqueOrThrowArgs<ExtArgs>>): Prisma__compareClient<$Result.GetResult<Prisma.$comparePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Compare that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {compareFindFirstArgs} args - Arguments to find a Compare
     * @example
     * // Get one Compare
     * const compare = await prisma.compare.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends compareFindFirstArgs>(args?: SelectSubset<T, compareFindFirstArgs<ExtArgs>>): Prisma__compareClient<$Result.GetResult<Prisma.$comparePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Compare that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {compareFindFirstOrThrowArgs} args - Arguments to find a Compare
     * @example
     * // Get one Compare
     * const compare = await prisma.compare.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends compareFindFirstOrThrowArgs>(args?: SelectSubset<T, compareFindFirstOrThrowArgs<ExtArgs>>): Prisma__compareClient<$Result.GetResult<Prisma.$comparePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Compares that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {compareFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Compares
     * const compares = await prisma.compare.findMany()
     * 
     * // Get first 10 Compares
     * const compares = await prisma.compare.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const compareWithIdOnly = await prisma.compare.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends compareFindManyArgs>(args?: SelectSubset<T, compareFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$comparePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Compare.
     * @param {compareCreateArgs} args - Arguments to create a Compare.
     * @example
     * // Create one Compare
     * const Compare = await prisma.compare.create({
     *   data: {
     *     // ... data to create a Compare
     *   }
     * })
     * 
     */
    create<T extends compareCreateArgs>(args: SelectSubset<T, compareCreateArgs<ExtArgs>>): Prisma__compareClient<$Result.GetResult<Prisma.$comparePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Compares.
     * @param {compareCreateManyArgs} args - Arguments to create many Compares.
     * @example
     * // Create many Compares
     * const compare = await prisma.compare.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends compareCreateManyArgs>(args?: SelectSubset<T, compareCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Compares and returns the data saved in the database.
     * @param {compareCreateManyAndReturnArgs} args - Arguments to create many Compares.
     * @example
     * // Create many Compares
     * const compare = await prisma.compare.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Compares and only return the `id`
     * const compareWithIdOnly = await prisma.compare.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends compareCreateManyAndReturnArgs>(args?: SelectSubset<T, compareCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$comparePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Compare.
     * @param {compareDeleteArgs} args - Arguments to delete one Compare.
     * @example
     * // Delete one Compare
     * const Compare = await prisma.compare.delete({
     *   where: {
     *     // ... filter to delete one Compare
     *   }
     * })
     * 
     */
    delete<T extends compareDeleteArgs>(args: SelectSubset<T, compareDeleteArgs<ExtArgs>>): Prisma__compareClient<$Result.GetResult<Prisma.$comparePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Compare.
     * @param {compareUpdateArgs} args - Arguments to update one Compare.
     * @example
     * // Update one Compare
     * const compare = await prisma.compare.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends compareUpdateArgs>(args: SelectSubset<T, compareUpdateArgs<ExtArgs>>): Prisma__compareClient<$Result.GetResult<Prisma.$comparePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Compares.
     * @param {compareDeleteManyArgs} args - Arguments to filter Compares to delete.
     * @example
     * // Delete a few Compares
     * const { count } = await prisma.compare.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends compareDeleteManyArgs>(args?: SelectSubset<T, compareDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Compares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {compareUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Compares
     * const compare = await prisma.compare.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends compareUpdateManyArgs>(args: SelectSubset<T, compareUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Compares and returns the data updated in the database.
     * @param {compareUpdateManyAndReturnArgs} args - Arguments to update many Compares.
     * @example
     * // Update many Compares
     * const compare = await prisma.compare.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Compares and only return the `id`
     * const compareWithIdOnly = await prisma.compare.updateManyAndReturn({
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
    updateManyAndReturn<T extends compareUpdateManyAndReturnArgs>(args: SelectSubset<T, compareUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$comparePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Compare.
     * @param {compareUpsertArgs} args - Arguments to update or create a Compare.
     * @example
     * // Update or create a Compare
     * const compare = await prisma.compare.upsert({
     *   create: {
     *     // ... data to create a Compare
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Compare we want to update
     *   }
     * })
     */
    upsert<T extends compareUpsertArgs>(args: SelectSubset<T, compareUpsertArgs<ExtArgs>>): Prisma__compareClient<$Result.GetResult<Prisma.$comparePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Compares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {compareCountArgs} args - Arguments to filter Compares to count.
     * @example
     * // Count the number of Compares
     * const count = await prisma.compare.count({
     *   where: {
     *     // ... the filter for the Compares we want to count
     *   }
     * })
    **/
    count<T extends compareCountArgs>(
      args?: Subset<T, compareCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompareCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Compare.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompareAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompareAggregateArgs>(args: Subset<T, CompareAggregateArgs>): Prisma.PrismaPromise<GetCompareAggregateType<T>>

    /**
     * Group by Compare.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {compareGroupByArgs} args - Group by arguments.
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
      T extends compareGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: compareGroupByArgs['orderBy'] }
        : { orderBy?: compareGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, compareGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompareGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the compare model
   */
  readonly fields: compareFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for compare.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__compareClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the compare model
   */
  interface compareFieldRefs {
    readonly id: FieldRef<"compare", 'Int'>
    readonly product_id: FieldRef<"compare", 'String'>
    readonly customer_id: FieldRef<"compare", 'String'>
  }
    

  // Custom InputTypes
  /**
   * compare findUnique
   */
  export type compareFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compare
     */
    select?: compareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the compare
     */
    omit?: compareOmit<ExtArgs> | null
    /**
     * Filter, which compare to fetch.
     */
    where: compareWhereUniqueInput
  }

  /**
   * compare findUniqueOrThrow
   */
  export type compareFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compare
     */
    select?: compareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the compare
     */
    omit?: compareOmit<ExtArgs> | null
    /**
     * Filter, which compare to fetch.
     */
    where: compareWhereUniqueInput
  }

  /**
   * compare findFirst
   */
  export type compareFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compare
     */
    select?: compareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the compare
     */
    omit?: compareOmit<ExtArgs> | null
    /**
     * Filter, which compare to fetch.
     */
    where?: compareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of compares to fetch.
     */
    orderBy?: compareOrderByWithRelationInput | compareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for compares.
     */
    cursor?: compareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` compares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` compares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of compares.
     */
    distinct?: CompareScalarFieldEnum | CompareScalarFieldEnum[]
  }

  /**
   * compare findFirstOrThrow
   */
  export type compareFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compare
     */
    select?: compareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the compare
     */
    omit?: compareOmit<ExtArgs> | null
    /**
     * Filter, which compare to fetch.
     */
    where?: compareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of compares to fetch.
     */
    orderBy?: compareOrderByWithRelationInput | compareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for compares.
     */
    cursor?: compareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` compares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` compares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of compares.
     */
    distinct?: CompareScalarFieldEnum | CompareScalarFieldEnum[]
  }

  /**
   * compare findMany
   */
  export type compareFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compare
     */
    select?: compareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the compare
     */
    omit?: compareOmit<ExtArgs> | null
    /**
     * Filter, which compares to fetch.
     */
    where?: compareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of compares to fetch.
     */
    orderBy?: compareOrderByWithRelationInput | compareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing compares.
     */
    cursor?: compareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` compares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` compares.
     */
    skip?: number
    distinct?: CompareScalarFieldEnum | CompareScalarFieldEnum[]
  }

  /**
   * compare create
   */
  export type compareCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compare
     */
    select?: compareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the compare
     */
    omit?: compareOmit<ExtArgs> | null
    /**
     * The data needed to create a compare.
     */
    data: XOR<compareCreateInput, compareUncheckedCreateInput>
  }

  /**
   * compare createMany
   */
  export type compareCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many compares.
     */
    data: compareCreateManyInput | compareCreateManyInput[]
  }

  /**
   * compare createManyAndReturn
   */
  export type compareCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compare
     */
    select?: compareSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the compare
     */
    omit?: compareOmit<ExtArgs> | null
    /**
     * The data used to create many compares.
     */
    data: compareCreateManyInput | compareCreateManyInput[]
  }

  /**
   * compare update
   */
  export type compareUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compare
     */
    select?: compareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the compare
     */
    omit?: compareOmit<ExtArgs> | null
    /**
     * The data needed to update a compare.
     */
    data: XOR<compareUpdateInput, compareUncheckedUpdateInput>
    /**
     * Choose, which compare to update.
     */
    where: compareWhereUniqueInput
  }

  /**
   * compare updateMany
   */
  export type compareUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update compares.
     */
    data: XOR<compareUpdateManyMutationInput, compareUncheckedUpdateManyInput>
    /**
     * Filter which compares to update
     */
    where?: compareWhereInput
    /**
     * Limit how many compares to update.
     */
    limit?: number
  }

  /**
   * compare updateManyAndReturn
   */
  export type compareUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compare
     */
    select?: compareSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the compare
     */
    omit?: compareOmit<ExtArgs> | null
    /**
     * The data used to update compares.
     */
    data: XOR<compareUpdateManyMutationInput, compareUncheckedUpdateManyInput>
    /**
     * Filter which compares to update
     */
    where?: compareWhereInput
    /**
     * Limit how many compares to update.
     */
    limit?: number
  }

  /**
   * compare upsert
   */
  export type compareUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compare
     */
    select?: compareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the compare
     */
    omit?: compareOmit<ExtArgs> | null
    /**
     * The filter to search for the compare to update in case it exists.
     */
    where: compareWhereUniqueInput
    /**
     * In case the compare found by the `where` argument doesn't exist, create a new compare with this data.
     */
    create: XOR<compareCreateInput, compareUncheckedCreateInput>
    /**
     * In case the compare was found with the provided `where` argument, update it with this data.
     */
    update: XOR<compareUpdateInput, compareUncheckedUpdateInput>
  }

  /**
   * compare delete
   */
  export type compareDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compare
     */
    select?: compareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the compare
     */
    omit?: compareOmit<ExtArgs> | null
    /**
     * Filter which compare to delete.
     */
    where: compareWhereUniqueInput
  }

  /**
   * compare deleteMany
   */
  export type compareDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which compares to delete
     */
    where?: compareWhereInput
    /**
     * Limit how many compares to delete.
     */
    limit?: number
  }

  /**
   * compare without action
   */
  export type compareDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the compare
     */
    select?: compareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the compare
     */
    omit?: compareOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AddressScalarFieldEnum: {
    id: 'id',
    customer_id: 'customer_id',
    postal_code: 'postal_code',
    province: 'province',
    city: 'city',
    address: 'address',
    detailed_address: 'detailed_address',
    customer_name: 'customer_name',
    customer_number: 'customer_number'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const CartScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    customer_id: 'customer_id',
    product_id: 'product_id',
    color: 'color',
    size: 'size'
  };

  export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    parent_id: 'parent_id',
    image: 'image'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const ColorsScalarFieldEnum: {
    id: 'id',
    color: 'color'
  };

  export type ColorsScalarFieldEnum = (typeof ColorsScalarFieldEnum)[keyof typeof ColorsScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    family: 'family',
    number: 'number',
    email: 'email',
    geust: 'geust',
    created_at: 'created_at',
    created_at_fa: 'created_at_fa'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const OtpScalarFieldEnum: {
    id: 'id',
    serial: 'serial',
    number: 'number',
    expired_at: 'expired_at'
  };

  export type OtpScalarFieldEnum = (typeof OtpScalarFieldEnum)[keyof typeof OtpScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    image: 'image',
    price: 'price',
    special: 'special',
    warranty: 'warranty',
    rate: 'rate',
    category: 'category',
    description: 'description',
    quantity: 'quantity'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const SizesScalarFieldEnum: {
    id: 'id',
    size: 'size'
  };

  export type SizesScalarFieldEnum = (typeof SizesScalarFieldEnum)[keyof typeof SizesScalarFieldEnum]


  export const CompareScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    customer_id: 'customer_id'
  };

  export type CompareScalarFieldEnum = (typeof CompareScalarFieldEnum)[keyof typeof CompareScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type addressWhereInput = {
    AND?: addressWhereInput | addressWhereInput[]
    OR?: addressWhereInput[]
    NOT?: addressWhereInput | addressWhereInput[]
    id?: IntFilter<"address"> | number
    customer_id?: StringFilter<"address"> | string
    postal_code?: IntFilter<"address"> | number
    province?: StringFilter<"address"> | string
    city?: StringFilter<"address"> | string
    address?: StringFilter<"address"> | string
    detailed_address?: StringFilter<"address"> | string
    customer_name?: StringFilter<"address"> | string
    customer_number?: StringFilter<"address"> | string
    customer?: XOR<CustomerScalarRelationFilter, customerWhereInput>
  }

  export type addressOrderByWithRelationInput = {
    id?: SortOrder
    customer_id?: SortOrder
    postal_code?: SortOrder
    province?: SortOrder
    city?: SortOrder
    address?: SortOrder
    detailed_address?: SortOrder
    customer_name?: SortOrder
    customer_number?: SortOrder
    customer?: customerOrderByWithRelationInput
  }

  export type addressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: addressWhereInput | addressWhereInput[]
    OR?: addressWhereInput[]
    NOT?: addressWhereInput | addressWhereInput[]
    customer_id?: StringFilter<"address"> | string
    postal_code?: IntFilter<"address"> | number
    province?: StringFilter<"address"> | string
    city?: StringFilter<"address"> | string
    address?: StringFilter<"address"> | string
    detailed_address?: StringFilter<"address"> | string
    customer_name?: StringFilter<"address"> | string
    customer_number?: StringFilter<"address"> | string
    customer?: XOR<CustomerScalarRelationFilter, customerWhereInput>
  }, "id">

  export type addressOrderByWithAggregationInput = {
    id?: SortOrder
    customer_id?: SortOrder
    postal_code?: SortOrder
    province?: SortOrder
    city?: SortOrder
    address?: SortOrder
    detailed_address?: SortOrder
    customer_name?: SortOrder
    customer_number?: SortOrder
    _count?: addressCountOrderByAggregateInput
    _avg?: addressAvgOrderByAggregateInput
    _max?: addressMaxOrderByAggregateInput
    _min?: addressMinOrderByAggregateInput
    _sum?: addressSumOrderByAggregateInput
  }

  export type addressScalarWhereWithAggregatesInput = {
    AND?: addressScalarWhereWithAggregatesInput | addressScalarWhereWithAggregatesInput[]
    OR?: addressScalarWhereWithAggregatesInput[]
    NOT?: addressScalarWhereWithAggregatesInput | addressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"address"> | number
    customer_id?: StringWithAggregatesFilter<"address"> | string
    postal_code?: IntWithAggregatesFilter<"address"> | number
    province?: StringWithAggregatesFilter<"address"> | string
    city?: StringWithAggregatesFilter<"address"> | string
    address?: StringWithAggregatesFilter<"address"> | string
    detailed_address?: StringWithAggregatesFilter<"address"> | string
    customer_name?: StringWithAggregatesFilter<"address"> | string
    customer_number?: StringWithAggregatesFilter<"address"> | string
  }

  export type cartWhereInput = {
    AND?: cartWhereInput | cartWhereInput[]
    OR?: cartWhereInput[]
    NOT?: cartWhereInput | cartWhereInput[]
    id?: IntFilter<"cart"> | number
    quantity?: IntFilter<"cart"> | number
    customer_id?: StringFilter<"cart"> | string
    product_id?: StringFilter<"cart"> | string
    color?: StringFilter<"cart"> | string
    size?: StringFilter<"cart"> | string
  }

  export type cartOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrder
    customer_id?: SortOrder
    product_id?: SortOrder
    color?: SortOrder
    size?: SortOrder
  }

  export type cartWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: cartWhereInput | cartWhereInput[]
    OR?: cartWhereInput[]
    NOT?: cartWhereInput | cartWhereInput[]
    quantity?: IntFilter<"cart"> | number
    customer_id?: StringFilter<"cart"> | string
    product_id?: StringFilter<"cart"> | string
    color?: StringFilter<"cart"> | string
    size?: StringFilter<"cart"> | string
  }, "id">

  export type cartOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrder
    customer_id?: SortOrder
    product_id?: SortOrder
    color?: SortOrder
    size?: SortOrder
    _count?: cartCountOrderByAggregateInput
    _avg?: cartAvgOrderByAggregateInput
    _max?: cartMaxOrderByAggregateInput
    _min?: cartMinOrderByAggregateInput
    _sum?: cartSumOrderByAggregateInput
  }

  export type cartScalarWhereWithAggregatesInput = {
    AND?: cartScalarWhereWithAggregatesInput | cartScalarWhereWithAggregatesInput[]
    OR?: cartScalarWhereWithAggregatesInput[]
    NOT?: cartScalarWhereWithAggregatesInput | cartScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cart"> | number
    quantity?: IntWithAggregatesFilter<"cart"> | number
    customer_id?: StringWithAggregatesFilter<"cart"> | string
    product_id?: StringWithAggregatesFilter<"cart"> | string
    color?: StringWithAggregatesFilter<"cart"> | string
    size?: StringWithAggregatesFilter<"cart"> | string
  }

  export type categoriesWhereInput = {
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    id?: IntFilter<"categories"> | number
    name?: StringFilter<"categories"> | string
    url?: StringFilter<"categories"> | string
    parent_id?: IntNullableFilter<"categories"> | number | null
    image?: StringNullableFilter<"categories"> | string | null
  }

  export type categoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
  }

  export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    name?: StringFilter<"categories"> | string
    url?: StringFilter<"categories"> | string
    parent_id?: IntNullableFilter<"categories"> | number | null
    image?: StringNullableFilter<"categories"> | string | null
  }, "id">

  export type categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    _count?: categoriesCountOrderByAggregateInput
    _avg?: categoriesAvgOrderByAggregateInput
    _max?: categoriesMaxOrderByAggregateInput
    _min?: categoriesMinOrderByAggregateInput
    _sum?: categoriesSumOrderByAggregateInput
  }

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    OR?: categoriesScalarWhereWithAggregatesInput[]
    NOT?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"categories"> | number
    name?: StringWithAggregatesFilter<"categories"> | string
    url?: StringWithAggregatesFilter<"categories"> | string
    parent_id?: IntNullableWithAggregatesFilter<"categories"> | number | null
    image?: StringNullableWithAggregatesFilter<"categories"> | string | null
  }

  export type colorsWhereInput = {
    AND?: colorsWhereInput | colorsWhereInput[]
    OR?: colorsWhereInput[]
    NOT?: colorsWhereInput | colorsWhereInput[]
    id?: IntFilter<"colors"> | number
    color?: StringFilter<"colors"> | string
  }

  export type colorsOrderByWithRelationInput = {
    id?: SortOrder
    color?: SortOrder
  }

  export type colorsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: colorsWhereInput | colorsWhereInput[]
    OR?: colorsWhereInput[]
    NOT?: colorsWhereInput | colorsWhereInput[]
    color?: StringFilter<"colors"> | string
  }, "id">

  export type colorsOrderByWithAggregationInput = {
    id?: SortOrder
    color?: SortOrder
    _count?: colorsCountOrderByAggregateInput
    _avg?: colorsAvgOrderByAggregateInput
    _max?: colorsMaxOrderByAggregateInput
    _min?: colorsMinOrderByAggregateInput
    _sum?: colorsSumOrderByAggregateInput
  }

  export type colorsScalarWhereWithAggregatesInput = {
    AND?: colorsScalarWhereWithAggregatesInput | colorsScalarWhereWithAggregatesInput[]
    OR?: colorsScalarWhereWithAggregatesInput[]
    NOT?: colorsScalarWhereWithAggregatesInput | colorsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"colors"> | number
    color?: StringWithAggregatesFilter<"colors"> | string
  }

  export type customerWhereInput = {
    AND?: customerWhereInput | customerWhereInput[]
    OR?: customerWhereInput[]
    NOT?: customerWhereInput | customerWhereInput[]
    id?: StringFilter<"customer"> | string
    name?: StringNullableFilter<"customer"> | string | null
    family?: StringNullableFilter<"customer"> | string | null
    number?: StringNullableFilter<"customer"> | string | null
    email?: StringNullableFilter<"customer"> | string | null
    geust?: BoolFilter<"customer"> | boolean
    created_at?: DateTimeNullableFilter<"customer"> | Date | string | null
    created_at_fa?: StringNullableFilter<"customer"> | string | null
    address?: AddressListRelationFilter
  }

  export type customerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    family?: SortOrderInput | SortOrder
    number?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    geust?: SortOrder
    created_at?: SortOrderInput | SortOrder
    created_at_fa?: SortOrderInput | SortOrder
    address?: addressOrderByRelationAggregateInput
  }

  export type customerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    number?: string
    AND?: customerWhereInput | customerWhereInput[]
    OR?: customerWhereInput[]
    NOT?: customerWhereInput | customerWhereInput[]
    name?: StringNullableFilter<"customer"> | string | null
    family?: StringNullableFilter<"customer"> | string | null
    email?: StringNullableFilter<"customer"> | string | null
    geust?: BoolFilter<"customer"> | boolean
    created_at?: DateTimeNullableFilter<"customer"> | Date | string | null
    created_at_fa?: StringNullableFilter<"customer"> | string | null
    address?: AddressListRelationFilter
  }, "id" | "number">

  export type customerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    family?: SortOrderInput | SortOrder
    number?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    geust?: SortOrder
    created_at?: SortOrderInput | SortOrder
    created_at_fa?: SortOrderInput | SortOrder
    _count?: customerCountOrderByAggregateInput
    _max?: customerMaxOrderByAggregateInput
    _min?: customerMinOrderByAggregateInput
  }

  export type customerScalarWhereWithAggregatesInput = {
    AND?: customerScalarWhereWithAggregatesInput | customerScalarWhereWithAggregatesInput[]
    OR?: customerScalarWhereWithAggregatesInput[]
    NOT?: customerScalarWhereWithAggregatesInput | customerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"customer"> | string
    name?: StringNullableWithAggregatesFilter<"customer"> | string | null
    family?: StringNullableWithAggregatesFilter<"customer"> | string | null
    number?: StringNullableWithAggregatesFilter<"customer"> | string | null
    email?: StringNullableWithAggregatesFilter<"customer"> | string | null
    geust?: BoolWithAggregatesFilter<"customer"> | boolean
    created_at?: DateTimeNullableWithAggregatesFilter<"customer"> | Date | string | null
    created_at_fa?: StringNullableWithAggregatesFilter<"customer"> | string | null
  }

  export type otpWhereInput = {
    AND?: otpWhereInput | otpWhereInput[]
    OR?: otpWhereInput[]
    NOT?: otpWhereInput | otpWhereInput[]
    id?: IntFilter<"otp"> | number
    serial?: IntFilter<"otp"> | number
    number?: StringFilter<"otp"> | string
    expired_at?: DateTimeFilter<"otp"> | Date | string
  }

  export type otpOrderByWithRelationInput = {
    id?: SortOrder
    serial?: SortOrder
    number?: SortOrder
    expired_at?: SortOrder
  }

  export type otpWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    number?: string
    AND?: otpWhereInput | otpWhereInput[]
    OR?: otpWhereInput[]
    NOT?: otpWhereInput | otpWhereInput[]
    serial?: IntFilter<"otp"> | number
    expired_at?: DateTimeFilter<"otp"> | Date | string
  }, "id" | "number">

  export type otpOrderByWithAggregationInput = {
    id?: SortOrder
    serial?: SortOrder
    number?: SortOrder
    expired_at?: SortOrder
    _count?: otpCountOrderByAggregateInput
    _avg?: otpAvgOrderByAggregateInput
    _max?: otpMaxOrderByAggregateInput
    _min?: otpMinOrderByAggregateInput
    _sum?: otpSumOrderByAggregateInput
  }

  export type otpScalarWhereWithAggregatesInput = {
    AND?: otpScalarWhereWithAggregatesInput | otpScalarWhereWithAggregatesInput[]
    OR?: otpScalarWhereWithAggregatesInput[]
    NOT?: otpScalarWhereWithAggregatesInput | otpScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"otp"> | number
    serial?: IntWithAggregatesFilter<"otp"> | number
    number?: StringWithAggregatesFilter<"otp"> | string
    expired_at?: DateTimeWithAggregatesFilter<"otp"> | Date | string
  }

  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    id?: StringFilter<"products"> | string
    name?: StringFilter<"products"> | string
    url?: StringFilter<"products"> | string
    image?: StringFilter<"products"> | string
    price?: FloatFilter<"products"> | number
    special?: IntFilter<"products"> | number
    warranty?: StringNullableFilter<"products"> | string | null
    rate?: FloatNullableFilter<"products"> | number | null
    category?: IntFilter<"products"> | number
    description?: StringNullableFilter<"products"> | string | null
    quantity?: IntFilter<"products"> | number
  }

  export type productsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    image?: SortOrder
    price?: SortOrder
    special?: SortOrder
    warranty?: SortOrderInput | SortOrder
    rate?: SortOrderInput | SortOrder
    category?: SortOrder
    description?: SortOrderInput | SortOrder
    quantity?: SortOrder
  }

  export type productsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    name?: StringFilter<"products"> | string
    url?: StringFilter<"products"> | string
    image?: StringFilter<"products"> | string
    price?: FloatFilter<"products"> | number
    special?: IntFilter<"products"> | number
    warranty?: StringNullableFilter<"products"> | string | null
    rate?: FloatNullableFilter<"products"> | number | null
    category?: IntFilter<"products"> | number
    description?: StringNullableFilter<"products"> | string | null
    quantity?: IntFilter<"products"> | number
  }, "id">

  export type productsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    image?: SortOrder
    price?: SortOrder
    special?: SortOrder
    warranty?: SortOrderInput | SortOrder
    rate?: SortOrderInput | SortOrder
    category?: SortOrder
    description?: SortOrderInput | SortOrder
    quantity?: SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    OR?: productsScalarWhereWithAggregatesInput[]
    NOT?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"products"> | string
    name?: StringWithAggregatesFilter<"products"> | string
    url?: StringWithAggregatesFilter<"products"> | string
    image?: StringWithAggregatesFilter<"products"> | string
    price?: FloatWithAggregatesFilter<"products"> | number
    special?: IntWithAggregatesFilter<"products"> | number
    warranty?: StringNullableWithAggregatesFilter<"products"> | string | null
    rate?: FloatNullableWithAggregatesFilter<"products"> | number | null
    category?: IntWithAggregatesFilter<"products"> | number
    description?: StringNullableWithAggregatesFilter<"products"> | string | null
    quantity?: IntWithAggregatesFilter<"products"> | number
  }

  export type sizesWhereInput = {
    AND?: sizesWhereInput | sizesWhereInput[]
    OR?: sizesWhereInput[]
    NOT?: sizesWhereInput | sizesWhereInput[]
    id?: IntFilter<"sizes"> | number
    size?: StringFilter<"sizes"> | string
  }

  export type sizesOrderByWithRelationInput = {
    id?: SortOrder
    size?: SortOrder
  }

  export type sizesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: sizesWhereInput | sizesWhereInput[]
    OR?: sizesWhereInput[]
    NOT?: sizesWhereInput | sizesWhereInput[]
    size?: StringFilter<"sizes"> | string
  }, "id">

  export type sizesOrderByWithAggregationInput = {
    id?: SortOrder
    size?: SortOrder
    _count?: sizesCountOrderByAggregateInput
    _avg?: sizesAvgOrderByAggregateInput
    _max?: sizesMaxOrderByAggregateInput
    _min?: sizesMinOrderByAggregateInput
    _sum?: sizesSumOrderByAggregateInput
  }

  export type sizesScalarWhereWithAggregatesInput = {
    AND?: sizesScalarWhereWithAggregatesInput | sizesScalarWhereWithAggregatesInput[]
    OR?: sizesScalarWhereWithAggregatesInput[]
    NOT?: sizesScalarWhereWithAggregatesInput | sizesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sizes"> | number
    size?: StringWithAggregatesFilter<"sizes"> | string
  }

  export type compareWhereInput = {
    AND?: compareWhereInput | compareWhereInput[]
    OR?: compareWhereInput[]
    NOT?: compareWhereInput | compareWhereInput[]
    id?: IntFilter<"compare"> | number
    product_id?: StringFilter<"compare"> | string
    customer_id?: StringFilter<"compare"> | string
  }

  export type compareOrderByWithRelationInput = {
    id?: SortOrder
    product_id?: SortOrder
    customer_id?: SortOrder
  }

  export type compareWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: compareWhereInput | compareWhereInput[]
    OR?: compareWhereInput[]
    NOT?: compareWhereInput | compareWhereInput[]
    product_id?: StringFilter<"compare"> | string
    customer_id?: StringFilter<"compare"> | string
  }, "id">

  export type compareOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrder
    customer_id?: SortOrder
    _count?: compareCountOrderByAggregateInput
    _avg?: compareAvgOrderByAggregateInput
    _max?: compareMaxOrderByAggregateInput
    _min?: compareMinOrderByAggregateInput
    _sum?: compareSumOrderByAggregateInput
  }

  export type compareScalarWhereWithAggregatesInput = {
    AND?: compareScalarWhereWithAggregatesInput | compareScalarWhereWithAggregatesInput[]
    OR?: compareScalarWhereWithAggregatesInput[]
    NOT?: compareScalarWhereWithAggregatesInput | compareScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"compare"> | number
    product_id?: StringWithAggregatesFilter<"compare"> | string
    customer_id?: StringWithAggregatesFilter<"compare"> | string
  }

  export type addressCreateInput = {
    postal_code: number
    province: string
    city: string
    address: string
    detailed_address: string
    customer_name?: string
    customer_number?: string
    customer: customerCreateNestedOneWithoutAddressInput
  }

  export type addressUncheckedCreateInput = {
    id?: number
    customer_id: string
    postal_code: number
    province: string
    city: string
    address: string
    detailed_address: string
    customer_name?: string
    customer_number?: string
  }

  export type addressUpdateInput = {
    postal_code?: IntFieldUpdateOperationsInput | number
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    detailed_address?: StringFieldUpdateOperationsInput | string
    customer_name?: StringFieldUpdateOperationsInput | string
    customer_number?: StringFieldUpdateOperationsInput | string
    customer?: customerUpdateOneRequiredWithoutAddressNestedInput
  }

  export type addressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    detailed_address?: StringFieldUpdateOperationsInput | string
    customer_name?: StringFieldUpdateOperationsInput | string
    customer_number?: StringFieldUpdateOperationsInput | string
  }

  export type addressCreateManyInput = {
    id?: number
    customer_id: string
    postal_code: number
    province: string
    city: string
    address: string
    detailed_address: string
    customer_name?: string
    customer_number?: string
  }

  export type addressUpdateManyMutationInput = {
    postal_code?: IntFieldUpdateOperationsInput | number
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    detailed_address?: StringFieldUpdateOperationsInput | string
    customer_name?: StringFieldUpdateOperationsInput | string
    customer_number?: StringFieldUpdateOperationsInput | string
  }

  export type addressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: StringFieldUpdateOperationsInput | string
    postal_code?: IntFieldUpdateOperationsInput | number
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    detailed_address?: StringFieldUpdateOperationsInput | string
    customer_name?: StringFieldUpdateOperationsInput | string
    customer_number?: StringFieldUpdateOperationsInput | string
  }

  export type cartCreateInput = {
    quantity: number
    customer_id: string
    product_id: string
    color: string
    size: string
  }

  export type cartUncheckedCreateInput = {
    id?: number
    quantity: number
    customer_id: string
    product_id: string
    color: string
    size: string
  }

  export type cartUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    customer_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
  }

  export type cartUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    customer_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
  }

  export type cartCreateManyInput = {
    id?: number
    quantity: number
    customer_id: string
    product_id: string
    color: string
    size: string
  }

  export type cartUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    customer_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
  }

  export type cartUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    customer_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
  }

  export type categoriesCreateInput = {
    id: number
    name: string
    url: string
    parent_id?: number | null
    image?: string | null
  }

  export type categoriesUncheckedCreateInput = {
    id: number
    name: string
    url: string
    parent_id?: number | null
    image?: string | null
  }

  export type categoriesUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriesCreateManyInput = {
    id: number
    name: string
    url: string
    parent_id?: number | null
    image?: string | null
  }

  export type categoriesUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type colorsCreateInput = {
    color: string
  }

  export type colorsUncheckedCreateInput = {
    id?: number
    color: string
  }

  export type colorsUpdateInput = {
    color?: StringFieldUpdateOperationsInput | string
  }

  export type colorsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
  }

  export type colorsCreateManyInput = {
    id?: number
    color: string
  }

  export type colorsUpdateManyMutationInput = {
    color?: StringFieldUpdateOperationsInput | string
  }

  export type colorsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
  }

  export type customerCreateInput = {
    id: string
    name?: string | null
    family?: string | null
    number?: string | null
    email?: string | null
    geust: boolean
    created_at?: Date | string | null
    created_at_fa?: string | null
    address?: addressCreateNestedManyWithoutCustomerInput
  }

  export type customerUncheckedCreateInput = {
    id: string
    name?: string | null
    family?: string | null
    number?: string | null
    email?: string | null
    geust: boolean
    created_at?: Date | string | null
    created_at_fa?: string | null
    address?: addressUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    family?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    geust?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at_fa?: NullableStringFieldUpdateOperationsInput | string | null
    address?: addressUpdateManyWithoutCustomerNestedInput
  }

  export type customerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    family?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    geust?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at_fa?: NullableStringFieldUpdateOperationsInput | string | null
    address?: addressUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type customerCreateManyInput = {
    id: string
    name?: string | null
    family?: string | null
    number?: string | null
    email?: string | null
    geust: boolean
    created_at?: Date | string | null
    created_at_fa?: string | null
  }

  export type customerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    family?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    geust?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at_fa?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type customerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    family?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    geust?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at_fa?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type otpCreateInput = {
    serial: number
    number: string
    expired_at: Date | string
  }

  export type otpUncheckedCreateInput = {
    id?: number
    serial: number
    number: string
    expired_at: Date | string
  }

  export type otpUpdateInput = {
    serial?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type otpUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    serial?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type otpCreateManyInput = {
    id?: number
    serial: number
    number: string
    expired_at: Date | string
  }

  export type otpUpdateManyMutationInput = {
    serial?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type otpUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    serial?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    expired_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsCreateInput = {
    id: string
    name: string
    url: string
    image: string
    price: number
    special?: number
    warranty?: string | null
    rate?: number | null
    category: number
    description?: string | null
    quantity: number
  }

  export type productsUncheckedCreateInput = {
    id: string
    name: string
    url: string
    image: string
    price: number
    special?: number
    warranty?: string | null
    rate?: number | null
    category: number
    description?: string | null
    quantity: number
  }

  export type productsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    special?: IntFieldUpdateOperationsInput | number
    warranty?: NullableStringFieldUpdateOperationsInput | string | null
    rate?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type productsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    special?: IntFieldUpdateOperationsInput | number
    warranty?: NullableStringFieldUpdateOperationsInput | string | null
    rate?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type productsCreateManyInput = {
    id: string
    name: string
    url: string
    image: string
    price: number
    special?: number
    warranty?: string | null
    rate?: number | null
    category: number
    description?: string | null
    quantity: number
  }

  export type productsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    special?: IntFieldUpdateOperationsInput | number
    warranty?: NullableStringFieldUpdateOperationsInput | string | null
    rate?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type productsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    special?: IntFieldUpdateOperationsInput | number
    warranty?: NullableStringFieldUpdateOperationsInput | string | null
    rate?: NullableFloatFieldUpdateOperationsInput | number | null
    category?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type sizesCreateInput = {
    size: string
  }

  export type sizesUncheckedCreateInput = {
    id?: number
    size: string
  }

  export type sizesUpdateInput = {
    size?: StringFieldUpdateOperationsInput | string
  }

  export type sizesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
  }

  export type sizesCreateManyInput = {
    id?: number
    size: string
  }

  export type sizesUpdateManyMutationInput = {
    size?: StringFieldUpdateOperationsInput | string
  }

  export type sizesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
  }

  export type compareCreateInput = {
    product_id: string
    customer_id: string
  }

  export type compareUncheckedCreateInput = {
    id?: number
    product_id: string
    customer_id: string
  }

  export type compareUpdateInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
  }

  export type compareUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
  }

  export type compareCreateManyInput = {
    id?: number
    product_id: string
    customer_id: string
  }

  export type compareUpdateManyMutationInput = {
    product_id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
  }

  export type compareUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type CustomerScalarRelationFilter = {
    is?: customerWhereInput
    isNot?: customerWhereInput
  }

  export type addressCountOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    postal_code?: SortOrder
    province?: SortOrder
    city?: SortOrder
    address?: SortOrder
    detailed_address?: SortOrder
    customer_name?: SortOrder
    customer_number?: SortOrder
  }

  export type addressAvgOrderByAggregateInput = {
    id?: SortOrder
    postal_code?: SortOrder
  }

  export type addressMaxOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    postal_code?: SortOrder
    province?: SortOrder
    city?: SortOrder
    address?: SortOrder
    detailed_address?: SortOrder
    customer_name?: SortOrder
    customer_number?: SortOrder
  }

  export type addressMinOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    postal_code?: SortOrder
    province?: SortOrder
    city?: SortOrder
    address?: SortOrder
    detailed_address?: SortOrder
    customer_name?: SortOrder
    customer_number?: SortOrder
  }

  export type addressSumOrderByAggregateInput = {
    id?: SortOrder
    postal_code?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
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

  export type cartCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    customer_id?: SortOrder
    product_id?: SortOrder
    color?: SortOrder
    size?: SortOrder
  }

  export type cartAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
  }

  export type cartMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    customer_id?: SortOrder
    product_id?: SortOrder
    color?: SortOrder
    size?: SortOrder
  }

  export type cartMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    customer_id?: SortOrder
    product_id?: SortOrder
    color?: SortOrder
    size?: SortOrder
  }

  export type cartSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    parent_id?: SortOrder
    image?: SortOrder
  }

  export type categoriesAvgOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
  }

  export type categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    parent_id?: SortOrder
    image?: SortOrder
  }

  export type categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    parent_id?: SortOrder
    image?: SortOrder
  }

  export type categoriesSumOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type colorsCountOrderByAggregateInput = {
    id?: SortOrder
    color?: SortOrder
  }

  export type colorsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type colorsMaxOrderByAggregateInput = {
    id?: SortOrder
    color?: SortOrder
  }

  export type colorsMinOrderByAggregateInput = {
    id?: SortOrder
    color?: SortOrder
  }

  export type colorsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AddressListRelationFilter = {
    every?: addressWhereInput
    some?: addressWhereInput
    none?: addressWhereInput
  }

  export type addressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type customerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    family?: SortOrder
    number?: SortOrder
    email?: SortOrder
    geust?: SortOrder
    created_at?: SortOrder
    created_at_fa?: SortOrder
  }

  export type customerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    family?: SortOrder
    number?: SortOrder
    email?: SortOrder
    geust?: SortOrder
    created_at?: SortOrder
    created_at_fa?: SortOrder
  }

  export type customerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    family?: SortOrder
    number?: SortOrder
    email?: SortOrder
    geust?: SortOrder
    created_at?: SortOrder
    created_at_fa?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type otpCountOrderByAggregateInput = {
    id?: SortOrder
    serial?: SortOrder
    number?: SortOrder
    expired_at?: SortOrder
  }

  export type otpAvgOrderByAggregateInput = {
    id?: SortOrder
    serial?: SortOrder
  }

  export type otpMaxOrderByAggregateInput = {
    id?: SortOrder
    serial?: SortOrder
    number?: SortOrder
    expired_at?: SortOrder
  }

  export type otpMinOrderByAggregateInput = {
    id?: SortOrder
    serial?: SortOrder
    number?: SortOrder
    expired_at?: SortOrder
  }

  export type otpSumOrderByAggregateInput = {
    id?: SortOrder
    serial?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type productsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    image?: SortOrder
    price?: SortOrder
    special?: SortOrder
    warranty?: SortOrder
    rate?: SortOrder
    category?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    price?: SortOrder
    special?: SortOrder
    rate?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    image?: SortOrder
    price?: SortOrder
    special?: SortOrder
    warranty?: SortOrder
    rate?: SortOrder
    category?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    image?: SortOrder
    price?: SortOrder
    special?: SortOrder
    warranty?: SortOrder
    rate?: SortOrder
    category?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    price?: SortOrder
    special?: SortOrder
    rate?: SortOrder
    category?: SortOrder
    quantity?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type sizesCountOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
  }

  export type sizesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type sizesMaxOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
  }

  export type sizesMinOrderByAggregateInput = {
    id?: SortOrder
    size?: SortOrder
  }

  export type sizesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type compareCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    customer_id?: SortOrder
  }

  export type compareAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type compareMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    customer_id?: SortOrder
  }

  export type compareMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    customer_id?: SortOrder
  }

  export type compareSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type customerCreateNestedOneWithoutAddressInput = {
    create?: XOR<customerCreateWithoutAddressInput, customerUncheckedCreateWithoutAddressInput>
    connectOrCreate?: customerCreateOrConnectWithoutAddressInput
    connect?: customerWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type customerUpdateOneRequiredWithoutAddressNestedInput = {
    create?: XOR<customerCreateWithoutAddressInput, customerUncheckedCreateWithoutAddressInput>
    connectOrCreate?: customerCreateOrConnectWithoutAddressInput
    upsert?: customerUpsertWithoutAddressInput
    connect?: customerWhereUniqueInput
    update?: XOR<XOR<customerUpdateToOneWithWhereWithoutAddressInput, customerUpdateWithoutAddressInput>, customerUncheckedUpdateWithoutAddressInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type addressCreateNestedManyWithoutCustomerInput = {
    create?: XOR<addressCreateWithoutCustomerInput, addressUncheckedCreateWithoutCustomerInput> | addressCreateWithoutCustomerInput[] | addressUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: addressCreateOrConnectWithoutCustomerInput | addressCreateOrConnectWithoutCustomerInput[]
    createMany?: addressCreateManyCustomerInputEnvelope
    connect?: addressWhereUniqueInput | addressWhereUniqueInput[]
  }

  export type addressUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<addressCreateWithoutCustomerInput, addressUncheckedCreateWithoutCustomerInput> | addressCreateWithoutCustomerInput[] | addressUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: addressCreateOrConnectWithoutCustomerInput | addressCreateOrConnectWithoutCustomerInput[]
    createMany?: addressCreateManyCustomerInputEnvelope
    connect?: addressWhereUniqueInput | addressWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type addressUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<addressCreateWithoutCustomerInput, addressUncheckedCreateWithoutCustomerInput> | addressCreateWithoutCustomerInput[] | addressUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: addressCreateOrConnectWithoutCustomerInput | addressCreateOrConnectWithoutCustomerInput[]
    upsert?: addressUpsertWithWhereUniqueWithoutCustomerInput | addressUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: addressCreateManyCustomerInputEnvelope
    set?: addressWhereUniqueInput | addressWhereUniqueInput[]
    disconnect?: addressWhereUniqueInput | addressWhereUniqueInput[]
    delete?: addressWhereUniqueInput | addressWhereUniqueInput[]
    connect?: addressWhereUniqueInput | addressWhereUniqueInput[]
    update?: addressUpdateWithWhereUniqueWithoutCustomerInput | addressUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: addressUpdateManyWithWhereWithoutCustomerInput | addressUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: addressScalarWhereInput | addressScalarWhereInput[]
  }

  export type addressUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<addressCreateWithoutCustomerInput, addressUncheckedCreateWithoutCustomerInput> | addressCreateWithoutCustomerInput[] | addressUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: addressCreateOrConnectWithoutCustomerInput | addressCreateOrConnectWithoutCustomerInput[]
    upsert?: addressUpsertWithWhereUniqueWithoutCustomerInput | addressUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: addressCreateManyCustomerInputEnvelope
    set?: addressWhereUniqueInput | addressWhereUniqueInput[]
    disconnect?: addressWhereUniqueInput | addressWhereUniqueInput[]
    delete?: addressWhereUniqueInput | addressWhereUniqueInput[]
    connect?: addressWhereUniqueInput | addressWhereUniqueInput[]
    update?: addressUpdateWithWhereUniqueWithoutCustomerInput | addressUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: addressUpdateManyWithWhereWithoutCustomerInput | addressUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: addressScalarWhereInput | addressScalarWhereInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
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
    in?: number[]
    notIn?: number[]
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type customerCreateWithoutAddressInput = {
    id: string
    name?: string | null
    family?: string | null
    number?: string | null
    email?: string | null
    geust: boolean
    created_at?: Date | string | null
    created_at_fa?: string | null
  }

  export type customerUncheckedCreateWithoutAddressInput = {
    id: string
    name?: string | null
    family?: string | null
    number?: string | null
    email?: string | null
    geust: boolean
    created_at?: Date | string | null
    created_at_fa?: string | null
  }

  export type customerCreateOrConnectWithoutAddressInput = {
    where: customerWhereUniqueInput
    create: XOR<customerCreateWithoutAddressInput, customerUncheckedCreateWithoutAddressInput>
  }

  export type customerUpsertWithoutAddressInput = {
    update: XOR<customerUpdateWithoutAddressInput, customerUncheckedUpdateWithoutAddressInput>
    create: XOR<customerCreateWithoutAddressInput, customerUncheckedCreateWithoutAddressInput>
    where?: customerWhereInput
  }

  export type customerUpdateToOneWithWhereWithoutAddressInput = {
    where?: customerWhereInput
    data: XOR<customerUpdateWithoutAddressInput, customerUncheckedUpdateWithoutAddressInput>
  }

  export type customerUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    family?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    geust?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at_fa?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type customerUncheckedUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    family?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    geust?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at_fa?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type addressCreateWithoutCustomerInput = {
    postal_code: number
    province: string
    city: string
    address: string
    detailed_address: string
    customer_name?: string
    customer_number?: string
  }

  export type addressUncheckedCreateWithoutCustomerInput = {
    id?: number
    postal_code: number
    province: string
    city: string
    address: string
    detailed_address: string
    customer_name?: string
    customer_number?: string
  }

  export type addressCreateOrConnectWithoutCustomerInput = {
    where: addressWhereUniqueInput
    create: XOR<addressCreateWithoutCustomerInput, addressUncheckedCreateWithoutCustomerInput>
  }

  export type addressCreateManyCustomerInputEnvelope = {
    data: addressCreateManyCustomerInput | addressCreateManyCustomerInput[]
  }

  export type addressUpsertWithWhereUniqueWithoutCustomerInput = {
    where: addressWhereUniqueInput
    update: XOR<addressUpdateWithoutCustomerInput, addressUncheckedUpdateWithoutCustomerInput>
    create: XOR<addressCreateWithoutCustomerInput, addressUncheckedCreateWithoutCustomerInput>
  }

  export type addressUpdateWithWhereUniqueWithoutCustomerInput = {
    where: addressWhereUniqueInput
    data: XOR<addressUpdateWithoutCustomerInput, addressUncheckedUpdateWithoutCustomerInput>
  }

  export type addressUpdateManyWithWhereWithoutCustomerInput = {
    where: addressScalarWhereInput
    data: XOR<addressUpdateManyMutationInput, addressUncheckedUpdateManyWithoutCustomerInput>
  }

  export type addressScalarWhereInput = {
    AND?: addressScalarWhereInput | addressScalarWhereInput[]
    OR?: addressScalarWhereInput[]
    NOT?: addressScalarWhereInput | addressScalarWhereInput[]
    id?: IntFilter<"address"> | number
    customer_id?: StringFilter<"address"> | string
    postal_code?: IntFilter<"address"> | number
    province?: StringFilter<"address"> | string
    city?: StringFilter<"address"> | string
    address?: StringFilter<"address"> | string
    detailed_address?: StringFilter<"address"> | string
    customer_name?: StringFilter<"address"> | string
    customer_number?: StringFilter<"address"> | string
  }

  export type addressCreateManyCustomerInput = {
    id?: number
    postal_code: number
    province: string
    city: string
    address: string
    detailed_address: string
    customer_name?: string
    customer_number?: string
  }

  export type addressUpdateWithoutCustomerInput = {
    postal_code?: IntFieldUpdateOperationsInput | number
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    detailed_address?: StringFieldUpdateOperationsInput | string
    customer_name?: StringFieldUpdateOperationsInput | string
    customer_number?: StringFieldUpdateOperationsInput | string
  }

  export type addressUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    postal_code?: IntFieldUpdateOperationsInput | number
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    detailed_address?: StringFieldUpdateOperationsInput | string
    customer_name?: StringFieldUpdateOperationsInput | string
    customer_number?: StringFieldUpdateOperationsInput | string
  }

  export type addressUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    postal_code?: IntFieldUpdateOperationsInput | number
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    detailed_address?: StringFieldUpdateOperationsInput | string
    customer_name?: StringFieldUpdateOperationsInput | string
    customer_number?: StringFieldUpdateOperationsInput | string
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