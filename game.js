(function () {
    console.log('initializing canvas');

    const canvas = document.querySelector('#game-layer');
    const context = canvas.getContext('2d');

    context.fillStyle = 'grey';
    context.fillRect(0, 0, canvas.width, canvas.height);
}());