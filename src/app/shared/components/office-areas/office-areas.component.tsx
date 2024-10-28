'use client';
import React, { FC } from 'react';

import OfficeAreaComponent from '@/app/shared/components/office-area/office-area.component';

interface IArea {
  area: string;
}

interface IOfficeAreasProps {
  title: string;
  areas: IArea[] | { areas: IArea[] } | null;
}

const OfficeAreasComponent: FC<Readonly<IOfficeAreasProps>> = ({
  title,
  areas,
}) => {
  return (
    <div className="flex flex-col">
      <h3>{title}</h3>
      <div className="flex flex-col gap-12">
        <div className="grid md:grid-cols-6 grid-cols-3 gap-8 md:gap-20">
          <OfficeAreaComponent areas={areas} />
          <OfficeAreaComponent areas={areas} />
          <OfficeAreaComponent areas={areas} />
          <OfficeAreaComponent areas={areas} />
          <OfficeAreaComponent areas={areas} />
          <OfficeAreaComponent areas={areas} />
        </div>
      </div>
    </div>
  );
};
export default OfficeAreasComponent;
