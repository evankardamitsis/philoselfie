import React from 'react';

interface FilosofiaProps {
  data: any;
  showPageTitle?: boolean;
}

const Filosofia: React.FC<FilosofiaProps> = () => {
  return (
    <div>
      <p>Hello, I am the Filosofia component data.</p>
      {/* Render the rest of the component */}
    </div>
  );
};

export default Filosofia;
