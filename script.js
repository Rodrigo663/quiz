

// Question Object
var status;
class Question {
    constructor(id, question, image, options, correct, explanation) {
        this.id = id;
        this.question = question;
        this.image = image;
        this.options = options;
        this.correct = correct;
        this.explanation = explanation;
    }
}
var rights = new Map;


var GlobalCount;
// Data of the questions
const questions = ['What is the result of this expression? ', 'Were is DNA located? ', 'What fundamental force has an infinite range?', 'What is the only U.S state that only borders one state?', 'Which number logically follows this series?  ', 'Wich U.S. president served the shortest time in office?  ', 'What is the hottest planet in our solar system? ',  'What element has the lowest number of protons?', 'What´s the name of the substance found on plants wich provides their green color?', 'Using the rules of exponents, simplify'];
const images = ["Images/expression.png", "https://upload.wikimedia.org/wikipedia/commons/1/14/Double_stranded_DNA_with_coloured_bases.png", 'https://media.mnn.com/assets/images/2016/10/cloud-ground-lightning.jpg', 'https://storage.needpix.com/rsynced_images/usa-1663497_1280.jpg','Images/expression2.png', 'https://media.architecturaldigest.com/photos/5900e7e4ca0b76474b000da8/16:9/w_2560%2Cc_limit/oval%252520office.jpg', 'https://cdn.mos.cms.futurecdn.net/DC5uTFNaontPkhuB8pifUP-1200-80.jpg', 'https://earthsky.org/upl/2018/02/hydrogen-e1519831224940.jpg', 'https://theurbanjuicer.files.wordpress.com/2013/01/leaf.jpg', 'Images/expression3.png', 'https://ds055uzetaobb.cloudfront.net/brioche/uploads/6jECMkBh63-robot-head.svg?width=120']
const options = [['140','142', '337', '1552'], ['Nucleus of the cell', 'Both in the nucleus and mitochondria of the cell', 'Cell´s Cytoplasm', 'Cell´s Membrane'], ['Weak Nuclear Force', 'Gravity', 'Electromagnetic Force', 'Strong Nuclear Force'], ['Florida', 'Maine', 'Michigan', 'Alaska'], ['6', '20','19', '18'], ['James Garfield', 'Gerlad Ford', 'John Kennedy', 'William Harrison'], ['Mercury', 'Mars', 'Venus', 'Jupiter'], ['Lithium', 'Hydrogen', 'Beryllium', 'Helium'], ['Chlorophyll', 'Photosynthesis', 'Glucose', 'Fructose'], ['1/2', '1', '2', '2^2']];
const right = [1, 1, 1, 1, 2, 3, 2, 1, 0, 2];
const explanations = [['Following the resolution order:', '1° - Solve the operations inside the parenthesis', '2° - Solve the multiplication operations', '3° - Sum all the values', 'We get this result: 142.'], 
                ['Although it´s true that most of the DNA is located in the cell´s nucleus, there is a tiny part of it located in the cell´s mitochondria.'], 
                ['Gravity is the weakest force of the nature, while the the strong nuclear is the strongest, keeping the protons and neutrons together in the atom. Even being the strongest force, its range is limited to the athom. In the other hand, celestail bodies are able to influence each other even being far away. This is the gravity force with an infinite range in action!'], 
                ['Flordia borders both Georgia and Alabama on the north.', 'Michigan borders Indiana, Ohio and Wisconsin.', 'Alaska only borders the canadian province of Yukon.', 'Maine only borders New Hampshire.', 'So the right answer: Maine'], 
                ['It´s easy to find a pattern here:', 'Starting by 4, the next number will also be the last number plus 5.', 'After each new number, there´s always the number 6.', '14, 6... How much is 14+5? That´s easy, 19!'],
                ['\u2022 James Garfield´s term lasted 199 days.', '\u2022 Gerald Ford´s term lasted 895 days.', '\u2022 John Kennedy´s term lasted 1036 days.', '\u2022 William Harrison´s term lasted for miserable 31 days!', 'So the right answer: William Harrison.'],
                [ "Altough it´s true that Mercury is the closest planet from the sun, we need more context here. This is a great question! The answer to it lies in the fact that Venus has a very dense atmosphere made up of carbon dioxide, nitrogen, and sulfuric acid, while Mercury has a very thin atmosphere with various gases, but very little carbon dioxide. So what´s so important about carbon dioxide? Well, sunlight will pass through Venus' clouds (which contain mostly carbon dioxide) and warm the surface of the planet. Usually, the surface of a planet is warmed during the day and cools off at night by releasing infrared radiation (heat) back into space. But the carbon dioxide in Venus clouds absorbs energy from infrared radiation very well and 'traps' the heat on the planet, making it very warm. This has sometimes been called a 'runaway greenhouse effect.' We don't see this happen on Mercury because its atmosphere is not thick and does not have much carbon dioxide in it. I hope this helps!"],
                ['\u2022 Lithium´s athom carries 3 protons.', '\u2022 Helium´s athom carries 2 protons.', '\u2022 Hydrogen´s athom carries only 1 proton.', '\u2022 Berylium´s athom carries 4 protons.', 'So the right answer: Hydrogen.'],
                [ 'First of all photosynthesis is a process, not a substance.', 'Second glucose and fructose are only a sugar found in grapes and other fruits.', 'Therfore the substance that provides green color for the plants is called Chlorophyll.'],
                ['Images/resolution.png']];
                    
                    
                    
                    


