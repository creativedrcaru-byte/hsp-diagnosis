const QUESTIONS = [
  "즐겁고 재미있는 일이 있어도 마음으로부터 즐길 수 없으며 웃지 않는 일이 있다.",
  "커피, 담배, 술 등이 늘어나고 있다.",
  "사소한 일, 쓸데없는 것에 마음 이끌려 어쩔 줄 모른다.",
  "매사에 집중할 수 없는 경우가 있다.",
  "아찔할 때가 있다.",
  "남의 행복을 부럽게 느끼는 경우가 있다.",
  "기다리게 하는 것을 참지 못할 때가 있다.",
  "금세 욱하거나 신경질적이 된다.",
  "잠들기가 어렵다.",
  "잠이 얕고 도중에 잠이 깰 때가 있다.",
  "때때로 머리가 아플 때가 있다.",
  "식욕이 이상할 정도로 바뀌었다.",
  "자신감을 가질 수 없고, 이전과 같은 자신이 사라져가고 있다.",
  "등, 목덜미, 어깨가 쑤시거나 아프거나 할 때가 있다.",
  "쉽게 피곤하고 늘 피곤한 느낌을 갖고 있다.",
  "남의 대화가 자신에 관한 일이 아닌가 하고 마음이 쓰인다.",
  "사소한 일에도 식은땀이 나고 가슴이 두근거릴 때가 있다.",
  "뭔가 자신에게 나쁜 일이 일어나지 않을까 불안해지는 경우가 있다.",
  "남에게 의지하고 싶은 마음이 강해진다.",
  "나는 이제 틀렸다라고 생각하는 일이 있다."
];

const RESULTS = [
  {
    min: 0,
    max: 6,
    title: "비교적 심신 건강 상태가 양호한 상태입니다.",
    description:
      "현재는 스트레스 반응이 크게 두드러지지 않는 편입니다. 다만 스트레스는 한 번에 몰려오기보다 작은 피로와 긴장이 누적되면서 커질 수 있습니다. 지금처럼 수면, 식사, 휴식 리듬을 꾸준히 관리하는 것이 좋습니다."
  },
  {
    min: 7,
    max: 15,
    title: "이대로 방치해두면 스트레스가 다시 쌓여 몸과 마음의 컨디션이 흔들릴 우려가 있습니다.",
    description:
      "현재는 스트레스 신호가 어느 정도 나타나는 상태일 수 있습니다. 집중력 저하, 수면 변화, 피로감, 예민함 같은 반응이 반복된다면 생활 리듬을 점검할 필요가 있습니다. 무리하게 버티기보다 휴식, 운동, 대화, 업무 조정 등 현실적인 회복 방법을 마련하는 것이 좋습니다."
  },
  {
    min: 16,
    max: 20,
    title: "스트레스가 상당히 쌓여 있으며 건강상 바람직하지 않은 상태일 수 있습니다.",
    description:
      "몸과 마음이 이미 강한 부담을 받고 있을 가능성이 있습니다. 피로, 불안, 수면 문제, 자신감 저하, 신체 증상이 함께 나타난다면 단순한 기분 문제가 아니라 회복이 필요한 신호로 볼 수 있습니다. 혼자 견디려고만 하지 말고, 가까운 사람에게 현재 상태를 알리거나 전문가 상담을 고려하시기 바랍니다."
  }
];

const questionList = document.querySelector("#question-list");
const form = document.querySelector("#stress-form");
const formMessage = document.querySelector("#form-message");
const resultSection = document.querySelector("#result");
const scoreValue = document.querySelector("#score-value");
const resultCard = document.querySelector("#result-card");
const resultTitle = document.querySelector("#result-title");
const resultDescription = document.querySelector("#result-description");
const resetButton = document.querySelector("#reset-button");

function renderQuestions() {
  questionList.innerHTML = QUESTIONS.map((question, index) => {
    const number = index + 1;
    return `
      <fieldset class="question-card">
        <legend class="question-heading">
          <span class="question-number">${number}</span>
          <span class="question-text">${question}</span>
        </legend>
        <div class="answer-group" role="radiogroup" aria-label="${number}번 문항 답변">
          <label class="answer-option">
            <input type="radio" name="question-${number}" value="yes">
            <span>그렇다</span>
          </label>
          <label class="answer-option">
            <input type="radio" name="question-${number}" value="no">
            <span>그렇지 않다</span>
          </label>
        </div>
      </fieldset>
    `;
  }).join("");
}

function getAnswers() {
  return QUESTIONS.map((_, index) => {
    const selected = form.querySelector(`input[name="question-${index + 1}"]:checked`);
    return selected ? selected.value : null;
  });
}

function getResult(score) {
  return RESULTS.find((result) => score >= result.min && score <= result.max);
}

function showResult(score) {
  const result = getResult(score);

  scoreValue.textContent = String(score);
  resultTitle.textContent = result.title;
  resultDescription.textContent = result.description;
  resultCard.classList.toggle("caution", score >= 16);
  resultSection.hidden = false;
  resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const answers = getAnswers();
  const unanswered = answers
    .map((answer, index) => answer === null ? index + 1 : null)
    .filter(Boolean);

  if (unanswered.length > 0) {
    formMessage.textContent = `응답하지 않은 문항이 있습니다: ${unanswered.join(", ")}번`;
    resultSection.hidden = true;
    const firstUnanswered = form.querySelector(`input[name="question-${unanswered[0]}"]`);
    firstUnanswered?.focus();
    return;
  }

  const score = answers.filter((answer) => answer === "yes").length;
  formMessage.textContent = "";
  showResult(score);
});

resetButton.addEventListener("click", () => {
  form.reset();
  formMessage.textContent = "";
  resultSection.hidden = true;
  window.scrollTo({ top: 0, behavior: "smooth" });
});

renderQuestions();
