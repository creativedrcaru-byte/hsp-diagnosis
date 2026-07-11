const ANSWER_OPTIONS = [
  { score: 0, label: "전혀 아니다" },
  { score: 1, label: "약간 그렇다" },
  { score: 2, label: "어느 정도 그렇다" },
  { score: 3, label: "매우 그렇다" },
  { score: 4, label: "완전히 그렇다" }
];

const QUESTIONS = [
  "나는 아름다운 음악을 들을 때 감동을 느낀다.",
  "나는 미래에 잘못될 수 있는 일을 예측하고, 여러 가지 시나리오에 대비하는 데 다른 사람들보다 많은 에너지를 소비한다.",
  "나는 새로운 가능성을 잘 볼 수 있다.",
  "나는 쉽게 흥분하고, 좋은 아이디어를 많이 가지고 있다.",
  "나는 삶 속에 우리가 보고 들을 수 있는 한계를 넘어서는 것이 존재한다는 것을 안다.",
  "나는 고통의 임계점이 낮다.",
  "다른 사람들에게는 쉬워 보이는 일이 나에게는 매우 힘들다고 느낄 때가 많다.",
  "나는 하루 중 혼자 보낼 수 있는 시간이 꼭 필요하다.",
  "나는 혼자 쉴 수 있는 시간 없이 두세 시간 이상 다른 사람들과 함께 있으면 자주 피로를 느낀다.",
  "나는 갈등이 일어날 때 어디론가 숨고 싶은 충동을 느낀다.",
  "누군가 화를 내면, 그것이 나를 향한 감정이 아니더라도 스트레스를 받는다.",
  "다른 사람들의 고통이 나에게 많은 영향을 준다.",
  "나는 갑작스러운 일이나 실수를 피하기 위해 최선을 다한다.",
  "나는 창의적이다.",
  "예술 작품은 때때로 나에게 깊은 즐거움을 준다.",
  "나는 동시에 여러 가지 일을 할 때, 다른 사람들보다 인내심이 약하다고 느낀다. 예를 들면, 인터넷 검색을 하면서 대화에 참여할 때 스트레스를 받는다.",
  "나는 놀이공원, 영화관, 마트, 야구장처럼 자극적인 장소를 좋아하지 않는다.",
  "텔레비전에서 폭력적인 장면을 보면, 며칠 동안 그 영상이 나에게 영향을 준다.",
  "나는 사물에 대해 생각하는 데 남들보다 많은 시간을 보낸다.",
  "나는 동물이나 식물의 상태를 잘 파악한다.",
  "나는 아름다운 자연에 둘러싸여 있을 때 강렬한 기쁨을 느낀다.",
  "나는 예민한 안테나를 사용해서 남들의 감정을 쉽게 알아차린다.",
  "나는 쉽게 죄책감을 느낀다.",
  "내가 일하는 동안 남들이 지켜보고 있으면 스트레스를 받는다.",
  "나는 진실을 판단할 수 있는 안목을 가지고 있어서, 다른 사람들의 속임수를 꿰뚫어 볼 때가 많다.",
  "나는 자주 깜짝 놀란다.",
  "나는 다른 사람들이 나와 함께 보내는 시간을 깊이 있게 즐기게 할 수 있다.",
  "가끔 다른 사람들에게는 전혀 거슬리지 않는 소리가 내 신경을 극도로 자극할 때가 있다.",
  "나는 매우 직관적이다.",
  "나는 혼자 있는 시간을 즐길 수 있다.",
  "나는 대부분 신중하다. 즉흥적이고 빠르게 행동하는 경우는 매우 드물다.",
  "소음, 강한 냄새, 밝은 빛이 나에게 큰 영향을 준다.",
  "나는 조용하고 평화로운 환경에서 휴식할 필요를 남들보다 더 강하게 느낀다.",
  "나는 배가 고프거나 추위를 느낄 때 신경을 다른 곳으로 돌리기 힘들다.",
  "나는 잘 운다.",
  "나는 준비 없이 새로운 경험에 참가하는 것을 좋아한다.",
  "나는 민첩하고 영리하게 일해서 바라던 목표를 달성할 때, 나 자신에게 만족감을 느낀다.",
  "나는 사람들과 어울리는 것을 피곤하게 느끼지 않는다. 분위기가 좋은 모임에서는 혼자 시간을 갖거나 휴식을 취하지 않아도 온종일 즐겁게 지낼 수 있다.",
  "나는 서바이벌 캠프를 좋아한다.",
  "나는 압박감을 느끼며 일하는 것을 좋아한다.",
  "나는 어떤 사람이 불행한 것은 그 사람 자신의 잘못 때문이라고 생각한다.",
  "나는 항상 에너지가 넘친다. 주변에서 일어나는 일이 내 기분에 영향을 주지 않는다.",
  "나는 파티에서 가장 늦게 떠나는 사람에 속한다.",
  "나는 모든 일을 쉽게 생각하는 편이고, 지나치게 걱정하지 않는다.",
  "나는 휴가 때 시골에 있는 별장에서 친구들과 주말을 보내는 것을 좋아한다. 혼자 휴식을 취하지 않아도 된다.",
  "나는 친구들이 갑자기 찾아오는 것을 좋아한다.",
  "나는 잠을 거의 자지 않아도 견딜 수 있다.",
  "나는 폭죽 터뜨리는 것을 좋아한다."
];

