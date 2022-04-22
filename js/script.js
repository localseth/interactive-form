/*
|| Declare variables
|| primarily accessing DOM elements
*/

//Form element
const form = document.getElementsByTagName('form')[0];

//General info
const nameField = document.getElementById('name');
const email = document.getElementById('email');
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
const ccNum = document.getElementById('cc-num');
const zip = document.getElementById('zip');
const cvv = document.getElementById('cvv');

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

//form field validators
const nameValidator = () => {
    const nameValue = nameField.value;
    const nameIsValid = /^\s*?\w+ ?\w*? ?\w*?$/gm.test(nameValue);
    return nameIsValid;
}

const emailValidator = () => {
    const emailValue = email.value;
    const emailIsValid = /^\s*?[^@]+@[^@.]+\.com+$/i.test(emailValue);
    return emailIsValid;
}

const activitiesValidator = () => {
    let j = 0
    for (i of allActivityCheckBoxes) {
        if (i.checked) j++;
    }
    console.log(j);
    return (j > 0 ? true:false);
}

const ccNumValidator = () => {
    const ccNumValue = ccNum.value;
    const ccnumIsValid = /^\d{13,16}}$/.test(ccNumValue);
    return ccnumIsValid;
}

const zipValidator = () => {
    const zipValue = zip.value;
    const zipIsValid = /^\d{5}$/.test(zipValue);
    return zipIsValid;
}

const cvvValidator = () => {
    const cvvValue = cvv.value;
    const cvvIsValid = /^\d{3}$/.test(cvvValue);
    return cvvIsValid;
}

const validateAll = () => {

}


/*
|| Event listeners
*/

//sets default focused field, hidden fields, and disabled fields
window.addEventListener('load', setDefault);

//hides 'other' job role option unless 'other' is selected from the dropdown
jobRole.addEventListener('change', () => {
    if (jobRole.value === 'other') {
        showHide(otherJob, '');
    } else {
        showHide(otherJob, 'none');
    }
});

//displays only the shirt color options associate with the selected shirt theme
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

//updates total balance each time an activity is selected
activities.addEventListener('change', updateTotal);

//displays info for selected payment option
paymentType.addEventListener('change', updatePaymentOption);

//validates form input
form.addEventListener('submit', validateAll);