// == TEMPLATE QUIZ ITEM ==


import { getQuestions, createQuestion } from './api.js'
import { generateQuizItem } from './utils/index.js'
const quizContent = document.getElementById("quiz-content")

document.addEventListener("DOMContentLoaded", () => {
    async function handAllQuestion(){
        try {
            const question = await getQuestions();
            // ! misalnya question gak ada
            if(!question) return;

            quizContent.innerHTML = question.map((question) => {
                return generateQuizItem({
                    id: question.id,
                    question: question.jokes,
                    answer: question.answer,
                    category: question.category,
                  });
                
            }).join("")
            // misalnya question ada, maka tampilkan
            console.log({question});

        }catch (eror) {
            console.error("ada eror nih : ", {
                eror,
            })
        }
    }

    handAllQuestion();
})