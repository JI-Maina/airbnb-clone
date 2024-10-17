import React from "react";

const ReservationSidebar = () => {
  return (
    <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
      <h2 className="mb-5 text-2xl">$200 per night</h2>

      <div className="mb-6 p-3 border border-gray-400 rounded-xl">
        <label htmlFor="" className="mb-2 block text-xs font-bold">
          Guests
        </label>
        <select name="" id="" className="w-full -ml-1 text-sm p-2">
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
        </select>
      </div>

      <div className="w-full mb-6 py-6 text-center text-white bg-airbnb hover:bg-airbnb-dark rounded-xl cursor-pointer">
        Book
      </div>

      <div className="mb-4 flex justify-between">
        <p>$200 * 3 nights</p>

        <p>$600</p>
      </div>

      <div className="mb-4 flex justify-between">
        <p>Djangobnb fee</p>

        <p>$40</p>
      </div>

      <hr />

      <div className="mt-4 flex justify-between font-bold">
        <p>Total</p>

        <p>$640</p>
      </div>
    </aside>
  );
};

export default ReservationSidebar;
