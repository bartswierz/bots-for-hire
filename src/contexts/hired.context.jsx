import { createContext, useState, useEffect } from "react";

//HELPER FUNCTIONS
// Passing current hiredList AND new hire to add
const addHire = (hiredList, hireToAdd) => {
  //add an IF EXISTING to prevent duplicate hires on btn click
  const alreadyHired = hiredList.find((hire) => hire.id === hireToAdd.id);

  console.log("ALREADY HIRED! ", hireToAdd.id);

  //If user is in list, don't add
  if (alreadyHired) {
    return [...hiredList];
  }

  //return new hiredList with new hire added
  return [...hiredList, { ...hireToAdd }];
};

// Pass in the hire list AND user's ID
const removeHire = (hiredList, hireToRemove) => {
  console.log("INSIDE removeHire, hireToRemove: ", hireToRemove);

  const newHiredList = hiredList.filter((hire) => hire.id !== hireToRemove);

  return newHiredList;
};

// Values we are accessing
export const HiredContext = createContext({
  // isHired: false,
  hiredList: [],
  hiredCount: 0,
  addHireToList: () => {},
  removeHireFromList: () => {},
});

export const HiredProvider = ({ children }) => {
  // Checks whether card button is pressed to indicate adding hire to list
  const [isHired, setIsHired] = useState(false);
  // Keeps total count of our hires
  const [hiredCount, setHiredCount] = useState(0);
  // Holds our hires
  const [hiredList, setHiredList] = useState([]);

  //useEffect will increment/decrement our counter depending if user adds/removes hire to our hiredList
  useEffect(() => {
    const newHireCount = hiredList.length;
    console.log("Hired useEffect, hireCount: ", newHireCount);
    setHiredCount(newHireCount);
  }, [hiredList]);

  //Add hire to list, addHire is our helper function
  const addHireToList = (hireToAdd) => {
    // Pass our current list AND the new hire to create a new object
    setHiredList(addHire(hiredList, hireToAdd));
  };

  //pass in the user id to remove
  const removeHireFromList = (hireToRemove) => {
    setHiredList(removeHire(hiredList, hireToRemove));
  };

  // Add additional functions to this to pass to children
  const value = { hiredList, hiredCount, addHireToList, removeHireFromList };

  return <HiredContext.Provider value={value}>{children}</HiredContext.Provider>;
};
