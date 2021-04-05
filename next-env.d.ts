/// <reference types="next" />
/// <reference types="next/types/global" />

declare module "*.module.scss" {
  const cssModule: { [key: string]: string };
  export = cssModule;
}
