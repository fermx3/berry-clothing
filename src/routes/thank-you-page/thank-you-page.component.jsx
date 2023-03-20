import { useSelector } from 'react-redux';
import { selectLastPurchase } from '../../store/cart/cart.selector';

import { ReactComponent as CheckMark } from '../../assets/thanks.svg';
import { ThankYouContainer } from './thank-you-page.styles';
import ItemsResume from '../../components/items-resume/items-resume.component';

const ThankYouPage = () => {
  const lastPurchase = useSelector(selectLastPurchase);

  return (
    <ThankYouContainer>
      <CheckMark />
      <h1>Thank You!</h1>
      <h2>Your payment was accepted.</h2>
      <p>Your order is being processed.</p>
      <ItemsResume items={lastPurchase} />
    </ThankYouContainer>
  );
};

export default ThankYouPage;
