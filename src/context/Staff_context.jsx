import { createContext, useState, useEffect } from "react";
import {
  addstaffdatainfirestore,
  fetchstafflistdatafromfirestore,
} from "../util/firebase";
import stafflist from "../stafflist";

export const StaffContext = createContext({
  staff: [],
});

export function StaffProvider({ children }) {
  const [staff, setstaff] = useState(stafflist);

  const value = { staff, setstaff };

  // first do this:

//   useEffect(() => {
//       addstaffdatainfirestore('Staff_List', staff)
//   }, [])
  // useEffect ko ek baar call kar so that data ek hi baar store ho.

  // then comment it and do this:

  useEffect(() => {
    async function stafffunction() {
      const staffData = await fetchstafflistdatafromfirestore();
      const staffArray = Object.entries(staffData).map(([name, data]) => ({
        name,
        ...data,
      }));
      setstaff(staffArray);
    }
    console.log(stafffunction);
    stafffunction();
  }, []);

  return (
    <StaffContext.Provider value={value}>{children}</StaffContext.Provider>
  );
}
