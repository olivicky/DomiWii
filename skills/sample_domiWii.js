/*

Botkit Studio Skill module to enhance the "domiWii" script

*/

var rich = require('request');
module.exports = function(controller) {
    // define a before hook
    // you may define multiple before hooks. they will run in the order they are defined.
    // See: https://github.com/howdyai/botkit/blob/master/docs/readme-studio.md#controllerstudiobefore
    controller.studio.before('domiWii', function(convo, next) {

        // do some preparation before the conversation starts...
        // for example, set variables to be used in the message templates
        // convo.setVar('foo','bar');

        console.log('BEFORE: domiWii');
        // don't forget to call next, or your conversation will never continue.
        next();

    });

    /* Validators */
    // Fire a function whenever a variable is set because of user input
    // See: https://github.com/howdyai/botkit/blob/master/docs/readme-studio.md#controllerstudiovalidate
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

    // Validate user input: confortindex
    controller.studio.validate('domiWii','confortindex', function(convo, next) {

      
        var value = convo.extractResponse('confortindex');

        // test or validate value somehow
        convo.setVar('confortindex',value);

        console.log('VALIDATE: domiWii VARIABLE: confortindex');

        // always call next!
        next();

    });

    // Validate user input: fan
    controller.studio.validate('domiWii','fan', function(convo, next) {

        var value = convo.extractResponse('fan');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation
      convo.setVar('fan',value);

        console.log('VALIDATE: domiWii VARIABLE: fan');

        // always call next!
        next();

    });

    // Validate user input: temperatura
    controller.studio.validate('domiWii','temperatura', function(convo, next) {

        var value = convo.extractResponse('temperatura');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation
      convo.setVar('temperatura',value);

        console.log('VALIDATE: domiWii VARIABLE: temperatura');

        // always call next!
        next();

    });

    // Validate user input: conforindex
    controller.studio.validate('domiWii','conforindex', function(convo, next) {

        var value = convo.extractResponse('conforindex');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation
      convo.setVar('confortIndex',value);

        console.log('VALIDATE: domiWii VARIABLE: conforindex');

        // always call next!
        next();

    });

    // Validate user input: comando
    controller.studio.validate('domiWii','comando', function(convo, next) {

        var value = convo.extractResponse('comando');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation
        convo.setVar('comando',value);

        console.log('VALIDATE: domiWii VARIABLE: comando');

        // always call next!
        next();

    });
  
  // Validate user input: modalita_termostato
    controller.studio.validate('domiWii','modalita_termostato', function(convo, next) {

        var value = convo.extractResponse('modalita_termostato');
        
        if(value == "I" || value=="i"){
           value = "INVERNO";
        }
        else if(value == "E" || value =="e"){
          value = "ESTATE";
        }

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation
        convo.setVar('modalita_termostato',value);

        console.log('VALIDATE: domiWii VARIABLE: modalita_termostato');

        // always call next!
        next();

    });
	
	// Validate user input: timer_on_presa
    controller.studio.validate('domiWii','timer_on_presa', function(convo, next) {

        var value = convo.extractResponse('timer_on_presa');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation
        convo.setVar('timer_on_presa',value);
      
        console.log('VALIDATE: domiWii VARIABLE: timer_on_presa');

        // always call next!
        next();

    });

    // Validate user input: timer_on
    controller.studio.validate('domiWii','timer_on', function(convo, next) {

        var value = convo.extractResponse('timer_on');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation
        convo.setVar('timer_on',value);
      
        console.log('VALIDATE: domiWii VARIABLE: timer_on');

        // always call next!
        next();

    });

    // Validate user input: set_point
    controller.studio.validate('domiWii','set_point', function(convo, next) {

        var value = convo.extractResponse('set_point');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation
        convo.setVar('set_point',value);

        console.log('VALIDATE: domiWii VARIABLE: set_point');

        // always call next!
        next();

    });
	
	// Validate user input: comando_presa
    controller.studio.validate('domiWii','comando_presa', function(convo, next) {

        var value = convo.extractResponse('comando_presa');
        var command = value.toUpperCase();

            if(command === "T" || command === "3" || command === "TIMER"){
              command = "TIMER";
            }
            else if(command === "A" || command === "1" || command === "ACCESO"){
              command = "ACCESO";
	    }
            else if(command === "S" || command === "2" || command === "SPENTO"){
              command = "SPENTO";
            }
	    else if(command === "P" || command === "4" || command === "PROGRAMMA"){
              command = "PROGRAMMA";
            }
        // can call convo.gotoThread() to change direction of conversation
        convo.setVar('comando_presa', command);

        console.log('VALIDATE: domiWii VARIABLE: comando_presa');
	    console.log("Entrato nel validatore comando presa");

        // always call next!
        next();

    });
	

    // Validate user input: comando_termostato
    controller.studio.validate('domiWii','comando_termostato', function(convo, next) {

        var value = convo.extractResponse('comando_termostato');
        var command = value.toUpperCase();

            if(command === "M" || command === "1" || command === "MANUALE"){
              command = "MANUALE";
            }
            else if(command === "P" || command === "3" || command === "PROTEZIONE"){
              command = "PROTEZIONE";
            }
            else if(command === "A" || command === "2" || command === "PROGRAMMA"){
              command = "PROGRAMMA";
            }
            else if(command === "S" || command === "4" || command === "SPEGNI"){
              command = "SPEGNI";
            }
        // can call convo.gotoThread() to change direction of conversation
        convo.setVar('comando_termostato', command);

        console.log('VALIDATE: domiWii VARIABLE: comando_termostato');

        // always call next!
        next();

    });

    // Validate user input: alias
    controller.studio.validate('domiWii','alias', function(convo, next) {

        var value = convo.extractResponse('alias');

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: domiWii VARIABLE: alias');

        // always call next!
        next();

    });

    // Validate user input: password
    controller.studio.validate('domiWii','password', function(convo, next) {

        var password = convo.extractResponse('password');
        var alias = convo.extractResponse('alias');
        var channel = convo.context.channel;
      //console.log("Canale:"+channel);
      //console.log(convo);
      

        // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: domiWii VARIABLE: password');

       
        
                var data = JSON.stringify({
                    'alias': alias,
                    'password': password,
                    'facebookId': convo.messages[0].channel
                });
        
                console.log(data);
        
                var options = {
                    url: 'https://domiwiiapp.herokuapp.com' + '/checkDevice',
        
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                        'Content-Length': data.length
                    },
                    body: data
                }
        
                var richiesta = rich.post(options, function(error, response, body) {
                    if (!error && response.statusCode == 200) {
                        console.log(body)
                        var response = JSON.parse(body); // Show the HTML for the Google homepage.
                        if(response.response == 'true'){
                            console.log(response);
                            convo.setVar('alias', alias);
                            convo.setVar('uiid', response.uiid);
                          if(response.uiid.startsWith("1")){
                            convo.setVar('dispositivo',"DomiWii");
                            var temperature = parseInt(response.temperature);
                            var humidity = parseInt(response.humidity);
                            if(temperature > 0){
                                convo.setVar('readedtemperature',temperature);
                                convo.setVar('humidity',humidity);
                                convo.gotoThread('info_temperatura');
                            }
                          }
                          else if(response.uiid.startsWith("2")){
                            console.log("Entrato nell'if di dispositivo termostato");
                            convo.setVar('dispositivo','Termostato');
                            var temperature = parseInt(response.temperature);
                            var modalita;
                            var statusTermostato;
                            var onOFF;
                             switch(response.running_mode){
                                 case "WINTER": modalita = "Inverno"; break;
                                 case "SUMMER": modalita = "Estate"; break;
                                 default: modalita = "Inverno"; break;
                             }
                             switch(response.status){
                                 case "MANUAL": statusTermostato = "MANUALE"; break;
                                 case "ANTIFORNO": statusTermostato = "PROTEZIONE"; break;
                                 case "ANTIGELO": statusTermostato = "PROTEZIONE"; break;
                                 case "AUTO": statusTermostato = "PROGRAMMA"; break;
                                 case "OFF": statusTermostato = "SPENTO"; break;
                                 default: statusTermostato = "AUTO"; break;
                             }
                             switch(response.is_running){
                                 case "OFF": onOFF = "SPENTO"; break;
                                 case "ON": onOFF = "ACCESO"; break;
                                 default: onOFF = "SPENTO"; break;
                             }
                              
                            var setPoint = parseInt(response.set_point);
                            if(setPoint === 0){
                                setPoint = "NESSUNO";
                            }
                            
                            if(temperature > 0 && modalita && statusTermostato){
                                
                                convo.setVar('readedtemperature',temperature);
                                convo.setVar('readedmodalita',modalita);
                                convo.setVar('readedsetPoint',setPoint);
                                convo.setVar('readedstatusTermostato',statusTermostato);
                                convo.setVar('onOFF', onOFF);
                                console.log("temperatura:" + temperature + " modalita:" + modalita + " setPoint:" + setPoint + " statusTermostato:"+ statusTermostato);
                                convo.gotoThread('info_temperatura_termostato');
                            }
                            //convo.gotoThread('scelta_comando_termostato');
                          } else if(response.uiid.startsWith("3") || response.uiid.startsWith("4")){
				    console.log("Entrato nell'if di dispositivo Presa");
				    convo.setVar('dispositivo','Presa');
				    var potenza_attiva;
				    var potenza_reattiva;
				    var isRunningPlug;
				    var statusPlug;
				    potenza_reattiva = parseInt(response.power_reactive_measured);
				    potenza_attiva = parseInt(response.power_active_measured);
				  isRunningPlug = response.is_running;
				  statusPlug = response.status
				    if(potenza_reattiva > 0 || potenza_attiva > 0 || isRunningPlug || statusPlug){
					convo.setVar('potenza_reattiva',potenza_reattiva);
					convo.setVar('potenza_attiva', potenza_attiva);
					convo.setVar('isRunningPlug', isRunningPlug);
					convo.setVar('statusPlug', statusPlug);    
					convo.gotoThread('info_presa');
				    }
				  

			   } else {
                            //askOperation(response, convo);
                            //convo.next();
							convo.gotoThread('bad_device');
                            }
                            next();
                        }
                        else{
                            // convo.say("Ops...la password è errata! Riproviamo");
                            // convo.silentRepeat();
                            // convo.next();
                            convo.gotoThread('bad_password');
                            next();
                        }
                    } else {
                        // convo.say("Ops...la password è errata! Riproviamo");
                        // convo.silentRepeat();
                        // convo.next();
                        convo.gotoThread('bad_password');
                      // always call next!
                        next();
                    }
                });



        
        

    });
  
  // Validate user input: password
    controller.studio.validate('domiWii','rispostainviocomando', function(convo, next) {
      
      // test or validate value somehow
        // can call convo.gotoThread() to change direction of conversation

        console.log('VALIDATE: domiWii VARIABLE: rispostainviocomando');

        var rispostainviocomando = convo.extractResponse('rispostainviocomando');
        
        if(rispostainviocomando == 'si' || rispostainviocomando == 'SI' || rispostainviocomando == 'Si'){
        
          
          var password = convo.extractResponse('password');
          var alias = convo.extractResponse('alias');
          var device = convo.vars.dispositivo;
          var uiid = convo.vars.uiid;
          
          console.log("il dispositivo è"+device);
          console.log("uiid:"+uiid);
          
          //DOMIWIII
          if(device == "DomiWii"){
            
            console.log("Si sta per inviare un comando per un DomiWii");
            var mode = convo.extractResponse('comando');
            mode = mode.toUpperCase();
            var temperature = convo.extractResponse('temperatura');
            var velocity = convo.extractResponse('fan');
            var indice = convo.extractResponse('confortindex');
            var modalità;
            var confort;
            var temperatura;
            var velocità;
            if (indice == ""){
              confort = "-1";
            }
            else{
              confort = indice;
            }

            if(temperature == ""){
              temperatura = "-1";
            }
            else{
              temperatura = temperature;
            }


            if(velocity == ""){
              velocità = "-1";
            }
            else{
              velocità = velocity;
            }

            if(mode == "I"){
              mode = "INVERNO";
            }
            else if(mode == "E"){
              mode = "ESTATE";
            }
            else if(mode == "V"){
              mode = "VENTILATORE";
            }
            else if(mode == "A"){
              mode = "AUTOMATICO";
            }
            else if(mode == "S"){
              mode = "SPEGNI";
            }
            else if(mode == "D"){
              mode = "DEUMIDIFICATORE";
            }



          console.log("conversation completed with values: id - " + alias + " mode - " + mode + " temperature - " + temperatura + " - velocity - " + velocità + " - confort" + confort);

            switch (mode) {
              case "AUTOMATICO":
                  modalità = "5";
                  break;
              case "SPEGNI":
                  modalità = "0";
                  break;
              case "ESTATE":
                  modalità = "2";
                  break;
              case "INVERNO":
                  modalità = "1";
                  break;
              case "VENTILATORE":
                  modalità = "4";
                  temperatura = "21";
                  break;
              case "DEUMIDIFICATORE":
                  modalità = "3";
                  break;
            }


                  var data = JSON.stringify({
                      'alias': alias,
                      'mode': modalità,
                      'speed': velocità,
                      'temperature': temperatura,
                      'confort': confort
                  });

                  console.log(data);

                  var options = {
                      url: 'https://domiwiiapp.herokuapp.com' + '/addBotAction',

                      headers: {
                          'Content-Type': 'application/json; charset=utf-8',
                          'Content-Length': data.length
                      },
                      body: data
                  }

          if(mode != null){
          console.log("Entrato nell'if dove mode è diverso da null");
                  var richiesta = rich.post(options, function(error, response, body) {
                      if (!error && response.statusCode == 200) {
                          console.log(body)
                          var response = JSON.parse(body); 
                      if(response.response == "true"){ 
                          console.log("Entrato nell'if perchè la risposta è true");
                            convo.gotoThread('done');
                            next();
                          }
                          else{
                            console.log("Entrato nell'else perchè la risposta è false");
                            convo.gotoThread('bad_done');
                            next();
                          }
                      } else {

                          convo.gotoThread('bad_done');
                            next();
                      }
                  });
                }
                else{
                	convo.gotoThread('done');
                          next();
                }
          // always call next!
          next();
        }
          
        //TERMOSTATO
        else if(device == "Termostato"){
          
          console.log("Si sta per inviare un comando per un Termostato");
          var command = convo.extractResponse('comando_termostato');
            command = command.toUpperCase();
            var temperatura = convo.extractResponse('set_point');
            var timer = convo.extractResponse('timer_on');
            var modality = convo.extractResponse('modalita_termostato');
            modality = modality.toUpperCase();
            var modalita;
          var mode;
 
            console.log("command variable: "+ command);
            console.log("modality variable: "+ modality)
		
	if(command === "M" || command === "1" || command === "MANUALE"){
              command = "MANUALE";
            }
            else if(command === "P" || command === "3" || command === "PROTEZIONE"){
              command = "PROTEZIONE";
            }
            else if(command === "A" || command === "2" || command === "PROGRAMMA"){
              command = "PROGRAMMA";
            }
            else if(command === "S" || command === "4" || command === "SPEGNI"){
              command = "SPEGNI";
            }
		
	    if(modality == "I" || modality=="INVERNO"){
		modality = "INVERNO";
	    }
            else if(modality == "E" || modality =="ESTATE"){
              modality = "ESTATE";
            }
		

            switch (command) {
              case "PROGRAMMA":
                  modalita = "3";
                  break;
              case "SPEGNI":
                  modalita = "2";
                  break;
              case "PROTEZIONE":
                  modalita = "7";
                  break;
              case "MANUALE":
                  modalita = "1";
                  break;
                default:
                    modalita = "1";
              
            }
          
          switch (modality) {
              case "ESTATE":
                  mode = "1";
                  break;
              case "INVERNO":
                  mode = "0";
                  break;
              default:
                  mode= "0"
            }

          var object = {};
          
          object.alias = alias;
          object.password = password;
          object.command = modalita;
          object.uiid = uiid;
          (timer)? object.timeOn = timer : null;
          (temperatura)? object.temperature = temperatura : null;
          (mode)? object.mode = mode:null;

                  var data = JSON.stringify(object);

                  console.log(data);

                  var options = {
                      url: 'https://domiwiiapp.herokuapp.com' + '/addAction',

                      headers: {
                          'Content-Type': 'application/json; charset=utf-8',
                          'Content-Length': data.length
                      },
                      body: data
                  }

          
                  var richiesta = rich.post(options, function(error, response, body) {
                      if (!error && response.statusCode == 200) {
                          console.log(body)
                          var response = JSON.parse(body); 
                      if(response.response == "true"){ 
                          console.log("Entrato nell'if perchè la risposta è true");
                            convo.gotoThread('done');
                            next();
                          }
                          else{
                            console.log("Entrato nell'else perchè la risposta è false");
                            convo.gotoThread('bad_done');
                            next();
                          }
                      } else {

                          convo.gotoThread('bad_done');
                            next();
                      }
                  });
                
        }
	// PRESA
	else if(device == "Presa"){
		console.log("Si sta per inviare un comando per una Presa");
          	var command = convo.extractResponse('comando_presa');
            command = command.toUpperCase();
            var timer = convo.extractResponse('timer_on_presa');
            var modalita;
 
            console.log("command variable: "+ command);
            console.log("modality variable: "+ modality)
		
		if(command === "T" || command === "3" || command === "TIMER"){
              command = "TIMER";
            }
            else if(command === "A" || command === "1" || command === "ACCESO"){
              command = "ACCESO";
	    }
            else if(command === "S" || command === "2" || command === "SPENTO"){
              command = "SPENTO";
            }
	    else if(command === "P" || command === "4" || command === "PROGRAMMA"){
              command = "PROGRAMMA";
            }
		
		
	switch (command) {
              case "ACCESO":
                  modalita = "9";
                  break;
              case "SPENTO":
                  modalita = "2";
                  break;
              case "TIMER":
                  modalita = "10";
                  break;
	      case "PROGRAMMA":
                  modalita = "3";
                  break;
                default:
                    modalita = "1";
              
            }	
		
	  var object = {};
          
          object.alias = alias;
          object.password = password;
          object.command = modalita;
          object.uiid = uiid;
          (timer)? object.timeOn = timer : null;

                  var data = JSON.stringify(object);

                  console.log(data);

                  var options = {
                      url: 'https://domiwiiapp.herokuapp.com' + '/addAction',

                      headers: {
                          'Content-Type': 'application/json; charset=utf-8',
                          'Content-Length': data.length
                      },
                      body: data
                  }

          
                  var richiesta = rich.post(options, function(error, response, body) {
                      if (!error && response.statusCode == 200) {
                          console.log(body)
                          var response = JSON.parse(body); 
                      if(response.response == "true"){ 
                          console.log("Entrato nell'if perchè la risposta è true");
                            convo.gotoThread('done');
                            next();
                          }
                          else{
                            console.log("Entrato nell'else perchè la risposta è false");
                            convo.gotoThread('bad_done');
                            next();
                          }
                      } else {

                          convo.gotoThread('bad_done');
                            next();
                      }
                  });
		
		
	}else{
          convo.gotoThread('no_done');
          // always call next!
          next();    
      }
    
          
        }
      else{
          convo.gotoThread('no_done');
          // always call next!
          next();    
      }

    });

    

    /* Thread Hooks */
    // Hook functions in-between threads with beforeThread
    // See: https://github.com/howdyai/botkit/blob/master/docs/readme-studio.md#controllerstudiobeforethread
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

    // Before the default thread starts, run this:
    controller.studio.beforeThread('domiWii','default', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *domiWii*, about to start the thread *default*');

        // always call next!
        next();
    });

    // Before the scelta_comando thread starts, run this:
    controller.studio.beforeThread('domiWii','scelta_comando', function(convo, next) {

        /// do something fun and useful
        

        console.log('In the script *domiWii*, about to start the thread *scelta_comando*');

        // always call next!
        next();
    });

    // Before the recap thread starts, run this:
    controller.studio.beforeThread('domiWii','recap', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *domiWii*, about to start the thread *recap*');

        // always call next!
        next();
    });

    // Before the bad_comando thread starts, run this:
    controller.studio.beforeThread('domiWii','bad_comando', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *domiWii*, about to start the thread *bad_comando*');

        // always call next!
        next();
    });

    // Before the branch_automatico thread starts, run this:
    controller.studio.beforeThread('domiWii','branch_automatico', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *domiWii*, about to start the thread *branch_automatico*');

        // always call next!
        next();
    });

    // Before the checkPassword thread starts, run this:
    controller.studio.beforeThread('domiWii','checkPassword', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *domiWii*, about to start the thread *checkPassword*');

        // always call next!
        next();
    });

    // Before the bad_indiceConfort thread starts, run this:
    controller.studio.beforeThread('domiWii','bad_indiceConfort', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *domiWii*, about to start the thread *bad_indiceConfort*');

        // always call next!
        next();
    });

    // Before the done thread starts, run this:
    controller.studio.beforeThread('domiWii','done', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *domiWii*, about to start the thread *done*');

        // always call next!
        next();
    });

    // Before the branch_temperatura thread starts, run this:
    controller.studio.beforeThread('domiWii','branch_temperatura', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *domiWii*, about to start the thread *branch_temperatura*');

        // always call next!
        next();
    });

    // Before the bad_temperatura thread starts, run this:
    controller.studio.beforeThread('domiWii','bad_temperatura', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *domiWii*, about to start the thread *bad_temperatura*');

        // always call next!
        next();
    });

    // Before the branch_fan thread starts, run this:
    controller.studio.beforeThread('domiWii','branch_fan', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *domiWii*, about to start the thread *branch_fan*');

        // always call next!
        next();
    });

    // Before the bad_indicefan thread starts, run this:
    controller.studio.beforeThread('domiWii','bad_indicefan', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *domiWii*, about to start the thread *bad_indicefan*');

        // always call next!
        next();
    });
  
  // Before the scelta_comando_termostato thread starts, run this:
    controller.studio.beforeThread('domiWii','scelta_comando_termostato', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *domiWii*, about to start the thread *scelta_comando_termostato*');

        // always call next!
        next();
    });

    // Before the branch_setPoint_termostato thread starts, run this:
    controller.studio.beforeThread('domiWii','branch_setPoint_termostato', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *domiWii*, about to start the thread *branch_setPoint_termostato*');

        // always call next!
        next();
    });

    // Before the bad_setPoint_termostato thread starts, run this:
    controller.studio.beforeThread('domiWii','bad_setPoint_termostato', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *domiWii*, about to start the thread *bad_setPoint_termostato*');

        // always call next!
        next();
    });

    // Before the branch_timer_termostato thread starts, run this:
    controller.studio.beforeThread('domiWii','branch_timer_termostato', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *domiWii*, about to start the thread *branch_timer_termostato*');

        // always call next!
        next();
    });

    // Before the bad_timer_termostato thread starts, run this:
    controller.studio.beforeThread('domiWii','bad_timer_termostato', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *domiWii*, about to start the thread *bad_timer_termostato*');

        // always call next!
        next();
    });

    // Before the branch_modalita_termostato thread starts, run this:
    controller.studio.beforeThread('domiWii','branch_modalita_termostato', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *domiWii*, about to start the thread *branch_modalita_termostato*');

        // always call next!
        next();
    });

    // Before the bad_modalita_termostato thread starts, run this:
    controller.studio.beforeThread('domiWii','bad_modalita_termostato', function(convo, next) {

        /// do something fun and useful
        // convo.setVar('name','value');

        console.log('In the script *domiWii*, about to start the thread *bad_modalita_termostato*');

        // always call next!
        next();
    });


    // define an after hook
    // you may define multiple after hooks. they will run in the order they are defined.
    // See: https://github.com/howdyai/botkit/blob/master/docs/readme-studio.md#controllerstudioafter
    controller.studio.after('domiWii', function(convo, next) {

        console.log('AFTER: domiWii');

        // handle the outcome of the convo
        if (convo.successful()) {

            var responses = convo.extractResponses();
            // do something with the responses

        }

        // don't forget to call next, or your conversation will never properly complete.
        next();
    });
}
