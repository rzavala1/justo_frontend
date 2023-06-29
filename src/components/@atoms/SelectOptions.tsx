import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';

interface Option {
  value: string;
  label: string;
}

interface Props {
  label: string;
  name: string;
  options: Option[];
  initialValue?: string;
  onChangeValue: (value: string) => void;
}

const SelectOptions: React.FC<Props> = (props: Props) => {
  const { label, options, initialValue } = props;
  const [value, setValue] = useState(initialValue)

  const handleChange = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value as string;
    setValue(selectedValue);
    props.onChangeValue(selectedValue);
  };

  return (
    <FormControl sx={{ backgroundColor: "#fff" }}>
      <InputLabel id={`${props.name}-label`}>{label}</InputLabel>
      <Select
        labelId={`${props.name}-label`}
        id={props.name}
        value={value || ''}
        onChange={handleChange}
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
