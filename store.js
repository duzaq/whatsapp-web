X_makeSend = function(numero,mensagem){console.log('Send ... ',numero);
	setTimeout(() => {			 
	            X_sendMessage(numero, mensagem);
	            setTimeout( () => {
	                Store.Wap.resyncMessages([ numero + "@c.us" ]);
	            }, 1500);
	        }, 500);
}

/////////////////
X_sendMessage = function(to = null, body = null) {
    if (to == null || body == null) return {
        'status': 401,
        'status_msg': "Invalid user or body text"
    }
    var id = X_makeID();
    var msg = Store.Msg.models[0];
    msg.id.id = id;
    msg.id.remote = to + "@c.us";
    msg.type = "chat";
    msg.body = body;
    msg.to = to + "@c.us";
    msg.t = Math.ceil(new Date().getTime() / 1000);
    Store.Msg.send(msg);
};

X_makeID = function() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 20; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
};
X_makeSend(553399999999,'teste');