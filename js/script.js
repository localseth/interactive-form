console.log('test');

//Declare variables
const nameField = document.getElementById('name');
const otherJob = document.getElementById('other-job-role');
const jobRole = document.getElementById('title');
const colors = document.getElementById('color');

//Helper functions
const focusOrBlur = (domElement, status) => {
    if (status === 'focus'){
    domElement.focus();
    } else if (status === 'blur') {
        domElement.blur();
    }
}

const showHide = (domElement, displayStatus) => {
    domElement.style.display = displayStatus;
}

//Event listeners
window.addEventListener('load', () => {
    focusOrBlur(nameField, 'focus');
    showHide(otherJob, 'none');
    colors.setAttribute('disabled', 'true');
});

jobRole.addEventListener('change', () => {
    if (jobRole.value === 'other') {
        showHide(otherJob, '');
    } else {
        showHide(otherJob, 'none');
    }
});