/* ═══════════════════════════════════════════
   VERDANT PRIVATE BANKING — SHARED JAVASCRIPT
   ═══════════════════════════════════════════ */

// ── TRANSACTION DATA (2017–2026) ──
const allTransactionsData = [
  // 2026 transactions (current year)
  { id:600, icon:'trending-up', name:'Pace Company', date:'Mar 01, 2026', dateObj: new Date('2026-03-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2026-600', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:599, icon:'trending-up', name:'Emirates', date:'Feb 28, 2026', dateObj: new Date('2026-02-28'), amount:'-$42,180.00', cat:'Travel', type:'debit', merchant:'Emirates', ref:'TRA-2026-599', status:'Completed', details:'Business class flight' },
  { id:598, icon:'trending-up', name:'Verdant Bank', date:'Feb 27, 2026', dateObj: new Date('2026-02-27'), amount:'+$95,420.00', cat:'Income', type:'credit', merchant:'Verdant Bank', ref:'INC-2026-598', status:'Completed', details:'Monthly interest payment' },
  { id:597, icon:'trending-up', name:'Pace Company', date:'Feb 01, 2026', dateObj: new Date('2026-02-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2026-597', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:596, icon:'trending-up', name:'Goldman Sachs', date:'Jan 29, 2026', dateObj: new Date('2026-01-29'), amount:'-$55,000.00', cat:'Investment', type:'debit', merchant:'Goldman Sachs', ref:'INV-2026-596', status:'Completed', details:'Portfolio rebalancing' },
  { id:595, icon:'trending-up', name:'Nobu', date:'Jan 25, 2026', dateObj: new Date('2026-01-25'), amount:'-$8,450.00', cat:'Dining', type:'debit', merchant:'Nobu', ref:'DIN-2026-595', status:'Completed', details:'Private dining event' },
  { id:594, icon:'trending-up', name:'Verdant Bank', date:'Jan 22, 2026', dateObj: new Date('2026-01-22'), amount:'+$82,300.00', cat:'Income', type:'credit', merchant:'Verdant Bank', ref:'INC-2026-594', status:'Completed', details:'Monthly interest payment' },
  { id:593, icon:'trending-up', name:'Cartier', date:'Jan 18, 2026', dateObj: new Date('2026-01-18'), amount:'-$28,900.00', cat:'Shopping', type:'debit', merchant:'Cartier', ref:'SHO-2026-593', status:'Completed', details:'Jewelry purchase' },
  { id:592, icon:'trending-up', name:'Four Seasons', date:'Jan 12, 2026', dateObj: new Date('2026-01-12'), amount:'-$18,600.00', cat:'Travel', type:'debit', merchant:'Four Seasons', ref:'TRA-2026-592', status:'Completed', details:'Hotel stay' },
  { id:591, icon:'trending-up', name:'Pace Company', date:'Jan 01, 2026', dateObj: new Date('2026-01-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2026-591', status:'Completed', details:'Monthly salary payment from Pace Company' },
  // 2025 transactions
  { id:493, icon:'trending-up', name:'Emirates', date:'Dec 28, 2025', dateObj: new Date('2025-12-28'), amount:'-$35,396.00', cat:'Travel', type:'debit', merchant:'Emirates', ref:'TRA-2025-493', status:'Completed', details:'Flight' },
  { id:492, icon:'trending-up', name:'Verdant Bank', date:'Dec 27, 2025', dateObj: new Date('2025-12-27'), amount:'+$89,753.00', cat:'Income', type:'credit', merchant:'Verdant Bank', ref:'INC-2025-492', status:'Completed', details:'Interest' },
  { id:590, icon:'trending-up', name:'Pace Company', date:'Dec 01, 2025', dateObj: new Date('2025-12-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2025-590', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:477, icon:'trending-up', name:'Verdant Bank', date:'Dec 19, 2025', dateObj: new Date('2025-12-19'), amount:'+$78,638.00', cat:'Income', type:'credit', merchant:'Verdant Bank', ref:'INC-2025-477', status:'Completed', details:'Interest' },
  { id:495, icon:'trending-up', name:'Morgan Stanley', date:'Dec 10, 2025', dateObj: new Date('2025-12-10'), amount:'-$43,552.00', cat:'Investment', type:'debit', merchant:'Morgan Stanley', ref:'INV-2025-495', status:'Completed', details:'Income' },
  { id:446, icon:'trending-up', name:'Home Builders', date:'Dec 04, 2025', dateObj: new Date('2025-12-04'), amount:'-$28,278.00', cat:'Services', type:'debit', merchant:'Home Builders', ref:'SER-2025-446', status:'Completed', details:'Renovation' },
  { id:589, icon:'trending-up', name:'Pace Company', date:'Nov 01, 2025', dateObj: new Date('2025-11-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2025-589', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:469, icon:'trending-up', name:'British Airways', date:'Nov 30, 2025', dateObj: new Date('2025-11-30'), amount:'-$23,592.00', cat:'Travel', type:'debit', merchant:'British Airways', ref:'TRA-2025-469', status:'Completed', details:'Flight' },
  { id:459, icon:'trending-up', name:'Goldman Sachs', date:'Nov 29, 2025', dateObj: new Date('2025-11-29'), amount:'-$28,769.00', cat:'Investment', type:'debit', merchant:'Goldman Sachs', ref:'INV-2025-459', status:'Completed', details:'Portfolio' },
  { id:468, icon:'trending-up', name:'Nobu', date:'Nov 24, 2025', dateObj: new Date('2025-11-24'), amount:'-$11,639.00', cat:'Dining', type:'debit', merchant:'Nobu', ref:'DIN-2025-468', status:'Completed', details:'Dinner' },
  { id:463, icon:'trending-up', name:'Verdant Bank', date:'Nov 18, 2025', dateObj: new Date('2025-11-18'), amount:'+$37,986.00', cat:'Income', type:'credit', merchant:'Verdant Bank', ref:'INC-2025-463', status:'Completed', details:'Interest' },
  { id:473, icon:'trending-up', name:'Rolex', date:'Nov 12, 2025', dateObj: new Date('2025-11-12'), amount:'-$37,827.00', cat:'Shopping', type:'debit', merchant:'Rolex', ref:'SHO-2025-473', status:'Completed', details:'Watch' },
  { id:588, icon:'trending-up', name:'Pace Company', date:'Oct 01, 2025', dateObj: new Date('2025-10-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2025-588', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:474, icon:'trending-up', name:'Cartier', date:'Oct 22, 2025', dateObj: new Date('2025-10-22'), amount:'-$42,354.00', cat:'Shopping', type:'debit', merchant:'Cartier', ref:'SHO-2025-474', status:'Completed', details:'Jewelry' },
  { id:478, icon:'trending-up', name:'Vanguard', date:'Oct 17, 2025', dateObj: new Date('2025-10-17'), amount:'-$33,883.00', cat:'Investment', type:'debit', merchant:'Vanguard', ref:'INV-2025-478', status:'Completed', details:'Dividend' },
  { id:457, icon:'trending-up', name:'Employer', date:'Oct 10, 2025', dateObj: new Date('2025-10-10'), amount:'+$68,420.00', cat:'Income', type:'credit', merchant:'Employer', ref:'INC-2025-457', status:'Completed', details:'Salary' },
  { id:587, icon:'trending-up', name:'Pace Company', date:'Sep 01, 2025', dateObj: new Date('2025-09-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2025-587', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:490, icon:'trending-up', name:'Harrods', date:'Sep 30, 2025', dateObj: new Date('2025-09-30'), amount:'-$49,148.00', cat:'Shopping', type:'debit', merchant:'Harrods', ref:'SHO-2025-490', status:'Completed', details:'Clothing' },
  { id:470, icon:'trending-up', name:'Cartier', date:'Sep 18, 2025', dateObj: new Date('2025-09-18'), amount:'-$14,717.00', cat:'Shopping', type:'debit', merchant:'Cartier', ref:'SHO-2025-470', status:'Completed', details:'Jewelry' },
  { id:455, icon:'trending-up', name:'Properties Inc', date:'Sep 07, 2025', dateObj: new Date('2025-09-07'), amount:'-$35,346.00', cat:'Services', type:'debit', merchant:'Properties Inc', ref:'SER-2025-455', status:'Completed', details:'Management' },
  { id:586, icon:'trending-up', name:'Pace Company', date:'Aug 01, 2025', dateObj: new Date('2025-08-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2025-586', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:466, icon:'trending-up', name:'Verdant Bank', date:'Aug 31, 2025', dateObj: new Date('2025-08-31'), amount:'+$28,926.00', cat:'Income', type:'credit', merchant:'Verdant Bank', ref:'INC-2025-466', status:'Completed', details:'Interest' },
  { id:487, icon:'trending-up', name:'Morgan Stanley', date:'Aug 25, 2025', dateObj: new Date('2025-08-25'), amount:'-$8,522.00', cat:'Investment', type:'debit', merchant:'Morgan Stanley', ref:'INV-2025-487', status:'Completed', details:'Income' },
  { id:486, icon:'trending-up', name:'Saks', date:'Aug 18, 2025', dateObj: new Date('2025-08-18'), amount:'-$31,475.00', cat:'Shopping', type:'debit', merchant:'Saks', ref:'SHO-2025-486', status:'Completed', details:'Luxury' },
  { id:585, icon:'trending-up', name:'Pace Company', date:'Jul 01, 2025', dateObj: new Date('2025-07-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2025-585', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:460, icon:'trending-up', name:'Verdant Bank', date:'Jul 28, 2025', dateObj: new Date('2025-07-28'), amount:'+$58,438.00', cat:'Income', type:'credit', merchant:'Verdant Bank', ref:'INC-2025-460', status:'Completed', details:'Interest' },
  { id:483, icon:'trending-up', name:'Four Seasons', date:'Jul 02, 2025', dateObj: new Date('2025-07-02'), amount:'-$12,186.00', cat:'Travel', type:'debit', merchant:'Four Seasons', ref:'TRA-2025-483', status:'Completed', details:'Resort' },
  { id:584, icon:'trending-up', name:'Pace Company', date:'Jun 01, 2025', dateObj: new Date('2025-06-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2025-584', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:479, icon:'trending-up', name:'Cartier', date:'Jun 24, 2025', dateObj: new Date('2025-06-24'), amount:'-$30,327.00', cat:'Shopping', type:'debit', merchant:'Cartier', ref:'SHO-2025-479', status:'Completed', details:'Jewelry' },
  { id:489, icon:'trending-up', name:'Per Se', date:'Jun 22, 2025', dateObj: new Date('2025-06-22'), amount:'-$8,497.00', cat:'Dining', type:'debit', merchant:'Per Se', ref:'DIN-2025-489', status:'Completed', details:'Dining' },
  { id:583, icon:'trending-up', name:'Pace Company', date:'May 01, 2025', dateObj: new Date('2025-05-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2025-583', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:475, icon:'trending-up', name:'Nobu', date:'May 19, 2025', dateObj: new Date('2025-05-19'), amount:'-$12,634.00', cat:'Dining', type:'debit', merchant:'Nobu', ref:'DIN-2025-475', status:'Completed', details:'Dinner' },
  { id:582, icon:'trending-up', name:'Pace Company', date:'Apr 01, 2025', dateObj: new Date('2025-04-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2025-582', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:581, icon:'trending-up', name:'Pace Company', date:'Mar 01, 2025', dateObj: new Date('2025-03-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2025-581', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:580, icon:'trending-up', name:'Pace Company', date:'Feb 01, 2025', dateObj: new Date('2025-02-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2025-580', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:579, icon:'trending-up', name:'Pace Company', date:'Jan 01, 2025', dateObj: new Date('2025-01-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2025-579', status:'Completed', details:'Monthly salary payment from Pace Company' },
  // 2024
  { id:400, icon:'trending-up', name:'Pace Company', date:'Dec 01, 2024', dateObj: new Date('2024-12-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2024-400', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:399, icon:'trending-up', name:'Verdant Bank', date:'Nov 28, 2024', dateObj: new Date('2024-11-28'), amount:'+$72,400.00', cat:'Income', type:'credit', merchant:'Verdant Bank', ref:'INC-2024-399', status:'Completed', details:'Interest' },
  { id:398, icon:'trending-up', name:'Pace Company', date:'Nov 01, 2024', dateObj: new Date('2024-11-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2024-398', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:397, icon:'trending-up', name:'Goldman Sachs', date:'Oct 15, 2024', dateObj: new Date('2024-10-15'), amount:'-$38,200.00', cat:'Investment', type:'debit', merchant:'Goldman Sachs', ref:'INV-2024-397', status:'Completed', details:'Portfolio' },
  { id:396, icon:'trending-up', name:'Pace Company', date:'Oct 01, 2024', dateObj: new Date('2024-10-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2024-396', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:395, icon:'trending-up', name:'Harrods', date:'Sep 20, 2024', dateObj: new Date('2024-09-20'), amount:'-$22,500.00', cat:'Shopping', type:'debit', merchant:'Harrods', ref:'SHO-2024-395', status:'Completed', details:'Clothing' },
  { id:394, icon:'trending-up', name:'Pace Company', date:'Sep 01, 2024', dateObj: new Date('2024-09-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2024-394', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:393, icon:'trending-up', name:'Pace Company', date:'Aug 01, 2024', dateObj: new Date('2024-08-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2024-393', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:392, icon:'trending-up', name:'Four Seasons', date:'Jul 18, 2024', dateObj: new Date('2024-07-18'), amount:'-$15,800.00', cat:'Travel', type:'debit', merchant:'Four Seasons', ref:'TRA-2024-392', status:'Completed', details:'Resort' },
  { id:391, icon:'trending-up', name:'Pace Company', date:'Jul 01, 2024', dateObj: new Date('2024-07-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2024-391', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:390, icon:'trending-up', name:'Pace Company', date:'Jun 01, 2024', dateObj: new Date('2024-06-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2024-390', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:389, icon:'trending-up', name:'Pace Company', date:'May 01, 2024', dateObj: new Date('2024-05-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2024-389', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:388, icon:'trending-up', name:'Pace Company', date:'Apr 01, 2024', dateObj: new Date('2024-04-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2024-388', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:387, icon:'trending-up', name:'Pace Company', date:'Mar 01, 2024', dateObj: new Date('2024-03-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2024-387', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:386, icon:'trending-up', name:'Pace Company', date:'Feb 01, 2024', dateObj: new Date('2024-02-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2024-386', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:385, icon:'trending-up', name:'Pace Company', date:'Jan 01, 2024', dateObj: new Date('2024-01-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2024-385', status:'Completed', details:'Monthly salary payment from Pace Company' },
  // 2023
  { id:300, icon:'trending-up', name:'Pace Company', date:'Dec 01, 2023', dateObj: new Date('2023-12-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2023-300', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:299, icon:'trending-up', name:'Verdant Bank', date:'Nov 15, 2023', dateObj: new Date('2023-11-15'), amount:'+$65,200.00', cat:'Income', type:'credit', merchant:'Verdant Bank', ref:'INC-2023-299', status:'Completed', details:'Interest' },
  { id:298, icon:'trending-up', name:'Pace Company', date:'Nov 01, 2023', dateObj: new Date('2023-11-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2023-298', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:297, icon:'trending-up', name:'Cartier', date:'Oct 22, 2023', dateObj: new Date('2023-10-22'), amount:'-$18,500.00', cat:'Shopping', type:'debit', merchant:'Cartier', ref:'SHO-2023-297', status:'Completed', details:'Jewelry' },
  { id:296, icon:'trending-up', name:'Pace Company', date:'Oct 01, 2023', dateObj: new Date('2023-10-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2023-296', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:295, icon:'trending-up', name:'Pace Company', date:'Sep 01, 2023', dateObj: new Date('2023-09-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2023-295', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:294, icon:'trending-up', name:'Pace Company', date:'Aug 01, 2023', dateObj: new Date('2023-08-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2023-294', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:293, icon:'trending-up', name:'Pace Company', date:'Jul 01, 2023', dateObj: new Date('2023-07-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2023-293', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:292, icon:'trending-up', name:'Pace Company', date:'Jun 01, 2023', dateObj: new Date('2023-06-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2023-292', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:291, icon:'trending-up', name:'Pace Company', date:'May 01, 2023', dateObj: new Date('2023-05-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2023-291', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:290, icon:'trending-up', name:'Pace Company', date:'Apr 01, 2023', dateObj: new Date('2023-04-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2023-290', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:289, icon:'trending-up', name:'Pace Company', date:'Mar 01, 2023', dateObj: new Date('2023-03-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2023-289', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:288, icon:'trending-up', name:'Pace Company', date:'Feb 01, 2023', dateObj: new Date('2023-02-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2023-288', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:287, icon:'trending-up', name:'Pace Company', date:'Jan 01, 2023', dateObj: new Date('2023-01-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2023-287', status:'Completed', details:'Monthly salary payment from Pace Company' },
  // 2022
  { id:200, icon:'trending-up', name:'Pace Company', date:'Dec 01, 2022', dateObj: new Date('2022-12-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2022-200', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:199, icon:'trending-up', name:'Verdant Bank', date:'Nov 20, 2022', dateObj: new Date('2022-11-20'), amount:'+$58,900.00', cat:'Income', type:'credit', merchant:'Verdant Bank', ref:'INC-2022-199', status:'Completed', details:'Interest' },
  { id:198, icon:'trending-up', name:'Pace Company', date:'Nov 01, 2022', dateObj: new Date('2022-11-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2022-198', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:197, icon:'trending-up', name:'Pace Company', date:'Oct 01, 2022', dateObj: new Date('2022-10-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2022-197', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:196, icon:'trending-up', name:'Pace Company', date:'Sep 01, 2022', dateObj: new Date('2022-09-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2022-196', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:195, icon:'trending-up', name:'Pace Company', date:'Aug 01, 2022', dateObj: new Date('2022-08-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2022-195', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:194, icon:'trending-up', name:'Pace Company', date:'Jul 01, 2022', dateObj: new Date('2022-07-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2022-194', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:193, icon:'trending-up', name:'Pace Company', date:'Jun 01, 2022', dateObj: new Date('2022-06-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2022-193', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:192, icon:'trending-up', name:'Pace Company', date:'May 01, 2022', dateObj: new Date('2022-05-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2022-192', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:191, icon:'trending-up', name:'Pace Company', date:'Apr 01, 2022', dateObj: new Date('2022-04-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2022-191', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:190, icon:'trending-up', name:'Pace Company', date:'Mar 01, 2022', dateObj: new Date('2022-03-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2022-190', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:189, icon:'trending-up', name:'Pace Company', date:'Feb 01, 2022', dateObj: new Date('2022-02-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2022-189', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:188, icon:'trending-up', name:'Pace Company', date:'Jan 01, 2022', dateObj: new Date('2022-01-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2022-188', status:'Completed', details:'Monthly salary payment from Pace Company' },
  // 2021
  { id:187, icon:'trending-up', name:'Pace Company', date:'Dec 01, 2021', dateObj: new Date('2021-12-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2021-187', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:186, icon:'trending-up', name:'Pace Company', date:'Nov 01, 2021', dateObj: new Date('2021-11-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2021-186', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:185, icon:'trending-up', name:'Pace Company', date:'Oct 01, 2021', dateObj: new Date('2021-10-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2021-185', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:184, icon:'trending-up', name:'Pace Company', date:'Sep 01, 2021', dateObj: new Date('2021-09-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2021-184', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:183, icon:'trending-up', name:'Pace Company', date:'Aug 01, 2021', dateObj: new Date('2021-08-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2021-183', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:182, icon:'trending-up', name:'Pace Company', date:'Jul 01, 2021', dateObj: new Date('2021-07-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2021-182', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:181, icon:'trending-up', name:'Pace Company', date:'Jun 01, 2021', dateObj: new Date('2021-06-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2021-181', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:180, icon:'trending-up', name:'Pace Company', date:'May 01, 2021', dateObj: new Date('2021-05-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2021-180', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:179, icon:'trending-up', name:'Pace Company', date:'Apr 01, 2021', dateObj: new Date('2021-04-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2021-179', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:178, icon:'trending-up', name:'Pace Company', date:'Mar 01, 2021', dateObj: new Date('2021-03-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2021-178', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:177, icon:'trending-up', name:'Pace Company', date:'Feb 01, 2021', dateObj: new Date('2021-02-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2021-177', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:176, icon:'trending-up', name:'Pace Company', date:'Jan 01, 2021', dateObj: new Date('2021-01-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2021-176', status:'Completed', details:'Monthly salary payment from Pace Company' },
  // 2020
  { id:175, icon:'trending-up', name:'Pace Company', date:'Dec 01, 2020', dateObj: new Date('2020-12-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2020-175', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:174, icon:'trending-up', name:'Verdant Bank', date:'Nov 10, 2020', dateObj: new Date('2020-11-10'), amount:'+$44,500.00', cat:'Income', type:'credit', merchant:'Verdant Bank', ref:'INC-2020-174', status:'Completed', details:'Interest' },
  { id:173, icon:'trending-up', name:'Pace Company', date:'Nov 01, 2020', dateObj: new Date('2020-11-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2020-173', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:172, icon:'trending-up', name:'Pace Company', date:'Oct 01, 2020', dateObj: new Date('2020-10-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2020-172', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:171, icon:'trending-up', name:'Pace Company', date:'Sep 01, 2020', dateObj: new Date('2020-09-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2020-171', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:170, icon:'trending-up', name:'Pace Company', date:'Aug 01, 2020', dateObj: new Date('2020-08-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2020-170', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:169, icon:'trending-up', name:'Pace Company', date:'Jul 01, 2020', dateObj: new Date('2020-07-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2020-169', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:168, icon:'trending-up', name:'Pace Company', date:'Jun 01, 2020', dateObj: new Date('2020-06-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2020-168', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:167, icon:'trending-up', name:'Pace Company', date:'May 01, 2020', dateObj: new Date('2020-05-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2020-167', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:166, icon:'trending-up', name:'Pace Company', date:'Apr 01, 2020', dateObj: new Date('2020-04-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2020-166', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:165, icon:'trending-up', name:'Pace Company', date:'Mar 01, 2020', dateObj: new Date('2020-03-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2020-165', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:164, icon:'trending-up', name:'Pace Company', date:'Feb 01, 2020', dateObj: new Date('2020-02-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2020-164', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:163, icon:'trending-up', name:'Pace Company', date:'Jan 01, 2020', dateObj: new Date('2020-01-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2020-163', status:'Completed', details:'Monthly salary payment from Pace Company' },
  // 2019
  { id:162, icon:'trending-up', name:'Pace Company', date:'Dec 01, 2019', dateObj: new Date('2019-12-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2019-162', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:161, icon:'trending-up', name:'Verdant Bank', date:'Nov 05, 2019', dateObj: new Date('2019-11-05'), amount:'+$38,700.00', cat:'Income', type:'credit', merchant:'Verdant Bank', ref:'INC-2019-161', status:'Completed', details:'Interest' },
  { id:160, icon:'trending-up', name:'Pace Company', date:'Nov 01, 2019', dateObj: new Date('2019-11-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2019-160', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:159, icon:'trending-up', name:'Pace Company', date:'Oct 01, 2019', dateObj: new Date('2019-10-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2019-159', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:158, icon:'trending-up', name:'Pace Company', date:'Sep 01, 2019', dateObj: new Date('2019-09-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2019-158', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:157, icon:'trending-up', name:'Pace Company', date:'Aug 01, 2019', dateObj: new Date('2019-08-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2019-157', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:156, icon:'trending-up', name:'Pace Company', date:'Jul 01, 2019', dateObj: new Date('2019-07-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2019-156', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:155, icon:'trending-up', name:'Pace Company', date:'Jun 01, 2019', dateObj: new Date('2019-06-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2019-155', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:154, icon:'trending-up', name:'Pace Company', date:'May 01, 2019', dateObj: new Date('2019-05-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2019-154', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:153, icon:'trending-up', name:'Pace Company', date:'Apr 01, 2019', dateObj: new Date('2019-04-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2019-153', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:152, icon:'trending-up', name:'Pace Company', date:'Mar 01, 2019', dateObj: new Date('2019-03-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2019-152', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:151, icon:'trending-up', name:'Pace Company', date:'Feb 01, 2019', dateObj: new Date('2019-02-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2019-151', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:150, icon:'trending-up', name:'Pace Company', date:'Jan 01, 2019', dateObj: new Date('2019-01-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2019-150', status:'Completed', details:'Monthly salary payment from Pace Company' },
  // 2018
  { id:149, icon:'trending-up', name:'Pace Company', date:'Dec 01, 2018', dateObj: new Date('2018-12-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2018-149', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:148, icon:'trending-up', name:'Verdant Bank', date:'Nov 15, 2018', dateObj: new Date('2018-11-15'), amount:'+$32,400.00', cat:'Income', type:'credit', merchant:'Verdant Bank', ref:'INC-2018-148', status:'Completed', details:'Interest' },
  { id:147, icon:'trending-up', name:'Pace Company', date:'Nov 01, 2018', dateObj: new Date('2018-11-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2018-147', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:146, icon:'trending-up', name:'Pace Company', date:'Oct 01, 2018', dateObj: new Date('2018-10-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2018-146', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:145, icon:'trending-up', name:'Pace Company', date:'Sep 01, 2018', dateObj: new Date('2018-09-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2018-145', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:144, icon:'trending-up', name:'Pace Company', date:'Aug 01, 2018', dateObj: new Date('2018-08-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2018-144', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:143, icon:'trending-up', name:'Pace Company', date:'Jul 01, 2018', dateObj: new Date('2018-07-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2018-143', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:142, icon:'trending-up', name:'Pace Company', date:'Jun 01, 2018', dateObj: new Date('2018-06-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2018-142', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:141, icon:'trending-up', name:'Pace Company', date:'May 01, 2018', dateObj: new Date('2018-05-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2018-141', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:140, icon:'trending-up', name:'Pace Company', date:'Apr 01, 2018', dateObj: new Date('2018-04-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2018-140', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:139, icon:'trending-up', name:'Pace Company', date:'Mar 01, 2018', dateObj: new Date('2018-03-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2018-139', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:138, icon:'trending-up', name:'Pace Company', date:'Feb 01, 2018', dateObj: new Date('2018-02-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2018-138', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:137, icon:'trending-up', name:'Pace Company', date:'Jan 01, 2018', dateObj: new Date('2018-01-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2018-137', status:'Completed', details:'Monthly salary payment from Pace Company' },
  // 2017
  { id:136, icon:'trending-up', name:'Pace Company', date:'Dec 01, 2017', dateObj: new Date('2017-12-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2017-136', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:135, icon:'trending-up', name:'Verdant Bank', date:'Nov 20, 2017', dateObj: new Date('2017-11-20'), amount:'+$28,100.00', cat:'Income', type:'credit', merchant:'Verdant Bank', ref:'INC-2017-135', status:'Completed', details:'Interest' },
  { id:134, icon:'trending-up', name:'Pace Company', date:'Nov 01, 2017', dateObj: new Date('2017-11-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2017-134', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:133, icon:'trending-up', name:'Pace Company', date:'Oct 01, 2017', dateObj: new Date('2017-10-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2017-133', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:132, icon:'trending-up', name:'Pace Company', date:'Sep 01, 2017', dateObj: new Date('2017-09-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2017-132', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:131, icon:'trending-up', name:'Pace Company', date:'Aug 01, 2017', dateObj: new Date('2017-08-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2017-131', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:130, icon:'trending-up', name:'Pace Company', date:'Jul 01, 2017', dateObj: new Date('2017-07-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2017-130', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:129, icon:'trending-up', name:'Pace Company', date:'Jun 01, 2017', dateObj: new Date('2017-06-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2017-129', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:128, icon:'trending-up', name:'Pace Company', date:'May 01, 2017', dateObj: new Date('2017-05-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2017-128', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:127, icon:'trending-up', name:'Pace Company', date:'Apr 01, 2017', dateObj: new Date('2017-04-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2017-127', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:126, icon:'trending-up', name:'Pace Company', date:'Mar 01, 2017', dateObj: new Date('2017-03-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2017-126', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:125, icon:'trending-up', name:'Pace Company', date:'Feb 01, 2017', dateObj: new Date('2017-02-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2017-125', status:'Completed', details:'Monthly salary payment from Pace Company' },
  { id:124, icon:'trending-up', name:'Pace Company', date:'Jan 01, 2017', dateObj: new Date('2017-01-01'), amount:'+$10,000.00', cat:'Income', type:'credit', merchant:'Pace Company', ref:'PAC-2017-124', status:'Completed', details:'Monthly salary payment from Pace Company' },
];

// Sort by date descending (newest first)
allTransactionsData.sort((a, b) => b.dateObj - a.dateObj);

// ── ICON HELPERS ──
function getIconSVG(icon) {
  const icons = {
    'trending-up': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
    'plane': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;"><path d="M22 16.13v-2.5l-8.86-4.73V2.5M2 16.13v-2.5l8.86-4.73V2.5M12 12.5v9"/></svg>',
    'shopping-bag': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="width:18px;height:18px;"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>'
  };
  return icons[icon] || icons['trending-up'];
}

function getIconColor(cat) {
  const colors = {
    'Travel': '#FFE5E5', 'Dining': '#FFF5E5', 'Income': '#E5F5E5',
    'Shopping': '#F5E5FF', 'Services': '#E5F0FF', 'Investment': '#E5F5E5',
    'Transfer': '#E5E5FF', 'Bill Payment': '#FFF0E5'
  };
  return colors[cat] || '#F7F4EE';
}

// ── PAGE LOADING OVERLAY ──
function showPageLoader(callback) {
  const overlay = document.getElementById('pageLoadOverlay');
  if (!overlay) { if (callback) callback(); return; }
  overlay.classList.add('loading');
  // Recreate the fill animation
  const fill = overlay.querySelector('.page-loader-fill');
  if (fill) { fill.style.animation = 'none'; fill.offsetHeight; fill.style.animation = ''; }
  setTimeout(() => {
    overlay.classList.remove('loading');
    if (callback) callback();
  }, 500);
}

// ── SIDEBAR TOGGLE ──
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const hamburger = document.getElementById('hamburgerBtn');
  if (sidebar) {
    sidebar.classList.toggle('open');
    if (hamburger) hamburger.classList.toggle('active');
  }
}

function closeSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const hamburger = document.getElementById('hamburgerBtn');
  if (sidebar && sidebar.classList.contains('open')) {
    sidebar.classList.remove('open');
    if (hamburger) hamburger.classList.remove('active');
  }
}

// ── NAVIGATE WITH LOADING ──
function navigateTo(page) {
  closeSidebar();
  showPageLoader(() => {
    window.location.href = page;
  });
}

// ── SIGN OUT ──
async function signOut() {
  const token = localStorage.getItem('verdant_token');
  try {
    await fetch('/api/signout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token })
    });
  } catch (e) {
    // Ignore network errors on sign out
  }
  localStorage.removeItem('verdant_token');
  sessionStorage.clear();
  showPageLoader(() => { window.location.href = 'login.html'; });
}

// ── MODAL SYSTEM ──
function openModal(id) { document.getElementById(id).classList.add('active'); }
function closeModal(id) { document.getElementById(id).classList.remove('active'); }

// ── TRANSACTION DETAILS MODAL ──
function showTransactionDetails(id) {
  const txn = allTransactionsData.find(t => t.id === id);
  if (!txn) return;
  const modal = document.getElementById('transactionModal');
  const content = document.getElementById('transactionDetails');
  if (!modal || !content) return;
  content.innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:24px;">
      <div><div style="font-size:12px;color:var(--muted);margin-bottom:4px;">Merchant</div><div style="font-size:14px;font-weight:500;">${txn.merchant}</div></div>
      <div><div style="font-size:12px;color:var(--muted);margin-bottom:4px;">Amount</div><div style="font-size:14px;font-weight:500;color:${txn.type==='debit'?'var(--text)':'var(--green)'};">${txn.amount}</div></div>
      <div><div style="font-size:12px;color:var(--muted);margin-bottom:4px;">Date</div><div style="font-size:14px;font-weight:500;">${txn.date}</div></div>
      <div><div style="font-size:12px;color:var(--muted);margin-bottom:4px;">Category</div><div style="font-size:14px;font-weight:500;">${txn.cat}</div></div>
      <div><div style="font-size:12px;color:var(--muted);margin-bottom:4px;">Reference</div><div style="font-size:14px;font-weight:500;font-family:'DM Mono',monospace;">${txn.ref}</div></div>
      <div><div style="font-size:12px;color:var(--muted);margin-bottom:4px;">Status</div><div style="font-size:14px;font-weight:500;color:${txn.status==='Completed'?'var(--green)':'var(--gold)'};">${txn.status}</div></div>
    </div>
    <div style="background:var(--cream);border:1px solid var(--border);border-radius:4px;padding:16px;margin-bottom:24px;">
      <div style="font-size:12px;color:var(--muted);margin-bottom:8px;">Details</div>
      <div style="font-size:14px;line-height:1.6;">${txn.details}</div>
    </div>
    <div style="display:flex;gap:12px;">
      <button class="btn-submit" style="flex:1;" onclick="alert('Transaction receipt downloaded')">Download Receipt</button>
      <button class="btn-cancel" style="flex:1;" onclick="closeModal('transactionModal')">Close</button>
    </div>
  `;
  openModal('transactionModal');
}

// ── FORMAT AMOUNT INPUT ──
function formatAmountInput(input) {
  let value = input.value.replace(/,/g, '');
  if (value && !isNaN(parseFloat(value))) {
    value = parseFloat(value).toLocaleString('en-US', {minimumFractionDigits:0, maximumFractionDigits:2});
    input.value = value;
  }
}

// ── TOPBAR RENDER ──
function renderTopbar(activePage) {
  const topbarRight = document.getElementById('topbarRight');
  const topNav = document.getElementById('topNav');
  const hamburger = document.getElementById('hamburgerBtn');
  const authPages = ['dashboard','transfer','cards','settings','transactions','bill','investments','savings'];
  const isAuth = authPages.includes(activePage);
  if (isAuth) {
    if (topbarRight) topbarRight.innerHTML = `
      <span style="font-size:12px;color:rgba(247,244,238,.5);font-family:'DM Mono',monospace;letter-spacing:.06em;">James Christopher</span>
      <button class="btn-ghost" onclick="signOut()">Sign Out</button>
    `;
    if (topNav) topNav.style.display = 'none';
    if (hamburger) hamburger.style.visibility = 'visible';
  } else {
    if (topbarRight) topbarRight.innerHTML = `
      <button class="btn-ghost" onclick="navigateTo('login.html')">Sign In</button>
      <button class="btn-gold" onclick="navigateTo('login.html')">Open Account</button>
    `;
    if (topNav) topNav.style.display = 'flex';
    if (hamburger) hamburger.style.visibility = 'hidden';
  }
}

// ── TOAST ──
function showToast(msg) {
  let toast = document.getElementById('verdantToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'verdantToast';
    toast.style.cssText = 'position:fixed;bottom:32px;left:50%;transform:translateX(-50%);background:var(--slate);color:var(--ivory);padding:12px 24px;border-radius:4px;font-size:13px;z-index:9000;opacity:0;transition:opacity .3s;pointer-events:none;white-space:nowrap;font-family:"DM Sans",sans-serif;';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => { toast.style.opacity = '0'; }, 2800);
}

// ── PROFILE PIC UPLOAD ──
function handleProfilePicUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    const preview = document.getElementById('profileAvatarPreview');
    if (preview) {
      preview.innerHTML = `<img src="${e.target.result}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`;
    }
    // Also update sidebar avatar
    const sidebarAvatar = document.querySelector('.sidebar-avatar');
    if (sidebarAvatar) {
      sidebarAvatar.innerHTML = `<img src="${e.target.result}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`;
    }
  };
  reader.readAsDataURL(file);
}

// ── SAVE PROFILE ──
function saveProfile() {
  const email = document.getElementById('profileEmail')?.value;
  const phone = document.getElementById('profilePhone')?.value;
  if (email) localStorage.setItem('verdant_email', email);
  if (phone) localStorage.setItem('verdant_phone', phone);
  closeModal('profileModal');
  showToast('Profile updated successfully');
}

// ── CLOSE MODAL ON OVERLAY CLICK ──
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('active');
  }
});

// ── INITIAL PAGE LOAD ANIMATION ──
window.addEventListener('load', function() {
  const overlay = document.getElementById('pageLoadOverlay');
  if (overlay) {
    setTimeout(() => {
      overlay.style.opacity = '0';
      overlay.style.pointerEvents = 'none';
    }, 600);
  }
});
