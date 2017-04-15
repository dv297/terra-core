import React from 'react';
import Table from '../../src/Table';

// Constants
const cellData1 = <Table.RowContent content={'John Smith'} key={'NAME'} />;
const cellData2 = <Table.RowContent content={'123 Adams Drive'} key={'ADDRESS'} />;
const cellData3 = <Table.RowContent content={'111-222-3333'} key={'PHONE_NUMBER'} />;
const rowData = [cellData1, cellData2, cellData3];
const row1 = <Table.Row key={'PERSON_0'}>{rowData}</Table.Row>;
const row2 = <Table.Row key={'PERSON_1'}>{rowData}</Table.Row>;
const rows = [row1, row2];

// Snapshot test
it('should render SingleSelectableRows tag', () => {
  const defaultTableRows = <Table.SingleSelectableRows>{rows}</Table.SingleSelectableRows>;
  const tableRows = shallow(defaultTableRows);
  expect(tableRows).toMatchSnapshot();
});

it('should render SingleSelectableRows with maximum height set', () => {
  const defaultTableRows = <Table.SingleSelectableRows height={'medium'}>{rows}</Table.SingleSelectableRows>;
  const tableRows = shallow(defaultTableRows);
  expect(tableRows).toMatchSnapshot();
});