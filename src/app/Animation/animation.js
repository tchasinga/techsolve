
// this will  be my animation file using framer motion
export const containerVariant = (delay = 0.5) => ({
    offscreen:{
        opacity: -0,
        y: 50,
    },
    onscreen : {
        opacity: 10,
        y: 0,
        transition: {
            delay: delay,
            duration: 4.5,
            type: "spring",
        }
    }
})

export const textVariantReveals = (delay = 0.5) => ({
    offscreen: {
        opacity: 0,
        y: 50,
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            delay: delay,
            duration: 1.5,
            type: "spring",
            stiffness: 100,
            damping: 20,
        }
    }
});



export const ImageOne = (delay = 0.5) => ({
    offscreen:{
        opacity: 0,
        y: 50,
    },
    onscreen : {
        opacity: 4,
        y: 0,
        transition: {
            delay: delay,
            duration: 4.5,
            type: "spring",
        }
    }
})

export const ImageTwo = (delay = 1) => ({
    offscreen:{
        opacity: 0,
        y: 50,
    },
    onscreen : {
        opacity: 4,
        y: 0,
        transition: {
            delay: delay,
            duration: 4.5,
            type: "spring",
        }
    }
})


export const ImageThree = (delay = 1.5) => ({
    offscreen:{
        opacity: 0,
        y: 50,
    },
    onscreen : {
        opacity: 4,
        y: 0,
        transition: {
            delay: delay,
            duration: 4.5,
            type: "spring",
        }
    }
})



