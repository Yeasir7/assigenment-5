document.getElementById('buy-ticket-btn').addEventListener('click', function(){
    document.getElementById('buy-ticket-section').scrollIntoView({ behavior: 'smooth' });
});

const allSeats = document.getElementsByClassName('all-seat');
let totalSelectedSit = 0;
let seatLeft = 40;

for(const seat of allSeats) {
    seat.addEventListener('click', function() {
        if (seat.style.backgroundColor === 'rgb(29, 209, 0)') {
            seat.style.backgroundColor = '';
            seat.style.color = '';
            totalSelectedSit--;
            seatLeft++;
        } else {
            seat.style.backgroundColor = '#1DD100';
            seat.style.color = 'white';
            totalSelectedSit++;
            seatLeft--;
        }

        document.getElementById('total-selected-sit').textContent = totalSelectedSit;
        document.getElementById('seat-left').textContent = seatLeft
    });
}
