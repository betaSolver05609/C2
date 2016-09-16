//google charts API
		function chart()
		{
			google.charts.load('current', {'packages':['corechart']});
		      google.charts.setOnLoadCallback(drawChart);
		      function drawChart() {
		        var data = google.visualization.arrayToDataTable([
		          ['Year', 'exchange rate'],
		          ['2016',  parseFloat(a[index_val][1])],
		          ['2015',  parseFloat(a[index_val][2])],
		          ['2014',  parseFloat(a[index_val][3])],
		          ['2013',  parseFloat(a[index_val][4])],
		          ['2012', parseFloat(a[index_val][5])],
		        ]);

		        var options = {
		          title: 'Exchange Rates',
		          hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
		          vAxis: {minValue: 0}
		        };

		        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
		        chart.draw(data, options);
		      }
		}

		var index_val;
		function trend()
		{
			var i;
			var x=$('#curr').val();
			for(i=0;i<20;i++)
				{
				if(a[i][0]==x)
					{
					index_val=i;
					window.location.assing('#options page');
				}
		}
		}
			
				function math()
				{
					var i;
					var sum;
					sum=a[index_val][1];
					for(i=2;i<=5;i++)
						{
						if(a[index_val][i]>sum)
							sum=sum+a[index_val][i];
						else
							sum=sum-a[index_val][i];
						
						}
					sum=sum/1000;
					
					
					
					
				}
				
				function sign()
				{
					var name=$('#fname').val();
					var dob=$('#dob').val();
					var contact=$('#contact').val();
					var male=$('#male').val();
					var female=$('#female').val();
					var mail=$('#mail').val();
					var username=$('#username').val();
					var password=$('#password').val();
					var retype=$('#retype').val();
					if(password==retype)
						{
						var invocationData={
							adapter:'dbadap',
							procedure:'procedure1',
							parameters:[name,dob,contact,male,female,mail,username,password,retype]
						};
						var options={
							onSuccess:successfn,
								onFailure:failfn
						};
						WL.Client.invokeProcedure(invocationData, options);
						
						}
					else
							{
							alert("password not matching");
							}
				}

				function successfn()
				{
					alert("successfull");
					}
				function failfn()
				{
					alert("fail");
					}

				function login()
				{
					var username=$('#uname').val();
					var password=$('#pass').val();
					if(username!="" && password!="")
					{
					var invocationData=
					{
					adapter:'dbadap',
					procedure:'procedure2',
					parameters:[username,password]
					};
					var options=
					{
					onSuccess:success1,
					onFailure:fail1,
					};
					WL.Client.invokeProcedure(invocationData, options);
					}
				else
					{
					alert("please enter all the fields");
					}
				}
				function success1()
				{
					alert("Welcome");
					window.location.assign("#analytics");
					}
				function fail1()
				{
					alert("Please Register to use analytics tools");
					window.location.assign("#register");
					}
					
					

				var a=[];
				a[0]=[];a[0][0]="canada";a[0][1]=1.03;a[0][2]=1.72;a[0][3]=1.388;a[0][4]=1.59;a[0][5]=1.49;a[0][6]=44052.7;a[0][7]=0.5;
				a[1]=[];a[1][0]="germany";a[1][1]=0.2697;a[1][2]=0.2844;a[1][3]=0.299;a[1][4]=0.3;a[1][5]=0.3066;a[1][6]=45802.1;a[1][7]=1.75;
				a[2]=[];a[2][0]="united states";a[2][1]=1;a[2][2]=1;a[2][3]=1;a[2][4]=1;a[2][5]=1;a[2][6]=54629.5;a[2][7]=2;
				a[3]=[];a[3][0]="india";a[3][1]=41.487;a[3][2]=46.98;a[3][3]=48.336;a[3][4]=47.186;a[3][5]=44.942;a[3][6]=5700.7;a[3][7]=7.9;
				a[4]=[];a[4][0]="saudi arabia";a[4][1]=3.75;a[4][2]=3.745;a[4][3]=3.75;a[4][4]=3.74;a[4][5]=3.74;a[4][6]=1.74;a[4][7]=2;
				a[5]=[];a[5][0]="china";a[5][1]=31.47;a[5][2]=32.84;a[5][3]=32.699;a[5][4]=34.6;a[5][5]=34.49;a[5][6]=13206.4;a[5][7]=4.35;
				a[6]=[];a[6][0]="japan";a[6][1]=103.58;a[6][2]=117.99;a[6][3]=115.933;a[6][4]=125.388;a[6][5]=121.529;a[6][6]=36426.3;a[6][7]=0.1;
				a[7]=[];a[7][0]="russia";a[7][1]=24.3;a[7][2]=25.659;a[7][3]=27.659;a[7][4]=28.2885;a[7][5]=29.0005;a[7][6]=3576.8;a[7][7]=11;
				a[8]=[];a[8][0]="uk";a[8][1]=0.5302;a[8][2]=0.4993;a[8][3]=0.5435;a[8][4]=0.5500;a[8][5]=0.5462;a[8][6]=2569;a[8][7]=0.5;
				a[9]=[];a[9][0]="australia";a[9][1]=1.2059;a[9][2]=1.2137;a[9][3]=1.5361;a[9][4]=1.9354;a[9][5]=1.9320;a[9][6]=1099;a[9][7]=2;
				a[10]=[];a[10][0]="new zealand";a[10][1]=1.4151;a[10][2]=1.3811;a[10][3]=1.724;a[10][4]=2.2535;a[10][5]=2.3776;a[10][6]=1608;a[10][7]=2.5;
				a[11]=[];a[11][0]="south korea";a[11][1]=1101.7;a[11][2]=929.2;a[11][3]=1205.45;a[11][4]=1317.01;a[11][5]=1290.99;a[11][6]=1783;a[11][7]=1.5;
				a[12]=[];a[12][0]="pakistan";a[12][1]=70.64;a[12][2]=60.6295;a[12][3]=57.8;a[12][4]=60.719;a[12][5]=61.927;a[12][6]=884;a[12][7]=6;
				a[13]=[];a[13][0]="qatar";a[13][1]=3.64;a[13][2]=3.64;a[13][3]=3.64;a[13][4]=3.64;a[13][5]=3.64;a[13][6]=3066;a[13][7]=4.75;
				a[14]=[];a[14][0]="luxembourgh";a[14][1]=3.33;a[14][2]=3.46;a[14][3]=3.8;a[14][4]=3.8;a[14][5]=3.8;a[14][6]=536;a[14][7]=0.05;
				a[15]=[];a[15][0]="singapore";a[15][1]=1.415;a[15][2]=1.507;a[15][3]=1.5819;a[15][4]=166664;a[15][5]=1.6902;a[15][6]=4543;a[15][7]=0.72;
				a[16]=[];a[16][0]="taiwan";a[16][1]=33.37;a[16][2]=33.599;a[16][3]=41.695;a[16][4]=43.982;a[16][5]=40.112;a[16][6]=1078;a[16][7]=1.750;
				a[17]=[];a[17][0]="europe";a[17][1]=0.6734;a[17][2]=0.7345;a[17][3]=0.7964;a[17][4]=0.8034;a[17][5]=0.8039;a[17][6]=18640;a[17][7]=0.5;
				a[18]=[];a[18][0]="israel";a[18][1]=3.56;a[18][2]=4.14;a[18][3]=4.46;a[18][4]=4.27;a[18][5]=4.20;a[18][6]=2721;a[18][7]=0.1;
				a[19]=[];a[19][0]="mexico";a[19][1]=11.016;a[19][2]=10.8;a[19][3]=10.247;a[19][4]=9.1614;a[19][5]=9.3423;a[19][6]=2148;a[19][7]=3.25;
				a[20]=[];a[20][0]="brazil";a[20][1]=1.8644;a[20][2]=1.9516;a[20][3]=2.9675;a[20][4]=2.378;a[20][5]=2.358;a[20][6]=3275;a[20][7]=14.25;

			function send_mail()
			{
				var body_message = $('#textarea').val;
				var email = 'someindrasingh795@gmail.com';
				var subject = $('#email').val();
				 

				    var mailto_link = 'mailto:' + email + '?subject=' + subject + '&body=' + body_message;

				    win = window.open(mailto_link, 'emailWindow');
				    if (win && win.open && !win.closed) win.close();

				
				
			}
				
				
				function func()
			{
					var from=$('#from').val();
					var to=$('#to').val();
					var amount=$('#amount').val();
					
					function httpGetAsync(callback)
					{
					    var xmlHttp = new XMLHttpRequest();
					    xmlHttp.onreadystatechange = function() { 
					        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
					            callback(xmlHttp.responseText);
					    };
					    xmlHttp.open("GET",'https://www.exchangerate-api.com/'+from+'/'+to+'?k=7eca97c114987d318b64df3c', true);
					    xmlHttp.send(null);
					}

					function print_val(response)
					{
					    alert(response*amount);
					}

					httpGetAsync(print_val);
			}