
'use strict';
const Alexa = require('alexa-sdk');


const SKILL_NAME = 'IPL Guru';
const GET_FACT_MESSAGE = "Here's your ipl fact: ";
const HELP_MESSAGE = 'You can say tell me a ipl fact, or, you can say stop... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';
const ipl ='The Indian Premier League (IPL), officially Vivo Indian Premier League for sponsorship reasons, is a professional Twenty20 cricket league in India contested during April and May of every year by teams representing Indian cities.';
const cont = ' . Do you want to ask me anything else ... or should I stop ?';

function seasonwinner(svalue){
    if(svalue==1){
        return 'Rajasthan Royals in 2008';
    }
    else if(svalue==2){
        return 'Deccan Chargers in 2009';
    }
    else if(svalue==3){
        return 'Chennai Super Kings in 2010';
    }
    else if(svalue==4){
        return 'Chennai Super Kings in 2011';
    }
    else if(svalue==5){
        return 'Kolkata Knight Riders in 2012';
    }
    else if(svalue==6){
        return 'Mumbai Indians in 2013';
    }
    else if(svalue==7){
        return 'Kolkata Knight Riders in 2014';
    }
    else if(svalue==8){
        return 'Mumbai Indians in 2015';
    }
    else if(svalue==9){
        return 'Sunrisers Hyderabad in 2016';
    }
    else if(svalue==10){
        return 'Mumbai Indians in 2017';
    }
    else return 'null';
}

const tcsk = 'MS Dhoni, Ravindra Jadeja, Suresh Raina, Kedar Jadhav, Dwayne Bravo. Karn Sharma, Shane Watson, Shardul Thakur, Ambati Rayudu, Murali Vijay, Harbhajan Singh, Faf Du Plessis, Mark Wood, Sam Billings, Imran Tahir, Deepak Chahar, Mitchell Santner, Lungisani Ngidi, Asif K M, N Jagadeesan, Kanishk Seth, Monu Singh, Dhruv Shorey, Kshitiz Sharma, Chaitanya Bishnoi';
const tdd = 'Rishabh Pant, Shreyas Iyer, Chris Morris, Glenn Maxwell, Kagiso Rabada, Amit Mishra, Shahbaz Nadeem, Vijay Shankar, Rahul Tewatia, Mohammad Shami, Gautam Gambhir, Trent Boult, Colin Munro, Daniel Christian, Jason Roy, Naman Ojha, Prithvi Shaw, Gurkeerat Singh Mann, Avesh Khan, Abhishek Sharma, Jayant Yadav, Harshal Patel, Manjot Kalra, Sandeep Lamichhane, Sayan Ghosh';
const tkxip = 'Axar Patel, KL Rahul, Ravichandran Ashwin, Andrew Tye, Aaron Finch, Marcus Stoinis, Karun Nair, Mujeeb Zadran, Ankit Singh Rajpoot, David Miller, Mohit Sharma, Barinder Singh Sran, Yuvraj Singh, Christopher Gayle, Ben Dwarshuis, Akshdeep Nath, Manoj Tiwary, Mayank Agarwal, Manzoor Dar, Pardeep Sahu, Mayank Dagar';
const tkkr = 'Sunil Narine, Andre Russell, Chris Lynn, Mitchell Starc, Dinesh Karthik, Robin Uthappa, Kuldeep Singh Yadav, Piyush Chawla, Nitish Rana, Kamlesh Nagarkoti, Shivam Mavi, Mitchell Johnson, Shubman Gill, Ranganath Vinay Kumar, Rinku Singh, Cameron Delport, Javon Searless, Apoorv Vijay Wankhade, Ishank Jaggi';
const tmi = 'Rohit Sharma, Hardik Pandya, Jasprit Bumrah, Krunal Pandya, Ishan Kishan, Kieron Pollard, Pat Cummins, Evin Lewis, Suryakumar Yadav, Ben Cutting, Mustafizur Rahman, Rahul Chahar, Pradeep Sangwan, Jason Behrendorff, Jean-Paul Duminy, Saurabh Tiwary, Tajinder Dhillon, Akila Dhananjaya, Nidheesh M D Dinesan, Aditya Tare, Siddhesh Dinesh Lad, Mayank Markande, Sharad Lumba, Anukul Roy, Mohsin Khan';
const trr = 'Steve Smith, Benjamin Stokes, Jaydev Unadkat, Sanju Samson, Jofra Archer, Krishnappa Gowtham, Jos Buttler, Ajinkya Rahane, Darcy Short, Rahul Tripathi, Dhawal Kulkarni, Zahir Khan Pakteen, Ben Laughlin, Stuart Binny, Dushmantha Chameera, Anureet Singh, Aryaman Vikram Birla, Midhun S, Shreyas Gopal, Prashant Chopra, Jatin Saxena, Ankit Sharma, Mahipal Lomror';
const trcb = 'Virat Kohli, AB de Villiers, Sarfaraz Khan, Chris Woakes, Yuzvendra Singh Chahal, Umesh Yadav, Brendon McCullum, Washington Sundar, Navdeep Saini, Quinton De Kock, Mohammed Siraj, Nathan Coulter-Nile, Colin De Grandhomme, M. Ashwin, Parthiv Patel, Moeen Ali, Mandeep Singh, Manan Vohra, Pawan Negi, Tim Southee, Kulwant Khejroliya, Aniket Choudhary, Pavan Deshpande, Anirudha Ashok Joshi';
const tsrh = 'David Warner, Bhuvneshwar Kumar, Manish Pandey, Rashid Khan Arman, Shikhar Dhawan, Wriddhiman Saha, Siddarth Kaul, Deepak Hooda, Syed Khaleel Ahmed, Sandeep Sharma, Kane Williamson, Carlos Brathwaite, Shakib Al Hasan, Yusuf Pathan, Shreevats Goswami, Mohammad Nabi, Chris Jordan, Basil Thampi, T Natarajan, Sachin Baby, Bipul Sharma, Syed Mehdi Hasan, Ricky Bhui, Tanmay Agarwal';

