'use client';
import { markdownToHtml } from '../../../utils/markdown-to-html';
import React = require('react');
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { getPostData } from '../../../utils/get-post-data';
// import mdfile from '../../../posts/test.md';
import axios from 'axios';
import { AxiosStatic } from 'axios';

export default function Post() {
  const [html, setHtml] = useState<string>('');
  
  const pathname = usePathname();

  const getMd = async () => {
    const { data } = await axios.get<string>('/api/post-md', {
      params: {
        title: pathname,
      },
    });
    return data;
  };

  const postsDirectory = pathname.concat(process.cwd(), 'posts');
  // eslint-disable-next-line no-console
  console.log(process.cwd());
  // console.log(pathname);
  // const postData = getPostData(pathname);
  useEffect(() => {
    getMd()
      .then(mdfile => {
        markdownToHtml({
          // markdown: JSON.stringify(mdfile, 2, null),
          markdown: mdfile as string,
        })
          .then(result => {
            setHtml(result.toString());
            console.log(result.toString());
          })
          .catch(err => {
            // eslint-disable-next-line no-console
            console.error(err);
          });
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.error(err);
      });
    // markdownToHtml({
    //   // markdown: JSON.stringify(mdfile, 2, null),
    //   markdown: mdfile as string,
    // })
    //   .then(result => {
    //     setHtml(result.toString());
    //   })
    //   .catch(err => {
    //     // eslint-disable-next-line no-console
    //     console.error(err);
    //   });
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
