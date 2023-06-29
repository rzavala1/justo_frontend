import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

interface Option {
  value: string;
  label: string;
}

interface Props {
  label: string;
  name: string;
  options: Option[];
  initialValue?: string;
}

const SelectOptions: React.FC<Props> = ({ label, options,initialValue, ...props }) => {

  return (
    <FormControl sx={{ backgroundColor:"#fff"}}>
      <InputLabel id={`${props.name}-label`}>{label}</InputLabel>
      <Select
        labelId={`${props.name}-label`}
        id={props.name}
        value={initialValue || ''}
      >
        {options.map((option: Option) => (
          <MenuItem key={option.value} value={option.value} >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectOptions;
