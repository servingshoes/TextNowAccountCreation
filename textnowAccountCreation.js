//Script Name: 	TextNow Account Creation...
//Version: 		2.0
//Date:			24-03-17
//Updated:		25-06-17
//Coded By:		Zia Ur Rehman (Z.R.F)
//E-mail:		ziaurr3hman@hotmail.com
//Website:		http://www.ziaurrehman.info

/*	Follow all steps carefully in order to run the script...

	Demo -> https://www.youtube.com/watch?v=1B2VpU7s8DM

	1st: install Firefox 49.0 or lesser if you don't have...

	2nd: open firefox and  open below link to install imacros Addon version 8.9.7
	https://addons.mozilla.org/en-US/firefox/addon/imacros-for-firefox/versions/
	
	3rd: restart Firefox; Goto Addons and Click Extensions in Left Menu.. then Click on more link of Imacros for firefox...
	Scroll down and turn off updates,
	
	4th: Copy textnowReCaptcha.js to following directory
		C:\Users\Your User Name\Documents\iMacros\Macros directory for Windows PC
	and 
		Home > iMacros > Macros directory for MAC PC
		
	5th: Copy exampletextnow.csv to following directory, and open exampletextnow.csv add your Data..
		C:\Users\UserName\Documents\iMacros\Datasources\  for Windows PC
	and 
		Home > iMacros > Datasources directory for MAC PC	
	
	6th: Open Firefox and Press F8 or click on Imacros icon in Firefox icon bar, then click on textnowReCaptcha.js
		 Then Click on Play Button. done... 
		 
	7th: Set value for How many accounts data do you have in exampletextnow.csv?
	
	8th: Recently Created phone numbers will be saved in myPhoneNumbers.csv in Downloads folder
		C:\Users\UserName\Documents\iMacros\Downloads for Windows or
		Home > iMacros > Downloads for Mac
*/

var ccnc = "CODE:";

	ccnc += "SET !ERRORIGNORE YES" + "\n";

	ccnc += "SET !TIMEOUT_PAGE 60" + "\n";

	ccnc += "CLEAR" + "\n";

	ccnc += "WAIT SECONDS=3" + "\n";

var gtn;

	gtn = "CODE:";

	gtn += "SET !ERRORIGNORE YES" + "\n";

	gtn += "SET !LOADCHECK NO" + "\n";

	gtn += "SET !REPLAYSPEED FAST" + "\n";

	gtn += "SET !EXTRACT_TEST_POPUP NO" + "\n";

	gtn += "SET !TIMEOUT_PAGE 60" + "\n";

	gtn += "SET !TIMEOUT_TAG 5" + "\n";

	gtn += "SET !TIMEOUT_STEP 5" + "\n";

	gtn += "SET !DATASOURCE exampletextnow.csv" + "\n";

	gtn += "SET !DATASOURCE_LINE {{line}}" + "\n";

	gtn += "SET !DATASOURCE_COLUMNS 7" + "\n";

	//gtn += "PROXY ADDRESS={{!COL7}}" + "\n";//remove this line if you don't want to use proxy
	//gtn += "ONLOGIN USER={{!COL8}} PASSWORD={{!COL9}}" + "\n";//remove this line if you don't want to use proxy

	gtn += "TAB T=1" + "\n";

	gtn += "URL GOTO=https://www.textnow.com/signup" + "\n";

	gtn += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:userForm ATTR=ID:first CONTENT={{!COL1}}" + "\n";

	gtn += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:userForm ATTR=NAME:lastname CONTENT={{!COL2}}" + "\n";

	gtn += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:userForm ATTR=NAME:username CONTENT={{!COL3}}" + "\n";

	gtn += "WAIT SECONDS=2" + "\n";

	gtn += "SET !ENCRYPTION NO" + "\n";

	gtn += "TAG POS=1 TYPE=INPUT:PASSWORD FORM=NAME:userForm ATTR=NAME:password CONTENT={{!COL4}}" + "\n";

	gtn += "TAG POS=1 TYPE=INPUT:TEXT FORM=NAME:userForm ATTR=NAME:email CONTENT={{!COL5}}" + "\n";

	gtn += "TAB T=1" + "\n";

	var su = "CODE:";

	su += "SET !ERRORIGNORE YES" + "\n";

	su += "SET !TIMEOUT_PAGE 60" + "\n";

	su += "SET !REPLAYSPEED FAST" + "\n";

	su += "SET !TIMEOUT_STEP 4" + "\n";

	su += "SET !DATASOURCE exampletextnow.csv" + "\n";

	su += "SET !DATASOURCE_LINE {{line}}" + "\n";

	su += "SET !DATASOURCE_COLUMNS 7" + "\n";

	//su += "PROXY ADDRESS={{!COL7}}" + "\n";//remove this line if you don't want to use proxy
	//su += "ONLOGIN USER={{!COL8}} PASSWORD={{!COL9}}" + "\n";//remove this line if you don't want to use proxy

	su += "TAB T=1" + "\n";

	su += "TAG POS=1 TYPE=BUTTON FORM=NAME:userForm ATTR=TXT:SIGN<SP>UP" + "\n";

	su += "WAIT SECONDS=20" + "\n";

	su += "TAG POS=1 TYPE=A ATTR=TXT:CONTINUE<SP>TO<SP>TEXTNOW" + "\n";

	su += 'EVENTS TYPE=KEYPRESS SELECTOR="INPUT[ID=areacode]" CHARS={{!COL6}}' + "\n";

	su += "WAIT SECONDS=5" + "\n";

	su += "TAG POS=1 TYPE=INPUT:SUBMIT FORM=ID:enterAreaCodeForm ATTR=*" + "\n";

	su += "WAIT SECONDS=10" + "\n";

	su += "TAG POS=1 TYPE=H2 ATTR=ID:fb-phone-number EXTRACT=TXT" + "\n";

	su += "TAG POS=1 TYPE=SMALL ATTR=ID:phone-number-text EXTRACT=TXT" + "\n";

	su += "TAG POS=1 TYPE=INPUT:SUBMIT ATTR=ID:close-button" + "\n";

	su += "SAVEAS TYPE=EXTRACT FOLDER=* FILE=myPhoneNumbers.csv" + "\n";

