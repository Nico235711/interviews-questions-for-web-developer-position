import { cssQuestions, htmlQuestions, interviewQuestions, jsQuestions } from "./variables.js";

const renderHTMLInterviewQuestions = () => {
  interviewQuestions.html.forEach(question => {
    const htmlQuestionElement = document.createElement("div")
    htmlQuestionElement.classList.add("htmlQuestion")

    htmlQuestionElement.innerHTML =
      `<h3>${question.title}</h3>
      <p>${question.answer}</p>`

    htmlQuestions.append(htmlQuestionElement)
  })

};

renderHTMLInterviewQuestions();

const renderCSSInterviewQuestions = () => {
  interviewQuestions.css.forEach(question => {
    const cssQuestionElement = document.createElement("div")
    cssQuestionElement.classList.add("cssQuestion")

    cssQuestionElement.innerHTML =
      `<h3>${question.title}</h3>
      <p>${question.answer}</p>`

    cssQuestions.append(cssQuestionElement)
  })

};

renderCSSInterviewQuestions();

const renderJSInterviewQuestions = () => {
  interviewQuestions.javascript.forEach(question => {
    const jsQuestionElement = document.createElement("div")
    jsQuestionElement.classList.add("jsQuestion")

    jsQuestionElement.innerHTML =
      `<h3>${question.title}</h3>
      <p>${question.answer}</p>`

    jsQuestions.append(jsQuestionElement)
  })

};

renderJSInterviewQuestions();