// Declaring the variables
var math, biology, phyisics, geography,logic, history, science, chemistry, biology2, math2;

// Storing the variables
var names=  [math, biology, phyisics, geography,logic, history, science, chemistry, biology2, math2];
// Making the variables a question object
for (i=0; i < 10; i++) {
    
    names[i] = new Question(i+1, questions[i],images[i], options[i], right[i], explanations[i]);
};


// DOM strings
const width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
const DOMstrings = {
    accept: '.suc',
    main: 'main',
    failure: '.fai',
    header: '.header',
    img:'.image',
    submit: '.submit',
    paragraph: '.para',
    img2: '.img2',
    p2: '.p2',
    main2: 'alternatives',
    line: '.line'
};

// Assigning DOM elements to constants
const DOMelements = {failure:document.querySelector(DOMstrings.failure),
                    success: document.querySelector(DOMstrings.accept),
                    question: document.querySelector(DOMstrings.header),
                    img: document.querySelector(DOMstrings.img),
                    box: document.getElementById(DOMstrings.main),
                    box2: document.getElementById(DOMstrings.main2),
                    p2: document.querySelector(DOMstrings.p2),
                    img2: document.querySelector(DOMstrings.img2),
                    line: document.querySelector(DOMstrings.line)
                    };




        
        
        

// Function that controlls
const controll = function (def, num=0) {
    
    var but = document.querySelector('.expa');
      
    if (but) {
        but.remove(); 
    } else {
        //s
    }
    if (def) {
        document.querySelector(DOMstrings.submit).textContent = 'Submit';
        //var index = names.indexOf(names[0]);
        
        //names.splice(index, 1);
        
        
        display(num+1);
    } else {
      
        display(0);
    };

    

    
}