var totalAC = prompt("How many accounts data do you have in exampletextnow.csv?", 5);
var APIKEY = prompt("your 2captcha.com API KEY?", "");

var line = 2;

var urlLine = 1;

function fcp() {
    var a = "FAST";
    var b = "FAST";
    var c = "SET !EXTRACT_TEST_POPUP NO\n";
    c += "SET !ERRORIGNORE YES\n";
    c += "SET !TIMEOUT_PAGE 99\n";
    c += "SET !TIMEOUT_STEP 0\n";
    c += "SET !REPLAYSPEED " + a + "\n";
    var d = APIKEY;
    function e(a) {
        iimPlay("CODE: WAIT SECONDS=" + a + "\n");
        return;
    }
    var f = "CODE:" + c;
    f += "SET !EXTRACT NULL\n";
    f += "TAG POS=1 TYPE=HTML ATTR=* EXTRACT=HTM\n";
    iimPlay(f);
    var g = iimGetLastExtract();
    var h = g.lastIndexOf("www.google.com/recaptcha/api2/anchor");
    var i = g.substr(h + 39, 40);
    var j = "CODE:" + c;
    j += "TAB T=1\n";
    j += "TAB OPEN\n";
    j += "TAB T=2\n";
    j += "URL GOTO=http://2captcha.com/in.php?key=" + d + "&method=userrecaptcha&googlekey=" + i +"&pageurl=https://www.textnow.com/signup/en\n";
    j += "WAIT SECONDS=1\n";
    j += "SET !EXTRACT NULL\n";
    j += "TAG POS=1 TYPE=* ATTR=TXT:* EXTRACT=TXT\n";
    j += "TAB CLOSE\n";
    iimPlay(j);
    var k = iimGetLastExtract();
    var l = k.substr(3, 10);
    var m;
    for (var n = 1; n < 9; n++) {
        e(15);
        var o = "CODE:" + c;
        o += "TAB T=1\n";
        o += "TAB OPEN\n";
        o += "TAB T=2\n";
        o += "URL GOTO=http://2captcha.com/res.php?key=" + d + "&action=get&id=" + l + "\n";
        o += "WAIT SECONDS=1\n";
        o += "SET !EXTRACT NULL\n";
        o += "TAG POS=1 TYPE=* ATTR=TXT:* EXTRACT=TXT\n";
        o += "TAB CLOSE\n";
        iimPlay(o);
        var p = iimGetLastExtract();
        m = p.substr(3, 2e3);
        if ("CAPCHA_NOT_READY" == p || "ERROR_CAPTCHA_UNSOLVABLE" == p) ; else break;
    }
    window.location.href = 'javascript:{document.getElementById("g-recaptcha-response").style.display=""; undefined;}';
    window.content.console.log(m);
    var q = "CODE:" + c;
    q += "TAG POS=1 TYPE=TEXTAREA  ATTR=NAME:g-recaptcha-response CONTENT=" + m + "\n";
    iimPlay(q);
    e(1);
}

for (var i = 0; i < totalAC; i++) {
    iimDisplay("Clearing Cache and Cookies");
    iimPlay(ccnc);
    iimSet("line", line);
    iimPlay(gtn);
    iimSet("urlLine", urlLine);
    iimDisplay("Creating Account: " + urlLine + " / " + totalAC);
    fcp();
    iimSet("line", line);
    iimPlay(su);
    urlLine++;
    line++;
}

