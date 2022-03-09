import { Button } from "@mui/material";
import { useState } from "react";

const ExpansionWrapper = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleOpen = () => {
        setIsOpen((currOpen) => !currOpen);
    }
  
    return (
      <div>
        {isOpen && children}
        <Button onClick={toggleOpen}>{isOpen ? 'Read less' : 'Read more'}</Button>
      </div>
    );
  };
  
export default ExpansionWrapper;