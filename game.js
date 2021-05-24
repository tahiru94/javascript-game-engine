(function () {
    console.log('initializing canvas');

    const canvas = document.querySelector('#game-layer');
    const context = canvas.getContext('2d');

    // Fill the canvas
    context.fillStyle = 'grey';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Add additional boxes for game "entities"
    context.fillStyle = 'red';
    context.fillRect(5, 5, 10, 15);
    context.fillStyle = 'blue';
    context.fillRect(25, 25, 20, 20);
    context.fillStyle = 'green';
    context.fillRect(50, 50, 20, 40);
}());