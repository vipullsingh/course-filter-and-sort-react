import React from 'react';

const SpeakerTable = ({ speakers }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {speakers.map((speaker) => (
            <tr key={speaker._id}>
              <td>{speaker._id}</td>
              <td>{speaker.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpeakerTable;
