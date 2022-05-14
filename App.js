import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
//import  {db}  from './firebase.js';
//import { doc } from 'firebase/firestore/lite';
//import { database } from "firebase/database";
//import { getDatabase, ref, onValue} from "firebase/database";


function App() {

  const [posts, setPosts] = useState([
    {
      username: "pineappleHater",
       caption: "Bro pineapple on pizza is for losers! Ong!!!! I boutta chris ROCK anyone who puts that stuff on my za fr.",
        imageUrl: "https://i.ibb.co/x8cR5dr/IMG-3712.jpg"
    },
    {
      username: "pineappleLover",
       caption: "Oh Cousteau was right oh yeah amazing each flavor was totally unique but combined one flavor with another and something new was created",
        imageUrl: "https://i.ibb.co/Bw0v633/IMG-3713.jpg"
    },
    {
      username: "pineappleHater",
       caption: "Well, for one, it’s messy. People who don’t like pineapple on pizza will tell you it’s just too juicy. Also, the texture doesn’t match up with pizza. But mostly, they don’t like the way it tastes. And, they’d rather stick to the classics, like pepperoni or mushrooms.",
        imageUrl: "https://i.ibb.co/MGtsVDw/IMG-3714.jpg"
    },
    {
      username: "pineappleMAGA",
       caption: "Not to mention, since when does fruit belong on a pizza? The only fruit topping that goes with pizza is tomatoes since pizza sauce is made from tomatoes. And, it’s true that we don’t typically see fruit on pizza. Vegetables, yes, but not fruit. For example, would you put watermelon or peaches on pizza? Definitely not.",
        imageUrl: "https://i.ibb.co/KVKxTWF/IMG-3715.jpg"
    },
    {
      username: "pineappleMAGA",
       caption: "Bro check out my pineapple game! Yeah, idrc about that divide stuff man, i just want to be here for the JWID hype 100%",
        imageUrl: "https://i.ibb.co/NmPcRyG/IMG-3716.jpg"
    },


    {
      username: "pineappleHater",
       caption: "Despite its rough exterior, the pineapple is a symbol of welcome and hospitality. This dates from the 17th century, when American colonists braved dangerous trade routes to import pineapple from the Caribbean Islands and share it with guests. Pineapple is also quite hospitable to your immune system: One cup has more than 100% of your daily value of cell-protecting, collagen-making vitamin C.",
        imageUrl: "https://i.ibb.co/4PCNqt2/IMG-3717.jpg"
    },
    {
      username: "pineappleLover",
       caption: "So, what do you think? To pineapple or not to pineapple? We’ll let you be the judge.",
        imageUrl: "https://i.ibb.co/Cz9b6Q7/IMG-3718.jpg"
    },
    {
      username: "pineappleHater",
       caption: "Lastly, anti-pineapple people think pineapple and cheese should never mix. As Buzzfeed points out in their recent pizza debate, this combination doesn’t work. You don’t see anyone eating a slice of cheese with pineapple chunks. Ever. But, does that mean pineapple shouldn’t go on a pizza?",
        imageUrl: "https://i.ibb.co/rwBMtMQ/IMG-3719.jpg"
    },


    {
      username: "pineappleHater",
       caption: "At some point in the never-ending debate over whether pineapple belongs on pizza, the haters, maybe with tongues pressed against cheek, invoked Godwin's Law. Yep, they compared those who like the tropical fruit on pies to Hitler. One said they were worse than Hitler. The comparison would become a common insult, occasionally even flung back at the snobs who turn their nose up at a pineapple-topped pizza.",
        imageUrl: "https://i.ibb.co/bQqxVss/IMG-3720.jpg"
    },
    {
      username: "pineappleLover",
       caption: "It’s just that some people find it to be **AWFUL **but it really isn't, if anyone has tried it, it’s good. It’s just that everyone thinks it’s pretty gross because of the sweetness that’s on pizza, and how it’s combining with the tomato sauce and cheese. I recommend people to try this pizza. If you don't like I respect that!",
        imageUrl: "https://i.ibb.co/Zg55rnw/IMG-3721.jpg"
    },
    {
      username: "pineappleHater",
       caption: "It violates the fundamental rules of food combinations, as created by the God of Food, Gordon Ramsay.",
        imageUrl: "https://i.ibb.co/ch3CHBg/IMG-3722.jpg"
    },

    {
      username: "pineappleHater",
       caption: "It’s not traditional. Pizza has traditionally either been red or white sauce, with cheese. Vegetables and meats are standard too. But fruit is a recent idea. Pizza purists will refuse it just on principle.",
        imageUrl: "https://i.ibb.co/R4tPgF9/IMG-3723.jpg"
    }

  ]);


  //db = getDatabase();
  // useEffect runs a piece of code based on a specific condition
  //useEffect(() => {
    // this is where the code runs
  //  db.collection('posts').onSnapshot(snapshot => {
      //id: doc.id,
      //post: doc.data()
  //    setPosts(snapshot.docs.map(doc => doc.data()));
  //  })
  //}, []);

  

  return (


    <div className="App">


      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://i.ibb.co/Pgyn1qb/jwidLogo.png"
          width="10%"
          height="10%"
          alt="InstagramLogo"
          />

      </div>
      {/*Header*/}

      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }


      
      {/*Post*/}
      {/*Post*/}
    
    </div>


  );
}

export default App;
