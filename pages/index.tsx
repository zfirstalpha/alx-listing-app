import React from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const HomePage = () => {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">Welcome to ALX Listing App</h1>
      <Card
        title="Cozy Apartment"
        description="2 bed • 1 bath • Great view"
        imageUrl="/assets/house1.jpg"
      />
      <div className="mt-4">
        <Button label="Book Now" onClick={() => alert('Booking...')} />
      </div>
    </div>
  );
};

export default HomePage;
