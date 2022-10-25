import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {

    return (
        <div>
            <h1 className='text-2xl mt-5'>Here is the collection of Bangla Band Albums</h1>
            <Link to='/album'><button className='bg-sky-500/100 p-3 rounded-lg transition duration-150 ease-in-out text-white font-bold mt-5'>Load All Albums</button></Link>
        </div>
    );
};

export default Home;