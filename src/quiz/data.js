import AsyncStorage from "@react-native-async-storage/async-storage";

export const levelsData = [
    { id: 1, unlocked: true },
    { id: 2, unlocked: false },
    // Add more levels as needed
];

export const questionsData = [
    {
        id: 1,
        question: " Which of the following solutions will have the highest boiling point..?",
        options: {
            a: "1% glucose in water",
            b: "1% Sucrose in water",
            c: "1% NaCl in water ",
            d: "1% CaCly in water"
        },
        answer: "1% CaCly in water"
    },
    {
        id: 2,
        question: " Sea water is converted into fresh water by using the phenomenon of..?",
        options: {
            a: "Plasmolysis",
            b: "Sedimentation",
            c: "Reverse osmosis",
            d: "Diffusion"
        },
        answer: "Reverse osmosis"
    },
    {
        id: 3,
        question: " When glycerine is added to a litre of water, which of the following is observed..?",
        options: {
            a: "Water evaporates more easily sdfgjdsfh skdjfhksdjfb ksdfhkdjshf ksdhfjksdfh k,sdjfhjksdfh ksdjfhkjsdfh ksdfhsdkjfh ,ksdfjgsdiuf jhdgsha asjdgsg mkasjddf kasjdfhukeafg ,sdfh",
            b: "The temperature of water increases ",
            c: "The freezing point of water is lowered",
            d: "The viscosity of water is lowered"
        },
        answer: "The freezing point of water is lowered"
    },
    {
        id: 4,
        question: " THE CHEMICAL FORMULA OF ( Sulfur dioxide ) IS..?",
        options: {
            a: "SO<sub>2</sub>",
            b: "SO<sub>2</sub>H<SUB>3</SUB>",
            c: "SO<sub>2</sub>H<sub>4</sub>",
            d: "SO<sub>4</sub>"
        },
        answer: "SO<sub>2</sub>"
    },
    {
        id: 5,
        question: " THE CHEMICAL FORMULA OF ( Glycerin ) IS..?",
        options: {
            a: "C<sub>3</sub>H<sub>2</sub>O<sub>3</sub>",
            b: "C<sub>3</sub>H<sub>8",
            c: "C<sub>3</sub>H<sub>4</sub>O<sub>3</sub>",
            d: "C<sub>3</sub>H<sub>8</sub>O<sub>3</sub>"
        },
        answer: "C<sub>3</sub>H<sub>8</sub>O<sub>3</sub>"
    },
    {
        id: 6,
        question: " THE CHEMICAL FORMULA OF ( Barium nitrate ) IS..?",
        options: {
            a: "Ba<sub>2</sub>SO<sub>3</sub>",
            b: "Ba(NO<sub>3</sub>)<sub>2</sub>",
            c: "Ba(NO<sub>3</sub>)<sub>3</sub>",
            d: "Ba(NO<sub>4</sub>)<sub>2</sub>"
        },
        answer: "Ba(NO<sub>3</sub>)<sub>2</sub>"
    },
    {
        id: 7,
        question: " THE SYMBOL ( Sb ) STAND FOR..?",
        options: {
            a: "Strontium",
            b: "Silver",
            c: "Sulfur",
            d: "Antimony"
        },
        answer: "Antimony"
    },
    {
        id: 8,
        question: " THE SYMBOL ( La ) STAND FOR..?",
        options: {
            a: "Tellurium",
            b: "Lanthanum",
            c: "Lead",
            d: "Lawrencium"
        },
        answer: "Lanthanum"
    },
    {
        id: 9,
        question: " THE SYMBOL ( Ce ) STAND FOR..?",
        options: {
            a: "Caesium",
            b: "Calcium",
            c: "Cerium",
            d: "Carbon"
        },
        answer: "Cerium"
    },
    {
        id: 10,
        question: " THE CHEMICAL FORMULA OF( Sulfuric acid )IS..?",
        options: {
            a: "H<sub>2</sub>O<SUB>4</SUB>",
            b: "H<sub>2</sub>SO<SUB>3</SUB>",
            c: "H<sub>2</sub>SO<SUB>4</SUB>",
            d: "NON OF ABOVE"
        },
        answer: "H<sub>2</sub>SO<SUB>4</SUB>"
    }
];

// Function to save user's level and score to local storage
export const saveUserProgress = async (level, score) => {
    try {
        await AsyncStorage.setItem("userLevel", level.toString());
        await AsyncStorage.setItem(level.toString(), score.toString());
    } catch (error) {
        console.error("Error saving user progress to AsyncStorage", error);
    }
};

// Function to retrieve the user's level from local storage
export const getUserScore = async () => {
    try {
        const userLevel = await AsyncStorage.getItem("userLevel");
        const userScore = [];
        if (userLevel && userLevel !== undefined) {
            for (let i = userLevel; i > 0; i--) {
                userScore[i - 1] = await AsyncStorage.getItem(i.toString());
            }
            return userScore;
        } else {
            return 0;
        }
    } catch (error) {
        console.error("Error retrieving user level from AsyncStorage", error);
        return 0; // Default to level 1
    }
};

// Function to retrieve the user's level from local storage
export const getUserLevel = async () => {
    try {
        const userLevel = await AsyncStorage.getItem("userLevel");
        return userLevel ? parseInt(userLevel, 10) : 1; // Default to level 1
    } catch (error) {
        console.error("Error retrieving user level from AsyncStorage", error);
        return 1; // Default to level 1
    }
};

// Function to check if a level is unlocked
export const isLevelUnlocked = async (level) => {
    const userLevel = await getUserLevel();
    return level <= userLevel;
};