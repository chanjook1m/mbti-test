import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

import { questionData } from '../stores/Question/questionData';
import Header from '../components/Header';

function QuestionPage(): React.ReactElement {
  const [questionNumber, setQuestionNumber] = React.useState(0);
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setQuestionNumber(questionNumber + 1);
  };

  return (
    <Wrapper>
      <Header type="progress" questionNumber={questionNumber} />
      <ContentWrapper>
        <Title>{questionData[questionNumber].title}</Title>
        <ButtonGroup>
          <Button variant="danger" onClick={handleButtonClick}>
            {questionData[questionNumber].answer1}
          </Button>
          <Button variant="warning">
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
