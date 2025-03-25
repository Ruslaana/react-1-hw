const OurPartners = () => {
  const partners = [
    { name: 'Alphabet', src: '/business_partners/alphabet-logo.png' },
    { name: 'Amazon', src: '/business_partners/amazon_logo.png' },
    { name: 'CBC', src: '/business_partners/CBC_Logo_White.png' },
    { name: 'Microsoft', src: '/business_partners/Microsoft-Logo-white.png' },
    { name: 'NYU', src: '/business_partners/nyu-logo.png' },
    { name: 'Samsung', src: '/business_partners/samsung-logo.png' },
  ];

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h3 style={{ marginBottom: '30px' }}>
        We collaborate with progressive, ambitious brands we believe in.
      </h3>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '40px',
          justifyItems: 'center',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        {partners.map((partner, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <img
              src={partner.src}
              alt={partner.name}
              style={{ width: '150px', height: 'auto', marginBottom: '15px' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPartners;
