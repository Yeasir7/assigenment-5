document.getElementById('buy-ticket-btn').addEventListener('click', function(){
    document.getElementById('buy-ticket-section').scrollIntoView({ behavior: 'smooth' });
});

const allSeats = document.getElementsByClassName('all-seat');
let totalSelectedSit = 0;
let seatLeft = 40;

for(const seat of allSeats) {
    seat.addEventListener('click', function (event) {
        const selectedSeat = event.target.textContent;
        const classSeat = 'Economy';
        const price = 550;

        if (seat.style.backgroundColor === 'rgb(29, 209, 0)') {
            seat.style.backgroundColor = '';
            seat.style.color = '';
            totalSelectedSit--;
            seatLeft++;

            const selectedTicket = document.getElementById('selected-ticket');
            const removeDiv = Array.from(selectedTicket.children).find(div => 
                div.firstChild.textContent === selectedSeat
            );
            if (removeDiv) {
                selectedTicket.removeChild(removeDiv);
            }
        } else {
            seat.style.backgroundColor = '#1DD100';
            seat.style.color = 'white';
            totalSelectedSit++;
            seatLeft--;

            const selectedTicket = document.getElementById('selected-ticket');

            const div = document.createElement('div');
          div.classList.add("created-seat")

           const p1 = document.createElement('p');
           const p2 = document.createElement('p');
           const p3 = document.createElement('p');
           p1.innerText = selectedSeat;
           p2.innerText = classSeat;
           p3.innerText = price;

           div.appendChild(p1);
           div.appendChild(p2);
           div.appendChild(p3);

           selectedTicket.appendChild(div);
        }

           document.getElementById('total-selected-sit').textContent = totalSelectedSit;
           document.getElementById('seat-left').textContent = seatLeft;

    });
}
