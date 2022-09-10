IMPORT $.inputRecords;

// Viewing the first 110 rows of MentorsRaw_DS
OUTPUT(CHOOSEN(inputRecords.MentorsRaw_DS, 110), NAMED('MentorsRaw_DS'));

OUTPUT(CHOOSEN(inputRecords.Youth_TestData, 100), NAMED('YouthTest_DS'));

