/* main.js */

// -----------------------------
// 전역 데이터 불러오기
// -----------------------------
import { CATEGORIES } from "./data-categories.js";
import { SITUATIONS } from "./data-situations.js";
import { generatePrompts } from "./generator.js";
import { initAccordion } from "./accordion.js";

// HTML 요소
const bigSelect = document.getElementById("big-category");
const subSelect = document.getElementById("sub-category");
const detailSelect = document.getElementById("detail-category");
const situationSelect = document.getElementById("situation-category");
const resultBox = document.getElementById("result-box");
const generateBtn = document.getElementById("generate-btn");

// -----------------------------
// 초기 세팅
// -----------------------------
function initBigCategory() {
  bigSelect.innerHTML = "";
  Object.keys(CATEGORIES).forEach(key => {
    bigSelect.innerHTML += `<option value="${key}">${key}</option>`;
  });
}

// -----------------------------
// 대분류 선택 → 소분류 자동 로드
// -----------------------------
bigSelect.addEventListener("change", () => {
  const selected = bigSelect.value;
  const subs = CATEGORIES[selected].sub;

  subSelect.innerHTML = "";
  subs.forEach(sub => {
    subSelect.innerHTML += `<option value="${sub}">${sub}</option>`;
  });

  loadDetailCategory();
});

// -----------------------------
// 소분류 선택 → 세분화 자동 로드
// -----------------------------
subSelect.addEventListener("change", loadDetailCategory);

function loadDetailCategory() {
  const big = bigSelect.value;
  const sub = subSelect.value;
  const details = CATEGORIES[big].detail[sub];

  detailSelect.innerHTML = "";
  details.forEach(d => {
    detailSelect.innerHTML += `<option value="${d}">${d}</option>`;
  });
}

// -----------------------------
// 상황 카테고리 선택 → 소분류 자동 로드
// -----------------------------
situationSelect.addEventListener("change", () => {
  const sit = situationSelect.value;
  const sub = SITUATIONS[sit];

  const listBox = document.getElementById("situation-sub");
  listBox.innerHTML = "";

  sub.forEach(s => {
    listBox.innerHTML += `<option value="${s}">${s}</option>`;
  });
});

// -----------------------------
// 프롬프트 생성 버튼
// -----------------------------
generateBtn.addEventListener("click", () => {
  const big = bigSelect.value;
  const sub = subSelect.value;
  const detail = detailSelect.value;
  const sit = situationSelect.value;

  const prompts = generatePrompts(big, sub, detail, sit);
  resultBox.innerHTML = "";

  prompts.forEach((p, i) => {
    resultBox.innerHTML += `
      <div class="prompt-item">
        <h3>${i + 1}번 프롬프트</h3>
        <textarea>${p}</textarea>
        <button class="copy-btn" data-index="${i}">복사</button>
      </div>
    `;
  });

  attachCopyEvents();
});

// -----------------------------
// 복사 버튼 기능
// -----------------------------
function attachCopyEvents() {
  const buttons = document.querySelectorAll(".copy-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const idx = e.target.getAttribute("data-index");
      const text = document.querySelectorAll(".prompt-item textarea")[idx].value;

      navigator.clipboard.writeText(text).then(() => {
        alert("복사 완료!");
      });
    });
  });
}

// -----------------------------
// 초기 실행
// -----------------------------
initBigCategory();
initAccordion();
