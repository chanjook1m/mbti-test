import React from 'react';
import { Button } from 'react-bootstrap';
import { EIResult } from '../stores/Result/types';
const Kakao = (window as any).Kakao;

interface Props {
  data: EIResult;
}

function KaKaoShareButton(props: Props) {
  const url = 'https://mbtittest.netlify.app';
  const resultUrl = window.location.href;

  React.useEffect(() => {
    if (!Kakao.isInitialized) Kakao.init('a837b895c78726f67dddca994ae9041b');
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'mbti',
        description: props.data.name,
        imageUrl: props.data.img,
        link: {
          mobileWebUrl: resultUrl,
          webUrl: resultUrl,
        },
      },

      social: {
        likeCount: 10,
        commentCount: 20,
        sharedCount: 30,
      },
      buttons: [
        {
          title: '테스트하러가기',
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };
  return (
    <Button variant="warning" style={{ width: 100 }} onClick={shareKakao}>
      공유
    </Button>
  );
}

export default KaKaoShareButton;
