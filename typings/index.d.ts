import 'egg';

declare module 'egg' {
  export interface Application {
    redlock: any,
  }
}