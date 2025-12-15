import { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import './CrowdEntries.css';

/**
 * Interface for crowd entry data
 */
interface CrowdEntry {
  id: number;
  name: string;
  sex: 'Male' | 'Female';
  entry: string;
  exit: string;
  dwellTime: string;
  avatar: string;
}

const CrowdEntries = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 10;

  // Mock data for crowd entries matching Figma design
  const crowdData: CrowdEntry[] = [
    { id: 1, name: 'Alice Johnson', sex: 'Female', entry: '11:05 AM', exit: '--', dwellTime: '--', avatar: '👩🏼' },
    { id: 2, name: 'Brian Smith', sex: 'Male', entry: '11:03 AM', exit: '--', dwellTime: '--', avatar: '👨🏻' },
    { id: 3, name: 'Catherine Lee', sex: 'Female', entry: '11:00 AM', exit: '--', dwellTime: '--', avatar: '👩🏻' },
    { id: 4, name: 'David Brown', sex: 'Male', entry: '10:50 AM', exit: '11:10 AM', dwellTime: '00:20', avatar: '👨🏽' },
    { id: 5, name: 'Eva White', sex: 'Female', entry: '11:20 AM', exit: '11:30 AM', dwellTime: '00:10', avatar: '👩🏼' },
    { id: 6, name: 'Frank Green', sex: 'Male', entry: '11:50 AM', exit: '12:10 AM', dwellTime: '00:20', avatar: '👨🏻' },
    { id: 7, name: 'Grace Taylor', sex: 'Female', entry: '10:50 AM', exit: '11:10 AM', dwellTime: '00:20', avatar: '👩🏻' },
    { id: 8, name: 'Henry Wilson', sex: 'Male', entry: '10:50 AM', exit: '11:10 AM', dwellTime: '00:20', avatar: '👨🏼' },
    { id: 9, name: 'Isabella Martinez', sex: 'Female', entry: '10:50 AM', exit: '11:10 AM', dwellTime: '00:20', avatar: '👩🏽' },
    { id: 10, name: 'Jack Thompson', sex: 'Male', entry: '10:50 AM', exit: '11:10 AM', dwellTime: '00:20', avatar: '👨🏻' },
    { id: 11, name: 'Katherine Anderson', sex: 'Female', entry: '10:50 AM', exit: '11:10 AM', dwellTime: '00:20', avatar: '👩🏼' },
    { id: 12, name: 'Liam Garcia', sex: 'Male', entry: '10:45 AM', exit: '11:05 AM', dwellTime: '00:20', avatar: '👨🏽' },
    { id: 13, name: 'Mia Rodriguez', sex: 'Female', entry: '10:40 AM', exit: '11:00 AM', dwellTime: '00:20', avatar: '👩🏻' },
    { id: 14, name: 'Noah Martinez', sex: 'Male', entry: '10:35 AM', exit: '10:55 AM', dwellTime: '00:20', avatar: '👨🏻' },
    { id: 15, name: 'Olivia Davis', sex: 'Female', entry: '10:30 AM', exit: '10:50 AM', dwellTime: '00:20', avatar: '👩🏼' },
    { id: 16, name: 'Peter Wilson', sex: 'Male', entry: '10:25 AM', exit: '10:45 AM', dwellTime: '00:20', avatar: '👨🏼' },
    { id: 17, name: 'Quinn Brown', sex: 'Female', entry: '10:20 AM', exit: '10:40 AM', dwellTime: '00:20', avatar: '👩🏻' },
    { id: 18, name: 'Robert Taylor', sex: 'Male', entry: '10:15 AM', exit: '10:35 AM', dwellTime: '00:20', avatar: '👨🏽' },
    { id: 19, name: 'Sophia Lee', sex: 'Female', entry: '10:10 AM', exit: '10:30 AM', dwellTime: '00:20', avatar: '👩🏽' },
    { id: 20, name: 'Thomas White', sex: 'Male', entry: '10:05 AM', exit: '10:25 AM', dwellTime: '00:20', avatar: '👨🏻' },
    { id: 21, name: 'Uma Patel', sex: 'Female', entry: '10:00 AM', exit: '10:20 AM', dwellTime: '00:20', avatar: '👩🏽' },
    { id: 22, name: 'Victor Chen', sex: 'Male', entry: '09:55 AM', exit: '10:15 AM', dwellTime: '00:20', avatar: '👨🏻' },
    { id: 23, name: 'Wendy Kim', sex: 'Female', entry: '09:50 AM', exit: '10:10 AM', dwellTime: '00:20', avatar: '👩🏻' },
    { id: 24, name: 'Xavier Johnson', sex: 'Male', entry: '09:45 AM', exit: '10:05 AM', dwellTime: '00:20', avatar: '👨🏼' },
    { id: 25, name: 'Yara Ahmed', sex: 'Female', entry: '09:40 AM', exit: '10:00 AM', dwellTime: '00:20', avatar: '👩🏽' },
    { id: 26, name: 'Zachary Miller', sex: 'Male', entry: '09:35 AM', exit: '09:55 AM', dwellTime: '00:20', avatar: '👨🏻' },
    { id: 27, name: 'Aria Cooper', sex: 'Female', entry: '09:30 AM', exit: '09:50 AM', dwellTime: '00:20', avatar: '👩🏼' },
    { id: 28, name: 'Benjamin Hall', sex: 'Male', entry: '09:25 AM', exit: '09:45 AM', dwellTime: '00:20', avatar: '👨🏽' },
    { id: 29, name: 'Chloe Turner', sex: 'Female', entry: '09:20 AM', exit: '09:40 AM', dwellTime: '00:20', avatar: '👩🏻' },
    { id: 30, name: 'Daniel Scott', sex: 'Male', entry: '09:15 AM', exit: '09:35 AM', dwellTime: '00:20', avatar: '👨🏼' },
  ];

  // Calculate pagination
  const totalPages = Math.ceil(crowdData.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentEntries = crowdData.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="crowd-entries">
      {/* Page header with title and date */}
      <div className="crowd-entries-header">
        <h1>Crowd Entries</h1>
        <div className="date-display">
          <Calendar size={20} />
          <span>Today</span>
        </div>
      </div>

      {/* Data table */}
      <div className="crowd-entries-content">
        <div className="entries-table-container">
          <table className="entries-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Sex</th>
                <th>Entry</th>
                <th>Exit</th>
                <th>Dwell Time</th>
              </tr>
            </thead>
            <tbody>
              {currentEntries.map((entry) => (
                <tr key={entry.id}>
                  <td>
                    <div className="name-cell">
                      <span className="avatar">{entry.avatar}</span>
                      <span className="name">{entry.name}</span>
                    </div>
                  </td>
                  <td className="sex-cell">{entry.sex}</td>
                  <td className="time-cell">{entry.entry}</td>
                  <td className="time-cell">{entry.exit}</td>
                  <td className="dwell-cell">{entry.dwellTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination controls */}
        <div className="pagination">
          <button
            className="page-nav"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft size={20} />
          </button>
          
          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            // Show first page, last page, current page, and pages around current
            if (
              page === 1 ||
              page === totalPages ||
              (page >= currentPage - 1 && page <= currentPage + 1)
            ) {
              return (
                <button
                  key={page}
                  className={`page-number ${currentPage === page ? 'active' : ''}`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              );
            } else if (page === currentPage - 2 || page === currentPage + 2) {
              return <span key={page} className="page-ellipsis">...</span>;
            }
            return null;
          })}
          
          <button
            className="page-nav"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CrowdEntries;
