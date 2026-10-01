// ============================================================
// TUTORIAL 4: JAVASCRIPT FUNDAMENTALS
// RSVP card — wire up the behavior  (SOLVED, with notes)
// ============================================================


let isGoing    = false;
let isNotGoing = false;


const nameInput    = document.querySelector('#name-input');
const guestInput   = document.querySelector('#guest-input');
const guestField   = document.querySelector('#guest-field');


const btnYes       = document.querySelector('#btnYes');
const btnNo        = document.querySelector('#btnNo');
const confirmation = document.querySelector('#confirmation');
const regret       = document.querySelector('#regret');
const total        = document.querySelector('#total');   // stretch

// getName() returns the name from the input, or 'Someone' if empty.
//
//NOTES FOR COLE:S UNDERSTANDING
// .trim() removes spaces from both ends: "  Cole  " → "Cole"
// `||` means OR. With values (not just true/false) it returns the
//    first "truthy" one. An empty string "" is "falsy", so:
//      "Cole" || "Someone"  →  "Cole"
//      ""     || "Someone"  →  "Someone"
//    Your comment guessed this exactly right.

const getName = () => {
  const raw = nameInput.value.trim();
  return raw || 'Someone';
};

//    getGuests() returns the guest count as a NUMBER.
//    Try in the console:  typeof guestInput.value   → "string"
//    Even for <input type="number">, .value is always a string.
//    "2" + 1 = "21" (glued together), but Number("2") + 1 = 3.

const getGuests = () => Number(guestInput.value);


btnYes.addEventListener('click', () => {

  //    COLE'S NOTES: UNDERSTANDING SCOPE(?)
  //    I wrote `let` which created a new variable that only exists
  //    inside the function ( this a scope I think?)
  //    I made a mistake for hours, isGoing at the top of the file never uncommented
  //    thus the button never appeared active.
  //    No `let` to "update the variable that already exists".
  isGoing    = true;
  isNotGoing = false;

  btnYes.classList.add('active');
  btnNo.classList.remove('active');

  // --- Task 2: show the guest field ---
  guestField.classList.remove('hidden');

  // --- Task 3: swap which message is visible ---
  confirmation.classList.remove('hidden');
  regret.classList.add('hidden');

  updateConfirmation();
});


btnNo.addEventListener('click', () => {

  // Same idea as above, everything flipped.
  isGoing    = false;
  isNotGoing = true;

  btnNo.classList.add('active');
  btnYes.classList.remove('active');

  guestField.classList.add('hidden');

  confirmation.classList.add('hidden');
  regret.classList.remove('hidden');

  updateRegret();
});

//COLE NOTES: this is to update the confirmation message based on the current state of the form.
const updateConfirmation = () => {
  const guests = getGuests();

  let guestPhrase;
  //COLE NOTES: using conditional logic to determine the correct guest phrase based on the number of guests.
  if (guests === 0) {
    guestPhrase = 'flying solo.';
  } else if (guests === 1) {
    guestPhrase = 'bringing 1 guest.';
  } else {
    guestPhrase = `bringing ${guests} guests.`;
  }
//COLE NOTES: updating the confirmation message with the guest phrase and the total number of people confirmed.
  confirmation.textContent = `${getName()} is coming — ${guestPhrase}`;
//COLE NOTES: calculating the total number of people confirmed and updating the total display.
  const people = guests + 1;
  total.textContent = `${people} ${people === 1 ? 'person' : 'people'} confirmed so far`;

};

const updateRegret = () => {
  regret.textContent = `${getName()} can't make it. Maybe next time!`;
};


//COLE NOTES: adding event listeners to update the confirmation and regret messages as the user types.
nameInput.addEventListener('input', () => {
  if (isGoing) {
    updateConfirmation();
  } else if (isNotGoing) {
    updateRegret();
  }
//COLE NOTES: updating the Going button state based on the name input.
  updateGoingButton();   // stretch
});

guestInput.addEventListener('input', () => {
  // The guest count only matters on the "going" message.
  if (isGoing) {
    updateConfirmation();
  }
});


//COLE NOTES: this stretch feature disables the "Going" button if the name input is empty.

const updateGoingButton = () => {
  btnYes.disabled = nameInput.value.trim() === '';
};

updateGoingButton();   // run once on page load, so it starts disabled


// ── DEBUGGING ────────────────────────────────────────────────
//
// Type checkStatus() in the browser console to see current values.
// Try it before and after clicking a button — isGoing should flip now.

const checkStatus = () => {
  console.log('=== current state ===');
  console.log('isGoing:    ', isGoing);
  console.log('isNotGoing: ', isNotGoing);
  console.log('name:       ', nameInput.value);
  console.log('guests:     ', getGuests(), '(type:', typeof getGuests(), ')');
  console.log('raw value:  ', guestInput.value, '(type:', typeof guestInput.value, ')');
  console.log('====================');
};

// Type resetCard() in the browser console to clear everything.

const resetCard = () => {
  isGoing    = false;
  isNotGoing = false;

  nameInput.value  = '';
  guestInput.value = '0';

  btnYes.classList.remove('active');
  btnNo.classList.remove('active');

  guestField.classList.add('hidden');
  confirmation.classList.add('hidden');
  regret.classList.add('hidden');

  confirmation.textContent = '';
  regret.textContent       = '';
  total.textContent        = '';

  updateGoingButton();

  console.log('Card reset.');
};
