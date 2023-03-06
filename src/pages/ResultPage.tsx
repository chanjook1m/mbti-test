import React from 'react';
import styled from 'styled-components';
import { Image, Button } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { resultData } from '../stores/Result/resultData';
import Header from '../components/Header';
import KaKaoShareButton from './../components/KaKaoShareButton';
import { EIResult } from '../stores/Result/types';

function ResultPage(): React.ReactElement {
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get('mbti');
  const TestResult = resultData.find(cat => cat.best === mbti) as EIResult;
  const FriendResult = resultData.find(
    friend => friend.best === TestResult?.mbti,
  );
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header type="title" />
      <ContentWrapper>
        <Title>결과</Title>
        <div>{TestResult?.best}</div>
        <Image
          className="rounded-circle"
          src={TestResult?.img}
          width={350}
          height={350}
        />
        <Desc>
          {TestResult?.mbti}형 {TestResult?.name}
        </Desc>
        <Desc>{TestResult?.desc}</Desc>

        <Desc>축하합니다!</Desc>

        <FriendDesc>
          {TestResult?.name}과 잘 맞는 고양이는 {FriendResult?.mbti}형 고양이{' '}
          {FriendResult?.name}
        </FriendDesc>
        <ActionButtons>
          <Button variant="danger" onClick={() => navigate('/')}>
            다시하기
          </Button>
          <KaKaoShareButton data={TestResult} />
        </ActionButtons>
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

const FriendDesc = styled.div`
  font-size: 13pt;
  color: blue;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  margin-top: 100px;
`;
