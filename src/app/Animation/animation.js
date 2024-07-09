
// this will  be my animation file using framer motion
export const containerVariant = (delay = 0.5) => ({
    offscreen: {
        opacity: -0,
        y: 50,
    },
    onscreen: {
        opacity: 10,
        y: 0,
        transition: {
            delay: delay,
            duration: 2.5,
            type: "spring",
        }
    }
})

export const textVariantReveals = (delay = 1) => ({
    offscreen: {
        opacity: 0,
        y: 0,
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            delay: delay,
            duration: 3.5,
            type: "spring",
            stiffness: 100,
            damping: 20,
        }
    }
});


export const textVariantRevealser = (delay = 1) => ({
    offscreen: {
        opacity: 0,
        y: 0,
    },
    onscreen: {
        opacity: 1,
        y: 20,
        transition: {
            delay: delay,
            duration: 2.5,
            type: "spring",
            stiffness: 100,
            damping: 20,
        }
    }
});


export const ImageOne = (delay = 0.5) => ({
    offscreen: {
        opacity: 0,
        y: 50,
    },
    onscreen: {
        opacity: 4,
        y: 0,
        transition: {
            delay: delay,
            duration: 2.5,
            type: "spring",
        }
    }
})

export const ImageTwo = (delay = 1) => ({
    offscreen: {
        opacity: 0,
        y: 50,
    },
    onscreen: {
        opacity: 4,
        y: 0,
        transition: {
            delay: delay,
            duration: 2.5,
            type: "spring",
        }
    }
})


export const ImageThree = (delay = 1.5) => ({
    offscreen: {
        opacity: 0,
        y: 50,
    },
    onscreen: {
        opacity: 4,
        y: 0,
        transition: {
            delay: delay,
            duration: 2.5,
            type: "spring",
        }
    }
})



