import React from 'react';

interface IHeadProps {
  title: string,
  content: string
}

const Head: React.FC<IHeadProps> = ({ title, content }) => {
  React.useEffect(() => {
    const description = document.head.querySelector('meta[name="description"]');
    description?.setAttribute('content', content);
    document.title = title + ' | Dogs';
  }, [content, title]);

  return null;
}

export default Head;
