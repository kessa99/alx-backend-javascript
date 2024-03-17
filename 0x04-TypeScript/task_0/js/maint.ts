interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "KIPRE",
    lastName: "Kessa",
    age: 20,
    location: "Abidjan"
}

const student2: Student = {
    firstName: "AGBEDI",
    lastName: "Debora",
    age: 23,
    location: "Lome"
}

const studentsList: Student[] = [student1, student2];
