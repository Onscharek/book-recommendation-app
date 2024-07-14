import React from 'react';
import { useSelector } from 'react-redux';
import './css/cards.css';
import './css/baground.css';
import './css/hame.css';
import './css/profile.css';
import NavScroll from '../compunents/nav bar/nav';
import {  Link } from 'react-router-dom';


const Profile = () => {
    const { user } = useSelector(state => state.user);
    const { isAuth, user: loggedInUser } = useSelector(state => state.user);


    if (!user) {
        return <div>Loading...</div>; // or handle redirect or error
    }

    // Replace the videoId with the one from your YouTube link
    const videoId = 'SKVcQnyEIT8'; // Extracted from your YouTube link

    return (
        <div>
            <NavScroll />
            <img className='books22' src="https://i.pinimg.com/originals/67/18/22/671822c2f63dd5f65d8fd15c9710420b.jpg" alt="books" style={{width:'100%',marginTop:'0%', marginRight:'50%', opacity: '0.5' }} />

            <div style={{ marginTop: '1%' }}>
                <div className="square-box3"></div>
                <div className="square-box4"></div> 
                <div className="square-box"></div>
                <div className="square-box2"></div>


                <h1 className='name' style={{backgroundColor:'rgba(255, 255, 255, 0.2)',marginRight:'30%',marginLeft:'30%',marginTop:'7%'}}>Welcome, {user.name}!</h1>

                <div className="video-container"> 
                    <iframe className='vidd'
                        width="560" 
                        height="315" 
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&mute=1`}  // Update the src attribute here
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        title="YouTube video"
                    ></iframe>
                </div>
            </div>
            <p style={{marginTop:'2%',fontSize:'15px',fontWeight:'bold',marginLeft:'5%',marginRight:'5%',backgroundColor:'rgba(220, 147, 107, 0.6)'}}>Discover, download, and get into the world of books with with Book's Paradise. Whether you're searching for the latest bestsellers, timeless classics, or niche reads, our app is your gateway to literary exploration. Personalized recommendations cater to your tastes, while seamless downloading ensures your favorite titles are always at your fingertips, ready to be enjoyed offline. Start your reading journey today with Book's Paradise, where every page turns into a new adventure.</p>
            <div class="container-button"style={{marginLeft:'45%'}}>
            <Link as={Link} to={isAuth && loggedInUser ? `/home/${loggedInUser._id}` : "/home"} style={{ textDecoration: 'none', color: 'inherit' }}>

            <button class="buttonn1">Home</button>
            </Link>
            </div>
        </div>
    );
};
export default Profile; 