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
        delay: 200,
    content: 'Alright ' + res.value + ', Lets get started then.'
    });

}).then(function() {
    return botui.action.button ({
        delay: 800,
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
                    delay: 1000,
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
                },
                {
                    text: 'Share some of your skills',
                    value: 'SSOYS'
                }
            ]
        });
    }).then(function(res){
        if(res.value == 'SYJ')
        {
            return botui.message.add({
                delay: 500,
                content: 'I was born in New Delhi, and grew up living at 7 different cities of India.\nI can easily adapt to new environments, and embrace change positively.'
            }).then(function(){
                return botui.message.add({delay: 500,
                content: 'After high school, I then joined Indian Institute of Technology Guwahati, one of the premiere institute of india to study Engineering Physics. There I got introduced to design department which interested me and I wanted to know more about the world of design.'
            }).then(function(){
                return botui.message.add({
                    delay: 500,
                    content: 'To discover the same, I joined Srishti Institute of Art, Design and Technology, where I’m currently pursuing Mdes in Human Centered Design.'
                }).then(function(){
                    return botui.action.button({
                        delay:1000,
                        action:[
                            {
                                text: 'Where have you worked before?',
                                value: 'WHYWB'
                            },
                            {
                                text: 'Share some of your skills',
                                value: 'SSOYS'
                            }
                        ]
                    });
                })
            });
            });
        }
        else if(res.value=='WHYWB')
        {
            return botui.message.add({
                delay: 500,
                content: 'Along with my masters, I keep doing some freelancing design.'
            }).then(function(){
                return botui.message.add({delay: 500,
                content: 'Before Srishti, I’ve worked as a UX Intern at Moneymall.AE based in Dubai where I was responsible to redesign the app and website for their new version.'
            }).then(function(){
                return botui.message.add({
                    delay: 500,
                    content: 'I have also worked as a research associate at Sustainability & Social Innovation Labs, IIT Guwahati.'
                }).then(function(){
                    return botui.action.button({
                        delay:1000,
                        action:[
                            {
                                text: 'Share your journey.',
                                value: 'SYJ'
                            },
                            {
                                text: 'Share some of your skills',
                                value: 'SSOYS'
                            }
                        ]
                    });
                })
            });
            });
        }
        else
        {
            return botui.message.add({
                delay: 500,
                content: 'I have hands-on experience with both conducting UX research as well designing user interfaces.'
            }).then(function(){
                return botui.message.add({delay: 500,
                content: 'Proficient in Sketch, Adobe Photoshop, Adobe Illustrator, Adobe Indesign and Principle.'
            }).then(function(){
                return botui.message.add({
                    delay: 500,
                    content: 'Comfortable with HTML, CSS, Javascript, Jquery, C++/C and Occasionally tinker with arduino and sensors to build interactive prototypes.'
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
                })
            });
            }); 
        }
    }).then(function(res){
        if(res.value == 'SYJ')
        {
            return botui.message.add({
                delay: 500,
                content: 'I was born in New Delhi, and grew up living at 7 different cities of India.\nI can easily adapt to new environments, and embrace change positively.'
            }).then(function(){
                return botui.message.add({delay: 500,
                content: 'After high school, I then joined Indian Institute of Technology Guwahati, one of the premiere institute of india to study Engineering Physics. There I got introduced to design department which interested me and I wanted to know more about the world of design.'
            }).then(function(){
                return botui.message.add({
                    delay: 500,
                    content: 'To discover the same, I joined Srishti Institute of Art, Design and Technology, where I’m currently pursuing Mdes in Human Centered Design.'
                })
            });
            });
        }
        else if(res.value=='WHYWB')
        {
            return botui.message.add({
                delay: 500,
                content: 'Along with my masters, I keep doing some freelancing design.'
            }).then(function(){
                return botui.message.add({delay: 500,
                content: 'Before Srishti, I’ve worked as a UX Intern at Moneymall.AE based in Dubai where I was responsible to redesign the app and website for their new version.'
            }).then(function(){
                return botui.message.add({
                    delay: 500,
                    content: 'I have also worked as a research associate at Sustainability & Social Innovation Labs, IIT Guwahati.'
                })
            });
            });
        }
        else
        {
            return botui.message.add({
                delay: 500,
                content: 'I have hands-on experience with both conducting UX research as well designing user interfaces.'
            }).then(function(){
                return botui.message.add({delay: 500,
                content: 'Proficient in Sketch, Adobe Photoshop, Adobe Illustrator, Adobe Indesign and Principle.'
            }).then(function(){
                return botui.message.add({
                    delay: 500,
                    content: 'Comfortable with HTML, CSS, Javascript, Jquery, C++/C and Occasionally tinker with arduino and sensors to build interactive prototypes.'
                })
            });
            }); 
        }
    }).then(function(){
        return botui.action.button({
            delay:1000,
            action:[
                {
                    text: 'Wanna know some more?',
                    value: 'WKSM'
                },
                {
                    text: 'How can I reach out to you?',
                    value: 'reach_out'
                }
            ]
        }).then(function(res){
            if(res.value == 'WKSM')
            {
                return botui.message.add({
                    delay: 500,
                    content: 'You can check out my work at my [portfolio webiste](https://sakshimeena.github.io)'
                });
            }
            else
            {
                return botui.message.add({
                    delay: 500,
                    content: 'Feel free to drop me a mail at meenasakshi25@gmail.com.'
                })
            }
        })
    });
});
