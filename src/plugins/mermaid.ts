import type { RemarkPlugin } from "@astrojs/markdown-remark"
import { visit } from "unist-util-visit"
import { dedent } from "ts-dedent"

export const mermaid: RemarkPlugin<[]> = () => tree => {
  visit(tree, "code", node => {
    if (node.lang !== "mermaid") return

    // @ts-ignore
    node.type = "html"
    node.value = dedent`
      <div class="mermaid" data-content="${node.value || ''}">
        <p>Loading graph...</p>
      </div>
    `
  })
}
