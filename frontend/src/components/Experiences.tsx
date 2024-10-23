import React from 'react';
import Experience from './Experience';
import { format } from 'date-fns';
import dayjs from 'dayjs';

const Experiences: React.FC = () => {
    //  Liste over erfaringer
    const experiences = [
        { description: 'Ett eller annet for kunde X' },
        { description: 'ett for kunde Y' },
        { description: 'eller annet for kunde Z' }
    ];

    return (
    <div>
        {experiences.length === 0 ? (
          <p>Ingen erfaringer tilgjengelig.</p>
        ) : (
            // Bruker map til å rendere alle erfaringer 
            experiences.map((experience, index) => (
              <Experience key={index} description={experience.description} title={''} />
          ))
    )}
    </div>
  );
};

export default Experiences;