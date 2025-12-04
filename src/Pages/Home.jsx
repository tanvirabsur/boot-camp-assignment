import React, { use } from 'react';
import HeroSection from '../Components/HeroSection';
import ReviewsSection from '../Components/ReviewsSection';
import ResearchSection from '../Components/ResearchSection';
import GallerySection from '../Components/GallerySection';
import FeaturedCollegesSection from '../Components/FeaturedCollegesSection';
import useFetch from '../Hooks/useFetch';
import Loading from '../Components/Loading';
import { AuthContext } from '../Hooks/AuthProvider';

const Home = () => {
    const { data } = useFetch('/dataOfclg.json')
    const {user} = use(AuthContext)
    console.log(user);
    
    if (!data) return <Loading />;

    return (
        <>
            <HeroSection />
            <FeaturedCollegesSection />
            <GallerySection galleryImages={data.galleryImages} />
            <ResearchSection researchPapers={data.researchPapers} />
            <ReviewsSection reviews={data.reviews} />
        </>
    );
};

export default Home;