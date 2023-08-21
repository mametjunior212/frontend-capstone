import React, { useState } from "react";

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guest, setGuest] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };
  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="book-date">Choose Date</label>
              <input
                type="date"
                id="book-date"
                value={date}
                onChange={(e) => handleChange(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="book-time">Choose Date</label>
              <select
                name=""
                id="book-time"
                value={times}
                onChange={(e) => setTimes(e.target.value)}
              >
                <option value="">Select a Time</option>
                {props.availableTimes.availableTimes.map((availableTimes) => {
                  return (
                    <option value="" key={availableTimes}>
                      {availableTimes}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <label htmlFor="book-guest">Number of Guest :</label>
              <input
                min="1"
                id="book-guest"
                value={guest}
                onChange={(e) => setGuest(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="book-occasion">Number of Guest :</label>
              <select
                name=""
                id="book-occasion"
                value={occasion}
                key={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </div>
            <div className="btnReceive">
              <input
                type="submit"
                aria-label="On Click"
                value={"Make Your Reservation"}
              />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
