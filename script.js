const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

const checkEmpty = input => {
  if(input === ''){
    alert("Please provide a phone number");
    return;
  };

const countryCodeRegex = '^(1\\s?)?';
const areaCodeRegex = '(\\([0-9]{3}\\)|[0-9]{3})';
const spaceRegex = '[\\s\\-]?';
const phoneNumberRegex = '[0-9]{3}[\\s\\-]?[0-9]{4}$';

const isValid = new RegExp(`${countryCodeRegex}${areaCodeRegex}${spaceRegex}${phoneNumberRegex}`)

const chekNumberResult = document.createElement('p');
chekNumberResult.className = 'result';
chekNumberResult.appendChild(
  document.createTextNode(`${isValid.test(input) 
? 'Valid': 'Invalid'} US Number: ${input}`
    )
    );
resultsDiv.appendChild(chekNumberResult);
};

checkBtn.addEventListener('click', () =>{
  checkEmpty(userInput.value);
  userInput.value = '';
});

clearBtn.addEventListener('click', () => {
  resultsDiv.textContent = '';
});
