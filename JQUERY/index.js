$(document).ready(function () {
    let count = 0;
    $("#btn").click(function () {
        count++;
        $("#result").text(count);
    });

    $("#form").submit(function (e) {
        e.preventDefault();

        let name = $("#nom").val();
        let firstname = $("#prenom").val();
        let date = $("#date").val();
        let error = false;
        if (name === '') {
            $("#nom").css("background-color", "red");
            error = true;
        } else {
            $("#nom").css("background-color", "white");
        }
        if (firstname === '') {
            $("#prenom").css("background-color", "red");
            error = true;
        } else {
            $("#prenom").css("background-color", "white");
        }
        if (date === '') {
            $("#date").css("background-color", "red");
            error = true;
        } else {
            $("#date").css("background-color", "white");
        }
        if (!error) {
            $("#resultat").text("Nom : " + name + " Prénom : " + firstname + " Date de naissance : " + date);
        }
        return false;
    });

    
    const speed = 10;
    const mvSq = $('#sqMvt');
    mvSq.css('top', '0px');
    mvSq.css('left', '0px');

    $(document).keydown(function(event) {
        // parseInt converti du string en integer
        let top = parseInt(mvSq.css('top'));
        let left = parseInt(mvSq.css('left'));

        if(event.key === 'ArrowRight') {
            console.log('right');
            left = left + speed;
            if(left >= 360) {
                left = 360;
                setRed();
            }
        }

        if(event.key === 'ArrowLeft') {
            left = left - speed;
            if(left <= 0) {
                left = 0;
                setRed();
            }
        }

        if(event.key === 'ArrowUp') {
            top = top - speed;
            if(top <= 0) {
                top = 0;
                setRed();
            }
        }

        if(event.key === 'ArrowDown') {
            top = top + speed;
            if(top >= 360) {
                top = 360;
                setRed();
            }
        }

        mvSq.css('top', top + 'px');
        mvSq.css('left', left + 'px');
    });

    mvSq.click(function() {
        mvSq.toggleClass('toucher');
        setTimeout(function() {
            mvSq.toggleClass('toucher');
        }, 3000);
    });
    function setRed() {
        mvSq.addClass('toucher');
        setTimeout(function() {
            mvSq.removeClass('toucher');
        }, 3000);
    }
});


