import React from 'react';

import { resultData } from '../stores/Result/resultData';

function ResultPage(): React.ReactElement {
  return (
    <>
      <div>{resultData[0].best}</div>
      <img src={resultData[0].img} width={350} height={350}></img>
    </>
  );
}

export default ResultPage;