// Function that display the question
const display = function(num) {
    status = 'on';
    GlobalCount =  names[num].id;

    DOMelements.question.textContent = names[num].question;
    DOMelements.img.src = names[num].image;
    if (num ===9) {
        DOMelements.img2.style.marginTop= "30px";
        DOMelements.img2.style.marginLeft = "620px";
     
        
        DOMelements.img.style.width = '200px';

        DOMelements.p2.textContent = "Remember: you are not a robot, and you don't need a calculator to solve this!";
      
        DOMelements.p2.style.marginTop = "200px";
        DOMelements.p2.style.textAlign = "center";
        DOMelements.line.style.marginTop = '30px';
        DOMelements.img2.src = images[10];

    
    };
    switch (num) {
        case 0:
            DOMelements.img.style.marginTop = '50px';
            if (width < 1028) {
                
                DOMelements.img.style.width = '75%';
              
            } else {
                DOMelements.img.style.width = '50%';
            }
            
            break;
        case 1:
            if (width < 1028) {
                document.querySelector('.btn-group').style.marginLeft= '1%';
                DOMelements.img.style.width = '60%';
              
            } else {
                document.querySelector('.btn-group').style.marginLeft= '25%';
                DOMelements.img.style.width = '20%';
            }
          //document.querySelector('.btn-group').style.marginRight= '20%';
    
            
            DOMelements.img.style.marginTop = '0';
            

            break;
        case 4:
            DOMelements.box2.style.marginTop= '20px';
            DOMelements.line.style.marginTop= '130px';
            if (width < 1028) {
                document.querySelector('.btn-group').style.marginLeft= '35%';
            } else {
                document.querySelector('.btn-group').style.marginLeft= '44%';
               
            }
          
           
            break;
        case 5:
            if (width < 1028) {
                document.querySelector('.btn-group').style.marginLeft= '2%';
            } else {
                document.querySelector('.btn-group').style.marginLeft= '33%';
                DOMelements.img.style.width = '36%';
            }
            DOMelements.box2.style.marginTop= '20px';
            DOMelements.line.style.marginTop= '250px';
           
            
            break
        case 6:
            if (width < 1028) {
                document.querySelector('.btn-group').style.marginLeft= '23%';
                DOMelements.line.style.marginTop= '250px';
            } else {
                document.querySelector('.btn-group').style.marginLeft= '41%';
                DOMelements.img.style.width = '38%';
                DOMelements.line.style.marginTop= '350px';
            }
            DOMelements.box2.style.marginTop= '20px';
     
            
            
            break
        case 7:
            if (width < 1028) {
                document.querySelector('.btn-group').style.marginLeft= '16%';
            } else {
                document.querySelector('.btn-group').style.marginLeft= '39%';
                DOMelements.img.style.width = '35%';
            }
            
            
            break
        case 8:
            if (width < 1028) {
                document.querySelector('.btn-group').style.marginLeft= '8%';
            } else {
                document.querySelector('.btn-group').style.marginLeft= '35%';
                DOMelements.img.style.width = '33%';
            }
            
        
            break
        case 9:
            if (width < 1028) {
                document.querySelector('.btn-group').style.marginLeft= '36%';
                DOMelements.img2.style.marginLeft = "40%";
            } else {
                document.querySelector('.btn-group').style.marginLeft= '44%';
                
            }
            break;
        case 3:
            if (width < 1028) {
                document.querySelector('.btn-group').style.marginLeft= '25%';
                DOMelements.img.style.width = '80%';
                DOMelements.line.style.marginTop= '250px';
            } else {
                document.querySelector('.btn-group').style.marginLeft= '39%';
                DOMelements.img.style.width = '600px';
                DOMelements.line.style.marginTop= '400px';
               
            }
            
           
           
            DOMelements.img.style.marginTop = '0px';
            DOMelements.box2.style.marginTop= '20px';
           
     
            break
        default:
            if (width < 1028) {
                document.querySelector('.btn-group').style.marginLeft= '0.5%';
            } else {
                document.querySelector('.btn-group').style.marginLeft= '32%';
                DOMelements.img.style.width = '30%';
            }
            
            
           
    }

    
    
    
  


    if (names[num].id ===1) {
        insertRadio(names[num].options);
        
        DOMelements.line.style.marginTop = '200px';
        if (width < 1028) {
            document.querySelector('.btn-group').style.marginLeft= '32%';
        } else {
            document.querySelector('.btn-group').style.marginLeft= '42%';

        }
        

        

        

        ;
        
    } else {
        change(names[num].options);
    }
    
    const submit = document.querySelector(DOMstrings.submit);
    const checkFun = function() {
        

            var tempList = [];
            var my;
            for (i=0; i< 4; i++) {
                my =  document.getElementById(`option${i+1}`).checked;
            
                tempList.push(my);
            };
            
            
            check(tempList,names[num], submit);
            
            
            
            
            
            
        
    };
    function countInArray(array) {
        var count = 0;
        console.log(array);
        for (let [key] of array) {
            if (array.get(key)) {
                count++;
            }
        }
        return count;
    }
    const results = function() {
        var finalText;
        var number = countInArray(rights);
        console.log(number);
        DOMelements.question.textContent = '';
      
        if (number > 7) {
            finalText = `Your STEM knowledge is really impressive! Your score was ${number}/10.`
            
            DOMelements.img.src= 'https://media.giphy.com/media/111ebonMs90YLu/giphy.gif';
            
        } else  {
            finalText = `Even if you weren´t perfect, you learned a lot. Your score was ${number}/10.`;
            DOMelements.img.src= 'https://www.internetsearchinc.com/wp-content/uploads/2014/07/albert-einstein-mistake-quotes.jpg';
            if (width < 1028) {
                document.querySelector('.image').style.margin = '0';
             
            }
        
        }

        
        //DOMelements.img.style.width = '600px';
        if (width < 1028) {
            DOMelements.img.style.width = '73%';
            DOMelements.img.style.marginLeft = '15%';
            DOMelements.line.style.marginTop = '200px';
         
        } else {
            DOMelements.img.style.width = '38%';
            DOMelements.img.style.marginLeft = '33%';
            DOMelements.line.style.marginTop = '350px';
        }
        
       
        
        DOMelements.box2.marginBottom = '50px';
       
        DOMelements.question.textContent = finalText;


    };
    
    const finish = function () {
        let paragraph = document.querySelector(DOMstrings.paragraph);
        submit.textContent = 'Finish';
        submit.removeEventListener('click', checkFun);
        submit.addEventListener('click', function () {
            paragraph.textContent = '';
            // Remove all
            DOMelements.img.src= '';
            DOMelements.question.textContent = '';
            DOMelements.radio.parentNode.removeChild(DOMelements.radio);
            DOMelements.img2.parentNode.removeChild(DOMelements.img2);
            DOMelements.p2.parentNode.removeChild(DOMelements.p2);
            document.querySelector('.expa').remove();
            gente = document.querySelector(`.expla-img`);
            if (gente) {
                DOMelements.box2.removeChild(gente);
            };

            DOMelements.box2.removeChild(submit);
            var markup = `        <div class='row'>
                    <div class='col-lg-6'>
                        <button type='button' class='btn btn-success suc2'>Restart</button>
                    </div class='col-lg-6'>
                        <button  onclick="window.location.href=''" type='button' class='btn btn-danger fai2'>Back to Homepage</button>
                    </div>
                </div>`;
            DOMelements.box2.insertAdjacentHTML('beforeend', markup);
            if (width < 1028) {
                document.querySelector('.suc2').style.marginLeft= '40%';
                document.querySelector('.fai2').style.marginLeft= '40%';
            };
            document.querySelector('.suc2').addEventListener('click', () => {
                location.reload();
            });
            // Add results
            results();


        })
    };
    const check = function (list, obj) {
    
    
        let paragraph = document.querySelector(DOMstrings.paragraph);
        GlobalCount++;
        var markup = `<button type="button" class="btn btn-info expa">Show Explanation ▼</button>`;
        DOMelements.box2.insertAdjacentHTML('beforeend', markup);
        if (list[obj.correct]=== true) {
            
            paragraph.textContent = 'Correct Answer! 🎉';
            if (GlobalCount === (obj.id+1)) {
                rights.set(obj.id, true);
            };
            
            
        }else if (list.includes(true) === false && obj.correct === 0) {
            paragraph.textContent = 'Correct Answer! 🎉';
            if (GlobalCount === (obj.id+1)) {
                rights.set(obj.id, true);
            };
        } else {
            
            paragraph.textContent = 'Incorret! The best learners allow them to make mistakes. 🤔';
            if (GlobalCount === (obj.id+1)) {
                rights.set(obj.id, false);
            };
        };
        
        
        if ((obj.id-1) < 9) {
            changeSub();
            
        } else {
            finish();
        }

        
        document.querySelector('.expa').addEventListener('click', function () {
           insertExplanation(obj.id);
        });
        
    
        
    };

    const changeSub = function() {
        let paragraph = document.querySelector(DOMstrings.paragraph);
        submit.textContent = 'Continue';

        submit.removeEventListener('click', checkFun);
        submit.addEventListener('click', function() {
                
            
            
            
            var but = document.querySelector('.expa');
         
            if (but) {
                but.remove(); 
            } else {
                //s
            }
            
            
           
            if (status === 'off') {
                
            
              
                    
                    for (i = 0; i <names[num].explanation.length; i++) {
                
                
                        gente = document.querySelector(`.exp-pie${i}`);
                        if (gente) {
                            DOMelements.box2.removeChild(gente);
                    }
                };
               //but.parentNode.removeChild(DOMelements.failure);
            
            

            
            }  
            paragraph.textContent = '';
            controll(true, num);    
        });
    };
 
    submit.addEventListener('click', checkFun);
    
    

};
const insertExplanation = function(num) {
    var gente;
    
    if (status === 'on') {
        var markup;
        if (num===10) {
            markup = `<img class='expla-img' src="Images/resolution.png" alt="resolution">`;
            DOMelements.box2.insertAdjacentHTML('beforeend', markup);
        } else {

            for (i = 0; i <names[num-1].explanation.length; i++) {
                
                markup = `<p class='exp-pie${i}'>${names[num-1].explanation[i]}</p>`;
                

                DOMelements.box2.insertAdjacentHTML('beforeend', markup);
                gente = document.querySelector(`.exp-pie${i}`);
                gente.style.color='black';
                gente.style.fontFamily='Montserrat', 'sans-serif';
                gente.style.fontSize = '1.5rem';
                gente.style.textAlign = 'center';
                gente.style.lineHeight = '1.2';

            }

            
            

            };
            status = 'off';
            document.querySelector('.expa').textContent = 'Hide Explanation ▲';
            

            
        
        
        } else {
          
            if (num===10) {
             
                gente = document.querySelector(`.expla-img`);
                if (gente) {
                    DOMelements.box2.removeChild(gente);
                }
            } else {
                    
                    for (i = 0; i <names[num-1].explanation.length; i++) {
                
                
                        gente = document.querySelector(`.exp-pie${i}`);
                        
                        DOMelements.box2.removeChild(gente);
                        
                    
        
                    };
                }
            document.querySelector('.expa').textContent = 'Show Explanation ▼';
            
            
            status = 'on';
        
    

    

}
};


