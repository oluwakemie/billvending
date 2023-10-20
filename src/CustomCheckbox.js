import React, { useState } from 'react';

function CustomCheckbox() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="flex items-center space-x-2 mt-3">
      <input
        type="checkbox"
        className="form-checkbox rounded-full h-4 w-4 text-indigo-600 border-indigo-600 focus:ring-indigo-500"
        checked={isChecked}
        onChange={toggleCheckbox}
      />
      <span className="text-gray-800 font-medium text-[15px]">Remember Me</span>
    </label>
  );
}

export default CustomCheckbox;