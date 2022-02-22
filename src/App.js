import './App.css';
import Table from './components/TABLE';

function App() {
  const tableData = {
    title: 'Purchase History',
    heading: ['ORDER ID', 'ORDER DATE', 'CERTIFICATE RANGE', 'NO. OF CERTIFICATES', 'CERTIFICATE TYPE', 'TOTAL PAYABLE', 'PAYMENT STATUS'],
    data: [
      ['BLXkMbMGwu', '24-Aug-2021', 'Not Assigned', 5, 'CASH', '2000৳', 'UNPAID'],
      ['CLXkMbMGwu', '24-Aug-2021', 'Not Assigned', 4, 'GSP', '1600৳', 'UNPAID'],
      ['DLXkMbMGwu', '24-Aug-2021', 'Not Assigned', 2, 'GSP', '800৳', 'UNPAID'],
      ['ELXkMbMGwu', '24-Aug-2021', 'Not Assigned', 7, 'CASH', '2800৳', 'UNPAID'],
      ['FLXkMbMGwu', '24-Aug-2021', 'Not Assigned', 14, 'CASH', '5600৳', 'UNPAID'],
      ['GLXkMbMGwu', '24-Aug-2021', 'Not Assigned', 10, 'GSP', '4000৳', 'UNPAID'],
      ['BLXlMbMGwu', '24-Aug-2021', 'Not Assigned', 5, 'CASH', '2000৳', 'UNPAID'],
      ['BMXkMbMGwu', '24-Aug-2021', 'Not Assigned', 3, 'GSP', '1200৳', 'UNPAID'],
      ['FLYkMbMGwu', '24-Aug-2021', 'Not Assigned', 6, 'CASH', '2400৳', 'UNPAID'],
      ['DYXkMbMGwu', '24-Aug-2021', 'Not Assigned', 4, 'GSP', '1600৳', 'UNPAID'],
      ['IJXkMbMGwu', '24-Aug-2021', 'Not Assigned', 8, 'CASH', '1500৳', 'UNPAID'],
      ['KLXkMbMGwu', '24-Aug-2021', 'Not Assigned', 9, 'CASH', '1800৳', 'UNPAID'],
    ]
  }
  return (
    <div className='App'>
      <Table tableData={ tableData } />
    </div>
  );
}

export default App;
