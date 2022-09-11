# Frequently Asked Questions


## General Questions

<i> - Where can I find quick information about ECL syntax and hands-on practices? \
[Learn ECL ](https://hpccsystems-solutions-lab.github.io/) is page design to learn about ECL syntax and work with examples. For more information on ECL you can use [ECL Documents](https://hpccsystems.com/training/documentation/learning-ecl).
  
</br>

<i> - Where do I fine more information about LexisNexis Risk Solution? </i> \
LexisNexis information can be found [here](https://risk.lexisnexis.com/).

</br>

<i> -  Where do I fine more information on HPCC Systems? </i> \
Please refer to [HPCC Systems](https://hpccsystems.com/) website.

</br>

<i> - Where do I fine more information about internship? </i> \
Please visit our [internship program](https://hpccsystems.com/blog/intern_program).

</br>

<i> - Where do I find more information on Connections Homes? </i> \
Please refer to [Connections Homes](https://connectionshomes.org/).

</br>

<i> - How to solve problems in ECL?  </i> \
When trying to figure out how to do something in ECL, it helps to think through the problem as if you were solving it with SQL.  How would you slice, dice, rearrange, and rewrite the data using only SQL queries to get to your solution?  ECL can (loosely) be thought of as SQL on steroids.

</br>

<i> - I don’t really know much about ECL.  From what I have read, I am having difficulty envisioning how that would be incorporated into an interface.  </i> \
The HPCC platform provides the interface in this case.  You write the code and, when it is published as a Roxie query, the platform also creates a web form from the the input values.  In a production setting you would probably want something far prettier that talks to the same Roxie query, but we're not after that here.  See our [RoxieSample.md](RoxieSample.md) for more information.

</br>

## Challenge Questions

<i> - Where do I find Mentors and Youth layout? </i> \
Mentors layout and dataset along with youth layout can be found in [Input Records](./ch_Workshop/inputRecords.ecl).

</br>

<i> - Do I need to be working with all fields in mentor dataset? </i> \
No, some fields in mentor ds are informational only, such as name or age. Also, if there is a field in mentor dataset that doesn't have a corresponding value in youth input you shouldn't be worry about it. 

</br>

<i> - What is the youth dataset provided in data folder for?  </i> \
The youth dataset is provided __only__ for test purposes, you can grab input values for testing your code. 

Connection Homes keeps a database of mentors, with values filled out.  At times, a new youth -- singular -- will pop up and they will need to find a mentor for them.  The result of the matching process is the ranked list

__Note__ that you will only compare one youth at a time to mentor ds. 

</b>

<i>  - What fields should be included in result dataset?  </i> \
You can include any field that you think it's needed for final result. 


## Syntax Questions



<i> - Information on building a Roxie Query? </i> \
Roxie queries are ECL jobs compiled to the roxie engine, then published via ECL Watch.
[Working With Roxie](https://hpccsystems.com/training/documentation/programmers-guide/html/ProgGuide_WorkingWithRoxie.html%23Roxie_Overview) introduces you to what roxie query is. 

[STORED](https://hpccsystems.com/training/documentation/ecl-language-reference/html/STORED_workflow_service.html) shows you all the attribute you might need for your input fields. 

</br>

<i> - Can I see a Roxie example ? </i> \
Please see Roxie example and related information in [Roxie Sample](./RoxieSample.md)

</br>

<i> - What does Definition must contain EXPORT or SHARED value error mean? </i> \
It means your BWR (Builder Window Runnable), your executable code, doesn't have an OUTPUT or if it is a MODULE it doesn't have an EXPORT attribute. 

</br>

<i> - Are modules executable?</i>  \
No. Modules can have exported values to be called and used outside the modules. 

</br>

<i> - What does result is too big to output error mean? </i> \
Means that the dataset you are trying to output is bigger than dedicated memory. You can wrap your OUTPUT with CHOOSEN( ) to solve this error.\
`OUTPUT(CHOOSEN(SampleDS, 150), NAMED('SampleDS));`\
For more information please refer to [CHOOSEN](https://hpccsystems-solutions-lab.github.io/hpcc/Tutorial/ECLSyntax/choosen). 

</br>

<i> - Unknown identifier error when creating a record layout?</i>\
Field names in RECORD should not have spaces or subtraction sign `-`, or start with a numeric value. 

Following names are unacceptable.

![](./images/UknownIdentifire.png)

</br>

<i> - How do I delete a published query?  </i> \
First, every time you publish a query you are over writing the last query. You can also view and delete queries from  [published query](hhttp://shellhacks.us-hpccsystems-dev.azure.lnrsg.io:8010/#/stub/RoxieQueries) page. The green arrow next to some queries indicates that the query is an active one.

</br>

<i> How can I test my code without using roxie queries and publishing them?   </i> \
The queries you've already written already work in the other HPCC engines.  Instead of compiling the code and publishing, you just submit it instead. Just assign specific values to your STORED variables in your code. To submit/rin your job choose Thor ot hThor. 

</br>

<i> - What is ECL Watch used for?  </i> \
To reviewing the results, logical files, looking at older WUIDs and more. 

</br>

<i> - IF statement example: </i> 
```java
x:= 12;

val := 'test';

res := IF(x = 13, 'pass', 
                IF(x <= 13 and val = 'test', 'Still Pass', 'not pass'));
res;
```

</b>

<i> - How to access fields in a dataset? </i> \
Following shows an example accessing dataset fields using PROJECT:

```java
DataRec := RECORD
  string trade_date;
  string exchange_code;
  string stock_symbol;
  string opening_price;
  string high_price;
  string low_price;
  string closing_price;
  string shares_traded;
  string share_value;
 END;

 ds := DATASET('~dcamper::stock_data', DataRec, FLAT);

ResultRec := RECORD
    STRING  exchange_plus_symbol;
END;

res := PROJECT
    (
        ds(stock_symbol = 'AAPL'),
        TRANSFORM
            (
                ResultRec,
                SELF.exchange_plus_symbol := LEFT.exchange_code + ':' + LEFT.stock_symbol
            )
    );

OUTPUT(res);
```

</br>


