declare module "use-resize-observer" {
  import { MutableRefObject } from "react";

  declare function useResizeObserver(input?: {
    ref?: MutableRefObject;
    defaultWidth?: number;
    defaultHeight?: number;
    useDefaults?: boolean;
  }): { ref: MutableRefObject; width: number; height: number };
  export default useResizeObserver;
}
