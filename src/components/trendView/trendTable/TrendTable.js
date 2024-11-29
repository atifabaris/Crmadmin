import React from 'react';

const TrendTable = () => {
  // Example data for products and their monthly sales
  const monthData = [
    {
      id: 1,
      standardLabel: 'Product 1',
      displayLabel: '2023-2024',
      january: 120,
      february: 130,
      march: 140,
      april: 150,
      may: 160,
      june: 170,
      july: 180,
      august: 190,
      september: 200,
      october: 210,
      november: 220,
      december: 230,
    },
    {
      id: 2,
      standardLabel: 'Product 2',
      displayLabel: '2022-2023',
      january: 100,
      february: 110,
      march: 120,
      april: 130,
      may: 140,
      june: 150,
      july: 160,
      august: 170,
      september: 180,
      october: 190,
      november: 200,
      december: 210,
    },
  ];

  // Function to calculate total sales for the year
  const calculateTotal = (data) => {
    return Object.keys(data)
      .filter((key) => key !== 'id' && key !== 'standardLabel' && key !== 'displayLabel')
      .reduce((total, month) => total + data[month], 0);
  };

  return (
    <div className="table-responsive mt-4">
      <table className="table table-bordered table-striped">
        <thead className="bg-light">
          <tr>
            <th className="fs-5">Segment</th>
            <th className="fs-5">Years</th>
            <th className="fs-5">January</th>
            <th className="fs-5">February</th>
            <th className="fs-5">March</th>
            <th className="fs-5">April</th>
            <th className="fs-5">May</th>
            <th className="fs-5">June</th>
            <th className="fs-5">July</th>
            <th className="fs-5">August</th>
            <th className="fs-5">September</th>
            <th className="fs-5">October</th>
            <th className="fs-5">November</th>
            <th className="fs-5">December</th>
            <th className="fs-5">Total</th>
          </tr>
        </thead>
        <tbody>
          {monthData.map((app) => (
            <tr key={app.id}>
              <td>{app.standardLabel}</td>
              <td>{app.displayLabel}</td>
              <td>{app.january}</td>
              <td>{app.february}</td>
              <td>{app.march}</td>
              <td>{app.april}</td>
              <td>{app.may}</td>
              <td>{app.june}</td>
              <td>{app.july}</td>
              <td>{app.august}</td>
              <td>{app.september}</td>
              <td>{app.october}</td>
              <td>{app.november}</td>
              <td>{app.december}</td>
              <td>{calculateTotal(app)}</td> {/* Calculating the total sales */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrendTable;
