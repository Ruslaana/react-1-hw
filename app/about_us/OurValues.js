const OurValues = () => {
  const values = [
    {
      id: '01',
      title: 'Love your craft.',
      description:
        'We’re here because we love what we do. It’s our passion, hobby, career, and vocation. We’re looking for others who feel the same way.',
    },
    {
      id: '02',
      title: 'Be bold. Be humble.',
      description:
        'There is no top-down. We lead from the bottom and the edges. Everyone drives. We celebrate ideas over egos, where the best idea wins, regardless of who or where it comes from.',
    },
    {
      id: '03',
      title: 'Be better. Always push forward.',
      description:
        'We’re on a tireless pursuit to become better and expect those around us to do the same.',
    },
    {
      id: '04',
      title: 'Be a Professional',
      description:
        'There’s important work to be done. Speak up. Be present. Provide value, with honesty and candour.',
    },
  ];

  return (
    <div
      style={{
        padding: '20px',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        {values.map(value => (
          <div
            key={value.id}
            style={{
              textAlign: 'left',
              padding: '20px',
              borderBottom: '1px solid white',
            }}
          >
            <h1
              style={{ fontSize: '50px', marginBottom: '10px', color: '#fff' }}
            >
              {value.id}
            </h1>
            <h3
              style={{
                fontSize: '20px',
                fontWeight: 'bold',
                marginBottom: '10px',
              }}
            >
              {value.title}
            </h3>
            <p style={{ fontSize: '14px', color: '#aaa', lineHeight: '1.6' }}>
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurValues;
