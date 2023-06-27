import React, { useEffect } from 'react';
import { Header, AllPageBanner, Footer } from "../components";
import { NavLink } from "react-router-dom";
import * as Images from "../assets";
import { InputBoxcmp } from '../Element/vendercom/InputBox';
import { Dropdown } from '../Element/vendercom/Dropdown';
import SuperactiveOwnerForm from '../Element/SuperActiveOwner/SuperactiveOwnerForm';
import SuperActiveListing from '../Element/SuperActiveOwner/SuperActiveListing';
import SuperActiveOwner from '../Element/SuperActiveOwner/SuperActiveOwner';
import Multiplesection_footer from '../Element/Multiplesection_footer';

const SuperactiveOwner = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const listing = [
        { name: 'A powerful new marketing channel' },
        { name: 'New joiners for your club' },
        { name: 'Additional revenue' },
        { name: 'No exclusivity required' },
        { name: 'Free to list your gym' }
    ]
    return (
        <>
            <Header Logo={Images.logo} Hamburger={Images.menu} />

          
            <SuperActiveOwner Images={Images.gym_owner}/>
            <SuperactiveOwnerForm Images={Images.gym_owner_form} />


            <SuperActiveListing listing={listing} Images={Images.gym_owner_list} />

            <Multiplesection_footer/>
        </>
    )
}

export default SuperactiveOwner
