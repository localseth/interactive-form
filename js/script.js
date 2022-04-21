/*
|| Declare variables
|| primarily accessing DOM elements
*/

//Form element
const form = document.getElementsByTagName('form')[0];
//General info
const nameField = document.getElementById('name');
const otherJob = document.getElementById('other-job-role');
const jobRole = document.getElementById('title');
//Shirt theme
const colors = document.getElementById('color');
const shirtTheme = document.getElementById('design');
const colorOptions = document.querySelectorAll('option[data-theme]');
//Activities
const activities = document.getElementById('activities');
const totalCost = document.getElementById('activities-cost');
const allActivityCheckBoxes = document.querySelectorAll('[data-cost]');
//Payment info
const paymentType = document.getElementById('payment');
const paymentOptions = paymentType.querySelectorAll(':not([hidden])');
const paymentDivs = document.querySelectorAll('.payment-methods > div');

/*
|| Helper functions
*/
const showHide = (domElement, displayStatus) => {
    domElement.style.display = displayStatus;
};

const changeList = (nodeList, displayStatus) => {
    nodeList.forEach(element => showHide(element, displayStatus))
};

const updateTotal = () => {
    let newNum = 0;
    allActivityCheckBoxes.forEach( (item) => {
        const currentItem = item.getAttribute('data-cost');
        if (item.checked) {
            newNum += parseInt(currentItem);
        }
    });
    totalCost.textContent = totalCost.textContent.replace(/\d+$/gm, newNum);
}

const updatePaymentOption = () => {
    paymentOptions.forEach(option => {
        if (option.selected) {
            for (item of paymentDivs) {
                if (item.id === option.value) {   
                showHide(item, '');
                } else if (item !== paymentDivs[0]) {
                showHide(item, 'none');
                }
            }
        }
    });
}

const setDefault = () => {
    showHide(otherJob, 'none');
    colors.setAttribute('disabled', 'true');
    jobRole.firstElementChild.selected = true;
    shirtTheme.firstElementChild.selected = true;
    colors.firstElementChild.selected = true;
    paymentOptions[0].selected = true;
    nameField.focus();
    updateTotal();
    updatePaymentOption();
};

/*
|| Event listeners
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

activities.addEventListener('change', updateTotal);

paymentType.addEventListener('change', updatePaymentOption);