import React from 'react';
import HeroSection from '../Components/HeroSection';
import ReviewsSection from '../Components/ReviewsSection';
import ResearchSection from '../Components/ResearchSection';
import GallerySection from '../Components/GallerySection';
import FeaturedCollegesSection from '../Components/FeaturedCollegesSection';

const Home = () => {
    return (
        <>
            <HeroSection />
            <FeaturedCollegesSection />
            <GallerySection />
            <ResearchSection />
            <ReviewsSection />
        </>
    );
};

export default Home;