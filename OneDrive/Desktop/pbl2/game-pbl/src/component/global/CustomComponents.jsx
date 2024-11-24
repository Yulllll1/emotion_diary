import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

// CustomButton 정의 및 명시적 내보내기
export const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'white',
  color: 'black',
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '8px',
  border: '0.1px solid darkgray',
  '&:hover': {
    backgroundColor: 'dark',
  },
}));

