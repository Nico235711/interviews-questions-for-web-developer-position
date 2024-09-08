import { container, Questions } from "./variables.js"

const renderInterviewQuestions = () => {
  Questions.forEach(question => {
    const questionElement = document.createElement("div")
    
    questionElement.classList.add("question")
    questionElement.innerHTML = `
      <h2>${question.title}</h2>
      <p class='question-text'>${question.answer}</p>
    `
    
    container.appendChild(questionElement)
  })
}

renderInterviewQuestions()