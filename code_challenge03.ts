declare module "lodash" {
  interface HeadArr {
    array: Array<number>;
  }

  function head(array: HeadArr): number | undefined;

  interface HasIn {
    object: Object;
    key: string;
  }

  function hasIn({ object, key }: HasIn): boolean;

  interface IsBoolean {
    value: boolean | null;
  }
  function isBoolean(value: IsBoolean): boolean;

  function toString(value: any): string;

  interface Split {
    string: string;
    separator: RegExp | string;
    limit: number;
  }

  function split({ string, separator, limit }: Split): Split;

  interface HasPath {
    object: object;
    path: Array<string> | string;
  }
  function hasPath({ object, path }: HasPath): boolean;

  interface Filter {
    array: Array<string>;
    predicate: Function;
  }

  function filter({ array, predicate }: Filter): Array<string>;

  function every(array: Array<string>, predicate: Function): boolean;

  function map(array: Array<string>, iteratee: Function): Array<string>;
}
