import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

import { questionData } from '../stores/Question/questionData';
import Header from '../components/Header';
import { createSearchParams, useNavigate } from 'react-router-dom';

interface totalScoreType {
  [key: string]: number;
}

const totalScore: totalScoreType = { EI: 0, SN: 0, TF: 0, JP: 0 };

function QuestionPage(): React.ReactElement {
  const [questionNumber, setQuestionNumber] = React.useState(0);
  const navigate = useNavigate();

  const handleButtonClick = (answer: number) => {
    const questionType = questionData[questionNumber].type;
    totalScore[questionType] += answer;

    setQuestionNumber(questionNumber + 1);

    // console.log(totalScore);

    if (questionNumber === questionData.length - 1) {
      navigate({
        pathname: '/result',
        search: `?${createSearchParams({ mbti: 'aa' })}`,
      });
    }
  };

  return (
    <Wrapper>
      <Header type="progress" questionNumber={questionNumber} />
      <ContentWrapper>
        <Title>{questionData[questionNumber].title}</Title>
        <ButtonGroup>
          <Button variant="danger" onClick={() => handleButtonClick(1)}>
            {questionData[questionNumber].answer1}
          </Button>
          <Button variant="warning" onClick={() => handleButtonClick(0)}>
            {questionData[questionNumber].answer2}
          </Button>
        </ButtonGroup>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: #fffacd;
`;

const Title = styled.div`
  font-size: 20pt;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  padding: 20px;

  button {
    font-size: 20pt;
  }
`;

export default QuestionPage;
