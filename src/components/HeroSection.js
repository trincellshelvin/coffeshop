import React from 'react';
import Button from './Button';
import styles from './HeroSection.module.css';

const HeroSection = () => (
    <section className={`${styles.hero} flex items-center justify-center min-h-screen`}>
        <video 
            src="/fallingcoffeebeans.mp4" 
            loop 
            autoPlay 
            muted 
            className={`${styles.heroVideo} absolute w-full h-full object-cover top-0 left-0`} 
        ></video>
        <div className={`${styles.heroContainer} relative z-10 flex flex-col items-center justify-center text-center w-full h-full p-5 gap-10`}>
            <header className="header">
                <h1 className={`${styles.heroTitle} text-4xl font-semibold text-white`}>
                    Steampunk Cyber Cafe
                </h1>
            </header>
            <section className="description">
                <p className={`${styles.heroSubtitle} text-xl text-white`}>Experience the best hot beverages, small eats in town with freshly brewed beans or tea and a variety of delicious pastries.</p>
            </section>
        </div>
    </section>
);

const HeroSectionWithButton = ({ buttonLabel, handleCtaClick }) => (
    <section className={`${styles.hero} flex items-center justify-center min-h-screen`}>
        <video 
            src="/fallingcoffeebeans.mp4" 
            loop 
            autoPlay 
            muted 
            className={`${styles.heroVideo} absolute w-full h-full object-cover top-0 left-0`} 
        ></video>
        <div className={`${styles.heroContainer} relative z-10 flex flex-col items-center justify-center text-center w-full h-full p-5 gap-10`}>
            <header className="header">
                <h1 className={`${styles.heroTitle} text-4xl font-semibold text-white`}>
                    Steampunk Cyber Cafe
                </h1>
            </header>
            <section className="description">
                <p className={`${styles.heroSubtitle} text-xl text-white`}>Experience the best coffee in town with freshly brewed beans and a variety of delicious pastries.</p>
                <Button label={buttonLabel} handleClick={handleCtaClick} />
            </section>
        </div>
    </section>
);

export { HeroSection, HeroSectionWithButton };
