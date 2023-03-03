import React from 'react';
import styled from 'styled-components';
import { Button, Image } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

import { resultData } from '../stores/Result/resultData';
import Header from '../components/Header';

function ResultPage(): React.ReactElement {
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get('mbti');

  return (
    <Wrapper>
      <Header type="title" />
      <ContentWrapper>
        <Title>결과</Title>
        <div>{mbti}</div>
        <Image
          className="rounded-circle"
          src={resultData[0].img}
          width={350}
          height={350}
        />
        <Desc>축하합니다!</Desc>
      </ContentWrapper>
    </Wrapper>
  );
}

export default ResultPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: #fffacd;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 20pt;
`;

const Desc = styled.div`
  font-size: 15pt;
  margin: 20px 0;
`;
