const HeaderReducer = (state, action) => {
  switch (action.type) {
    case "DISPLAY_DASHBOARD":
      return (state = action.pageTitle);
    case "DISPLAY_REPORTS":
      return (state = action.pageTitle);
    case "DISPLAY_DEVICES":
      return (state = action.pageTitle);
    case "DISPLAY_DEVICE_NAME":
      return (state = action.pageTitle);
    default:
      return state;
  }
};

export default HeaderReducer;
