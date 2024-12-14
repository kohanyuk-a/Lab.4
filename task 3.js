function ages(persons) {
    const lifespans = {};

    for (const person in persons) {
        console.log(persons[person]);
        console.log("person: ", person);
        const { born, died } = persons[person];
        lifespans[person] = died - born;
    }

    return lifespans;
}

const persons = {
    mao: { born: 1893, died: 1976 },
    gandhi: { born: 1869, died: 1948 },
    hirohito: { born: 1901, died: 1989 },
};

console.log(ages(persons));

