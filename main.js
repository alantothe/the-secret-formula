let userInput = document.querySelector("#userinput")
let submitButton = document.querySelector("#submitButton")

form1.addEventListener('submit', function(event){
    alert(userInput.value)
})



/////////////Build a Sandwich

//! Query Selector
//! Bread
let white = document.querySelector("#white")
let wheat = document.querySelector("#wheat")
let wrap = document.querySelector("#wrap")

let whiteBread = document.querySelector("#white")
let wheatBread = document.querySelector("#wheat")
let wrapBread = document.querySelector("#wrap")


//! Meat 
let turkey = document.querySelector("#turkey")
let ham = document.querySelector("#ham")
let chicken = document.querySelector("#chicken")
let roastBeef = document.querySelector("#roast-beef")

let turkeyCheckBox = document.querySelector("#turkey")
let hamCheckBox = document.querySelector("#ham")
let chickenCheckBox = document.querySelector("#chicken")
let roastBeefCheckBox = document.querySelector("#roast-beef")

//! Cheese 
let american = document.querySelector("#american")
let pepperJack = document.querySelector("#pepper-jack")
let provolone = document.querySelector("#provolone")
let swiss = document.querySelector("#swiss")

let americanCheckBox = document.querySelector("#american")
let pepperJackCheckBox = document.querySelector("#pepper-jack")
let provoloneCheckBox = document.querySelector("#provolone")
let swissCheckBox = document.querySelector("#swiss")

//! Toppings
let avocado = document.querySelector("#avocado")
let lettuce = document.querySelector("#lettuce")
let tomato = document.querySelector("#tomato")
let onions = document.querySelector("#onions")
let pickles = document.querySelector("#pickles")
let roastedPeppers = document.querySelector("#roasted-peppers")

let avocadoCheckBox = document.querySelector("#avocado")
let lettuceCheckBox = document.querySelector("#lettuce")
let tomatoCheckBox = document.querySelector("#tomato")
let onionsCheckBox = document.querySelector("#onions")
let picklesCheckBox = document.querySelector("#pickles")
let roastedPeppersCheckBox = document.querySelector("#roasted-peppers")



//! 



//! Event Listener 

form.addEventListener('submit', function(event){
    event.preventDefault();
    
    

    
//! Bread
    let breadType = ""

    if (whiteBread.checked === true){
        breadType = "White"
        
    }
    else if (wheatBread.checked === true){
        breadType = "Wheat"
        
    }
    else if (wrapBread.checked === true){
        breadType = "Wrap"
        
    }
    console.log("Bread: " + breadType)
//! Meat

    let meatTotal = []
    let cheeseTotal = []
    let toppingsTotal = []
    console.log("Meat: ")
   
   if (turkey.checked === true){
        console.log("Turkey: " + turkeyCheckBox.checked)
        meatTotal.push("Turkey")
    }
   if (ham.checked === true){
    console.log("Ham: " + hamCheckBox.checked)
    meatTotal.push("Ham")
    }
   if (chicken.checked === true){
    console.log("Chicken Cutlet: " + chickenCheckBox.checked)
    meatTotal.push("Chicken Cutlet")
}
    if (roastBeef.checked === true){
    console.log("Chicken Cutlet: " + roastBeefCheckBox.checked)
    meatTotal.push("Cutlet Cutlet")
}
// Cheese 
    console.log("Cheese")

    if (american.checked === true){
        console.log("American: " + americanCheckBox.checked)
        cheeseTotal.push("American")
    }
   if (pepperJack.checked === true){
    console.log("Pepper Jack: " + pepperJackCheckBox.checked)
    cheeseTotal.push("Pepper Jack")
    }
   if (provolone.checked === true){
    console.log("Provolone: " + provoloneCheckBox.checked)
    cheeseTotal.push("Provolone")
}
    if (swiss.checked === true){
    console.log("Swiss: " + swissCheckBox.checked)
    cheeseTotal.push("Swiss")
}

    console.log("Toppings")

    if (avocado.checked === true){
        console.log("Avocado: " + americanCheckBox.checked)
        toppingsTotal.push("Avocado")
    }
   if (lettuce.checked === true){
    console.log("Lettuce: " + lettuceCheckBox.checked)
    toppingsTotal.push("Lettuce")
    }
   if (tomato.checked === true){
    console.log("Tomato: " + tomatoCheckBox.checked)
    toppingsTotal.push("Tomato")
}
    if (onions.checked === true){
    console.log("Onions: " + onionsCheckBox.checked)
    toppingsTotal.push("Onions")
}
    if (pickles.checked === true){
    console.log("Pickles: " + picklesCheckBox.checked)
    toppingsTotal.push("Pickles")
    }
    if (roastedPeppers.checked === true){
        console.log("Roasted Peppers: " + roastedPeppersCheckBox.checked)
        toppingsTotal.push("Roasted Peppers")
        } 
   

    let alertObject = {
        Bread: breadType,
        Meat: meatTotal, 
        Cheese: cheeseTotal,
        Toppings: toppingsTotal
    }


    

    console.log(alertObject)

    alert(`Thank you for your order!
    \nBelow are the Ingredients you selected for your Sandwich
    \nBread: ${alertObject.Bread}
    \nMeats: ${alertObject.Meat}
    \nCheese: ${alertObject.Cheese}
    \nToppings: ${alertObject.Toppings}
    `)

    
    

})


