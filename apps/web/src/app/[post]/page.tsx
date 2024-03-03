'use client';
import { markdownToHtml } from '../../../utils/markdownToHtml';
import React = require('react');
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { getPostData } from '../../../utils/getPostData';
import mdfile from '../../../posts/test.md';

// const { default: markdown } = await import(`src/contents/blog/${path}`); // 이걸로 대체

export default function Post() {
  const [html, setHtml] = useState<string>('');
  const pathname = usePathname();

  const postsDirectory = pathname.concat(process.cwd(), 'posts');
  console.log(process.cwd());
  // console.log(pathname);
  const postData = getPostData(pathname);
  useEffect(() => {
    markdownToHtml({
      // markdown: JSON.stringify(mdfile, 2, null),
      markdown: mdfile,
    }).then(result => {
      setHtml(result.toString());
    });
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
