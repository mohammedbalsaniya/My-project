//This code done by ChatGPT

// Select the button element
const button = document.getElementById('btn');

// Add an event listener to the button
button.addEventListener('click', function() {
    // Toggle the display property of fristLyer elements
    const fristLyerElements = document.querySelectorAll('.fristLyer');
    for (let i = 0; i < fristLyerElements.length; i++) {
        const element = fristLyerElements[i];
        element.style.display = element.style.display === 'flex' ? 'none' : 'flex';
    }

    // Toggle the display property of SecondLyer elements
    const secondLyerElements = document.querySelectorAll('.SecondLyer');
    for (let i = 0; i < secondLyerElements.length; i++) {
        const element = secondLyerElements[i];
        element.style.display = element.style.display === 'none' ? 'flex' : 'none';
    }
});


//ease



// Select the button element
// const button = document.getElementById('btn');

// Add an event listener to the button
// button.addEventListener('click', function() {
    // Toggle the display property of fristLyer elements
//     const fristLyerElements = document.querySelectorAll('.fristLyer');
    // for (let i = 0; i < fristLyerElements.length; i++) {
    //     const element = fristLyerElements[i];
    //     const computedStyle = window.getComputedStyle(element); // Get the computed style
    //     if (computedStyle.display === 'flex') {
    //         element.style.display = 'none';
    //     } else {
    //         element.style.display = 'flex';
    //     }
    // }

    // // Toggle the display property of SecondLyer elements
    // const secondLyerElements = document.querySelectorAll('.SecondLyer');
    // for (let i = 0; i < secondLyerElements.length; i++) {
    //     const element = secondLyerElements[i];
    //     const computedStyle = window.getComputedStyle(element); // Get the computed style
    //     if (computedStyle.display === 'flex') {
    //         element.style.display = 'none';
    //     } else {
    //         element.style.display = 'flex';
    //     }
    // }
// });
