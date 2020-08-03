import React, { useState } from "react";

export const SelectEventContext = React.createContext({
  selectedEvent: null,
  selectedPos: null,
  selectEvent: () => {},
  disSelectEvent: () => {},
});

const SelectEventContextProvider = (props) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedPos, setSelectedPos] = useState(null);

  const selectEvent = (event, item) => {
    event.stopPropagation();
    const rectObj = event.currentTarget.getBoundingClientRect();

    const pos = {
      bottom: rectObj.bottom,
      left: rectObj.left,
      top: rectObj.top,
      right: rectObj.right,
      x: rectObj.x,
      y: rectObj.y,
      height: rectObj.height,
      width: rectObj.width,
    };

    setSelectedEvent(Object.assign({}, item));
    setSelectedPos(pos);
  };

  const disSelectEvent = () => {
    setSelectedEvent(null);
    setSelectedPos(null);
  };

  return (
    <SelectEventContext.Provider
      value={{
        selectedEvent: selectedEvent,
        selectedPos: selectedPos,
        selectEvent: selectEvent,
        disSelectEvent: disSelectEvent,
      }}
    >
      {props.children}
    </SelectEventContext.Provider>
  );
};

export default SelectEventContextProvider;
