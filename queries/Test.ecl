
x   := 12;

val := 'test';

res := IF(x = 13, 'pass', 
                IF(x <= 13 and val = 'test', 'Still Pass', 'not pass'));

res;

_Age := 12;

DrugUse := '';

OUTPUT(IF((INTEGER)_Age BETWEEN 18 AND 24, 'Eligible',
          IF(DrugUse = 'Addicted', 'Not Eligible', 'Eligible')),NAMED('isEligiable'));