const insertRadio = function(options) {
    const markup = `
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-outline-dark active" id='op1'>
                <input type="radio" name="options" id="option1" autocomplete="off">
                
            </label>
            
            <label class="btn btn-outline-dark" id='op2'>
                <input type="radio" name="options" id="option2" autocomplete="off"> 
            </label>
            <label class="btn btn-outline-dark" id='op3'>
                <input type="radio" name="options" id="option3" autocomplete="off"> 
            </label>
            <label class="btn btn-outline-dark" id='op4'>
                <input type="radio" name="options" id="option4" autocomplete="off"> 
            </label>
        </div>
    
    <p class='para'></p>
    
    <button type="button" class="btn btn-dark btn-lg btn-block submit">Submit</button>
    `;
    
    DOMelements.box2.insertAdjacentHTML("beforeend", markup);
    
    
    DOMelements.radio = document.querySelector('.btn-group');
    change(options);
    
    
    
    
}
const change = function(list) {
    
    for (i=1; i< 5; i++) {
        
        document.getElementById(`op${i}`).firstChild.nodeValue=list[i-1];
    };
    DOMelements.radio = document.querySelector('.btn-group');

    
    
}

document.querySelector(DOMstrings.accept).addEventListener('click', () => {
        
    
    DOMelements.success.parentNode.removeChild(DOMelements.success);
    DOMelements.failure.parentNode.removeChild(DOMelements.failure);
    controll(false);


});









