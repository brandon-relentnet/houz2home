'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline';

const testimonials = [
    {
        name: 'Emily Davis',
        feedback: '“The kitchen remodel turned out absolutely stunning. Every detail, from the cabinetry to the fixtures, was thoughtfully designed and perfectly executed. I love how they managed to combine functionality with beauty. The kitchen has truly become the heart of our home.”',
    },
    {
        name: 'Michael Thompson',
        feedback: '“The entire renovation process felt easy and straightforward. From the initial design consultation to the finishing touches, everything was handled with care and precision. I really appreciated the personal touch and how they listened to exactly what we wanted.”',
    },
    {
        name: 'Sarah Wilson',
        feedback: '“I couldn’t believe how they transformed our outdated bathroom into a gorgeous, spa-like retreat. It’s not just about how it looks—though it’s beautiful—it’s also so much more functional and practical for our needs. I can’t stop showing it off!”',
    },
    {
        name: 'David Martinez',
        feedback: '“The attention to detail throughout the project was impressive. Every small touch felt intentional, and it shows in the final result. I felt like I was in good hands from start to finish, and now I have a living room I’m proud to host guests in.”',
    },
    {
        name: 'Lisa Brown',
        feedback: '“I had a vision for our master bedroom, but I wasn’t sure how to make it a reality. The design was absolutely spot-on, and the finished space feels cozy, elegant, and totally ‘us.’ They really took the time to understand what we wanted and made it happen.”',
    },
    {
        name: 'Chris Walker',
        feedback: '“I’ve had a few renovations done before, but this was by far the smoothest experience. The craftsmanship is top-notch, and it’s clear there’s a lot of pride and skill that goes into the work. The difference it’s made to our home is incredible.”',
    },
    {
        name: 'Natalie Green',
        feedback: '“What sets this experience apart is the thoughtfulness and care put into every step. I felt involved and heard throughout the process, and the results exceeded anything I imagined. It feels like my home, but better in every way.”',
    },
];

const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};

const Testimonials = () => {
    const [[page, direction], setPage] = useState([0, 0]);
    const testimonialIndex = wrap(0, testimonials.length, page);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <>
            <h2 className="text-center">Proof in Every Project</h2>
            <p className="text-center max-w-xl mx-auto mb-8">
                Don&apos;t just take our word for it &#8208; Hear what our Clients have to say.
            </p>
            <section className="relative w-full h-[60vh] overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-mantle pointer-events-none shadow-inner" />

                {/* The container that holds the testimonial */}
                <div className="relative w-full h-full flex items-center justify-center px-4 md:px-8 ">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={page}
                            className="absolute flex flex-col items-center justify-center text-center"
                            style={{ width: '100%', maxWidth: '600px' }} // Control content width here
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);
                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                        >
                            <ChatBubbleOvalLeftEllipsisIcon className="h-12 w-12 text-accent mb-6" />
                            <p className="text-xl md:text-2xl font-light italic mb-4 px-16">
                                {testimonials[testimonialIndex].feedback}
                            </p>
                            <span className="font-semibold">
                                {testimonials[testimonialIndex].name}
                            </span>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Buttons: place them at the section level so they are at the full width */}
                <div
                    className="absolute top-1/2 transform -translate-y-1/2 left-8 cursor-pointer"
                    onClick={() => paginate(-1)}
                >
                    <span className="text-3xl font-bold hover:opacity-80 transition-opacity">&#10094;</span>
                </div>
                <div
                    className="absolute top-1/2 transform -translate-y-1/2 right-8 cursor-pointer"
                    onClick={() => paginate(1)}
                >
                    <span className="text-3xl font-bold hover:opacity-80 transition-opacity">&#10095;</span>
                </div>
            </section>
        </>
    );
};

export default Testimonials;
