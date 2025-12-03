import React from 'react';
import HeroSection from '../Components/HeroSection';
import ReviewsSection from '../Components/ReviewsSection';
import ResearchSection from '../Components/ResearchSection';
import GallerySection from '../Components/GallerySection';

const Home = () => {
    return (
        <>
            <HeroSection />
            <GallerySection />
            <ResearchSection />
            <ReviewsSection />
        </>
    );
};

export default Home;