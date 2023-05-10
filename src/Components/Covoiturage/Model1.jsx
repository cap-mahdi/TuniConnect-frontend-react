import React, { useState } from 'react';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { postCovoiturage } from '../../api/Covoiturage/CovoiturageController';

const Model1 = ({ id, isVisible, onClose }) => {
  const [step, setStep] = useState(1);
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = React.useState(new Date());
  const [numberOfPlaces, setNumberOfPlaces] = useState(1);
  const [price, setPrice] = useState(0);

  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') {
      onClose();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
  
    if (form.checkValidity()) { 
      postCovoiturage({
        destination: destination,
        departure: departure,
        departure_time: date,
        number_of_places: numberOfPlaces,
        price: price,
        driver_id: id,
      });
      handleReset();
      onClose();
    } else {
      form.reportValidity(); 
    }
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleReset = () => {
    setDeparture('');
    setDestination('');
    setStep(1);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      style={{ zIndex: 5 }}
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-5/12 flex flex-col">
        <button
          className="text-white text-xl place-self-end text-[#E5ECF0]"
          onClick={() => {
            handleReset();
            onClose();
          }}
        >
          X
        </button>
        {step === 1 && (
          <div className="flex flex-col items-center w-full rounded-lg bg-[#E5ECF0]">
            <div className="my-4 font-bold text-4xl text-[#1F2937]">From Where Are you Going?</div>
            <form onSubmit={handleNext} className="my-7 w-full flex flex-col items-center justify-between">
              <input
                type="text"
                placeholder="Enter you starting point"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                required
                className="border border-gray-400 p-2 rounded-md w-2/3"
              />
              <div className="flex flex-row justify-end mt-10 mx-3 w-5/6 space-x-2">
                <button
                  type="button"
                  className="bg-[#F4F5FA] py-2 rounded-full border border-[#1F2937] shadow-xl w-20 text-[#1F2937]"
                  onClick={() => onClose()}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#F4F5FA] py-2 rounded-full border border-[#1F2937] shadow-xl w-20 text-[#1F2937]"
                  onClick={() => handleNext()}
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        )}
        {step === 2 && (
          <div className="flex flex-col items-center w-full rounded-lg bg-[#E5ECF0]">
            <div className="my-4 font-bold text-4xl text-[#1F2937]">And Where Are you Going?</div>
            <form onSubmit={handleNext} className="my-7 w-full flex flex-col items-center justify-between">
              <input
                type="text"
                placeholder="Enter your destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                required
                className="border border-gray-400 p-2 rounded-md w-2/3"
              />
              <div className="flex flex-row justify-end mt-10 mx-3 w-5/6 space-x-2">
                <button
                  type="button"
                  className="bg-[#F4F5FA] py-2 rounded-full border border-[#1F2937] shadow-xl w-20 text-[#1F2937]"
                  onClick={() => handlePrev()}
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className="bg-[#F4F5FA] py-2 rounded-full border border-[#1F2937] shadow-xl w-20 text-[#1F2937]"
                  onClick={() => handleNext()}
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        )}
        {step === 3 && (
          <div className="flex flex-col items-center w-full rounded-lg bg-[#E5ECF0]">
            <div className="my-4 font-bold text-4xl text-[#1F2937]">Select The Departure Date</div>
            <form onSubmit={handleNext} className="my-7 w-full flex flex-col items-center justify-between">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker label="Date&Time picker" value={date} onChange={(date) => setDate(date)} />
              </LocalizationProvider>
              <div className="flex flex-row justify-end mt-10 mx-3 w-5/6 space-x-2">
                <button
                  type="button"
                  className="bg-[#F4F5FA] py-2 rounded-full border border-[#1F2937] shadow-xl w-20 text-[#1F2937]"
                  onClick={() => handlePrev()}
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className="bg-[#F4F5FA] py-2 rounded-full border border-[#1F2937] shadow-xl w-20 text-[#1F2937]"
                  onClick={() => handleNext()}
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        )}
        {step === 4 && (
          <div className="flex flex-col items-center w-full rounded-lg bg-[#E5ECF0]">
            <div className="my-4 font-bold text-4xl text-[#1F2937]">How many people are allowed on?</div>
            <form onSubmit={handleNext} className="my-7 w-full flex flex-col items-center justify-between">
              <input
                type="number"
                placeholder="Enter a number"
                value={numberOfPlaces}
                onChange={(e) => setNumberOfPlaces(e.target.value)}
                required
                className="border border-gray-400 p-2 rounded-md w-2/3"
                min={1}
                step={1}
              />
              <div className="flex flex-row justify-end mt-10 mx-3 w-5/6 space-x-2">
                <button
                  type="button"
                  className="bg-[#F4F5FA] py-2 rounded-full border border-[#1F2937] shadow-xl w-20 text-[#1F2937]"
                  onClick={() => handlePrev()}
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className="bg-[#F4F5FA] py-2 rounded-full border border-[#1F2937] shadow-xl w-20 text-[#1F2937]"
                  onClick={() => handleNext()}
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        )}
        {step === 5 && (
          <div className="flex flex-col items-center w-full rounded-lg bg-[#E5ECF0]">
            <div className="my-4 font-bold text-4xl text-[#1F2937]">Enter a Reasonable Price</div>
            <form onSubmit={handleSubmit} className="my-7 w-full flex flex-col items-center justify-between">
              <input
                type="number"
                placeholder="Enter a price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                className="border border-gray-400 p-2 rounded-md w-2/3"
              />
              <div className="flex flex-row justify-end mt-10 mx-3 w-5/6 space-x-2">
                <button
                  type="button"
                  className="bg-[#F4F5FA] py-2 rounded-full border border-[#1F2937] shadow-xl w-20 text-[#1F2937]"
                  onClick={() => handlePrev()}
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className="bg-[#F4F5FA] py-2 rounded-full border border-[#1F2937] shadow-xl w-20 text-[#1F2937]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Model1;
