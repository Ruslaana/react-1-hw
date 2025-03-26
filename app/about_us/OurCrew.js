const OurCrew = () => {
  const crewMembers = [
    {
      name: 'Anousheh Ansari',
      src: '/crew/image-anousheh-ansari.png',
      role: 'Founder & CEO',
    },
    {
      name: 'Douglas Hurley',
      src: '/crew/image-douglas-hurley.png',
      role: 'Commander',
    },
    {
      name: 'Mark Shuttleworth',
      src: '/crew/image-mark-shuttleworth.png',
      role: 'Flight Engineer',
    },
    {
      name: 'Victor Glover',
      src: '/crew/image-victor-glover.png',
      role: 'Pilot',
    },
  ];

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <p style={{ marginBottom: '30px' }}>
        Meet our highly skilled and passionate space enthusiasts who make it all
        possible.
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: '40px',
          justifyItems: 'center',
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        {crewMembers.map((member, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              minWidth: '180px',
            }}
          >
            <img
              src={member.src}
              alt={member.name}
              style={{
                width: '180px',
                height: '220px', 
                objectFit: 'cover', 
                borderRadius: '10px',
                marginBottom: '10px',
              }}
            />
            <p
              style={{ margin: '10px 0', fontSize: '16px', fontWeight: 'bold' }}
            >
              {member.name}
            </p>
            <p style={{ margin: '5px 0', fontSize: '14px', color: '#666' }}>
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCrew;
