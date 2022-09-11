IMPORT $.InputRecords;

// Viewing the first 110 rows of MentorsRaw_DS
OUTPUT(CHOOSEN(InputRecords.MentorsRaw_DS, 110), NAMED('MentorsRaw_DS'));

OUTPUT(CHOOSEN(InputRecords.Youth_TestData, 100), NAMED('YouthTest_DS'));