const RESULT_RANGES = [
  {
    min: -52,
    max: 0,
    title: "자극 추구 성향이 강한 편입니다.",
    description: "새로운 경험과 활동 에너지에 익숙하며 감각 자극에 비교적 둔감한 편일 수 있습니다. 변화나 사람들과의 교류에서 쉽게 지치기보다 오히려 활력을 얻을 가능성이 있습니다."
  },
  {
    min: 1,
    max: 29,
    title: "평균보다 약간 민감한 편입니다.",
    description: "상황에 따라 민감성이 나타나지만 일상 기능에는 큰 어려움이 없는 경우가 많습니다. 특정 환경이나 관계에서는 예민하게 반응할 수 있으나, 대체로 균형을 유지할 가능성이 큽니다."
  },
  {
    min: 30,
    max: 59,
    title: "민감성이 비교적 높은 편입니다.",
    description: "환경, 감정, 인간관계의 영향을 깊게 받을 가능성이 있습니다. 충분한 휴식과 감정 회복 시간이 중요합니다. 자극이 많은 날에는 의식적으로 에너지를 회복할 필요가 있습니다."
  },
  {
    min: 60,
    max: 140,
    title: "HSP 성향 가능성이 높은 편입니다.",
    description: "감각 자극, 인간관계, 분위기, 감정 변화에 민감하게 반응할 수 있습니다. 깊은 사고력과 공감 능력을 강점으로 가지는 경우가 많지만, 과부하와 감정 소진을 조심해야 합니다."
  }
];

const FEATURES = [
  "타인의 감정을 빠르게 감지함",
  "갈등과 긴장 상황에서 쉽게 소진됨",
  "시끄러운 환경과 강한 자극에 민감함",
  "혼자만의 회복 시간이 필요함",
  "예술·자연·음악에 깊은 감응을 느낌",
  "과도하게 생각하고 대비하는 경향",
  "죄책감과 책임감을 강하게 느낌",
  "감정적 공감 능력이 높음"
];

const state = {
  currentIndex: 0,
  answers: Array(QUESTIONS.length).fill(null)
};

const screens = {
  start: document.querySelector("#start-screen"),
  question: document.querySelector("#question-screen"),
  result: document.querySelector("#result-screen")
};

const elements = {
  startButton: document.querySelector("#start-button"),
  prevButton: document.querySelector("#prev-button"),
  restartButton: document.querySelector("#restart-button"),
  progressCount: document.querySelector("#progress-count"),
  progressPercent: document.querySelector("#progress-percent"),
  progressFill: document.querySelector("#progress-fill"),
  questionNumber: document.querySelector("#question-number"),
  questionTitle: document.querySelector("#question-title"),
  optionsList: document.querySelector("#options-list"),
  groupOneScore: document.querySelector("#group-one-score"),
  groupTwoScore: document.querySelector("#group-two-score"),
  finalScore: document.querySelector("#final-score"),
  interpretationTitle: document.querySelector("#interpretation-title"),
  interpretationDescription: document.querySelector("#interpretation-description"),
  scoreMarker: document.querySelector("#score-marker"),
  featureGrid: document.querySelector("#feature-grid")
};

