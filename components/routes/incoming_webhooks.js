var debug = require('debug')('botkit:incoming_webhooks');

module.exports = function(webserver, controller) {

    debug('Configured POST /facebook/receive url for receiving events');
    webserver.post('/facebook/receive', function(req, res) {

        // NOTE: we should enforce the token check here

        // respond to Slack that the webhook has been received.
        res.status(200);
        res.send('ok');

        var bot = controller.spawn({});

        // Now, pass the webhook into be processed
        controller.handleWebhookPayload(req, res, bot);

    });

    debug('Configured GET /facebook/receive url for verification');
    webserver.get('/facebook/receive', function(req, res) {
        if (req.query['hub.mode'] == 'subscribe') {
            if (req.query['hub.verify_token'] == controller.config.verify_token) {
                res.send(req.query['hub.challenge']);
            } else {
                res.send('OK');
            }
        }
    });
    
    debug('Configured POST /api/receive url for receiving events to notify to user');
    webserver.post('/api/sendMessage', function(req, res) {

        // NOTE: we should enforce the token check here

        // respond to Server that the webhook has been received.
        res.status(200);
        res.send('ok');

        var bot = controller.spawn({});
        var body = req.body;
      console.log(body);
      
        var channels = body.registration_ids;
      console.log(channels);
      
        var messages = channels.map(function(item){
          var obj = {};
          obj.text = body.notification.body;
          obj.channel = item;
          return obj;
        })
        
        console.log(messages);

        messages.forEach(function(element){
          // Now, send the message with requested body
          bot.say(element);
        })
        
        

    });

}
