import { createContext, useState, useEffect } from "react";

//HELPER FUNCTIONS
// Passing current hiredList AND new hire to add
const addHire = (hiredList, hireToAdd) => {
  console.log("INSIDE addHire, hireToAdd: ", hireToAdd);
  //add an IF EXISTING to prevent duplicate hires on btn click
  const alreadyHired = hiredList.find((hire) => hire.id === hireToAdd.id);
  console.log("ALREADY HIRED! ", hireToAdd.id);

  //User already in our list, don't add
  if (alreadyHired) {
    console.log("inside IF(alreadyHired)");
    return [...hiredList];
  }

  console.log("OUTSIDE alreadyHired");
  //return new list with our CURRENT AND ADDITIONAL
  return [...hiredList, { ...hireToAdd }];
};

// Pass in the hire list AND user to remove based on ID
const removeHire = (hiredList, hireToRemove) => {
  console.log("INSIDE removeHire, hireToRemove: ", hireToRemove);

  const newHiredList = hiredList.filter((hire) => hire.id !== hireToRemove);

  console.log("newHiredList: ", newHiredList);
  // Return ONLY the users with ids that are NOT this passed hireToRemove
  // return hiredList.filter((hire) => hire.id !== hireToRemove.id);
  // return hiredList.filter(
  //   (hire) =>
  //     // console.log("hire.id: ", hire.id);
  //     hire.id !== hireToRemove.id
  // );
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
  //Cart Count: count number of hires
  //REMOVE hire from cart
  //Add Hire To Cart
  //Cart Items: Hires inside our list

  // Checks whether card button is pressed to indicate adding hire to list
  const [isHired, setIsHired] = useState(false);
  // Keeps total count of our hires
  const [hiredCount, setHiredCount] = useState(0);
  // Holds our hires
  const [hiredList, setHiredList] = useState([]);

  //useEffect setup hiredList Count, when we add a hire to the list we have to increment the counter
  // useEffect(() => {}, [hiredList]);

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
  const value = { hiredList, addHireToList, removeHireFromList };

  return <HiredContext.Provider value={value}>{children}</HiredContext.Provider>;
};
