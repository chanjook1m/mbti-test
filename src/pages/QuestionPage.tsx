import React from 'react';

import { questionData } from '../stores/Question/questionData';

function QuestionPage(): React.ReactElement {
  return <div>{questionData[0].title}</div>;
}

export default QuestionPage;
