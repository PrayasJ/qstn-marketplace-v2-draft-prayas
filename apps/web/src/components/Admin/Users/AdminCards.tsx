import React from 'react';

import { AdminCard } from './AdminCard';

const DATA = [
  {
    id: 1,
    name: 'Dmitry',
    userId: 'JDMasdfasf11',
    src: '/assets/images/admin-users/dmitry.svg',
    check1: true,
    check2: true
  },
  {
    id: 2,
    name: 'John Doe',
    userId: 'J2adsfa11',
    src: '/assets/images/admin-users/johnDoe.svg',
    check1: true,
    check2: true
  },
  {
    id: 3,
    name: 'Pasha Brown',
    userId: 'Bs2423477',
    src: '/assets/images/admin-users/pashaBrown.svg',
    check1: false,
    check2: false,
    banned: true
  },
  {
    id: 4,
    name: 'Ched Wolf',
    userId: 'chcdasfa93',
    src: '/assets/images/admin-users/chedWolf.svg',
    check1: true,
    check2: true
  },
  {
    id: 5,
    name: 'Stan Smith',
    userId: 'stasfdasan',
    src: '/assets/images/admin-users/stanSmith.svg',
    check1: true,
    check2: true
  },
  {
    id: 6,
    name: 'Lindsay McMenamin ',
    userId: 'lindsayMcMenamin',
    src: '/assets/images/admin-users/lindsayMcMenamin.svg',
    check1: true,
    check2: true
  },
  {
    id: 7,
    name: 'Kyle L. Beck',
    userId: 'islajfasjfkne',
    src: '/assets/images/admin-users/kyleLBeck.svg',
    check1: true,
    check2: true
  },
  {
    id: 8,
    name: 'Ellis Latham-Brown',
    userId: 'ellisLathamBrown',
    src: '/assets/images/admin-users/ellisLathamBrown.svg',
    check1: true,
    check2: true
  },
  {
    id: 9,
    name: 'Rosie Manning',
    userId: 'rosieManning211',
    src: '/assets/images/admin-users/rosieManning.svg',
    check1: true,
    check2: true
  }
];

export const AdminCards = () => {
  return (
    <div>
      {DATA.map((data) => (
        <AdminCard key={data.id} data={data} />
      ))}
    </div>
  );
};
