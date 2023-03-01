import React from 'react';
import styled from 'styled-components';
import { Button, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import CatImage from '../assets/cat.jpg';

function MainPage(): React.ReactElement {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate('/question');
  };

  return (
    <>
      <Wrapper>
        <Header>Header</Header>
        <ContentWrapper>
          <Title>MainPage</Title>
          <LogoImage>
            <Image
              className="rounded-circle"
              src={CatImage}
              alt="cat"
              width={350}
              height={350}
            />
          </LogoImage>
          <Desc>MBTI 고양이 찾기</Desc>
          <Button
            variant="primary"
            onClick={handleClickButton}
            style={{ fontSize: 25, marginTop: 20, marginBottom: 20 }}
          >
            Start
          </Button>
        </ContentWrapper>
      </Wrapper>
    </>
  );
}

export default MainPage;

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

const Header = styled.div`
  display: flex;
  justify-content: center;
  background: #ffa07a;
  font-size: 40pt;
`;
const Title = styled.div`
  font-size: 20pt;
`;

const LogoImage = styled.div`
  margin: 20px 0;
`;

const Desc = styled.div`
  font-size: 15pt;
  margin: 20px 0;
`;
