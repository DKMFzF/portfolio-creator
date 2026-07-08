declare module "@/shared/lib/ssgi/SSGINode" {
  import type { SSGIPassNode } from "@/shared/types";

  export function ssgi(
    beautyNode: unknown,
    depthNode: unknown,
    normalNode: unknown,
    camera: unknown,
  ): SSGIPassNode;
}
