// js/data-situations.js

// 상황/감정 카테고리 데이터
// - 각 카테고리는 여러 "소분류"를 가짐
// - scenesBySub[subKey] = [{ emotionKey, title, scene }, ...]

window.SITUATION_DATA = {
  categories: [
    {
      key: "basic",
      label: "기본감정",
      subOptions: [
        { key: "any", label: "선택 안함 (랜덤)" },
        { key: "tired", label: "피곤" },
        { key: "cheer", label: "화이팅" },
        { key: "sad", label: "울상" },
        { key: "surprise", label: "깜짝 놀람" },
        { key: "smile", label: "씩 웃기" },
        { key: "heart", label: "심쿵" },
        { key: "angry", label: "분노" },
        { key: "silly", label: "멍청한 표정" },
        { key: "celebrate", label: "축하(폭죽)" },
      ],
      scenesBySub: {
        tired: [
          {
            emotionKey: "tired",
            title: "피곤해서 축 늘어진 표정",
            scene: "책상이나 바닥에 몸을 살짝 기대고, 눈이 반쯤 감긴 피곤한 모습",
          },
          {
            emotionKey: "tired",
            title: "하품하며 비틀거리는 장면",
            scene: "입을 크게 벌리고 하품하면서 한 손으로 눈을 비비는 모습",
          },
        ],
        cheer: [
          {
            emotionKey: "cheer",
            title: "두 주먹 불끈 화이팅",
            scene: "두 주먹을 꽉 쥐고 위로 들어 올리며 힘차게 응원하는 장면",
          },
          {
            emotionKey: "cheer",
            title: "별이 튀는 응원 포즈",
            scene: "주변에 작은 별 이펙트가 튀면서 환하게 웃는 응원 장면",
          },
        ],
        sad: [
          {
            emotionKey: "sad",
            title: "눈물이 맺힌 울상",
            scene: "눈가에 눈물이 그렁그렁 맺히고 입꼬리가 아래로 내려간 표정",
          },
          {
            emotionKey: "sad",
            title: "주저앉은 슬픔",
            scene: "바닥에 쭈그려 앉아 고개를 푹 숙인 슬픈 장면",
          },
        ],
        surprise: [
          {
            emotionKey: "surprise",
            title: "깜짝 놀라 눈이 동그래짐",
            scene: "눈이 크게 떠지고 입이 ‘헉’ 모양이 된 놀란 장면",
          },
          {
            emotionKey: "surprise",
            title: "느낌표가 떠 있는 놀람",
            scene: "머리 위에 느낌표가 떠 있고 몸이 살짝 뒤로 젖혀진 장면",
          },
        ],
        smile: [
          {
            emotionKey: "joy",
            title: "입꼬리가 씩 올라간 미소",
            scene: "한쪽 입꼬리가 살짝 올라간 장난기 있는 미소를 짓는 장면",
          },
          {
            emotionKey: "joy",
            title: "눈웃음으로 싱긋 웃기",
            scene: "눈이 반달 모양이 되도록 웃으며 손을 살짝 흔드는 장면",
          },
        ],
        heart: [
          {
            emotionKey: "love",
            title: "심쿵 눈빛",
            scene: "눈에 작은 하트가 반짝이고, 볼이 살짝 붉어진 설레는 표정",
          },
          {
            emotionKey: "love",
            title: "가슴을 톡 치는 심쿵 포즈",
            scene: "한 손으로 가슴을 톡 치며 깜짝 놀란 듯한 사랑스러운 장면",
          },
        ],
        angry: [
          {
            emotionKey: "angry",
            title: "볼을 붉히며 삐진 표정",
            scene: "볼이 붉게 달아오르고 팔짱을 낀 채 삐진 장면",
          },
          {
            emotionKey: "angry",
            title: "발을 동동 구르는 귀여운 분노",
            scene: "작은 발로 바닥을 동동 구르며 화를 내는 장면",
          },
        ],
        silly: [
          {
            emotionKey: "silly",
            title: "멍한 눈으로 허공 보기",
            scene: "눈이 동그래지고 입이 반쯤 벌어진 멍한 표정의 장면",
          },
          {
            emotionKey: "silly",
            title: "혀를 살짝 내민 바보 표정",
            scene: "혀를 살짝 내밀고 눈을 미묘하게 뜬 엉뚱한 장면",
          },
        ],
        celebrate: [
          {
            emotionKey: "cheer",
            title: "폭죽을 터뜨리며 축하",
            scene: "작은 폭죽을 들고 터뜨리며 환하게 웃는 축하 장면",
          },
          {
            emotionKey: "cheer",
            title: "두 팔을 번쩍 들고 축하",
            scene: "두 팔을 머리 위로 번쩍 들고 점프하며 축하하는 장면",
          },
        ],
      },
    },

    {
      key: "office",
      label: "직장 상황",
      subOptions: [
        { key: "any", label: "선택 안함 (랜덤)" },
        { key: "meeting", label: "회의" },
        { key: "overtime", label: "야근" },
        { key: "offwork", label: "퇴근" },
        { key: "lunch", label: "점심 먹자" },
        { key: "coffee", label: "커피 한 잔" },
        { key: "break", label: "쉬었다가 하자" },
        { key: "praise", label: "고생했어" },
        { key: "thanks", label: "감사합니다" },
      ],
      scenesBySub: {
        meeting: [
          {
            emotionKey: "tired",
            title: "회의 중 지루함",
            scene: "회의 테이블 앞에서 졸린 눈으로 프레젠테이션을 바라보는 장면",
          },
          {
            emotionKey: "surprise",
            title: "회의 중 깜짝 놀람",
            scene: "그래프를 보다가 깜짝 놀라 눈이 커진 장면",
          },
        ],
        overtime: [
          {
            emotionKey: "tired",
            title: "야근하며 피곤한 표정",
            scene: "밤 늦은 사무실에서 컴퓨터 화면을 보며 하품하는 장면",
          },
          {
            emotionKey: "sad",
            title: "집에 가고 싶은 야근",
            scene: "창밖 어두운 하늘을 바라보며 시무룩한 표정을 짓는 장면",
          },
        ],
        offwork: [
          {
            emotionKey: "joy",
            title: "퇴근하며 신난 표정",
            scene: "가방을 들고 문을 향해 손을 번쩍 들며 나가는 장면",
          },
          {
            emotionKey: "cheer",
            title: "퇴근 기념 화이팅",
            scene: "엘리베이터 앞에서 주먹을 불끈 쥐고 있는 장면",
          },
        ],
        lunch: [
          {
            emotionKey: "joy",
            title: "점심 먹자 신나는 표정",
            scene: "도시락이나 식판을 들고 입맛을 다시는 장면",
          },
          {
            emotionKey: "love",
            title: "맛있는 밥에 반한 표정",
            scene: "밥을 들고 눈을 반짝이며 행복해하는 장면",
          },
        ],
        coffee: [
          {
            emotionKey: "cheer",
            title: "커피 한 잔으로 힘내기",
            scene: "머그컵을 들고 미소를 짓는 장면",
          },
          {
            emotionKey: "tired",
            title: "커피 없이는 못 버텨",
            scene: "커피잔을 두 손으로 꼭 쥐고 피곤한 눈으로 버티는 장면",
          },
        ],
        break: [
          {
            emotionKey: "tired",
            title: "잠깐 쉬자며 기지개",
            scene: "의자에 앉아 팔을 쭉 뻗어 기지개를 켜는 장면",
          },
          {
            emotionKey: "joy",
            title: "슬쩍 휴대폰 보는 휴식",
            scene: "휴대폰을 보며 살짝 웃고 있는 장면",
          },
        ],
        praise: [
          {
            emotionKey: "cheer",
            title: "고생했어 엄지 척",
            scene: "엄지를 치켜세우며 따뜻하게 미소 짓는 장면",
          },
          {
            emotionKey: "thanks",
            title: "서로에게 박수 보내기",
            scene: "작은 박수를 치며 상대를 응원하는 장면",
          },
        ],
        thanks: [
          {
            emotionKey: "thanks",
            title: "공손하게 인사하는 직장인",
            scene: "몸을 살짝 숙이며 두 손을 모아 감사 인사를 하는 장면",
          },
          {
            emotionKey: "thanks",
            title: "선물을 건네며 감사 표현",
            scene: "작은 선물 상자를 두 손으로 건네는 장면",
          },
        ],
      },
    },

    {
      key: "daily",
      label: "일상 생활",
      subOptions: [
        { key: "any", label: "선택 안함 (랜덤)" },
        { key: "meal", label: "식사" },
        { key: "hobby", label: "취미" },
        { key: "rest", label: "휴식" },
        { key: "walk", label: "산책" },
        { key: "sleep", label: "잠/잘자" },
      ],
      scenesBySub: {
        meal: [
          {
            emotionKey: "joy",
            title: "밥 먹으며 행복한 표정",
            scene: "포크나 젓가락을 들고 맛있게 먹는 장면",
          },
          {
            emotionKey: "love",
            title: "좋아하는 음식을 본 순간",
            scene: "눈에 별이 반짝이며 음식을 바라보는 장면",
          },
        ],
        hobby: [
          {
            emotionKey: "joy",
            title: "취미에 몰입한 표정",
            scene: "그림을 그리거나 게임을 하며 신난 표정의 장면",
          },
          {
            emotionKey: "smile",
            title: "편하게 즐기는 취미 시간",
            scene: "헤드폰을 끼고 음악을 들으며 미소 짓는 장면",
          },
        ],
        rest: [
          {
            emotionKey: "tired",
            title: "소파에 누워 쉬는 장면",
            scene: "쿠션을 안고 소파에 기대어 편하게 쉬는 모습",
          },
          {
            emotionKey: "joy",
            title: "간단한 스트레칭",
            scene: "팔과 다리를 쭉 펴며 기분 좋게 스트레칭하는 장면",
          },
        ],
        walk: [
          {
            emotionKey: "joy",
            title: "산책하며 상쾌한 얼굴",
            scene: "가벼운 걸음으로 걷고 있는 산책 장면",
          },
          {
            emotionKey: "cheer",
            title: "신나게 뛰어 다니는 장면",
            scene: "발을 가볍게 구르며 산책을 즐기는 모습",
          },
        ],
        sleep: [
          {
            emotionKey: "tired",
            title: "졸린 눈으로 꾸벅꾸벅",
            scene: "앉아서 꾸벅꾸벅 졸고 있는 장면",
          },
          {
            emotionKey: "greeting",
            title: "이불 속에서 잘자 인사",
            scene: "이불을 덮고 손만 내밀어 인사하는 장면",
          },
        ],
      },
    },

    {
      key: "love",
      label: "연애/사랑",
      subOptions: [
        { key: "any", label: "선택 안함 (랜덤)" },
        { key: "heart", label: "하트/고백" },
        { key: "shy", label: "수줍음" },
        { key: "date", label: "데이트" },
        { key: "miss", label: "보고 싶어" },
      ],
      scenesBySub: {
        heart: [
          {
            emotionKey: "love",
            title: "손하트 포즈",
            scene: "양손으로 하트 모양을 만들고 수줍게 웃는 장면",
          },
          {
            emotionKey: "love",
            title: "하트 풍선을 안고 있는 장면",
            scene: "하트 모양 풍선을 품에 안고 있는 사랑스러운 장면",
          },
        ],
        shy: [
          {
            emotionKey: "love",
            title: "볼이 빨개진 수줍음",
            scene: "양손으로 볼을 감싸며 고개를 살짝 숙인 장면",
          },
          {
            emotionKey: "shy",
            title: "시선 피하는 부끄러움",
            scene: "눈을 피하며 살짝 웃는 부끄러운 장면",
          },
        ],
        date: [
          {
            emotionKey: "joy",
            title: "데이트 약속에 들뜬 표정",
            scene: "시계를 보며 약속 시간을 기다리는 장면",
          },
          {
            emotionKey: "love",
            title: "함께 걷는 데이트",
            scene: "손을 잡고 나란히 걷는 듯한 장면",
          },
        ],
        miss: [
          {
            emotionKey: "sad",
            title: "보고 싶어 하는 눈빛",
            scene: "창밖을 바라보며 살짝 우울한 표정을 짓는 장면",
          },
          {
            emotionKey: "love",
            title: "휴대폰을 꼭 쥔 그리움",
            scene: "휴대폰을 두 손으로 쥐고 메시지를 기다리는 장면",
          },
        ],
      },
    },

    {
      key: "season",
      label: "계절",
      subOptions: [
        { key: "any", label: "선택 안함 (랜덤)" },
        { key: "spring", label: "봄" },
        { key: "summer", label: "여름" },
        { key: "autumn", label: "가을" },
        { key: "winter", label: "겨울" },
      ],
      scenesBySub: {
        spring: [
          {
            emotionKey: "joy",
            title: "벚꽃 날리는 봄",
            scene: "벚꽃잎이 흩날리는 길에서 산책하는 장면",
          },
          {
            emotionKey: "joy",
            title: "꽃 향기를 맡는 봄",
            scene: "작은 꽃송이를 들고 향기를 맡는 장면",
          },
        ],
        summer: [
          {
            emotionKey: "joy",
            title: "수박 먹는 여름",
            scene: "수박 조각을 들고 신나게 먹는 장면",
          },
          {
            emotionKey: "tired",
            title: "더위를 피해 부채질",
            scene: "부채나 손으로 부치며 더위를 식히는 장면",
          },
        ],
        autumn: [
          {
            emotionKey: "joy",
            title: "낙엽 밟는 가을",
            scene: "바닥에 떨어진 낙엽을 밟으며 걷는 장면",
          },
          {
            emotionKey: "smile",
            title: "단풍 구경하는 가을",
            scene: "주황빛 단풍을 올려다보며 미소 짓는 장면",
          },
        ],
        winter: [
          {
            emotionKey: "joy",
            title: "눈을 맞으며 뛰는 겨울",
            scene: "눈이 내리는 밖에서 두 팔을 벌리고 서 있는 장면",
          },
          {
            emotionKey: "cheer",
            title: "눈사람 만들기",
            scene: "작은 눈사람을 만들며 신난 표정의 장면",
          },
        ],
      },
    },

    {
      key: "event",
      label: "이벤트/기념일",
      subOptions: [
        { key: "any", label: "선택 안함 (랜덤)" },
        { key: "newyear", label: "설날" },
        { key: "chuseok", label: "추석" },
        { key: "teacher", label: "스승의 날" },
        { key: "child", label: "어린이날" },
        { key: "parents", label: "어버이날" },
        { key: "birthday", label: "생일" },
        { key: "xmas", label: "크리스마스" },
        { key: "halloween", label: "할로윈" },
      ],
      scenesBySub: {
        newyear: [
          {
            emotionKey: "thanks",
            title: "새해 인사 세배",
            scene: "예의 바르게 인사하는 새해 인사 장면",
          },
        ],
        chuseok: [
          {
            emotionKey: "joy",
            title: "송편 먹는 추석",
            scene: "작은 송편을 들고 맛있게 먹는 장면",
          },
        ],
        teacher: [
          {
            emotionKey: "thanks",
            title: "꽃을 건네는 스승의 날",
            scene: "작은 꽃다발을 두 손으로 건네는 장면",
          },
        ],
        child: [
          {
            emotionKey: "joy",
            title: "풍선 들고 뛰노는 어린이날",
            scene: "색색의 풍선을 들고 뛰어다니는 장면",
          },
        ],
        parents: [
          {
            emotionKey: "thanks",
            title: "카네이션을 드리는 어버이날",
            scene: "가슴에 카네이션을 달아주는 장면",
          },
        ],
        birthday: [
          {
            emotionKey: "cheer",
            title: "생일 케이크와 촛불",
            scene: "케이크 위 촛불을 바라보며 행복해하는 장면",
          },
        ],
        xmas: [
          {
            emotionKey: "joy",
            title: "크리스마스 모자 쓰기",
            scene: "산타 모자를 쓰고 선물을 안고 있는 장면",
          },
        ],
        halloween: [
          {
            emotionKey: "silly",
            title: "분장을 한 할로윈",
            scene: "작은 망토를 두르고 장난스럽게 웃는 장면",
          },
        ],
      },
    },

    {
      key: "reaction",
      label: "리액션",
      subOptions: [
        { key: "any", label: "선택 안함 (랜덤)" },
        { key: "like", label: "좋아요" },
        { key: "dislike", label: "싫어요" },
        { key: "wow", label: "와우/대박" },
        { key: "sorry", label: "미안" },
        { key: "thanks", label: "고마워" },
      ],
      scenesBySub: {
        like: [
          {
            emotionKey: "cheer",
            title: "좋아요 엄지 척",
            scene: "엄지를 치켜세우며 환하게 웃는 장면",
          },
        ],
        dislike: [
          {
            emotionKey: "angry",
            title: "싫어요 표정",
            scene: "입을 꾹 다물고 고개를 살짝 돌린 장면",
          },
        ],
        wow: [
          {
            emotionKey: "surprise",
            title: "와우 놀란 반응",
            scene: "눈이 동그래지고 입이 ‘와!’ 모양이 된 장면",
          },
        ],
        sorry: [
          {
            emotionKey: "sad",
            title: "미안한 표정으로 인사",
            scene: "손을 모으고 고개를 숙여 사과하는 장면",
          },
        ],
        thanks: [
          {
            emotionKey: "thanks",
            title: "감사 인사 리액션",
            scene: "두 손을 모아 고마움을 표현하는 장면",
          },
        ],
      },
    },
  ],
};
