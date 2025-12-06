import React from 'react';
import HeroSection from '../Components/HeroSection';
import ReviewsSection from '../Components/ReviewsSection';
import ResearchSection from '../Components/ResearchSection';
import GallerySection from '../Components/GallerySection';
import FeaturedCollegesSection from '../Components/FeaturedCollegesSection';
import useFetch from '../Hooks/useFetch';
import Loading from '../Components/Loading';

const Home = () => {
    const { data } = useFetch('http://localhost:8080/colleges')

    if (!data) return <Loading />;

    return (
        <>
            <HeroSection />
            <FeaturedCollegesSection colleges={data[0].colleges} />
            <GallerySection galleryImages={data[0].galleryImages} />
            <ResearchSection researchPapers={data[0].researchPapers} />
            <ReviewsSection reviews={data[0].reviews} />
        </>
    );
};

export default Home;