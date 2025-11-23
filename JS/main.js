// js/main.js

document.addEventListener("DOMContentLoaded", () => {
  const mainCategorySelect = document.getElementById("mainCategorySelect");
  const subCategorySelect = document.getElementById("subCategorySelect");
  const detailSelect = document.getElementById("detailSelect");

  const situationCategorySelect = document.getElementById(
    "situationCategorySelect"
  );
  const situationSubSelect = document.getElementById("situationSubSelect");

  const generateBtn = document.getElementById("generateBtn");
  const copyAllBtn = document.getElementById("copyAllBtn");
  const promptListEl = document.getElementById("promptList");

  const CAT_DATA = window.CATEGORY_DATA;
  const SITU_DATA = window.SITUATION_DATA;

  /* ------------------------------
     1. 캐릭터 선택 영역 초기화
  ------------------------------ */
  function initMainCategories() {
    mainCategorySelect.innerHTML = "";
    CAT_DATA.mainCategories.forEach((mc) => {
      const opt = document.createElement("option");
      opt.value = mc.key;
      opt.textContent = mc.label;
      mainCategorySelect.appendChild(opt);
    });
  }

  function updateSubCategories() {
    const mainKey = mainCategorySelect.value;
    const list = CAT_DATA.subCategories[mainKey] || [];
    subCategorySelect.innerHTML = "";

    list.forEach((sc) => {
      const opt = document.createElement("option");
      opt.value = sc.key;
      opt.textContent = sc.label;
      subCategorySelect.appendChild(opt);
    });

    updateDetailOptions();
  }

  function updateDetailOptions() {
    const subKey = subCategorySelect.value;
    const list = CAT_DATA.detailMap[subKey] || [];
    detailSelect.innerHTML = "";

    list.forEach((d) => {
      const opt = document.createElement("option");
      opt.value = d.key;
      opt.textContent = d.label;
      detailSelect.appendChild(opt);
    });
  }

  /* ------------------------------
     2. 상황/감정 선택 영역 초기화
  ------------------------------ */
  function initSituationCategories() {
    situationCategorySelect.innerHTML = "";
    SITU_DATA.categories.forEach((cat) => {
      const opt = document.createElement("option");
      opt.value = cat.key;
      opt.textContent = cat.label;
      situationCategorySelect.appendChild(opt);
    });
  }

  function updateSituationSubOptions() {
    const catKey = situationCategorySelect.value;
    const cat = SITU_DATA.categories.find((c) => c.key === catKey);
    const list = (cat && cat.subOptions) || [];
    situationSubSelect.innerHTML = "";

    list.forEach((item) => {
      const opt = document.createElement("option");
      opt.value = item.key;
      opt.textContent = item.label;
      situationSubSelect.appendChild(opt);
    });
  }

  /* ------------------------------
     3. 캐릭터 subjectText 만들기
  ------------------------------ */
  function getSelectedSubjectText() {
    const subKey = subCategorySelect.value;
    const detailKey = detailSelect.value;
    const detailList = CAT_DATA.detailMap[subKey] || [];

    // detailKey가 "랜덤"용이면 실제 항목 중 하나를 랜덤 선택
    const detail = (function () {
      const selected = detailList.find((d) => d.key === detailKey);
      if (!selected) return detailList[0];

      if (selected.isRandom) {
        const candidates = detailList.filter((d) => !d.isRandom);
        if (candidates.length > 0) {
          return candidates[Math.floor(Math.random() * candidates.length)];
        }
      }
      return selected;
    })();

    if (!detail) {
      return "귀엽고 앙증맞은 카카오 스타일 캐릭터";
    }

    return detail.subject || "귀엽고 앙증맞은 카카오 스타일 캐릭터";
  }

  /* ------------------------------
     4. 프롬프트 표시 UI
  ------------------------------ */
  function renderPrompts(prompts) {
    promptListEl.innerHTML = "";

    prompts.forEach((text, idx) => {
      const card = document.createElement("div");
      card.className = "prompt-card";

      const header = document.createElement("div");
      header.className = "prompt-card-header";

      const titleSpan = document.createElement("span");
      titleSpan.className = "prompt-card-title";
      titleSpan.textContent = `${idx + 1}번 프롬프트`;

      const copyBtn = document.createElement("button");
      copyBtn.className = "copy-btn";
      copyBtn.type = "button";
      copyBtn.textContent = "복사";
      copyBtn.dataset.index = String(idx);

      header.appendChild(titleSpan);
      header.appendChild(copyBtn);

      const textarea = document.createElement("textarea");
      textarea.className = "prompt-textarea";
      textarea.value = text;

      card.appendChild(header);
      card.appendChild(textarea);
      promptListEl.appendChild(card);
    });
  }

  function copyText(text) {
    if (!navigator.clipboard) {
      // 구형 브라우저 대응
      const temp = document.createElement("textarea");
      temp.value = text;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand("copy");
      document.body.removeChild(temp);
      return;
    }
    navigator.clipboard.writeText(text).catch(() => {});
  }

  /* ------------------------------
     5. 이벤트 바인딩
  ------------------------------ */
  mainCategorySelect.addEventListener("change", updateSubCategories);
  subCategorySelect.addEventListener("change", updateDetailOptions);

  situationCategorySelect.addEventListener("change", updateSituationSubOptions);

  generateBtn.addEventListener("click", () => {
    const subjectText = getSelectedSubjectText();

    const situationCategoryKey = situationCategorySelect.value;
    const situationSubKey = situationSubSelect.value || "any";

    const prompts = window.PromptGenerator.generatePrompts({
      situationCategoryKey,
      situationSubKey,
      subjectText,
    });

    renderPrompts(prompts);
  });

  // 각 카드별 복사
  promptListEl.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    if (!target.classList.contains("copy-btn")) return;

    const card = target.closest(".prompt-card");
    if (!card) return;
    const textarea = card.querySelector(".prompt-textarea");
    if (!textarea) return;

    copyText(textarea.value);
    target.textContent = "✅ 복사됨";
    setTimeout(() => {
      target.textContent = "복사";
    }, 800);
  });

  // 전체 복사
  copyAllBtn.addEventListener("click", () => {
    const textareas = promptListEl.querySelectorAll(".prompt-textarea");
    if (!textareas.length) return;

    const allText = Array.from(textareas)
      .map((ta) => ta.value)
      .join("\n\n--------------------\n\n");

    copyText(allText);
    copyAllBtn.textContent = "✅ 전체 복사 완료";
    setTimeout(() => {
      copyAllBtn.textContent = "📋 전체 프롬프트 한 번에 복사";
    }, 1000);
  });

  /* ------------------------------
     6. 초기 실행
  ------------------------------ */
  initMainCategories();
  updateSubCategories();

  initSituationCategories();
  updateSituationSubOptions();
});
