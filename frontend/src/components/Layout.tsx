import React from 'react';

type LayoutProps = {
  children: React.ReactNode; // Brukes til å rendere innholdet i layouten
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Min Portefølje</h1>
        {/* Her kan du legge til navigasjon */}
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2024 Halgeir Geirson</p>
      </footer>
    </div>
  );
};

export default Layout;