function iplteam(tvalue){
    if(tvalue =='csk'|| tvalue == 'chennai super kings' ){
        return tcsk;
    }
    else if(tvalue == 'mi' || tvalue == 'mumbai indians'){
        return tmi;
    }
    else if(tvalue == 'rr' || tvalue == 'rajasthan royals'){
        return trr;
    }
    else if(tvalue == 'rcb' || tvalue == 'royal challengers bangalore'){
        return trcb;
    }
    else if(tvalue == 'kxip' || tvalue == 'kings xi punjab'){
        return tkxip;
    }
    else if(tvalue == 'kkr' || tvalue == 'kolkata knight riders'){
        return tkkr;
    }
    else if(tvalue == 'dd' || tvalue == 'delhi daredevils'){
        return tdd;
    }
    else if(tvalue == 'srh' || tvalue == 'sunrisers hyderabad' ){
        return tsrh;
    }
    else return 'null';
}

const data = [
    'Suresh Raina, the player who played the highest number of matches in IPL history, is also the highest run scorer in the tournament. He scored 4540 runs with the help of 1 century and 31 half-centuries.',
    'Lasith Malinga, the most dangerous limited-overs bowler, is the highest wicket-taker in IPL so far. He has picked a total of 154 wickets with an average of 19.01 in 110 matches. 13 for 5 is his best bowling figure in the IPL.',
    'Royal Challengers Bangalore scored an unbelievable 263 runs in a match against Pune Warriors India in 2013 IPL.',
    'RCB were bowled out for just 49 runs by Kolkata Knight Riders in Eden Gardens, Kolkata(2017)',
    'Chris Gayle scored 175 runs for 66 balls in a match between Royal Challengers Bangalore and the Pune Warriors',
    'The best bowling figures by any player in IPL history are by Pakistani Left-arm medium-fast bowler Sohail Tanvir with 6/14 against CSK in 2008.',
    'Rajasthan Royals chased down 217 runs against the Deccan Chargers it is the highest succesfull runchase in thie history of ipl',
    'Chennai Super Kings holds the record for defending the lowest score in IPL. CSK defended 116 runs against the Kings XI Punjab in Durban, 2009',
    'Mumbai Indians, hold the record for most wins in the IPL history. They have managed to win a total of 91 matches over the last 10 years.',
    'Mumbai Indians holds the record of the biggest margin victory in IPL. Mumbai defeated Delhi by a massive 146 runs in IPL 2017. '
];

const handlers = {
    'LaunchRequest': function () {
       this.emit(':ask', 'Hello I am IPL Guru, What would you like me to do? . and if you want me to stop at any time jus say stop');
    },
    'randomfact': function () {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.emit(':ask', speechOutput + cont);
    },
    'iplFinalWinner': function(){
        var season = this.event.request.intent.slots.season.value;
        var swinner = seasonwinner(season);
        
        if(swinner!='null'){
        this.emit(':ask','ipl season '+ season + ' was won by '+ swinner + cont);
        }
        else{
        this.response.speak('wrong query');
        this.emit(':responseReady');
        }
    },
    'iplTeam': function(){
        var team = this.event.request.intent.slots.iplseasonTeam.value;
        var squad = iplteam(team.toLowerCase());
        
        if(squad!='null'){
         this.emit(':ask',team + ' squad consists of '+ squad + cont);
        }
        else{
        this.response.speak('wrong query');
        this.emit(':responseReady');
        }
    },
    'iplDefinitionIntent': function(){
      this.emit(':ask', ipl );
    },
    'topRunScorer': function(){
       this.emit(':ask','Suresh Raina is the leading run scorer of ipl with 4540 runs in 157 innings' + cont);
    },
    'topWicketTaker': function(){
       this.emit(':ask','Lasith Malinga with 154 wickets is the leading wicket taker of ipl' + cont);
    },
    'bestTeam': function(){
      this.emit(':ask','Mumbai Indians with 3 IPL titles is the most successfull team of ipl' + cont);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    }
    
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.registerHandlers(handlers);
    alexa.execute();
};