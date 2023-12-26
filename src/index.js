    document.addEventListener('DOMContentLoaded', function () {
        displayGreeting();
    });

    document.getElementById('nameForm').addEventListener('submit', function (event) {
        event.preventDefault();
        saveName();
        displayGreeting();
    });

    document.getElementById('clearButton').addEventListener('click', function () {
        clearName();
        displayGreeting();
    });

    function saveName() {
        var enteredName = document.getElementById('nameInput').value;
        localStorage.setItem('userName', enteredName);
    }

    function clearName() {
        localStorage.removeItem('userName');
    }

    function displayGreeting() {
        var greetingContainer = document.getElementById('greeting-container');
        var userName = localStorage.getItem('userName');

        if (userName) {
            greetingContainer.innerHTML = '<p>Welcome back, ' + userName + '!</p>';
        } else {
            greetingContainer.innerHTML = '<p>Hello, stranger! Please enter your name.</p>';
        }
    }