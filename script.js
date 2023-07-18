const quizData = [
    {
        question: "Antes da invenção do Pomo de Ouro, qual criatura mágica era usada nas partidas de quadribol?",
        a: "Pombo-correio.",
        b: "Pomorim Dourado.",
        c: "A ave-serpente.",
        d: "O mandarim dourado.",
        correct: "b",
    },
    {
        question: "Qual poção costuma ser chamada de Sorte Líquida?",
        a: "A Poção Polissuco.",
        b: "Felix Felicis.",
        c: "Amortentia.",
        d: "A Poção Estimulante.",
        correct: "b",
    },
    {
        question: "O Conto dos Três Irmãos envolve quais artefatos mágicos?",
        a: "As Relíquias da Morte.",
        b: "A raça guerreira do universo 7.",
        c: "Horcruxes",
        d: "As Relíquias dos fundadores.",
        correct: "a",
    },
    {
        question: "Qual é a maior bola do quadribol?",
        a: "O Pomo",
        b: "A Goles.",
        c: "O Balaço",
        d: "Nenhuma das respostas anteriores.",
        correct: "b",
    },
    {
        question: "Qual órgão governamental antecedeu o Ministério da Magia?",
        a: "A Ordem de Merlim.",
        b: "O Conselho dos Bruxos.",
        c: "A Confederação Internacional de Bruxos.",
        d: "O Departamento de Execução das Leis da Magia ",
        correct: "b",
    },
    {
        question: "Qual é a menor raça de dragão?",
        a: "Focinho-Curto Sueco.",
        b: "O barriga-de-ferro Ucraniano.",
        c: "O Dente-de-Víbora Peruano.",
        d: "Rabo-Córneo Húngaro",
        correct: "c",
    },
    {
        question: "Quem fundou a aldeia de Hogsmeade?",
        a: "Elfrida Clagg.",
        b: "Quincy Hog.",
        c: "Director Schmector.",
        d: "Hengisto de Woodcroft.",
        correct: "d",
    },
    {
        question: "O esconde-esconde foi criado acidentalmente ao cruzar um vampiro com qual outra criatura mágica?",
        a: "Uma mortalha-viva.",
        b: "Um farosutil.",
        c: "Um seminviso.",
        d: "Um dementador.",
        correct: "c",
    },
    {
        question: "Qual é o único feitiço que repele uma mortalha-viva?",
        a: "O Feitiço do Patrono.",
        b: "O Feitiço Estuporante.",
        c: "A Azaração do Tranco.",
        d: "O Feitiço de Transfiguração.",
        correct: "a",
    },
    {
        question: "Quem publicou a Lei da Transfiguração Elementar?",
        a: "Gamp.",
        b: "Evangeline Orpington.",
        c: "Laverne de Montmorency.",
        d: "Frodo.",
        correct: "a",
    },
    {
        question: "Qual é a tradução do lema de Hogwarts?",
        a: "Sabedoria é a verdadeira magia.",
        b: "Pense antes de agir.",
        c: "Nunca faça cócegas em um dragão adormecido.",
        d: "Nunca confie em alguem da sonserina.",
        correct: "c",
    },
    {
        question: "Qual é a única criatura mágica conhecida por produzir os ovos pela boca?",
        a: "O basilisco.",
        b: "O bezerro apaixonado.",
        c: "O oraqui orala.",
        d: "O farosutil.",
        correct: "d",
    },
    {
        question: "Onde fica localizada a Escola de Magia e Bruxaria de Ilvermorny?",
        a: "A Floresta Amazônica.",
        b: "No Japão.",
        c: "No extremo norte da Europa.",
        d: "Monte Greylock.",
        correct: "d",
    },
    {
        question: "Qual é a poção do amor mais potente conhecida pelos bruxos?",
        a: "Verocitaserum.",
        b: "Amortentia.",
        c: "Elixir para Induzir Euforia.",
        d: "Wiggenweld.",
        correct: "b",
    },
    {
        question: "Qual o nome da Escola de Magia do extremo norte da Europa? ",
        a: "Escola de Magia de Mahoutokoro.",
        b: "Instituto Durmstrang.",
        c: "Academia de Magia Beauxbatons.",
        d: "Instituto de Koldovstoretz .",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Você acertou ${score}/${quizData.length} perguntas.</h2>

                <button onclick="location.reload()">recarregar</button>
            `;
        }
    }
});
