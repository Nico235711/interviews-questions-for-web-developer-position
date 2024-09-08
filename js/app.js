import { container, Questions } from "./variables.js"

const renderInterviewQuestions = () => {
  const div = document.createElement("div")
  div.classList.add("grid")
  Questions.forEach(question => {
    const questionElement = document.createElement("div")
    
    questionElement.classList.add("question")
    questionElement.innerHTML = `
      <h2>${question.title}</h2>
      <p class='question-text'>${question.answer}</p>
    `
    div.appendChild(questionElement)
    container.appendChild(div)
  })

}

renderInterviewQuestions()