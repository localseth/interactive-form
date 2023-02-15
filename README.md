# interactive-form-project

## Overview
This project takes a basic form and provide user interactivity by using JavaScript. All the HTML and CSS has been supplied by Treehouse, whereas the JavaScript has been written by myself according the the rubric in the Treehouse course. View the demo [here](https://localseth.github.io/interactive-form-project/).
## Helper Functions
### Display Functions
There are a variety of functions that help organize the code. Below are the most important helper functions and function types.

####
The `showHide(domElement, displayStatus)` function accesses the display style attribute and changes its status. The string `'none'` will cause the element to be hidden, and an empty string will cause the element to return to its original state.

The `updateTotal` function will keep a running total of the cost of events for which the user signs up whereas the `updatePaymentOption` will dislpay only the payment information for the payment option the user selects.

The `setDefaul` function sets the page's default otions for the select fields and hides options that should not be visible right away (such as 'other job' and the visible payment option). It also sets focus on the name field.

### Validator Functions
The validator functions check whether the entered text in the required form fields are formatted properly. The functions return `true` if the entry is valid, and `false` if not. All of them are named to match the form fields.

There are two functions that work differently. `validateAll` is an array of all the validator functions. This is used to loop along side an array of all the required fields to determine which fields ought to be validated when the submit event occurs. If the credit card payment is not selected, the credit card fields will not be validated and will not prevent information form being submitted. The `checkValid` function will check the validity of a field and display the appropriate styling to help the user find errors.

## Special Features
### Real-time Field Validation
An event listener has been added to the email form field to check if the text typed by the user matches
the correct format. Warnings will only display once the user navigates away from the field, however the green check confirming that the text entered matches the required format will appear as soon as that format and text match.
### Conditional Error Message
For the email form field, the validator will check if the text entered is only white space and will display a hint specific to that scenario once the `checkValid()` function is called. If there is any text, but it does not match the required format, it will display a different hint.
