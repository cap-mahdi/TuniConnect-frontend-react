import React from "react";

function SelectCountry(props){
  const handleChange = (e) => {
    props.onChange(e.target.value);
}
    return(
        <div className={props.width}>
        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
          {props.label}
        </label>
        <div className="mt-1">
          <select
            id="country"
            name="country"
            autoComplete="country"
            value={props.value}
            onChange={handleChange}
            className="block w-full py-1.5 px-3 border-0 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent sm:text-sm"
          >
            <option>United States</option>
            <option>Tunisia</option>
            <option>Canada</option>
            <option>Mexico</option>
            <option>France</option>
            <option>Germany</option>
            <option>Spain</option>
            <option>Italy</option>
            <option>Other</option>
          </select>
        </div>
      </div>
    )
}

export default SelectCountry;