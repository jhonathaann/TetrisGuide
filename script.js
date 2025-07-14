// script.js
document.addEventListener('DOMContentLoaded', function() {
    const moves = document.querySelectorAll('li');
    
    moves.forEach(move => {
        move.addEventListener('click', function() {
            alert(`Você clicou em ${move.textContent}. Mais detalhes em breve!`);
        });
    });
});