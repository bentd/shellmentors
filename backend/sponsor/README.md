# Connections Homes

[Connections Homes](https://connectionshomes.org/) serves youth 18 – 24 who’ve aged out of foster care or are homeless without family by matching them with a trained and certified Mentoring Family who agrees to be a part of their life, for life, in order to prevent poverty and homelessness and to provide a sense of love and belonging. 

## Matching Algorithm
Connections Homes uses a low-barrier model in matching youth who enter the program and desire to have a Mentoring Family. A youth entering the program must only demonstrate a lack of family support system or history in foster care. 

The only criteria that would prevent a youth from being served by our program are: an active drug addiction, an inability to live independently (severe special needs), or lack of desire for a connection (meaning that someone else referred the youth without their permission or desire.)


## Challenge Description 
Currently Connections Homes uses a manual process to match youth with mentor families. To reduce human error, and evaluation time, Connections Homes is looking for matching program by using a weighting system. 


### Requirements
- Solution should compare one youth at a time against all mentors and produce a ranked list of "best mentors" for each youth 
- Solution should have an interface to capture youth information. This could be done by creating Roxie query
- Youth and mentors should be within "Distance" miles provided by user
- Matches uses 0-5 weight scale, with 0 = no desire and 5 = most interested
- If a mentor has  0 weight of a field that doesn't match youth value, that mentor is eliminated. For example: if mentor has a 0 on "Gender_Male", and the youth is male then this mentor is no longer an eligible candidate

Mentor|Gender_Male|Gender_Female|Gender_Transgender|Gender_Non_binary|
---|---|---|---|---|
M30|0|4|0|1

Youth_Gender = Male

This mentor is eliminated

- If youth has None Available (N/A) values on all fields under a category, then result should be marked as "Human Review"
- Spouse values/scores should be averaged with the primary mentor's values/scores to derive a single value that will be used for matching with youth entries
- For fields that contain none-numeric values such as "DayOff", if youth and mentor have exact match, it gets one score. Keep in-mind case sensitivity for matching
- The matching result should contain all eligible mentors, sorted by Matching Score, the higher the score the better match they are 
- For having more test options please ignore "Status" on mentors dataset
- Keep in mind that some fields in youth and mentors are for information only such as address, name and birthday

### Notes
- Since lats and longs are based on cities, you might get some distance = 0 in matching, which means mentor and youth are both in the same city and this is acceptable
- To make sure you get the least required information, try to use ERROR to throw a message if <i> Distance, Lat and Long or any other needed input</i> aren't provided
- For testing purposes ONLY a youth dataset is provided in [data folder](./data/Youth.csv)
- Since your solution is the key part to this challenge you can use `#OPTION('obfuscateOutput', TRUE);` at the start of your code to hide it from being viewed on ECL Watchpage. If you decide to use #OPTION make sure to remove if from the WUID that will be shared with judges. When obfuscateOutput set to true, details are removed from the generated workunit, including ECL code, estimates of record size, and number of records.
- If you want to write the result in a file make sure the file name start with your team name for uniqueness purposes 
- Make sure the query names are unique and easy to identify. Do not use generic names like test, mentors, or roxie. We suggest adding your team name as well. General names will result in other teams overwriting your files, queries, and results
- In ECL Watchpage check the Workunit ID (WUID) number to make sure this is your code in case of having the same query name with another team  

</br>

<u><b><p style="font-size: 15px">Please refer to [FAQ](./FAQ.md) for more information.</u></b>

</br>

__Example__

Let's say the youth and these mentors are within 20 miles of each other. 

</br>
</br>

<i>Youth Sample Info</i>

CriminalHistory| SupportNeeds |  Children |
---|---|--
CurrentProbation| Parenting | N/A


</br>
</br>


<i>Mentor Sample Info</i>

Mentor|CriminalHistory_CurrentProbation| Supports_Parenting |  Children_Welfare1
---|---|---|---
M1|0| 4 | 2 
M2|1|5|4

</br>
</br>


<i>A Sample Calculation: </i>

</br>

Mentor| CriminalHistory| SupportNeeds |  Children | Total_Score |HumanReview 
---|---|---|---|---|---
M2|1|5|0| 6| Children

Note: M1 was eliminated because of 0 tolerance for current probation.

</b>
</br>

### Bonus Challenges  
Would like to make your solution better? You can add following services after you solve the main challenge.
- Archive all youth information that enter the program
- Move a mentor from active to archive after they accept a youth
- A mentor can support multiple youth. Keep track of youth(s) that are accepted by a mentor 

## Quiz

"HPCCSystems_ConnectionsHomes" quiz is a series of big data, ECL syntax and challenge related questions designed to help you with different aspects of this challenge. Please answer as many questions as possible. The more questions you answer the better your final score. We need one and only ONE submission per team. 

[HPCCSystems_ConnectionsHomes Quiz](https://forms.office.com/Pages/ResponsePage.aspx?id=P-50kiWUCUGif5-xXBBnXWkYHyYr0TBIgnqm_vbEARBUQlVBMVNKN1pPVEFEUTZBNERISktOVTBYRC4u)

Since the quiz doesn't let you save your answers as you progress, a [Wold version](https://github.com/hpccsystems-solutions-lab/ConnectionsHomes/blob/main/HPCCSystems_ConnectionsHomes_Quiz.docx) of quiz is available to save your answers. Once you are happy with your work, answer the quiz online and submit it. 

## Platform Choice 

### VS Code (Preferred Option)
1- [HPCC Platform](https://hpccsystems.com/download#HPCC-Platform) installation guide

2- [VS Code](https://code.visualstudio.com) download

3- VS Code [Installation UserGuide](https://github.com/hpccsystems-solutions-lab/ConnectionsHomes/blob/main/vscode_hpcc_install.pdf). Only the first three steps are required

4- Clone the repo in your local machine\
     `git clone https://github.com/hpccsystems-solutions-lab/ConnectionsHomes.git`

5- Open VS Code
   - File -> Open Folder
   - Select ch_Workshop subdirectory within the cloned repo and select/open it


### Cloud IDE
Start with creating a login in [CloudIDE](https://ide.hpccsystems.com/).
User guide is available under Help in CloudIDE

[ConnectionsHomes_Workshop](https://ide.hpccsystems.com/workspaces/share/287fe2a4-1f9c-4bf4-aa98-fd8e9836a0a8) has the initial record layout and dataset code you need for this challenge. You can also find this code under ch_Workshop folder in this repository.


</br>

If you need more information on jobs you are running on either platform, please use [ECL Watch Page](http://shellhacks.us-hpccsystems-dev.azure.lnrsg.io:8010/#/stub/Main)

</br>

## Quick ECL Learning

For a quick start on ECL syntax and hands-on example, please use [Learn ECL](https://hpccsystems-solutions-lab.github.io/).



## Judging Criteria 

- Each team can have up to 4 members
- Solution must be in ECL only. No other languages are accepted and it will be an immediate disqualification
- We encourage team play so teams that help answer questions in Slack will be considered favorably in judging
- Direct emails and direct messages to judges asking for support will be **ignored** and it won't work in team's favor
- One quiz submission per team, if multiple submissions occurs judge will decide which submission to accept

</br>


<b>

### Mentors

**Mentors availabilities** 

Day|Morning|Afternoon|Evening
---|---|---|---
Friday   09/11   ||| 10:00 PM - 11:30PM
Saturday 07/14   | 9:00 AM - 12:00 PM | 2:00 PM - 7:00 PM | 10:00 PM - 11:30PM
Friday   07/15   | 8:30 AM - 11:00 AM 

</br>
</br>

We encourage students to post their coding related questions on StackOverflow for chance of getting help from possible mentors in different timezone. Please make sure to tag your questions with hpcc-ecl.

</br>
</br>


![Dan Camper](./images/DanCamp.jpg)

<p>Dan Camper, Enterprise Architect. He's been writing software professionally for more than 35 years and has worked on myriad of systems, using many different programming languages.</p>

</br>

![Hugo Watanuki](./images/Hugo.jpg)
<p>Hugo is a Senior Software Engineer and ECL Instructor for LexisNexis Risk Solutions. Hugo has worked for over 15 years on various technical roles in the IT industry with a focus on High Performance Computing. </p>

</br>

![Bahar Fardanian](./images/Bahar.png)
<p>Bahar Fardanian, Technology Evangelist. She is an ECL developer and a mentor. She was also an instructor on Big Data at KSU. Bahar will be on campus please stop by HPCC Systems table as she is looking forward to meet you all. 

</br>


### Resources


- [Internship](https://hpccsystems.com/intern) program

- ECL Watchpage  [ECL Watchpage](hhttp://shellhacks.us-hpccsystems-dev.azure.lnrsg.io:8010/#/stub/Main) to review executed jobs

- [Quick ECL Tutorial](https://hpccsystems-solutions-lab.github.io/) with hands-on practices

- [ECL Language Reference](https://d2wulyp08c6njk.cloudfront.net/releases/CE-Candidate-7.6.16/docs/EN_US/ECLLanguageReference_EN_US-7.6.16-1.pdf) complete manual 

- ECL Standard [Library Reference](https://d2wulyp08c6njk.cloudfront.net/releases/CE-Candidate-7.6.16/docs/EN_US/ECLStandardLibraryReference_EN_US-7.6.16-1.pdf)

 - HPCC Documentations[ page ](https://hpccsystems.com/training/documentation/all)


