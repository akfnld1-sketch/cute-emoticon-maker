// js/data-categories.js

// 캐릭터 선택용 데이터
// - mainCategories: 대분류
// - subCategories:  각 대분류별 소분류
// - detailMap:      각 소분류별 세분화(실제 종/타입 이름 포함)

window.CATEGORY_DATA = {
  mainCategories: [
    { key: "animal", label: "동물" },
    { key: "human", label: "사람" },
    { key: "plant", label: "식물" },
    { key: "miniature", label: "미니어쳐" },
  ],

  subCategories: {
    animal: [
      { key: "dog", label: "강아지" },
      { key: "cat", label: "고양이" },
      { key: "rabbit", label: "토끼" },
      { key: "bear", label: "곰" },
      { key: "tiger", label: "호랑이" },
      { key: "panda", label: "판다" },
    ],
    human: [
      { key: "seniorM", label: "시니어 남성" },
      { key: "seniorF", label: "시니어 여성" },
      { key: "officeM", label: "직장인 남성" },
      { key: "officeF", label: "직장인 여성" },
      { key: "student", label: "학생" },
      { key: "kid", label: "아이" },
    ],
    plant: [
      { key: "cactus", label: "선인장" },
      { key: "flowerpot", label: "화분 꽃" },
      { key: "tree", label: "나무" },
      { key: "leafy", label: "잎이 무성한 화분" },
      { key: "sunflower", label: "해바라기" },
    ],
    miniature: [
      { key: "miniRobot", label: "미니 로봇" },
      { key: "miniGhost", label: "미니 유령" },
      { key: "miniButler", label: "미니 집사" },
      { key: "miniMonster", label: "미니 몬스터" },
      { key: "miniAnimalMix", label: "미니 동물 믹스" },
    ],
  },

  // 각 소분류별 세분화 (최대 10개, 개수는 유연하게)
  // subject: 프롬프트에 들어갈 캐릭터 설명 문장
  detailMap: {
    dog: [
      {
        key: "maltese",
        label: "말티즈",
        subject: "작고 하얀 털에 동글동글한 얼굴을 가진 말티즈 강아지 캐릭터",
      },
      {
        key: "corgi",
        label: "웰시 코기",
        subject: "짧은 다리와 통통한 엉덩이가 매력인 웰시 코기 강아지 캐릭터",
      },
      {
        key: "poodle",
        label: "토이 푸들",
        subject: "곱슬곱슬한 털과 귀여운 눈을 가진 토이 푸들 강아지 캐릭터",
      },
      {
        key: "shiba",
        label: "시바견",
        subject: "살짝 새침한 표정의 시바견 강아지 캐릭터",
      },
      {
        key: "pomeranian",
        label: "포메라니안",
        subject: "복슬복슬한 털과 동그란 눈을 가진 포메라니안 강아지 캐릭터",
      },
      {
        key: "bulldog",
        label: "불독",
        subject: "둥글둥글한 주름과 귀여운 인상의 불독 강아지 캐릭터",
      },
      {
        key: "beagle",
        label: "비글",
        subject: "활발하고 장난기 많은 비글 강아지 캐릭터",
      },
      {
        key: "retriever",
        label: "골든 리트리버",
        subject:
          "따뜻한 미소와 부드러운 털을 가진 골든 리트리버 강아지 캐릭터",
      },
      {
        key: "jindo",
        label: "진돗개",
        subject: "꼿꼿한 귀와 단단한 체형의 진돗개 강아지 캐릭터",
      },
      {
        key: "randomDog",
        label: "선택 안함 (랜덤 강아지)",
        subject: "귀엽고 앙증맞은 작은 강아지 캐릭터",
        isRandom: true,
      },
    ],

    cat: [
      {
        key: "russianBlue",
        label: "러시안 블루",
        subject: "푸른빛 털과 시크한 눈빛의 러시안 블루 고양이 캐릭터",
      },
      {
        key: "persian",
        label: "페르시안",
        subject: "복슬복슬한 털과 둥근 얼굴의 페르시안 고양이 캐릭터",
      },
      {
        key: "scottish",
        label: "스코티시 폴드",
        subject: "접힌 귀와 순한 표정의 스코티시 폴드 고양이 캐릭터",
      },
      {
        key: "bengal",
        label: "벵갈",
        subject: "표범 같은 무늬가 있는 벵갈 고양이 캐릭터",
      },
      {
        key: "siamese",
        label: "샴",
        subject: "슬림한 체형과 뾰족한 귀를 가진 샴 고양이 캐릭터",
      },
      {
        key: "blackCat",
        label: "검은 고양이",
        subject: "반짝이는 눈을 가진 검은 고양이 캐릭터",
      },
      {
        key: "whiteCat",
        label: "하얀 고양이",
        subject: "새하얀 털과 깨끗한 이미지를 가진 하얀 고양이 캐릭터",
      },
      {
        key: "calico",
        label: "삼색 고양이",
        subject: "세 가지 색이 섞인 털의 삼색 고양이 캐릭터",
      },
      {
        key: "tabby",
        label: "고등어 태비",
        subject: "줄무늬가 인상적인 고등어 태비 고양이 캐릭터",
      },
      {
        key: "randomCat",
        label: "선택 안함 (랜덤 고양이)",
        subject: "동그란 얼굴과 장난기 가득한 귀여운 고양이 캐릭터",
        isRandom: true,
      },
    ],

    rabbit: [
      {
        key: "whiteRabbit",
        label: "하얀 토끼",
        subject: "긴 귀와 하얀 털을 가진 귀여운 토끼 캐릭터",
      },
      {
        key: "brownRabbit",
        label: "갈색 토끼",
        subject: "따뜻한 갈색 털을 가진 상냥한 토끼 캐릭터",
      },
      {
        key: "lopRabbit",
        label: "늘어진 귀 토끼",
        subject: "귀가 아래로 축 처진 늘어진 귀 토끼 캐릭터",
      },
      {
        key: "miniRabbit",
        label: "미니 토끼",
        subject: "동글동글한 몸을 가진 작은 토끼 캐릭터",
      },
    ],

    bear: [
      {
        key: "teddyBear",
        label: "테디베어",
        subject: "인형 같은 털과 둥근 귀를 가진 테디베어 캐릭터",
      },
      {
        key: "polarBear",
        label: "북극곰",
        subject: "새하얀 털과 순한 표정을 가진 북극곰 캐릭터",
      },
      {
        key: "pandaBear",
        label: "판다 곰",
        subject: "눈 주변이 까만 판다 느낌의 귀여운 곰 캐릭터",
      },
    ],

    tiger: [
      {
        key: "miniTiger",
        label: "미니 호랑이",
        subject: "작고 귀여운 줄무늬의 미니 호랑이 캐릭터",
      },
      {
        key: "whiteTiger",
        label: "백호",
        subject: "하얀 털과 검은 줄무늬의 백호 캐릭터",
      },
    ],

    panda: [
      {
        key: "classicPanda",
        label: "클래식 판다",
        subject: "둥근 몸과 검은 눈밑 무늬의 클래식 판다 캐릭터",
      },
      {
        key: "babyPanda",
        label: "베이비 판다",
        subject: "아기처럼 더 동글동글한 베이비 판다 캐릭터",
      },
    ],

    // 사람 계열
    seniorM: [
      {
        key: "gentleSeniorM",
        label: "온화한 시니어 남성",
        subject:
          "짧은 회색 머리와 온화한 미소를 가진 시니어 남성 캐릭터",
      },
      {
        key: "coolSeniorM",
        label: "멋쟁이 시니어 남성",
        subject:
          "모자를 쓰고 안경을 쓴 세련된 시니어 남성 캐릭터",
      },
    ],

    seniorF: [
      {
        key: "kindSeniorF",
        label: "다정한 시니어 여성",
        subject:
          "짧게 묶은 머리와 부드러운 인상의 시니어 여성 캐릭터",
      },
      {
        key: "permSeniorF",
        label: "파머 스타일 시니어 여성",
        subject: "펌 헤어와 동글 안경을 쓴 시니어 여성 캐릭터",
      },
    ],

    officeM: [
      {
        key: "casualOfficeM",
        label: "캐주얼 직장인 남성",
        subject:
          "셔츠와 슬랙스를 입고 커피를 든 직장인 남성 캐릭터",
      },
      {
        key: "suitOfficeM",
        label: "정장 직장인 남성",
        subject: "넥타이를 맨 정장 차림의 직장인 남성 캐릭터",
      },
    ],

    officeF: [
      {
        key: "casualOfficeF",
        label: "캐주얼 직장인 여성",
        subject:
          "니트와 슬랙스를 입은 캐주얼 직장인 여성 캐릭터",
      },
      {
        key: "suitOfficeF",
        label: "정장 직장인 여성",
        subject: "자켓과 스커트를 입은 직장인 여성 캐릭터",
      },
    ],

    student: [
      {
        key: "uniStudent",
        label: "대학생",
        subject: "백팩을 멘 대학생 캐릭터",
      },
      {
        key: "highStudent",
        label: "고등학생",
        subject: "교복을 입은 고등학생 캐릭터",
      },
    ],

    kid: [
      {
        key: "littleBoy",
        label: "소년",
        subject: "동글동글한 얼굴의 활발한 소년 캐릭터",
      },
      {
        key: "littleGirl",
        label: "소녀",
        subject: "양갈래 머리를 한 귀여운 소녀 캐릭터",
      },
    ],

    // 식물 계열
    cactus: [
      {
        key: "roundCactus",
        label: "둥근 선인장",
        subject: "작은 화분에 심어진 둥근 선인장 캐릭터",
      },
      {
        key: "tallCactus",
        label: "키 큰 선인장",
        subject: "팔처럼 뻗은 가지가 있는 키 큰 선인장 캐릭터",
      },
    ],

    flowerpot: [
      {
        key: "pinkFlower",
        label: "분홍 꽃 화분",
        subject: "작은 분홍 꽃이 피어난 화분 캐릭터",
      },
      {
        key: "yellowFlower",
        label: "노란 꽃 화분",
        subject: "밝은 노란 꽃이 피어난 화분 캐릭터",
      },
    ],

    tree: [
      {
        key: "smallTree",
        label: "작은 나무",
        subject: "둥근 수관을 가진 작은 나무 캐릭터",
      },
      {
        key: "bigTree",
        label: "큰 나무",
        subject: "튼튼한 몸통과 풍성한 잎을 가진 큰 나무 캐릭터",
      },
    ],

    leafy: [
      {
        key: "monstera",
        label: "몬스테라",
        subject: "큰 잎을 가진 몬스테라 화분 캐릭터",
      },
      {
        key: "ivy",
        label: "아이비",
        subject: "덩굴이 아래로 흘러내리는 아이비 화분 캐릭터",
      },
    ],

    sunflower: [
      {
        key: "singleSunflower",
        label: "해바라기 1송이",
        subject: "한 송이의 해바라기가 피어난 화분 캐릭터",
      },
      {
        key: "sunflowerField",
        label: "해바라기 다발",
        subject: "여러 송이가 함께 모인 해바라기 캐릭터",
      },
    ],

    // 미니어쳐 계열
    miniRobot: [
      {
        key: "roundRobot",
        label: "동글동글 미니 로봇",
        subject: "동그란 머리와 작은 몸을 가진 귀여운 미니 로봇 캐릭터",
      },
      {
        key: "squareRobot",
        label: "네모난 미니 로봇",
        subject: "네모난 머리와 안경 같은 눈을 가진 미니 로봇 캐릭터",
      },
    ],

    miniGhost: [
      {
        key: "sheetGhost",
        label: "천 유령",
        subject: "하얀 천을 뒤집어쓴 듯한 미니 유령 캐릭터",
      },
      {
        key: "roundGhost",
        label: "동그란 유령",
        subject: "물방울 모양의 동글동글한 미니 유령 캐릭터",
      },
    ],

    miniButler: [
      {
        key: "classicButler",
        label: "클래식 집사",
        subject: "검은 정장과 나비넥타이를 한 미니 집사 캐릭터",
      },
      {
        key: "cuteButler",
        label: "귀여운 집사",
        subject: "살짝 과장된 표정의 귀여운 미니 집사 캐릭터",
      },
    ],

    miniMonster: [
      {
        key: "oneEyeMonster",
        label: "한 눈 몬스터",
        subject: "눈이 하나만 있는 동그란 미니 몬스터 캐릭터",
      },
      {
        key: "hornMonster",
        label: "뿔 달린 몬스터",
        subject: "작은 뿔이 달린 귀여운 미니 몬스터 캐릭터",
      },
    ],

    miniAnimalMix: [
      {
        key: "miniTigerMix",
        label: "미니 호랑이 인형",
        subject: "인형처럼 작고 귀여운 미니 호랑이 캐릭터",
      },
      {
        key: "miniPuppyMix",
        label: "미니 강아지 인형",
        subject: "봉제 인형 느낌의 미니 강아지 캐릭터",
      },
      {
        key: "miniCatMix",
        label: "미니 고양이 인형",
        subject: "통통한 몸의 미니 고양이 캐릭터",
      },
    ],
  },
};
