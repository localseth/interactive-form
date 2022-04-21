//Declare variables
const nameField = document.getElementById('name');
const otherJob = document.getElementById('other-job-role');
const jobRole = document.getElementById('title');

const colors = document.getElementById('color');
const shirtTheme = document.getElementById('design');
const colorOptions = document.querySelectorAll('option[data-theme]');
const punsTheme = document.querySelectorAll('option[data-theme="js puns"]');
const heartTheme = document.querySelectorAll('option[data-theme="heart js"]');

const activities = document.getElementById('activities');
const totalCost = document.getElementById('activities-cost');
const allActivityCheckBoxes = document.querySelectorAll('[data-cost]');

//Helper functions
const showHide = (domElement, displayStatus) => {
    domElement.style.display = displayStatus;
};

const changeList = (nodeList, displayStatus) => {
    nodeList.forEach(element => showHide(element, displayStatus))
};

const setDefault = () => {
    showHide(otherJob, 'none');
    colors.setAttribute('disabled', 'true');
    jobRole.firstElementChild.selected = true;
    shirtTheme.firstElementChild.selected = true;
    colors.firstElementChild.selected = true;
    nameField.focus();
};

const updateTotal = (newNum) => {
    totalCost.textContent = totalCost.textContent.replace(/\d+$/gm, newNum);
}

/*
//Event listeners
*/

//sets default focused field, hidden fields, and disabled fields
window.addEventListener('load', setDefault);

jobRole.addEventListener('change', () => {
    if (jobRole.value === 'other') {
        showHide(otherJob, '');
    } else {
        showHide(otherJob, 'none');
    }
});

shirtTheme.addEventListener('change', () => {
    colors.removeAttribute('disabled');
    colorOptions.forEach((i) => {
        if (shirtTheme.value === i.getAttribute('data-theme')) {
            i.removeAttribute('hidden');
        } else {
            i.setAttribute('hidden', '');
        }
    });
    document.querySelector('option[data-theme]:not([hidden]').selected = true;
});

// shirtTheme.addEventListener('change', () => {
//     console.log('event is working');
//     colors.removeAttribute('disabled');
//     if (shirtTheme.value === 'heart js'){
//         punsTheme.forEach(option => option.setAttribute('hidden', ''));
//         heartTheme.forEach(option => option.removeAttribute('hidden'));
//         heartTheme[0].selected = true;
//     } else if (shirtTheme.value === 'js puns') {
//         heartTheme.forEach(option => option.setAttribute('hidden', ''));
//         punsTheme.forEach(option => option.removeAttribute('hidden'));
//         punsTheme[0].selected = true;
//     }
// });

activities.addEventListener('change', () => {
    let newNum = 0;
    allActivityCheckBoxes.forEach( (item) => {
        
        const currentItem = item.getAttribute('data-cost');
        if (item.checked) {
            newNum += parseInt(currentItem);
        }
    });
    updateTotal(newNum);
    console.log(newNum);
});