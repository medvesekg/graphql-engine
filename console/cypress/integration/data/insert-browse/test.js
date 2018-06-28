/* eslint no-unused-vars: 0 */
/* eslint import/prefer-default-export: 0 */

import {
  passBICreateTable,
  deleteBITestTable,
  checkInsertRoute,
  failBIWrongDataType,
  failBINullKeys,
  failBIUniqueKeys,
  passBIInsert20Rows,
  checkBrowseRoute,
  passBI20RowsExist,
  passBIAscendingSort,
  passBIFilterQueryEq,
  passEditButton,
  passCloneButton,
  passDeleteRow,
} from './spec';

import { setMetaData } from '../../validators/validators';

const setup = () => {
  describe('Setup route', () => {
    it('Visit the index route', () => {
      cy.visit('/data/schema/public');
      cy.wait(7000);
      setMetaData();
    });
  });
};

export const runInsertBrowseTests = () => {
  describe('Table: Browse and Insert', () => {
    it('Create a table with fields of all data types', passBICreateTable);
    it('Check Insert Route', checkInsertRoute);
    it('Fails when entered wrong data type', failBIWrongDataType);
    it('Insert 20 rows', passBIInsert20Rows);
    it('Fail for adding null for not null keys', failBINullKeys);
    it('Fail for adding same data for Unique keys', failBIUniqueKeys);
    it('Check browser rows route', checkBrowseRoute);
    it('20 Inserted rows reflect in browse rows', passBI20RowsExist);
    it('Descending sort works as expected', passBIAscendingSort);
    it('FIlter query works as expected with $eq', passBIFilterQueryEq);
    it('Check edit button', passEditButton);
    it('Check for clone clear', passCloneButton);
    it('Delete the row', passDeleteRow);
    it('Delete test table', deleteBITestTable);
  });
};

// setup();
// runInsertBrowseTests();