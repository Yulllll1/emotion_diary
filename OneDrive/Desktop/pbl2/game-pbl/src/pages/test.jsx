import React from 'react';
import { CustomButton } from '../component/global/CustomComponents'; // 정확한 경로

function Test() {
    return (
        <div>
          <h1>Test Page</h1>
          <CustomButton variant="contained">확인</CustomButton>
          <CustomButton
          variant="contained"
          sx={{backgroundColor: '#F53649', color: 'white', '&:hover': {backgroundColor: '#DB0000', },}}
          >
            취소
            </CustomButton>

        </div>
    );
}

export default Test;