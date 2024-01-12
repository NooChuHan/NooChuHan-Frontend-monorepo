import fs from "fs";
import path from "path";
import matter from "gray-matter"; // 마크다운 파일의 frontmatter를 파싱하기 위한 모듈
import remark from "remark"; // 마크다운을 파싱하고 변환하기 위한 모듈
import html from "remark-html"; // 마크다운을 HTML로 변환하기 위한 remark 플러그인
import { markdownToHtml } from "./markdownToHtml";

export async function getPostData(id: string) {
    // const path = usePathname();
    // const postsDirectory = path.concat(process.cwd(), "posts");
    const postsDirectory = path.join(process.cwd(), "src/posts"); // process.cwd()와 "posts" 폴더를 합쳐서 절대 경로를 만듭니다.

    const fullPath = path.join(postsDirectory, `${id}.md`); // 포스트 파일의 전체 경로를 만듭니다.
    // const fileContents = fs.readFileSync(fullPath, "utf8");
    const { default: fileContents } = await import(postsDirectory); // 이걸로 대체

    // const postsDirectory = "/posts"

    // const fullPath = postsDirectory.concat( `${id}.md`);
    // const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // // Use remark to convert markdown into HTML string
    // const processedContent = await remark()
    //     .use(html)
    //     .process(matterResult.content);
    const contentHtml = markdownToHtml({ markdown: fileContents });

    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
}
