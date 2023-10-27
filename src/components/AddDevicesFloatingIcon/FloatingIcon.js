const FloatingIcon = () => {
  return (
    <div className="fixed bottom-[6rem] right-[1rem] sm:bottom-[2rem] sm:right-[2rem] text-white z-[2000]">
      <div className="h-[4rem] w-[4rem] sm:h-20 sm:w-20 bg-backgroundRed rounded-full flex justify-center items-center animation-pulse">
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default FloatingIcon;
