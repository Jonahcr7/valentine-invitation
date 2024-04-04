let noBtnCount = 0; // Counter for the "No" botton
let noBtnState = 0; // Currently status for the "No" botton

// Show the first gif
document.getElementById('gifHappy').style.display = 'block';

// If the user says Yes
document.getElementById('yesBtn').addEventListener('click', function() {
    // We hide the sad´s gif
    document.getElementById('gifBad').style.display = 'none';
    document.getElementById('gifBad2').style.display = 'none';
    document.getElementById('gifBad3').style.display = 'none';
    document.getElementById('gifBad4').style.display = 'none';
    document.getElementById('gifBad5').style.display = 'none';
    document.getElementById('gifHappy').style.display = 'none';
    // Now we show an happy gift
    document.getElementById('gifHappy3').style.display = 'block';
    // We hide buttons
    document.getElementById('question').style.display = 'none';
    document.getElementById('yesBtn').style.display = 'none';
    document.body.classList.add('bg-green');
    document.getElementById('noBtn').style.display = 'none';
    // Show a specific message
    document.getElementById('messageContainer').style.display = 'block';
    document.getElementById('messageContainer').innerHTML = 'Ohh si jajaja<3!';
    // We show another gif five seconds after
    setTimeout(function() {
        document.getElementById('gifHappy3').style.display = 'none';
        document.getElementById('gifHappy2').style.display = 'block';
    }, 2000);
    setTimeout(function() {
        document.getElementById('gifHappy2').style.display = 'none';
        document.getElementById('gifHappy4').style.display = 'block';
    }, 6000);
});

// If the user says No
document.getElementById('noBtn').addEventListener('click', function() {
    switch (noBtnState) {
        case 0:
            // First time user clic on "No"
            document.getElementById('gifHappy').style.display = 'none';
            document.getElementById('gifBad4').style.display = 'block';
            // Changes on the 'No' button
            document.getElementById('noBtn').innerHTML = 'Vamos, danos una oportunidad';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            // Changes on the 'Yes' button
            document.getElementById('yesBtn').style.fontSize = '40px';
            document.getElementById('yesBtn').style.padding = '20x 40px';

            noBtnCount++;
            noBtnState++;
            break;
        case 1 :
            // Second time user clic on "No"
            document.getElementById('gifBad4').style.display = 'none';
            document.getElementById('gifBad').style.display = 'block';
            // Changes on the 'No' button
            document.getElementById('noBtn').innerHTML = 'Tranquila, seguro solo te equivocaste de botón';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            // Changes on the 'Yes' button
            document.getElementById('yesBtn').style.fontSize = '50px';
            document.getElementById('yesBtn').style.padding = '30x 50px';

            noBtnState++;
            break;
        case 2:
            // User clic on "No"
            document.getElementById('gifBad').style.display = 'none';
            document.getElementById('gifBad2').style.display = 'block';
            // Changes on the 'No' button
            document.getElementById('noBtn').innerHTML = '¿Estás realmente segura?';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            // Changes on the 'Yes' button
            document.getElementById('yesBtn').style.fontSize = '60px';
            document.getElementById('yesBtn').style.padding = '40x 60px';

            noBtnState++;
            break;
        case 3:
            // User clic on "No"
            document.getElementById('gifBad2').style.display = 'none';
            document.getElementById('gifBad3').style.display = 'block';
            // Changes on the 'No' button
            document.getElementById('noBtn').innerHTML = 'Di sí a nuevas historias:)';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            // Changes on the 'Yes' button
            document.getElementById('yesBtn').style.fontSize = '80px';
            document.getElementById('yesBtn').style.padding = '60x 80px';

            noBtnState++;
            break;
        case 4:
            // User clic on "No"
            // Changes on the 'No' button
            document.getElementById('noBtn').innerHTML = 'Okay, estoy empezando a preocuparme';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            // Changes on the 'Yes' button
            document.getElementById('yesBtn').style.fontSize = '100px';
            document.getElementById('yesBtn').style.padding = '80x 100px';

            noBtnState++;
            break;
        case 5:
            // User clic on "No"
            document.getElementById('gifBad3').style.display = 'none';
            document.getElementById('gifBad5').style.display = 'block';
            // Changes on the 'No' button
            document.getElementById('noBtn').innerHTML = 'DI QUE SÍÍÍ:(';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            // Changes on the 'Yes' button
            document.getElementById('yesBtn').style.fontSize = '140px';
            document.getElementById('yesBtn').style.padding = '120x 140px';

            noBtnState++;
            break;
        case 6:
            // User clic on "No"
            // Changes on the 'No' button
            document.getElementById('noBtn').innerHTML = 'ANDA SÍÍÍ';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            // Changes on the 'Yes' button
            document.getElementById('yesBtn').style.fontSize = '180px';
            document.getElementById('yesBtn').style.padding = '160x 180px';

            noBtnState++;
            break;
        case 7:
            // User clic on "No"
            // Changes on the 'No' button
            document.getElementById('noBtn').innerHTML = 'De hecho Taylor Swift tiene una canción sobre esto';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            // Changes on the 'Yes' button
            document.getElementById('yesBtn').style.fontSize = '240px';
            document.getElementById('yesBtn').style.padding = '220x 240px';

            noBtnState++;
            break;
        case 8:
            // User clic on "No"
            document.getElementById('gifBad').style.display = 'none';
            document.getElementById('gifBad2').style.display = 'none';
            document.getElementById('gifBad3').style.display = 'none';
            document.getElementById('gifBad4').style.display = 'none';
            document.getElementById('gifBad5').style.display = 'none';
            document.getElementById('gifHappy').style.display = 'block';
            // Changes on the 'No' button
            document.getElementById('noBtn').innerHTML = 'Me rindo:(';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            // Changes on the 'Yes' button
            document.getElementById('yesBtn').style.fontSize = '320px';
            document.getElementById('yesBtn').style.padding = '300x 320px';

            noBtnState = 0;
            break;
        default:

            break;
    }
});