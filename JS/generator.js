// js/generator.js

(function () {
  // 공통 스타일 (카카오 이모티콘 스타일을 의식한 설명)
  const COMMON_STYLE =
    "카카오톡 이모티콘 제출을 염두에 둔 스타일, super cute chibi character, " +
    "big plush-like head, small body, big expressive eyes, simple clean line art, " +
    "soft pastel color palette, smooth shading, mobile messenger sticker style, " +
    "no text, no speech bubble";

  const COMMON_LAYOUT =
    "정면 또는 약간 3/4 시점, 화면 중앙에 단일 캐릭터가 크게 보이도록 구성";
  const COMMON_BG =
    "깨끗한 흰색 또는 아주 연한 단색 배경, 군더더기 없이 캐릭터에 집중";
  const COMMON_OUTPUT =
    "PNG, transparent background, high resolution, 1024x1024 또는 768x768 정사각형 비율";

  // 감정별 표정/포즈 후보
  const EMO_POSE = {
    joy: [
      "눈이 반달 모양이 되도록 크게 웃는 표정과 가볍게 점프하는 포즈",
      "입을 활짝 벌리고 웃으며 한 손을 높이 들어 올리는 포즈",
      "살짝 고개를 젖히고 행복하게 웃는 포즈",
    ],
    love: [
      "눈에 작은 하트가 반짝이는 설레는 표정과 살짝 모은 두 손",
      "볼이 붉어진 채로 양손으로 하트 모양을 만드는 포즈",
      "하트 쿠션을 안고 수줍게 미소 짓는 포즈",
    ],
    sad: [
      "눈가에 눈물이 그렁그렁 맺히고 입꼬리가 아래로 내려간 표정",
      "어깨를 축 늘어뜨리고 살짝 고개를 숙인 포즈",
      "손으로 눈을 비비며 울먹이는 표정",
    ],
    angry: [
      "볼이 붉게 달아오르고 눈썹이 아래로 찌푸려진 귀여운 화난 표정",
      "팔짱을 끼고 고개를 살짝 돌린 채 삐진 포즈",
      "발을 동동 구르며 작은 입을 내민 포즈",
    ],
    surprise: [
      "눈이 동그래지고 입이 ‘헉’ 모양이 된 놀란 표정",
      "머리 위에 느낌표가 떠 있고 몸을 살짝 뒤로 젖힌 포즈",
      "손으로 입을 가리고 놀란 눈을 한 포즈",
    ],
    tired: [
      "눈이 반쯤 감기고 다크서클이 살짝 보이는 피곤한 표정",
      "하품을 하며 한 손으로 입을 가리는 포즈",
      "의자나 바닥에 몸을 기대어 축 늘어진 포즈",
    ],
    cheer: [
      "두 주먹을 꽉 쥐고 위로 올리며 화이팅 외치는 포즈",
      "한 손으로 엄지를 치켜세운 채 환하게 웃는 포즈",
      "별과 스파클 이펙트가 주변에 떠 있는 힘찬 응원 포즈",
    ],
    thanks: [
      "두 손을 모아 가슴 앞에서 감사 인사를 전하는 포즈",
      "살짝 허리를 숙이며 정중하게 인사하는 포즈",
      "작은 선물이나 꽃을 들고 미소 짓는 포즈",
    ],
    greeting: [
      "한 손을 크게 흔들며 환하게 인사하는 포즈",
      "문이나 프레임 밖에서 몸을 살짝 내밀고 손을 흔드는 포즈",
      "이불 속에서 한 손만 내밀고 잘자 인사하는 포즈",
    ],
    shy: [
      "양손으로 볼을 가리며 살짝 고개를 돌린 수줍은 포즈",
      "발끝을 안쪽으로 모으고 쑥스러운 미소를 짓는 포즈",
    ],
    silly: [
      "혀를 살짝 내밀고 멍한 눈을 한 장난스러운 표정",
      "눈을 약간 다르게 뜨고 어리둥절한 표정을 짓는 포즈",
    ],
  };

  function pickOne(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function shuffle(array) {
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // 상황 카테고리에서 9개 장면 선택
  function pickScenes(situationCategoryKey, subKey) {
    const cat = window.SITUATION_DATA.categories.find(
      (c) => c.key === situationCategoryKey
    );
    if (!cat) return [];

    const scenesBySub = cat.scenesBySub || {};
    const allSubKeys = Object.keys(scenesBySub);

    let collected = [];

    if (subKey && subKey !== "any" && scenesBySub[subKey]) {
      // 선택된 소분류를 우선 넣고, 나머지를 채우는 방식
      collected = collected.concat(scenesBySub[subKey]);

      // 나머지 서브들에서 추가로 채우기
      const otherSubs = allSubKeys.filter((k) => k !== subKey);
      otherSubs.forEach((k) => {
        collected = collected.concat(scenesBySub[k]);
      });
    } else {
      // "선택 안함(랜덤)"이면 모든 서브를 한 번에 모아서 랜덤
      allSubKeys.forEach((k) => {
        collected = collected.concat(scenesBySub[k]);
      });
    }

    // 중복 없는 장면 리스트에서 9개 뽑기 (9개 미만이면 있는 만큼)
    const shuffled = shuffle(collected);
    return shuffled.slice(0, 9);
  }

  // 캐릭터 설명 문장 구성
  function buildSubjectLine(subjectText) {
    // subjectText 예: "작고 하얀 털에 동글동글한 얼굴을 가진 말티즈 강아지 캐릭터"
    return `${subjectText}를 메인 캐릭터로 사용`;
  }

  // 최종 프롬프트 한 개 생성
  function buildEmojiPrompt(idx, scene, subjectText) {
    const subjectLine = buildSubjectLine(subjectText);

    const emoKey = scene.emotionKey || "joy";
    const posePool = EMO_POSE[emoKey] || EMO_POSE["joy"];
    const poseLine = pickOne(posePool);
    const title = scene.title || "이모티콘 장면";
    const sceneLine =
      scene.scene ||
      "상황에 어울리는 간단한 소품과 배경으로 감정을 표현한 장면";

    return `(${idx}번) ${title} 이모티콘용 프롬프트
- 캐릭터: ${subjectLine}
- 스타일: ${COMMON_STYLE}
- 표정/포즈: ${poseLine}
- 상황/컨셉: ${sceneLine}
- 레이아웃: ${COMMON_LAYOUT}
- 배경: ${COMMON_BG}
- 출력 형식: ${COMMON_OUTPUT}`;
  }

  // 공개 API
  window.PromptGenerator = {
    /**
     * @param {Object} opts
     * @param {string} opts.situationCategoryKey - 예: 'basic', 'office' 등
     * @param {string} opts.situationSubKey     - 예: 'any', 'tired', 'meeting' 등
     * @param {string} opts.subjectText         - 캐릭터 설명 문장
     * @returns {string[]} 9개의 프롬프트 배열
     */
    generatePrompts(opts) {
      const { situationCategoryKey, situationSubKey, subjectText } = opts;

      const scenes = pickScenes(situationCategoryKey, situationSubKey);
      const prompts = scenes.map((scene, index) =>
        buildEmojiPrompt(index + 1, scene, subjectText)
      );
      return prompts;
    },
  };
})();
