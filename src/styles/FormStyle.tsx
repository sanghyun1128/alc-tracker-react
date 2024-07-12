import { styled } from 'styled-components';

import { deviceSizes } from '../const/deviceSizes';

export const FormStyle = styled.form`
  display: grid;
  align-items: center;
  justify-items: stretch;
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.colors.formBackground};

  ${deviceSizes.abnormal} {
    width: 250px;
    padding: 20px 20px 0px 20px;
  }
  ${deviceSizes.small} {
    width: 400px;
    padding: 20px 20px 0px 20px;
  }
  ${deviceSizes.medium} {
    width: 500px;
    padding: 50px 50px 0px 50px;
  }
  ${deviceSizes.large} {
    width: 550px;
    padding: 50px 50px 0px 50px;
  }
`;
