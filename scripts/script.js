document.getElementById('buy-ticket-btn').addEventListener('click', function(){
    document.getElementById('buy-ticket-section').scrollIntoView({ behavior: 'smooth' });
});

const allSeats = document.getElementsByClassName('all-seat');
let totalSelectedSit = 0;
let seatLeft = 40;
let totalCost = 0;

function updateGrandTotal() {
    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = totalCost;
}

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
            totalCost -= price;

            const selectedTicket = document.getElementById('selected-ticket');
            const removeDiv = Array.from(selectedTicket.children).find(div => 
                div.firstChild.textContent === selectedSeat
            );
            if (removeDiv) {
                selectedTicket.removeChild(removeDiv);
            }
        } else {
            if (totalSelectedSit < 4) {
                seat.style.backgroundColor = '#1DD100';
                seat.style.color = 'white';
                totalSelectedSit++;
                seatLeft--;
                totalCost += price;

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
            } else {
                alert("You can't select more than 4 seats.");
                return;
            }
        }

        document.getElementById('total-selected-sit').textContent = totalSelectedSit;
        document.getElementById('seat-left').textContent = seatLeft;
        document.getElementById('total-cost').innerText = totalCost;
        updateGrandTotal();

        const applyBtn = document.getElementById('apply-btn');
        applyBtn.disabled = totalSelectedSit !== 4;
    });
}


document.getElementById('apply-btn').addEventListener('click', function() {
    const couponCode = document.getElementById('coupoe-code').value;
    let discount = 0;

    if (couponCode === 'NEW15') {
        discount = 0.15; 
    } else if (couponCode === 'Couple20') {
        discount = 0.20; 
    } else {
        alert('Invalid coupon code');
        return;
    }

    const discountedTotal = totalCost - (totalCost * discount);
    document.getElementById('grand-total').innerText = discountedTotal.toFixed(2);
});

updateGrandTotal();

function hideSectionById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showSectionById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function next(){
    hideSectionById('this-page');
    showSectionById('next-page');
}