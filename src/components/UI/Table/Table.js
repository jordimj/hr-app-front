import React from 'react';
import { StyledTable } from '../../../styles/core';

const TableMarkup = ({ titles, data }) => (
  <StyledTable>
    <thead>
      <tr>
        {titles.map((title, index) => (
          <th key={index}>{title}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          {titles.map((title, index) => (
            <td key={index}>
              {typeof item[title] === 'number'
                ? new Intl.NumberFormat('es-ES', {
                    style: 'currency',
                    currency: 'EUR',
                  }).format(item[title])
                : item[title]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </StyledTable>
);

export const Table = ({ data }) => (
  <TableMarkup titles={Object.keys(data[0])} data={data} />
);
