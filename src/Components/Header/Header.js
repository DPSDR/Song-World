import React from 'react';
import CustomLink from '../../CustomLink/CustomLink';

const Header = () => {

    return (
        <div className="flex sm:justify-center space-x-4 py-4 text-xl bg-blue-300">
            <CustomLink className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900" to='/'>
                Home</CustomLink>
            <CustomLink className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900" to='/album'>
                Album</CustomLink>
            <CustomLink className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900" to='/listen'>
                Listen</CustomLink>
            <CustomLink className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900" to='/login'>
                LogIn</CustomLink>
            <CustomLink className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900" to='/signup'>
                SignUp</CustomLink>
        </div>
    );
};

export default Header;