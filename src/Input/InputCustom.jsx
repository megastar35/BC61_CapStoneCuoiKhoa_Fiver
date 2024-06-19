import React from 'react';

const InputCustom = ({
  label,
  name,
  type='text',
  handleChange,
  handleBlur,
  placeholder,
  error,
  touched,
  value
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        onChange={handleChange}
        onBlur={handleBlur}
        type={type}
        name={name}
        id={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        placeholder={placeholder}
        value={value}

        // required
      />
      {touched && error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
    </div>
  );
};

export default InputCustom;
