//Initialising the bot and script
var botui = new BotUI('botui-app');
    
botui.message.add({
    content: 'Hello there' 
        }).then(function(){
        return botui.message.bot ({
        delay: 800,
        content: 'I am Sakshi Meena, currently studying Human Centered Design at Srishti Institute of Art, Design and Technology.'
    });
}).then(function() {
    return botui.message.bot ({
    delay: 800,
    content: 'What is your name?'
    });
}).then(function() {
    botui.action.text({
        delay: 800,
    addMessage: false,
    action: {
       value: 'Peter Parker',
      placeholder: 'Your Name'
    }
    }).then(function(res) {
    botui.message.add({
    content: 'Alright ' + res.value + ', Lets get started then.'
    });

}).then(function() {
    return botui.action.button ({
        action: [
            {
                text: 'okay, got it.',
                value: 'okay'
            },
            {
                text: 'How can I reach out to you?',
                value: 'reach_out'
            }
        ]
    });
}).then(function(res){
        if(res.value == 'reach_out')
        {
            return botui.message.add({
            loading:true,
            delay:2000,
            content: 'You can mail me at meenasakshi25@gmail.com and if you\'re in Bangalore, we can talk about design over a coffee.'
            });
        }
        else
        {
            return botui.message.add(
                {
                    content:'Great.'
                }
            );
        }
    }).then(function(){
        return botui.action.button({
            delay:1000,
            action:[
                {
                    text: 'Share your journey.',
                    value: 'SYJ'
                },
                {
                    text: 'Where have you worked before?',
                    value: 'WHYWB'
                }
            ]
        });
    }).then(function(res){
        if(res.value == 'SYJ')
        {
            return botui.message.add({
                delay: 1000,
                content: 'I was born in New Delhi, and grew up living at 7 different cities of India.\nI can easily adapt to new environments, and embrace change positively.\nAfter high school, I then joined Indian Institute of Technology Guwahati, one of the premiere institute of india to study Engineering Physics. There I got introduced to design department which interested me and I wanted to know more about the world of design.\nTo discover the same, I joined Srishti Institute of Art, Design and Technology, where I’m currently pursuing Mdes in Human Centered Design.'
            });
        }
    });
});
