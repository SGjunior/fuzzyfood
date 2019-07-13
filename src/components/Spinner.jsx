// Display while app fetches data from Rails Backend API
// Used exclusively in place of button text

import React from 'react';
import { FaBeer } from 'react-icons/fa';
import './Spinner.scss';

const Spinner = () => {
  return (
    <FaBeer className="loadingIconCircle" color="black" />
  )
}

export default Spinner;
