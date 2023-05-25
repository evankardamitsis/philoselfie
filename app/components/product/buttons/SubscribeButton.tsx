import React from 'react';

import {defaultButtonStyles} from '~/components/elements/Button';
import {Link} from '~/components/Link';

interface SubscribeButtonProps {
  checkoutLink: string;
}

const SubscribeButton: React.FC<SubscribeButtonProps> = ({checkoutLink}) => {
  const handleSubscription = (event: React.MouseEvent) => {
    event.preventDefault();
    window.location.href = checkoutLink;
  };

  return (
    <Link to="#" onClick={handleSubscription} className={defaultButtonStyles()}>
      Subscribe Now
    </Link>
  );
};

export default SubscribeButton;
