

const Faculty = () => {
  const facultyList = [
    { name: "Mrs. Asha Patil", qualification: "Ph.D. in Physics", subject: "Physics" },
    { name: "Mr. Ramesh Shinde", qualification: "M.Sc. Mathematics", subject: "Mathematics" },
    { name: "Mrs. Sunita More", qualification: "M.A. English", subject: "English" },
    { name: "Mr. Anil Kadam", qualification: "M.Sc. Chemistry", subject: "Chemistry" },
    { name: "Ms. Priya Deshmukh", qualification: "M.C.A.", subject: "Computer Science" },
  ];

  return (
    <section className="faculty-section">
      <h2>Our Faculty</h2>
      <table className="faculty-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Qualification</th>
            <th>Subject Expertise</th>
          </tr>
        </thead>
        <tbody>
          {facultyList.map((faculty, index) => (
            <tr key={index}>
              <td>{faculty.name}</td>
              <td>{faculty.qualification}</td>
              <td>{faculty.subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Faculty;
