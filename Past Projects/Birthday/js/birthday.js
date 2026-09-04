
// Create an app that gives hobbie/activite recommendations based on your birthday month.
// Allow for the user to input their birthday <-- input
//have a click event <-- that trigeers the result
// will need several conditionals
//dont forget an else if they do not enter a birthday
//consider georgrapht and how the input is placed for birthday dd/mm/yy or mm/dd/yy 
// Use .innerText to show their answer on the page or an alert 

document.querySelector("#Jawn").addEventListener('click',getBirthday)
 
function getBirthday(){
let dob = document.querySelector('#dateOfBirth').value
const help = document.querySelector('#help').innerText = dob
const month = help.split('-')[1]
const day = help.split('-')[2]
console.log(month,day)  
if((month == 1 && day >=1 ) || (month == 1 && day <= 31)){
    document.querySelector('#result').innerText = "Hinata Shoyo(Haikyu!!)& Gaara(Naruto)"
}else if ((month == 2 && day >=1 ) || (month == 2 && day <= 28) ){
    //feb -"take a cooking class or go to a comedy show"
    document.querySelector('#result').innerText = "Nico Robin(One Piece) & Giyu Tomioka(Demon Slayer)"
}else if ((month  == 3 && day >= 1 ) || (month == 3  && day <= 31 ) ){
    // march "visit a botanical garden or plan an escape room"
     document.querySelector('#result').innerText = "Sailor Moon(Sailor Moon) & Eren Yeager(Attack on Titan)"
}else if ((month  == 4 && day >= 1 ) || (month == 4  && day <= 30 ) ){
    //april "have a picnic or visit a cat cafe"
     document.querySelector('#result').innerText = "Bakugo (My Hero Academia) & Goku(Dragon Ball)"
}else if ((month == 5 && day >= 1 ) || (month == 5  && day <= 31 ) ){
    //may " go on a hike or plan a roas trip"
     document.querySelector('#result').innerText = "Luffy (One Piece) & Gohan (Dragon Ball)"
}else if ((month == 6 && day >= 1 ) || (month == 6  && day <= 30 ) ){
    //june " host a bbq or book a  cruise"
     document.querySelector('#result').innerText = "Nami (One Piece) & Itachi Uchiha (Naruto)"
}else if ((month == 7 && day >= 1 ) || (month == 7  && day <=  31) ){
    //july " go to a concert or beach day"
     document.querySelector('#result').innerText = "Izuku Midoriya (My Hero Academia) & Tanjiro Kamado (Demon Slayer)"
}else if ((month == 8 && day >= 1 ) || (month == 8  && day <= 31 ) ){
    //august " night market or go camping"
     document.querySelector('#result').innerText = "Nobara Kugisaki (Jujutsu Kaisen) & Vegeta (Dragon Ball)"
}else if ((month == 9 && day >= 1 ) || (month == 9  && day <= 30 ) ){
    //september "apple picking or bonfire night"
     document.querySelector('#result').innerText = "Kakashi Hatake (Naruto) & Hange Zoe from (Attack on Titan)"
}else if ((month == 10 && day >= 1 ) || (month == 10  && day <= 31 ) ){
    //october " murder mystery dinner or pottery class"
     document.querySelector('#result').innerText = "Naruto Uzumaki (Naruto) & Satoru Gojo (Jujutsu Kaisen)"
}else if ((month == 11 && day >= 1 ) || (month == 11  && day <= 30 ) ){
    //november "host a potlock or axe throwing"
     document.querySelector('#result').innerText = "Roronoa Zoro (One Piece) & Sanji (One Piece)"
}else if ((month == 12 && day >= 1 ) || (month == 12  && day <= 31 ) ){
    //december "staycation or host a dodgeball night"
     document.querySelector('#result').innerText = "Levi Ackerman (Attack on Titan) & Android 18 (Dragon Ball)"
}
}
