import { useEffect, useState } from 'react';
import createQ from '../apiHandler/AiApiHandler';

const AnnePage = () => {
  const [content, setContent] = useState('waiting...');
  const data = { author: 'author1', question: '뭐해?' };
  const num = 1;
  const onClick = (data, num) => {
    setContent(createQ(data, num));
  };
  useEffect(()=>{
    const requestOptions = {
      method:"POST",
      headers:{ "Content-Type":"application/json"}
    };
    fetch("http://localhost:8080/api/v1/question/post/")
  })
  return (
    <div>
      <h1>안녕! 앤</h1>
      <div>
        {content && (
          <textarea
            rows={7}
            value={JSON.stringify(content, null, 2)}
            readOnly={true}
          />
        )}
        <button onClick={onClick(data, num)}>앤에게 물어보기</button>
      </div>
    </div>
  );
};
export default AnnePage;
