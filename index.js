async function getQuestions () {
      try {
        const response = await fetch('/db.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // console.log(data); // Process your data here
        return data
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
}
let data = getQuestions().then(data=>{
  data.questions.forEach(card => {
      console.log(card)
      let questionContainer = document.createElement("div")
      questionContainer.setAttribute("class", "question-container")
      questionContainer.innerHTML=`
                <p>${card.question}</p>
                
                <label>
                  <input type="radio" name="${card.id}" value="a">
                  ${card.options.a}
                </label><br>
              
                <label>
                  <input type="radio" name="${card.id}" value="b">
                  ${card.options.b}
                </label><br>
              
                <label>
                  <input type="radio" name="${card.id}" value="c">
                  ${card.options.c}
                </label><br>
              
                <label>
                  <input type="radio" name="${card.id}" value="d">
                  ${card.options.d}
                </label><br>
              `
      document.querySelector('.container > form').prepend(questionContainer)
  });

})

let form = document.querySelector('.container > form')
form.addEventListener("submit", function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Create a new FormData object, passing the form as an argument
  const formData = new FormData(form);

  // Convert the FormData to a regular object for easier handling
  const data = Object.fromEntries(formData.entries());

  console.log(data); 
});

