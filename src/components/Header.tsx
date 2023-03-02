import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import styled from 'styled-components';
import { questionData } from '../stores/Question/questionData';

interface Props {
  type: string;
  questionNumber?: number;
}

function Header(props: Props) {
  const percent = Math.round(
    ((props.questionNumber as number) / questionData.length) * 100,
  );

  return (
    <Wrapper>
      {props.type === 'progress' ? (
        <ProgressBar
          now={percent}
          label={`${percent}%`}
          style={{ width: '100%', height: '40px', fontSize: 20 }}
        />
      ) : (
        <div style={{ background: '#ffa07a', width: '100%' }}>판별기</div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  font-size: 40pt;
  padding: 20px;
`;

export default Header;
