import React from "react";
import { NavBar } from "./navbar/navbar";
import { HomeDiscover } from "./home-discover/home-discover";
import { HomeCategories } from "./home-categories/home-categories";
import { HomeCollection } from "./home-collection/home-collection";
import { Footer } from "./footer/footer";
export function Home(){
    return(
        <div>
            <NavBar/>
            <HomeDiscover/>
            <HomeCategories/>
            <HomeCollection/>
            <Footer/>
        </div>
    )
}