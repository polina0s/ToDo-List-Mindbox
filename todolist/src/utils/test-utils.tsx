import React, {ReactElement} from 'react'
import {render, RenderOptions} from '@testing-library/react'
import { StyledEngineProvider } from '@mui/material/styles';

const AllTheProviders = ({children}: {children: React.ReactNode}) => {
  return (
    <StyledEngineProvider injectFirst>
        {children}
    </StyledEngineProvider>
  )
};

export const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AllTheProviders, ...options});