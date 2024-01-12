import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

// markdown 텍스트를 html로 변환하는 함수

export function markdownToHtml({ markdown }: { markdown: string }) {
    return unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeStringify)
        .process(markdown);
}
