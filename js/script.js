console.log('test');

//Declare variables
const nameField = document.getElementById('name');
const otherJob = document.getElementById('other-job-role');

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
});