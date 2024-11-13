// Pega todos 
var buttons = document.querySelectorAll('.buttons');
var heroes = document.querySelectorAll('.hero');

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
    
         // Esconde 
        for (var j = 0; j < heroes.length; j++) {
            heroes[j].style.display = 'none';
        }

        // Mostra 
        var index = Array.from(buttons).indexOf(this);
        heroes[index].style.display = 'flex';
    });
}

