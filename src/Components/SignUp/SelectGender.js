import React from "react";

function SelectGender(props){
  const handleChange = (e) => {
    props.onChange(e.target.value);
}
        return(
            <div className={props.width}>
            <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                Gender
              </label>
              <div className="mt-2">
                <select
                  id="gender"
                  name="gender"
                  autoComplete="gender-name"
                  value={props.value}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
        </div>
        )
    }

export default  SelectGender;