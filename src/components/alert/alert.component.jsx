import { AlertContainer } from './alert.styles';

const Alert = ({ children }) => {
  return (
    <AlertContainer>
      <p>{children}</p>
    </AlertContainer>
  );
};

export default Alert;