//! Haircut Appointment Scheduler

//! Query Selector

let userName = document.querySelector("#userName")
let barber = document.querySelector("#barber")
let date = document.querySelector("#date")
let longHair = document.querySelector("#longHair")
let shortHair = document.querySelector("#shortHair")
let longHairCheckbox = document.querySelector("#longHair")
let shortHairCheckbox = document.querySelector("#shortHair")

let submitButtonHair = document.querySelector("#submitButtonHair")



//! Event Listener

form3.addEventListener('submit', function(event){
    event.preventDefault()

    userName.value
    barber.value
    date.value





    let userNameString = userName.value 
    let dateString = date.value

    let appointmentObject = {
        Name: userName.value,
        Barber: barber.value, 
        Time:  date.value,
        HairLength: length
        
        


    }


    if (userNameString.length != 0 && dateString.length != 0 ){
        console.log("yo")
        alert(`Your Appointment is Confirmed!
        \nName: ${userName.value}
        \nBarber: ${barber.value}
        \nDate: ${date.value}
        \nHair Length: ${appointmentObject.HairLength}
        `)

    }

    else {
        alert("ERROR Fill out all boxes")
    }
   

    length = ""

    if (longHair.checked === true){
        console.log("Long Length: " + longHairCheckbox.checked)
        length = "Long Hair"
    }
   if (shortHair.checked === true){
    console.log("Short Length: " + shortHairCheckbox.checked)
    length = "Short Hair"
    }





    
    console.log(appointmentObject)


    
})


// Create Account

//! Query Selector

let userNameAccount = document.querySelector("#username-account")
let email = document.querySelector("#email")
let password1 = document.querySelector("#password1")
let password2 = document.querySelector("#password2")

//! Event Listener

form4.addEventListener('submit', function(event){
    event.preventDefault()

    userNameAccountString = userNameAccount.value
    emailString = email.value
    password1String = password1.value
    password2String = password2.value
   
    userPassword = ""
    let accountObject = {
        UserName: userNameAccount.value,
        Email: email.value,
        PasswordMatch : false
    }



if (userNameAccountString != 0 && emailString != 0 && password1String != 0 &&password2String != 0  ){
    if( password1String === password2String){
        accountObject.PasswordMatch = true
        userPassword = password1String
        alert(`You have created an Account!
        \nUsername: ${userNameAccount.value}
        \nEmail: ${email.value}
        \nPassword Match: ${accountObject.PasswordMatch}
        `)
        console.log(accountObject)
        

    }
    else{
        alert("ERROR Passwords DO NOT MATCH")
        console.log(accountObject)
    }
}

else{
    alert ("ERROR Fill in all boxes!")
}

})








