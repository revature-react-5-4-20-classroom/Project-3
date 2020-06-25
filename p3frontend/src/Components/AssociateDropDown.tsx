import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Associate from '../models/Associate';


const AssociateDropDown= (props: Associate[]) => {

  
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Available Associates
      </DropdownToggle>
      <DropdownMenu>
  

        {props.map(( a: Associate) => {

            return (           

                <DropdownItem>a</DropdownItem>

        )})}

      </DropdownMenu>
    </Dropdown>
  );
}

export default AssociateDropDown;