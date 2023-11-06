export const quiz = {
    topic: 'Javascript',
    level: 'beginner',
    totalQuestions: 4,
    perQuestionScore: 5,
    questions: [
        {
            question: 'What is the JavaScript this keyword used for?',
            choices: ['Referring to the current object', 'Defining a new variable', 'Loop iteration', 'Math calculations'],
            type: 'MCQs',
            correctAnswer: 'Referring to the current object',
          },
          {
            question: 'Which JavaScript method is used to remove the first element from an array?',
            choices: ['shift()', 'unshift()', 'pop()', 'slice()'],
            type: 'MCQs',
            correctAnswer: 'shift()',
          },
          {
            question: 'What does the JavaScript null represent?',
            choices: ['An empty string', 'An undefined value', 'An absence of any object value', 'A numeric value'],
            type: 'MCQs',
            correctAnswer: 'An absence of any object value',
          },
          {
            question: 'In JavaScript, what is the purpose of the addEventListener method?',
            choices: ['To create a new element', 'To add an event listener to an element', 'To change the document structure', 'To modify the CSS style'],
            type: 'MCQs',
            correctAnswer: 'To add an event listener to an element',
          },
          {
            question: 'Which operator is used for concatenating strings in JavaScript?',
            choices: ['+', '&', 'concat()', 'concatenate()'],
            type: 'MCQs',
            correctAnswer: '+',
          },
    ]

}