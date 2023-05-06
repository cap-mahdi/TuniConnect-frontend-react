import React from "react";

function InputField(props){
    const handleChange = (e) => {
        props.onChange(e.target.value);
    }
    return(
        <div className={props.width}>
        <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
         {props.label}
        </label>
        <div className="mt-2">
          <input
            type={props.type}
            name={props.name}
            id={props.name}
            value={props.value}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    )
}


export default InputField;