function showScreen(targetScreen) {
  Object.values(screens).forEach((screen) => {
    screen.classList.toggle("active", screen === targetScreen);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function calculateScores(answers) {
  const groupOne = answers.slice(0, 35).reduce((sum, answer) => sum + (answer ?? 0), 0);
  const groupTwo = answers.slice(35, 48).reduce((sum, answer) => sum + (answer ?? 0), 0);
  return {
    groupOne,
    groupTwo,
    finalScore: groupOne - groupTwo
  };
}

function getResultRange(score) {
  return RESULT_RANGES.find((range) => score >= range.min && score <= range.max) ?? RESULT_RANGES[RESULT_RANGES.length - 1];
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getGaugePosition(score) {
  return ((clamp(score, -52, 140) + 52) / 192) * 100;
}

function renderQuestion() {
  const questionNumber = state.currentIndex + 1;
  const progress = (questionNumber / QUESTIONS.length) * 100;

  elements.progressCount.textContent = `${questionNumber} / ${QUESTIONS.length}`;
  elements.progressPercent.textContent = `${Math.round(progress)}%`;
  elements.progressFill.style.width = `${progress}%`;
  elements.questionNumber.textContent = `문항 ${questionNumber}`;
  elements.questionTitle.textContent = QUESTIONS[state.currentIndex];
  elements.prevButton.disabled = state.currentIndex === 0;
  elements.optionsList.innerHTML = "";

  ANSWER_OPTIONS.forEach((option) => {
    const button = document.createElement("button");
    const isSelected = state.answers[state.currentIndex] === option.score;
    button.type = "button";
    button.className = `option-button${isSelected ? " selected" : ""}`;
    button.setAttribute("role", "radio");
    button.setAttribute("aria-checked", String(isSelected));
    button.innerHTML = `<span class="option-score">${option.score}</span><span>${option.label}</span>`;
    button.addEventListener("click", () => selectAnswer(option.score));
    elements.optionsList.appendChild(button);
  });
}

function selectAnswer(score) {
  state.answers[state.currentIndex] = score;

  if (state.currentIndex < QUESTIONS.length - 1) {
    state.currentIndex += 1;
    renderQuestion();
    return;
  }

  renderResult();
}

function renderFeatures() {
  elements.featureGrid.innerHTML = FEATURES.map((feature, index) => {
    const label = String(index + 1).padStart(2, "0");
    return `<div class="feature-item"><span class="icon-dot">${label}</span><span>${feature}</span></div>`;
  }).join("");
}

function renderResult() {
  const scores = calculateScores(state.answers);
  const result = getResultRange(scores.finalScore);

  elements.groupOneScore.textContent = `${scores.groupOne}점`;
  elements.groupTwoScore.textContent = `${scores.groupTwo}점`;
  elements.finalScore.textContent = `${scores.finalScore}점`;
  elements.interpretationTitle.textContent = result.title;
  elements.interpretationDescription.textContent = result.description;
  elements.scoreMarker.style.left = `${getGaugePosition(scores.finalScore)}%`;

  renderFeatures();
  showScreen(screens.result);
}

function resetAssessment() {
  state.currentIndex = 0;
  state.answers = Array(QUESTIONS.length).fill(null);
  showScreen(screens.start);
}

function goToPrevious() {
  if (state.currentIndex === 0) {
    return;
  }
  state.currentIndex -= 1;
  renderQuestion();
}

function runInternalChecks() {
  const allFour = Array(48).fill(4);
  const allZero = Array(48).fill(0);
  const negativeCase = [...Array(35).fill(0), ...Array(13).fill(4)];

  console.assert(QUESTIONS.length === 48, "총 문항 수는 48개여야 합니다.");
  console.assert(calculateScores(allFour).groupOne === 140, "1~35번 4점 합계는 140점이어야 합니다.");
  console.assert(calculateScores(allFour).groupTwo === 52, "36~48번 4점 합계는 52점이어야 합니다.");
  console.assert(calculateScores(allFour).finalScore === 88, "모든 문항 4점의 최종 점수는 88점이어야 합니다.");
  console.assert(calculateScores(allZero).finalScore === 0, "모든 문항 0점의 최종 점수는 0점이어야 합니다.");
  console.assert(calculateScores(negativeCase).finalScore === -52, "1~35번 0점, 36~48번 4점의 최종 점수는 -52점이어야 합니다.");
}

elements.startButton.addEventListener("click", () => {
  renderQuestion();
  showScreen(screens.question);
});

elements.prevButton.addEventListener("click", goToPrevious);
elements.restartButton.addEventListener("click", resetAssessment);

runInternalChecks();
