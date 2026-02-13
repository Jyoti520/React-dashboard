

function ToggleSwitch({ label, isOn, onToggle }) {
  return (
    <div className="flex items-center justify-between py-3">
      <span className="text-gray-200">{label}</span>
      <button
        className={`relative inline-flex items-center h-6 rounded-full w-11  transition-colors focus:outline-none ${
          isOn ? "bg-indigo-600" : "bg-gray-600"
        }`}
        onClick={onToggle}
      >
        <span
          className={`inline-block size-4 transform transition-transform rounded-full bg-gray-100 ${
            isOn ? "translate-x-6" : "translate-x-1"
          }`}
        ></span>
      </button>
    </div>
  );
}

export default ToggleSwitch;
