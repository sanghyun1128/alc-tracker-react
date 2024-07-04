import { styled } from 'styled-components';

import { deviceSizes } from '../const/deviceSizes';

const FormStyle = styled.form`
  display: grid;
  align-items: center;
  justify-items: stretch;
  border-radius: ${props => props.theme.formBorderRadius};
  background-color: ${props => props.theme.colors.formBackground};

  ${deviceSizes.abnormal} {
    width: 250px;
    padding: 20px 20px 0px 20px;
  }
  ${deviceSizes.small} {
    width: 250px;
    padding: 20px 20px 0px 20px;
  }
  ${deviceSizes.medium} {
    width: 500px;
    padding: 50px 50px 0px 50px;
  }
  ${deviceSizes.large} {
    width: 700px;
    padding: 50px 50px 0px 50px;
  }
`;

export default FormStyle;
