import React from 'react';

const HeroSection = () => {
    return (
        <section className="hero relative flex items-center justify-center min-h-screen">
            <video src="/fallingcoffeebeans.mp4" loop autoPlay muted className="hero-video absolute w-full h-full object-cover top-0 left-0"></video>
            <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full p-5 gap-10">
                <header className="header">
                    <h1 className="text-4xl font-semibold text-white">
                        Steampunk Cyber Cafe
                    </h1>
                </header>
                <section className="description">
                    <p className="text-xl text-white">Experience the best coffee in town with freshly brewed beans and a variety of delicious pastries.</p>
                </section>
            </div>
        </section>
    );
};

export default HeroSection;