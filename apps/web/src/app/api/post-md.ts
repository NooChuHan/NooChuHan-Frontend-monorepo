import fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function postMd(req: NextApiRequest, res: NextApiResponse) {
  // MD 파일의 경로를 설정합니다. 이 경로는 프로젝트 구조에 따라 다를 수 있습니다.
  const filePath = path.join(process.cwd(), 'posts', `${req}.md`);

  // 파일의 내용을 동기적으로 읽습니다.
  const content = fs.readFileSync(filePath, 'utf8');

  console.log(req, filePath, content);

  // 응답으로 파일의 내용을 반환합니다.
  res.status(200).send(content);
}
