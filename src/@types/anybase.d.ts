declare module 'any-base' {
  export default function (
    a: string | any[],
    b: string | any[],
  ): (arg: string) => string;
}
