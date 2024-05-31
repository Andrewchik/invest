import * as React from 'react';
import {Unstable_NumberInput as BaseNumberInput, NumberInputProps} from '@mui/base/Unstable_NumberInput';
import { styled } from '@mui/system';
import { Remove as RemoveIcon , Add as AddIcon } from '@mui/icons-material';

const NumberInput = React.forwardRef(function CustomNumberInput(
  props: NumberInputProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <BaseNumberInput
      slots={{
        root: StyledInputRoot,
        input: StyledInput,
        incrementButton: StyledButton,
        decrementButton: StyledButton,
      }}
      slotProps={{
        incrementButton: {
          children: <AddIcon fontSize="small" />,
          className: 'increment',
        },
        decrementButton: {
          children: <RemoveIcon fontSize="small" />,
        },
      }}
      {...props}
      ref={ref}
      placeholder='0'
    />
  );
});

export default function QuantityInput() {
  return <NumberInput aria-label="Quantity Input" min={1} max={99} />;
}

const blue = {
  100: '#daecff',
  200: '#b6daff',
  300: '#66b2ff',
  400: '#3399ff',
  500: '#007fff',
  600: '#0072e5',
  700: '#0059B2',
  800: '#004c99',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const StyledInputRoot = styled('div')(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 400;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[500]};
  border: 1px solid #E6ECF1;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 5px 7px;
  height: 39px;
`,
);

const StyledInput = styled('input')(
  ({ theme }) => `
  font-size: 0.875rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.375;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  margin: 0 8px;
  padding: 4px 12px;
  outline: 0;
  min-width: 0;
  width: 2rem;
  text-align: center;
`,
);

const StyledButton = styled('button')(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  line-height: 1.5;
  background: #ffffff;
  color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
  width: 10px;
  height: auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  transition-property: all;
  transition-duration: 120ms;

  &:hover {
    cursor: pointer;
  }

  &.increment {
    order: 1;
  }
`,
);
